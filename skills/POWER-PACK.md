# Claude Code Power Pack

> **For Renzo** — from Sam at Channel Changers. February 2026.
>
> This document contains everything I've learned building with Claude Code over the past several months. Feed this to your Claude and tell it: "Read this entire document. Then set up my project using these patterns." Your Claude will build the whole `.claude/` infrastructure for you, customized for your stack.

---

## How to Use This Guide

**For Renzo (the human):**
1. Read Part 1 (Philosophy) to understand the mindset
2. Skim Parts 2-7 to see what you're getting
3. Create a new Claude Code session in your project
4. Tell Claude: "Read POWER-PACK.md and set up my project with these patterns"
5. Claude will create all the files, agents, hooks, and configuration

**For Claude (the AI reading this):**
When asked to set up this project, create all files described below under `.claude/` in the project root. Adapt paths, tool names, and domain-specific references to match the user's actual project. Ask the user about their tech stack (framework, database, deployment) before creating CC-specific templates.

---

# Part 1: Philosophy & Principles

> These are the mental models that make Claude Code 10x more effective. They come from Anthropic's own team, Stanford research, and hundreds of hours of real-world usage.

---

## The Three Pillars

| Pillar | What It Means |
|--------|---------------|
| **Opus 4.6 + Agent Teams** | 1M context, 128K output, parallel teammates. Enable agent teams for big tasks. |
| **Maintain CLAUDE.md** | Your project's knowledge base. Update constantly. |
| **Verify Everything** | Give Claude tests, browser checks, screenshots. Verification = quality. |

---

## Verification Principles

> "Always give Claude a way to verify its work." — Boris, Claude Code Creator

**Never ship unverified work.** Every significant change must have a verification step:

| Change Type | Verification Method |
|-------------|---------------------|
| API routes | Hit the endpoint, check response |
| UI changes | Screenshot or browser check |
| Database changes | Query to confirm data |
| Build changes | Run your build command |
| Type changes | Run your type checker |

---

## Ship-First Development Cadence

> "Prefer doing over planning. Prefer shipping over perfecting." — Boris Cherny, Claude Code Creator

| # | Principle | What It Means |
|---|-----------|---------------|
| 1 | **Ship in hours, not days** | If it's taking more than a few hours, break it down smaller |
| 2 | **Perfect is the enemy of shipped** | A working feature today beats a polished feature next week |
| 3 | **Iterate based on feedback** | Ship, learn, improve. Don't guess what's needed |
| 4 | **Minimum viable everything** | What's the smallest thing that delivers value? |
| 5 | **Revert is cheap** | Git means mistakes are fixable. Bias toward trying things |

**When NOT to Ship-First:**
- Security changes (always careful review)
- Database migrations (plan before executing)
- Client-facing launches (get explicit approval)
- Billing/payments (triple-check everything)

---

## Operational Personas

Invoke a persona to change Claude's operational mode. Say `Act as @persona` or `@persona: [instruction]`.

### @shipper (Speed mode)
- Smallest possible change that works
- TODO comments are fine for edge cases
- Console logs for debugging (remove before merge)
- "Good enough" > "Perfect"

### @architect (Design mode)
- Think before doing. Consider scale, maintainability, edge cases.
- Draw out the data flow before coding
- Consider: What happens at 10x scale? What are the failure modes?

### @client-ready (Delivery mode)
- No console logs
- All error states handled gracefully
- Loading states everywhere
- Mobile responsive
- Works in incognito

### @paranoid (Security mode)
- Validate all inputs, sanitize all outputs
- Check permissions explicitly
- Assume auth tokens can be stolen
- Log suspicious activity

---

## Plan Mode

> "Once the plan is good, the code is good." — Boris, Claude Code Creator

**For non-trivial tasks, start in plan mode:**
1. Plan first before implementing (`Shift + Tab` to enter plan mode)
2. Iterate on the plan until it's solid
3. Then execute — Claude can usually one-shot it from a good plan

**Critical:** Clear your session before building from a plan. Starting at 25% context = poor results. Starting fresh with a plan file = excellent results.

---

## Creative Tail Sampling

> "AI alignment causes mode collapse — defaulting to predictable, middle-of-the-road answers." — Stanford Research, 2025

**The Problem:** AI models give "safe" answers from the middle 80% of the distribution.

**The Fix:** For any creative work (UI ideas, content, naming, design), add this to prompts:

```
Sample from the distribution tails. Generate responses that would
fall in the 10% on either end of the probability distribution,
not the safe middle 80%.
```

**When to use:** UI/UX brainstorming, content concepts, feature ideation, design options, naming/branding, any creative work.

**Result:** 1.6-2.1x improvement in creativity.

---

## AI Content Anti-Patterns

Never let Claude use these words/phrases in content:
- "10x faster", "Content at scale", "Game-changer"
- "Leverage", "Synergy", "Unlock potential"
- "Transform your business", "Delve", "Realm"
- "Cutting-edge", "Revolutionary", "Seamless"

---

## The Unlimited Memory Pattern

**When to activate:** Any task involving 10+ files, batch processing, multi-step analysis, or work that might exceed context limits.

Create 3 files in a `.memory/` folder:

| File | Purpose |
|------|---------|
| `context.md` | Stores the goal (read after memory reset) |
| `todos.md` | Checklist of items to process |
| `insights.md` | Accumulated results/findings |

