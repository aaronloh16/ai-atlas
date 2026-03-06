# AI Coding Stack

Practical stack recipes for AI-assisted software development with clear tradeoffs.

## Stack 1: Beginner fast-start

Goal: Ship quickly with minimal setup.

- Coding interface: GitHub Copilot or Continue
- Prompted coding partner: Claude Code (for terminal tasks)
- Eval baseline: Promptfoo
- Basic tracing: Langfuse
- Bridge layer: MCP (only for tools you actually use)

Why this works:
- Easy IDE onboarding + one terminal agent + one eval tool avoids early complexity.

When to switch:
- Move to stack 2 when you are spending most time in terminal and need deeper repo automation.

## Stack 2: Solo terminal power-user

Goal: Maximize speed in terminal-native workflows.

- Primary interface: Claude Code
- Secondary comparator: OpenAI Codex (CLI)
- Safety/eval gate: Promptfoo in CI
- Telemetry: Langfuse
- Context/tools: MCP servers + lightweight repo memory docs

Why this works:
- Fast command-driven iteration plus explicit quality gates before merge.

When to switch:
- Move to stack 3 when multiple engineers need shared policy controls and auditability.

## Stack 3: Team reliability + governance

Goal: Reduce risk while scaling coding-agent usage across teams.

- IDE assistant: GitHub Copilot or Continue
- Task/autonomy layer: OpenHands (sandboxed) for scoped tasks
- Routing/control: LiteLLM or gateway layer for provider policy
- Observability: Langfuse traces + OpenLLMetry
- Eval and guardrails: Promptfoo + Guardrails
- CI policy: required tests, approval checks, and rollout gating

Why this works:
- Combines mainstream dev UX with explicit governance and production safety checks.

## Suggested architecture

- Developer interface: IDE assistant and/or terminal agent
- Tool/data bridge: MCP servers
- Evaluation: Promptfoo suites in CI
- Runtime telemetry: Langfuse traces + error feedback
- Safety controls: approval gates, sandboxed execution, rollback path

## Who this is for

- Beginners who want a clean starting point
- Solo builders shipping quickly
- Teams that need reliability and governance for agentic coding

## Swap options

- Replace Copilot with Continue where provider flexibility is required.
- Replace OpenHands with lighter agent flows when full autonomy is unnecessary.
- Add DeepEval or OpenAI Evals when you need deeper benchmark-style testing.
