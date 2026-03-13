# Skill: Premium Website Build Workflow

## Objective
Build a custom, premium-branded website from client data + reference design. Output a production-ready site deployed via Vercel, GHL, Shopify, or Netlify.

## Required Inputs
- Client brief (brand name, industry, offer, target audience)
- Brand assets (logo, brand guidelines, colors, typography)
- Reference site URL OR reference screenshot OR template from `templates/`
- Page copy (provided, generated via copy tool, or created during build)
- Deployment target: Vercel / GHL / Shopify / Netlify

## Workflow Steps

---

### Step -1: Brand Strategy Research (10-20 min)

*Only for new client projects. Skip for template-based quick builds or when client provides comprehensive brief.*

1. Follow `directives/brand-strategy-framework.md`
2. Gather client brief — business, offer, audience, differentiators
3. Research 3-5 competitors
4. Define brand positioning (who, what, different, personality, voice)
5. Create messaging framework (headlines, value props, objections, CTAs)
6. Establish visual direction (mood, references, elements to include/avoid)
7. Write page copy BEFORE design — get client approval on copy first

**Output:**
- `brand_assets/client_brief.md`
- `plans/brand-research.md`
- `brand_assets/brand_positioning.md`
- `brand_assets/messaging_framework.md`
- `brand_assets/visual_direction.md`
- `data/[page]-copy.md` (approved copy)

**Checkpoint**: Brand research complete, copy approved, visual direction set.

---

### Step 0: Project Setup (2 min)
1. Create project folder with standard structure
2. Ensure CLAUDE.md is present and loaded
3. Read `directives/` folder for project principles
4. Check `plans/` for active project plan — create one if multi-session project
5. Create `brand_assets/` folder — drop in logo, guidelines, images
6. Create `reference_assets/` folder
7. Install Puppeteer for screenshot workflow (if not installed)
8. Invoke frontend-design skill
9. Confirm deployment target (Vercel, GHL, Shopify, or Netlify)

**Checkpoint**: Folder structure exists, all assets accessible, skill invoked.

---

### Step 1: Inspiration Capture (3 min)

**Standard method:**
1. Navigate to reference site URL
2. Take full-page screenshot using Puppeteer → save to `reference_assets/reference_screenshot.png`
3. If browser dev tools available: copy computed styles from `<body>` → save to `reference_assets/reference_styles.css`
4. Analyze reference site and document:
   - Layout structure (sections, grid, columns)
   - Color palette (primary, secondary, accent, background, text)
   - Typography (heading font, body font, sizes, weights)
   - Key components (hero style, cards, CTAs, navigation)
   - Animations/interactions (scroll effects, hover states, transitions)
5. Save analysis to `reference_assets/analysis.md`
6. Check CodePen for relevant component patterns (hero, pricing, testimonials, etc.)
7. Accept PDF captures from Go Full Page Chrome extension as reference input
8. Optionally invoke **template-extraction** skill to save reference as reusable template

**Template-based shortcut:**
If a matching template exists in `templates/`:
1. Read the template `.md` file
2. Skip inspiration capture — the template IS the structure
3. Proceed directly to Step 1.5 (Design System)

**Checkpoint**: Reference screenshot + styles + analysis saved (or template selected).

---

### Step 1.5: Design System Creation (5-10 min)

1. Follow `directives/design-system-creation.md`
2. Create `brand_assets/design_system.md` with:
   - Color tokens (mapped to CSS variables)
   - Typography scale (all heading + body sizes)
   - Spacing system (base unit + scale)
   - Component patterns (buttons, cards, inputs)
   - Animation tokens (duration, easing)
   - Responsive breakpoints
3. ALL subsequent code references this design system
4. If doing a multi-page funnel: build the biggest page first — the design system carries to all remaining pages

**Checkpoint**: Design system document exists with all tokens defined.

---

### Step 2: Clone Build (10-15 min)

**Standard build:**
1. Create site scaffold matching reference structure
2. Build section by section in order:
   - Navigation/header
   - Hero section
   - Social proof / trust bar
   - Features / benefits
   - How it works / process
   - Testimonials
   - Pricing (if applicable)
   - FAQ (if applicable)
   - Final CTA
   - Footer
