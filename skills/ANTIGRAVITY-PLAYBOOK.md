# ANTIGRAVITY WEBSITE BUILD PLAYBOOK

Master system for building, cloning, and selling premium websites using Google Antigravity + Stitch.
Synthesized from 12 Jack Roberts transcripts + 1 RoboNuggets transcript + Claude Code Power Pack (Sam/Channel Changers) + Premium Website Generator (IBRD framework) + WAAM agency strategy.

**Companion Docs (load when needed):**
- `DESIGN-INTELLIGENCE.md` — 5 Core Design Dimensions (patterns, styles, colors, fonts, animations)
- `PREMIUM-COMPONENTS.md` — GSAP animation component library + brand template
- `INSTANT-PUBLISH-SKILL.md` — Full GitHub + Vercel deployment skill
- `STITCH-SETUP.md` — Stitch MCP connection guide

---

## TECH STACK

| Tool | Purpose | Cost |
|------|---------|------|
| Google Antigravity | Primary IDE — scalable production code | FREE |
| Google Stitch | Design agent — multi-page visual design | FREE |
| Google AI Studio | First-shot design — flashy visuals | FREE |
| Claude Code (in Antigravity) | Sub-agents for parallel tasks | Included (Max plan) |
| GitHub | Code storage + version control | FREE |
| Vercel | Hosting + auto-deploy from GitHub | FREE tier |
| Firecrawl | Brand DNA extraction (logos, colors, fonts) | FREE playground |
| Apify | Lead scraping (Google Maps, Yelp, etc.) | $5 free credits |
| AnyMailFinder | Email enrichment | Free tier available |
| Instantly | Email outreach campaigns | Free tier available |
| 21st.dev | UI component sniping | FREE |
| CodePen | Animation/interaction sniping | FREE |
| Spline | 3D website assets (industry standard) | FREE tier |
| Google Whisk | Start/end frame generation for animations | FREE |
| Google Flow | Frame-to-video animation (VQ3.1 quality) | FREE |
| EZgif | Video → JPEG frame extraction | FREE |
| Magic UI | Rainbow buttons, shimmer, text animations | FREE MCP |
| Weevi.ai | Mood boards (Figma ecosystem) | FREE |
| Beehive | Email newsletter capture (great deliverability) | FREE tier |
| Go High Level | CRM + funnel builder (inbound webhooks) | Paid |
| Supabase | Backend database for user accounts/forms | FREE tier |
| MidJourney | Reference image generation (explore tab) | Paid |
| Nano Banana Pro | AI image generation via Gemini | FREE |
| coolors.co | Color palette generation | FREE |
| Cosmos.so | Design reference/inspiration | FREE |
| fontsinuse.com | Font research + typography inspiration | FREE |
| Dribbble/Mobbin | Design inspiration | FREE |
| Next.js 16 | React framework — premium template foundation | FREE |
| GSAP 3.14 | Animation library — ScrollTrigger, SplitText, parallax | FREE (non-commercial) |
| Lenis | Smooth scroll library — buttery scroll feel | FREE |
| Tailwind CSS 4 | Utility-first CSS framework | FREE |
| Puppeteer | Screenshot comparison loops — automated QA | FREE |
| Modal | Backend hosting for autopilot webhook triggers | Free tier |

---

## REQUIRED SKILLS (Install in Antigravity)

### Must-Have
1. **UI/UX Pro Max** — 100+ design rules, 67+ UI styles, 95+ color palettes, SEO, accessibility audit. 31K+ GitHub stars.
   - GitHub: `https://github.com/nextlevelbuilder/ui-ux-pro-max-skill.git`
   - Install: Copy GitHub repo URL → tell Antigravity to install
   - Has a full **Design Intelligence prompt template** — see `DESIGN-INTELLIGENCE.md` for the 5 Core Dimensions
2. **Stitch Skills (6 Power Skills)** — Project analysis, React components, Stitch loops, prompt enhancement, video walkthroughs
   - Install: Copy GitHub repo URL → tell Antigravity to install
3. **Antigravity Skill Creator** — Framework for creating reusable skills from any workflow
   - Available in Jack Roberts' community resources
4. **Brand Design Skill** — Brand identity extraction and application
5. **Planning Skill** — Project scaffolding and task breakdown

6. **Instant Publish Skill** — End-to-end GitHub + Vercel deployment, auto-connects repos
   - From Jack Roberts' AntiGravity 3D Websites pack
   - Full workflow in `INSTANT-PUBLISH-SKILL.md`
7. **Frontend Design Skill** — Invoked every session, prevents AI slop (from Power Pack)
   - Creates brand-aware, non-generic output

### Nice-to-Have
- **Spline Skill** — 3D asset integration, embed interactive 3D scenes
   - Google Drive: `https://drive.google.com/drive/folders/1IEQXLhsDnRsEyc8XFvxUMQ9aErzY5hGA`
- **Troubleshooting Skill** — Systematic debugging, follows specific flowchart
- **Script Execution Skill** — Run bash/Python scripts from within Antigravity (careful: powerful)
- **Reddit Scraper Skill** — Research via Reddit API, find pain points and product ideas
- **Opra Superpowers** — ~50K stars, transforms Claude into coding superpowers
- **Go High Level Converter** — HTML/CSS export for GHL funnels

### Claude Skills vs Antigravity Skills
- **Claude Skills** = Knowledge files (Markdown). Model reads then acts. Best for: design rules, brand guidelines, checklists
- **Antigravity Skills** = Automation (executable code). Runs within the skill context. Best for: deployment, scraping, file generation
- Both can be created via the Skill Creator framework
- Skills save tokens vs repeating instructions every chat

