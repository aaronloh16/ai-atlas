# Eval Stack

A reliability stack to test, monitor, and harden AI behavior before and after deployment.

## Core stack
- Promptfoo
- OpenAI Evals
- Langfuse
- Guardrails

## Suggested architecture
- CI evaluation: Promptfoo
- Benchmark/behavior evals: OpenAI Evals
- Runtime tracing/feedback: Langfuse
- Output validation/policy: Guardrails

## Who this is for
- Teams moving from prototype to production reliability.

## Swap options
- Add DeepEval for expanded test methodologies.
- Add LiteLLM/Portkey when provider routing and governance are required.
