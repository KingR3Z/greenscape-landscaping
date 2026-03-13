# GreenScape — Premium Website Project Brain

## Prime Directive
You are a premium website design and development system. You build high-end, custom-branded websites that look like a professional design agency built them — never generic AI slop. Every site must feel unique, intentional, and worth $10K+.

**ALWAYS read `skills/` folder for the full build system — design patterns, animations, deployment, and resources.**
**ALWAYS read `directives/` folder at session start for project principles.**
**ALWAYS check `plans/` folder for active project plans before starting work.**
**ALWAYS check `brand_assets/brand_guidelines.md` for this project's brand spec.**

---

## Skills Library (Self-Contained Build System)

This project contains **everything needed to copy any website and build premium sites from scratch**. All skill documents live in `skills/`:

| Skill Doc | Purpose | When to Use |
|-----------|---------|-------------|
| `skills/ANTIGRAVITY-PLAYBOOK.md` | **Master build pipeline** — PAGES framework, BLAST framework, tool stack (Antigravity, Stitch, AI Studio, Firecrawl), MCP connections, Vibe Design process, niche targeting | Starting any new website project, understanding the full pipeline end-to-end |
| `skills/POWER-PACK.md` | **Philosophy + personas** — CLAUDE.md templates, context management, unlimited memory pattern, Sam/Channel Changers methodology, prompt engineering | Setting up new projects, managing context across sessions, writing effective prompts |
| `skills/DESIGN-INTELLIGENCE.md` | **5 Core Design Dimensions** — pattern/layout systems, style/aesthetic rules, color/theme theory, typography pairing, animation patterns | Making any design decision, choosing layouts, picking animations, selecting color palettes |
| `skills/PREMIUM-COMPONENTS.md` | **GSAP animation component library** — scroll triggers, magnetic buttons, text reveals, parallax, stagger grids, smooth scroll, preloaders | Implementing any animation or interactive component |
| `skills/INSTANT-PUBLISH-SKILL.md` | **GitHub → Vercel deployment** — repo creation, Vercel connection, custom domains, environment variables | Deploying any finished website to production |
| `skills/STITCH-SETUP.md` | **Stitch MCP connection guide** — connecting AI tools to browser, GitHub, Vercel via MCP protocol | Setting up tool connections in Antigravity/Claude Code |

### How to Use the Skills
1. **New project from scratch**: Read `ANTIGRAVITY-PLAYBOOK.md` → follow PAGES framework
2. **Copy an existing website**: Read `ANTIGRAVITY-PLAYBOOK.md` → Phase 1 (Firecrawl + screenshots) → `DESIGN-INTELLIGENCE.md` for analysis → `PREMIUM-COMPONENTS.md` for animation matching
3. **Design decisions**: Read `DESIGN-INTELLIGENCE.md` for the 5 dimensions
4. **Adding animations**: Read `PREMIUM-COMPONENTS.md` for GSAP patterns
5. **Deploying**: Read `INSTANT-PUBLISH-SKILL.md` for GitHub → Vercel workflow
6. **Context management across sessions**: Read `POWER-PACK.md` for memory patterns

### External Resources (Referenced in Skills)
- **Firecrawl**: Brand DNA extraction from any URL (scrapes design tokens, colors, fonts)
- **21st.dev**: Premium React/Next.js component marketplace
- **CodePen**: Community component source (CSS effects, micro-interactions)
- **Magic UI MCP**: Component generation via MCP protocol
- **Spline**: 3D element creation for hero sections
- **GSAP Club**: Premium animation plugins (SplitText, ScrollSmoother, MorphSVG)
- **Unsplash/Pexels**: Stock photography for placeholders
- **Google Fonts**: Typography (this project uses Playfair Display + DM Sans)

## Core Workflow: Enhanced IBRD

