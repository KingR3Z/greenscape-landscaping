# DESIGN INTELLIGENCE REFERENCE

AI-Powered Design Intelligence for premium websites.
Load this document during the Vibe Design phase for design-aware builds.
Source: UI/UX Pro Max skill (GitHub: nextlevelbuilder/ui-ux-pro-max-skill.git) + Jack Roberts' AntiGravity pack.

---

## 5 CORE DESIGN DIMENSIONS

When analyzing any website design or planning a build, evaluate across all 5 dimensions:

1. **Pattern & Layout** — Product-specific structural patterns
2. **Style & Aesthetic** — Visual design language and trends
3. **Color & Theme** — Color psychology and palette systems
4. **Typography** — Font pairings and hierarchy
5. **Animations & Interactions** — Motion design and micro-interactions

---

## DIMENSION 1: PATTERN & LAYOUT

### Product-Specific Layout Patterns

**SaaS / Software:**
- Sticky navigation with CTA
- Feature grid with icons
- Comparison tables
- Integration logos section
- Pricing toggle (monthly/annual)

**E-commerce:**
- Product grid with filters
- Quick view modals
- Cart drawer (slide-in)
- Trust badges near checkout
- Recently viewed carousel

**Fintech / Banking:**
- Dashboard preview screenshots
- Security badges prominent
- Number counters (AUM, users, savings)
- Clean data visualization
- Compliance footer

**Portfolio / Agency:**
- Case study grid (hover reveals)
- Full-bleed hero imagery
- Process/timeline section
- Team grid with hover bios
- Testimonial carousel

**Healthcare / Medical:**
- Before/after galleries
- Doctor credential cards
- Insurance accepted logos
- Online booking widget
- Patient comfort messaging

**Restaurant / Food:**
- Menu with food photography
- Reservation widget
- Hours + location prominent
- Atmosphere gallery
- Online ordering CTA

**Real Estate:**
- Property search with filters
- Map integration
- Virtual tour CTAs
- Agent profiles
- Market stats counters

**Law / Professional Services:**
- Practice area cards
- Case results/wins
- Free consultation CTA
- Attorney credentials
- Client logos (trust bar)

### Universal Layout Rules
- Hero section: max 100vh, clear CTA above fold
- Section spacing: consistent rhythm (80-120px between sections)
- Content width: max 1280px for readability
- Mobile: stack columns, increase touch targets to 44px min
- Z-pattern for Western audiences (left-to-right scanning)

---

## DIMENSION 2: STYLE & AESTHETIC

### Design Styles Catalog

**Glassmorphism**
- Frosted glass effect with backdrop-blur
- Semi-transparent backgrounds (rgba with 0.1-0.3 alpha)
- Subtle borders (1px white at 0.2 opacity)
- Best for: cards, modals, navigation overlays
- CSS: `backdrop-filter: blur(12px); background: rgba(255,255,255,0.1);`

**Aurora UI**
- Gradient backgrounds with noise texture overlay
- Animated gradient shifts (subtle, 10-20s cycle)
- Ethereal, cosmic feel
- Best for: SaaS, AI products, creative agencies
- Use with dark backgrounds for maximum impact

**Neumorphism 2.0**
- Soft shadows (inner + outer) creating raised/pressed effect
- Monochromatic color schemes
- Best for: dashboards, settings panels, toggle controls
- Subtle — don't overdo it or accessibility suffers

**Linear/Vercel Aesthetic**
- Ultra-clean, minimal, lots of whitespace
- Monochrome + single accent color
- Sharp typography, geometric icons
- Best for: developer tools, SaaS, tech products
- Reference: linear.app, vercel.com

**Editorial / Magazine**
- Strong typography hierarchy (large headlines)
- Grid-based layouts with asymmetric elements
- Serif headings + sans-serif body
- Best for: luxury brands, fashion, content sites
- Reference: nytimes.com design language