---

## MCP CONNECTIONS (Configure in Antigravity)

### Required
1. **Stitch MCP** — Connect Antigravity ↔ Stitch for programmatic design
   - Get API key: stitch.withgoogle.com/settings → Create key
   - Add via: Agent Manager → MCP → paste config with API key
   - Tag @mcp_config.json when adding

2. **GitHub MCP** — Already built into Antigravity (authenticate via Homeroom)

3. **Vercel MCP** — Programmatic deployment
   - Get token: vercel.com/account/tokens → Create token
   - Config to add in Antigravity:
   ```json
   "vercel": {
     "command": "npx",
     "args": ["-y", "@robinson_ai_systems/vercel-mcp"],
     "env": { "VERCEL_TOKEN": "YOUR_VERCEL_TOKEN" }
   }
   ```
   - Prompt: "I would like you to add the below Vercel MCP to my MCP config within Antigravity. Please confirm when this is done and that you have access."

### Optional (for lead generation & features)
4. **Apify MCP** — 8,000+ scraping actors
   - Get API key: console.apify.com → Settings → API & Integrations
5. **Supabase MCP** — Backend database (user accounts, form submissions, waitlists)
6. **Firecrawl MCP** — Website scraping and brand extraction
7. **Magic UI MCP** — UI component library (rainbow buttons, shimmer effects, animated text)
   - Adds beautiful micro-interactions without custom code
8. **Beehive MCP** — Email newsletter integration (if using Beehive for lead capture)

### Token Management
- Remove/disable MCPs you're not actively using
- Keep total MCP tools under 50
- Each MCP adds to context window cost

---

## VIBE DESIGN PROCESS (Pre-Build Creative Intelligence)

Before touching code, build your creative vision. This is what separates $500 websites from $10,000 websites.

### Step 1: Mood Board (Weevi.ai)
- Go to weevi.ai (part of Figma ecosystem)
- Combine: reference images + video gen models + text prompts
- Output: visual direction for the entire project
- Save mood board images for reference during build

### Step 2: Font Selection
- **fontsinuse.com** — See fonts in real-world usage (best resource)
- **Adobe Fonts** — Professional typography library
- **idography** — Curated font pairings
- Rule: Pick 2 fonts max (1 heading, 1 body). Consistency > variety.

### Step 3: Color Palette
- **coolors.co** — Generate palettes, lock colors you like, randomize rest
- Extract from client's existing brand (Firecrawl) or mood board
- Rule: 1 primary, 1 secondary, 1 accent, 1 neutral. Max 4-5 colors.

### Step 4: Reference Images
- **MidJourney Explore tab** — Browse generated images for hero/section inspiration
- **Cosmos.so** — Clean, modern design references
- **Dribbble** — Search "[niche] website design"
- **Google Whisk** — Generate start/end frames for scroll animation concepts

### Step 5: Competitive Research
- **Firecrawl** — Enter competitor URL → extract full brand DNA (colors, fonts, layout)
- Analyze top 5 competitors: what works, what's missing, where to differentiate
- Don't copy — elevate. Take the best patterns, improve on weaknesses.

---

## THE BUILD PIPELINE

### Phase 1: Research & Reference (15 min)

**Goal:** Understand what makes top websites in the niche convert.

1. **Scrape top performers:**
   ```
   Prompt: "Find the top 5 websites for [niche] in [location] based on Google reviews.
   Scrape their websites and tell me: What do they all have in common?
   What are the 10 things the best ones do that the worst ones don't?"
   ```

2. **Extract brand DNA** (for cloning existing client sites):
   - Firecrawl playground: firecrawl.dev/playground → enter URL → select "branding"
   - Gets: full color palette, fonts, logos, layout patterns

3. **HTML extraction** (for design replication):
   - View page source of reference site → download HTML
   - Feed to AI Studio as design reference
   - Note: Use for structure/animation reference, build original code

4. **UI component sniping:**
   - 21st.dev → "Best of the week" → find components you like
   - Copy component code → share with Antigravity to implement
   - CodePen → search animations, interactions, scroll effects

### Phase 2: Design First Shot in AI Studio (10 min)

**Why AI Studio first:** Optimized for visual design excellence. Has access to more dependencies. Gets you 80% there with one prompt.

**Why NOT Antigravity first:** Antigravity builds for scalability/longevity, not initial visual flash. AI Studio gets the "wow" factor.

1. **Upload reference:** HTML file from reference site + screenshot from Dribbble/Mobbin
2. **Prompt template:**
   ```
   I'd like you to design a beautiful website for a [niche] company.
   Include the following elements and vibe:
   [2-3 sentence overview of ideal website from research phase]
   Make the hero image gorgeous.
   Follow the attached HTML for design style guidance.
   ```
3. **Iterate page by page** — Stitch's strongest feature is step-by-step refinement
4. **Use 3x mode** — Generates 3 alternatives simultaneously, pick the best
5. **Should take <2 min** — If longer, something's wrong
6. **Theme editing:** Click Edit → Annotate or Edit Theme → adjust colors, fonts, corners

### Phase 3: Export to Antigravity (5 min)

**From AI Studio:**
1. Click Export → Download as .zip
2. Open folder in Antigravity
3. Prompt: "I've imported code for a [X]-page web app. Codify this into an application and open it in localhost."

**From Stitch:**
1. Select screens (Cmd+click to select multiple)
2. Export → .zip (gets both images and HTML)
3. Open in Antigravity → same codify prompt

**Key insight:** AI Studio has broader dependency access. By building there first, the imported code carries those dependencies into Antigravity.

### Phase 4: Polish in Antigravity (15 min)