3. Reference `brand_assets/design_system.md` for ALL visual decisions
4. Separate content data from markup:
   - Create `data/[section].ts` files for copy
   - Components read from data files, never hardcode text
5. After each major section: screenshot → compare to reference → fix mismatches
6. Run full-page screenshot comparison (Pass 1)
7. Fix all identified mismatches
8. Run full-page screenshot comparison (Pass 2)
9. Target: 80%+ structural match to reference

**Template-based build:**
1. Read the template `.md` file from `templates/`
2. Generate content following template's copy formulas
3. Build sections following template's design patterns
4. Apply brand via design system
5. Skip to Step 3 (Brand Integration)

**Checkpoint**: Clone site running on localhost, 80%+ match to reference.

---

### Step 2.5: Design Mockup Review (Optional — Client Projects)

*For client projects where design approval is needed before heavy coding.*

1. Create key section mockups using Variant.com or similar tool
2. Present 2-3 hero variants + key section designs to client
3. Get client sign-off on look and feel BEFORE full build
4. Use approved mockup code/screenshots as additional reference for Claude Code
5. This prevents hours of wasted coding on a design the client doesn't like

**Checkpoint**: Client has approved design direction.

---

### Step 3: Brand Integration (5-10 min)
1. Read `brand_assets/brand_guidelines.md` (and `design_system.md` if exists)
2. Replace reference colors with client brand colors (update CSS variables)
3. Replace reference typography with client fonts
4. Swap in client logo (navbar + footer)
5. Replace all copy/messaging with client copy (from `data/` files)
6. Replace placeholder images with client images (or mark as `[PLACEHOLDER]`)
7. Screenshot comparison: verify brand looks cohesive
8. Fix any visual issues from color/font swaps

**Checkpoint**: Site is fully branded, all copy replaced, visual consistency verified.

---

### Step 4: Premium Refinement (10-20 min)
1. **Section-by-section audit**: Open site, scroll through every section
2. For each section, evaluate:
   - Does it look "clearly AI" or "template-y"? → Redesign
   - Is the spacing/breathing room intentional? → Adjust
   - Are the components interesting or generic? → Upgrade via 21st.dev or CodePen
   - Is there enough visual variety between sections? → Add contrast
3. **Component upgrades** (selectively apply from 21st.dev or CodePen):
   - Hero background: animated paths, gradient mesh, or particles
   - Buttons: glow, shine, or magnetic hover effects
   - Cards: glass morphism or spotlight effects
   - Section transitions: scroll-triggered reveals
   - Trust bar: smooth infinite scroll marquee
4. **Animation pass**: Add micro-interactions
   - Staggered reveal on scroll (animation-delay)
   - Hover states on all interactive elements
   - Smooth scroll behavior
   - Loading animations (if appropriate)
5. **Typography pass**: Verify heading hierarchy, line heights, letter spacing
6. **Image optimization**: Compress all images to <500KB, use WebP where possible
7. **Mobile pass**: Test at 375px, 768px, 1024px, 1440px breakpoints
8. **"Most elegant solution" check**: For any section that feels off, ask "What is the most elegant solution?" and redesign

**Checkpoint**: Every section reviewed, generic elements replaced, animations added, mobile optimized.

---

### Step 5: Pre-Deploy QA (5 min)
1. Full localhost review — click every link, test every interaction
2. Check all images load correctly
3. Verify no broken layouts at any breakpoint
4. Run Lighthouse audit (if available) — target 90+ performance
5. Verify no console errors
6. Check `.gitignore` excludes: node_modules, .env, temp_screenshots, .DS_Store, .memory
7. Security check: no API keys or secrets in code

**Checkpoint**: Site is QA'd and ready for deployment.

---

### Step 6A: Deploy to Vercel (3 min)
1. Initialize git repo (if not done)
2. Create GitHub repository
3. Push code to GitHub
4. User connects GitHub repo to Vercel
5. Vercel auto-deploys
6. Verify live site matches localhost
7. Custom domain setup (if provided)

