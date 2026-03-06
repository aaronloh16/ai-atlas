# Contributing to AI Atlas

Thanks for helping improve AI Atlas.

## Curation principles

- Prioritize signal over volume.
- Prefer canonical project sources (official docs or primary GitHub repo).
- Avoid duplicate listings across categories unless the overlap is strategically useful.
- Keep descriptions neutral, practical, and builder-focused.
- Add or update relationships between tools, not just links.

## Entry requirements

Every entry must include:
- Link
- Category
- What it is
- Why it matters
- Best for
- Best paired with
- Evidence window
- Evidence sources
- Confidence
- Caveats / failure modes
- Last verified

Use this exact template:

```md
## Tool Name
- Link: https://canonical-link
- Category: Category Name
- What it is: One-sentence definition.
- Why it matters: Why builders should care.
- Best for: Primary user profile.
- Best paired with: 2-5 adjacent tools/protocols.
- Evidence window: YYYY-MM-DD to YYYY-MM-DD.
- Evidence sources: 2+ source types (for example, official docs + usage metrics).
- Confidence: High | Medium | Low.
- Caveats / failure modes: 1-2 practical risks or limitations.
- Last verified: YYYY-MM-DD.
```

## Folder README structure

Each category README should have:
- Short intro
- Top tools
- Honorable mentions
- Related categories
- How to choose

## Quality bar for additions

Additions are likely to be accepted when they are:
- Actively maintained and used by builders
- Distinctive in workflow or architecture
- Relevant to one of AI Atlas categories
- Helpful in real stack design decisions
- Supported by at least 2 source types
- Verified within the last 45 days (or marked historical context)

Additions are likely to be rejected when they are:
- Generic AI app directories or marketing lists
- Dead/abandoned projects without clear historical relevance
- Redundant alternatives with no clear differentiator

## Pull request checklist

- I used canonical links.
- I followed the entry format exactly.
- I placed entries in the most relevant category.
- I updated related categories or stack recipes if needed.
- I kept changes scoped and high-signal.
- I included at least 2 source types for each top-tool claim.
- I marked freshness and used `Last verified`.
- I tagged sentiment-only evidence as `Low` confidence unless corroborated.