1. **Apply research findings:**
   ```
   Based on the analysis of the top 10 performing websites for [niche]:
   Edit the copy and functionality to align with the key aspects that drive performance.
   Pay close attention to copy, the promise, the flow.
   Add sections that need to be added based on what's actually working.
   ```

2. **Run UI/UX Pro Max audit:**
   ```
   Use the UI/UX Pro Max skill plugin and run the website through all checklists.
   Don't change the design — make sure it aligns with all UI and UX rules.
   Provide a checklist with green tick boxes of all improvements made.
   ```
   - Checks: contrast, spacing, touch targets, lazy loading, eager loading on hero, animation responsiveness, focus-visible, cursor pointer, SEO tags, accessibility

3. **Mobile responsiveness check:**
   - Bring browser width down to mobile dimensions
   - Verify breakpoints and trigger points

4. **UI Sniping** (if needed):
   - 21st.dev → copy component → "Hey, implement this component" in Antigravity
   - Don't overindex on flash — clean and converting > flashy

### Phase 5: Deploy (5 min)

1. **Push to GitHub:**
   ```
   Create a GitHub repo called [project-name] and push all files.
   ```
   - Make repo private (Settings → Change visibility → Private)

2. **Deploy to Vercel** (via MCP):
   ```
   Using the Vercel plugin, publish the website from GitHub to Vercel.
   Share the published URL.
   ```
   - Any change in Antigravity → auto-reflects on GitHub → auto-reflects on Vercel

3. **Verify live site:**
   - Check for 404/401 errors
   - If errors: screenshot → send to Antigravity → "Fix this error and reupload to GitHub"
   - Check logo loads correctly
   - Check mobile view

---

## PAGES FRAMEWORK (Alternative Build Flow — $10K Websites)

For premium builds where you want maximum visual impact. Slower but higher value.

### P — Purpose (5 min)
Define the website's core intent before anything else:
```
"This website needs to: [convert visitors to bookings / sell products / capture leads / establish authority]
Target audience: [who]
Key differentiator: [what makes this business special]
Tone: [professional/playful/luxurious/approachable]"
```

### A — Anchor (15 min)
Create the visual anchor — the hero section and overall design direction:
1. Feed mood board + reference images to AI Studio or Stitch
2. Get 3x variations (Stitch 3x mode)
3. Pick the strongest, iterate once
4. This sets the design language for every other section

### G — Guide (15 min)
Build the guided journey — the scroll experience:
1. Map the story: Hook → Pain → Solution → Proof → Action
2. Add scroll animations (see Scroll Animation System below)
3. Each section should have ONE clear purpose
4. Progressive disclosure — don't overwhelm, reveal

### E — Elevate (10 min)
Polish to premium quality:
1. Run UI/UX Pro Max audit
2. Add micro-interactions (Magic UI MCP: rainbow buttons, shimmer, text reveals)
3. Check typography hierarchy (h1 > h2 > h3 > body)
4. Verify spacing rhythm (consistent padding/margins)
5. Mobile-first responsive check

### S — Ship (5 min)
Deploy and verify:
1. Push to GitHub → Deploy to Vercel (via MCP)
2. Lighthouse audit (performance, accessibility, SEO)
3. Cross-device testing
4. Share live URL

---

## IBRD FRAMEWORK (Alternative Build Flow — Screenshot-Driven)

For builds where you start from a reference site and clone quality. Best for client work where you have a clear reference.

### I — Inspiration (10 min)
1. Find a premium reference site (godly.website, landbook.com, awwwards.com)
2. Screenshot the full page + capture computed styles
3. Drop screenshot + HTML into AI Studio for analysis
4. Extract: layout patterns, color usage, typography hierarchy, animation style

### B — Build (20 min)
1. Clone the reference structure (not the content)
2. Run **Screenshot Comparison Loop**:
   - Puppeteer takes screenshot of your build
   - Compare side-by-side with reference screenshot
   - Fix the biggest difference
   - Repeat until visually matching (usually 3-5 loops)
3. Each loop tightens the quality gap automatically

### R — Refine (15 min)
1. Swap in client brand (colors, fonts, logo, copy)
2. Upgrade components via 21st.dev ("copy prompt" → paste into Antigravity)
3. Run UI/UX Pro Max audit
4. Section-by-section human review — apply taste

### D — Deploy (5 min)
1. Push to GitHub → Deploy to Vercel (use Instant Publish Skill)
2. Or export modular sections for GoHighLevel funnels

### Quality Multipliers (in order of impact)
1. **Frontend Design Skill** — Invoked every session, prevents AI slop
2. **Screenshot Comparison Loop** — Puppeteer screenshots → compare → fix → repeat
3. **Reference Site Cloning** — Start from proven design, not blank canvas
4. **21st.dev Components** — Premium backgrounds, buttons, cards, animations
5. **Section-by-Section Refinement** — Human taste applied through iteration

### Screenshot Comparison Loop (How It Works)
```
1. Take Puppeteer screenshot of current build
2. Place side-by-side with reference screenshot
3. Ask AI: "Compare these two screenshots. What are the top 3 differences?"
4. Fix the biggest difference
5. Take new screenshot → compare again
6. Repeat until match (usually 3-5 iterations)
```
**Tip:** Disable the loop for animated/interactive elements — screenshot captures static state only.

---

## VIBE CODING 5-PHASE WORKFLOW

*Source: Julian (Member Stack) — replaced a 100-page Webflow site in 2 weeks. From the Power Pack.*