**Brutalist**
- Raw, intentionally rough
- Thick borders, stark contrasts
- Monospace fonts, visible grid
- Best for: creative agencies, art galleries, counter-culture brands
- Use sparingly — polarizing

**Organic / Rounded**
- Soft shapes, rounded corners (16-24px)
- Warm colors, natural tones
- Blob backgrounds, wave dividers
- Best for: wellness, children, community platforms
- Pair with friendly typography

**Dark Mode Premium**
- Near-black backgrounds (#0a0a0a to #1a1a1a)
- Subtle gray text hierarchy
- Accent color pops against dark
- Best for: portfolios, SaaS, luxury, tech
- Watch contrast ratios — WCAG AA minimum

### Choosing a Style
- Match the client's industry and audience
- Don't force trends — the style should serve the business goal
- When in doubt: Linear/Vercel aesthetic is the safest "premium" choice
- Premium =/= complex. The best sites look effortless.

---

## DIMENSION 3: COLOR & THEME

### Color Psychology Quick Reference

| Color | Psychology | Best For |
|-------|-----------|----------|
| Blue | Trust, stability, professionalism | Finance, healthcare, tech, SaaS |
| Green | Growth, health, nature, money | Wellness, fintech, eco brands |
| Red | Energy, urgency, passion | Food, entertainment, sales CTAs |
| Purple | Luxury, creativity, wisdom | Premium brands, creative agencies |
| Orange | Enthusiasm, warmth, confidence | SaaS, food, fitness |
| Yellow | Optimism, attention, warmth | Children, food, creative |
| Black | Sophistication, luxury, power | Fashion, luxury, portfolios |
| White | Clean, minimal, modern | Tech, healthcare, SaaS |

### Palette Building Rules
1. **1 primary** — Brand's main color (used most)
2. **1 secondary** — Complementary, used for contrast
3. **1 accent** — Eye-catching, used sparingly (CTAs, highlights)
4. **1-2 neutrals** — Background + text colors
5. **Max 5 colors total** — More = amateur

### Palette Generation Workflow
1. Start from client's existing brand color (or pick from psychology chart)
2. Go to **coolors.co** → lock primary → generate
3. Test on dark AND light backgrounds
4. Verify WCAG contrast ratios (4.5:1 minimum for text)
5. Create CSS variables for consistency:
```css
:root {
  --primary: #2563eb;
  --secondary: #1e293b;
  --accent: #f59e0b;
  --bg: #ffffff;
  --text: #0f172a;
  --muted: #64748b;
}
```

### Color in Practice
- CTA buttons: accent color (highest contrast)
- Links: primary color
- Headings: text color or primary
- Body text: slightly muted (#333-#555 on white)
- Backgrounds: alternate between white and very light neutral
- Dark sections: use for visual breaks and emphasis

---

## DIMENSION 4: TYPOGRAPHY

### Font Pairing Rules
1. **Max 2 fonts** — 1 heading + 1 body (NEVER 3+)
2. **Contrast is key** — Serif + Sans-serif works best
3. **Weight hierarchy** — Headings bold (700-800), body regular (400-500)
4. **Size scale** — Use a consistent type scale (1.25 or 1.333 ratio)

### Recommended Pairings

**Premium / Luxury:**
- Heading: Playfair Display (serif) + Body: DM Sans
- Heading: Cormorant Garamond + Body: Outfit

**Modern / Tech:**
- Heading: Cabinet Grotesk + Body: General Sans
- Heading: Clash Display + Body: Satoshi

**Clean / Professional:**
- Heading: Inter (bold) + Body: Inter (regular)
- Heading: Manrope + Body: DM Sans

**Creative / Bold:**
- Heading: Space Grotesk + Body: Outfit
- Heading: Syne + Body: Inter

**Elegant / Editorial:**
- Heading: Fraunces + Body: Commissioner
- Heading: Newsreader + Body: Plus Jakarta Sans

### Typography Scale (1.25 ratio)
```css
--text-xs: 0.8rem;    /* 12.8px — captions */
--text-sm: 0.875rem;  /* 14px — small text */
--text-base: 1rem;    /* 16px — body */
--text-lg: 1.25rem;   /* 20px — lead text */
--text-xl: 1.563rem;  /* 25px — h4 */
--text-2xl: 1.953rem; /* 31px — h3 */
--text-3xl: 2.441rem; /* 39px — h2 */
--text-4xl: 3.052rem; /* 49px — h1 */
--text-5xl: 3.815rem; /* 61px — display */
```

### Font Loading Best Practices
- Use `font-display: swap` to prevent FOIT (Flash of Invisible Text)
- Preload critical fonts: `<link rel="preload" href="font.woff2" as="font">`
- Self-host fonts for speed (don't rely on Google Fonts CDN)
- Subset fonts if only using Latin characters (reduces file size 50-80%)

### Resources
- **fontsinuse.com** — See fonts in real-world context (best resource)
- **Adobe Fonts** — Professional library
- **idography** — Curated pairings

---

## DIMENSION 5: ANIMATIONS & INTERACTIONS

### Micro-Interactions (Magic UI MCP)

Essential micro-interactions for premium feel:
- **Button hover:** Scale 1.02 + shadow increase + color shift (0.2s)
- **Card hover:** Slight lift (translateY -4px) + shadow deepening (0.3s)
- **Link hover:** Underline animation (width 0→100%) or color shift
- **Input focus:** Border color change + subtle glow (box-shadow)
- **Toggle:** Smooth slide with color transition
- **Checkbox:** Check mark draws in (SVG animation)
- **Navigation:** Backdrop-blur appears on scroll

### Scroll Animations (GSAP ScrollTrigger)

**Fade Up (Most Common):**
- Element starts below viewport (y: 40-60px, opacity: 0)
- Triggers at "top 85%" (when element is 85% up the viewport)
- Duration: 0.8s, ease: power3.out
- Use for: sections, cards, text blocks, images

**Stagger Grid:**
- Multiple elements animate in sequence
- Stagger: 0.08-0.15s between items
- Use for: service grids, team sections, portfolio items

**Parallax:**
- Background moves slower than foreground on scroll
- Speed: -10 to -30 yPercent (subtle)
- Use for: hero backgrounds, decorative elements
- NEVER on text (hurts readability)

**Image Reveal:**
- Clip-path animation from one direction
- Duration: 1.2s, ease: expo.inOut
- Scale from 1.2→1 for subtle zoom effect
- Use for: hero images, case study images, gallery items

**Text Split:**
- Words/characters animate individually
- Stagger: 0.05-0.1s per word
- Use for: hero headlines, section titles
- 3 modes: reveal (slide), fadeUp, words (with opacity)

### Page Transitions (Advanced)
- Fade out current page → fade in new page (0.3-0.5s)
- Use Next.js layout transitions or Framer Motion
- Keep transitions fast — anything >0.5s feels slow

### Loading States
- Skeleton screens (pulsing gray blocks) > spinners
- Progressive image loading (blur-up technique)
- Optimistic UI updates where possible

### Advanced Effects
- **Magnetic buttons** — Button subtly follows cursor within proximity
- **Text gradient animation** — Background-clip text with animated gradient
- **Scroll-linked video** — Frame-by-frame playback linked to scroll position
- **Cursor trail** — Particles or shapes following cursor movement
- **Noise texture overlay** — Subtle grain for organic feel

### Animation Anti-Patterns
- DON'T animate everything — it becomes noise
- DON'T use animations >1.5s (feels sluggish)
- DON'T animate text during reading (wait for scroll trigger)
- DON'T use bounce/elastic on large elements
- DON'T parallax text (readability killer)
- DON'T block interaction during animations
- DON'T use different easing for similar elements (inconsistent feel)
- DO use consistent timing across similar elements
- DO test on 60Hz AND 120Hz displays
- DO provide reduced-motion alternatives (`prefers-reduced-motion`)

---

## DESIGN ANTI-PATTERNS

### Visual Design Don'ts
| Don't | Why | Do Instead |
|-------|-----|------------|
| More than 3 fonts | Looks amateur | 2 fonts max (heading + body) |
| More than 5 colors | Chaotic palette | 1 primary, 1 accent, 2-3 neutrals |
| Center-align body text | Hard to read | Left-align body, center only headings |
| Tiny text (<14px body) | Accessibility fail | 16px minimum body text |
| Low contrast text | WCAG violation | 4.5:1 contrast ratio minimum |
| Stock photo overload | Generic feel | Mix with illustrations or custom |
| Inconsistent spacing | Unprofessional | Use 8px grid system |
| Decorative fonts for body | Unreadable | Save decorative for display only |

### UX Anti-Patterns
| Don't | Why | Do Instead |
|-------|-----|------------|
| Auto-playing video with sound | Users hate it | Muted autoplay or play button |
| Popup before content loads | Drives bounces | Delay popups 30s+ or scroll-triggered |
| Hidden navigation | Users can't find things | Clear, visible nav always |
| Infinite scroll without position | Users feel lost | Show position or "back to top" |
| Forms with >5 fields | Abandonment | Minimize fields, multi-step if needed |
| CTA below the fold only | Missed conversions | CTA above fold + sticky on mobile |
| No loading states | Feels broken | Skeleton screens or progress indicators |
| Horizontal scrolling | Unexpected behavior | Vertical scroll only (except carousels) |

---

## PROMPT TEMPLATE: DESIGN INTELLIGENCE

Use this prompt when starting a new design in AI Studio, Stitch, or Antigravity:

```
I want you to design a website for a [NICHE] business.

DESIGN DIMENSIONS:
1. Pattern: Use [SaaS/E-commerce/Portfolio/etc.] layout patterns
2. Style: [Glassmorphism/Linear/Editorial/Dark Premium/etc.] aesthetic
3. Colors: [Primary #hex], [Accent #hex], [Background] — [mood: trust/energy/luxury/warmth]
4. Typography: [Heading font] + [Body font] — [feel: modern/elegant/bold/clean]
5. Animations: Scroll-triggered fade-ups, [specific effects wanted]

REFERENCE: [reference site URL or screenshot]
BRAND: [key brand attributes]
AUDIENCE: [who they are]
GOAL: [convert to bookings / sell products / capture leads]

Make the hero section gorgeous. Follow the reference for structure
but elevate the quality. No AI slop words in copy.
```

---

## QUICK REFERENCE: STYLE → NICHE MAPPING

| Niche | Recommended Style | Font Pairing | Color Direction |
|-------|------------------|--------------|-----------------|
| Medical/Dental | Clean Professional | Manrope + DM Sans | Blue/Green + White |
| Restaurant | Organic/Editorial | Playfair + Outfit | Warm tones (amber/terracotta) |
| Law Firm | Linear/Minimal | Cabinet Grotesk + Inter | Dark navy + gold accent |
| Gym/Fitness | Bold/Dark Premium | Space Grotesk + Inter | Black + bright accent (red/orange) |
| Salon/Beauty | Elegant/Organic | Cormorant + Satoshi | Soft pink/mauve + gold |
| Real Estate | Clean Professional | Clash Display + DM Sans | Deep blue/green + white |
| E-commerce | Modern/Versatile | Inter + Inter | Brand-dependent |
| SaaS/Tech | Linear/Aurora | Cabinet Grotesk + General Sans | Blue/purple + dark |
| HVAC/Trades | Clean/Simple | Manrope + DM Sans | Blue/orange + white |
| Creative Agency | Brutalist/Editorial | Syne + Outfit | Black + bright accent |
