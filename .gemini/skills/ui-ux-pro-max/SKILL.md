---
name: ui-ux-pro-max
description: Comprehensive design intelligence for web and mobile applications. Use when implementing accessibility, building landing pages or dashboards, choosing color palettes and typography, designing UI components, or reviewing code for UX issues. Contains 50+ styles, 97 color palettes, 57 font pairings, 99 UX guidelines, and 25 chart types across 9 technology stacks.
---

# UI/UX Pro Max - Design Intelligence

Comprehensive design guide for web and mobile applications. Reference when implementing UI/UX work: design, build, create, implement, review, fix, or improve interfaces.

## When to Apply

- Implementing accessibility requirements
- Building landing pages or dashboards
- Reviewing code for UX issues
- Choosing color palettes and typography
- Designing new UI components or pages

## Rule Categories by Priority

| Priority | Category | Impact | Domain |
| --- | --- | --- | --- |
| 1 | Accessibility | CRITICAL | ux |
| 2 | Touch & Interaction | CRITICAL | ux |
| 3 | Performance | HIGH | ux |
| 4 | Layout & Responsive | HIGH | ux |
| 5 | Typography & Color | MEDIUM | typography, color |
| 6 | Animation | MEDIUM | ux |
| 7 | Style Selection | MEDIUM | style, product |
| 8 | Charts & Data | LOW | chart |

## Quick Reference

### 1. Accessibility (CRITICAL)

- `form-labels` - Use label with for attribute
- `keyboard-nav` - Tab order matches visual order
- `aria-labels` - aria-label for icon-only buttons
- `alt-text` - Descriptive alt text for meaningful images
- `focus-states` - Visible focus rings on interactive elements
- `color-contrast` - Minimum 4.5:1 ratio for normal text

### 2. Touch & Interaction (CRITICAL)

- `cursor-pointer` - Add cursor-pointer to clickable elements
- `error-feedback` - Clear error messages near problem
- `loading-buttons` - Disable button during async operations
- `hover-vs-tap` - Use click/tap for primary interactions
- `touch-target-size` - Minimum 44x44px touch targets

### 3. Performance (HIGH)

- `content-jumping` - Reserve space for async content
- `reduced-motion` - Check prefers-reduced-motion
- `image-optimization` - Use WebP, srcset, lazy loading

### 4. Layout & Responsive (HIGH)

- `z-index-management` - Define z-index scale (10, 20, 30, 50)
- `horizontal-scroll` - Ensure content fits viewport width
- `readable-font-size` - Minimum 16px body text on mobile
- `viewport-meta` - width=device-width initial-scale=1

### 5. Typography & Color (MEDIUM)

- `font-pairing` - Match heading/body font personalities
- `line-length` - Limit to 65-75 characters per line
- `line-height` - Use 1.5-1.75 for body text

### 6. Animation (MEDIUM)

- `loading-states` - Skeleton screens or spinners
- `transform-performance` - Use transform/opacity, not width/height
- `duration-timing` - Use 150-300ms for micro-interactions

### 7. Style Selection (MEDIUM)

- `no-emoji-icons` - Use SVG icons, not emojis
- `consistency` - Use same style across all pages
- `style-match` - Match style to product type

### 8. Charts & Data (LOW)

- `data-table` - Provide table alternative for accessibility
- `color-guidance` - Use accessible color palettes
- `chart-type` - Match chart type to data type

## Workflow for UI/UX Requests

### Step 1: Analyze Requirements

Extract from user request:

- **Stack**: React, Vue, Next.js, or default to html-tailwind
- **Industry**: healthcare, fintech, gaming, education, beauty, etc.
- **Style keywords**: minimal, playful, professional, elegant, dark mode
- **Product type**: SaaS, e-commerce, portfolio, dashboard, landing page

### Step 2: Apply Design System

Use [reference.md](reference.md) for:

- Product type → pattern, style, colors, typography recommendations
- Anti-patterns to avoid
- Stack-specific guidelines (html-tailwind, React, Next.js, Vue, etc.)

### Step 3: Optional CLI Search (davila7)

For full design system search with 97 palettes, 57 font pairings, 99 UX rules:

```bash
npx skills add https://github.com/davila7/claude-code-templates --skill ui-ux-pro-max
```

Then run the search script from the installed skill directory (path varies by environment).

## Pre-Delivery Checklist

Before delivering UI code, verify:

### Visual Quality

- [ ] Use theme colors directly (bg-primary) not var() wrapper
- [ ] Hover states don't cause layout shift
- [ ] Brand logos correct (verified from Simple Icons)
- [ ] All icons from consistent set (Heroicons/Lucide)
- [ ] No emojis as icons (use SVG)

### Interaction

- [ ] Focus states visible for keyboard navigation
- [ ] Transitions smooth (150-300ms)
- [ ] Hover states provide clear visual feedback
- [ ] All clickable elements have cursor-pointer

### Light/Dark Mode

- [ ] Test both modes
- [ ] Borders visible in both modes
- [ ] Glass/transparent elements visible in light mode
- [ ] Light mode text contrast 4.5:1 minimum

### Layout

- [ ] No horizontal scroll on mobile
- [ ] Responsive at 375px, 768px, 1024px, 1440px
- [ ] No content hidden behind fixed navbars
- [ ] Floating elements have proper spacing

### Accessibility

- [ ] prefers-reduced-motion respected
- [ ] Color not the only indicator
- [ ] Form inputs have labels
- [ ] All images have alt text

## Common Rules for Professional UI

### Icons & Visual Elements

| Rule | Do | Don't |
| --- | --- | --- |
| No emoji icons | Use SVG (Heroicons, Lucide, Simple Icons) | Use emojis as UI icons |
| Stable hover states | Color/opacity transitions | Scale transforms that shift layout |
| Correct brand logos | Official SVG from Simple Icons | Guess or incorrect paths |
| Consistent icon sizing | Fixed viewBox 24x24 with w-6 h-6 | Random icon sizes |

### Interaction & Cursor

| Rule | Do | Don't |
| --- | --- | --- |
| Cursor pointer | cursor-pointer on clickable cards | Default cursor on interactive elements |
| Hover feedback | Visual feedback (color, shadow, border) | No indication element is interactive |
| Smooth transitions | transition-colors duration-200 | Instant or too slow (500ms) |

### Light/Dark Mode Contrast

| Rule | Do | Don't |
| --- | --- | --- |
| Glass card light | bg-white/80 or higher | bg-white/10 (too transparent) |
| Text contrast light | #0F172A (slate-900) for text | #94A3B8 (slate-400) for body |
| Muted text light | #475569 (slate-600) minimum | gray-400 or lighter |
| Border visibility | border-gray-200 in light mode | border-white/10 (invisible) |

### Layout & Spacing

| Rule | Do | Don't |
| --- | --- | --- |
| Floating navbar | top-4 left-4 right-4 spacing | Stick to top-0 left-0 right-0 |
| Content padding | Account for fixed navbar height | Content hidden behind fixed elements |
| Consistent max-width | Same max-w-6xl or max-w-7xl | Mixed container widths |

## Additional Resources

- For detailed domain tables, palettes, and stack guidelines: [reference.md](reference.md)
- Source: [davila7/claude-code-templates](https://github.com/davila7/claude-code-templates) (MIT License)