### Phase 1: Foundation (CRITICAL — Do NOT skip)
Screenshot existing/competitor site, create a comprehensive markdown file:
```
Screenshot [site]. Create a markdown file explaining:
- What the product is
- Brand voice
- Visual specs: corners, spacing, colors, typography, animations,
  hero patterns, card styles, buttons
```
This is THE most important step. Skip this = generic output.

### Phase 2: Eliminate What You Hate
Prompt "Make me a homepage" (expect garbage), find the worst thing, fix it, repeat.

### Phase 3: Cherry-Pick Variations
"Make me THREE different hero sections." Then combine the best parts from each.

### Phase 4: Reference Your Own Work
Once design language is established, stop referencing the original markdown. Tell it: "Look at the rest of my site for visual reference."

### Phase 5: Push Creativity
For creative sections, add this to prompts (from Stanford research — 1.6-2.1x creativity boost):
```
Sample from the distribution tails. Generate responses that would
fall in the 10% on either end of the probability distribution,
not the safe middle 80%.
```

---

## SCROLL ANIMATION SYSTEM (Google Whisk + Flow)

Premium scroll animations that make websites feel alive. This is the differentiator for $5K+ sites.

### How It Works
1. **Create start frame** — Google Whisk: upload/generate the "before scroll" state
2. **Create end frame** — Google Whisk: generate the "after scroll" state
3. **Generate video** — Google Flow: feed start + end frames → generates smooth transition video (VQ3.1 quality)
4. **Extract frames** — EZgif.com: upload video → split to frames → download as JPEGs
5. **Implement in code** — Antigravity: "Create a scroll-linked animation using these frames. As the user scrolls, cycle through frames 1-30 to create a smooth animation effect."

### Use Cases
- Hero parallax effects (background transforms as you scroll)
- Product reveals (item rotates/assembles on scroll)
- Before/after transformations (medical, dental, beauty)
- Data visualizations that build up
- Logo morphing / brand reveals

### Prompt for Implementation
```
I have [X] frames extracted from a scroll animation video.
As the user scrolls through this section, cycle through the frames
sequentially to create a smooth scroll-linked animation.
Use Intersection Observer + scroll position to calculate which frame to show.
Preload all frames for smooth performance.
```

---

## 3D ASSETS (Spline Integration)

### When to Use 3D
- Landing pages that need "wow factor"
- Tech/SaaS products
- Interactive product showcases
- NOT for every service business — use sparingly

### How to Add 3D
1. **Spline** (spline.design) — Industry standard for web 3D
   - Browse community assets or create custom
   - Export as embed code or React component
2. **Install Spline skill** in Antigravity
3. **Prompt:**
   ```
   Using the Spline skill, add an interactive 3D element to the hero section.
   [Describe what you want: floating product, abstract shape, interactive globe, etc.]
   Make sure it doesn't slow page load — lazy load the 3D scene.
   ```

### Spline Workflow (Detailed)
1. Go to spline.design → Community → browse assets
2. Click **Remix** on any asset (free, 3 slots — archive old ones to free up)
3. In the editor: click unwanted elements → hide them (like removing logos/text)
4. Click **Export** → **Code Export**:
   - **Play Settings**: hide background color (important for dark themes)
   - **Framework**: choose correct one (ask Antigravity: "which JS framework does our project use?")
   - Click **Update Code Export**
5. Copy the `prod.spline` URL
6. Preview at **fetch.sub** before integrating (optional but recommended)
7. In Antigravity: "Integrate this 3D asset at [location]. URL: [paste URL]. Use the Spline skill."

### Performance Rules
- Lazy load ALL 3D elements (never eager)
- Provide fallback image for slow connections
- Keep polycount low for mobile
- Test on mid-range devices, not just your machine

---

## BACKEND INTEGRATIONS

### Beehive (Email Newsletter Capture)
- Great deliverability out of the box
- Connect via API key in Antigravity
- Add email capture form to website → feeds subscriber list
- Use for: waitlists, newsletter signups, lead magnets

### Go High Level (CRM/Funnels)
- Connect via inbound webhook
- Website form submission → triggers GHL workflow
- Pipeline: Form → Webhook → GHL → Auto-email + CRM entry
- Also useful for: booking automations, SMS follow-ups

### Supabase (Backend Database)
- Connect via Supabase MCP in Antigravity
- Use for: user accounts, form submissions, dynamic content
- Free tier generous for small sites
- Enable Row Level Security for production sites

### Form Providers (Free Contact Forms)
- **Formspree** — formspree.io (most popular, free tier)
- **Web3Forms** — web3forms.com (alternative)
- Get endpoint URL → give to Antigravity: "Set up [Formspree] so contact form submissions route to [endpoint URL]"

### Hosting Alternatives
- **Vercel** — Best for React/Next.js, auto-deploy from GitHub (primary choice)
- **Netlify** — Best for simple HTML/JS sites, drag-and-drop deploy, free CLI deploy
- **GitHub Pages** — Free static hosting directly from repo

### Prompt for Adding Backend
```
Set up a Supabase backend for this website.
Create a table for [form submissions / user accounts / waitlist signups].
Connect the [contact form / signup form] to write to this table.
Add proper validation and error handling.
```

---

## THE CLONING SYSTEM

### How It Works

One optimized template → infinite branded clones for different clients. Change 7 components, keep everything else.

### The 7 Clone Components

1. **Business Identity** — Name, logo, branding, copyright
2. **Reviews & Testimonials** — Real Google reviews, star ratings, names
3. **Contact Information** — Phone, email, Instagram, address
4. **Location & Service Areas** — Neighborhoods, cities, radius
5. **Pricing & Service Tiers** — Plans, prices, inclusions
6. **Color Scheme** — Primary/secondary/accent colors matching their brand
7. **Stats & FAQ** — Numbers, common questions, unique selling points

