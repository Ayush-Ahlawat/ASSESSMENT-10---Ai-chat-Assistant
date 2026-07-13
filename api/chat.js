export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { messages } = req.body;

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01"
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-6",
        max_tokens: 1000,
        system:
          "You are 'Chai AI', a warm, friendly, and helpful AI assistant. Always answer in English, clearly and accurately. For anything time-sensitive — weather, news, current events, prices, scores, or 'latest' anything — use the web search tool to look it up before answering, instead of guessing.",
        tools: [{ type: "web_search_20250305", name: "web_search" }],
        messages
      })
    });

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (err) {
    res.status(500).json({ error: "Server error", details: err.message });
  }
}
