# Learning Paths

Practical starting points for students and builders who keep asking "where do I start with AI?"

These are not tutorials. They are concrete challenges — each one produces a visible artifact, teaches a transferable skill, and connects to tools already mapped in the Atlas.

## How to use this list

Pick any challenge that matches your current skill level. Do the thing. Ship it. Move to the next one.

## Build & Ship

### Clone Karpathy's autoresearch repo and run it
- Link: https://github.com/karpathy/autoresearch
- What it is: An autonomous research agent that reads papers, writes code, and runs experiments.
- Why it matters: Hands-on exposure to how autonomous agents decompose research tasks.
- Best for: Students who learn by reading real agent code from a world-class researcher.
- Best paired with: [Autonomous Agents](../autonomous-agents/README.md), [Inference Runtimes](../inference-runtimes/README.md).

### Replicate a $10K website with Claude
- What it is: Use Claude to vibe-code a production-quality marketing or SaaS site from a screenshot or description.
- Why it matters: Forces you to learn prompt iteration, component architecture, and deployment in one project.
- Best for: Builders who want to see AI-assisted development end-to-end.
- Best paired with: [AI Coding Tools](../ai-coding-tools/README.md), [AI App Frameworks](../ai-app-frameworks/README.md).

### Build a personal OS with Obsidian + Claude
- What it is: Wire Claude into your Obsidian vault as a thinking partner for notes, tasks, and knowledge management.
- Why it matters: Teaches context engineering — how to feed an LLM the right information at the right time.
- Best paired with: [Context Engineering](../context-engineering/README.md), [Memory](../memory/README.md).

### Build a RAG pipeline from scratch
- What it is: Ingest documents, chunk them, embed them, store in a vector DB, and query with an LLM.
- Why it matters: RAG is the most common production AI pattern. Building it from scratch demystifies every layer.
- Best for: Developers moving from API calls to real AI applications.
- Best paired with: [RAG Indexing](../rag-indexing/README.md), [Vector Databases](../vector-databases/README.md), [RAG Stack](../stacks/rag-stack.md).

### Build an AI brain with NotebookLM, Notion + AI
- What it is: Combine Google NotebookLM for research synthesis and Notion AI for structured knowledge capture.
- Why it matters: Teaches you to use AI as a research partner, not just a chatbot.
- Best for: Students and researchers organizing large amounts of information.
- Best paired with: [Memory](../memory/README.md), [Context Engineering](../context-engineering/README.md).

### Build an AI agent with Chatbase
- Link: https://www.chatbase.co
- What it is: No-code platform for building and deploying custom AI agents and chatbots.
- Why it matters: Fastest path from zero to a deployed, testable AI agent without writing code.
- Best for: Non-technical builders or anyone prototyping agent ideas quickly.
- Best paired with: [Agent Frameworks](../agent-frameworks/README.md).

### Vibe code and deploy a full project
- What it is: Pick a real idea, build it entirely with AI coding tools, and deploy it live.
- Why it matters: The gap between "I used AI" and "I shipped something" is where real learning happens.
- Best for: Anyone stuck in tutorial mode who needs to break through to building.
- Best paired with: [AI Coding Tools](../ai-coding-tools/README.md), [Stacks](../stacks/README.md).

### Create a 3D world with Google Project Genie
- What it is: Google's interactive 3D world generation from text and image prompts.
- Why it matters: Exposure to generative media beyond text and code — where AI is heading next.
- Best for: Creative builders exploring multimodal AI capabilities.

### Automate a real business workflow with AI
- What it is: Find a repetitive manual process (invoice handling, lead routing, content scheduling) and automate it end-to-end.
- Why it matters: Automation skills are the fastest path to AI ROI in any organization.
- Best for: Operators and entrepreneurs turning AI into business value.
- Best paired with: [Agent Frameworks](../agent-frameworks/README.md), n8n, Zapier.

## Learn the Tools

### Learn Claude Code
- Link: https://docs.anthropic.com/en/docs/claude-code
- What it is: Anthropic's terminal-first AI coding agent.
- Why it matters: Currently the highest-adoption CLI coding agent (34.8M npm downloads/month).
- Best for: Developers who prefer terminal workflows over IDE extensions.
- Best paired with: [AI Coding Tools](../ai-coding-tools/README.md).

### Learn Cursor
- Link: https://www.cursor.com
- What it is: AI-first code editor built on VS Code with deep model integration.
- Why it matters: Leading AI-native IDE with frequent updates and strong community.
- Best for: Developers who want AI embedded directly in their editor.
- Best paired with: [AI Coding Tools](../ai-coding-tools/README.md).

### Set up OpenClaw
- Link: https://github.com/openclaw
- What it is: Personal AI agent platform for automation and assistance.
- Why it matters: Hands-on experience with a self-hosted agent platform you fully control.
- Best paired with: [Autonomous Agents](../autonomous-agents/README.md), [Agent Frameworks](../agent-frameworks/README.md).

### Set up Claude Cowork (plug-ins, skills)
- What it is: Configure Claude's extended capabilities through custom plug-ins, skills, and tool integrations.
- Why it matters: Teaches you how modern AI assistants are extended beyond base model capabilities.
- Best paired with: [MCP](../mcp/README.md), [AI Coding Tools](../ai-coding-tools/README.md).

### Set up Perplexity Computer
- What it is: Perplexity's computer-use agent for desktop automation and research tasks.
- Why it matters: Hands-on experience with computer-use AI — the next frontier of browser/desktop agents.
- Best paired with: [Browser Agents](../browser-agents/README.md).