### Cloning Process

1. **Deconstruct the template:**
   ```
   Break down the existing website into components. I want to clone this
   for 50+ businesses. Identify the 7 things that change per business:
   logo, testimonials, colors, contact info, service areas, pricing, etc.
   ```

2. **Config-driven architecture** (Antigravity will suggest this):
   - Creates a single `siteconfig.ts` file
   - All variable content flows from config
   - Swap config = new branded website

3. **Clone for a specific business:**
   ```
   Clone the website with a different brand. Create folder "website-2" on
   the left side. Fill out all info for [Business Name]. Grab their logo
   from their existing website. Use dummy data for anything missing.
   ```

4. **Turn into a reusable skill:**
   ```
   Based on the entire cloning process, create an Antigravity skill called
   "website-cloning-skill". When given a business, it runs through this
   process to replicate the website. Use this skill creator framework:
   [paste skill creator template]
   ```

5. **Also create a deployment skill:**
   ```
   Create a skill for publishing to GitHub then Vercel, including the logo
   fix we discovered. Incorporate learnings.
   ```

### Stitch Cloning Method (Alternative)

For multi-page apps/websites:
```
Using the Stitch MCP, duplicate this mobile app for [new business]
using the same layout. Do this in Stitch.
```
- Stitch clones the design in its own environment (free)
- Then extract and bring into Antigravity for production code

### Adding Vercel URLs to Lead Data

After cloning + deploying, update lead spreadsheet:
```
Add a "new_website" column to the enriched data. After the cloning skill
completes, update that field with the Vercel URL for each business.
```
- This enables dynamic links in outreach emails via Instantly

---

## AGENT SWARM CONFIGURATION

### For Building Templates (8 niches)

**Strategy:** Sub-agents, NOT Agent Teams. Templates are independent — no inter-agent communication needed. 3x faster.

**Model Strategy (from Jack Roberts):**
- **Build with Claude Opus 4.6** — Reliable execution, follows complex instructions
- **Polish with Gemini 3.1** — Superior spatial reasoning, visual flair
- **Design with Gemini 3 Flash** (via Stitch) — Best UI/UX model
- **Quick edits:** Switch to faster model mid-conversation ("use gemini 3.1 for this")
- **Context rot:** Models degrade in long conversations. Open NEW chat per task.
- **Token management:** Disable unused MCPs, use skills to compress recurring instructions

**Parallel Execution:**
- Use Antigravity's Agent Manager to run 5-7 agents simultaneously
- Each agent works on a different niche template
- Open new chat window per template (avoid context rot)

**Agent Assignment:**

| Agent | Task | Model |
|-------|------|-------|
| Agent 1 | Clinic template | Claude Opus 4.6 |
| Agent 2 | Dental template | Claude Opus 4.6 |
| Agent 3 | Restaurant template | Gemini 3.1 |
| Agent 4 | Gym/PT template | Gemini 3.1 |
| Agent 5 | Salon/Beauty template | Claude Opus 4.6 |
| Agent 6 | Real Estate template | Gemini 3.1 |
| Agent 7 | Law Firm template | Claude Opus 4.6 |
| Agent 8 | E-commerce template | Gemini 3.1 |

### For Cloning at Scale

Once template is done + cloning skill created:
- Single agent can clone sequentially (each clone ~2 min)
- Or parallel via Agent Manager: 5 agents cloning different businesses simultaneously
- Each clone: grab business data → apply to config → deploy → add URL to spreadsheet

---

## NICHE TEMPLATE SPECS

### Conversion Blueprint (Apply to ALL templates)

Every template must follow this structure:

1. **Hero Section** — Hook + clear value prop + CTA button + sticky header with phone number
2. **Logo/Trust Bar** — "Trusted by" or "Featured in" logos
3. **Value Proposition** — What you do + for whom + why you're different
4. **How It Works** — 3-step process (simple, transparent)
5. **Services Grid** — What's included/not included
6. **Social Proof** — 3-6 named testimonials with real photos + Google rating
7. **Pricing Tiers** — 2-3 clear options (Basic/Pro/Premium)
8. **FAQ Section** — 6-8 questions covering objections
9. **Lead Capture CTA** — "Get Your Free Quote" form (sticky on mobile)
10. **Service Areas** — Local SEO neighborhoods/cities
11. **Footer** — Contact info, hours, links, copyright

### Template-Specific Notes

**Clinic/Medical:**
- Before/after gallery
- Doctor profiles with credentials
- Insurance accepted list
- Online booking integration placeholder

**Dental:**
- Smile gallery
- Treatment comparison table
- Emergency contact prominent
- Patient comfort messaging

**Restaurant:**
- Menu with photos (not just text)
- Online ordering CTA
- Atmosphere gallery
- Opening hours prominent

**Gym/PT:**
- Class schedule
- Transformation stories
- Trial offer CTA
- Trainer profiles

**Salon/Beauty:**
- Service menu with pricing
- Gallery of work
- Booking integration
- Products section

**Real Estate:**
- Property search/filter
- Agent profiles
- Neighborhood guides
- Market stats

**Law Firm:**
- Practice areas
- Case results/wins
- Free consultation CTA
- Attorney credentials

**E-commerce:**
- Product grid with filters
- Cart functionality
- Reviews on products
- Trust badges (SSL, returns, shipping)

---

## BORING NICHE EXPANSION (From Transcript 7)

Beyond the classic 8, target unsexy profitable niches:
- Commercial cleaning companies
- HVAC and plumbing contractors
- Landscaping / tree removal
- Auto detailing shops
- Pest control
- Fencing companies
- Pool maintenance
- Junk removal
- Roofing contractors
- Garage door repair

