# Premium Website Generator

## What This Is
A Claude Code project system for building premium, $10K-quality websites on autopilot. Combines best practices from Nick Saraev, Nate Herk, Luke Carter, Chase AI, and the Figma MCP workflow into a single repeatable process.

## How It Works

### The IBRD Framework
1. **Inspiration** — Find a premium reference site, capture screenshot + styles
2. **Build** — Clone the reference structure, run screenshot comparison loops
3. **Refine** — Swap in client brand, upgrade components via 21st.dev, iterate
4. **Deploy** — Push to Vercel (or export modular sections for GHL)

### Quality Multipliers (in order of impact)
1. **Frontend Design Skill** — Invoked every session, prevents AI slop
2. **Screenshot Comparison Loop** — Puppeteer screenshots → compare → fix → repeat
3. **Reference Site Cloning** — Start from proven design, not blank canvas
4. **21st.dev Components** — Premium backgrounds, buttons, cards, animations
5. **Section-by-Section Refinement** — Human taste applied through iteration

## Quick Start

### For a New Client Website
1. Duplicate this project folder
2. Fill in `brand_assets/brand_guidelines_TEMPLATE.md` → rename to `brand_guidelines.md`
3. Drop client logo into `brand_assets/`
4. Open in Claude Code
5. Tell Claude: "Read the CLAUDE.md. I want to build a website for [client]. Reference site: [URL]. Use the website-build-workflow skill."
6. Claude will execute the full IBRD workflow

### For Autopilot (Webhook-Triggered)
Deploy the workflow to Modal with a webhook trigger:
- Webhook receives: client name, brand colors, logo URL, reference site URL, copy
- Claude Code executes the full build pipeline
- Output: deployed site on Vercel OR GHL-ready code sections
- Notification sent on completion

## File Structure
```
premium-website-generator/
├── CLAUDE.md                              ← Project brain (read every session)
├── README.md                              ← This file
├── .claude/
│   └── skills/
│       └── website-build-workflow.md       ← Full build SOP
├── brand_assets/
│   ├── brand_guidelines_TEMPLATE.md        ← Fill per client
│   ├── logo.png                            ← Client logo
│   └── images/                             ← Client photos
├── reference_assets/
│   ├── reference_screenshot.png            ← Full-page capture
│   ├── reference_styles.css                ← Computed styles
│   └── analysis.md                         ← Reference site analysis
├── src/                                    ← Site source code
├── temp_screenshots/                       ← Auto-managed by Puppeteer
├── ghl_upload/                             ← Images for GHL (if applicable)
└── dist/                                   ← Build output
```

## Key Tools Referenced
- **Claude Code** — Agent coder (Opus 4.5/4.6 or Sonnet 4.5)
- **21st.dev** — Premium UI component library (copy prompt → paste into Claude)
- **Puppeteer** — Automated screenshots for comparison loops
- **Variant.com** — Visual design mockups for client sign-off (optional)
- **Copy Coach** — AI copywriting tool (optional, or use sub-agent)
- **Vercel** — Deployment (GitHub auto-deploy)
- **GoHighLevel** — Alternative deployment for funnel clients
- **Modal** — Backend hosting for autopilot webhook triggers

## Automation Integration (ShopFunnels)
This system is designed to plug into your existing pipeline:
- **Airtable** → Client data intake (brand info, reference URLs, copy)
- **Webhook** → Triggers build via Modal
- **Claude Code** → Executes full IBRD workflow
- **GitHub/Vercel** → Auto-deploys finished site
- **Notification** → Email/Slack alert on completion

## Tips From the Transcripts
- Always start with the biggest/hardest page first (Luke Carter) — remaining pages go 3x faster
- Start new Claude Code chat for each page to avoid context compaction (Luke Carter)
- Use voice dictation for iteration feedback — 3x faster than typing (Nick Saraev)
- Disable screenshot loop for animated elements (Nate Herk)
- Name screenshots with convention or they pile up unnamed (Nate Herk)
- Add mobile optimization explicitly — Claude won't prioritize it unprompted (Nate Herk)
- "What is the most elegant solution?" is the magic prompt for pushing past AI slop (Luke Carter)
- Plan mode before building complex pages saves massive time/tokens (Nick Saraev)
