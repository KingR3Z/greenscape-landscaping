# Template Library

## What Templates Are

Templates are reverse-engineered page structure files stored as `.md` files. They capture the EXACT section structure, copy formulas, and design patterns of high-performing pages so they can be reused with different brands/products.

## Template Structure

Each template file contains:

### 1. Source Information
- Source URL or "PDF capture from [source]"
- Date captured
- Industry/niche
- Page type (homepage, landing page, advertorial, sales page, funnel page)
- Conversion goal (lead gen, purchase, booking, registration, etc.)

### 2. Sections (in order)
For each section:
- **Section name** — descriptive (e.g., "Authority Hero with Social Proof")
- **Purpose** — what it does for conversion
- **Copy formula** — the copywriting pattern used (PAS, AIDA, Before/After, etc.)
- **Content elements** — headline, subhead, bullets, CTA, images, etc.
- **Design pattern** — layout, colors, typography, spacing
- **Responsive behavior** — how it changes on mobile

### 3. Conversion Architecture
- Primary CTA type and placement frequency
- Social proof strategy
- Objection handling approach
- Urgency/scarcity elements (if any)

## Template Naming Convention

```
[page-type]-[industry]-[descriptor].md
```

**Examples:**
```
homepage-saas-hero-centric.md
landing-page-ecommerce-product-showcase.md
advertorial-supplement-editorial-style.md
sales-page-coaching-long-form.md
funnel-optin-lead-magnet.md
funnel-webinar-registration.md
```

## How to Create a Template

### Method 1: From PDF (Go Full Page Chrome Extension)
1. Install Go Full Page Chrome extension
2. Navigate to the target page
3. Click extension → Download as PDF
4. Drop PDF into `reference_assets/`
5. Invoke the **template-extraction** skill
6. Claude analyzes and generates the template `.md` file
7. Saved to `templates/`

### Method 2: From Screenshot / URL
1. User provides page URL or full-page screenshot
2. Claude captures screenshot via Puppeteer (if URL)
3. Invoke the **template-extraction** skill
4. Same process as Method 1

### Method 3: From Existing Build
1. After building a successful page, extract its structure
2. Generalize: replace specific copy with formula descriptions
3. Save as reusable template

## How to Use a Template

1. Choose a template: "Use `templates/[name].md`"
2. Provide brand details + product/service info
3. Claude reads the template and generates:
   - Content/copy following the template's formulas
   - Code following the template's section structure
   - Design following the template's patterns (adapted to brand)
4. Result: structurally identical page with completely new brand

## Angle Variations

Same template + different audience/hook = different version:

```
Template: advertorial-supplement-editorial-style.md

Variation 1: "for busy moms" angle → advertorial-v1-busy-moms.html
Variation 2: "for athletes" angle → advertorial-v2-athletes.html
Variation 3: "for seniors" angle → advertorial-v3-seniors.html
```

Each gets different copy but identical structure.

## Template Sources

| Source | Best For | How to Capture |
|--------|----------|----------------|
| Competitor sites | Homepage/landing page templates | Screenshot or PDF |
| Meta Ad Library | Proven advertorials (3+ months running) | Go Full Page PDF |
| Own successful builds | Reusable frameworks | Extract after launch |
| Dribbble / Godly / Awwwards | Design inspiration templates | Screenshot |
| CodePen | Component-level patterns | Copy code directly |
