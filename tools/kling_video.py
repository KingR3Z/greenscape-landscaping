"""
kling_video.py — Standalone Kling 3.0 Video Generation Tool

Generate AI videos from images or text prompts using Kling 3.0 via UseAPI.net.
Designed for website hero sections, product demos, background videos, and animations.

Setup:
    1. Get a UseAPI.net account: https://useapi.net
    2. Link your Kling AI account (klingai.com) to UseAPI
    3. Create tools/.env with USEAPI_TOKEN and USEAPI_KLING_EMAIL
    4. pip install requests python-dotenv

Usage (CLI):
    # Check your Kling credit balance
    python3 tools/kling_video.py --check-balance

    # Generate video from an image (hero section background)
    python3 tools/kling_video.py --image path/to/hero.png --prompt "Slow cinematic zoom with particles floating" --output public/videos/hero.mp4

    # Generate video from text only (no source image)
    python3 tools/kling_video.py --text --prompt "Abstract flowing gradient, dark to purple" --output public/videos/bg.mp4 --aspect 16:9

    # Generate with start + end frames (morphing transition)
    python3 tools/kling_video.py --image start.png --end-image end.png --prompt "Smooth transition" --output public/videos/transition.mp4

    # Pro mode (higher quality, costs more credits)
    python3 tools/kling_video.py --image hero.png --prompt "Slow zoom" --output hero.mp4 --mode pro

Usage (Python import):
    from tools.kling_video import generate_from_image, generate_from_text, generate_from_frames

    # Image to video
    video_path = generate_from_image("public/hero.png", "Slow cinematic zoom", "public/videos/hero.mp4")

    # Text to video
    video_path = generate_from_text("Abstract gradient flow", "public/videos/bg.mp4", aspect_ratio="16:9")

    # Start + end frame
    video_path = generate_from_frames("start.png", "end.png", "Morph transition", "public/videos/morph.mp4")

Kling 3.0 Features:
    - Native audio generation (dialogue, SFX, ambient)
    - 3-15 second clips
    - 9:16 (vertical), 16:9 (landscape), 1:1 (square)
    - Image-to-video, text-to-video, start+end frame animation
    - Standard mode (fast, cheaper) and Pro mode (higher quality)
"""

import os
import sys
import time
import json
import requests
from pathlib import Path
from dotenv import load_dotenv

# ─── Configuration ──────────────────────────────────────────────────────────

# Load .env from tools/ directory, then project root, then parent
for env_path in [
    Path(__file__).parent / ".env",
    Path(__file__).parent.parent / ".env",
    Path(__file__).parent.parent / ".agent" / ".env",
]:
    if env_path.exists():
        load_dotenv(env_path)
        break

USEAPI_TOKEN = os.getenv("USEAPI_TOKEN")
USEAPI_KLING_EMAIL = os.getenv("USEAPI_KLING_EMAIL")
BASE_URL = "https://api.useapi.net/v1/kling"

# ─── Status Codes ───────────────────────────────────────────────────────────
# UseAPI.net status codes for Kling tasks
STATUS_SUBMITTED = 5
STATUS_PROCESSING = 10
STATUS_SUCCESS = 99
FAILED_STATUSES = {6, 7, 9, 50, 53, 54, 58}
# 6  = failed (change prompt)
# 7  = failed (sensitive words detected)
# 9  = failed (change prompt)
# 50 = failed (change prompt)
# 53 = failed (account doesn't support feature)
# 54 = failed (free plan queue busy)
# 58 = failed (plan queue busy — wait or upgrade)


# ─── Internal Helpers ───────────────────────────────────────────────────────

def _headers(content_type="application/json"):
    if not USEAPI_TOKEN:
        raise Exception(
            "KLING_ERROR: USEAPI_TOKEN not set.\n"
            "Create tools/.env with:\n"
            "  USEAPI_TOKEN=your_token_here\n"
            "  USEAPI_KLING_EMAIL=your_kling_email\n"
            "Get your token at https://useapi.net"
        )
    h = {"Authorization": f"Bearer {USEAPI_TOKEN}"}
    if content_type:
        h["Content-Type"] = content_type
    return h


