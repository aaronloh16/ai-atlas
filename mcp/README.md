# MCP

Model Context Protocol ecosystem resources for connecting AI systems to tools, data, and actions.

## Top tools

## Model Context Protocol spec
- Link: https://github.com/modelcontextprotocol/modelcontextprotocol
- Category: MCP
- What it is: Official protocol specification for model-tool/data interoperability.
- Why it matters: Core standard shaping how agentic systems access external context.
- Best for: Builders designing interoperable tool ecosystems.
- Best paired with: MCP servers, coding agents, agent frameworks.

## MCP Servers
- Link: https://github.com/modelcontextprotocol/servers
- Category: MCP
- What it is: Official collection of MCP server implementations.
- Why it matters: Practical starting point for adopting MCP quickly.
- Best for: Developers wiring tools and data sources to agents.
- Best paired with: Claude Code, Continue, OpenHands.

## GitHub MCP Server
- Link: https://github.com/mcp/github/github-mcp-server
- Category: MCP
- What it is: MCP server for interacting with GitHub workflows and resources.
- Why it matters: Turns repository and issue operations into agent-accessible primitives.
- Best for: GitHub-centric agent development.
- Best paired with: Coding agents, CI, observability.

## MCP example remote server
- Link: https://github.com/modelcontextprotocol/example-remote-server
- Category: MCP
- What it is: Reference implementation for remote MCP server patterns.
- Why it matters: Useful blueprint for production-grade server architecture.
- Best for: Teams shipping custom MCP backends.
- Best paired with: MCP spec, official servers.

## Notable first-party MCP servers

## Playwright MCP
- Link: https://github.com/microsoft/playwright-mcp
- Category: MCP
- What it is: Microsoft's official MCP server for browser automation via Playwright — uses accessibility tree snapshots instead of screenshots.
- Why it matters: #2 most installed MCP server in 2026. Built into GitHub Copilot Coding Agent. Essential for any agent that needs to interact with web UIs.
- Best for: Agent builders needing browser automation without vision models.
- Best paired with: Browser agents, coding agents, CI pipelines.

## Context7
- Link: https://github.com/upstash/context7
- Category: MCP
- What it is: Remote MCP server (by Upstash) that injects version-specific, up-to-date library documentation directly into LLM prompts.
- Why it matters: #1 most popular MCP server by installs in 2026. Eliminates hallucinated APIs by grounding code generation in live docs.
- Best for: Any developer using AI coding tools who wants accurate, current library docs in context.
- Best paired with: Claude Code, Cursor, Windsurf, any MCP-compatible client.

## Stripe MCP
- Link: https://docs.stripe.com/mcp
- Category: MCP
- What it is: Official Stripe MCP server exposing payment operations (customers, charges, subscriptions, invoices) to AI agents. Available hosted or locally via npm.
- Why it matters: First-party MCP from a major fintech platform. Demonstrates production-grade agent-commerce integration.
- Best for: Teams building agents that interact with payment workflows.
- Best paired with: Agent frameworks, Claude Code.

## Cloudflare MCP
- Link: https://github.com/cloudflare/mcp-server-cloudflare
- Category: MCP
- What it is: Exposes the entire Cloudflare API (2,500+ endpoints) through MCP using "Code Mode" — collapses millions of tokens into ~1,000.
- Why it matters: The Code Mode pattern (99.9% token reduction) is a breakthrough for exposing large APIs to agents. Also provides the platform for deploying your own remote MCP servers with built-in OAuth.
- Best for: Teams using Cloudflare or wanting to deploy their own MCP servers.
- Best paired with: MCP spec, agent frameworks.

## Supabase MCP
- Link: https://github.com/supabase-community/supabase-mcp
- Category: MCP
- What it is: MCP server for managing Supabase projects — create tables, run SQL, manage schemas, query data. 20+ tools with read-only mode for safety.
- Why it matters: Lets AI assistants design and manage entire backends. Available remotely with OAuth.
- Best for: Teams using Supabase who want AI-assisted database management.
- Best paired with: Lovable, agent frameworks, Claude Code.

## Honorable mentions

## Awesome MCP Servers (appcypher)
- Link: https://github.com/appcypher/awesome-mcp-servers
- Category: MCP
- What it is: Community-curated MCP server index.
- Why it matters: Good discovery layer for emerging integrations.
- Best for: Builders scanning the ecosystem quickly.
- Best paired with: Official MCP repos.

## Awesome MCP Servers (wong2)
- Link: https://github.com/wong2/awesome-mcp-servers
- Category: MCP
- What it is: Alternative curated MCP server list.
- Why it matters: Improves coverage across rapidly changing MCP landscape.
- Best for: Builders comparing available server options.
- Best paired with: MCP Hunt, Open MCP Directory.

## Open MCP Directory
- Link: https://www.openmcpdirectory.com/
- Category: MCP
- What it is: Web directory of discoverable MCP servers and ecosystem entries.
- Why it matters: Fast browse experience for non-GitHub-first users.
- Best for: Quick capability discovery.
- Best paired with: GitHub canonical sources.

## Related categories
- [AI Coding Tools](../ai-coding-tools/README.md)
- [Context Engineering](../context-engineering/README.md)
- [Agent Frameworks](../agent-frameworks/README.md)

## How to choose

- Start with the official spec and official servers.
- Add curated directories for discovery only after baseline implementation.
- Prioritize server quality, permissions model, and auditability over server count.
