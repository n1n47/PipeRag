const MOCK_KNOWLEDGE_BASE = `
PipeRAG is a B2B SaaS platform that productizes Retrieval-Augmented Generation (RAG) as a reusable workflow template.
Tagline: "RAG workflows, standardized."
Value Proposition: Speed and governability. Companies go from "we have docs" to "secure AI assistant" in days.
Key Features:
1. Indexing Workflow: Connect -> Normalize -> Chunk -> Embed -> Store -> Permissions.
2. Query Workflow: Embed Question -> Retrieve -> Filter -> Rerank -> Assemble Prompt -> Generate -> Cite.
Target Audience: Mid-market and enterprise teams, Software vendors.
Pricing: Subscription (per tenant) + usage-based (queries + volume).
Security: ACL propagation, retrieval-time trimming, audit logs.
`;

const API_BASE_URL = import.meta.env.VITE_API_URL;

const fallbackLocalResponse = (query: string): string => {
  const normalizedQuery = query.toLowerCase();
  const lines = MOCK_KNOWLEDGE_BASE
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);

  const matchedLine = lines.find((line) =>
    normalizedQuery
      .split(/\s+/)
      .filter((token) => token.length > 3)
      .some((token) => line.toLowerCase().includes(token))
  );

  if (matchedLine) {
    return `${matchedLine}\n\n(Source: local demo knowledge base)`;
  }

  return "I don't have that information in the PipeRAG knowledge base.";
};

export const generateRAGResponse = async (query: string): Promise<string> => {
  if (!API_BASE_URL) {
    return fallbackLocalResponse(query);
  }

  try {
    const response = await fetch(`${API_BASE_URL}/api/query`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const payload = (await response.json()) as { answer?: string };

    if (!payload.answer) {
      return 'No response generated.';
    }

    return payload.answer;
  } catch (error) {
    console.error('API Error:', error);
    return fallbackLocalResponse(query);
  }
};
