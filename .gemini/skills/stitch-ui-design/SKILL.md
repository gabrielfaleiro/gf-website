---
name: stitch-ui-design
description: Expert guide for creating effective prompts for Google Stitch AI UI design tool. Use when user wants to design UI/UX in Stitch, create app interfaces, generate mobile/web designs, or needs help crafting prompts for Stitch.
---

# Stitch UI Design Prompting

Expert guidance for crafting effective prompts in Google Stitch, the AI-powered UI design tool by Google Labs. Helps create precise, actionable prompts that generate high-quality UI designs for web and mobile applications.

## What is Google Stitch?

Google Stitch is an experimental AI UI generator powered by Gemini 2.5 Flash that transforms text prompts and visual references into functional UI designs. It supports:

- Text-to-UI generation from natural language prompts
- Image-to-UI conversion from sketches, wireframes, or screenshots
- Multi-screen app flows and responsive layouts
- Export to HTML/CSS, Figma, and code
- Iterative refinement with variants and annotations

## Core Prompting Principles

### 1. Be Specific and Detailed

Generic prompts yield generic results. Specify components, layout structure, visual style, and context.

**Poor:** `Create a dashboard`

**Effective:** `Member dashboard with course modules grid, progress tracking bar, and community feed sidebar using purple theme and card-based layout`

### 2. Define Visual Style and Theme

Always include: color palette, design aesthetic (minimalist, modern, glassmorphic), typography preferences, spacing/density.

**Example:** `E-commerce product page with hero image gallery, add-to-cart CTA, reviews section. Use clean minimalist design with sage green accents and generous white space.`

### 3. Structure Multi-Screen Flows

List each screen as bullet points before generation. Stitch will confirm before generating multiple screens.

```
Fitness tracking app with:
- Onboarding screen with goal selection
- Home dashboard with daily stats and activity rings
- Workout library with category filters
- Profile screen with achievements and settings
```

### 4. Specify Platform and Responsive Behavior

Indicate mobile, tablet, desktop, or responsive web with breakpoints when relevant.

**Examples:**
- `Mobile app login screen (iOS style) with email/password fields and social auth buttons`
- `Responsive landing page that adapts from mobile (320px) to desktop (1440px) with collapsible navigation`

### 5. Include Functional Requirements

Describe interactive elements: button actions, form validation, navigation patterns, loading states, empty states, error handling.

## Prompt Structure Template

```
[Screen/Component Type] for [User/Context]

Key Features:
- [Feature 1 with specific details]
- [Feature 2 with specific details]
- [Feature 3 with specific details]

Visual Style:
- [Color scheme]
- [Design aesthetic]
- [Layout approach]

Platform: [Mobile/Web/Responsive]
```

**Example:**
```
Dashboard for SaaS analytics platform

Key Features:
- Top metrics cards showing MRR, active users, churn rate
- Line chart for revenue trends (last 30 days)
- Recent activity feed with user actions
- Quick action buttons for reports and exports

Visual Style:
- Dark mode with blue/purple gradient accents
- Modern glassmorphic cards with subtle shadows
- Clean data visualization with accessible colors

Platform: Responsive web (desktop-first)
```

## Iteration Strategies

### Annotate to Edit

1. Generate initial design from prompt
2. Annotate specific elements that need changes
3. Describe modifications in natural language
4. Stitch updates only the annotated areas

**Example annotations:** "Make this button larger and use primary color", "Add more spacing between these cards"

### Generate Variants

Request multiple variations: `Generate 3 variants of this hero section: 1. Image-focused with minimal text 2. Text-heavy with supporting graphics 3. Video background with overlay content`

### Progressive Refinement

Start broad, then add specificity in follow-up prompts. Make small, focused changes rather than complete redesigns.

## Anti-Patterns to Avoid

| ❌ Avoid | ✅ Use Instead |
|----------|----------------|
| `Make a nice website` | `Portfolio website for photographer with full-screen image gallery, project case studies, contact form. Minimalist black and white aesthetic with serif typography.` |
| `Create a login page` | `Login page for healthcare portal with email/password fields, "Remember me" checkbox, "Forgot password" link, SSO options (Google, Microsoft). Professional, trustworthy design with blue medical theme.` |
| `Design an app for task management` | `Task management app with kanban board layout, drag-and-drop cards, priority labels, due date indicators. Modern design with purple/teal gradient accents and dark mode support.` |

## Quick Tips

1. **Reference existing designs** - Upload screenshots or sketches alongside text prompts
2. **Use design terminology** - "hero section," "card layout," "glassmorphic," "bento grid"
3. **Specify interactions** - Hover states, click actions, transitions
4. **Think in components** - Break screens into reusable components (header, card, form)
5. **Test responsiveness** - Verify designs at multiple breakpoints
6. **Consider accessibility** - Color contrast, font sizes, touch target sizes

## Design-to-Code Workflow

**Export options:** HTML/CSS, Figma ("Paste to Figma"), code snippets for frameworks.

**Before export:** Verify responsive breakpoints, color contrast, interactive states, component naming.

**After export:** Refactor for production, add semantic HTML, ARIA labels, optimize assets.

## Additional Resources

- For detailed use cases (landing pages, mobile apps, dashboards, forms), see [reference.md](reference.md)
- For integration workflows (Stitch → Figma → Code), see [reference.md](reference.md)

## When to Use

Apply this skill when the user wants to design UI/UX in Stitch, create app interfaces, generate mobile or web designs, or needs help crafting effective prompts for Google Stitch.
