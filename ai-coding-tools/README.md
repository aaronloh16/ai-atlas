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

## AI app builders (vibe coding platforms)

## Bolt.new
- Link: https://bolt.new
- Category: AI Coding Tools
- What it is: Browser-based AI app builder running full Node.js via WebContainers — supports React, Vue, Svelte, Next.js, Remix, and more.
- Why it matters: Fastest path from prompt to running app with no local setup. Broadest framework support of any AI app builder.
- Best for: Rapid prototyping and testing ideas before committing to a full codebase.
- Best paired with: Cursor (for export and iteration), Vercel (for deployment).
- Evidence window: 2025-06-01 to 2026-03-09.
- Evidence sources: Official product + multiple comparison reviews.
- Confidence: High.
- Caveats / failure modes: No built-in database — connect your own backend. Ephemeral by nature; not a production IDE.
- Last verified: 2026-03-09.

## Lovable
- Link: https://lovable.dev
- Category: AI Coding Tools
- What it is: AI fullstack engineer (formerly GPT Engineer) with deep Supabase integration for database, auth, and row-level security.
- Why it matters: Most accessible path from idea to full-stack app for non-technical builders. $1.8B valuation signals strong market traction.
- Best for: Non-technical founders who need working apps with real backends, not just UI mockups.
- Best paired with: Supabase, Bolt.new, deployment platforms.
- Evidence window: 2025-01-01 to 2026-03-09.
- Evidence sources: Official product + funding announcements + comparison reviews.
- Confidence: High.
- Caveats / failure modes: Deep Supabase coupling limits backend flexibility. May need refactoring for complex production use.
- Last verified: 2026-03-09.

## v0
- Link: https://v0.dev
- Category: AI Coding Tools
- What it is: Vercel's AI UI generator — produces production-quality React components from natural language prompts.
- Why it matters: Best-in-class UI quality with minimal lock-in. Exports standard React code.
- Best for: Frontend developers and designers who want high-quality components fast.
- Best paired with: Vercel AI SDK, Next.js, shadcn/ui.
- Evidence window: 2025-01-01 to 2026-03-09.
- Evidence sources: Official product + Vercel ecosystem (6M+ developers).
- Confidence: High.
- Caveats / failure modes: Frontend-only — no backend generation. Best results require knowing correct component terminology.
- Last verified: 2026-03-09.

## Replit Agent
- Link: https://replit.com/ai
- Category: AI Coding Tools
- What it is: Browser-based autonomous coding agent (Agent 3) with 200-minute autonomous runtime — builds, tests, and fixes apps.
- Why it matters: Zero-setup path to working software. Can build mobile apps and create other agents. Approaching ~$9B valuation.
- Best for: Beginners, rapid prototyping, and browser-first development with no local tooling.
- Best paired with: Deployment platforms, Slack/Notion integrations.
- Evidence window: 2025-09-01 to 2026-03-09.
- Evidence sources: Official product + CNBC coverage + enterprise case studies.
- Confidence: Medium.
- Caveats / failure modes: Security concerns with vibe-coded output (Tenzai study). Pricing escalates for professional use.
- Last verified: 2026-03-09.

## IDE and CLI alternatives worth tracking

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

## Windsurf (acquired by Cognition/Devin)
- Link: https://windsurf.com/
- Category: AI Coding Tools
- What it is: AI coding environment focused on speed and agentic IDE features. Acquired by Cognition AI (makers of Devin) for ~$250M in December 2025.
- Why it matters: Being merged with Devin's autonomous agent to create a combined IDE + agent experience.
- Best for: Developers tracking the convergence of IDE assistants and autonomous agents.
- Best paired with: Promptfoo, Langfuse.
- Evidence window: 2025-12-01 to 2026-03-09.
- Evidence sources: Official product + acquisition reporting.
- Confidence: Medium.
- Caveats / failure modes: Future product direction uncertain during Cognition integration. Public usage metrics remain limited.
- Last verified: 2026-03-09.

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

**For coding assistants (writing code in your own projects):**
- Choose `Claude Code` when terminal-first velocity is your top priority.
- Choose `GitHub Copilot` when you need mainstream IDE adoption and enterprise familiarity.
- Choose `Cursor` when you want an AI-native IDE with strong agent loops.
- Choose `Continue` when provider control and open-source customization matter most.
- Choose `OpenHands` when autonomy experiments are central and you can enforce strong eval gates.

**For app builders (going from idea to deployed app):**
- Choose `Bolt.new` for the fastest prototyping with broadest framework support.
- Choose `Lovable` when you need a full-stack app with database and auth (non-technical friendly).
- Choose `v0` when UI quality and React component generation is the priority.
- Choose `Replit Agent` for zero-setup browser-first building and mobile app creation.

## Verification status

For sentiment-heavy claims (especially X/Twitter), see [March 2026 Tool Sentiment Report](../reports/mar-2026-tool-sentiment.md) and [sentiment claims CSV](../data/sentiment-claims.csv). Unverified social claims are intentionally tagged low confidence.