### Step 6B: Deploy to GHL (10-15 min)
1. Export each section as standalone HTML file:
   - `section_01_hero.html`
   - `section_02_trust.html`
   - `section_03_features.html`
   - etc.
2. Each file must be self-contained (inline CSS + JS, or shared stylesheet linked)
3. All images must use hosted URLs (not local paths)
   - Create `ghl_upload/` folder with all images, named descriptively
   - User uploads to GHL Media Library
   - User provides hosted URLs back
   - Update all image references in code
4. User creates GHL funnel with blank pages
5. User adds custom code blocks per section
6. User pastes section code into each block
7. Remove all GHL default padding (set to 0)
8. Verify in GHL preview

### Step 6C: Deploy to Shopify (5-10 min)
1. Export page as single HTML file with inline CSS
2. In Shopify Admin → **Online Store → Pages → Add Page**
3. Toggle to HTML view (`<>`), paste code
4. OR create custom Liquid section for more control:
   - Online Store → Themes → Edit Code
   - Create new section: `sections/[page-name].liquid`
   - Paste code wrapped in section schema
5. Test mobile rendering in Shopify preview
6. Publish when approved

### Step 6D: Quick Deploy to Netlify (1 min)
1. Put `index.html` and any assets in a folder
2. Drag folder to `app.netlify.com/drop`
3. Instant live URL
4. Use for: client preview, ad testing, quick demos

**Checkpoint**: Site is live and accessible.

---

## Context Preservation

If this is a multi-session project:

1. Create `plans/[project-name]-plan.md` at project start
2. Update the plan after completing each step/phase
3. On context reset, Claude reads plan + CLAUDE.md first
4. For large tasks within a phase, use `.memory/` pattern:
   - `.memory/context.md` — goal for current task
   - `.memory/todos.md` — checklist of items
   - `.memory/insights.md` — accumulated results
5. Start a new chat after heavy work to preserve context quality

**Recovery prompt:** "Read `plans/[project-name]-plan.md` and `CLAUDE.md`. Pick up where we left off."

---

## Multi-Page Funnel Workflow

When building multi-page funnels (opt-in → thank you → sales page):

1. **Build the biggest page first** (usually the sales page)
2. This locks in the design system for all remaining pages
3. Build remaining pages in new chats — Claude reads CLAUDE.md and inherits the design system
4. Each page follows the same Steps 2-5
5. Deploy all pages together in Step 6

---

## Edge Cases & Troubleshooting

### Screenshot loop stuck on animated elements
→ Disable screenshot comparison for that section, build from code only

### Reference site uses custom/proprietary assets
→ Don't copy their exact images/icons. Use similar style alternatives or placeholders.

### Client hasn't provided copy
→ Generate draft copy based on brief, clearly mark as `[DRAFT - NEEDS CLIENT APPROVAL]`

### GHL breaks the layout
→ Check for: GHL wrapper padding, conflicting CSS, missing `!important` overrides, unclosed tags

### Shopify theme overrides styles
→ Convert to custom Liquid section with scoped styles, or add `!important` to critical styles

### Site looks great on desktop but breaks on mobile
→ Run dedicated mobile-first rebuild of problematic sections. Don't just add media queries as afterthought.

### First build looks too generic
→ This is expected. The refinement phase (Step 4) is where premium quality happens. Don't skip it.

### Section looks "AI slop" after refinement
→ Take screenshot, iterate in Variant.com for design options, then feed approved variant back to Claude Code

---

## Quality Benchmarks

| Metric | Target |
|--------|--------|
| Reference match (post-clone) | 80%+ |
| Brand consistency | 100% — no off-brand colors/fonts |
| Mobile responsiveness | All 4 breakpoints pass |
| Page load (Lighthouse) | 90+ performance score |
| "AI slop" sections | 0 — every section intentionally designed |
| Animations | Minimum 3: page load reveal, scroll trigger, hover state |
| Image optimization | All images <500KB |
| Data separation | Content in data files, not hardcoded in components |
