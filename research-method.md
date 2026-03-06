# Research Method

How AI Atlas ranks tools and labels confidence.

## Ranking rubric

Weighted score (100 points total):

- Usage and adoption: 40%
- Product quality and benchmark evidence: 25%
- Maintainer velocity: 15%
- Community sentiment: 10%
- Security and procurement risk: 10%

## Evidence rules

- Use primary sources first: official docs, official repos, package registries, benchmark publishers.
- Every top-tool claim must cite at least 2 source types.
- Sentiment can include X/HN/Reddit, but cannot be the only evidence for ranking.
- X sentiment defaults to `Low` confidence unless corroborated by non-social metrics.

## Confidence levels

- High: 2+ strong source types, fresh metrics, and no major unresolved contradictions.
- Medium: evidence is directionally strong but missing one major validation path.
- Low: sentiment-heavy, weak reproducibility, or conflicting evidence.

## Freshness policy

- Default freshness gate: 45 days.
- Evidence older than 45 days must be marked `historical context`.
- Each entry must include `Last verified` date.

## Verification policy for social links

- A social claim is `verified=true` only if the original post is reachable and claim text/date are confirmed.
- If inaccessible (for example, auth wall or HTTP block), mark `verified=false` and keep confidence low.

## Minimum output standard for "best" claims

Any "best" or "top" statement must include:

- One measurable strength signal.
- One caveat.
- One failure mode or procurement risk note.