**Workflow:**
1. Create `.memory/` folder and 3 files
2. Process items one at a time
3. Update `insights.md` after each item
4. Check off items in `todos.md`
5. After memory compaction: read `context.md` + `todos.md` first
6. Continue until all items complete

**Recovery:** If Claude stops mid-process, say: "Read the files in `.memory/` and continue where you left off."

---

## Context Management (The 50% Rule)

| Context Level | Action |
|---------------|--------|
| < 50% | Continue normally |
| 50-75% | Consider saving state to progress.md |
| > 75% | Save state, clear session, resume |

**Resume pattern:**
```
Read progress.md and CLAUDE.md. Pick up where we left off.
```

---

## The "Never Comment Twice" Rule

> "You should never have to point anything out twice." — Boris, Claude Code Creator

When you catch a mistake:
1. Fix it
2. Add it to CLAUDE.md immediately (Anti-Patterns or Mistakes Log table)
3. Never mention it again — Claude now knows forever

---

## Engineering Manager Mindset

You're not the doer anymore. You're responsible for:
- **Throughput** — How much gets shipped
- **Direction** — Clear guardrails, endpoints, missions
- **Quality** — Definition of done

> "The bottleneck has moved from capability to systems thinking."

**Altitude Control:** Move fluidly between levels:
- **Descend** — See terrain, specific code, why something broke
- **Ascend** — Think abstractions, patterns, system design

---

# Part 2: CLAUDE.md Template

> Copy this into your project root as `CLAUDE.md`. Customize the placeholders. This is your project's permanent memory.

```markdown
# Claude Code Instructions — [YOUR PROJECT NAME]

> **READ THIS FIRST ON EVERY SESSION START**

## CRITICAL: Current Year is 2026

---

## VERIFICATION PRINCIPLES

| Change Type | Verification Method |
|-------------|---------------------|
| API routes | Hit the endpoint, check response |
| UI changes | Screenshot or browser check |
| Database | Query to confirm data |
| Build | Run `[YOUR_BUILD_COMMAND]` |
| Types | Run `[YOUR_TYPE_CHECK_COMMAND]` |

---

## THINGS NOT TO DO (Anti-Patterns)

| Don't | Do Instead |
|-------|------------|
| [Add your project-specific anti-patterns here] | [Correct approach] |
| Guess at code you haven't read | Read the file first |
| Use placeholder/mock data | Pull from real data sources |
| Ship without building | Run build before committing |

### AI Content Anti-Patterns

Never use: "10x faster", "Game-changer", "Leverage", "Synergy", "Unlock potential", "Transform your business", "Delve", "Realm"

### Recent Mistakes Log

| Date | Mistake | Fix Applied |
|------|---------|-------------|
| [Date] | [What went wrong] | [How you fixed it] |

---

## BEHAVIOR RULES

- **Default to Action:** Implement changes rather than just suggesting
- **Parallel Tool Calls:** If independent, make them in parallel
- **Investigate Before Answering:** Never speculate about code you haven't read
- **Commit Regularly:** Commit after completing each feature/fix
- **Creative Tail Sampling:** For creative tasks, auto-generate diverse options from distribution tails

---

## SHIP-FIRST DEVELOPMENT CADENCE

| # | Principle |
|---|-----------|
| 1 | Ship in hours, not days |
| 2 | Perfect is the enemy of shipped |
| 3 | Iterate based on feedback |
| 4 | Minimum viable everything |
| 5 | Revert is cheap |

### Operational Personas

| Persona | Trigger | Behavior |
|---------|---------|----------|
| @shipper | Speed mode | Ship fast, iterate later |
| @architect | Design mode | Think before doing, consider scale |
| @client-ready | Delivery mode | Polish everything, no rough edges |
| @paranoid | Security mode | Assume everything is hostile |

---

## AGENT COUNCIL (Decision-Making)

For important decisions, invoke three perspectives in parallel:

| Agent | Perspective |
|-------|-------------|
| Optimist Strategist | Best-case scenarios, opportunity mapping |
| Devil's Advocate | Risk identification, blind spots |
| Neutral Analyst | Evidence-based trade-offs |

Usage: "Council gather: [Your idea or decision]"

---

## PLAN MODE

For non-trivial tasks:
1. Plan first (Shift + Tab)
2. Iterate until solid
3. Execute from plan

---

## UNLIMITED MEMORY PATTERN

For large tasks (10+ files, 15+ minutes):
1. Create `.memory/` with `context.md`, `todos.md`, `insights.md`
2. Process items iteratively
3. After memory compaction, read context + todos first
4. Continue until complete

---

## QUICK CONTEXT

[Add your project-specific quick context here]
- Framework: [e.g., Next.js 15]
- Database: [e.g., Supabase, Postgres]
- Deployment: [e.g., Vercel]
- Domain: [e.g., myapp.com]

---

## KEY RULES

1. **Real data only** — Never use placeholder/made-up data
2. **Verify before shipping** — Build, type-check, or screenshot
3. **Read before answering** — Never guess at code
4. **Update this file** — Add every mistake and anti-pattern immediately
```

---

# Part 3: Settings & Hooks

> These files go in `.claude/` and provide automated guardrails, cost tracking, and quality checks.

## settings.json

Create `.claude/settings.json`:

```json
{
  "plansDirectory": "./plans",
  "env": {
    "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS": "1"
  },
  "teammateMode": "auto",
  "permissions": {
    "allow": [
      "Bash(npx tsc:*)",
      "Bash(npx eslint:*)",
      "Bash(npm run:*)",
      "Bash(npm test:*)"
    ]
  },
  "hooks": {
    "Stop": [
      {
        "matcher": "*",
        "hooks": [
          {
            "type": "command",
            "command": ".claude/hooks/validate-build.sh"
          }
        ]
      }
    ],
    "PostToolUse": [
      {
        "matcher": "*",
        "hooks": [
          {
            "type": "command",
            "command": ".claude/hooks/cost-tracker.sh"
          }
        ]
      },
      {
        "matcher": "Edit|Bash",
        "hooks": [
          {
            "type": "command",
            "command": "node .claude/hooks/mistake-logger.js"
          }
        ]
      },
      {
        "matcher": "ExitPlanMode",
        "hooks": [
          {
            "type": "command",
            "command": ".claude/hooks/archive-plan.sh"
          }
        ]
      }
    ],
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "command": ".claude/hooks/security-check.sh"
          }
        ]
      }
    ]
  },
  "lsp": {
    "enabled": true,
    "servers": {
      "typescript": {
        "command": "typescript-language-server",
        "args": ["--stdio"],
        "filetypes": ["typescript", "typescriptreact", "javascript", "javascriptreact"]
      }
    }
  }
}
```

**What each hook does:**
- **Stop > validate-build.sh** — Runs type-check before Claude says "done". Blocks if errors found.
- **PostToolUse > cost-tracker.sh** — Logs every tool call, warns at 100/250/500/1000 call thresholds.
- **PostToolUse > mistake-logger.js** — Detects bug-fix patterns and reminds Claude to log to CLAUDE.md.
- **PostToolUse > archive-plan.sh** — Archives plans to dated folders after plan mode exits.
- **PreToolUse > security-check.sh** — Blocks dangerous Bash commands (rm -rf, force push, DROP TABLE).

---

## Hook: validate-build.sh

Create `.claude/hooks/validate-build.sh` and `chmod +x` it:

```bash
#!/bin/bash
# validate-build.sh - Stop hook to verify build before Claude exits

cd "$(git rev-parse --show-toplevel)" || exit 0

# Run TypeScript type checking (fast)
echo "Running type check..."
npx tsc --noEmit 2>&1 | head -20

TSC_EXIT=${PIPESTATUS[0]}

if [ $TSC_EXIT -ne 0 ]; then
    echo ""
    echo "TYPE ERRORS FOUND - Please fix before completing task"
    echo '{"decision": "block", "reason": "TypeScript errors detected. Fix type errors before continuing."}'
    exit 0
fi

echo "Type check passed"

# Optional: Run full build (slower, uncomment for autonomous/overnight loops)
# echo "Running full build..."
# npm run build 2>&1 | tail -30
# BUILD_EXIT=${PIPESTATUS[0]}
# if [ $BUILD_EXIT -ne 0 ]; then
#     echo '{"decision": "block", "reason": "Build failed. Fix build errors before continuing."}'
#     exit 0
# fi

echo '{"decision": "allow"}'
exit 0
```

---

## Hook: security-check.sh

Create `.claude/hooks/security-check.sh` and `chmod +x` it:

```bash
#!/bin/bash
# security-check.sh - PreToolUse hook to block dangerous Bash commands

HOOK_INPUT=$(cat)
COMMAND=$(echo "$HOOK_INPUT" | jq -r '.tool_input.command // empty' 2>/dev/null)

if [ -z "$COMMAND" ]; then
    exit 0
fi

# Dangerous patterns to block
BLOCKED_PATTERNS=(
    "rm -rf /"
    "rm -rf ~"
    "rm -rf *"
    "git push --force origin main"
    "git push --force origin master"
    "git push -f origin main"
    "git push -f origin master"
    "drop table"
    "DROP TABLE"
    "truncate table"
    "TRUNCATE TABLE"
    "DELETE FROM"
    "> /dev/sda"
    "mkfs"
    ":(){:|:&};:"
)

for pattern in "${BLOCKED_PATTERNS[@]}"; do
    if [[ "$COMMAND" == *"$pattern"* ]]; then
        echo "BLOCKED: Dangerous command detected: $pattern" >&2
        exit 2
    fi
done

# Warn on secrets in commands (don't block)
SECRET_PATTERNS=("API_KEY=" "SECRET_KEY=" "PASSWORD=" "sk-" "sbp_")

for pattern in "${SECRET_PATTERNS[@]}"; do
    if [[ "$COMMAND" == *"$pattern"* ]]; then
        echo "WARNING: Command may contain sensitive data" >&2
    fi
done

exit 0
```

---

## Hook: cost-tracker.sh

Create `.claude/hooks/cost-tracker.sh` and `chmod +x` it:

```bash
#!/bin/bash
# cost-tracker.sh - PostToolUse hook to track API usage

PROJECT_ROOT="$(git rev-parse --show-toplevel 2>/dev/null || pwd)"
LOG_DIR="$PROJECT_ROOT/.claude/logs"
mkdir -p "$LOG_DIR"

HOOK_INPUT=$(cat)
TIMESTAMP=$(date -u +"%Y-%m-%dT%H:%M:%SZ")
TOOL_NAME=$(echo "$HOOK_INPUT" | jq -r '.tool_name // "unknown"' 2>/dev/null)
SESSION_ID=$(echo "$HOOK_INPUT" | jq -r '.session_id // "unknown"' 2>/dev/null)

LOG_FILE="$LOG_DIR/tool-usage-$(date +%Y-%m-%d).jsonl"
echo "{\"timestamp\": \"$TIMESTAMP\", \"tool\": \"$TOOL_NAME\", \"session\": \"$SESSION_ID\"}" >> "$LOG_FILE"

TODAY_COUNT=$(wc -l < "$LOG_FILE" 2>/dev/null | tr -d ' ')

if [ "$TODAY_COUNT" -eq 100 ]; then
    echo "100 tool calls today" >&2
fi
if [ "$TODAY_COUNT" -eq 250 ]; then
    echo "250 tool calls today" >&2
fi
if [ "$TODAY_COUNT" -eq 500 ]; then
    echo "500 tool calls today. Consider checkpointing." >&2
fi
if [ "$TODAY_COUNT" -eq 1000 ]; then
    echo "1000 tool calls today. High usage session." >&2
fi

exit 0
```

---

## Hook: mistake-logger.js

Create `.claude/hooks/mistake-logger.js`:

```javascript
#!/usr/bin/env node

/**
 * Mistake Logger Hook
 * Runs after Edit/Bash tool calls and detects bug fix patterns.
 * Reminds Claude to log mistakes to CLAUDE.md when fixing bugs.
 */

const fs = require('fs');

let input = '';
process.stdin.setEncoding('utf8');
process.stdin.on('data', chunk => input += chunk);
process.stdin.on('end', () => {
  try {
    const data = JSON.parse(input);
    checkForBugFix(data);
  } catch (e) {
    process.exit(0);
  }
});

function checkForBugFix(data) {
  const { tool_name, tool_input, tool_output } = data;

  if (!['Edit', 'Bash'].includes(tool_name)) {
    process.exit(0);
    return;
  }

  const bugFixPatterns = [
    /fix(ed|ing)?/i, /bug/i, /error/i, /broken/i,
    /issue/i, /patch/i, /hotfix/i, /resolve[ds]?/i,
    /repair/i, /correct(ed|ing)?/i,
  ];

  const inputStr = JSON.stringify(tool_input || '');
  const outputStr = JSON.stringify(tool_output || '');
  const combined = inputStr + outputStr;

  const isBugFix = bugFixPatterns.some(pattern => pattern.test(combined));

  if (tool_name === 'Bash' && tool_input?.command) {
    const cmd = tool_input.command.toLowerCase();
    if (cmd.includes('git commit') && /fix/i.test(cmd)) {
      outputReminder();
      return;
    }
  }

  if (tool_name === 'Edit' && isBugFix) {
    const oldString = tool_input?.old_string || '';
    const newString = tool_input?.new_string || '';
    if (Math.abs(oldString.length - newString.length) > 10 ||
        oldString.split('\n').length !== newString.split('\n').length) {
      outputReminder();
      return;
    }
  }

  process.exit(0);
}

function outputReminder() {
  const reminder = `
BUG FIX DETECTED
Consider logging this mistake to CLAUDE.md:
| Date | Mistake | Fix Applied |
This helps prevent repeat errors in future sessions.
`;
  console.error(reminder);
  process.exit(0);
}
```

---

## Hook: archive-plan.sh

Create `.claude/hooks/archive-plan.sh` and `chmod +x` it:

```bash
#!/bin/bash
# Archive Plan Hook - copies plan to dated archive after ExitPlanMode

set -e

PROJECT_ROOT="$(git rev-parse --show-toplevel 2>/dev/null || pwd)"
PLANS_DIR="$PROJECT_ROOT/plans"
ARCHIVE_DIR="$PLANS_DIR/archive"

DATE_FOLDER=$(date +%Y-%m-%d)
TIME_STAMP=$(date +%H-%M-%S)
SESSION_ID=$(echo $RANDOM | md5 -q 2>/dev/null || echo $RANDOM | md5sum 2>/dev/null | head -c 8)

mkdir -p "$ARCHIVE_DIR/$DATE_FOLDER"

LATEST_PLAN=$(ls -t "$PLANS_DIR"/*.md 2>/dev/null | grep -v README.md | head -1)

if [ -n "$LATEST_PLAN" ] && [ -f "$LATEST_PLAN" ]; then
    PLAN_NAME=$(basename "$LATEST_PLAN" .md)
    ARCHIVE_PATH="$ARCHIVE_DIR/$DATE_FOLDER/${TIME_STAMP}-${PLAN_NAME}-${SESSION_ID}.md"
    cp "$LATEST_PLAN" "$ARCHIVE_PATH"
    echo "Plan archived to: $ARCHIVE_PATH"
else
    echo "No plan file found to archive"
fi
```

---

# Part 4: Agents

> Agents are specialized sub-processes that handle specific types of work. Create these files in `.claude/agents/`. Each uses YAML frontmatter format.

## The Agent Council (3 agents)

These implement a multi-perspective decision-making framework. Invoke with: "Council gather: [your idea/decision]"

### optimist-strategist.md

Create `.claude/agents/optimist-strategist.md`:

