# Complete Beginner Guide: From Zero to Premium Websites

## What You're Building
A system that lets you create professional, custom-branded websites using AI — websites that look like a design agency built them. Once the system is set up, each new website takes 30-60 minutes instead of days/weeks.

This guide assumes you know NOTHING. Every step is spelled out.

---

# PHASE 1: ONE-TIME SETUP (Do This Once, Use Forever)
Estimated time: 30-45 minutes

---

## Step 1: Get a Claude Account
1. Go to https://claude.ai
2. Click "Sign Up" and create an account
3. Subscribe to **Claude Pro** ($20/month) — this is the minimum to use Claude Code
4. If you plan to build lots of sites, upgrade to **Claude Max** ($100/month) for higher limits

**Why**: Claude Code is the AI that will build your websites. You need a paid plan to access it.

---

## Step 2: Install VS Code (Your Workspace)
1. Go to https://code.visualstudio.com
2. Click the big download button for your operating system (Mac or Windows)
3. Install it like any normal app
4. Open it up

**What is VS Code?** Think of it as a fancy text editor where you'll work with Claude. Left side shows your files, right side is where you chat with Claude.

---

## Step 3: Install Claude Code Extension
1. In VS Code, look at the left sidebar — click the square icon that says "Extensions" (it looks like 4 blocks)
2. In the search bar at the top, type: `claude code`
3. You'll see "Claude Code" by Anthropic — click **Install**
4. It will ask you to sign in with your Claude account — do that
5. Once signed in, you'll see a small Anthropic logo icon at the top right of VS Code — click it to open Claude Code

**You now have Claude Code ready to go.**

---

## Step 4: Turn On Bypass Permissions (Important)
This lets Claude work without asking your permission for every tiny action. Without it, you'll be clicking "approve" hundreds of times.

1. In VS Code, click the gear icon (bottom left) → **Settings**
2. In the search bar at top, type: `claude code`
3. Find the option: **"Allow dangerously skip permissions"**
4. Check the box to turn it ON
5. Now in Claude Code, you can select "Bypass Permissions" mode

**Warning**: This means Claude can edit/create/delete files freely. That's fine — you're working in a project folder, not your whole computer. Just don't leave it running overnight unattended.

---

## Step 5: Install the Frontend Design Skill (One-Time)
This is the #1 quality booster. It teaches Claude how to make things look professional instead of generic AI slop.

1. Open Claude Code (click the Anthropic logo icon in VS Code)
2. Paste this command and hit enter:
```
claude install-skill https://cdn.anthropic.com/skills/frontend-design
```
3. If that exact command doesn't work, tell Claude: "Install the frontend-design skill globally"
4. Claude will confirm it's installed

**This skill is now available in EVERY project you work on. You never need to install it again.**

---

## Step 6: Set Up GitHub Account (For Publishing Sites)
1. Go to https://github.com
2. Click "Sign Up" — create a free account
3. Remember your username and password

**What is GitHub?** It's where your website code gets stored online. Think of it like Google Drive but for code.

---

## Step 7: Set Up Vercel Account (For Making Sites Live)
1. Go to https://vercel.com
2. Click "Sign Up" — **sign up using your GitHub account** (this connects them automatically)
3. You're done

**What is Vercel?** It takes your code from GitHub and puts it on the internet so anyone can visit it. Free for personal use.

---

## Step 8: Download Your Website Generator System
1. Download the zip file I created for you (premium-website-generator.zip)
2. Unzip it somewhere easy to find (like your Documents folder)
3. You should now have a folder called `premium-website-generator`

**This folder is your master template. Every time you build a new website, you'll duplicate this folder.**

---

# PHASE 2: BUILDING YOUR FIRST WEBSITE
Estimated time: 45-90 minutes for your first one, 30-60 minutes after that

---

## Step 1: Duplicate the Template
1. Go to your Documents folder (or wherever you saved the template)
2. Copy the entire `premium-website-generator` folder
3. Paste it and rename it to your project name (example: `joes-plumbing-website`)

---

## Step 2: Open the Project in VS Code
1. Open VS Code
2. Go to File → Open Folder
3. Navigate to your new project folder (e.g., `joes-plumbing-website`)
4. Click "Open"
5. You should see the folder structure on the left side

---

