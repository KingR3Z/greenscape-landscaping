# Skill: Template Extraction

## Objective

Analyze any page (via PDF, screenshot, URL, or live site) and reverse-engineer its exact structure into a reusable `.md` template file saved to `templates/`.

## Required Inputs

- **Page source:** PDF file, screenshot image, or URL
- **Page type** (if known): homepage, landing page, advertorial, sales page, funnel page
- **Industry/niche** (if known)

## Workflow Steps

### Step 1: Capture (if URL provided)

1. Take full-page screenshot via Puppeteer
2. Save to `reference_assets/template_source_[name].png`
3. If possible, capture computed styles from `<body>`

If PDF or screenshot is already provided, skip to Step 2.

### Step 2: Analyze Structure

Go through the page **top-to-bottom** and document EVERY section.

For each section, extract:

**a) Section name** — descriptive (e.g., "Problem Agitation Section")

**b) Section purpose** — what it does for conversion:
- Builds trust / Creates urgency / Handles objections
- Introduces the offer / Establishes authority
- Drives action / Reduces risk

**c) Copy formula** — the copywriting pattern used:
- PAS (Pain → Agitation → Solution)
- AIDA (Attention → Interest → Desire → Action)
- Before/After/Bridge
- Feature → Benefit → Proof
- Story Arc (problem → discovery → solution → transformation)
- Root cause reframe ("what you've been told is wrong")

**d) Content elements:**
- Headline (note: question? statement. command!)
- Subheadline presence and relationship to headline
- Body copy length (short/medium/long)
- Bullet points (number, style)
- Images (type: product, lifestyle, icon, illustration, before/after)
- CTA (text, style, placement)
- Social proof (type: testimonial, stat, logo, badge, star rating)

**e) Design pattern:**
- Layout (full-width, contained, split, grid, stacked)
- Background treatment (solid, gradient, image, dark/light alternation)
- Typography hierarchy (what's biggest, what stands out)
- Spacing (tight/normal/generous)
- Visual emphasis (borders, shadows, color blocks, icons)

**f) Responsive notes** (if visible from source)

### Step 3: Identify Conversion Architecture

After all sections are analyzed:
- Map the emotional journey (attention → interest → desire → action)
- Count CTA placements and note their positions
- Identify the social proof strategy (type, frequency, placement)
- Note objection handling sections and placement
- Note urgency/scarcity mechanisms
- Identify the "pattern interrupt" or unique hook

### Step 4: Generate Template File

Create the `.md` file using this format:

```markdown
# Template: [Page Type] — [Descriptor]

**Source:** [URL or file name]
**Captured:** [date]
**Industry:** [industry]
**Page Type:** [type]
**Conversion Goal:** [goal]
**Total Sections:** [count]

---

## Section 1: [Name]

**Purpose:** [conversion purpose]
**Copy Formula:** [formula name]

**Content:**
- Headline: [format/formula — e.g., "Question that challenges assumption"]
- Subheadline: [format/formula]
- Body: [length, tone, structure]
- CTA: [text pattern, placement]
- Visual: [image type, layout]
- Social Proof: [type, if present]

**Design:**
- Layout: [description]
- Background: [treatment]
- Typography: [hierarchy notes]
- Spacing: [tight/normal/generous]

---

## Section 2: [Name]
[repeat for all sections]

---

## Conversion Architecture

**Emotional Journey:** [mapped flow]
**CTA Strategy:** [count, placement pattern]
**Social Proof:** [strategy summary]
**Objection Handling:** [where and how]
**Urgency/Scarcity:** [mechanisms used]
```

### Step 5: Save Template

1. Generate file name: `[page-type]-[industry]-[descriptor].md`
2. Save to `templates/` directory
3. Confirm template saved and provide section summary

## Quality Checklist

- [ ] Every visible section is documented (no skipping)
- [ ] Copy formulas are identified (not just "has a headline")
- [ ] Design patterns are specific enough to reproduce
- [ ] Conversion architecture is mapped
- [ ] Template is usable WITHOUT the original source
- [ ] File name follows naming convention
