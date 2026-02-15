<div align="center">
  <img width="1200" height="475" alt="PipeRAG banner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# PipeRAG

**PipeRAG is a product-style demo of a visual RAG workflow platform for enterprise teams.**

It showcases the core idea behind the project: treat Retrieval-Augmented Generation (RAG) as a standardized pipeline instead of one-off glue code. The app presents PipeRAG as the **"n8n for RAG"** with configurable ingestion, chunking, LLM selection, security controls, and an in-app playground to test responses.

---

## What this application demonstrates

- A modern landing page for the PipeRAG platform narrative.
- A visual workflow builder with configurable nodes:
  - Data Source (Google Drive, Notion, Confluence, Zendesk)
  - Chunking Strategy
  - Embedding / LLM choice
- A simulated indexing run and security posture (ACL sync, multi-tenant framing).
- A test playground that calls Gemini to generate responses from a constrained, mock PipeRAG knowledge base.
- Platform messaging around enterprise requirements: governance, auditability, and modular architecture.

---

## Current platform sections in the UI

- **Hero:** Product positioning, beta status, and core value proposition.
- **Workflow Builder:** Interactive configuration panel + pipeline canvas + query test area.
- **Capabilities:** Modular nodes, security-by-design, multi-tenancy, prebuilt blueprints, evaluation harness, vector abstraction.
- **Pricing:** Starter, Team, and Enterprise packaging.
- **Footer:** Product, company, and legal navigation placeholders.

---

## Tech stack

- **Framework:** React 19 + TypeScript
- **Build tool:** Vite
- **Icons:** lucide-react
- **Model SDK:** `@google/genai`
- **Styling:** Utility-first class-based styling (Tailwind-style conventions in components)

---

## Local development

### Prerequisites

- Node.js 18+
- npm

### 1) Install dependencies

```bash
npm install
```

### 2) Configure environment variables

Create a `.env.local` file in the project root:

```bash
GEMINI_API_KEY=your_api_key_here
```

> The app maps `GEMINI_API_KEY` to `process.env.API_KEY` and `process.env.GEMINI_API_KEY` in Vite config so the Gemini-powered playground can run.

### 3) Run the app

```bash
npm run dev
```

App will be available at `http://localhost:3000`.

---

## Available scripts

- `npm run dev` – start development server
- `npm run build` – create production build
- `npm run preview` – serve built app locally

---

## Project structure

```text
.
├── App.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── WorkflowBuilder.tsx
│   ├── FeatureSection.tsx
│   ├── Pricing.tsx
│   └── Footer.tsx
├── services/
│   └── geminiService.ts
├── index.tsx
└── vite.config.ts
```

---

## Notes

- The playground uses a **mock, embedded knowledge base** to simulate RAG retrieval before generation.
- The product language and workflows are intentionally enterprise-oriented (ACL propagation, audit logs, tenant isolation).
- This repository currently represents a polished product prototype / marketing experience rather than a full backend RAG orchestration engine.
