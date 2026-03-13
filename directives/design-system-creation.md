# Design System Creation

> Phase 1.5 of IBRD — created AFTER inspiration capture, BEFORE building.

## Principle

Create the design system as a **separate artifact** before writing any component code. The design system is the single source of truth for all visual decisions.

## When to Create

- After brand strategy research (Phase 0) and inspiration capture (Phase 1)
- BEFORE building any components (Phase 2)
- The design system consumes outputs from Phase 0 + Phase 1

## Design System Document

**Create:** `brand_assets/design_system.md`

### 1. Color Tokens

```
Primary:    [hex] — usage: CTAs, key actions, brand identity
Secondary:  [hex] — usage: supporting elements, secondary buttons
Accent:     [hex] — usage: highlights, badges, alerts
Background: [hex dark], [hex light]
Surface:    [hex] — cards, modals, elevated elements
Text:       [primary hex], [secondary hex], [muted hex]
Border:     [hex]
Success:    [hex]
Error:      [hex]
```

Map to CSS variables: `--color-primary`, `--color-secondary`, etc.

### 2. Typography Scale

```
Display:  [font], [size], [weight], [line-height], [letter-spacing]
H1-H6:   [each with full specs]
Body:     lg [specs], base [specs], sm [specs]
Caption:  [specs]
Overline: [specs]
```

Font loading strategy: Google Fonts / local files / system fonts

### 3. Spacing System

```
Base unit: [4px or 8px]
Scale:     xs(4), sm(8), md(16), lg(24), xl(32), 2xl(48), 3xl(64), 4xl(96)
Section padding: [top/bottom per section type]
Container max-width: [1280px default]
Gutter: [20px mobile, 32px desktop]
```

### 4. Component Patterns

```
Buttons:    [primary, secondary, ghost — radius, padding, hover states]
Cards:      [border-radius, shadow, padding, hover effect]
Inputs:     [height, border, focus ring, placeholder style]
Navigation: [height, blur, border treatment, mobile behavior]
Sections:   [separators, background alternation pattern]
```

### 5. Animation Tokens

```
Duration:   fast(150ms), normal(300ms), slow(500ms)
Easing:     ease-out for entrances, ease-in for exits
Scroll:     [reveal type, distance, stagger delay]
Hover:      [scale, shadow, color shift]
Page load:  [initial animation sequence]
```

### 6. Responsive Breakpoints

```
Mobile:  375px  (design target)
Tablet:  768px
Desktop: 1024px
Large:   1440px
```

## How Claude Uses This

- Reference `design_system.md` for **EVERY** visual decision
- Never invent colors, spacing, or typography on the fly
- When the design system doesn't cover something, **ADD it to the system first**, then use it
- The design system is a living document — update it, don't ignore it
- If the client's brand guidelines exist, the design system translates them into code-ready tokens