## Step 3: Fill In the Brand Guidelines
1. On the left side, click on `brand_assets` folder → `brand_guidelines_TEMPLATE.md`
2. Fill in everything you know about the client:
   - Brand name
   - Colors (if they have them — if not, that's okay, Claude will pick good ones)
   - What the business does
   - Who their customers are
   - What they want the website to say
3. Save the file (Ctrl+S / Cmd+S)
4. Rename it from `brand_guidelines_TEMPLATE.md` to `brand_guidelines.md`

**If you have the client's logo**, drop it into the `brand_assets` folder. Name it `logo.png` or `logo.svg`.

---

## Step 4: Find an Inspiration Website
This is crucial. You're going to find a website that LOOKS like what you want yours to look like.

**Where to find inspiration:**
- https://godly.website — curated collection of beautiful sites
- https://dribbble.com — search "landing page" or "SaaS website"
- https://www.awwwards.com — award-winning web design

**Once you find one you like:**
1. Open the website in your browser (Chrome works best)
2. Take a full-page screenshot:
   - Press F12 (or right-click → Inspect)
   - Press Ctrl+Shift+P (Windows) or Cmd+Shift+P (Mac)
   - Type "screenshot" in the box that appears
   - Click "Capture full size screenshot"
   - It will download as a PNG
3. Copy the website's styles:
   - With the Inspect panel still open, click "Elements" tab at the top
   - Look for "Styles" panel on the right side
   - Click somewhere in the styles area and press Ctrl+A (select all) then Ctrl+C (copy)
4. Save the screenshot into your project's `reference_assets` folder
5. Create a new file called `reference_styles.css` in `reference_assets` folder and paste the styles into it

**Don't overthink this.** Just find something that feels close to what you want. Claude will adapt it.

---

## Step 5: Open Claude Code and Start Building
1. Click the Anthropic logo in VS Code to open Claude Code
2. Set it to **Bypass Permissions** mode (dropdown at the top)
3. Type your first message:

```
Read the CLAUDE.md file. I want to build a website for [CLIENT NAME]. 
Here's what they do: [ONE SENTENCE ABOUT THE BUSINESS].

I've put the brand guidelines in brand_assets/brand_guidelines.md 
and a reference site screenshot in reference_assets/.

Use the website-build-workflow skill to build this site. 
Start with the reference site screenshot and clone its structure, 
then apply our client's branding.

The reference site I want to emulate is: [PASTE URL HERE]
```

4. Hit enter and let Claude work.

**What happens next:**
- Claude reads your CLAUDE.md file (the project brain)
- Claude reads the brand guidelines
- Claude looks at the reference screenshot
- Claude invokes the frontend-design skill
- Claude starts building the website, section by section
- Claude takes screenshots of what it's building and compares to the reference
- Claude fixes any mismatches
- You'll see files appearing on the left side as it works

**This takes 10-20 minutes. Let it run.** Watch what it's doing — you'll learn a lot just by reading its output.

---

## Step 6: Preview Your Website
1. Claude will usually start a local server for you and give you a link like `http://localhost:3000` or `http://localhost:5173`
2. Click that link — it opens in your browser
3. You now see your website!

**If Claude doesn't give you a link**, just type: "Start a dev server so I can preview the site in my browser"

---

## Step 7: Iterate and Improve
This is where the magic happens. The first version will be 70-80% of the way there. Now you make it great.

**How to give feedback to Claude:**
- Just talk to it naturally. Examples:
  - "The hero section text is too small. Make it bigger and add more spacing."
  - "I don't like the blue background on the features section. Change it to match our brand colors."
  - "Make the buttons more interesting — add a glow effect."
  - "The testimonials section looks too generic. Can you find a more elegant solution?"
  - "Add some animation when I scroll down the page."

**Pro tip: Use voice-to-text.** On Mac, press the FN key twice to dictate. On Windows, press Windows+H. Speaking is 3x faster than typing and you can describe what you want more naturally while looking at the site.

**Pro tip: Use 21st.dev for premium components.**
1. Go to https://21st.dev
2. Browse their components (backgrounds, buttons, cards, etc.)
3. When you find one you like, click "Copy Prompt"
4. Go back to Claude Code and say: "Add this component to the [hero section / background / buttons]: " then paste what you copied
5. Claude will integrate it into your site

**Keep iterating until you're happy.** Each change takes 1-3 minutes. Typical iteration: 5-15 rounds of feedback.

---

## Step 8: Deploy (Make It Live on the Internet)

### Option A: Deploy to Vercel (Recommended for most cases)

1. Tell Claude Code:
```
This site looks good. Push it to GitHub. Create a new repository 
called [client-name]-website and push all the code there.
```

2. Claude will walk you through authenticating with GitHub if needed (it's a one-time thing)
3. Once it's pushed, go to https://vercel.com
4. Click "Add New Project"
5. You'll see your GitHub repository listed — click "Import"
6. Click "Deploy"
7. Wait 1-2 minutes
8. Vercel gives you a URL like `client-name-website.vercel.app` — that's your live site!

**To use a custom domain** (like clientname.com):
1. In Vercel, go to your project → Settings → Domains
2. Type in the domain
3. It tells you what DNS settings to update
4. Go to wherever the domain was purchased (GoDaddy, Namecheap, etc.) and update the settings
5. Wait 15-30 minutes for it to go live

### Option B: Deploy to GoHighLevel (For funnel clients)

1. Tell Claude Code:
```
Export this site as modular HTML sections for GoHighLevel. 
Each section should be a separate file that I can paste 
into GHL custom code blocks.
```

2. Claude will create numbered files like `section_01_hero.html`, `section_02_features.html`, etc.
3. Claude will also create a folder with all images that need to be uploaded to GHL
4. In GHL: upload all images to Media Library, get the URLs
5. Give those URLs back to Claude so it can update the image references in the code
6. In GHL: create your funnel pages, add custom code blocks, paste each section in order

---

## Step 9: Making Changes After Deployment

**The workflow for updates:**
1. Open the project in VS Code
2. Open Claude Code
3. Tell it what you want to change
4. Preview on localhost to make sure it looks good
5. Tell Claude: "Push these changes to GitHub"
6. Vercel automatically detects the change and updates the live site within 1-2 minutes

**Always test locally first. Never push changes you haven't previewed.**

---

# PHASE 3: GOING FASTER (Once You're Comfortable)

---

## Bulk Landing Page Generation
Once you have a template that works, you can spin out variations:
1. Tell Claude: "Using the current site as a template, create 10 variations where only the hero headline and subheadline change. Here are the 10 different angles: [list them]"
2. Deploy all 10 to Vercel
3. Run cheap Meta ads ($100 total) pointing to each variant
4. After 3 days, see which gets the cheapest clicks
5. Take the winner and give it the full premium treatment

## Multiple Sites Per Day
- Start each new site in a **fresh Claude Code chat** (click "New Chat" at the top) to avoid running out of context
- Start with the hardest/biggest page first — remaining pages go 3x faster because the design system is already established
- Use **Plan Mode** first for complex sites (tell Claude to go into Plan Mode — it will ask you smart questions before building)

## Building Your Component Library
Every time you find a 21st.dev component you love, save the prompt in a text file. Over time, you'll build a personal library of go-to components for:
- Hero backgrounds
- Button styles  
- Card layouts
- Testimonial sections
- Navigation bars
- Footer designs
- Animation effects

This means each new site gets faster because you already know which components to drop in.

---

# CHEAT SHEET: Common Commands for Claude Code

| What You Want | What to Say |
|---|---|
| Start a new project | "Read the CLAUDE.md and initialize this project" |
| Build from reference | "Clone this website's structure: [URL]. Here's the screenshot and styles." |
| Preview the site | "Start a dev server so I can see this in my browser" |
| Fix something specific | "The [section name] doesn't look right. [Describe what's wrong]." |
| Add premium component | "Add this component to the [section]: [paste 21st.dev prompt]" |
| Mobile optimization | "Make sure this site looks great on mobile. Test at 375px width." |
| Push to GitHub | "Push this to GitHub repository called [name]" |
| Export for GHL | "Export as modular HTML sections for GoHighLevel custom code blocks" |
| Start over on a section | "Redesign the [section name] completely. What's the most elegant solution?" |
| Speed up | "Skip screenshots for this change, just make the edit" |
| Clear and restart | Type `/clear` to start a fresh conversation |
| Check token usage | Type `/context` to see how much capacity is left |

---

# TROUBLESHOOTING

**"Claude seems confused or the quality is dropping"**
→ Start a new chat. Long conversations lose quality. Type `/clear` or click "New Chat".

**"The site looks generic / AI-like"**
→ Say: "This section looks too template-y. Find a more elegant, unique solution."
→ Or grab a specific component from 21st.dev and tell Claude to use it.

**"Screenshots are taking forever / Claude is stuck in a loop"**
→ It's probably trying to screenshot an animation. Say: "Skip the screenshot comparison for this section. Just build it and I'll review visually."

**"I ran out of messages / hit my limit"**
→ Upgrade your Claude plan, or wait for the limit to reset (usually resets every few hours on Pro).

**"The Vercel deploy failed"**
→ Copy the error message from Vercel. Paste it into Claude Code. Say "Fix this deployment error." It will fix it.

**"GitHub asks for credentials every time"**
→ Tell Claude: "Help me set up GitHub authentication so I don't have to log in every time."

**"I don't know what reference site to use"**
→ Go to https://godly.website, scroll until something catches your eye, use that.

**"The client wants changes after the site is live"**
→ Open the project in VS Code. Make changes. Preview locally. Push to GitHub when happy. Vercel auto-updates.

---

# COST BREAKDOWN

| Item | Cost | Notes |
|---|---|---|
| Claude Pro | $20/month | Minimum for Claude Code |
| Claude Max | $100/month | If you're building lots of sites |
| VS Code | Free | |
| GitHub | Free | |
| Vercel | Free | For personal/small sites |
| 21st.dev | Free | Components are free to copy |
| Custom domains | ~$10-15/year each | Buy from Namecheap, Google, etc. |

**Total to get started: $20/month** (just the Claude subscription)

---

# WHAT TO DO RIGHT NOW

1. ✅ Sign up for Claude Pro
2. ✅ Install VS Code
3. ✅ Install Claude Code extension and sign in
4. ✅ Turn on bypass permissions
5. ✅ Install the frontend-design skill
6. ✅ Sign up for GitHub and Vercel
7. ✅ Download and unzip the premium-website-generator template
8. ✅ Pick a reference site from godly.website
9. ✅ Build your first website following Phase 2 above
10. ✅ Deploy it to Vercel

Your first one will take longer because everything is new. By your third site, you'll be doing it in under an hour.
