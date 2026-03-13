# PREMIUM COMPONENTS LIBRARY

Pre-built GSAP animation components for premium website templates.
Tech stack: Next.js 16 + React 19 + GSAP 3.14 + Lenis 1.3 + Tailwind CSS 4 + TypeScript 5

Source: `Website time to copy/premium-website-generator/`

---

## SETUP

### package.json dependencies
```json
{
  "dependencies": {
    "next": "^16.1.6",
    "react": "^19.2.3",
    "gsap": "^3.14.2",
    "lenis": "^1.3.17",
    "tailwindcss": "^4.0.0"
  },
  "devDependencies": {
    "typescript": "^5.0.0",
    "@types/react": "^19.0.0"
  }
}
```

### GSAP Registration (Required in every component)
```tsx
"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}
```

---

## ANIMATION UTILITIES (`src/lib/animations.ts`)

### Constants
```ts
export const EASE = {
  smooth: "power3.out",      // Default for most animations
  expo: "expo.out",           // Dramatic reveals
  expoInOut: "expo.inOut",    // Image reveals (clip-path)
  bounce: "back.out(1.4)",    // Playful overshoot
  elastic: "elastic.out(1, 0.5)", // Bouncy (use sparingly)
};

export const DURATION = {
  fast: 0.4,      // Micro-interactions, hover states
  normal: 0.8,    // Standard scroll reveals
  slow: 1.2,      // Dramatic reveals
  verySlow: 1.8,  // Hero animations
};
```

### createFadeUp(element, options?)
Fade + slide up on scroll. The bread-and-butter animation.
- `delay` — stagger offset (default: 0)
- `duration` — animation length (default: 0.8)
- `y` — starting Y offset in px (default: 60)
- `trigger` — scroll trigger element (default: self)
- `start` — ScrollTrigger start position (default: "top 85%")

### createStaggerGrid(container, items, options?)
Staggered grid reveal — items fade up + scale in sequence.
- `stagger` — delay between items (default: 0.12)
- `y` — starting Y offset (default: 40)
- `duration` — per-item duration (default: 0.8)
- Trigger: container at "top 75%"

### createParallax(element, options?)
Parallax scroll effect — element moves slower/faster than scroll.
- `speed` — parallax amount as yPercent (default: -20, negative = up)
- `trigger` — scroll trigger element (default: self)
- Uses scrub:1 for smooth scroll-linked movement

---

## COMPONENTS

### AnimatedCounter (`src/components/ui/AnimatedCounter.tsx`)

Scroll-triggered number counter animation. Great for stats sections.

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| value | number | required | Target number to count to |
| prefix | string | "" | Text before number (e.g., "$") |
| suffix | string | "" | Text after number (e.g., "+", "%") |
| duration | number | 2 | Animation duration in seconds |
| className | string | "" | Additional CSS classes |

**Usage:**
```tsx
<AnimatedCounter value={500} suffix="+" />
<AnimatedCounter value={98} suffix="%" prefix="" />
<AnimatedCounter value={10000} prefix="$" />
```

**Behavior:** Triggers once when element scrolls into view (top 85%). Uses `tabular-nums` for stable width during animation.

---

### SplitText (`src/components/ui/SplitText.tsx`)

Text animation with 3 modes. The most impactful text component.

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | ReactNode | required | Text content |
| as | "h1"/"h2"/"h3"/"h4"/"p"/"span"/"div" | "div" | HTML tag |
| animation | "reveal"/"fadeUp"/"words" | "fadeUp" | Animation style |
| stagger | number | 0.08 | Delay between words |
| duration | number | 1.0 | Animation duration |
| delay | number | 0 | Initial delay |
| className | string | "" | CSS classes |
| once | boolean | true | Play once vs replay on scroll |

**Animation Modes:**
- **reveal** — Words slide up from below (yPercent: 100→0). Clean, minimal.
- **fadeUp** — Whole element fades up (opacity + y). Safe default.
- **words** — Word-by-word reveal with opacity. Most dramatic.

**Usage:**
```tsx
<SplitText as="h1" animation="words" stagger={0.05}>
  Premium Website Design
</SplitText>

<SplitText as="p" animation="fadeUp" delay={0.2}>
  We build websites that convert.
</SplitText>
```

---

### ScrollProgress (`src/components/ui/ScrollProgress.tsx`)

Full-page scroll progress bar. Add to layout for premium feel.

**Usage:**
```tsx
// In layout.tsx or page root:
<ScrollProgress />
```

**CSS needed:**
```css
.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--accent-color);
  transform-origin: left;
  z-index: 9999;
}
```

---

### RevealImage (`src/components/ui/RevealImage.tsx`)

Image reveal with clip-path animation. 4 directional options.

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| src | string | required | Image source URL |
| alt | string | required | Alt text |
| direction | "left"/"right"/"bottom"/"top" | "left" | Reveal direction |
| duration | number | 1.2 | Animation duration |
| width | number | optional | Image width |
| height | number | optional | Image height |
| className | string | "" | CSS classes |

**Usage:**
```tsx
<RevealImage
  src="/hero-image.webp"
  alt="Hero"
  direction="left"
  className="w-full h-[500px]"
/>
```

**Effect:** Image clips from hidden → revealed with subtle scale (1.2→1). Uses expo.inOut easing for dramatic feel. Triggers at "top 80%".

---

### Marquee (`src/components/ui/Marquee.tsx`)

