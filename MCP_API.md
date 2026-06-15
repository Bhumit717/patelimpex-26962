# Patel Impex MCP Server — API Documentation

## Protocol

The MCP server implements the **Model Context Protocol** specification using:
- **Transport**: Server-Sent Events (SSE) for GET, JSON POST for messages
- **Protocol**: JSON-RPC 2.0
- **Version**: 2024-11-05

## Base URL

```
https://patelimpex.com/api/gpt/mcp
```

## Authentication

All requests require a Bearer token in the `Authorization` header:

```
Authorization: Bearer YOUR_GPT_API_KEY
```

## Connection Flow

1. **Client connects** via GET to establish SSE stream
2. **Server sends** `endpoint` event with the POST URL
3. **Client sends** JSON-RPC 2.0 messages via POST
4. **Server responds** via SSE stream

## Tools

### 1. create_blog

Create a new blog post with full SEO support.

**Input:**
```json
{
  "title": "Indian Basmati Rice: Complete Export Guide 2025",
  "content": "<h2>Introduction</h2><p>Full HTML content here...</p>",
  "contentType": "html",
  "status": "published",
  "category": "Export Guide",
  "tags": ["basmati-rice", "export-guide", "rice-trade"],
  "slug": "indian-basmati-rice-export-guide-2025",
  "featuredImage": "https://firebasestorage.googleapis.com/.../image.jpg",
  "metaTitle": "Indian Basmati Rice Export Guide 2025 | Patel Impex",
  "metaDescription": "Complete guide to exporting Indian Basmati Rice. Learn about varieties, quality standards, documentation, and global market trends.",
  "keywords": "basmati rice export, Indian rice trade, rice export guide, basmati varieties"
}
```

**Response:**
```json
{
  "success": true,
  "id": "abc123def456",
  "slug": "indian-basmati-rice-export-guide-2025",
  "title": "Indian Basmati Rice: Complete Export Guide 2025",
  "status": "published",
  "url": "https://patelimpex.com/blog/indian-basmati-rice-export-guide-2025",
  "message": "Blog post created successfully as published."
}
```

### 2. update_blog

Update an existing blog post. Only provided fields are changed.

**Input:**
```json
{
  "blogId": "abc123def456",
  "title": "Updated Title",
  "status": "draft",
  "metaDescription": "Updated SEO description..."
}
```

**Response:**
```json
{
  "success": true,
  "id": "abc123def456",
  "title": "Updated Title",
  "slug": "existing-slug",
  "url": "https://patelimpex.com/blog/existing-slug",
  "message": "Blog post \"Updated Title\" updated successfully."
}
```

### 3. delete_blog

Permanently delete a blog post.

**Input:**
```json
{
  "blogId": "abc123def456"
}
```

**Response:**
```json
{
  "success": true,
  "id": "abc123def456",
  "title": "Blog Post Title",
  "message": "Blog post \"Blog Post Title\" has been permanently deleted."
}
```

### 4. list_blogs

List blog posts with filters and pagination.

**Input:**
```json
{
  "status": "published",
  "category": "Market Insights",
  "limit": 10,
  "includeContent": false
}
```

**Response:**
```json
{
  "success": true,
  "count": 10,
  "hasMore": true,
  "nextOffset": "xyz789docid",
  "posts": [
    {
      "id": "abc123",
      "title": "Blog Post Title",
      "slug": "blog-post-title",
      "status": "published",
      "category": "Market Insights",
      "tags": ["tag1", "tag2"],
      "date": "June 15, 2026",
      "readTime": "5 min read",
      "contentPreview": "First 250 chars of content...",
      "featuredImage": "https://..."
    }
  ]
}
```

### 5. get_blog

Get a single blog post by ID or URL slug.

**Input:**
```json
{
  "identifier": "abc123def456"
}
// OR
{
  "identifier": "blog-post-slug"
}
```

**Response:**
```json
{
  "success": true,
  "post": {
    "id": "abc123def456",
    "title": "Blog Post Title",
    "slug": "blog-post-slug",
    "content": "<h2>Full HTML content...</h2>",
    "status": "published",
    "category": "Market Insights",
    "tags": ["tag1", "tag2"],
    "featuredImage": "https://...",
    "date": "June 15, 2026",
    "readTime": "5 min read",
    "metaTitle": "SEO Title",
    "metaDescription": "SEO Description",
    "keywords": "keyword1, keyword2",
    "canonicalUrl": "",
    "schemaMarkup": ""
  },
  "url": "https://patelimpex.com/blog/blog-post-slug"
}
```

### 6. publish_blog

Publish a draft or scheduled blog post immediately.

**Input:**
```json
{
  "blogId": "abc123def456"
}
```