**Why:** Busy owners, not tech-savvy, rarely approached, have money, terrible websites.

---

## OUTREACH INTEGRATION

### Lead Generation Pipeline (Automated)

1. **Scrape leads:** Apify MCP in Antigravity → Google Maps scraper
   - Set budget cap in prompt (e.g., "max $1")
   - Gets: name, phone, website, address, reviews, email

2. **Enrich emails:** AnyMailFinder API
   - Connect via Antigravity prompt with API key
   - Validates existing emails + finds new ones

3. **Turn into skill:** After scraping + enrichment works, create reusable Antigravity skill
   - Input: niche + location
   - Output: enriched CSV with all contact data

### Outreach Campaign (Instantly.ai)

**Subject lines:** Lowercase (looks human-written)

**Email 1 (Day 1):** "built you a new website"
- Hey [name], I'm [you] based in [city].
- Came across [business] and thought your website could do more.
- Built a new one: [personalized Vercel link]
- Yours completely free. Portfolio project.
- Happy to jump on 10-min call to dial it in.

**Email 2 (Day 3):** Quick follow-up
**Email 3 (Day 7):** Value-add follow-up
**Email 4 (Day 14):** Additional insight
**Email 5 (Day 28):** Breakup email

**Dynamic variables:** Use {{business_name}}, {{new_website}} etc. from enriched CSV

### Monetization (Razor Blades Model)

Give the razor (website) free → Sell the blades (ongoing services):

| Service | Monthly Price | Difficulty |
|---------|--------------|------------|
| Website hosting + maintenance | $50-300 | Easy |
| Monthly SEO maintenance | $250+ | Medium |
| AI chatbot on website | $500+ | Medium |
| Social media management | $300-500 | Medium |
| Email follow-up automations | $200-400 | Easy |
| Review generation system | $150-300 | Easy |
| Booking generation | $300-500 | Medium |
| Missed call text-back | $100-200 | Easy |

**First client:** Keep under $300/mo. Month-to-month. No contracts. Easy yes.

---

## BRAND GUIDELINES TEMPLATE

Before building any client site, fill this out (from `premium-website-generator/brand_assets/`):

```
Brand Overview: [Company name, what they do, personality]
Color Palette: Primary (#hex), Secondary, Accent, Background, Text, Muted, Border
Typography: Heading font + weights, Body font + weights
Logo: [path to logo file], min size, clear space rules
Imagery: Photo style (warm/cool/muted), illustration style, icon style
Design Preferences: Reference site URL, elements to emulate, elements to avoid
Content: Headline, subheadline, CTA text, key differentiators
Deploy Target: Vercel / Netlify / GoHighLevel
```

**Firecrawl shortcut:** If client has existing site, run brand extraction first:
```
Use Firecrawl to scrape [client URL]. Extract brand colors, fonts, logo URL,
UI component styles, and overall brand personality. Save as brand_guidelines.md.
```

---

## PREMIUM TEMPLATE FOUNDATION

Base template project structure (from `premium-website-generator/`):

```
project-name/
├── CLAUDE.md                     ← Project brain (read every session)
├── brand_assets/
│   ├── brand_guidelines.md       ← Filled per client
│   └── logo.png                  ← Client logo
├── reference_assets/
│   ├── reference_screenshot.png  ← Full-page capture of reference
│   └── analysis.md               ← Reference site breakdown
├── src/
│   ├── lib/animations.ts         ← GSAP utilities (see PREMIUM-COMPONENTS.md)
│   ├── components/ui/            ← AnimatedCounter, SplitText, ScrollProgress, etc.
│   └── components/layout/        ← CustomCursor, Navigation, Footer
├── temp_screenshots/             ← Puppeteer comparison screenshots
└── dist/                         ← Build output
```

**Tech stack:** Next.js 16 + React 19 + GSAP 3.14 + Lenis + Tailwind CSS 4 + TypeScript 5

**Pre-built components** (documented in `PREMIUM-COMPONENTS.md`):
- `AnimatedCounter` — Scroll-triggered number animation
- `SplitText` — Text reveal/fadeUp/word-by-word animations
- `ScrollProgress` — Full-page scroll progress bar
- `RevealImage` — Clip-path image reveal (4 directions)
- `Marquee` — Infinite scroll with pause-on-hover
- `CustomCursor` — Dot + ring cursor with hover detection

---

## OPERATIONAL BEST PRACTICES (From Power Pack)

### Context Management
- **Fresh context per task** — Models degrade in long conversations. New chat for each major task.
- **50% rule** — At 50% context used, save state to progress.md. At 75%, clear and resume.
- **Start hardest page first** (Luke Carter) — remaining pages go 3x faster
- **Voice dictation** for iteration feedback — 3x faster than typing (Nick Saraev)

### Build Discipline
- **Plan before building** — "Once the plan is good, the code is good." Plan mode for complex pages.
- **Verify everything** — Every change needs verification (screenshot, build, or test).
- **"What is the most elegant solution?"** — Magic prompt for pushing past AI slop (Luke Carter).
- **Add mobile explicitly** — AI won't prioritize mobile unless you say so (Nate Herk).

### AI Content Anti-Patterns
Never let AI use these words in website copy:
- "10x faster", "Game-changer", "Leverage", "Synergy"
- "Unlock potential", "Transform your business", "Delve", "Realm"
- "Cutting-edge", "Revolutionary", "Seamless"

### Creative Tail Sampling
For any creative work (hero designs, copy, naming), add to prompts:
```
Sample from the distribution tails. Generate responses that would
fall in the 10% on either end of the probability distribution,
not the safe middle 80%.
```
Result: 1.6-2.1x improvement in creativity (Stanford Research, 2025).

