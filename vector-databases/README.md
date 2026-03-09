# Vector Databases

Core storage and retrieval engines for embeddings, semantic search, and hybrid retrieval.

## Top tools

## Qdrant
- Link: https://github.com/qdrant/qdrant
- Category: Vector Databases
- What it is: High-performance vector search engine and database.
- Why it matters: Strong open-source default for modern semantic retrieval stacks.
- Best for: Teams building RAG and similarity-search features.
- Best paired with: LlamaIndex, LangChain, Langfuse.

## Weaviate
- Link: https://github.com/weaviate/weaviate
- Category: Vector Databases
- What it is: Open-source vector database with rich search/filter capabilities.
- Why it matters: Good fit for hybrid search and production deployment patterns.
- Best for: Teams needing flexible schema and filtering.
- Best paired with: Haystack, LangChain.

## Chroma
- Link: https://github.com/chroma-core/chroma
- Category: Vector Databases
- What it is: Embedding database designed for AI application workflows.
- Why it matters: Lightweight developer experience for quick prototyping.
- Best for: Early-stage teams and prototypes.
- Best paired with: LangChain, local runtimes.

## Milvus
- Link: https://github.com/milvus-io/milvus
- Category: Vector Databases
- What it is: Scalable vector database for large-scale embedding workloads.
- Why it matters: Mature option for high-scale similarity search.
- Best for: Teams handling large datasets and throughput demands.
- Best paired with: Haystack, LlamaIndex.

## Pinecone
- Link: https://www.pinecone.io
- Category: Vector Databases
- What it is: Fully managed serverless vector database with hybrid search, integrated reranking, and enterprise features (BYOC, HIPAA, RBAC).
- Why it matters: Leading managed vector DB. Serverless architecture with 20-100ms latency on billion-vector datasets. Recently added BYOC on all three major clouds.
- Best for: Teams that want managed infrastructure with enterprise compliance and no operational overhead.
- Best paired with: LlamaIndex, LangChain, Unstructured, n8n.

## Honorable mentions

## FAISS
- Link: https://github.com/facebookresearch/faiss
- Category: Vector Databases
- What it is: Library for efficient similarity search and clustering.
- Why it matters: Foundational engine in many retrieval systems.
- Best for: Advanced teams building custom retrieval infrastructure.
- Best paired with: Custom pipelines, research workflows.

## Related categories
- [RAG Indexing](../rag-indexing/README.md)
- [Memory](../memory/README.md)
- [Inference Runtimes](../inference-runtimes/README.md)

## pgvector
- Link: https://github.com/pgvector/pgvector
- Category: Vector Databases
- What it is: Open-source vector similarity search extension for PostgreSQL.
- Why it matters: If you already use PostgreSQL, pgvector adds vector search without a separate database. Zero new infrastructure.
- Best for: Teams that want vector search inside their existing PostgreSQL stack.
- Best paired with: Supabase, Django, Rails, any PostgreSQL-based app.

## How to choose

- Start with `Qdrant` for balanced open-source default.
- Choose `Pinecone` when you want fully managed with enterprise features.
- Use `pgvector` when you already have PostgreSQL and want to avoid a new service.
- Move to `Milvus` for larger-scale workloads.
- Use `Chroma` for rapid prototyping and local iteration.
