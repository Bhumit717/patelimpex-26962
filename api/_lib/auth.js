// GPT Actions Authentication Helper
// Validates API key from Authorization header

export function authenticateRequest(req) {
    const GPT_API_KEY = process.env.GPT_API_KEY;

    if (!GPT_API_KEY) {
        return { ok: false, status: 500, error: "GPT_API_KEY not configured in Vercel Environment Variables." };
    }

    const authHeader = req.headers["authorization"] || req.headers["Authorization"] || "";
    const token = authHeader.replace(/^Bearer\s+/i, "").trim();

    if (!token || token !== GPT_API_KEY) {
        return { ok: false, status: 401, error: "Unauthorized. Invalid API key." };
    }

    return { ok: true };
}
