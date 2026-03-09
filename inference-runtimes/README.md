# Inference Runtimes

Local and self-hosted model runtimes for development, privacy, and cost control.

## Top tools

## Ollama
- Link: https://github.com/ollama/ollama
- Category: Inference Runtimes
- What it is: Local model runtime and packaging system for running LLMs on-device.
- Why it matters: Makes local inference accessible for everyday development workflows.
- Best for: Builders needing fast local experimentation.
- Best paired with: Continue, Open WebUI, Qdrant.

## llama.cpp
- Link: https://github.com/ggml-org/llama.cpp
- Category: Inference Runtimes
- What it is: High-performance C/C++ inference stack for local model execution.
- Why it matters: Foundational runtime for efficient on-device inference.
- Best for: Performance-sensitive local deployments.
- Best paired with: Ollama, custom edge apps.

## vLLM
- Link: https://github.com/vllm-project/vllm
- Category: Inference Runtimes
- What it is: Fast, memory-efficient inference and serving engine.
- Why it matters: Strong throughput and serving ergonomics for production.
- Best for: Teams hosting models at scale.
- Best paired with: LiteLLM, observability stack.

## LocalAI
- Link: https://github.com/mudler/LocalAI
- Category: Inference Runtimes
- What it is: Self-hosted OpenAI-compatible local inference platform.
- Why it matters: Simplifies migration from hosted APIs to local stack.
- Best for: Teams wanting API compatibility with self-hosted models.
- Best paired with: Open WebUI, Continue, LiteLLM.

## SGLang
- Link: https://github.com/sgl-project/sglang
- Category: Inference Runtimes
- What it is: High-performance LLM serving framework developed by LMSYS — runs on 400K+ GPUs generating trillions of tokens daily.
- Why it matters: Matches or beats vLLM on throughput (~16,200 tok/s on H100 vs vLLM's ~12,500). Used by xAI (Grok 3) and Microsoft Azure. RadixAttention innovation enables efficient prefix sharing.
- Best for: Production teams serving models at scale, especially multi-turn workloads.
- Best paired with: LiteLLM, observability stack, custom serving infrastructure.

## TensorRT-LLM
- Link: https://github.com/NVIDIA/TensorRT-LLM
- Category: Inference Runtimes
- What it is: NVIDIA's open-source high-performance LLM inference library with FP8/FP4 quantization, speculative decoding, and disaggregated serving.
- Why it matters: The gold standard for NVIDIA GPU optimization. New AutoDeploy feature (Feb 2026) compiles PyTorch models into optimized graphs automatically. Supports B200 and RTX 50 series.
- Best for: Teams deploying on NVIDIA GPUs who need maximum inference performance.
- Best paired with: vLLM, SGLang, LiteLLM, observability stack.

## Honorable mentions

## Llamafile
- Link: https://github.com/mozilla-ai/llamafile
- Category: Inference Runtimes
- What it is: Single-file LLM executable that runs on 6 OSes with zero installation — uses Cosmopolitan Libc + llama.cpp.
- Why it matters: Most radical approach to AI accessibility. Mozilla-backed. 10x prompt eval speedup from custom matrix multiplication kernels. No dependencies, no setup.
- Best for: Demos, air-gapped environments, and anyone who wants the simplest possible local LLM experience.
- Best paired with: Standalone use, edge deployments.

## Open WebUI
- Link: https://github.com/open-webui/open-webui
- Category: Inference Runtimes
- What it is: Open-source UI for interacting with local and remote models.
- Why it matters: Easy interface for local model experimentation and team demos.
- Best for: Teams that need a quick local AI frontend.
- Best paired with: Ollama, LocalAI.

## LM Studio JS SDK
- Link: https://github.com/lmstudio-ai/lmstudio-js
- Category: Inference Runtimes
- What it is: SDK for integrating LM Studio model workflows programmatically.
- Why it matters: Bridges desktop local model workflows and developer applications.
- Best for: Builders using LM Studio in app prototypes.
- Best paired with: Local RAG stacks.

## Related categories
- [AI Coding Tools](../ai-coding-tools/README.md)
- [AI App Frameworks](../ai-app-frameworks/README.md)
- [Vector Databases](../vector-databases/README.md)

## How to choose

- Choose `Ollama` for easiest local developer experience.
- Choose `llama.cpp` for low-level performance control.
- Choose `vLLM` for production serving with the most mature ecosystem.
- Choose `SGLang` when peak throughput and multi-turn performance matter most.
- Choose `TensorRT-LLM` for maximum NVIDIA GPU optimization.
- Choose `Llamafile` when you need zero-install, single-file simplicity.
