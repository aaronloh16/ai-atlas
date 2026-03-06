# AI Coding Tools

Tools that directly assist writing, modifying, and shipping code with LLMs.

## Top tools

## Claude Code
- Link: https://docs.anthropic.com/en/docs/claude-code/overview
- Category: AI Coding Tools
- What it is: Anthropic's agentic coding environment for terminal-first development workflows.
- Why it matters: Strong repo reasoning, patch planning, and command execution in practical dev loops.
- Best for: Developers who work in terminal and want deep codebase collaboration.
- Best paired with: MCP, Langfuse, Promptfoo, React Grab.

## Continue
- Link: https://github.com/continuedev/continue
- Category: AI Coding Tools
- What it is: Open-source AI coding assistant that runs in IDEs with model/provider flexibility.
- Why it matters: Gives teams controllable, extensible coding assistance without hard lock-in.
- Best for: Teams that want IDE-native AI workflows with policy and provider control.
- Best paired with: Ollama, LiteLLM, MCP, Qdrant.

## Aider
- Link: https://github.com/Aider-AI/aider
- Category: AI Coding Tools
- What it is: Terminal AI pair programmer focused on repo edits, commits, and diff-based iteration.
- Why it matters: Fast, transparent code-change loop for builders who prefer CLI over GUI.
- Best for: Solo builders and power users shipping quickly from terminal.
- Best paired with: GitHub Actions, Promptfoo, Langfuse.

## OpenHands
- Link: https://github.com/OpenHands/OpenHands
- Category: AI Coding Tools
- What it is: Open-source AI software development agent for autonomous engineering tasks.
- Why it matters: Bridges coding assistant and autonomous developer workflows in one platform.
- Best for: Builders experimenting with higher-autonomy code execution.
- Best paired with: OpenHands Software Agent SDK, MCP, observability tools.

## Cline
- Link: https://github.com/cline/cline
- Category: AI Coding Tools
- What it is: VS Code coding agent focused on iterative task execution and repo navigation.
- Why it matters: Helps operationalize multi-step coding tasks directly inside editor workflows.
- Best for: VS Code users wanting more autonomy than simple autocomplete.
- Best paired with: MCP servers, Promptfoo, Langfuse.

## Honorable mentions

## Claude Code CLI
- Link: https://docs.anthropic.com/en/docs/claude-code/cli-reference
- Category: AI Coding Tools
- What it is: Command-line interface for Claude Code workflows and scripting.
- Why it matters: Enables automatable AI coding loops in shell-first workflows.
- Best for: CLI-heavy developers.
- Best paired with: CI pipelines, shell scripts, MCP.

## Claude Code SDK
- Link: https://docs.anthropic.com/s/claude-code-sdk
- Category: AI Coding Tools
- What it is: SDK for embedding Claude Code capabilities into custom developer workflows.
- Why it matters: Lets teams productize internal coding-assistant behaviors.
- Best for: Platform teams and internal tooling builders.
- Best paired with: Langfuse, LiteLLM, internal orchestration.

## Tabby
- Link: https://github.com/TabbyML/tabby
- Category: AI Coding Tools
- What it is: Self-hosted coding assistant stack.
- Why it matters: Useful for privacy-sensitive or self-hosted coding assistant deployments.
- Best for: Teams with strict data controls.
- Best paired with: Local runtimes, private models.

## Related categories
- [Autonomous Agents](../autonomous-agents/README.md)
- [MCP](../mcp/README.md)
- [Context Engineering](../context-engineering/README.md)
- [Observability Evals](../observability-evals/README.md)

## How to choose

- Choose terminal-native tools (`Aider`, `Claude Code`) if you ship from shell and Git.
- Choose IDE-native tools (`Continue`, `Cline`) if you want embedded workflows.
- Choose `OpenHands` if your priority is autonomous task completion.
