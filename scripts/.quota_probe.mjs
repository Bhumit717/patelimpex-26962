// Single-call quota probe. Run before a long classification pass so a spent
// daily quota is discovered in one second instead of an hour of backoff.
const key = process.env.GEMINI_API_KEY;
const model = process.env.GEMINI_MODEL || "gemini-2.5-flash";
if (!key) {
  console.error("GEMINI_API_KEY not set");
  process.exit(1);
}

const res = await fetch(
  `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(key)}`,
  {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ role: "user", parts: [{ text: "Reply with the single word: ok" }] }],
      generationConfig: { responseMimeType: "application/json", temperature: 0 },
    }),
  },
);

if (res.ok) {
  const json = await res.json();
  console.log(`QUOTA OK  ${model} -> ${json?.candidates?.[0]?.content?.parts?.map((p) => p.text).join("")}`);
} else {
  const body = await res.text();
  const msg = (() => {
    try {
      return JSON.parse(body).error.message;
    } catch {
      return body.slice(0, 200);
    }
  })();
  console.log(`QUOTA SPENT  ${res.status}  ${msg}`);
  process.exit(2);
}
