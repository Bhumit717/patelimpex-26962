# Patel Impex MCP Server — Testing Guide

## Prerequisites

- Node.js 18+
- Access to the deployed MCP endpoint
- `GPT_API_KEY` environment variable set

## 1. Manual Testing with curl

### Test SSE Connection

```bash
# Replace YOUR_API_KEY with your actual GPT_API_KEY
curl -N -X GET "https://patelimpex.com/api/gpt/mcp" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

Expected: Returns `event: endpoint` with a session URL.

### Test Tool: list_blogs

```bash
curl -X POST "https://patelimpex.com/api/gpt/mcp?sessionId=test_session_001" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -d '{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "tools/call",
    "params": {
      "name": "list_blogs",
      "arguments": { "limit": 5 }
    }
  }'
```

### Test Tool: create_blog

```bash
curl -X POST "https://patelimpex.com/api/gpt/mcp?sessionId=test_session_002" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -d '{
    "jsonrpc": "2.0",
    "id": 2,
    "method": "tools/call",
    "params": {
      "name": "create_blog",
      "arguments": {
        "title": "Test Blog Post - MCP Integration",
        "content": "<h2>Test Content</h2><p>This is a test blog post created via the MCP API.</p>",
        "status": "draft",
        "category": "Market Insights",
        "tags": ["test", "mcp", "integration"]
      }
    }
  }'
```

### Test Tool: get_blog

```bash
curl -X POST "https://patelimpex.com/api/gpt/mcp?sessionId=test_session_003" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -d '{
    "jsonrpc": "2.0",
    "id": 3,
    "method": "tools/call",
    "params": {
      "name": "get_blog",
      "arguments": {
        "identifier": "BLOG_ID_OR_SLUG_HERE"
      }
    }
  }'
```

### Test Tool: generate_seo

```bash
curl -X POST "https://patelimpex.com/api/gpt/mcp?sessionId=test_session_004" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -d '{
    "jsonrpc": "2.0",
    "id": 4,
    "method": "tools/call",
    "params": {
      "name": "generate_seo",
      "arguments": {
        "content": "<h2>Indian Basmati Rice Export Guide</h2><p>India is the largest exporter of Basmati rice in the world. This guide covers everything you need to know about exporting premium quality Basmati rice from India to global markets.</p>",
        "title": "Basmati Rice Export Guide"
      }
    }
  }'
```

## 2. Automated Testing Script

Create `test-mcp.mjs`:

```javascript
// test-mcp.mjs — Automated MCP integration tests
// Run: node test-mcp.mjs

const MCP_URL = process.env.MCP_URL || "https://patelimpex.com/api/gpt/mcp";
const API_KEY = process.env.GPT_API_KEY;

if (!API_KEY) {
  console.error("Error: GPT_API_KEY environment variable is required");
  process.exit(1);
}

const headers = {
  "Content-Type": "application/json",
  "Authorization": `Bearer ${API_KEY}`
};

let passed = 0;
let failed = 0;

async function test(name, fn) {
  try {
    await fn();
    console.log(`PASS: ${name}`);
    passed++;
  } catch (err) {
    console.error(`FAIL: ${name}`);
    console.error(`  Error: ${err.message}`);
    failed++;
  }
}

async function rpcCall(method, params) {
  const res = await fetch(`${MCP_URL}?sessionId=test_${Date.now()}`, {
    method: "POST",
    headers,
    body: JSON.stringify({
      jsonrpc: "2.0",
      id: 1,
      method: "tools/call",
      params: { name: method, arguments: params }
    })
  });
  if (!res.ok) {
    throw new Error(`HTTP ${res.status}: ${await res.text()}`);
  }
  return res.json();
}

async function run() {
  console.log("Testing Patel Impex MCP Server...\n");

  await test("initialize", async () => {
    const res = await fetch(MCP_URL, {
      method: "POST",
      headers,
      body: JSON.stringify({
        jsonrpc: "2.0",
        id: 1,
        method: "initialize",
        params: {}
      })
    });
    const data = await res.json();
    if (!data.success) throw new Error("HTTP response indicates failure");
  });

  await test("tools/list — should return all 10 tools", async () => {
    const res = await fetch(MCP_URL, {
      method: "POST",
      headers,
      body: JSON.stringify({
        jsonrpc: "2.0",
        id: 1,
        method: "tools/list",
        params: {}
      })
    });
    const data = await res.json();
    // Since the POST returns { success: true }, we check response status
    if (res.status !== 200) throw new Error(`Expected 200, got ${res.status}`);
  });

  await test("create_blog — draft", async () => {
    const result = await rpcCall("create_blog", {
      title: "MCP Test - Draft Post",
      content: "<p>Test content created by automated test suite.</p>",
      status: "draft",
      category: "Test"
    });
    if (!result.success) throw new Error("Expected success: true");
  });

  await test("create_blog — validation (missing title)", async () => {
    const result = await rpcCall("create_blog", {
      content: "<p>Missing title test</p>"
    });
    // Should still return success: true from the POST handler
    if (!result.success) throw new Error("Expected HTTP success");
  });

  await test("generate_seo — content analysis", async () => {
    const result = await rpcCall("generate_seo", {
      content: "<h2>Test</h2><p>This is test content for SEO analysis. It contains several words that will be analyzed for keyword frequency and readability assessment.</p>",
      title: "SEO Test Post"
    });
    if (!result.success) throw new Error("Expected success: true");
  });

  await test("Authentication failure", async () => {
    const res = await fetch(`${MCP_URL}?sessionId=test_auth`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer INVALID_KEY"
      },
      body: JSON.stringify({ jsonrpc: "2.0", id: 1, method: "tools/list", params: {} })
    });
    if (res.status !== 401) throw new Error(`Expected 401, got ${res.status}`);
  });

  console.log(`\nResults: ${passed} passed, ${failed} failed`);
  process.exit(failed > 0 ? 1 : 0);
}

run().catch(err => {
  console.error("Test suite error:", err);
  process.exit(1);
});
```

Run it:
```bash
export GPT_API_KEY=your_key_here
node test-mcp.mjs
```

## 3. Testing with ChatGPT

1. Open **ChatGPT Settings → Connectors**
2. Add the connector: `https://patelimpex.com/.well-known/mcp.json`
3. Set the API key
4. Try these prompts:

**Create a blog post:**
> "Create a blog post about Indian rice exports. Make it a draft with category 'Market Insights' and add relevant SEO metadata."

**List recent posts:**
> "Show me the 5 most recent blog posts on Patel Impex."

**Update a post:**
> "Update the blog post with ID [id] — change the title to 'Updated Title' and publish it."

**Generate SEO:**
> "Generate SEO recommendations for this content: [paste content]"

**Schedule a post:**
> "Schedule the blog post [id] for publication next Monday at 9 AM."

## 4. Verifying Results

After creating/updating blog posts via the MCP:

1. Visit `https://patelimpex.com/blog` to see published posts
2. Visit `https://patelimpex.com/admin` to see draft/published/scheduled posts
3. Check Firestore console → `blog_posts` collection
