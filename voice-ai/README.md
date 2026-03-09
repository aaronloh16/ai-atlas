# Voice AI

Realtime and voice-first frameworks for conversational AI products.

## Top tools

## Pipecat
- Link: https://github.com/pipecat-ai/pipecat
- Category: Voice AI
- What it is: Open-source framework for voice and multimodal conversational AI.
- Why it matters: Strong foundation for realtime, interactive voice agents.
- Best for: Teams building voice-first assistant experiences.
- Best paired with: Realtime transport, observability layer, model provider.

## LiveKit Agents
- Link: https://github.com/livekit/agents
- Category: Voice AI
- What it is: Agent framework integrated with realtime communications infrastructure.
- Why it matters: Production-ready path for low-latency voice interactions.
- Best for: Teams shipping realtime multimodal products.
- Best paired with: LiveKit stack, eval/telemetry tools.

## ElevenLabs
- Link: https://elevenlabs.io
- Category: Voice AI
- What it is: Leading voice AI platform with 5,000+ voices in 70+ languages, plus voice agents (ElevenAgents) with vertically integrated TTS and STT.
- Why it matters: Industry-leading voice quality with both API access and a complete agent platform. Foundational audio model research feeds directly into product.
- Best for: Teams needing highest-quality voice synthesis or building voice-first products.
- Best paired with: Pipecat, Vapi (as TTS provider), agent frameworks.

## Vapi
- Link: https://vapi.ai
- Category: Voice AI
- What it is: Voice AI agent orchestration platform — modular STT/LLM/TTS pipeline with provider-swappable components (ElevenLabs, Deepgram, OpenAI, etc.).
- Why it matters: Handles latency optimization, scaling, streaming, and conversation flow so you can focus on agent logic. Fixed pricing at $0.05/min.
- Best for: Teams building production voice agents who want provider flexibility without building infrastructure.
- Best paired with: ElevenLabs (TTS), Deepgram (STT), any LLM provider.

## Honorable mentions

## Pipecat Flows
- Link: https://github.com/pipecat-ai/pipecat-flows
- Category: Voice AI
- What it is: Flow abstractions and patterns for Pipecat applications.
- Why it matters: Speeds repeatable voice workflow composition.
- Best for: Builders standardizing voice agent flows.
- Best paired with: Pipecat core.

## Pipecat Voice UI Kit
- Link: https://github.com/pipecat-ai/voice-ui-kit
- Category: Voice AI
- What it is: UI kit for voice interaction frontends.
- Why it matters: Reduces UI friction for voice product prototypes.
- Best for: Product teams validating voice UX quickly.
- Best paired with: Pipecat backend.

## Related categories
- [AI App Frameworks](../ai-app-frameworks/README.md)
- [Observability Evals](../observability-evals/README.md)
- [Browser Agents](../browser-agents/README.md)

## How to choose

- Choose `Pipecat` for open composable voice pipelines you fully control.
- Choose `LiveKit Agents` when realtime infra maturity is a core requirement.
- Choose `ElevenLabs` when voice quality is the top priority or you want a vertically integrated platform.
- Choose `Vapi` when you want managed orchestration with provider flexibility and fast time-to-market.
- Treat latency, interruption handling, and observability as first-class constraints.
