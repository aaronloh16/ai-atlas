# AI Atlas ↔ AI Stack Radar

How these two repos relate and how to use Atlas as context for Stack Radar.

## What each repo does

| | AI Atlas | AI Stack Radar |
|---|---|---|
| **Purpose** | Curated directory of AI tools with qualitative context | Live momentum leaderboard + architecture generator |
| **Data type** | Editorial (descriptions, use cases, relationships) | Quantitative (stars, downloads, HN mentions, momentum scores) |
| **Update model** | Manual curation via PRs | Automated daily collection via GitHub Actions |
| **Tool count** | ~169 tools across 13 categories | ~60 tools across 19 categories |
| **Audience** | Anyone exploring the AI dev ecosystem | Developers evaluating tools by real adoption signals |

## Category mapping

Atlas categories → Stack Radar categories:

| Atlas category | Stack Radar category | Notes |
|---|---|---|
| `ai-coding-tools` | `dev-tools` | Atlas includes vibe coders (Bolt.new, Lovable, v0, Replit) that Stack Radar puts in `platform` |
| `agent-frameworks` | `agents` + `llm-framework` | Atlas separates orchestration frameworks; Stack Radar splits by agents vs LLM frameworks |
| `autonomous-agents` | `agents` + `dev-tools` | Atlas has Devin, OpenHands, Cline separately; Stack Radar mixes them into agents/dev-tools |
| `ai-app-frameworks` | `platform` + `ui` | Atlas groups Gradio/Streamlit/Chainlit with Dify/Flowise; Stack Radar splits platform vs UI |
| `mcp` | `protocols` | Atlas has 17 MCP tools; Stack Radar has 1 entry |
| `context-engineering` | `data-processing` | Repomix, Firecrawl, Jina overlap with Stack Radar's data-processing |
| `browser-agents` | `agents` | Stagehand, browser-use overlap |
| `rag-indexing` | `rag` + `llm-framework` | Atlas groups indexing tools; Stack Radar splits across rag and llm-framework |
| `memory` | `memory` | Direct match (Mem0 in both) |
| `vector-databases` | `vector-db` | Direct match, similar tools |
| `inference-runtimes` | `inference` | Direct match, similar tools |
| `voice-ai` | *(missing)* | Atlas has 11 voice tools; Stack Radar has none |
| `observability-evals` | `observability` + `evaluation` + `gateway` | Atlas combines; Stack Radar splits into 3 categories |

## Tools in Atlas but NOT in Stack Radar (~109 tools)

These are candidates for adding to Stack Radar's `tools.json` and/or `essentials.ts`:

### High-priority additions (high adoption, fills gaps)
- **Voice AI** (entirely missing): Pipecat, LiveKit Agents, ElevenLabs, Vapi, Cartesia
- **MCP ecosystem**: Playwright MCP, Context7, Stripe Agent Toolkit, Cloudflare MCP, Supabase MCP
- **Autonomous agents**: Devin, Trae Agent, SWE-agent, Sweep
- **Context engineering**: Repomix, React Grab, Jina Reader
- **Browser agents**: Stagehand, Browserbase

### Medium-priority additions (useful context for architecture generator)
- Agent frameworks: Anthropic Agent SDK, Google ADK, Mastra (already in both), PydanticAI (already in both)
- App frameworks: Chainlit, Gradio, Streamlit, Langflow
- RAG: Unstructured (already in both), LangChain text-splitters
- Memory: Letta, Zep, Supermemory

## Tools in Stack Radar but NOT in Atlas (~15 tools)

These could be added back to Atlas:
- Lobe Chat, Jan, Anything LLM (Chat UIs)
- MLflow, Weights & Biases, Ray (MLOps)
- FastAPI (Backend)
- Hugging Face Transformers (Model Libraries)
- Embedchain, RAGFlow (RAG)
- Composio (Agents)

## How Atlas stacks feed the architecture generator

Atlas has 6 opinionated starter stacks that directly complement Stack Radar's architecture generator:

1. **AI Coding Stack** — 3 tiers (beginner → solo → team) with swap options
2. **Build an Agent** — LangGraph/CrewAI + LiteLLM + MCP + Qdrant + Langfuse
3. **RAG Stack** — LlamaIndex/Haystack + Qdrant + LiteLLM + Promptfoo + Langfuse
4. **Local AI Stack** — Ollama + llama.cpp + Open WebUI + Qdrant + Continue
5. **Voice AI Stack** — Pipecat/LiveKit + model provider + transport + Langfuse
6. **Eval Stack** — Promptfoo + OpenAI Evals + Langfuse + Guardrails

These could be used as reference architectures in the Claude prompt for `/api/generate`.

## How to use Atlas data in Stack Radar

1. **Expand tools.json**: Use `data/tools.json` to identify tools missing from Stack Radar
2. **Enrich essentials.ts**: Use Atlas's "Why it matters" and "Best for" to write better descriptions
3. **Improve architecture generator**: Feed Atlas stacks as reference patterns into the Claude prompt
4. **Add categories**: Voice AI is the biggest gap — consider adding it to Stack Radar
5. **Cross-link**: Atlas reports reference public API data that Stack Radar already collects
