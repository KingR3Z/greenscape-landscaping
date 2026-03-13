# Video Generation Guide — Kling 3.0 for Websites

## Overview

This project includes a standalone video generation tool powered by **Kling 3.0** (via UseAPI.net). Use it to create hero section videos, animated backgrounds, product showcases, and any other video content for the websites you build.

**What Kling 3.0 can do:**
- Turn any static image into a 3-15 second video with motion
- Generate videos from text descriptions alone (no image needed)
- Create smooth transitions between two images (start + end frame)
- Generate native audio (dialogue, ambient sounds, SFX) inside the video
- Output in 16:9 (landscape), 9:16 (vertical), or 1:1 (square)

---

## Setup (One Time)

### 1. Create Accounts

| Service | URL | What It Does |
|---------|-----|-------------|
| **UseAPI.net** | https://useapi.net | API gateway that connects to Kling |
| **Kling AI** | https://klingai.com | The actual video generation model |

Sign up for both. In UseAPI.net, link your Kling AI account (email + password).

### 2. Create Environment File

Create `tools/.env`:

```bash
# Required — get from useapi.net dashboard
USEAPI_TOKEN=your_useapi_token_here
USEAPI_KLING_EMAIL=your_kling_account_email@example.com
```

### 3. Install Dependencies

```bash
pip install requests python-dotenv
```

### 4. Verify Setup

```bash
python3 tools/kling_video.py --check-balance
```

You should see your credit balance. If you see an error, check your `.env` values.

---

## Quick Reference — Common Website Video Tasks

### Hero Section Background Video

```bash
# From a static hero image
python3 tools/kling_video.py \
  --image public/images/hero-screenshot.png \
  --prompt "Subtle slow zoom in, soft ambient light shifting, gentle particle dust floating in air" \
  --output public/videos/hero-bg.mp4 \
  --duration 10 \
  --aspect 16:9
```

### Abstract/Gradient Background

```bash
# No source image needed
python3 tools/kling_video.py --text \
  --prompt "Dark abstract gradient flowing slowly from deep navy blue to rich purple, with small glowing particles drifting upward, cinematic depth of field, smooth organic motion" \
  --output public/videos/abstract-bg.mp4 \
  --duration 10 \
  --aspect 16:9
```

### Product Showcase / Rotation

```bash
# From a product photo
python3 tools/kling_video.py \
  --image public/images/product.png \
  --prompt "Product slowly rotates 45 degrees, studio lighting shifts from left to right, subtle reflection on surface" \
  --output public/videos/product-showcase.mp4 \
  --duration 5 \
  --mode pro
```

### Testimonial / Person Talking

```bash
# From a portrait photo
python3 tools/kling_video.py \
  --image public/images/testimonial-person.png \
  --prompt "Person smiles naturally, slight head nod, eyes blink once, subtle breathing movement, warm natural lighting" \
  --output public/videos/testimonial.mp4 \
  --duration 5
```

### City/Nature Ambient Video

```bash
python3 tools/kling_video.py --text \
  --prompt "Aerial view of a modern city at golden hour, cars moving slowly on streets below, warm sunlight reflecting off glass buildings, gentle camera drift to the right" \
  --output public/videos/city-ambient.mp4 \
  --duration 10 \
  --aspect 16:9
```

### Morphing Transition (Start + End Frame)

```bash
# Smooth transition between two states
python3 tools/kling_video.py \
  --image public/images/before.png \
  --end-image public/images/after.png \
  --prompt "Smooth organic transformation, elements shift and morph fluidly" \
  --output public/videos/transition.mp4 \
  --duration 5
```

---

## Using in Python Code (For Automation)

```python
from tools.kling_video import generate_from_image, generate_from_text, generate_from_frames, check_balance

# Check credits first
bal = check_balance()
print(f"Credits remaining: {bal['total']}")

# Hero background
generate_from_image(
    image_path="public/images/hero.png",
    prompt="Slow cinematic zoom with soft light rays",
    output_path="public/videos/hero.mp4",
    duration="10",
    mode="std"
)

# Abstract background (no image)
generate_from_text(
    prompt="Dark flowing gradient with floating particles",
    output_path="public/videos/bg.mp4",
    aspect_ratio="16:9",
    duration="10"
)

# Before/after morph
generate_from_frames(
    start_image_path="public/images/v1.png",
    end_image_path="public/images/v2.png",
    prompt="Smooth redesign transition",
    output_path="public/videos/redesign.mp4",
    duration="5"
)
```

---

## Prompt Writing Guide

### The Golden Rule

**For image-to-video: describe MOTION, not what's in the image.** Kling already sees the image. Your prompt tells it what should *change*.

Bad: "A modern office building with glass windows and a blue sky"
Good: "Camera slowly dollies forward, clouds drift across sky, light shifts on glass reflections, subtle wind movement in trees"

### Prompt Structure

For best results, include these elements:

1. **Camera movement** — zoom, dolly, pan, tilt, static, handheld
2. **Subject motion** — what moves and how
3. **Lighting changes** — shifts, flickers, rays, shadows
4. **Atmosphere** — particles, fog, wind, reflections
5. **Pacing** — slow, gentle, dynamic, energetic

