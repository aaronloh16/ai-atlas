# AI Coding Tools

Tools that directly assist writing, modifying, and shipping code with LLMs.

## Top by use case

## CLI coding (current leader): Claude Code
- Link: https://docs.anthropic.com/en/docs/claude-code/overview
- Category: AI Coding Tools
- What it is: Anthropic's terminal-first coding agent environment.
- Why it matters: Public package-download signal shows very high current CLI usage.
- Best for: Developers who ship from terminal and want autonomous repo operations.
- Best paired with: Promptfoo, Langfuse, MCP, GitHub Actions.
- Evidence window: 2026-02-04 to 2026-03-05.
- Evidence sources: Anthropic docs + npm downloads API.
- Confidence: High.
- Caveats / failure modes: Requires strict command approvals and sandboxing in real repos; social sentiment around performance is mixed for GUI-heavy workflows.
- Last verified: 2026-03-06.

Strength:
- Strong recent CLI usage signal: `@anthropic-ai/claude-code` monthly downloads ([source](https://api.npmjs.org/downloads/point/last-month/@anthropic-ai/claude-code)).

Caveat:
- Terminal-first UX can be a blocker for non-terminal teams.

Failure or procurement note:
- Treat agent command execution as privileged access and gate with approvals, test checks, and least-privilege credentials.

## IDE coding (incumbent at scale): GitHub Copilot
- Link: https://marketplace.visualstudio.com/items?itemName=GitHub.copilot
- Category: AI Coding Tools
- What it is: IDE-native coding assistant from GitHub/Microsoft.
- Why it matters: Large VS Code install base and broad enterprise familiarity.
- Best for: Teams with IDE-first workflows and existing GitHub footprint.
- Best paired with: Copilot Chat, Promptfoo, Langfuse.
- Evidence window: 2026-03-06 snapshot.
- Evidence sources: VS Code Marketplace + official extension listing.
- Confidence: High.
- Caveats / failure modes: Install counts are cumulative, not active usage; enterprise teams still need policy controls for data handling and automation scope.
- Last verified: 2026-03-06.

Strength:
- Very large install base on VS Code marketplace ([source](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)).

Caveat:
- Usage depth and quality vary heavily by language, repo size, and governance setup.

Failure or procurement note:
- Security and confidentiality incidents in AI-assistant ecosystems make policy guardrails mandatory before broad rollout.

## Autonomous coding workflows (open-source anchor): OpenHands
- Link: https://github.com/OpenHands/OpenHands
- Category: AI Coding Tools
- What it is: Open-source software engineering agent focused on multi-step autonomous execution.
- Why it matters: Strong open-source adoption and active development velocity.
- Best for: Teams evaluating higher-autonomy coding loops with observable traces.
- Best paired with: OpenHands Software Agent SDK, Langfuse, Promptfoo.
- Evidence window: 2026-03-06 snapshot.
- Evidence sources: GitHub repository metrics + project docs.
- Confidence: High.
- Caveats / failure modes: Requires robust eval gates before production autonomy.
- Last verified: 2026-03-06.

Strength:
- High star count and active update cadence ([source](https://github.com/OpenHands/OpenHands)).

Caveat:
- Higher autonomy increases blast radius of wrong actions.

Failure or procurement note:
- Organizations often require sandbox isolation and human review before production execution.

## Team-controlled IDE + model routing: Continue
- Link: https://github.com/continuedev/continue
- Category: AI Coding Tools
- What it is: Open-source IDE assistant with provider and model flexibility.
- Why it matters: Gives teams policy control and model optionality without hard lock-in.
- Best for: Teams that need configurable provider routing and governance.
- Best paired with: LiteLLM, Ollama, Langfuse, MCP.
- Evidence window: 2026-03-06 snapshot.
- Evidence sources: GitHub repository metrics + VS Code marketplace listing.
- Confidence: Medium.
- Caveats / failure modes: Quality depends on model/provider setup and prompt discipline.
- Last verified: 2026-03-06.

Strength:
- Strong open-source adoption and active updates ([source](https://github.com/continuedev/continue)).

Caveat:
- More flexibility means more setup complexity.

Failure or procurement note:
- Misconfigured provider policies can leak cost or data if not centrally governed.

## Fast-moving alternatives worth tracking

## Cursor
- Link: https://cursor.com/
- Category: AI Coding Tools
- What it is: AI-first IDE for integrated coding-agent workflows.
- Why it matters: Strong developer mindshare and frequent capability releases.
- Best for: Developers who prefer integrated IDE agent loops.
- Best paired with: Promptfoo, Langfuse, MCP.
- Evidence window: 2026-02-01 to 2026-03-06.
- Evidence sources: Official product/blog updates + sentiment claims (low-confidence until independently validated).
- Confidence: Medium.
- Caveats / failure modes: Proprietary telemetry limits independent verification of active usage claims.
- Last verified: 2026-03-06.

## Windsurf
- Link: https://windsurf.com/
- Category: AI Coding Tools
- What it is: AI coding environment focused on speed and agentic IDE features.
- Why it matters: Frequently discussed in competitive IDE comparisons.
- Best for: Developers testing alternatives to incumbent IDE assistants.
- Best paired with: Promptfoo, Langfuse.
- Evidence window: 2026-01-01 to 2026-03-06.
- Evidence sources: Official product/blog updates + community sentiment threads.
- Confidence: Low.
- Caveats / failure modes: Public, reproducible usage metrics are limited.
- Last verified: 2026-03-06.

## OpenAI Codex (CLI)
- Link: https://github.com/openai/codex
- Category: AI Coding Tools
- What it is: OpenAI's open-source coding CLI/agent tooling.
- Why it matters: High open-source traction and strong package-download signal.
- Best for: CLI-heavy developers comparing agent behavior across models.
- Best paired with: Promptfoo, Langfuse, MCP.
- Evidence window: 2026-02-04 to 2026-03-06.
- Evidence sources: GitHub metrics + npm downloads API.
- Confidence: High.
- Caveats / failure modes: Operational risk still depends on command sandboxing and permission model.
- Last verified: 2026-03-06.

## Evidence snapshot (March 6, 2026)
- Claude Code npm monthly downloads: [API](https://api.npmjs.org/downloads/point/last-month/@anthropic-ai/claude-code)
- OpenAI Codex npm monthly downloads: [API](https://api.npmjs.org/downloads/point/last-month/@openai/codex)
- Gemini CLI npm monthly downloads: [API](https://api.npmjs.org/downloads/point/last-month/@google/gemini-cli)
- GitHub Copilot VS Code installs: [Marketplace](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)
- Claude Code VS Code installs: [Marketplace](https://marketplace.visualstudio.com/items?itemName=anthropic.claude-code)

## Related categories
- [Autonomous Agents](../autonomous-agents/README.md)
- [MCP](../mcp/README.md)
- [Context Engineering](../context-engineering/README.md)
- [Observability Evals](../observability-evals/README.md)

## How to choose

- Choose `Claude Code` when terminal-first velocity is your top priority.
- Choose `GitHub Copilot` when you need mainstream IDE adoption and enterprise familiarity.
- Choose `OpenHands` when autonomy experiments are central and you can enforce strong eval gates.
- Choose `Continue` when provider control and open-source customization matter most.

## Verification status

For sentiment-heavy claims (especially X/Twitter), see [March 2026 Tool Sentiment Report](../reports/mar-2026-tool-sentiment.md) and [sentiment claims CSV](../data/sentiment-claims.csv). Unverified social claims are intentionally tagged low confidence.