**Phase 0** (Research) → **Phase 1** (Inspiration) → **Phase 1.5** (Design System) → **Phase 2** (Build) → **Phase 3** (Refine) → **Phase 4** (Deploy)

### Phase 0: Brand Strategy Research (before design)
- Research 3-5 competitors in client's space
- Define brand positioning (who, what, different, personality, voice)
- Create messaging framework (headlines, value props, objections, CTAs)
- Write page copy BEFORE design — get client sign-off on copy first
- Establish visual direction from brand personality
- Output documents: see `directives/brand-strategy-framework.md`
- **Skip for template-based quick builds or simple reference clones**

### Phase 1: Inspiration
- Capture full-page screenshot of reference site (Puppeteer or provided)
- Accept PDF captures from Go Full Page Chrome extension as reference input
- Copy computed styles from reference site's `<body>` element
- Store reference screenshot in `reference_assets/` folder
- Analyze: layout structure, color palette, typography, spacing, animations, component patterns
- Check CodePen for relevant component patterns (hero, pricing, testimonials, etc.)
- If a matching template exists in `templates/`, USE IT instead of reverse-engineering from scratch
- Optionally invoke **template-extraction** skill to save reference as reusable template for future use

### Phase 1.5: Design System Creation (before code)
- Create `brand_assets/design_system.md` BEFORE writing any component code
- Define: color tokens, typography scale, spacing system, component patterns, animation tokens
- ALL code references the design system — never invent values on the fly
- See `directives/design-system-creation.md` for full process
- If doing a multi-page funnel: build the biggest page first to lock in the design system

### Phase 2: Build (Clone + Brand)
- Clone reference site structure using screenshot + styles as context
- Target 80%+ structural match on first pass
- Separate data from presentation: content in `data/*.ts`, components read from data files
- Reference `brand_assets/design_system.md` for all visual decisions
- For template-based builds: read `templates/*.md` for section structure + copy formulas
- Run screenshot comparison loop (minimum 2 passes — see Screenshot Workflow below)
- Then swap in client brand: colors, logo, typography, copy, images
- Re-run screenshot loop to verify brand consistency
- For client projects: optionally create mockups in Variant.com for client approval before heavy coding

### Phase 3: Refine (Escape AI Slop)
- Replace generic components with 21st.dev or CodePen premium components
- Add micro-interactions, animations, hover states, scroll effects
- Section-by-section review: if anything looks "clearly AI," redesign it
- For stubborn sections: ask "What is the most elegant solution?" and redesign
- Use voice/text iteration for nitpicky adjustments
- Optimize all images (compress to <500KB each)
- Mobile responsiveness pass (test at 375px, 768px, 1024px, 1440px)

### Phase 4: Deploy
- Push to GitHub repository → auto-deploy via Vercel
- OR export sections to GHL custom code blocks
- OR paste HTML into Shopify page editor / custom Liquid section
- OR drag folder to Netlify Drop for instant testing URL
- Custom domain configuration if provided
- **NEVER push to GitHub/production until explicitly told to do so**
- Always test on localhost first

---

## Three-Layer Architecture

This project operates on three layers:

| Layer | Location | Purpose |
|-------|----------|---------|
| Layer 1: Directives | `directives/` + `plans/` | Persistent principles, frameworks, and project state |
| Layer 2: LLM | Claude | Thinking, reasoning, decision-making |
| Layer 3: Tools | `tools/` | Reusable scripts for repeated tasks |

**Key Rule:** When you find yourself doing something manually more than once, create a reusable tool in `tools/`. See `directives/three-layer-architecture.md`.

---

## Screenshot Workflow (Puppeteer)

This is the single most important quality mechanism. Use it aggressively.

### Setup
Puppeteer must be installed and configured for automated screenshots. If not set up, install it immediately when starting any build.

### Process
1. After building/changing any section, take a screenshot
2. Compare your screenshot against the reference screenshot
3. Identify mismatches in: layout, spacing, colors, typography, alignment
4. Fix mismatches and re-screenshot
5. Repeat until section matches reference (minimum 2 full passes)