Infinite scroll marquee with pause-on-hover. Perfect for logo bars, testimonials.

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | ReactNode | required | Content to scroll (auto-duplicated) |
| speed | number | 40 | Duration of one full cycle (higher = slower) |
| direction | "left"/"right" | "left" | Scroll direction |
| pauseOnHover | boolean | true | Pause on mouse hover |
| className | string | "" | CSS classes |

**Usage:**
```tsx
<Marquee speed={30}>
  <img src="/logo1.svg" className="h-8 mx-8" />
  <img src="/logo2.svg" className="h-8 mx-8" />
  <img src="/logo3.svg" className="h-8 mx-8" />
</Marquee>
```

**Note:** Content is automatically duplicated (rendered twice) to create seamless loop. Uses GSAP timeScale for smooth pause/resume.

---

### CustomCursor (`src/components/layout/CustomCursor.tsx`)

Custom cursor with dot + ring. Expands on interactive element hover.

**Features:**
- Small dot (8px) follows cursor tightly (0.15s delay)
- Large ring (40px) follows with lag (0.5s delay) — creates fluid feel
- Ring expands to 60px + changes color on hover over `a`, `button`, `[data-cursor]`
- Auto-disabled on touch devices (`hover: none` media query)
- Uses `gsap.quickTo()` for 60fps smooth following

**Usage:**
```tsx
// In layout.tsx:
<CustomCursor />

// Add data-cursor to any element for hover effect:
<div data-cursor>Hover me</div>
```

**CSS needed:**
```css
/* Hide default cursor when custom cursor is active */
@media (hover: hover) {
  * { cursor: none !important; }
}
```

---

## BRAND GUIDELINES TEMPLATE

Fill this for every client before building (from `brand_assets/brand_guidelines_TEMPLATE.md`):

```markdown
# Brand Guidelines — [CLIENT NAME]

## Brand Overview
- Brand Name:
- Industry:
- Tagline:
- Target Audience:
- Brand Tone: (bold & energetic / warm & approachable / luxury & refined / playful & creative)

## Color Palette
- Primary: #______
- Secondary: #______
- Accent: #______
- Background (Dark): #______
- Background (Light): #______
- Text (Primary): #______
- Text (Secondary): #______

## Typography
- Heading Font: (e.g., Playfair Display, Clash Display, Cabinet Grotesk)
- Body Font: (e.g., DM Sans, General Sans, Satoshi)
- Heading Weight: (e.g., 700, 800)
- Body Weight: (e.g., 400, 500)

## Logo
- File: brand_assets/logo.png (or .svg)
- Min size: 120px wide
- Clear space: padding equal to logo height on all sides

## Imagery Style
- Photo style: (bright/airy, dark/moody, candid/natural, polished/editorial)
- Preferred types: (product shots, lifestyle, team photos, abstract)

## Design Preferences
- Reference site URL:
- What they like about it:
- Elements to emulate:
- Elements to avoid:

## Content / Copy
- Hero headline:
- Hero subheadline:
- CTA button text:
- Key selling points:
- Social proof: (testimonials, stats, logos)

## Deployment Target
- [ ] Vercel  [ ] Netlify  [ ] GoHighLevel  [ ] Other
- Custom domain:
```

---

## TypeScript Interfaces (`src/types/index.ts`)

Standard interfaces for website data:

```typescript
interface CaseStudy {
  title: string;
  client: string;
  description: string;
  image: string;
  tags: string[];
  slug: string;
}

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  image?: string;
  rating?: number;
}

interface Service {
  title: string;
  description: string;
  icon: string;
  features: string[];
  price?: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}
```

---

## PROJECT STRUCTURE

```
premium-website-template/
├── CLAUDE.md                         ← Project brain
├── brand_assets/
│   ├── brand_guidelines.md           ← Filled per client
│   └── logo.png
├── reference_assets/
│   ├── reference_screenshot.png      ← Full-page of reference site
│   └── analysis.md                   ← Reference breakdown
├── src/
│   ├── app/
│   │   ├── layout.tsx                ← Root layout (CustomCursor, ScrollProgress, Lenis)
│   │   └── page.tsx                  ← Homepage
│   ├── lib/
│   │   └── animations.ts            ← GSAP utilities
│   ├── components/
│   │   ├── ui/
│   │   │   ├── AnimatedCounter.tsx
│   │   │   ├── SplitText.tsx
│   │   │   ├── ScrollProgress.tsx
│   │   │   ├── RevealImage.tsx
│   │   │   └── Marquee.tsx
│   │   ├── layout/
│   │   │   ├── CustomCursor.tsx
│   │   │   ├── Navigation.tsx
│   │   │   └── Footer.tsx
│   │   └── sections/
│   │       ├── Hero.tsx
│   │       ├── Services.tsx
│   │       ├── Testimonials.tsx
│   │       ├── Pricing.tsx
│   │       └── Contact.tsx
│   └── types/
│       └── index.ts
├── temp_screenshots/                 ← Puppeteer comparison shots
├── ghl_upload/                       ← GHL export images
└── dist/                             ← Build output
```

---

## LENIS SMOOTH SCROLL SETUP

Add to root layout for buttery smooth scrolling:

```tsx
// app/layout.tsx
"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";

useEffect(() => {
  const lenis = new Lenis();

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  return () => {
    lenis.destroy();
  };
}, []);
```
