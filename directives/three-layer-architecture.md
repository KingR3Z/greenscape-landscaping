# Three-Layer Architecture

> Source: Intellagents workflow methodology — proven on 500-page website migrations.

## The Layers

### Layer 1: Directives (This Folder)

Persistent documentation that survives context resets.

- **Project plans** — in `plans/` folder (phase-by-phase progress)
- **Frameworks and principles** — in `directives/` folder (how to think)
- **Brand guidelines, design systems, templates** — in `brand_assets/` and `templates/`

**Key insight:** When the context window fills up and resets, directives persist on disk. Claude re-reads them to regain full project context.

### Layer 2: LLM (Claude)

The thinking engine. Claude reads Layer 1, reasons about the task, and produces output using Layer 3 tools.

- Reads directives at session start
- Makes design/code decisions based on stored context
- Creates new directives when it discovers a reusable principle
- Updates plans after completing each phase

### Layer 3: Tools (Reusable Scripts)

When Claude needs to do something repeatedly, it creates a reusable script in `tools/` rather than brute-forcing it inline.

**Existing tools:**
- Screenshot capture → Puppeteer (configured in project)
- Video generation → `tools/kling_video.py`

**Create when needed:**
- Brand color extraction → `tools/extract-brand.js`
- Page structure analysis → `tools/analyze-page.js`
- Image optimization → `tools/optimize-images.sh`
- Template generation → `tools/generate-from-template.js`

## The Key Rule

**NEVER do something manually that you could script.**

When Claude finds itself:
- Scraping the same kind of data repeatedly → create a tool
- Transforming data in the same pattern → create a tool
- Generating similar boilerplate → create a template + tool
- Comparing screenshots manually → create a comparison tool

## Tool Creation Standards

1. Store in `tools/` directory
2. Make self-documenting (clear `--help` flag or header comment)
3. Deterministic: same input → same output
4. Log to stdout, errors to stderr
5. Accept CLI arguments for flexibility
6. Add usage example to this directive when created

## Context Preservation Flow

```
Session Start
  ├── Read CLAUDE.md (project brain)
  ├── Read directives/ (principles)
  ├── Read plans/[project]-plan.md (project state)
  └── Check templates/ (if template-based build)

During Work
  ├── Update plans/ after each phase
  ├── Create tools/ for repeated operations
  └── Add directives/ for new principles

Context Reset
  ├── All directives survive on disk
  ├── Plans retain project state
  └── Recovery: "Read plans/[project]-plan.md and CLAUDE.md. Pick up where we left off."
```