### Screenshot Storage
- Save to `temp_screenshots/` folder
- Name convention: `{section}_{pass_number}_{timestamp}.png`
- Example: `hero_pass1_20260219.png`
- Delete old screenshots when starting a new build cycle

### When to DISABLE Screenshots
- Animated/dynamic backgrounds (they cause infinite comparison loops)
- Video embeds or live content
- When explicitly told to skip screenshot comparison
- For these elements: build from code reference only, then ask user to verify visually

---

## Brand Assets

Always check for and use these if present:
- `brand_assets/logo.{png,svg}` — Client logo
- `brand_assets/brand_guidelines.{md,pdf,png}` — Colors, typography, tone
- `brand_assets/brand_positioning.md` — Who we are (from Phase 0)
- `brand_assets/messaging_framework.md` — What we say (from Phase 0)
- `brand_assets/visual_direction.md` — How we look (from Phase 0)
- `brand_assets/design_system.md` — Code-ready design tokens (from Phase 1.5)
- `brand_assets/images/` — Client photos, product shots, team photos
- `reference_assets/` — Inspiration site screenshots and styles

### Brand Integration Rules
- Logo appears in navbar and footer minimum
- All colors must come from brand guidelines (no default AI palettes)
- Typography must match brand guidelines (load custom fonts via Google Fonts or local files)
- Copy/messaging must match client's tone of voice
- Images must be client-provided or high-quality placeholders clearly marked as `[PLACEHOLDER]`

---

## Code Standards

### Stack (Default)
- Next.js + React + Tailwind for interactive/SPA sites
- HTML5 + CSS3 + Vanilla JS for static sites, GHL, and Shopify
- Choose based on project complexity — simple landing pages don't need React

### Quality Rules
- Semantic HTML (proper heading hierarchy, landmarks, alt text)
- CSS custom properties (variables) for all colors, fonts, spacing
- Mobile-first responsive design
- Performance: all images optimized, lazy loading, minimal JS
- Accessibility: WCAG 2.1 AA minimum
- No inline styles (use classes/CSS variables) — exception: GHL/Shopify HTML exports
- Clean, commented code organized by section
- Content data separated from markup (see `directives/deterministic-code-principles.md`)

### GHL Compatibility (When Targeting GoHighLevel)
If the deployment target is GHL:
- HTML + CSS + JS ONLY (no React, no build tools)
- Code must be modular — each section is a standalone custom code block
- All images must be hosted URLs (not local file paths)
- Remove all padding/margin on outer wrappers (GHL adds its own)
- Test that each section works independently when pasted into GHL custom code block
- Export sections as numbered files: `section_01_hero.html`, `section_02_features.html`, etc.

---

## 21st.dev Component Integration

When refining designs, check 21st.dev for premium components:
- **Backgrounds**: Animated paths, gradient meshes, particle effects, hero waves
- **Buttons**: Glow effects, shine animations, magnetic hover
- **Cards**: Glass morphism, 3D tilt, spotlight effects
- **Navigation**: Sticky headers, animated hamburgers, mega menus
- **Sections**: Scroll-triggered reveals, parallax, marquee tickers

### How to Use
1. User provides 21st.dev component prompt (copied from site)
2. Implement the component code into the appropriate section
3. Customize colors/speed/opacity to match the site's brand
4. If component is animated, SKIP screenshot comparison for that element

## CodePen Component Integration

Alongside 21st.dev, use CodePen as a component source:
- Search CodePen for specific component types (e.g., "glassmorphism card", "animated counter")
- Look for components with high hearts/forks = proven quality
- Adapt the code to match your design system
- **CodePen excels at:** pure CSS effects, micro-interactions, creative layouts, form designs
- **21st.dev excels at:** React/Next.js production components, full section templates

---

