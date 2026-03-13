# INSTANT PUBLISH SKILL

End-to-end GitHub + Vercel deployment workflow for Antigravity.
Source: Jack Roberts' AntiGravity 3D Websites pack.

---

## OVERVIEW

This skill handles the complete deployment pipeline:
1. Initialize or connect a GitHub repository
2. Push all code to GitHub
3. Connect and deploy to Vercel
4. Verify the live deployment
5. Return the live URL

---

## PREREQUISITES

- GitHub MCP authenticated (via Homeroom in Antigravity)
- Vercel MCP configured with token:
```json
"vercel": {
  "command": "npx",
  "args": ["-y", "@robinson_ai_systems/vercel-mcp"],
  "env": { "VERCEL_TOKEN": "YOUR_VERCEL_TOKEN" }
}
```

---

## DEPLOYMENT WORKFLOW

### Step 1: Initialize GitHub Repository

```
Check if a GitHub repo exists for this project.
If not, create a new GitHub repo named [project-name].
Make it private.
Initialize with the current project files.
```

**Manual prompt if needed:**
```
Create a GitHub repo called [project-name] and push all files.
Make the repo private.
```

### Step 2: Push Code

```
Push all current files to the GitHub repository.
Include all source files, assets, and configuration.
Exclude: node_modules, .env files, temp_screenshots/, dist/
```

### Step 3: Deploy to Vercel

```
Using the Vercel MCP, deploy the website from the GitHub repo.
Connect the repo to Vercel for auto-deployment.
Share the published URL when done.
```

**Key Vercel settings:**
- Framework: Next.js (auto-detected)
- Build command: `npm run build` (default)
- Output directory: `.next` (default for Next.js)
- Install command: `npm install`

### Step 4: Verify Deployment

```
Check the live Vercel URL for:
1. No 404 or 401 errors
2. Logo loads correctly
3. All images render
4. Mobile view works
5. No console errors
```

**If errors found:**
```
Screenshot the error on the Vercel deployment.
Fix the issue in the code.
Push to GitHub (auto-deploys to Vercel).
Verify again.
```

### Step 5: Common Fixes

**Logo not loading on Vercel:**
- Ensure logo path is relative, not absolute
- Check case sensitivity (Vercel is case-sensitive, Mac isn't)
- Use `public/` folder for static assets

**Build failing on Vercel:**
- Check `next.config.js` for local-only settings
- Ensure all dependencies are in `package.json` (not just globally installed)
- Check for hardcoded localhost URLs

**Images not loading:**
- Move to `public/` folder
- Use Next.js `<Image>` component with proper `src`
- Check file extensions (WebP preferred)

---

## AUTO-DEPLOY PIPELINE

Once connected, the pipeline is:
```
Code change in Antigravity
    → Push to GitHub (automatic or manual)
        → Vercel detects change
            → Auto-builds and deploys
                → Live in ~30 seconds
```

Any change in Antigravity → auto-reflects on GitHub → auto-reflects on Vercel.

---

## FULL DEPLOY PROMPT (Copy-Paste)

```
Please deploy this website:

1. Create a private GitHub repo called "[project-name]"
2. Push all project files (exclude node_modules, .env, temp files)
3. Using the Vercel MCP, connect the GitHub repo and deploy
4. Verify the live URL works (check for errors, logo, images, mobile)
5. Share the live URL

If any errors are found, fix them and redeploy.
```

---

## ADDING DEPLOYED URL TO LEAD DATA

After deploying a cloned site for a specific business:
```
Add a "new_website" column to the enriched lead data.
Update the row for [Business Name] with the Vercel URL: [URL]
This enables dynamic {{new_website}} links in Instantly email campaigns.
```

---

## ALTERNATIVE: NETLIFY DEPLOY

For simple HTML/CSS/JS sites (not Next.js):
```
Deploy this website to Netlify using the CLI.
Run: npx netlify deploy --prod --dir=dist
Share the live URL when done.
```

Or drag-and-drop: netlify.com/drop → drag your `dist/` folder.

---

## ALTERNATIVE: GITHUB PAGES

For static sites:
```
Enable GitHub Pages on the repo.
Settings → Pages → Source: Deploy from branch → main → /root
The site will be live at: https://[username].github.io/[repo-name]
```
