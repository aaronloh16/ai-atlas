# RAG Indexing

Frameworks and tooling for retrieval-augmented generation, document indexing, and grounded responses.

## Top tools

## LlamaIndex
- Link: https://github.com/run-llama/llama_index
- Category: RAG Indexing
- What it is: Framework for indexing and querying external data with LLMs.
- Why it matters: Strong primitives for retrieval pipelines and knowledge connectors.
- Best for: Teams building data-grounded assistants.
- Best paired with: Qdrant, Langfuse, LiteLLM.

## LangChain
- Link: https://github.com/langchain-ai/langchain
- Category: RAG Indexing
- What it is: Orchestration framework with rich retrieval integrations.
- Why it matters: Flexible retrieval-chain composition with broad ecosystem support.
- Best for: Builders composing custom RAG workflows quickly.
- Best paired with: Vector DBs, Promptfoo, Langfuse.

## Haystack
- Link: https://github.com/deepset-ai/haystack
- Category: RAG Indexing
- What it is: Framework for retrieval pipelines and production search/QA systems.
- Why it matters: Mature abstractions for reliable retrieval applications.
- Best for: Teams prioritizing production-grade retrieval robustness.
- Best paired with: Milvus/Weaviate/Qdrant, eval frameworks.

## Unstructured
- Link: https://github.com/Unstructured-IO/unstructured
- Category: RAG Indexing
- What it is: Open-source ETL for transforming complex documents (PDFs, emails, scanned docs) into clean, structured formats for LLMs.
- Why it matters: RAG quality starts with document processing. Unstructured handles the hardest part — extracting structure from messy real-world documents. Hosted platform processes 15M+ pages/hour.
- Best for: Teams building RAG pipelines over enterprise documents (contracts, reports, invoices).
- Best paired with: LlamaIndex, LangChain, vector databases.

## Honorable mentions

## DSPy
- Link: https://github.com/stanfordnlp/dspy
- Category: RAG Indexing
- What it is: Optimization-oriented LM programming framework.
- Why it matters: Useful for systematically improving retrieval-response quality.
- Best for: Advanced teams optimizing RAG performance.
- Best paired with: Promptfoo, OpenAI Evals.

## Related categories
- [Vector Databases](../vector-databases/README.md)
- [Memory](../memory/README.md)
- [Observability Evals](../observability-evals/README.md)

## How to choose

- Pick `LlamaIndex` when data connectors/indexing flexibility is the priority.
- Pick `Haystack` for production retrieval pipelines.
- Pick `LangChain` for broad orchestration with retrieval included.
