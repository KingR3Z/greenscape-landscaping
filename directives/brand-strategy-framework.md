# Brand Strategy Research Framework

> Phase 0 of IBRD — happens BEFORE any design or code work.

## When to Use

- **Always** for new client projects
- **Skip** for template-based quick builds or simple reference clones
- **Abbreviated** when client provides comprehensive brand guidelines

## The Problem This Solves

Jumping straight to cloning a reference site without understanding the brand leads to:
- Generic messaging that doesn't convert
- Design choices that don't match brand positioning
- Copy that sounds like every other AI-generated site
- Missing the "why" behind the client's design preferences

## Phase 0: Brand Strategy Research

### Step 1: Client Brief Gathering (5 min)

Collect from the client (or define yourself):
- Business name and industry
- Core offer / product / service
- Target audience (who are they selling to?)
- Price point
- What makes them different from competitors?
- Existing brand assets (logo, colors, fonts, photos)
- Reference sites they like (and WHY they like them)
- Sites they DON'T like (equally important)

**Save to:** `brand_assets/client_brief.md`

### Step 2: Competitor Research (5-10 min)

Research 3-5 direct competitors:
- What are their websites doing well?
- What messaging/positioning do they use?
- What design patterns dominate the industry?
- Where are the gaps/opportunities?
- What copy formulas are they using? (PAS, AIDA, story-based, etc.)

**Save to:** `plans/brand-research.md`

### Step 3: Brand Positioning (5 min)

Define the client's unique position:
- **Who** is the target customer? (demographics + psychographics)
- **What** is the core promise?
- **How** is this different from competitors?
- **Personality** — 3-5 adjectives (bold, warm, technical, playful, etc.)
- **Voice** — formal/casual, technical/simple, aspirational/practical

**Save to:** `brand_assets/brand_positioning.md`

### Step 4: Messaging Framework (5-10 min)

Create the copy foundation BEFORE touching design:
- **Headline formula:** [Pain point] → [Promise] → [Proof]
- **Value propositions** (3-5, prioritized)
- **Social proof strategy** (testimonials, stats, logos, case studies)
- **Objection handling** (top 3 objections + responses)
- **CTA strategy** (primary CTA text, secondary CTAs)
- **Identity transformation** (before state → after state)

**Save to:** `brand_assets/messaging_framework.md`

### Step 5: Visual Direction Brief (3 min)

Translate brand personality into visual direction:
- **Mood** — dark/light, bold/subtle, minimal/rich
- **Reference sites** that match the vibe (minimum 2)
- **Design elements to include** — specific animations, layouts, effects
- **Design elements to AVOID** — what would feel off-brand
- **Color direction** — warm/cool, saturated/muted, monochrome/colorful

**Save to:** `brand_assets/visual_direction.md`

## Copywriting Workflow

For high-converting pages, write copy BEFORE design:

1. **Use a structured copy framework** (12-step sales letter, PAS, AIDA)
2. **Get client approval on copy** before any design work
3. **Save copy separately** from design — `data/[page]-copy.md`
4. **Feed approved copy to Claude Code** when building the page

This ensures the design serves the message, not the other way around.

## Output Checklist

After Phase 0, confirm these documents exist:

- [ ] `brand_assets/client_brief.md` — What the client wants
- [ ] `plans/brand-research.md` — Competitive landscape
- [ ] `brand_assets/brand_positioning.md` — Who we are
- [ ] `brand_assets/messaging_framework.md` — What we say
- [ ] `brand_assets/visual_direction.md` — How we look
- [ ] `data/[page]-copy.md` — Approved copy (if writing copy)

These feed directly into IBRD Phase 1 (Inspiration).
