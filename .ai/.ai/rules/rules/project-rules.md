# Project Rules

## General Philosophy

The project must be developed with a professional software engineering approach.

Priorities:

1. User experience.
2. Code quality.
3. Performance.
4. Maintainability.
5. Accessibility.

---

# Development Principles

## Think Before Coding

Before implementing:

- Read the project documentation.
- Understand the business goal.
- Check existing components.
- Avoid unnecessary changes.

---

# Code Standards

## TypeScript

Rules:

- Always use TypeScript.
- Avoid using `any`.
- Create clear interfaces and types.
- Prefer explicit typing.

---

## Components

Every component should:

- Have a single responsibility.
- Be reusable when possible.
- Have descriptive names.
- Avoid duplicated logic.

---

# React / Next.js Rules

Prefer:

- Server Components by default.
- Client Components only when necessary.
- Clean component architecture.
- Semantic HTML.

---

# Styling Rules

Follow:

- docs/04-design-system.md

Never create random:

- Colors.
- Font sizes.
- Spacing.
- Border radius values.

All visual decisions must follow the Design System.

---

# Responsive Rules

Every component must work correctly on:

- Mobile.
- Tablet.
- Desktop.

Mobile First approach.

---

# Performance Rules

Always consider:

- Image optimization.
- Loading performance.
- Bundle size.
- Avoid unnecessary JavaScript.

---

# SEO Rules

Every page must consider:

- Metadata.
- Semantic HTML.
- Accessibility.
- Search engine optimization.

Follow:

- docs/06-seo.md

---

# Before Finishing Any Task

Verify:

1. Does it follow the specification?
2. Does it match the design system?
3. Is the code maintainable?
4. Does it work on mobile?
5. Are there errors?

---

# Communication Style

When proposing solutions:

Explain:

- What changed.
- Why it changed.
- Possible tradeoffs.

Do not blindly implement changes.