# Voice AI Stack

A realtime conversational stack for voice-first AI products.

## Core stack
- Pipecat or LiveKit Agents
- Model provider
- Realtime transport
- Observability layer

## Suggested architecture
- Voice orchestration: Pipecat / LiveKit Agents
- Speech + model provider: provider of choice
- Transport/session layer: realtime media stack
- Monitoring/evals: Langfuse + scenario testing

## Who this is for
- Teams building call assistants, voice copilots, or multimodal real-time products.

## Swap options
- Use Pipecat for open composable pipelines.
- Use LiveKit Agents when infra and transport maturity are top priorities.
