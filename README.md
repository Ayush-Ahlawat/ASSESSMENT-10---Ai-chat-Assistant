# Chai AI

A warm white/brown themed AI chat assistant, powered by Claude.

## Local structure
- `index.html` — the full chat UI (frontend)
- `api/chat.js` — Vercel serverless function that securely calls the Anthropic API
- `package.json` — marks this as a Node project so Vercel picks up the `api/` folder

## Required environment variable
On Vercel, set:
- `ANTHROPIC_API_KEY` — your Anthropic API key (from https://console.anthropic.com)

Never put the API key directly in `index.html` or any frontend file — it must
only live in the serverless function's environment variable, otherwise anyone
visiting your site can steal and misuse it.
