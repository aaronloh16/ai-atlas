# Context Engineering

Tools and patterns that improve context quality for coding and agent workflows.

## Top tools

## React Grab
- Link: https://github.com/aidenybai/react-grab
- Category: Context Engineering
- What it is: Tool to click live React components and capture relevant code context.
- Why it matters: Reduces context gathering friction in fast vibecoding loops.
- Best for: Frontend builders collaborating with coding agents.
- Best paired with: Claude Code, Continue, MCP.

## Jina Reader
- Link: https://github.com/jina-ai/reader
- Category: Context Engineering
- What it is: Readability/context extraction utility for clean content ingestion.
- Why it matters: Improves retrieval and prompt quality by reducing noisy source text.
- Best for: Builders creating context pipelines and RAG ingestion.
- Best paired with: LlamaIndex, Haystack, vector databases.

## Context Awesome
- Link: https://www.context-awesome.com/
- Category: Context Engineering
- What it is: Discovery hub focused on context tools and workflows.
- Why it matters: Helps teams track emerging context-engineering practices.
- Best for: Builders staying current on context stack evolution.
- Best paired with: MCP ecosystem and coding tools.

## Repomix
- Link: https://github.com/yamadashy/repomix
- Category: Context Engineering
- What it is: Packs entire repositories into a single AI-friendly file (XML, Markdown, JSON, or plain text) with token counting and security checks.
- Why it matters: Solves the core context engineering problem — getting your full codebase into an LLM's context window efficiently. Supports MCP server mode for direct agent integration.
- Best for: Developers feeding codebases to Claude, ChatGPT, or any LLM for analysis, planning, or code review.
- Best paired with: Claude Code, Cursor, MCP ecosystem.

## Firecrawl
- Link: https://github.com/mendableai/firecrawl
- Category: Context Engineering
- What it is: Web data API that turns websites into LLM-ready markdown or structured data. Handles JS-heavy pages, covers 96% of the web with sub-second response times. Has MCP server and agent endpoint.
- Why it matters: Essential for agents that need real-time web context without managing headless browsers. The `/agent` endpoint can autonomously navigate complex sites.
- Best for: Teams building agents or RAG pipelines that need clean web data as context.
- Best paired with: MCP ecosystem, RAG frameworks, agent frameworks.

## Honorable mentions

## MCP
- Link: https://github.com/modelcontextprotocol/modelcontextprotocol
- Category: Context Engineering
- What it is: Protocol standard for context/tool access.
- Why it matters: Underpins structured context delivery at runtime.
- Best for: Teams standardizing context interfaces.
- Best paired with: MCP servers, coding agents.

## Related categories
- [MCP](../mcp/README.md)
- [RAG Indexing](../rag-indexing/README.md)
- [AI Coding Tools](../ai-coding-tools/README.md)

## How to choose

- Use `React Grab` for UI-heavy codebases.
- Use structured ingestion (`Jina Reader`) before retrieval indexing.
- Standardize access with MCP when multiple tools/systems are involved.
