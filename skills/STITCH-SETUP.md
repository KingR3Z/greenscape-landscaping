# STITCH-SETUP.md — Connecting Google Stitch to Antigravity

Quick reference for setting up and using Stitch (Google's design agent) with Antigravity.

---

## 1. Get Your Stitch API Key

1. Go to **stitch.withgoogle.com/settings**
2. Click **Create API Key**
3. Copy the key (save it — you'll need it for MCP config)

---

## 2. Add Stitch MCP to Antigravity

1. Open Antigravity
2. Go to **Agent Manager** (gear icon or settings)
3. Navigate to **MCP** section
4. Add new MCP connection with this config:

```json
{
  "name": "stitch",
  "command": "npx",
  "args": ["-y", "@anthropic/stitch-mcp"],
  "env": {
    "STITCH_API_KEY": "your-api-key-here"
  }
}
```

5. Tag **@mcp_config.json** when adding to ensure proper registration
6. Verify connection by asking Antigravity: "List available Stitch tools"

---

## 3. Install Stitch Skills (6 Power Skills)

These skills unlock Stitch's full potential from within Antigravity:

1. **Project Analysis** — Analyzes current project, suggests Stitch-compatible design changes
2. **React Components** — Converts Stitch designs to production React components
3. **Stitch Loops** — Autonomous looping: builds multiple designs simultaneously at zero credit cost
4. **Prompt Enhancement** — Improves your design prompts before sending to Stitch
5. **Video Walkthroughs** — Generates video explanations of designs
6. **[Additional skill from community repo]**

### Installation
- Copy the GitHub repo URL for Stitch Skills (from Jack Roberts' community/resources)
- Tell Antigravity: "Install these skills from [URL]"
- Skills appear in your skills list, invocable by name

---

## 4. Using Stitch in Your Build Pipeline

### Option A: Stitch as Primary Design Tool

```
Using the Stitch MCP, design a [niche] website with:
- Hero section with [description]
- Services grid
- Testimonials section
- Contact form
- Use this color palette: [colors]
- Use this font: [font name]
```

- Use **3x mode** — generates 3 alternatives, pick the best
- **Page-by-page editing** — Stitch's strongest feature, iterate one section at a time
- **Edit Theme** — adjust colors, fonts, border radius globally

### Option B: Stitch Loop (Autonomous Multi-Build)

```
Using the Stitch Loop skill, create websites for these 5 businesses:
1. [Business 1] - [niche] - [color palette]
2. [Business 2] - [niche] - [color palette]
3. [Business 3] - [niche] - [color palette]
4. [Business 4] - [niche] - [color palette]
5. [Business 5] - [niche] - [color palette]
Use the same layout template for all. Customize branding per business.
```

- Stitch builds all 5 simultaneously in its environment
- Zero additional credit cost
- Export all as .zip when done

### Option C: Stitch for Cloning

```
Using the Stitch MCP, duplicate this mobile app/website for [new business]
using the same layout. Do this in Stitch.
```

- Clones the design in Stitch's environment
- Then export → import to Antigravity for production code

---

## 5. Exporting from Stitch to Antigravity

1. In Stitch, select screens (Cmd+click for multiple)
2. Click **Export** → Download as **.zip**
3. The .zip contains both images AND HTML/CSS
4. Open the folder in Antigravity
5. Prompt:
   ```
   I've imported code for a [X]-page web app from Stitch.
   Codify this into an application and open it in localhost.
   ```

---

## 6. Stitch vs AI Studio — When to Use Which

| Scenario | Use | Why |
|----------|-----|-----|
| First design shot (80% done) | AI Studio | More visual dependencies, flashier output |
| Multi-page design iteration | Stitch | Page-by-page editing is superior |
| Cloning designs for new brands | Stitch | Stitch Loop handles bulk cloning |
| Quick single-page mockup | AI Studio | Faster for one-shot designs |
| Production code generation | Antigravity | Neither Stitch nor AI Studio produce scalable code |

**Best combo:** AI Studio for initial "wow" → Stitch for refinement → Antigravity for production

---

## 7. Token Management

- Stitch MCP adds tools to your context window
- If you're not actively using Stitch, **disable the MCP** to save tokens
- Re-enable when you need design work
- Same principle applies to all MCPs — only keep active what you're using

---

## 8. Troubleshooting

| Issue | Fix |
|-------|-----|
| MCP won't connect | Check API key is valid, restart Antigravity |
| Stitch designs look generic | Use more specific prompts, include reference images |
| Export doesn't include images | Select all screens before exporting, use .zip format |
| Code from Stitch breaks in AG | Normal — Stitch code needs "codifying" in Antigravity |
| 3x mode not generating | Check Stitch credits, try simpler prompt |