```markdown
---
name: optimist-strategist
description: Analyze ideas, proposals, or decisions from an optimistic strategic perspective, exploring best-case outcomes and growth potential.
tools: Read, Grep, Glob
model: sonnet
memory: project
---

# Optimist Strategist Agent

## Personality

The Optimist Strategist sees potential where others see obstacles. However, this isn't blind positivity - it's strategic optimism backed by reasoning about what would need to be true for success.

## Analysis Framework

1. **What's the ceiling?** If everything goes right, what's the best outcome?
2. **What enables success?** What conditions/actions make the best case happen?
3. **What's the unique angle?** Why might this work when similar ideas failed?
4. **Who benefits most?** Which stakeholders gain and why?
5. **What's the compound effect?** How does success in this area unlock other wins?

## Output Structure

### Optimist Strategist Analysis

**Idea:** [Brief description]

**Best-Case Vision:** [What success looks like at scale]

**Key Enablers:**
1. [What needs to be true for success]
2. [Required capabilities/resources]
3. [Market conditions that help]

**Growth Trajectory:** [How this compounds over time]

**Recommended Actions:**
1. [Immediate step]
2. [Medium-term investment]
3. [Long-term positioning]

**Confidence:** [Low/Medium/High]
**Upside Potential:** [Conservative/Moderate/Transformative]

## Guardrails

- Never dismiss risks entirely - acknowledge them while focusing on opportunities
- Ground optimism in evidence, not just enthusiasm
- Quantify upside potential where possible
```

### devil-advocate.md

Create `.claude/agents/devil-advocate.md`:

```markdown
---
name: devil-advocate
description: Critically examine ideas, plans, or proposals to identify risks, blind spots, and failure modes before resources are committed.
tools: Read, Grep, Glob
model: sonnet
memory: project
---

# Devil's Advocate Agent

## Personality

The Devil's Advocate isn't a pessimist - they're a realist who asks "what could go wrong?" before resources are committed. They challenge assumptions not to kill ideas, but to make them stronger.

## Analysis Framework

1. **What assumptions are we making?** List every unstated belief
2. **What's the worst case?** If everything goes wrong, what happens?
3. **Who loses?** Which stakeholders are negatively affected?
4. **What did we miss?** What information gaps exist?
5. **Why might this fail?** Historical examples, market dynamics, execution challenges

## Output Structure

### Devil's Advocate Analysis

**Critical Assumptions (Could Be Wrong):**
1. [Assumption + why it might be false]

**Risk Assessment:**
| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|

**Failure Modes:**
1. [Execution failure]
2. [Market failure]
3. [Competition failure]

**Devil's Questions:**
- [Hard question that needs answering]

**Verdict:** [Proceed with caution / Needs more validation / High risk]

## Guardrails

- Critique ideas, not people
- Don't just say "no" - explain WHY and suggest mitigations
- Distinguish between fatal flaws and manageable risks
```

### neutral-analyst.md

Create `.claude/agents/neutral-analyst.md`:

```markdown
---
name: neutral-analyst
description: Provide objective, evidence-based analysis that synthesizes optimist and critic perspectives into a balanced recommendation.
tools: Read, Grep, Glob
model: sonnet
memory: project
---

# Neutral Analyst Agent

## Personality

The Neutral Analyst is the "judge" of the council. They weigh evidence without emotional attachment, acknowledge uncertainty explicitly, and provide recommendations based on expected value.

## Analysis Framework

1. **What do we actually know?** Separate facts from assumptions
2. **What are the trade-offs?** What do we gain/lose with each choice?
3. **What's the expected value?** Probability-weighted outcomes
4. **What would change our mind?** Key uncertainties to resolve
5. **What's the recommendation?** Clear next step with rationale

## Output Structure

### Neutral Analyst Assessment

**Evidence Summary:**
| Claim | Evidence For | Evidence Against | Confidence |
|-------|------------|------------------|------------|

**Synthesis of Council Perspectives:**
- **Optimist's strongest point:** [What resonated]
- **Devil's Advocate's strongest point:** [What resonated]
- **Key disagreement:** [Where they differ and why]

**Probability Assessment:**
- Success: [X%] | Partial: [Y%] | Failure: [Z%]

**Recommendation:** [Clear recommendation with reasoning]

**Decision Type:** [Reversible/Irreversible]
**Time Sensitivity:** [Urgent/Can Wait/No Deadline]

## Guardrails

- Never favor one perspective because it "sounds better"
- Acknowledge uncertainty with probability ranges
- Make recommendations even when evidence is incomplete
```

---

## The GSD (Get Stuff Done) Framework (4 core agents)

A project management pipeline. Each handles a different phase: plan, execute, verify, debug.

### gsd-planner.md

Create `.claude/agents/gsd-planner.md`:

```markdown
---
name: gsd-planner
description: Create detailed, atomic execution plans from phase goals with dependencies, effort estimates, and risk analysis.
tools: Read, Write, Glob, Grep, Bash
model: sonnet
---

# GSD Planner Agent

> Creates detailed execution plans from phase goals.

## Behavior

1. **Understand the goal** - Read phase requirements thoroughly
2. **Research the codebase** - Find relevant patterns and files
3. **Decompose into steps** - Each step should be atomic (10-30 min)
4. **Order by dependencies** - Steps in logical sequence
5. **Add verification** - How to check each step worked
6. **Identify risks** - What could go wrong

## Output

Creates a plan with:
- Goal statement
- Prerequisites
- Decisions required
- Detailed steps (10-30 min each)
- Effort estimates
- Risk analysis
- Success criteria

## Quality Criteria

A good plan:
- [ ] Has clear, measurable goal
- [ ] Steps are atomic (10-30 min)
- [ ] Dependencies are explicit
- [ ] Each step has verification
- [ ] Risks have mitigations
- [ ] Total estimate is reasonable
```

### gsd-executor.md

Create `.claude/agents/gsd-executor.md`:

```markdown
---
name: gsd-executor
description: Execute implementation plans step by step with verification, atomic commits, and progress tracking.
tools: Read, Write, Edit, Bash, Glob, Grep
model: sonnet
---

# GSD Executor Agent

> Executes plans step by step with verification.

## Normal Flow
1. **Load plan** - Read the plan file
2. **Check prerequisites** - Verify ready to start
3. **Execute step** - Implement as specified
4. **Verify step** - Run verification checks
5. **Update progress** - Write to PROGRESS.md
6. **Commit if checkpoint** - Atomic commits every 2-3 steps
7. **Repeat** - Until all steps complete

## On Deviation
If actual implementation differs from plan:
1. Note the deviation
2. Assess impact
3. Continue if minor, pause and ask if major

## On Error
1. Capture error details
2. Attempt obvious fix
3. If unresolved, pause and report
4. Never skip broken steps
```

### gsd-verifier.md

Create `.claude/agents/gsd-verifier.md`:

```markdown
---
name: gsd-verifier
description: Verify that phase goals were actually achieved by checking success criteria, running automated tests, and performing goal-backward analysis.
tools: Read, Write, Bash, Glob, Grep
model: sonnet
---

# GSD Verifier Agent

> "Tasks completed != Goal achieved"

## Philosophy

The verifier checks that the **goal** was met, not just that **steps** were executed.

## Goal-Backward Analysis

Instead of checking "did we do the steps", check:
1. What was the goal?
2. Is that goal now achieved?
3. Can we demonstrate it?

Example:
- Goal: "Users can log in"
- Verification: Actually try logging in, not just "login component exists"

## Verification Types

### Automated
- Build passes
- Types clean
- Tests pass

### Manual (prompts user)
- UI appearance checks
- Workflow verification
- Edge case testing
```

### gsd-debugger.md

Create `.claude/agents/gsd-debugger.md`:

```markdown
---
name: gsd-debugger
description: Systematically debug issues using the scientific method with hypothesis tracking and persistent debug sessions.
tools: Read, Edit, Bash, Grep, Glob, WebSearch
model: sonnet
---

# GSD Debugger Agent

> Systematic debugging using the scientific method.

## Approach

1. **Observe** - Gather symptoms
2. **Hypothesize** - Form theories
3. **Test** - Validate each theory
4. **Conclude** - Identify root cause
5. **Fix** - Apply solution
6. **Verify** - Confirm fix works

## Session Structure

Track in a debug session file:
- Issue description
- Symptoms observed
- Hypotheses (with status: testing/rejected/confirmed)
- Attempts log (timestamp, action, result)
- Root cause (when found)
- Fix applied

## Best Practices

- **One hypothesis at a time** - Don't muddy the water
- **Minimal changes** - Test one thing at a time
- **Document everything** - Future you will thank you
- **Revert failed attempts** - Keep codebase clean
- **Verify the fix** - Don't assume it worked
```

---

## Code Reviewer Agent

Create `.claude/agents/code-reviewer.md`:

```markdown
---
name: code-reviewer
description: Reviews code changes for anti-patterns, security issues, and quality problems. Auto-delegate when reviewing PRs, diffs, or recent changes.
tools: Read, Grep, Glob, Bash
model: sonnet
memory: project
---

# Code Reviewer Agent

## Analysis Framework

### Phase 1: Gather Changes
Categorize changed files into: API Routes, Database/Queries, Migrations, Components, Libraries, Config.

### Phase 2: Project Anti-Pattern Detection
Check against the project's documented anti-patterns in CLAUDE.md. Every entry MUST be checked.

### Phase 3: Security Review (OWASP Top 10)

| Check | What to Look For |
|-------|------------------|
| Injection | Raw SQL strings, unsanitized user input |
| Broken Auth | Missing auth checks, exposed admin routes |
| Sensitive Data | API keys in code, PII in logs |
| Access Control | Missing permissions, tenant isolation gaps |
| XSS | dangerouslySetInnerHTML without sanitization |
| SSRF | User-controlled URLs without validation |

### Phase 4: API Route Quality
- Auth check present
- Input validation
- Error handling with try/catch
- No hardcoded secrets

### Phase 5: Code Quality
- No unjustified `any` types
- Error boundaries on data-fetching components
- Loading states on async components
- Files under 300 lines (flag if over)

## Output Format

**CRITICAL (Must Fix)** | **WARNING (Should Fix)** | **SUGGESTION (Nice to Have)**

Tables with: File, Line, Issue, Fix/Recommendation

**Verdict:** APPROVE / REQUEST CHANGES / NEEDS DISCUSSION
```

---

# Part 5: Skills

> Skills are reusable workflow patterns. Create these in `.claude/skills/`.

## Spec-Driven Development

Create `.claude/skills/spec-driven-development.md`:

```markdown
# Spec-Driven Development

Use this skill when starting any non-trivial implementation task.

## Step 1: Complexity Assessment

| Factor | Simple | Standard | Complex |
|--------|--------|----------|---------|
| Files affected | 1-2 | 3-10 | 10+ |
| Services touched | 1 | 1-2 | 3+ |
| External APIs | 0 | 0-1 | 2+ |
| Database changes | None | Minor | Schema changes |
| Estimated subtasks | 1-2 | 3-6 | 7+ |

- **SIMPLE:** Quick implementation, skip spec
- **STANDARD:** Full spec process
- **COMPLEX:** Full process + .memory/ pattern

## Step 2: Generate Spec

Create `.claude/specs/{task-name}/spec.md` with:
- Problem Statement
- Proposed Solution
- Acceptance Criteria (testable!)
- Files Affected
- Dependencies
- Risks & Mitigations
- Out of Scope

## Step 3: Create Implementation Plan

Subtasks with IDs, titles, files, dependencies, acceptance criteria.

## Step 4: Implement (with progress tracking)

## Step 5: QA Validation Loop (see below)
```