def _check_config():
    if not USEAPI_TOKEN:
        raise Exception("KLING_ERROR: USEAPI_TOKEN not set in .env")
    if not USEAPI_KLING_EMAIL:
        raise Exception("KLING_ERROR: USEAPI_KLING_EMAIL not set in .env")


def _upload_image(local_path):
    """Upload a local image to Kling's CDN. Returns the hosted URL."""
    _check_config()
    local_path = Path(local_path)

    if not local_path.exists():
        raise FileNotFoundError(f"Image not found: {local_path}")

    # Check file size — resize if over 4MB (UseAPI limit)
    file_size = local_path.stat().st_size
    if file_size > 4 * 1024 * 1024:
        print(f"  Warning: Image is {file_size / 1024 / 1024:.1f}MB (>4MB limit)")
        print(f"  Tip: Resize with: ffmpeg -i {local_path} -vf 'scale=1920:-1' resized.png")
        raise Exception(f"KLING_ERROR: Image too large ({file_size / 1024 / 1024:.1f}MB). Max 4MB. Resize first.")

    ext = local_path.suffix.lower()
    content_types = {".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".webp": "image/webp"}
    content_type = content_types.get(ext)
    if not content_type:
        raise Exception(f"KLING_ERROR: Unsupported format: {ext}. Use PNG, JPEG, or WebP.")

    with open(local_path, "rb") as f:
        image_data = f.read()

    url = f"{BASE_URL}/assets/?email={USEAPI_KLING_EMAIL}"
    r = requests.post(url, headers=_headers(content_type), data=image_data, timeout=120)
    r.raise_for_status()
    result = r.json()

    if "error" in result:
        raise Exception(f"KLING_ERROR: Upload failed: {result.get('error')}")

    image_url = result.get("url")
    if not image_url:
        raise Exception(f"KLING_ERROR: Upload OK but no URL returned: {json.dumps(result)[:200]}")

    print(f"  Uploaded: {local_path.name} -> Kling CDN")
    return image_url


def _extract_video_url(task_result):
    """Extract video URL from completed task. Tries watermark-free first."""
    works = task_result.get("works", [])
    if not works:
        return None

    work = works[0]
    work_id = work.get("workId")

    # Try watermark-free download
    if work_id:
        try:
            dl_url = f"{BASE_URL}/assets/download?email={USEAPI_KLING_EMAIL}&workIds={work_id}&fileTypes=MP4"
            r = requests.get(dl_url, headers=_headers(None), timeout=30)
            if r.status_code == 200:
                dl_result = r.json()
                cdn_url = dl_result.get("cdnUrl")
                if cdn_url and dl_result.get("status") == "success":
                    return cdn_url
        except Exception:
            pass

    # Fallback: preview URL (may have watermark on free plan)
    resource = work.get("resource", {})
    return resource.get("resource")


def _poll_task(task_id, max_polls=72, poll_interval=10):
    """Poll task until completion. Returns video URL or raises."""
    _check_config()

    for i in range(max_polls):
        time.sleep(poll_interval)

        # Retry transient errors
        for retry in range(3):
            try:
                url = f"{BASE_URL}/tasks/{task_id}?email={USEAPI_KLING_EMAIL}"
                r = requests.get(url, headers=_headers(None), timeout=30)
                r.raise_for_status()
                task_result = r.json()
                break
            except (requests.exceptions.Timeout, requests.exceptions.ConnectionError) as e:
                if retry < 2:
                    time.sleep(min(2 ** retry, 30))
                else:
                    raise Exception(f"KLING_ERROR: Polling failed after 3 retries: {e}")
            except requests.exceptions.HTTPError as e:
                code = e.response.status_code if e.response is not None else 0
                if code in [429, 500, 502, 503] and retry < 2:
                    time.sleep(min(2 ** retry, 30))
                else:
                    raise

        status = task_result.get("status", 0)
        status_name = task_result.get("status_name", "unknown")

        if status == STATUS_SUCCESS:
            video_url = _extract_video_url(task_result)
            if video_url:
                elapsed = (i + 1) * poll_interval
                print(f"  Done! Video generated in {elapsed}s")
                return video_url
            raise Exception("KLING_ERROR: Task succeeded but no video URL in response")

        elif status in FAILED_STATUSES:
            error_msg = task_result.get("error", task_result.get("message", "Unknown"))
            raise Exception(f"KLING_ERROR: Generation failed (status={status}): {error_msg}")

        elif task_result.get("status_final"):
            raise Exception(f"KLING_ERROR: Unexpected final status {status}")

        else:
            elapsed = (i + 1) * poll_interval
            eta = task_result.get("etaTime", 0)
            current = task_result.get("currentTimestamp", 0)
            if eta and current:
                remaining = max(0, (eta - current) / 1000)
                print(f"  {status_name}... ({elapsed}s elapsed, ~{remaining:.0f}s remaining)")
            else:
                print(f"  {status_name}... ({elapsed}s)")

    raise Exception(f"KLING_ERROR: Timed out after {max_polls * poll_interval}s")


def _download_video(url, output_path, max_retries=3):
    """Download video with verification."""
    MIN_SIZE = 500_000  # 500KB minimum for valid video

    output_path = Path(output_path)
    output_path.parent.mkdir(parents=True, exist_ok=True)

    for attempt in range(1, max_retries + 1):
        try:
            print(f"  Downloading... (attempt {attempt}/{max_retries})")
            r = requests.get(url, timeout=180)

            if r.status_code != 200:
                print(f"  HTTP {r.status_code}, retrying...")
                continue

            if len(r.content) < MIN_SIZE:
                print(f"  File too small ({len(r.content)} bytes), retrying...")
                continue

            with open(output_path, "wb") as f:
                f.write(r.content)

            if output_path.exists() and output_path.stat().st_size >= MIN_SIZE:
                size_mb = output_path.stat().st_size / (1024 * 1024)
                print(f"  Saved: {output_path} ({size_mb:.1f}MB)")
                return str(output_path)

        except requests.exceptions.RequestException as e:
            print(f"  Download error: {e}, retrying...")

    raise Exception(f"KLING_ERROR: Download failed after {max_retries} attempts")


# ─── Public API ─────────────────────────────────────────────────────────────

def generate_from_image(image_path, prompt, output_path,
                        duration="5", mode="std", model="kling-v3-0"):
    """
    Generate a video from a local image file.

    Args:
        image_path: Path to source image (PNG, JPEG, WebP). Max 4MB.
        prompt: What should happen in the video. Describe MOTION, not what's in the image.
                Example: "Slow cinematic zoom in, particles floating, soft light rays"
        output_path: Where to save the .mp4 file (directories created automatically)
        duration: "3" to "15" seconds (default "5")
        mode: "std" (standard, faster/cheaper) or "pro" (higher quality)
        model: "kling-v3-0" (default, recommended)

    Returns:
        str: Path to the saved video file

    Example:
        generate_from_image("public/hero.png", "Slow zoom with light rays", "public/videos/hero.mp4")
    """
    print(f"\n--- Kling 3.0: Image -> Video ---")
    print(f"  Source: {image_path}")
    print(f"  Prompt: {prompt[:80]}...")
    print(f"  Duration: {duration}s | Mode: {mode}")

    # Upload image to Kling CDN
    image_url = _upload_image(image_path)

    # Create video task
    payload = {
        "email": USEAPI_KLING_EMAIL,
        "image": image_url,
        "prompt": prompt,
        "duration": str(duration),
        "model_name": model,
        "mode": mode,
    }

    r = requests.post(f"{BASE_URL}/videos/image2video-frames",
                      headers=_headers(), json=payload, timeout=60)

    if r.status_code == 401:
        raise Exception("KLING_ERROR: Unauthorized — check USEAPI_TOKEN")
    if r.status_code == 400:
        raise Exception(f"KLING_ERROR: Bad request — {r.json().get('error', r.text[:200])}")
    r.raise_for_status()

    result = r.json()
    task_id = result.get("task", {}).get("id")
    if not task_id:
        raise Exception(f"KLING_ERROR: No task ID returned: {json.dumps(result)[:200]}")

    print(f"  Task ID: {task_id}")

    # Poll until done
    video_url = _poll_task(task_id)

    # Download
    return _download_video(video_url, output_path)


def generate_from_text(prompt, output_path, duration="5", mode="std",
                       aspect_ratio="16:9", model="kling-v3-0"):
    """
    Generate a video from a text description only (no source image).

    Args:
        prompt: Full scene description.
                Example: "Dark abstract gradient flowing from deep blue to purple, with floating light particles"
        output_path: Where to save the .mp4 file
        duration: "3" to "15" seconds (default "5")
        mode: "std" or "pro"
        aspect_ratio: "16:9" (landscape), "9:16" (vertical/mobile), "1:1" (square)
        model: "kling-v3-0" (default)

    Returns:
        str: Path to the saved video file

    Example:
        generate_from_text("Abstract flowing gradient", "public/videos/bg.mp4", aspect_ratio="16:9")
    """
    print(f"\n--- Kling 3.0: Text -> Video ---")
    print(f"  Prompt: {prompt[:80]}...")
    print(f"  Duration: {duration}s | Mode: {mode} | Aspect: {aspect_ratio}")

    _check_config()

    payload = {
        "email": USEAPI_KLING_EMAIL,
        "prompt": prompt,
        "duration": str(duration),
        "model_name": model,
        "mode": mode,
        "aspect_ratio": aspect_ratio,
    }

    r = requests.post(f"{BASE_URL}/videos/text2video",
                      headers=_headers(), json=payload, timeout=60)
    r.raise_for_status()

    result = r.json()
    task_id = result.get("task", {}).get("id")
    if not task_id:
        raise Exception(f"KLING_ERROR: No task ID returned")

    print(f"  Task ID: {task_id}")
    video_url = _poll_task(task_id)
    return _download_video(video_url, output_path)


def generate_from_frames(start_image_path, end_image_path, prompt, output_path,
                         duration="5", model="kling-v3-0"):
    """
    Generate a video that transitions from a start frame to an end frame.
    Kling fills in the motion between them. Always uses Pro mode.

    Args:
        start_image_path: Path to the first frame image
        end_image_path: Path to the last frame image
        prompt: Describe the motion/transition between frames
        output_path: Where to save the .mp4 file
        duration: "3" to "15" seconds
        model: "kling-v3-0" (default)

    Returns:
        str: Path to the saved video file

    Example:
        generate_from_frames("frame_start.png", "frame_end.png", "Smooth morph", "public/videos/morph.mp4")
    """
    print(f"\n--- Kling 3.0: Start+End Frames -> Video ---")
    print(f"  Start: {start_image_path}")
    print(f"  End: {end_image_path}")
    print(f"  Duration: {duration}s | Mode: pro (auto)")

    start_url = _upload_image(start_image_path)
    end_url = _upload_image(end_image_path)

    _check_config()

    payload = {
        "email": USEAPI_KLING_EMAIL,
        "image": start_url,
        "image_tail": end_url,
        "prompt": prompt,
        "duration": str(duration),
        "model_name": model,
        "mode": "pro",  # Always pro for start+end frames
    }

    r = requests.post(f"{BASE_URL}/videos/image2video-frames",
                      headers=_headers(), json=payload, timeout=60)
    r.raise_for_status()

    result = r.json()
    task_id = result.get("task", {}).get("id")
    if not task_id:
        raise Exception(f"KLING_ERROR: No task ID returned")

    print(f"  Task ID: {task_id}")
    # Longer timeout for pro mode
    video_url = _poll_task(task_id, max_polls=90)
    return _download_video(video_url, output_path)


def check_balance():
    """Check your Kling credit balance."""
    _check_config()
    try:
        r = requests.get(
            f"{BASE_URL}/accounts/{USEAPI_KLING_EMAIL}",
            headers=_headers(None), timeout=15
        )
        r.raise_for_status()
        account = r.json()
        balance = account.get("balance", {})
        total = balance.get("total", 0)
        points = balance.get("points", [])
        plan = sum(p.get("balance", 0) for p in points if p.get("type") == "plan")
        reward = sum(p.get("balance", 0) for p in points if p.get("type") == "reward")
        return {"total": total, "plan": plan, "reward": reward, "email": USEAPI_KLING_EMAIL}
    except Exception as e:
        return {"error": str(e)}


# ─── CLI ────────────────────────────────────────────────────────────────────

if __name__ == "__main__":
    import argparse

    parser = argparse.ArgumentParser(
        description="Kling 3.0 Video Generation — Generate AI videos for websites",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  # Check balance
  python3 tools/kling_video.py --check-balance

  # Hero section video from screenshot
  python3 tools/kling_video.py --image public/hero.png \\
    --prompt "Slow cinematic zoom, soft light rays, particles floating" \\
    --output public/videos/hero.mp4

  # Abstract background video (no image needed)
  python3 tools/kling_video.py --text \\
    --prompt "Dark gradient flowing from navy to purple with floating particles" \\
    --output public/videos/bg.mp4 --aspect 16:9

  # Product showcase (higher quality)
  python3 tools/kling_video.py --image product.png \\
    --prompt "Product slowly rotates, studio lighting shifts" \\
    --output public/videos/product.mp4 --mode pro --duration 10
        """
    )

    parser.add_argument("--check-balance", action="store_true", help="Check Kling credit balance")
    parser.add_argument("--image", type=str, help="Source image path (for image-to-video)")
    parser.add_argument("--end-image", type=str, help="End frame image (for start+end frame animation)")
    parser.add_argument("--text", action="store_true", help="Text-to-video mode (no source image)")
    parser.add_argument("--prompt", type=str, help="Motion/scene description prompt")
    parser.add_argument("--output", type=str, default="output.mp4", help="Output file path (default: output.mp4)")
    parser.add_argument("--duration", type=str, default="5", help="Duration in seconds: 3-15 (default: 5)")
    parser.add_argument("--mode", type=str, default="std", choices=["std", "pro"], help="Quality: std (default) or pro")
    parser.add_argument("--aspect", type=str, default="16:9", choices=["16:9", "9:16", "1:1"], help="Aspect ratio (default: 16:9)")
    parser.add_argument("--model", type=str, default="kling-v3-0", help="Model (default: kling-v3-0)")

    args = parser.parse_args()

    if args.check_balance:
        bal = check_balance()
        if "error" in bal:
            print(f"Error: {bal['error']}")
            sys.exit(1)
        print(f"Kling Account: {bal['email']}")
        print(f"  Total:  {bal['total']:,} credits")
        print(f"  Plan:   {bal['plan']:,}")
        print(f"  Reward: {bal['reward']:,}")

    elif args.text and args.prompt:
        generate_from_text(args.prompt, args.output, duration=args.duration,
                          mode=args.mode, aspect_ratio=args.aspect, model=args.model)

    elif args.image and args.end_image and args.prompt:
        generate_from_frames(args.image, args.end_image, args.prompt, args.output,
                            duration=args.duration, model=args.model)

    elif args.image and args.prompt:
        generate_from_image(args.image, args.prompt, args.output,
                           duration=args.duration, mode=args.mode, model=args.model)

    else:
        parser.print_help()
        print("\nQuick start:")
        print("  1. Create tools/.env with USEAPI_TOKEN and USEAPI_KLING_EMAIL")
        print("  2. python3 tools/kling_video.py --check-balance")
        print("  3. python3 tools/kling_video.py --image hero.png --prompt 'Slow zoom' --output hero.mp4")
