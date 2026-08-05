# Patel Impex MCP Server — Installation Guide

## Overview

The MCP (Model Context Protocol) server allows ChatGPT to directly manage blog posts on your Patel Impex website through ChatGPT Connectors. It uses Server-Sent Events (SSE) for streaming and JSON-RPC 2.0 for the protocol.

## Prerequisites

- Node.js 18+ (already configured in `package.json`)
- Vercel account (already deployed)
- Firebase project: `patel-impex` (already configured)

## Installation Steps

### 1. Set Environment Variables

In your Vercel project dashboard, add the following environment variable:

```
GPT_API_KEY = <your-generated-api-key>
```

Generate a strong key:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

**Optional:**
```
MCP_LOG_LEVEL = INFO  # DEBUG, INFO, WARN, ERROR
```

### 2. Deploy to Vercel

```bash
# Install dependencies
npm install

# Deploy to Vercel
npx vercel --prod
```

Or push to `main` branch if using GitHub integration:
```bash
git add .
git commit -m "feat: add MCP server for ChatGPT Connector"
git push origin main
```

### 3. Verify Deployment

Check that the MCP endpoint is accessible:
```bash
curl -X GET https://patelimpex.com/api/gpt/mcp
```

Check the health endpoints:
```bash
curl -X GET https://patelimpex.com/api/gpt/generate-seo
```

### 4. Add to ChatGPT

1. Open ChatGPT
2. Go to **Settings → Connectors**
3. Click **Add Connector**
4. Enter the connector URL: `https://patelimpex.com/.well-known/mcp.json`
5. Set the Authorization header: `Bearer YOUR_GPT_API_KEY`
6. Click **Connect**

Alternatively, you can configure it manually:
1. Go to **Settings → Connectors → Add Custom Connector**
2. Enter **MCP SSE URL**: `https://patelimpex.com/api/gpt/mcp`
3. **Headers**: `Authorization: Bearer YOUR_GPT_API_KEY`
4. Click **Connect**

## Firestore Collections

The MCP server uses the following existing Firestore collections:

| Collection | Purpose |
|---|---|
| `blog_posts` | Blog post data with SEO fields, status, scheduling |
| `mcp_sessions` | Active MCP session management |

## Rate Limits

| Tool | Limit |
|---|---|
| create_blog | 10 per minute |
| update_blog | 30 per minute |
| delete_blog | 20 per minute |
| list_blogs | 100 per minute |
| get_blog | 100 per minute |
| publish_blog | 20 per minute |
| schedule_blog | 20 per minute |
| upload_featured_image | 30 per minute |
| generate_seo | 30 per minute |
| bulk_create_blogs | 5 per minute |

## Troubleshooting

### 401 Unauthorized
- Verify `GPT_API_KEY` is set in Vercel environment variables
- Check the Authorization header matches the key exactly

### 404 Not Found
- Ensure the MCP endpoint is deployed: `https://patelimpex.com/api/gpt/mcp`
- Check `vercel.json` rewrites include `/api/(.*)`

### SSE Connection Drops
- Vercel Hobby plan has 10s function timeout
- The MCP handles this with automatic reconnection
- Consider upgrading to Vercel Pro for longer connections

### Image Upload Fails
- Maximum image size: 10MB
- Supported formats: JPEG, PNG, GIF, WebP
- Check Firebase Storage rules allow writes