## Template Library

Reusable page structure templates live in `templates/`.

### How to Use
1. Browse `templates/` for matching page type
2. Read the template `.md` file for section structure + copy formulas
3. Generate content following the template's patterns
4. Build code following the template's design spec
5. Apply brand via design system

### How to Create
Invoke the **template-extraction** skill with a reference page (PDF, screenshot, or URL).

### Advertorial/Landing Pages
For direct-response pages, invoke the **advertorial-workflow** skill. This is a standalone workflow optimized for conversion-focused pages with Shopify/Netlify/GHL deployment.

---

## Context Preservation

### Plans Folder
For multi-session projects, maintain a plan in `plans/`:
- `plans/[project-name]-plan.md` — phases, progress, decisions, open questions
- Update after completing each phase
- On new session: "Read `plans/[project-name]-plan.md` and `CLAUDE.md`. Pick up where we left off."
- Start a new chat after heavy work rather than filling the context window

### Memory Pattern
For large tasks within a project (10+ files, batch processing):
- Create `.memory/context.md` — goal
- Create `.memory/todos.md` — checklist
- Create `.memory/insights.md` — findings
- Update after each item processed
- On context reset: read `.memory/` files and continue

### Deterministic Code Principle
Prefer scripts that produce deterministic output:
- Content data in `data/*.ts` files, NOT hardcoded in JSX
- Reusable tools in `tools/` for repeated operations
- Templates in `templates/` for page structures
- See `directives/deterministic-code-principles.md`

---

## Project Structure
```
greenscape-landscaping/
├── CLAUDE.md                    (this file — project brain)
├── VIDEO_GENERATION_GUIDE.md    (Kling 3.0 video docs)
├── skills/                      (★ FULL BUILD SYSTEM — read these!)
│   ├── ANTIGRAVITY-PLAYBOOK.md  (master pipeline, PAGES/BLAST frameworks)
│   ├── POWER-PACK.md            (philosophy, personas, context mgmt)
│   ├── DESIGN-INTELLIGENCE.md   (5 design dimensions, patterns, colors)
│   ├── PREMIUM-COMPONENTS.md    (GSAP animation component library)
│   ├── INSTANT-PUBLISH-SKILL.md (GitHub → Vercel deployment)
│   └── STITCH-SETUP.md          (MCP tool connections)
├── directives/                  (Layer 1: persistent principles)
│   ├── README.md
│   ├── three-layer-architecture.md
│   ├── brand-strategy-framework.md
│   ├── design-system-creation.md
│   └── deterministic-code-principles.md
├── plans/                       (context-preserving project plans)
│   └── README.md
├── templates/                   (reusable page structure templates)
│   └── README.md
├── brand_assets/
│   ├── logo.png
│   ├── brand_guidelines.md      (★ GreenScape brand spec)
│   ├── brand_positioning.md     (from Phase 0)
│   ├── messaging_framework.md   (from Phase 0)
│   ├── visual_direction.md      (from Phase 0)
│   ├── design_system.md         (from Phase 1.5)
│   └── images/
├── reference_assets/
│   ├── reference_screenshot.png
│   └── reference_styles.css
├── data/                        (content data — separated from code)
│   ├── homepage.ts
│   ├── navigation.ts
│   └── testimonials.ts
├── tools/
│   ├── kling_video.py           (AI video generation)
│   ├── .env                     (API keys — git-ignored)
│   └── .env.example
├── src/
│   ├── app/
│   │   ├── layout.tsx           (Playfair Display + DM Sans, SEO meta)
│   │   ├── page.tsx             (all sections wired)
│   │   └── globals.css          (GreenScape theme, blob anims, gradients)
│   ├── components/
│   │   ├── sections/            (Hero, Services, Portfolio, Process, etc.)
│   │   ├── layout/              (Navigation, Footer, Preloader)
│   │   └── ui/                  (MagneticButton, CustomCursor)
│   ├── hooks/
│   ├── lib/
│   └── types/
├── public/
│   └── videos/
├── .claude/
│   └── skills/
│       ├── website-build-workflow.md
│       ├── template-extraction.md
│       └── advertorial-workflow.md
├── .memory/                     (for large task context — transient)
├── temp_screenshots/            (auto-managed, deletable)
├── ghl_upload/                  (GHL image export folder)
└── dist/                        (build output)
```

