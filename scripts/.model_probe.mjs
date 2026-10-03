// Finds which models the current key can actually call, so a run is not wasted
// on a 404 "not available to this key" model.
const key = process.env.GEMINI_API_KEY;
if (!key) {
  console.error("GEMINI_API_KEY not set");
  process.exit(1);
}

const candidates = [
  "gemini-3.8-flash",
  "gemini-3.5-flash",
  "gemini-3.0-flash",
  "gemini-flash-latest",
  "gemini-2.5-flash",
];

for (const model of candidates) {
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
    console.log(`  USABLE   ${model} -> ${json?.candidates?.[0]?.content?.parts?.map((p) => p.text).join("")}`);
  } else {
    const body = await res.text();
    let msg = body.slice(0, 150);
    try {
      msg = JSON.parse(body).error.message;
    } catch {}
    const kind = res.status === 429 ? "RATE-LIMITED" : res.status === 404 ? "UNAVAILABLE" : `HTTP ${res.status}`;
    console.log(`  ${kind.padEnd(12)} ${model} -> ${msg}`);
  }
}
