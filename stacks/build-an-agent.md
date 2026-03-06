# Build an Agent

A baseline stack for tool-using task agents that can retrieve context and execute multi-step workflows.

## Core stack
- LangGraph ecosystem or CrewAI or AutoGen
- LiteLLM
- MCP
- Qdrant
- Langfuse

## Suggested architecture
- Agent runtime: CrewAI / AutoGen / LangGraph-style orchestration
- Model/provider layer: LiteLLM
- Tool integration: MCP servers
- Memory/retrieval: Qdrant
- Observability: Langfuse traces and eval loops

## Who this is for
- Builders shipping real task automation beyond basic chat.

## Swap options
- Replace Qdrant with Weaviate/Milvus for scale or filtering needs.
- Add Promptfoo for CI regression tests.
