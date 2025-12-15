# Features

This folder contains domain features organized using a feature-sliced approach.

- `portfolio/` — feature that contains portfolio-related components, hooks and tests.
- `common/` — shared feature-level code that spans multiple features.

Guidelines:
- Keep low-level UI primitives in `src/components/ui`.
- Export public APIs from each feature via an `index.ts` (barrel) file.
- Migrate gradually: move files, add exports, then update imports across the app.
