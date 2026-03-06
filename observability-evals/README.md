# Observability Evals

Tooling for tracing, quality evaluation, safety checks, routing, and reliability of AI systems.

## Top tools

## Langfuse
- Link: https://github.com/langfuse/langfuse
- Category: Observability Evals
- What it is: Open-source LLM engineering platform for tracing, metrics, prompts, and evals.
- Why it matters: Gives teams operational visibility into model behavior and quality drift.
- Best for: Teams running AI features in production.
- Best paired with: LangChain/LlamaIndex, LiteLLM, Promptfoo.

## Promptfoo
- Link: https://github.com/promptfoo/promptfoo
- Category: Observability Evals
- What it is: Prompt and model testing framework.
- Why it matters: Enables repeatable evaluation in CI before prompt/model changes ship.
- Best for: Teams that treat prompts like testable software assets.
- Best paired with: OpenAI Evals, Langfuse.

## OpenAI Evals
- Link: https://github.com/openai/evals
- Category: Observability Evals
- What it is: Framework for evaluating language model behavior on tasks/benchmarks.
- Why it matters: Establishes rigorous evaluation baselines and regression checks.
- Best for: Teams needing structured model quality measurements.
- Best paired with: Promptfoo, DeepEval.

## Guardrails
- Link: https://github.com/guardrails-ai/guardrails
- Category: Observability Evals
- What it is: Validation and safety framework for LLM outputs.
- Why it matters: Adds reliability and policy constraints for production AI behavior.
- Best for: Teams operating in high-trust or regulated contexts.
- Best paired with: Langfuse, eval pipelines.

## LiteLLM
- Link: https://github.com/BerriAI/litellm
- Category: Observability Evals
- What it is: Unified interface/proxy for multiple model providers.
- Why it matters: Simplifies routing, fallback, and provider abstraction.
- Best for: Teams avoiding provider lock-in.
- Best paired with: Portkey Gateway, Langfuse.

## Honorable mentions

## Portkey Gateway
- Link: https://github.com/Portkey-AI/gateway
- Category: Observability Evals
- What it is: AI gateway for routing, governance, and reliability.
- Why it matters: Adds central control plane for multi-model production stacks.
- Best for: Teams managing scale and policy.
- Best paired with: LiteLLM, Langfuse.

## Phoenix
- Link: https://github.com/Arize-ai/phoenix
- Category: Observability Evals
- What it is: Open-source AI observability and evaluation tooling.
- Why it matters: Helps diagnose retrieval/prompt/model quality issues.
- Best for: Teams troubleshooting complex LLM pipelines.
- Best paired with: RAG frameworks, OpenLLMetry.

## OpenLLMetry
- Link: https://github.com/traceloop/openllmetry
- Category: Observability Evals
- What it is: OpenTelemetry-based instrumentation for LLM apps.
- Why it matters: Standardized tracing for model and agent interactions.
- Best for: Teams integrating AI telemetry into existing observability stacks.
- Best paired with: Langfuse, Phoenix.

## DeepEval
- Link: https://github.com/confident-ai/deepeval
- Category: Observability Evals
- What it is: Evaluation framework for LLM systems.
- Why it matters: Expands test coverage beyond simple prompt checks.
- Best for: Teams building robust eval suites.
- Best paired with: Promptfoo, OpenAI Evals.

## Related categories
- [Agent Frameworks](../agent-frameworks/README.md)
- [RAG Indexing](../rag-indexing/README.md)
- [Autonomous Agents](../autonomous-agents/README.md)

## How to choose

- Start with tracing (`Langfuse`) and CI evals (`Promptfoo`) first.
- Add provider routing (`LiteLLM`) when you need redundancy/cost control.
- Add guardrails for reliability-critical user flows.
