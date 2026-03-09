# AI Atlas — Web Frontend

A browsable frontend for the AI Atlas tool directory. Parses the markdown files from the repo and renders them as a searchable, categorized tool explorer.

## Tech stack

- **Next.js 16** with App Router
- **React 19**, **Tailwind CSS 4**
- **gray-matter** + **remark** for parsing markdown tool entries
- **Playwright** for E2E tests

## Getting started

```bash
cd web
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## How data flows

1. Category markdown files live in the repo root (e.g., `../ai-coding-tools/README.md`)
2. `src/lib/data.ts` reads and parses these files at build time using gray-matter and remark
3. Pages render tool cards, categories, learning paths, and stacks from the parsed data

## Project structure

```
src/
  app/
    page.tsx              # Home page
    HomeClient.tsx        # Client-side home component
    layout.tsx            # Root layout
    category/[slug]/      # Dynamic category pages
    learning-paths/       # Learning paths page
    stacks/               # Stacks page
  components/
    CategoryIcon.tsx      # Icons for each category
    SearchBar.tsx         # Tool search
    ToolCard.tsx          # Individual tool display
  lib/
    data.ts               # Markdown parsing and data layer
e2e/                      # Playwright E2E tests
```

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run lint` | Run ESLint |
| `npx playwright test` | Run E2E tests |
