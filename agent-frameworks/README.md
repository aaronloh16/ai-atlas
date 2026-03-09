# Agent Frameworks

Frameworks for orchestrating tools, memory, planning, and multi-step agent workflows.

## Top tools

## LangChain
- Link: https://github.com/langchain-ai/langchain
- Category: Agent Frameworks
- What it is: General-purpose framework for LLM applications and tool-enabled chains/agents.
- Why it matters: Massive ecosystem and integrations make it a common orchestration baseline.
- Best for: Teams needing broad integrations and fast prototyping.
- Best paired with: Langfuse, Qdrant, LiteLLM, MCP.

## AutoGen
- Link: https://github.com/microsoft/autogen
- Category: Agent Frameworks
- What it is: Microsoft framework for multi-agent conversations and workflow orchestration. Being merged with Semantic Kernel into a unified Microsoft Agent Framework.
- Why it matters: Strong abstractions for role-based agents and collaborative execution. 45K+ GitHub stars.
- Best for: Builders designing multi-agent systems in the Microsoft ecosystem.
- Best paired with: Semantic Kernel, Promptfoo, Langfuse.

## CrewAI
- Link: https://github.com/crewAIInc/crewAI
- Category: Agent Frameworks
- What it is: Framework for role-based AI crews and sequential/collaborative task execution.
- Why it matters: Easy mental model for process-driven autonomous workflows.
- Best for: Teams that prefer explicit role-and-task orchestration.
- Best paired with: LiteLLM, Qdrant, Langfuse.

## Semantic Kernel
- Link: https://github.com/microsoft/semantic-kernel
- Category: Agent Frameworks
- What it is: SDK for building AI orchestration with plugins, memory, and planning.
- Why it matters: Enterprise-friendly architecture with strong Microsoft ecosystem alignment.
- Best for: Product teams shipping production agentic features.
- Best paired with: Azure/OpenAI providers, eval tooling, vector databases.

## LlamaIndex
- Link: https://github.com/run-llama/llama_index
- Category: Agent Frameworks
- What it is: Data framework for connecting LLM applications to external knowledge sources.
- Why it matters: Strong indexing/retrieval abstractions for agent memory and RAG.
- Best for: Data-rich agent and assistant apps.
- Best paired with: Qdrant, Langfuse, Promptfoo.

## OpenAI Agents SDK
- Link: https://github.com/openai/openai-agents-python
- Category: Agent Frameworks
- What it is: Lightweight production-ready SDK for building agentic apps — agents, handoffs, guardrails, and sessions with minimal abstractions.
- Why it matters: Successor to Swarm. Thin runtime over GPT models with built-in tool call loops and state management.
- Best for: Teams committed to OpenAI models who want a simple, opinionated agent runtime.
- Best paired with: OpenAI APIs, Langfuse, Promptfoo.

## Google Agent Development Kit (ADK)
- Link: https://google.github.io/adk-docs/
- Category: Agent Frameworks
- What it is: Google's open-source framework for building and orchestrating AI agents with multi-agent support and tracing.
- Why it matters: Native Gemini integration, built-in session management, and support for other model providers.
- Best for: Teams in the Google/GCP ecosystem or building multi-agent orchestration.
- Best paired with: Gemini models, A2A protocol, Langfuse.

## Mastra
- Link: https://github.com/mastra-ai/mastra
- Category: Agent Frameworks
- What it is: TypeScript-first agent framework (from the Gatsby team) with built-in RAG, workflows, memory, and orchestration.
- Why it matters: Leading TS agent framework. Production-proven at Marsh McLennan (75K employees) and SoftBank.
- Best for: TypeScript/Node.js teams building backend agent systems.
- Best paired with: Vercel AI SDK, MCP, Langfuse.

## Honorable mentions

## Haystack
- Link: https://github.com/deepset-ai/haystack
- Category: Agent Frameworks
- What it is: End-to-end framework for LLM apps, pipelines, and retrieval.
- Why it matters: Mature retrieval and production pipeline support.
- Best for: Teams building reliable RAG-heavy systems.
- Best paired with: Vector DBs, eval frameworks.

## DSPy
- Link: https://github.com/stanfordnlp/dspy
- Category: Agent Frameworks
- What it is: Framework for programming and optimizing LM pipelines.
- Why it matters: Brings optimization/compilation mindset to prompt and program behavior.
- Best for: Researchers and advanced builders tuning quality systematically.
- Best paired with: Promptfoo, OpenAI Evals.

## Anthropic Agent SDK
- Link: https://docs.anthropic.com/en/docs/agent-sdk
- Category: Agent Frameworks
- What it is: Anthropic's SDK for building agents with the same loop and tools that power Claude Code — file read/write, shell, web, code editing.
- Why it matters: First-party SDK from Anthropic. Gives agents a full computer environment. Apple Xcode 26.3 integration signals enterprise reach.
- Best for: Teams building on Claude who want the same agent capabilities as Claude Code, programmatically.
- Best paired with: Claude models, MCP, Langfuse.

## PydanticAI
- Link: https://github.com/pydantic/pydantic-ai
- Category: Agent Frameworks
- What it is: Type-safe agent framework from the Pydantic team — full type safety, structured outputs, durable execution, MCP/A2A integration.
- Why it matters: Brings the "FastAPI feeling" to agent development. Pydantic already underpins OpenAI SDK, Google ADK, LangChain, and others.
- Best for: Python teams that want type-safe, production-grade agent development.
- Best paired with: FastAPI, Promptfoo, Langfuse.

## smolagents
- Link: https://github.com/huggingface/smolagents
- Category: Agent Frameworks
- What it is: Hugging Face's minimalist library for building code-writing agents — core logic in ~1,000 lines. Agents write Python to invoke tools.
- Why it matters: Code agents reduce LLM calls by ~30% vs standard tool-calling. Model-agnostic, sandboxed execution, Hub integration for sharing.
- Best for: Builders who want a lightweight, code-first agent approach with HuggingFace ecosystem support.
- Best paired with: HuggingFace Hub, local models, Ollama.

## OpenClaw
- Link: https://github.com/openclaw/openclaw
- Category: Agent Frameworks
- What it is: Open-source personal AI agent platform with extensible architecture.
- Why it matters: Combines orchestration and personal-agent product direction.
- Best for: Builders exploring assistant-like product experiences.
- Best paired with: MCP, memory systems.

## Related categories
- [RAG Indexing](../rag-indexing/README.md)
- [Memory](../memory/README.md)
- [Observability Evals](../observability-evals/README.md)
- [MCP](../mcp/README.md)

## How to choose

- Start with `LangChain` for ecosystem breadth and Python flexibility.
- Use `OpenAI Agents SDK` for simple, opinionated agent loops on OpenAI models.
- Use `Google ADK` for Gemini-native multi-agent orchestration.
- Use `Anthropic Agent SDK` for Claude-powered agents with full computer environment.
- Use `Mastra` for TypeScript-first agent development.
- Use `PydanticAI` for type-safe Python agents with structured outputs.
- Use `CrewAI`/`AutoGen` for role-based multi-agent workflows.
- Use `smolagents` for lightweight code-writing agents with HuggingFace.
- Use `Semantic Kernel` for enterprise SDK patterns.
- Use `LlamaIndex`/`Haystack` when retrieval quality is central.