### Prompt Templates by Use Case

**Subtle background (loop-friendly):**
```
Extremely slow, barely perceptible zoom in. Soft ambient light gently shifts warmth.
Faint dust particles float. Minimal motion, cinematic, dreamlike.
```

**Product hero:**
```
Slow 360-degree rotation on invisible turntable. Studio lighting sweeps from left
to right. Subtle shadow movement. Clean, premium feel. Sharp focus throughout.
```

**Nature/landscape:**
```
Gentle breeze moves through foliage. Clouds drift slowly. Golden hour light shifts.
Birds fly distant background. Calm, serene, slow dolly forward.
```

**Tech/futuristic:**
```
Holographic interface elements pulse and shift. Data particles flow. Neon accents
flicker. Slow camera orbit. Dark background, high contrast, sci-fi atmosphere.
```

**Person/portrait:**
```
Natural micro-movements: slight breathing, one slow blink, subtle smile shift.
Warm natural lighting. Shallow depth of field. Intimate, authentic feel.
```

### What to Avoid

- Don't describe what's already in the image (Kling sees it)
- Don't request text/words in the video (Kling can't render text well)
- Don't ask for rapid scene changes in a single clip (keep it one continuous shot)
- Don't use negative prompts in Kling 3.0 (use `-no` in the main prompt instead if needed)
- Don't combine multi-shot mode with start+end frames (incompatible)

### Duration Guide

| Duration | Best For |
|----------|----------|
| 3s | Micro-animations, loading screens, subtle hover effects |
| 5s | Product reveals, hero backgrounds, testimonials |
| 10s | Full showcases, ambient loops, demonstrations |
| 15s | Extended narratives, multi-action sequences |

---

## Cost & Optimization

### Credit Usage (Approximate)

| Mode | Duration | Credits |
|------|----------|---------|
| Standard | 5s | ~45 |
| Standard | 10s | ~90 |
| Pro | 5s | ~75 |
| Pro | 10s | ~150 |

### Save Credits

1. **Use Standard mode for backgrounds** — they're blurred/behind content anyway
2. **Use Pro only for hero/showcase videos** — where quality is front and center
3. **Start with 5s clips** — extend to 10s only if needed
4. **Check balance before batch generation** — `python3 tools/kling_video.py --check-balance`

---

## Embedding Videos in Next.js

### Basic Video Background

```tsx
// components/VideoHero.tsx
export function VideoHero() {
  return (
    <section className="relative h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-6xl font-bold text-white">Your Headline</h1>
      </div>
    </section>
  );
}
```

### With Overlay Gradient

```tsx
export function VideoSection() {
  return (
    <section className="relative h-[600px] overflow-hidden">
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src="/videos/bg.mp4" type="video/mp4" />
      </video>
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50 z-[1]" />
      <div className="relative z-10 container mx-auto px-6 flex items-center h-full">
        {/* Content here */}
      </div>
    </section>
  );
}
```

### Lazy-Loaded Video (Performance)

```tsx
"use client";
import { useRef, useEffect } from "react";

export function LazyVideo({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.src = src;
          videoRef.current.load();
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (videoRef.current) observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, [src]);

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-full object-cover"
    />
  );
}
```

### GHL / Static HTML Version

```html
<section style="position: relative; height: 100vh; overflow: hidden;">
  <video autoplay loop muted playsinline
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;">
    <source src="YOUR_HOSTED_VIDEO_URL" type="video/mp4">
  </video>
  <div style="position: relative; z-index: 1; display: flex; align-items: center;
              justify-content: center; height: 100%; background: rgba(0,0,0,0.4);">
    <h1 style="color: white; font-size: 3rem;">Your Headline</h1>
  </div>
</section>
```

> **GHL Note:** Videos must be hosted (upload to Cloudflare R2, AWS S3, or Bunny CDN). Local file paths won't work in GoHighLevel.

---

## Troubleshooting

| Error | Cause | Fix |
|-------|-------|-----|
| `USEAPI_TOKEN not set` | Missing .env file | Create `tools/.env` with your credentials |
| `Unauthorized (401)` | Bad token | Regenerate token at useapi.net |
| `Image too large` | File over 4MB | Resize: `ffmpeg -i big.png -vf 'scale=1920:-1' small.png` |
| `status=7 sensitive words` | Prompt flagged by Kling | Rephrase prompt, remove anything suggestive |
| `status=54 queue busy` | Free plan overloaded | Wait a few minutes and retry, or upgrade plan |
| `Timed out after 12 min` | Kling servers slow | Retry — generation times vary |
| Video has watermark | Free Kling plan | Upgrade Kling plan for watermark-free output |
| `Connection error` | Network/SSL issue | Check internet, try again |

---

## File Structure

```
premium-website-generator/
├── tools/
│   ├── kling_video.py          # Video generation tool (this)
│   └── .env                    # API keys (git-ignored)
├── public/
│   └── videos/                 # Generated videos go here
│       ├── hero-bg.mp4
│       └── product-showcase.mp4
├── VIDEO_GENERATION_GUIDE.md   # This guide
└── ...
```
