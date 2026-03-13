# Directives — Layer 1 (Persistent Documentation)

## What This Folder Is

The directives folder is Layer 1 of the three-layer architecture. These are persistent documents that survive context window resets and compaction. Claude reads them at session start to regain project principles.

## Three-Layer Architecture

| Layer | Location | Purpose |
|-------|----------|---------|
| Layer 1: Directives | `directives/` + `plans/` | Documentation, frameworks, principles that persist on disk |
| Layer 2: LLM | Claude | The thinking layer — reads directives, reasons, produces output |
| Layer 3: Tools | `tools/` | Reusable scripts Claude creates for repeated tasks |

## How to Use

- Claude reads all directives at session start
- Add new directives when you confirm a repeatable principle
- Each directive is a standalone `.md` file focused on one concept
- Directives are NOT plans — they are principles and frameworks
- Plans (project-level context) go in `plans/`

## Current Directives

| File | Purpose |
|------|---------|
| `three-layer-architecture.md` | How the system operates across three layers |
| `brand-strategy-framework.md` | Research before design — Phase 0 of IBRD |
| `design-system-creation.md` | Design system as artifact before code — Phase 1.5 |
| `deterministic-code-principles.md` | Separate data from presentation, scripts over inline generation |