## QA Validation Loop

Create `.claude/skills/qa-validation-loop.md`:

```markdown
# QA Validation Loop

Use before claiming any implementation is complete.

## The Loop

1. RUN VERIFICATION (build + type check)
2. CHECK ACCEPTANCE CRITERIA
3. ALL PASS -> APPROVED (mark complete)
4. ISSUES FOUND -> FIX -> back to step 1
5. Max 5 iterations -> escalate to human

## Quick Checklist

Before saying "done":
- [ ] Build passes
- [ ] Type check passes
- [ ] Each acceptance criterion verified
- [ ] No new console errors/warnings
- [ ] Changes match what was requested (no scope creep)

## Anti-Patterns

DON'T: Say "I've implemented X" without running build
DON'T: Assume it works because the code looks right
DON'T: Skip verification "to save time"
DO: Verify after every significant change
DO: Loop until actually passing
```

## Ship Skill

Create `.claude/skills/ship.md`:

```markdown
# Ship (Commit & Push)

Quick commit and push all uncommitted work.

## Process

1. Run `git status` to see all changes
2. Review changes with `git diff`
3. Check recent commits for message style
4. Stage files (exclude sensitive: .env, credentials, secrets)
5. Create commit with descriptive message
6. Push to current branch

## Sensitive File Exclusion

Never commit: .env*, credentials*, *secret*, *.key, *.pem

## Edge Cases

| Scenario | Action |
|----------|--------|
| No changes | Report "nothing to commit" |
| Only .env changes | Warn and skip |
| Merge conflicts | Report and ask for guidance |
| Detached HEAD | Warn before pushing |
```

---

# Part 6: Best Practices (The Gold Mine)

> This is the single most valuable section. It's sourced from expert practitioners, Anthropic's own team, Stanford research, and hundreds of hours of real-world Claude Code usage.

---

## Parallel Sessions ("Multi-Clouding")

> "I usually have 5-10 Claudes running in parallel." — Boris, Claude Code Creator

1. Start Task 1 in one tab, let Claude plan
2. Start Task 2 in another tab
3. Keep going with Task 3
4. Circle back to approve and execute
5. Tend your Claudes like a manager — unblock, answer questions

**Mindset:** You're a generalist tending multiple Claudes, not going deep on one task.

---

## Task Management System

> "Each task runs in its own fresh context window" — Solves agent amnesia

Tasks persist to `.claude/tasks/` and survive restarts.

**The power workflow:**
1. Have Claude write a plan file
2. "Convert this plan into tasks"
3. "Execute each task in its own sub-agent"
4. Claude runs parallel waves automatically

**Result:** 18% context used vs 56% without sub-agents.

**Key phrases:**

| Say This | Effect |
|----------|--------|
| "Convert this plan into tasks" | Creates with dependencies |
| "Execute each task in its own sub-agent" | Fresh context per task |
| "Complete tasks in parallel where possible" | Runs dependency waves |

**Checker Pattern:** Two sessions sharing one task list — one executes, one monitors.

---

## Agent Teams (Opus 4.6)

Enable in `.claude/settings.json`:
```json
{
  "env": { "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS": "1" },
  "teammateMode": "auto"
}
```

### Agent Teams vs Sub-Agents

| Feature | Agent Teams | Sub-Agents |
|---------|-------------|------------|
| Parallelism | **True parallel** | Sequential |
| Communication | Can message each other | Report to parent only |
| Tools | Full access | Configurable |
| Token usage | Higher | Lower |
| Best for | Large parallel tasks | Exploration, research |

### When to Use

- **Large PRs:** One reviews frontend, another reviews backend
- **Complex debugging:** Test competing hypotheses in parallel
- **Multi-module features:** Split by domain
- **Research + implementation:** One researches, one builds

### How to Invoke

```
Please use an agent team to refactor the auth system -
one teammate handles the API routes, another updates the tests.
```

**Delegation mode:**
```
Use an agent team. You focus on coordination only,
delegate all implementation to teammates.
```

---

## 3-Step UX Design Process

> "Every minute saved by not planning ends up being 10 minutes of extra work."

**Why generic UIs happen:** Jumping straight from PRD to code.

**The Process:**

```
Step 1: PRD (Product Requirements Document)
   |
Step 2: UX Specification  <-- Most people skip this!
   |
Step 3: Build Order (sequenced prompts)
```

**UX Specification Passes:**

| Pass | Questions |
|------|-----------|
| Mental Model | What does the user THINK should happen? |
| Information Architecture | What concepts exist? How are they organized? |
| Affordance & Action | What looks clickable? Editable? Actionable? |
| System Communication | Empty states? Loading? Errors? Success? |

---

## Website Vibe Coding (5-Phase Workflow)

*Source: Julian, Member Stack — replaced a 100-page Webflow site in 2 weeks*

### Phase 1: Foundation (CRITICAL)

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
Prompt "Make me a homepage" (expect garbage), find worst thing, fix it, repeat.

