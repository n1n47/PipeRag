import { GoogleGenAI } from "@google/genai";

// We will simulate a RAG retrieval by providing a hardcoded context 
// derived from the business plan to the model.
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

export const generateRAGResponse = async (query: string): Promise<string> => {
  if (!process.env.API_KEY) {
    return "Error: API Key not found. Please set the API_KEY environment variable to test the live demo.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // We are simulating the "Assemble Prompt" node here
    const prompt = `
    You are the AI engine for PipeRAG. 
    Use the following RETRIEVED CONTEXT to answer the user's question.
    
    --- CONTEXT START ---
    ${MOCK_KNOWLEDGE_BASE}
    --- CONTEXT END ---

    User Question: ${query}

    Rules:
    1. Answer strictly based on the context provided.
    2. If the answer is not in the context, say "I don't have that information in the PipeRAG knowledge base."
    3. Keep the tone professional and technical.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-latest',
      contents: prompt,
    });

    return response.text || "No response generated.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "An error occurred while communicating with the AI model. Please try again.";
  }
};