# March 2026 Tool Sentiment and Risk Snapshot

Date: 2026-03-06

This monthly snapshot separates hard usage signals from social sentiment and risk notes.

## 1) Proven usage and adoption signals

## CLI coding agents

- Claude Code npm monthly downloads (`2026-02-04` to `2026-03-05`): 34,862,779
  - Source: https://api.npmjs.org/downloads/point/last-month/@anthropic-ai/claude-code
- OpenAI Codex npm monthly downloads (`2026-02-04` to `2026-03-05`): 7,435,122
  - Source: https://api.npmjs.org/downloads/point/last-month/@openai/codex
- Gemini CLI npm monthly downloads (`2026-02-04` to `2026-03-05`): 3,064,245
  - Source: https://api.npmjs.org/downloads/point/last-month/@google/gemini-cli

## IDE install-base proxies

- GitHub Copilot installs (VS Code): 72,016,989
  - Source: https://marketplace.visualstudio.com/items?itemName=GitHub.copilot
- GitHub Copilot Chat installs (VS Code): 64,427,498
  - Source: https://marketplace.visualstudio.com/items?itemName=GitHub.copilot-chat
- Claude Code for VS Code installs: 5,903,944
  - Source: https://marketplace.visualstudio.com/items?itemName=anthropic.claude-code
- Continue installs: 2,272,864
  - Source: https://marketplace.visualstudio.com/items?itemName=Continue.continue

## Open-source momentum proxies

- OpenHands stars: 68,673
  - Source: https://github.com/OpenHands/OpenHands
- OpenAI Codex stars: 63,530
  - Source: https://github.com/openai/codex
- Cline stars: 58,699
  - Source: https://github.com/cline/cline
- Continue stars: 31,675
  - Source: https://github.com/continuedev/continue

Interpretation:
- Claude Code has the strongest public CLI download signal in this window.
- Copilot retains a large IDE install-base signal.
- Open-source coding-agent competition remains strong across OpenHands, Codex, Cline, and Continue.

## 2) Developer sentiment (X/HN/Reddit)

Confidence policy:
- X posts are included as low-confidence sentiment unless corroborated.
- Full candidate set is in `data/sentiment-claims.csv`.

Validation status:
- All submitted X links returned HTTP 403 via unauthenticated CLI checks on 2026-03-06.
- These claims are retained as unverified candidates (`verified=false`).

Directional sentiment themes from candidate evidence:
- Strong excitement around Claude Code for terminal productivity.
- Ongoing debate around IDE-first tools vs terminal-first workflows.
- Frequent tool-switch narratives (Claude, Codex, Copilot, Cursor), but currently unverified in this environment.

## 3) Failure and procurement signal

Common risk categories seen in candidate social evidence and industry practice:

- Over-privileged command execution in coding agents.
- Security gaps from config/tool misuse.
- Enterprise adoption blockers for non-terminal users.
- Policy and approval requirements before broad autonomous execution.

Recommended minimum controls:
- Human approvals for destructive commands.
- CI eval gates before merge.
- Sandboxed execution and scoped credentials.
- Traceability for all agent actions.

## LinkedIn-ready summary

- Best current CLI signal: Claude Code.
- Best current IDE install-base signal: Copilot.
- Best framing for builders: choose by workflow (CLI vs IDE vs autonomous) and apply safety gates before scaling.
- Social sentiment is useful but should remain low-confidence until independently verified.