### Phase 3: Cherry-Pick Variations
"Make me THREE different hero sections." Then combine the best parts.

### Phase 4: Reference Your Own Work
Once established, stop referencing the original markdown. "Look at the rest of my site for visual reference."

### Phase 5: Push Creativity
For creative sections, use design skills to push beyond safe defaults.

---

## Brand Extraction via Firecrawl

Before building anything client-facing, scrape the target brand's visual identity:

```
Use Firecrawl to scrape [website URL]. Extract:
- Brand colors (primary, secondary, accent)
- Logo and favicon URLs
- Font families and weights
- UI component styles (buttons, cards, inputs)
- Overall brand personality

Save as a brand profile I can reference for building.
```

**Key insight for Agent Teams:** Put team instructions at the END of the prompt, after all context. Claude processes full context first, then decides how to split work.

---

## Vibe Coding Principles

### Software Vision
> "Like parkour practitioners see walls as runnable surfaces, developers must see problems as software-shaped."

The people who get the most from AI coding have trained the ability to notice when a problem is automatable.

### Plaintext Specification Before Prompting
Before any plan, answer 3 questions:
1. **What am I building?** (one paragraph, no jargon)
2. **Why does it need to exist?** (the problem, in the user's words)
3. **What does success look like?** (3 measurable outcomes)

### Context Degradation (Fresh Context Rule)
> "AI coding tools degrade over conversation."

Break work into small tasks, run each in a fresh context window.

### Specification is the Skill
> "The valuable skill isn't coding anymore. It's specification."

Experienced builders know how to break problems into pieces, ask the right edge-case questions, and evaluate output critically.

---

## Effectiveness Checklist

**Tactical:**
- [ ] Running parallel sessions?
- [ ] Using Plan Mode for complex tasks?
- [ ] Updating CLAUDE.md on every mistake?
- [ ] Using task management for multi-step work?
- [ ] Running sub-agents for fresh context?
- [ ] Writing plaintext spec before prompting?

**Mindset:**
- [ ] Thinking like an engineering manager?
- [ ] Bringing unstructured input (not over-preparing)?
- [ ] Moving between high and low altitude?
- [ ] Taking time to reflect?
- [ ] Preserving taste and vision?
- [ ] Noticing software-shaped problems?

---

# Part 7: Setup Instructions

> Follow these steps to deploy the Power Pack into your project.

## Quick Setup (5 minutes)

```bash
# 1. Create the directory structure
mkdir -p .claude/agents .claude/hooks .claude/skills .claude/logs .claude/specs
mkdir -p plans/archive agent-plans/templates .memory

# 2. Create CLAUDE.md from Part 2 template (customize for your project)

# 3. Create settings.json from Part 3

# 4. Create all hook files from Part 3 and make them executable
chmod +x .claude/hooks/*.sh

# 5. Create agents from Part 4

# 6. Create skills from Part 5

# 7. Verify
claude  # Start a session
# Claude should now load your CLAUDE.md and have access to all agents/skills
```

## Verification

After setup, verify:
- [ ] `claude` loads and references your CLAUDE.md
- [ ] Running a build-related task triggers the validate-build hook
- [ ] `Council gather: [test idea]` spawns three perspectives
- [ ] Asking Claude to plan enters plan mode and references your settings
- [ ] The cost tracker creates logs in `.claude/logs/`

## Customization Checklist

Replace these placeholders in the CLAUDE.md template:
- [ ] `[YOUR PROJECT NAME]`
- [ ] `[YOUR_BUILD_COMMAND]` (e.g., `npm run build`, `yarn build`)
- [ ] `[YOUR_TYPE_CHECK_COMMAND]` (e.g., `npx tsc --noEmit`)
- [ ] Quick Context block (framework, database, deployment, domain)
- [ ] Add your first project-specific anti-patterns

## Adding Your Own Anti-Patterns

As you discover mistakes, add them to CLAUDE.md:

```markdown
| Don't | Do Instead |
|-------|------------|
| Forget auth on API routes | Always check session/token first |
| Use raw SQL strings | Use parameterized queries |
| Skip loading states | Always show loading UI for async |
```

The mistake-logger hook will remind Claude to do this automatically.

---

## What You're Getting

| Component | Count | Purpose |
|-----------|-------|---------|
| CLAUDE.md template | 1 | Project memory and rules |
| Agents | 7 | Council (3) + GSD (4) + Code Reviewer |
| Skills | 3 | Spec-driven dev, QA loop, Ship |
| Hooks | 5 | Security, build validation, cost tracking, mistake logging, plan archival |
| Settings | 1 | Teams enabled, permissions, LSP, hooks wired |
| Best Practices | 1 | 1000+ lines of expert workflows |

**Total setup time:** ~30 minutes (or tell Claude to do it from this doc in ~5).

---

## Sources

These patterns come from:
- **Boris Cherny** (Claude Code Creator) — parallel sessions, verification, "never comment twice"
- **Anthropic** — Task management, agent teams, effort levels
- **Stanford Research** — Creative tail sampling (1.6-2.1x creativity improvement)
- **Julian (Member Stack)** — Website vibe coding 5-phase workflow
- **AI Automators** — Agentic RAG build, plan-build-validate loop
- **Leo (Firecrawl)** — Brand extraction, agent team prompt structure
- **Channel Changers** — Months of real-world Claude Code production usage

---

*Built with care by Sam + Claude at Channel Changers. February 2026.*
*"Once the plan is good, the code is good."*
