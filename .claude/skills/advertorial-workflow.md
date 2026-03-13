# Skill: Advertorial / Landing Page Cloning Workflow

## Objective

Clone a high-converting advertorial or landing page from a proven source, adapt it for a new product/brand, and deploy to Shopify, Netlify, or GHL.

## What Makes This Different from the Main Build Workflow

| Main Build | Advertorial Workflow |
|-----------|---------------------|
| Design-forward (aesthetics matter) | Copy-forward (words do the selling) |
| React/Next.js/Tailwind | HTML + inline CSS (single file) |
| Multi-page sites | Single long-form page |
| Vercel deployment | Shopify / Netlify / GHL |
| Hours of refinement | 30-60 minute turnaround |

## Required Inputs

- **Source page:** PDF capture (Go Full Page), screenshot, or URL
- **Product/offer details** for the new version
- **Target audience** for the new version
- **Deployment target:** Shopify / Netlify / GHL

## Finding Winning Pages to Clone

### Meta Ad Library Method (Best for Advertorials)
1. Go to `facebook.com/ads/library`
2. Search for competitors or industry keywords
3. Filter: All ads, Active
4. Look for ads running **3+ months** (if they're still spending, the page is profitable)
5. Click through to the landing page
6. Capture with Go Full Page Chrome extension → PDF export
7. Save PDF to `reference_assets/`

### Other Sources
- **Google Ads** — search competitor keywords, click through
- **Swipe file collections** — swiped.co, etc.
- **Direct competitor pages** — research their best-performing pages
- **Ad spy tools** — Foreplay, AdSpy, Minea (paid, filter by longest-running)

### What Makes a Page Worth Cloning
- Running for 3+ months (proven profitable)
- Clear editorial feel (looks like an article, not a store)
- Story arc: problem → discovery → solution → offer
- Authority figure (doctor, expert, journalist)
- Heavy social proof throughout
- Clear pricing with multiple options
- Mobile-responsive and clean on phone

## Workflow Steps

### Step 1: Capture Source Page

**Option A — PDF (preferred for advertorials):**
1. Install Go Full Page Chrome extension
2. Navigate to target page
3. Click extension → Download as PDF
4. Drop PDF into `reference_assets/`

**Option B — Screenshot:**
1. Full-page screenshot via Puppeteer
2. Save to `reference_assets/`

**Option C — URL:**
1. Claude navigates and captures via Puppeteer
2. Save screenshot to `reference_assets/`

### Step 2: Extract Template

Invoke **template-extraction** skill on the source page.
Save template to `templates/` directory.

**Special attention for advertorials:**
- Editorial-style headlines (news hook, curiosity gap)
- Story structure (personal narrative, problem discovery, solution reveal)
- Native ad disclaimers / "advertorial" labels
- Inline CTA patterns (text links, not just buttons)
- Image placements (product shots, before/after, lifestyle, graphs)
- Testimonial/review formats
- Related articles sections (click traps)

### Step 3: Create Content for New Version

Using the extracted template + new product details:

1. Write all copy following the template's formulas
2. Adapt the hook/angle for the target audience
3. Replace product-specific claims with new product claims
4. Update social proof with new testimonials/stats
5. Adapt CTA text for new offer

Save copy to `data/advertorial-content.md` (deterministic: separate data from presentation).

### Step 4: Build the Page

- **HTML + inline CSS** (single file, self-contained)
- Mobile-first responsive
- Fast loading (no frameworks, minimal JS)
- Match the source page's visual treatment:
  - Font choices (editorial sites typically use serif for body)
  - Color scheme (muted, editorial feel)
  - Image placement and sizing
  - CTA button styling
  - Section spacing and dividers

### Step 5: Generate Images (Optional)

If placeholder images need replacing:
- Use Kling 3.0 for product/lifestyle images (`tools/kling_video.py`)
- Or use AI image generation API (Gemini, DALL-E, etc.)
- Replace placeholders in HTML with generated images
- For Shopify/GHL: host images externally or upload to media library

### Step 6: Angle Variations (Optional)

Same template, different audience/hook:
1. Clone the HTML file
2. Swap the copy from a new `data/advertorial-content-[angle].md`
3. Different headline, story angle, audience targeting
4. Same structure, different message

**Examples:**
```
Same template → "for busy moms" angle
Same template → "for athletes" angle
Same template → "for seniors" angle
Same template → "beauty editor investigation" hook
Same template → "doctor discovery" hook
```

Each variation takes ~5 minutes. Generate 5-10 and let Meta pick the winner.

### Step 7A: Deploy to Shopify

1. Copy the full HTML + inline CSS
2. In Shopify Admin: **Online Store → Pages → Add Page**
3. Click `<>` (Show HTML) in the rich text editor
4. Paste the HTML code
5. Save and preview

**If styling breaks inside Shopify theme:**
```
Convert it to a custom Liquid section:
- Go to Online Store → Themes → Edit Code
- Create new section: sections/advertorial.liquid
- Paste code wrapped in section schema
- Add section to a template
```

### Step 7B: Deploy to Netlify (Quick Testing)

1. Put `index.html` and any assets in a folder
2. Drag the folder to `app.netlify.com/drop`
3. Instant live URL in 10 seconds
4. Use for: client review, ad testing, quick demos

### Step 7C: Deploy to GHL

Follow the standard GHL deployment from the main build workflow:
1. Export sections as numbered HTML files
2. Upload images to GHL Media Library
3. Get hosted URLs for all images
4. Update image references in code
5. Paste sections into GHL custom code blocks
6. Remove all GHL default padding (set to 0)

### Step 7D: Deploy to Vercel

Follow the standard Vercel deployment from the main build workflow.

## Quality Checklist

- [ ] Copy follows the source template's formulas exactly
- [ ] Visual style matches the editorial/native ad feel
- [ ] All CTAs link to the correct product/offer page
- [ ] Mobile rendering is clean (test at 375px)
- [ ] Page loads fast (no heavy assets)
- [ ] Advertorial disclaimer present if required
- [ ] No placeholder text remaining
- [ ] Images are relevant and properly sized
- [ ] Forms/opt-ins work (if applicable)

## Tips

- **Use your winning ad copy.** If an ad performs well, the advertorial should extend that exact message.
- **One page per ad angle.** Don't send traffic from 5 different ads to the same page.
- **Keep the proven structure.** The template converts for a reason. Don't rearrange sections.
- **Test the mechanism section hardest.** The "here's what you don't know" section is highest leverage.
- **Steal structure, never copy.** Extract the framework, write original copy.
