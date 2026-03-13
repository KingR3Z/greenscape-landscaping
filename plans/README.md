# Plans — Context-Preserving Project Plans

## What This Folder Is

Plans are phase-by-phase markdown files that preserve project context across context window resets. When Claude's context fills up and compresses, the plan file survives on disk.

## How It Works

1. At project start, create a plan: `plans/[project-name]-plan.md`
2. Break the project into phases with clear checkpoints
3. As each phase completes, update the plan with status
4. When context resets, Claude reads the plan to regain state

## Plan File Template

```markdown
# [Project Name] Plan

## Status: Phase [X] of [Y]

## Completed Phases
- [x] Phase 1: [name] — [summary of what was done]
- [x] Phase 2: [name] — [summary]

## Current Phase
- [ ] Phase 3: [name] — [what to do next, specific tasks]

## Upcoming Phases
- [ ] Phase 4: [name] — [brief description]

## Decisions Made
- Decision 1: We chose X because Y
- Decision 2: Client approved Z on [date]

## Open Questions
- Question 1: [needs client input]

## Key Files
- [list of critical files for this project]
```

## Relationship to .memory/

| System | Scope | When to Use |
|--------|-------|-------------|
| `plans/` | Project-level | What are we building? What phase? What decisions? |
| `.memory/` | Task-level | Processing a batch of items within a phase |

Use both when appropriate:
- `plans/` for the project roadmap
- `.memory/` for large processing tasks within a phase (10+ files, batch operations)

## Recovery Prompt

When starting a new session:

```
Read plans/[project-name]-plan.md and CLAUDE.md. Pick up where we left off.
```

## Best Practices

- Update the plan AFTER completing each phase (not before)
- Record decisions and their reasoning — future Claude needs this context
- Keep it concise — the plan should be scannable in 30 seconds
- Start a new chat after heavy work rather than filling the context window
