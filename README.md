<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your PipeRAG app

This repository currently contains the PipeRAG web demo.

## Security note (public GitHub repositories)

- Never commit API keys, tokens, or passwords.
- Never expose LLM keys in browser code or Vite `define` config.
- `.env.local` is gitignored and should only contain local non-committed values.

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   `npm install`
2. Optional: set backend URL in `.env.local`:
   `VITE_API_URL=http://localhost:4000`
3. Run the app:
   `npm run dev`

If `VITE_API_URL` is not set, the UI uses a safe local fallback response and does not require any API key.
