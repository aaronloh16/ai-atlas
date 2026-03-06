# Memory

Persistent and structured memory systems for long-running agents and personalized AI workflows.

## Top tools

## MemGPT
- Link: https://github.com/deductive-ai/MemGPT
- Category: Memory
- What it is: Memory management architecture for extending effective context in LLM agents.
- Why it matters: Introduces practical memory tiering patterns for long-horizon agent behavior.
- Best for: Builders working on persistent, personalized assistants.
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

## Honorable mentions

## Related categories
- [RAG Indexing](../rag-indexing/README.md)
- [Vector Databases](../vector-databases/README.md)
- [Agent Frameworks](../agent-frameworks/README.md)

## How to choose

- Choose simple memory stores first, then layer graph memory only when needed.
- Pair memory with evals to prevent stale or low-quality recall behavior.
