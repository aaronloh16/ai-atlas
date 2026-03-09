# Memory

Persistent and structured memory systems for long-running agents and personalized AI workflows.

## Top tools

## Letta (formerly MemGPT)
- Link: https://github.com/letta-ai/letta
- Category: Memory
- What it is: Stateful agent platform with persistent memory that survives across sessions and models. Evolved from MemGPT into a full platform with Context Repositories (git-based memory versioning), Conversations API, and Letta Code.
- Why it matters: Pioneered practical memory tiering for LLM agents. Now a complete platform where agents persist and operate autonomously with memory that survives model changes.
- Best for: Builders working on persistent, personalized assistants that need memory beyond a single conversation.
- Best paired with: Agent frameworks, vector databases, eval tooling.

## Supermemory
- Link: https://github.com/supermemoryai/supermemory
- Category: Memory
- What it is: Open-source memory layer for AI applications and agents.
- Why it matters: Helps centralize user/context memory across workflows.
- Best for: Product teams adding user memory features.
- Best paired with: LiteLLM, Langfuse, RAG frameworks.

## Zep
- Link: https://github.com/getzep/zep
- Category: Memory
- What it is: Memory and conversation intelligence platform for LLM apps.
- Why it matters: Provides structured long-term conversation memory and retrieval.
- Best for: Teams shipping conversational products with personalization.
- Best paired with: LangChain/LlamaIndex, vector DBs.

## GraphZep
- Link: https://github.com/aexy-io/graphzep
- Category: Memory
- What it is: Graph-oriented memory system inspired by Zep workflows.
- Why it matters: Useful when relationship-aware memory structures matter.
- Best for: Builders modeling entity/relationship memory.
- Best paired with: Agent frameworks, observability.

## Mem0
- Link: https://github.com/mem0ai/mem0
- Category: Memory
- What it is: Universal memory layer for AI agents — dynamically extracts, consolidates, and retrieves salient information across sessions.
- Why it matters: 26% improvement over OpenAI baselines on long-term memory benchmarks. Supports MCP server mode for integration with Claude Desktop, Cursor, and custom agents.
- Best for: Teams building personalized AI products that need to remember user context across conversations.
- Best paired with: Agent frameworks, MCP ecosystem, vector databases.

## Honorable mentions

## Related categories
- [RAG Indexing](../rag-indexing/README.md)
- [Vector Databases](../vector-databases/README.md)
- [Agent Frameworks](../agent-frameworks/README.md)

## How to choose

- Choose simple memory stores first, then layer graph memory only when needed.
- Pair memory with evals to prevent stale or low-quality recall behavior.
