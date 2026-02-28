# Stitch UI Design - Detailed Reference

Extended documentation for the stitch-ui-design skill. Use when the user needs specific examples, detailed use cases, or deeper guidance.

## Common Use Cases

### Landing Pages

```
SaaS landing page for [product name]

Sections:
- Hero with headline, subheadline, CTA, and product screenshot
- Social proof with customer logos
- Features grid (3 columns) with icons
- Testimonials carousel
- Pricing table (3 tiers)
- FAQ accordion
- Footer with links and newsletter signup

Style: Modern, professional, trust-building
Colors: Navy blue primary, light blue accents, white background
```

### Mobile Apps

```
Food delivery app home screen

Components:
- Search bar with location selector
- Category chips (Pizza, Burgers, Sushi, etc.)
- Restaurant cards with image, name, rating, delivery time, and price range
- Bottom navigation (Home, Search, Orders, Profile)

Style: Vibrant, appetite-appealing, easy to scan
Colors: Orange primary, white background, food photography
Platform: iOS mobile (375px width)
```

### Dashboards

```
Admin dashboard for content management system

Layout:
- Left sidebar navigation with collapsible menu
- Top bar with search, notifications, and user profile
- Main content area with:
  - Stats overview (4 metric cards)
  - Recent posts table with actions
  - Activity timeline
  - Quick actions panel

Style: Clean, data-focused, professional
Colors: Neutral grays with blue accents
Platform: Desktop web (1440px)
```

### Forms and Inputs

```
Multi-step signup form for B2B platform

Steps:
1. Account details (company name, email, password)
2. Company information (industry, size, role)
3. Team setup (invite members)
4. Confirmation with success message

Features:
- Progress indicator at top
- Field validation with inline errors
- Back/Next navigation
- Skip option for step 3

Style: Minimal, focused, low-friction
Colors: White background, green for success states
```

## Checkout Flow Example

```
Checkout flow with:
- Cart summary with quantity adjusters
- Shipping address form with validation
- Payment method selection (cards, PayPal, Apple Pay)
- Order confirmation with tracking number
```

## Integration with Development Workflow

### Stitch → Figma → Code

1. Generate UI in Stitch with detailed prompts
2. Export to Figma for design system integration
3. Hand off to developers with design specs
4. Implement with production-ready code

### Stitch → HTML → Framework

1. Generate and refine UI in Stitch
2. Export HTML/CSS code
3. Convert to React/Vue/Svelte components
4. Integrate into application codebase

### Rapid Prototyping

1. Create multiple screen variations quickly
2. Test with users or stakeholders
3. Iterate based on feedback
4. Finalize design for development

## Best Practices for Export

**Before exporting:**

- Verify responsive breakpoints
- Check color contrast for accessibility
- Ensure interactive states are defined
- Review component naming and structure

**After export:**

- Refactor generated code for production standards
- Add proper semantic HTML tags
- Implement accessibility attributes (ARIA labels, alt text)
- Optimize images and assets
- Add animations and micro-interactions

## Conclusion

Stitch is a starting point, not a final product. Use it to accelerate the design process, explore ideas quickly, and establish visual direction—then refine with human judgment and production standards.
