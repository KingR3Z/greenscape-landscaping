# Deterministic Code Principles

> Prefer scripts that produce deterministic output over having the LLM generate content directly. Separate data from presentation.

## Why This Matters

When Claude generates content inline (inside JSX/HTML), it:
- Produces slightly different output each time
- Is harder to iterate on (change content = change code)
- Mixes concerns (data + presentation in same file)
- Makes template reuse impossible

## Rules

### 1. Separate Data from Markup

**BAD — content hardcoded in components:**
```jsx
<h1>Transform Your Business With AI-Powered Solutions</h1>
<p>We help companies leverage cutting-edge technology...</p>
```

**GOOD — content in data files, components read from data:**
```typescript
// data/homepage.ts
export const homepage = {
  hero: {
    headline: "Ship faster with AI workflows",
    subheadline: "We build automation that saves 20 hours/week",
  }
}

// components/Hero.tsx — reads from data, never hardcodes copy
```

### 2. Content Lives in Data Files

| Content Type | File Location |
|-------------|---------------|
| Page copy | `data/[pagename].ts` or `data/[pagename].json` |
| Navigation items | `data/navigation.ts` |
| Testimonials | `data/testimonials.ts` |
| FAQ items | `data/faq.ts` |
| Pricing tiers | `data/pricing.ts` |
| Feature lists | `data/features.ts` |
| Social proof stats | `data/social-proof.ts` |

### 3. Scripts Over Manual Work

If you need to:
- Extract colors from a reference site → write `tools/extract-colors.js`
- Generate section boilerplate → write `tools/scaffold-section.js`
- Convert template to code → write `tools/template-to-code.js`
- Resize/optimize images → write `tools/optimize-images.sh`
- Batch rename/organize files → write `tools/organize-assets.sh`

### 4. Template Variables

When using the template system (`templates/*.md`), templates define WHAT content goes where using descriptive placeholders:

```
## Hero Section
- Headline: [Pain → Promise formula]
- Subheadline: [Specific outcome + timeframe]
- CTA: [Action verb + benefit]
```

Data files provide the actual values. Code assembles them.

### 5. Reproducibility Test

Ask: **"If I ran this again with the same inputs, would I get the same output?"**

If no → refactor until yes.

### 6. GHL-Specific Rule

For GoHighLevel deployments, this principle is even more critical:
- Each section is a standalone HTML file
- Content must be easily swappable without touching structure
- Image URLs must be hosted (not local paths)
- All styles inline or in `<style>` tags within the section
