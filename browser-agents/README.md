# Browser Agents

Tools for automating web navigation, browser actions, and computer-use tasks with AI.

## Top tools

## Stagehand
- Link: https://github.com/browserbase/stagehand
- Category: Browser Agents
- What it is: Browser automation framework designed for AI-driven web actions.
- Why it matters: Makes web task execution a practical primitive for agent systems.
- Best for: Teams building web-operating assistants and workflow automations.
- Best paired with: MCP, autonomous agents, observability tools.

## browser-use
- Link: https://github.com/browser-use/browser-use
- Category: Browser Agents
- What it is: Framework for controlling browsers through AI agents.
- Why it matters: Expands agent capabilities into real web task completion.
- Best for: Builders prototyping computer-use assistants.
- Best paired with: Agent frameworks, eval stacks.

## Playwright MCP
- Link: https://github.com/microsoft/playwright-mcp
- Category: Browser Agents
- What it is: MCP server that gives AI agents browser automation capabilities via Playwright — uses structured accessibility snapshots instead of vision models.
- Why it matters: Connects browser automation directly to any MCP-compatible agent (Claude, Cursor, etc.) without screenshots or computer-use models.
- Best for: Agent builders who need reliable web interaction without vision model overhead.
- Best paired with: MCP ecosystem, Stagehand, agent frameworks.

## Browserbase
- Link: https://www.browserbase.com
- Category: Browser Agents
- What it is: Cloud browser infrastructure for AI agents — managed headless browsers with stealth mode, CAPTCHA handling, session persistence, and autoscaling. Created Stagehand.
- Why it matters: Solves the hardest operational problem for browser agents: running browsers at scale in the cloud. Used by Vercel, Perplexity. SOC-2 and HIPAA compliant.
- Best for: Teams deploying browser agents in production who need managed infrastructure.
- Best paired with: Stagehand, Playwright MCP, agent frameworks.

## Honorable mentions

## Related categories
- [Autonomous Agents](../autonomous-agents/README.md)
- [MCP](../mcp/README.md)
- [Observability Evals](../observability-evals/README.md)

## How to choose

- Use browser agents when APIs are unavailable or incomplete.
- Start with narrow, high-value workflows and add guardrails before scaling.