---

## Iteration Philosophy

**The quality gap between a $500 site and a $10K site is human taste applied through iteration.**

- First output gets you to 60-80%. That's the starting point, not the finish.
- Screenshot loop gets you to 85-90%.
- 21st.dev + CodePen components get you to 90-95%.
- Manual section-by-section refinement gets you to 95-99%.
- Every section that looks "default" or "template-y" must be redesigned.
- When stuck on a section, ask: "What is the most elegant solution?"
- Prioritize breathing room, intentional spacing, and visual hierarchy.
- For client projects: create mockups in Variant.com for approval before heavy coding.

---

## Video Generation (Kling 3.0)

This project has a built-in AI video generation tool at `tools/kling_video.py`. Use it whenever a website needs video content — hero backgrounds, product showcases, animated sections, or ambient loops.

**Full documentation:** `VIDEO_GENERATION_GUIDE.md`

### Quick Usage

```bash
# Check credits
python3 tools/kling_video.py --check-balance

# Hero background from screenshot/image
python3 tools/kling_video.py --image public/images/hero.png \
  --prompt "Slow cinematic zoom, soft light shifting, particles floating" \
  --output public/videos/hero-bg.mp4 --duration 10 --aspect 16:9

# Abstract background (no image)
python3 tools/kling_video.py --text \
  --prompt "Dark gradient flowing from navy to purple with glowing particles" \
  --output public/videos/bg.mp4 --aspect 16:9

# Product showcase (higher quality)
python3 tools/kling_video.py --image product.png \
  --prompt "Product slowly rotates, studio lighting shifts" \
  --output public/videos/product.mp4 --mode pro
```

### Python Import

```python
from tools.kling_video import generate_from_image, generate_from_text

generate_from_image("public/hero.png", "Slow zoom with light rays", "public/videos/hero.mp4")
generate_from_text("Abstract gradient flow", "public/videos/bg.mp4", aspect_ratio="16:9")
```

### Key Rules

- **Image-to-video prompts describe MOTION only** — Kling already sees the image, don't describe what's in it
- **Use Standard mode for backgrounds** — they're behind content anyway, save credits
- **Use Pro mode for hero/showcase** — where quality matters
- **Videos go in `public/videos/`** — Next.js serves them automatically
- **Always use `muted playsInline autoPlay loop`** on background `<video>` elements
- **For GHL: host videos externally** (Cloudflare R2, S3, Bunny CDN) — local paths don't work
- **Check `tools/.env` exists** before running — needs `USEAPI_TOKEN` and `USEAPI_KLING_EMAIL`
- **Max image size: 4MB** — resize with `ffmpeg -i big.png -vf 'scale=1920:-1' small.png`

### When to Generate Videos

| Website Section | Video Type | Mode | Duration |
|----------------|-----------|------|----------|
| Hero section | Image-to-video from screenshot | std | 10s |
| Abstract background | Text-to-video | std | 10s |
| Product showcase | Image-to-video from product photo | pro | 5s |
| Testimonial | Image-to-video from portrait | std | 5s |
| Before/after | Start+end frames | pro | 5s |
| Loading/micro-animation | Text-to-video | std | 3s |

---

## Safety & Security
- Never expose API keys, credentials, or sensitive data in code
- Never push secrets to GitHub
- Add `.gitignore` with standard exclusions before first commit
- All form submissions should have basic validation
- For production client sites: recommend professional security review before going live with payments/auth
