# AI Atlas

A curated map of the tools, frameworks, protocols, and workflows that matter for building with AI — **115+ tools across 18 categories**.

For developers, builders, and curious semi-technical people who want one place to stay caught up with AI without drowning in hype, spam, and scattered bookmarks.

## Why this exists

Most "AI directories" become noisy link dumps. AI Atlas is intentionally different:

- **Curated for signal, not volume** — every entry earns its place
- **Canonical links** over copied summaries
- **Ecosystem structure** over alphabetical sprawl
- **Tool relationships and stack fit** over hype
- **Freshness** over completeness theater

## Quick start

| Goal | Where to go |
|---|---|
| **New to AI?** | [Learning Paths](./learning-paths/README.md) — 28 concrete challenges from beginner to advanced |
| **Building something specific?** | [Stacks](./stacks/README.md) — 6 opinionated starter recipes for common goals |
| **Exploring the landscape?** | Browse the Atlas Map below |

## Atlas Map

### Build with AI
| Category | What's inside | Key tools |
|---|---|---|
| [AI Coding Tools](./ai-coding-tools/README.md) | IDE assistants, CLI agents, vibe coding platforms | Claude Code, Copilot, Cursor, Bolt.new, Lovable, v0, Replit Agent |
| [Agent Frameworks](./agent-frameworks/README.md) | Orchestration for multi-step agent workflows | LangChain, OpenAI Agents SDK, Google ADK, Anthropic Agent SDK, CrewAI, Mastra, PydanticAI |
| [Autonomous Agents](./autonomous-agents/README.md) | End-to-end autonomous software development | Devin, OpenHands, Cline, Trae Agent |
| [AI App Frameworks](./ai-app-frameworks/README.md) | UI/app layers for shipping AI features | Vercel AI SDK, Chainlit, Dify, Flowise, Gradio, Streamlit |

### Connect and extend
| Category | What's inside | Key tools |
|---|---|---|
| [MCP](./mcp/README.md) | Model Context Protocol ecosystem | MCP spec, official servers, GitHub MCP, directories |
| [Context Engineering](./context-engineering/README.md) | Improve context quality for agents | Repomix, React Grab, Jina Reader |
| [Browser Agents](./browser-agents/README.md) | Web automation and computer-use | Stagehand, browser-use, Playwright MCP |

### Data and memory
| Category | What's inside | Key tools |
|---|---|---|
| [RAG Indexing](./rag-indexing/README.md) | Document processing and retrieval | LlamaIndex, LangChain, Haystack, Unstructured |
| [Memory](./memory/README.md) | Persistent memory for long-running agents | Mem0, MemGPT/Letta, Zep, Supermemory |
| [Vector Databases](./vector-databases/README.md) | Embedding storage and semantic search | Qdrant, Pinecone, Weaviate, Chroma, pgvector, Milvus |

### Run and serve
| Category | What's inside | Key tools |
|---|---|---|
| [Inference Runtimes](./inference-runtimes/README.md) | Local and self-hosted model execution | Ollama, llama.cpp, vLLM, SGLang, Open WebUI |
| [Voice AI](./voice-ai/README.md) | Realtime voice and multimodal AI | Pipecat, LiveKit, ElevenLabs, Vapi |

### Observe and evaluate
| Category | What's inside | Key tools |
|---|---|---|
| [Observability & Evals](./observability-evals/README.md) | Tracing, evals, guardrails, routing | Langfuse, Promptfoo, Braintrust, Helicone, LiteLLM, Guardrails |

### Learn and discover
| Category | What's inside |
|---|---|
| [Learning Paths](./learning-paths/README.md) | 28 concrete challenges for getting started with AI |
| [Stacks](./stacks/README.md) | 6 opinionated starter recipes for common goals |
| [Explainers](./explainers/README.md) | Key ecosystem concepts and references |
| [Communities](./communities/README.md) | High-signal communities and discovery channels |
| [External Lists](./external-lists/README.md) | Canonical curated lists we link to instead of duplicating |

### Reference
- [Research Method](./research-method.md) — how entries are ranked and verified
- [March 2026 Sentiment Report](./reports/mar-2026-tool-sentiment.md) — latest usage data snapshot

## Scope

**Included:** AI coding tools, agent frameworks, autonomous agents, MCP, context engineering, RAG, memory, vector databases, inference runtimes, AI app frameworks, voice AI, browser agents, observability/evals, learning paths, stacks, explainers, communities, and curated external references.

**Out of scope:** Generic AI startup directories, dataset hubs, model leaderboards, consumer AI app lists.

## Entry format

Each entry should answer:
- What it is
- Why it matters
- Who it is for
- What it pairs with
- Canonical link
- Evidence window
- Evidence sources
- Confidence
- Caveats or failure modes
- Last verified date

Template:

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

## Contributing

Please read [CONTRIBUTING.md](./CONTRIBUTING.md) before opening a PR. High-signal edits are preferred over bulk additions.

## License

[MIT](./LICENSE)