### Run an open source model locally
- What it is: Download and run a model (Llama, Qwen, Mistral) on your own hardware using Ollama or llama.cpp.
- Why it matters: Local inference teaches you what models actually are — weights, quantization, context windows, VRAM.
- Best for: Anyone who wants to understand AI beyond API calls.
- Best paired with: [Inference Runtimes](../inference-runtimes/README.md), [Local AI Stack](../stacks/local-ai-stack.md).

### Experiment with Qwen 3.5, GLM-4.7, Llama 3.2
- What it is: Run and compare recent open-weight models from Alibaba, Zhipu, and Meta.
- Why it matters: Model diversity matters. Different models have different strengths, and comparing them builds judgment.
- Best for: Developers evaluating which models fit their use case.
- Best paired with: [Inference Runtimes](../inference-runtimes/README.md).

### Use Gemini, Nano Banana, and Veo for multimodal AI
- What it is: Explore Google's latest multimodal models for text, image, and video generation.
- Why it matters: Multimodal is where AI is expanding fastest — text-only is no longer the whole picture.
- Best for: Builders exploring image, video, and cross-modal AI capabilities.

### Learn n8n and Zapier for no-code automation
- Link (n8n): https://n8n.io
- Link (Zapier): https://zapier.com
- What it is: Visual workflow automation platforms that connect AI models to business tools without code.
- Why it matters: Most real-world AI value comes from connecting models to existing systems, not building from scratch.
- Best for: Non-developers and operators who want to ship AI workflows fast.

### Learn Vercel's AI SDK
- Link: https://sdk.vercel.ai
- What it is: TypeScript toolkit for building AI-powered web applications.
- Why it matters: The leading framework for streaming AI responses into React/Next.js frontends.
- Best for: Frontend and full-stack developers building AI-powered UIs.
- Best paired with: [AI App Frameworks](../ai-app-frameworks/README.md).

### Play with Figma and Remotion MCPs
- What it is: MCP servers that connect AI agents to Figma (design) and Remotion (video rendering).
- Why it matters: Shows how MCP extends AI into creative tools — design and video are just the beginning.
- Best paired with: [MCP](../mcp/README.md).

## Understand the Concepts

### Chatbots are not AI agents — understand why
- What it is: Learn the architectural difference between a stateless chatbot and a goal-directed agent with tool access, memory, and planning.
- Why it matters: This distinction is the single most important mental model for building with AI today.
- Best for: Anyone conflating "ChatGPT wrapper" with "AI agent."
- Best paired with: [Agent Frameworks](../agent-frameworks/README.md), [Autonomous Agents](../autonomous-agents/README.md).

### Learn function calling, tool use, and APIs
- What it is: Understand how LLMs invoke external functions, use tools, and interact with APIs programmatically.
- Why it matters: Tool use is what turns a language model into an agent. This is foundational.
- Best for: Developers moving from prompt engineering to building real AI systems.
- Best paired with: [MCP](../mcp/README.md), [Agent Frameworks](../agent-frameworks/README.md).

### Learn what MCP is and build an MCP server
- What it is: Understand the Model Context Protocol standard and build a working server that exposes tools to AI agents.
- Why it matters: MCP is becoming the standard interface between AI models and external systems.
- Best for: Developers who want to make their tools and data accessible to any AI agent.
- Best paired with: [MCP](../mcp/README.md).

### Learn proper UI component terminology
- What it is: Study the naming conventions and patterns used in modern component libraries (Radix, shadcn/ui, Headless UI).
- Why it matters: When you prompt AI to build UI, using correct component names (combobox, popover, sheet, drawer) gets dramatically better results.
- Best for: Frontend developers and vibe coders who want higher quality AI-generated UI.

### Become a better prompt engineer
- What it is: Study structured prompting techniques — system prompts, few-shot examples, chain-of-thought, role prompting.
- Why it matters: Prompt quality is the highest-leverage skill in AI development. Better prompts = better outputs everywhere.
- Best for: Everyone. This is not optional.
- Best paired with: [AI Coding Tools](../ai-coding-tools/README.md), [Context Engineering](../context-engineering/README.md).

## Read & Research

### Read Anthropic's guide on Skills for Claude
- Link: https://docs.anthropic.com/en/docs/claude-code/skills
- What it is: Official documentation on how to extend Claude with custom skills and capabilities.
- Why it matters: Understanding skills architecture shows how modern AI assistants are built to be extensible.
- Best paired with: [AI Coding Tools](../ai-coding-tools/README.md), [MCP](../mcp/README.md).

### Read Pragmatic Engineer's AI tooling survey
- Link: https://newsletter.pragmaticengineer.com
- What it is: Data-driven survey on how professional developers are actually using AI tools in production.
- Why it matters: Cuts through hype with real adoption data from working engineers.
- Best for: Anyone making tool decisions based on what actually works in practice.

### Research a PhD-level topic with Perplexity Max
- Link: https://www.perplexity.ai
- What it is: Use Perplexity's deep research mode to explore a complex academic topic end-to-end.
- Why it matters: Teaches you how AI research tools handle nuance, citations, and depth — and where they still fail.
- Best for: Researchers and students testing AI's boundaries on hard problems.

## Mindset

### Stop overthinking and start building
- What it is: The most important item on this list.
- Why it matters: Every hour spent comparing tools is an hour not spent building. Pick one path above and ship something this week.
- Best for: Everyone reading this list for the third time without starting.

## Related categories

- [AI Coding Tools](../ai-coding-tools/README.md)
- [Agent Frameworks](../agent-frameworks/README.md)
- [Stacks](../stacks/README.md)
- [Explainers](../explainers/README.md)
- [Inference Runtimes](../inference-runtimes/README.md)
- [MCP](../mcp/README.md)