**Response:**
```json
{
  "success": true,
  "id": "abc123def456",
  "title": "Blog Post Title",
  "status": "published",
  "url": "https://patelimpex.com/blog/blog-post-slug",
  "message": "Blog post \"Title\" has been published."
}
```

### 7. schedule_blog

Schedule a blog post for future publication.

**Input:**
```json
{
  "blogId": "abc123def456",
  "scheduledDate": "2026-07-01T10:00:00Z"
}
```

**Response:**
```json
{
  "success": true,
  "id": "abc123def456",
  "title": "Blog Post Title",
  "status": "scheduled",
  "scheduledDate": "2026-07-01T10:00:00.000Z",
  "url": "https://patelimpex.com/blog/blog-post-slug",
  "message": "Blog post scheduled for publication on 7/1/2026, 10:00:00 AM."
}
```

### 8. upload_featured_image

Upload an image to Firebase Storage and get a public URL.

**Input:**
```json
{
  "imageData": "/9j/4AAQSkZJRg...base64-encoded-data...",
  "filename": "basmati-rice-export.jpg",
  "alt": "Indian Basmati Rice export packaging"
}
```

**Response:**
```json
{
  "success": true,
  "filename": "basmati-rice-export.jpg",
  "size": 245890,
  "mimeType": "image/jpeg",
  "url": "https://firebasestorage.googleapis.com/v0/b/patel-impex.firebasestorage.app/o/blog-images%2Fbasmati-rice-export.jpg?alt=media",
  "alt": "Indian Basmati Rice export packaging",
  "message": "Image uploaded successfully."
}
```

### 9. generate_seo

Analyze blog content and generate SEO recommendations.

**Input:**
```json
{
  "content": "<h2>Introduction</h2><p>Full HTML content of the blog post...</p>",
  "title": "Indian Basmati Rice Export Guide",
  "targetKeywords": "basmati rice export, Indian rice"
}
```

**Response:**
```json
{
  "success": true,
  "contentStats": {
    "wordCount": 1250,
    "characterCount": 8200,
    "sentenceCount": 48,
    "paragraphCount": 12,
    "averageWordsPerSentence": 26,
    "readingTime": "6 min"
  },
  "readability": {
    "score": 62.5,
    "label": "Fairly easy"
  },
  "headings": {
    "count": 5,
    "structure": [
      { "level": 2, "text": "Introduction" },
      { "level": 2, "text": "Basmati Rice Varieties" }
    ]
  },
  "seo": {
    "title": {
      "suggested": "Indian Basmati Rice Export Guide",
      "length": 32,
      "status": "good"
    },
    "metaDescription": {
      "suggested": "Complete guide to exporting Indian Basmati Rice...",
      "length": 155,
      "status": "good"
    },
    "slug": {
      "suggested": "indian-basmati-rice-export-guide",
      "length": 35
    },
    "keywords": {
      "topKeywords": [
        { "word": "rice", "count": 24, "density": 3.2 },
        { "word": "export", "count": 18, "density": 2.4 }
      ]
    },
    "suggestedTags": ["Rice Export", "Basmati", "Trade Guide"]
  },
  "recommendations": [
    "Add headings (H1, H2, H3) to structure your content"
  ]
}
```

### 10. bulk_create_blogs

Create multiple blog posts at once (max 10).

**Input:**
```json
{
  "blogs": [
    {
      "title": "First Blog Post",
      "content": "<p>Content of first post</p>",
      "category": "Market Insights",
      "status": "draft"
    },
    {
      "title": "Second Blog Post",
      "content": "<p>Content of second post</p>",
      "category": "Export Guide",
      "status": "published"
    }
  ]
}
```

**Response:**
```json
{
  "success": true,
  "total": 2,
  "created": 2,
  "failed": 0,
  "results": [
    {
      "index": 0,
      "success": true,
      "id": "docid1",
      "slug": "first-blog-post",
      "title": "First Blog Post",
      "status": "draft",
      "url": "https://patelimpex.com/blog/first-blog-post"
    },
    {
      "index": 1,
      "success": true,
      "id": "docid2",
      "slug": "second-blog-post",
      "title": "Second Blog Post",
      "status": "published",
      "url": "https://patelimpex.com/blog/second-blog-post"
    }
  ]
}
```

## Error Codes

| Code | Meaning |
|---|---|
| -32600 | Invalid JSON-RPC request |
| -32601 | Method/tool not found |
| -32603 | Internal server error |
| -32000 | Resource not found or rate limit |
| -32001 | Firebase operation failed |
| -32002 | Validation failed |

## HTTP Status Codes

| Status | Meaning |
|---|---|
| 200 | Success (POST) |
| 400 | Bad request / Missing parameters |
| 401 | Unauthorized / Invalid API key |
| 405 | Method not allowed |
| 500 | Internal server error |