---

## QUALITY GATES

Before sending ANY website to a client:

### Visual & Brand
- [ ] Hero image is gorgeous and loads fast (eager loading)
- [ ] Color scheme matches or elevates client's brand
- [ ] Logo loads correctly on Vercel
- [ ] Fonts loaded correctly (no FOUT/FOIT flash)
- [ ] All images optimized (WebP, proper sizing)
- [ ] No placeholder/dummy text visible
- [ ] No AI slop words in copy ("leverage", "seamless", "game-changer")

### Functionality
- [ ] Phone number is prominent and correct
- [ ] All CTAs work and are visible on mobile
- [ ] Contact info is accurate
- [ ] Newsletter/form integrations working (Beehive/Supabase/GHL)
- [ ] 3D elements lazy-loaded with fallback images (if used)
- [ ] Scroll animations smooth at 60fps on mid-range device

### Business Content
- [ ] Testimonials are real (from their Google reviews)
- [ ] Service areas are accurate
- [ ] Pricing tiers are reasonable for the market

### Technical
- [ ] UI/UX Pro Max audit passed
- [ ] Mobile responsive at all breakpoints
- [ ] Site loads in <3 seconds
- [ ] SEO tags are populated
- [ ] Accessibility basics pass (contrast, focus-visible, touch targets)

### IBRD-Specific (if using screenshot comparison)
- [ ] Screenshot comparison loop completed (3-5 iterations)
- [ ] Side-by-side match with reference site (layout, spacing, typography)
- [ ] Client brand swapped in (not reference brand)
- [ ] 21st.dev components upgraded where applicable

---

## WORKFLOW ANTI-PATTERNS

**DON'T:**
- Give AI Studio too much info in the initial prompt (design suffers)
- Build the whole thing in Antigravity from scratch (miss the visual wow)
- Use one long chat thread (context rot after ~500K tokens — open NEW chat per task)
- Skip the UI/UX Pro Max audit (catches dozens of issues)
- Send website before checking live Vercel deployment
- Overindex on animations for service businesses (clean > flashy)
- Auto-send emails without reviewing first
- Skip lead enrichment (halves your response rate)
- Use 3D on every site (kills performance, not always appropriate)
- Skip the Vibe Design phase (your output will look generic)
- Eager-load anything except the hero image
- Use more than 2-3 fonts (looks amateur)
- Leave MCPs enabled that you're not using (wastes context tokens)
- Ask AI to "make it pop" — give specific direction from your mood board
- Ship without verifying (build, screenshot, or test — always verify)
- Use placeholder/mock data in production — pull from real sources
- Say "I've implemented X" without running the build first
- Start building without a foundation markdown (Phase 1 of Vibe Coding)
- Use AI slop words in copy ("leverage", "synergy", "game-changer", "seamless")
- Name screenshots randomly — use naming convention or they pile up (Nate Herk)

