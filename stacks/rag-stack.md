# RAG Stack

A reference stack for grounding responses in your data with measurable quality.

## Core stack
- LlamaIndex or Haystack
- Qdrant
- LiteLLM
- Promptfoo
- Langfuse

## Suggested architecture
- Indexing/retrieval framework: LlamaIndex / Haystack
- Vector database: Qdrant
- Model routing: LiteLLM
- Evaluation: Promptfoo test suites
- Observability: Langfuse traces and quality tracking

## Who this is for
- Teams building support bots, internal copilots, and knowledge assistants.

## Swap options
- Use LangChain if broader orchestration is needed.
- Add Guardrails for stricter output policies.