**DO:**
- Design in AI Studio/Stitch → polish in Antigravity
- New chat window for each major task (fresh context = better output)
- Run audit once on template → clones inherit the fixes
- Test on mobile before sending (add mobile explicitly — AI won't do it unprompted)
- Follow up 5-6 times (money is in emails 3-7)
- Ask for referrals even if they say no to upsell
- Collect testimonials from every client (VideoAsk)
- Build a mood board BEFORE designing (Weevi.ai)
- Use scroll animations for premium sites (Whisk → Flow → EZgif)
- Create skills from any process that works (compound over time)
- Use Magic UI MCP for micro-interactions (rainbow buttons, shimmer)
- Extract competitor brand DNA via Firecrawl before building
- Keep all reusable processes as Antigravity skills
- Use Screenshot Comparison Loop for IBRD builds (Puppeteer → compare → fix → repeat)
- Use "What is the most elegant solution?" prompt to push past AI defaults
- Use Creative Tail Sampling for any creative/design work
- Start with the hardest page first — remaining pages go 3x faster
- Use voice dictation for iteration feedback — 3x faster than typing

---

## SOP CREATION PATTERN

After any workflow works:
1. Get it working manually first
2. Tell Antigravity: "Create a reusable skill from this process using [skill creator framework]"
3. Skill gets saved to project
4. Next time: just invoke the skill
5. Iterate and improve the skill each time

**Skills to create from this playbook:**
1. Lead scraping + enrichment skill
2. Website cloning skill
3. GitHub → Vercel deployment skill (see `INSTANT-PUBLISH-SKILL.md`)
4. Go High Level HTML converter skill (if using GHL)
5. Design research skill (top 10 competitor analysis)
6. Scroll animation skill (Whisk → Flow → EZgif → implementation)
7. Brand extraction skill (Firecrawl → color/font/layout extraction)
8. 3D integration skill (Spline embed + lazy loading + fallback)
9. UI audit skill (wraps UI/UX Pro Max + Lighthouse + mobile check)
10. Beehive newsletter capture skill
11. Screenshot comparison skill (Puppeteer → compare → fix → repeat)
12. Brand guidelines intake skill (fill template → generate brand_guidelines.md)
13. Frontend design skill (invoke every session to prevent AI slop)

---

## REFERENCE SITES FOR DESIGN INSPIRATION

### Design Galleries
- **Dribbble** — dribbble.com (search "website" + niche)
- **Mobbin** — mobbin.com (real app/website screenshots)
- **Awwwards** — awwwards.com (premium website gallery)
- **Cosmos** — cosmos.so (clean modern design reference)
- **Godly** — godly.website (infinite canvas of landing pages, scroll to browse)
- **Land-book** — landbook.com (searchable by niche/color palette, shows desktop + mobile previews)
- **MidJourney Explore** — midjourney.com/explore (AI-generated reference images)

### UI Components & Code
- **21st.dev** — 21st.dev/community/components (React components, "Best of Week")
- **CodePen** — codepen.io (animations, scroll effects, interactions)
- **Magic UI** — magicui.design (beautiful pre-built components, has MCP)

### Typography
- **fontsinuse.com** — Fonts in real-world usage (best resource)
- **Adobe Fonts** — fonts.adobe.com (professional library)
- **idography** — Curated font pairings and inspiration

### Color & Mood
- **coolors.co** — Color palette generator (lock + randomize)
- **Weevi.ai** — AI mood boards (part of Figma ecosystem)

### Tools
- **Firecrawl** — firecrawl.dev/playground (brand DNA extraction from any URL)
- **Google Whisk** — Start/end frame generation for scroll animations
- **Google Flow** — Video generation from frames (VQ3.1)
- **EZgif** — ezgif.com (video → frame extraction)
- **Spline** — spline.design (3D web assets, industry standard)
- **Nano Banana Pro** — AI image gen via Gemini (Antigravity skill)

---

## QUICK START CHECKLIST

### Core Setup
1. [ ] Install Antigravity desktop app
2. [ ] Create GitHub account (free)
3. [ ] Create Vercel account (free)
4. [ ] Add GitHub authentication via Homeroom

### MCPs (Connect in Antigravity)
5. [ ] Stitch MCP — API key from stitch.withgoogle.com/settings
6. [ ] Vercel MCP — Token from vercel.com/account/settings/tokens (enable only tools 1, 6, 12-15, 146-149)
7. [ ] Magic UI MCP — For UI components
8. [ ] Firecrawl MCP — For brand extraction
9. [ ] Supabase MCP — For backend features (optional)
10. [ ] Apify MCP — For lead scraping (optional)

### Skills (Install in Antigravity)
11. [ ] Stitch Skills (6 power skills) from GitHub repo
12. [ ] UI/UX Pro Max skill — `https://github.com/nextlevelbuilder/ui-ux-pro-max-skill.git`
13. [ ] Antigravity Skill Creator
14. [ ] Brand Design skill
15. [ ] Planning + Brainstorming skill
16. [ ] Troubleshooting skill
17. [ ] Spline skill (for 3D sites)

### Build Your First Template
18. [ ] Complete Vibe Design phase (mood board, fonts, colors, references)
19. [ ] Pick first niche → choose framework:
   - **BLAST** — Full pipeline from research to deploy (default)
   - **PAGES** — Premium $10K builds with maximum visual impact
   - **IBRD** — Screenshot-driven builds from reference sites
   - **Vibe Coding 5-Phase** — Iterative foundation-first approach
20. [ ] Design in AI Studio/Stitch → Polish in Antigravity → Audit → Deploy
21. [ ] Create cloning skill from first successful clone
22. [ ] Create deployment skill from first successful deploy (or use Instant Publish Skill)

### Outreach Pipeline
23. [ ] Set up Instantly account for email campaigns
24. [ ] Set up Apify or Instant Data Scraper for leads
25. [ ] Set up AnyMailFinder for email enrichment
26. [ ] Create lead enrichment skill

---

## CHOOSING A BUILD FRAMEWORK

| Framework | Best For | Speed | Quality | When to Use |
|-----------|----------|-------|---------|-------------|
| **BLAST** | Full pipeline builds | ⚡⚡⚡ | ⭐⭐⭐ | Default — research → design → build → deploy |
| **PAGES** | Premium $10K sites | ⚡ | ⭐⭐⭐⭐⭐ | When visual impact matters most |
| **IBRD** | Reference-based clones | ⚡⚡ | ⭐⭐⭐⭐ | When you have a clear reference to match |
| **Vibe Coding** | Iterative refinement | ⚡⚡ | ⭐⭐⭐⭐ | When starting from scratch, building design language |
| **Cloning System** | Scale existing templates | ⚡⚡⭐⭐⭐ | ⭐⭐⭐ | After template proven — swap 7 components per client |

**Combine frameworks:** Start with IBRD for structure → use Vibe Coding Phase 5 for creativity → finish with BLAST's deploy + outreach pipeline.

---

## SOURCES & COMPANION DOCS

### Knowledge Sources
- 12 Jack Roberts transcripts (Antigravity masterclass)
- 1 RoboNuggets transcript (Spline + 3D websites)
- Claude Code Power Pack (Sam / Channel Changers)
- Premium Website Generator (IBRD framework, GSAP components)
- Nick Saraev, Nate Herk, Luke Carter, Chase AI (website building tips)
- Julian / Member Stack (Vibe Coding 5-Phase)
- Stanford Research (Creative Tail Sampling)
- Boris Cherny / Anthropic (Claude Code best practices)

### Companion Files (in this Clawdbot folder)
- **`DESIGN-INTELLIGENCE.md`** — Full 5 Core Dimensions reference (patterns, styles, colors, fonts, animations)
- **`PREMIUM-COMPONENTS.md`** — GSAP animation component library + brand guidelines template
- **`INSTANT-PUBLISH-SKILL.md`** — Full GitHub → Vercel deployment skill workflow
- **`STITCH-SETUP.md`** — Stitch MCP connection and usage guide
- **`antigravity-transcripts.md`** (in memory/) — Detailed transcript notes

### Original Source Files (in `Website time to copy/`)
- `renzo-power-pack/POWER-PACK.md` — Full Power Pack (1521 lines)
- `premium-website-generator/` — Complete Next.js template project with components
