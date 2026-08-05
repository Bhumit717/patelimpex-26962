# MCP Tool Usage Examples

## Example 1: Create a Published Blog Post

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "tools/call",
  "params": {
    "name": "create_blog",
    "arguments": {
      "title": "Premium Basmati Rice: A Complete Guide for International Buyers",
      "content": "<h2>Why Indian Basmati Rice?</h2><p>Indian Basmati rice is renowned worldwide for its exceptional quality, distinct aroma, and elongated grains. As a leading exporter, Patel Impex provides premium quality Basmati rice that meets international standards.</p><h2>Key Varieties</h2><ul><li><strong>1121 Basmati:</strong> Extra-long grain, perfect for biryanis</li><li><strong>Golden Sella:</strong> Parboiled, retains nutrients</li><li><strong>White Sella:</strong> Polished, elegant presentation</li><li><strong>Steam Basmati:</strong> Traditional processing method</li></ul><h2>Export Quality Standards</h2><p>All our Basmati rice undergoes rigorous quality checks including grain length analysis, moisture content testing, and purity certification. We comply with FSSAI, EU, and USFDA standards.</p>",
      "contentType": "html",
      "status": "published",
      "category": "Product Guide",
      "tags": ["basmati-rice", "rice-export", "indian-rice", "premium-quality", "international-trade"],
      "slug": "premium-basmati-rice-guide-international-buyers",
      "metaTitle": "Premium Basmati Rice Guide for International Buyers | Patel Impex",
      "metaDescription": "Complete guide to premium Indian Basmati rice varieties, quality standards, and export information for international buyers. Learn about 1121, Golden Sella, and more.",
      "keywords": "basmati rice, premium basmati, Indian rice export, rice varieties, international rice trade, Patel Impex"
    }
  }
}
```

## Example 2: Create a Draft Blog Post

```json
{
  "jsonrpc": "2.0",
  "id": 2,
  "method": "tools/call",
  "params": {
    "name": "create_blog",
    "arguments": {
      "title": "Emerging Trends in Global Rice Trade 2025",
      "content": "<p>Content for draft post...</p>",
      "status": "draft",
      "category": "Market Insights",
      "tags": ["rice-trade", "market-trends", "global-trade"]
    }
  }
}
```

## Example 3: Update a Blog Post

```json
{
  "jsonrpc": "2.0",
  "id": 3,
  "method": "tools/call",
  "params": {
    "name": "update_blog",
    "arguments": {
      "blogId": "abc123def456",
      "title": "Updated: Emerging Trends in Global Rice Trade 2025",
      "metaDescription": "Updated SEO description with new keywords...",
      "status": "published"
    }
  }
}
```

## Example 4: List Published Posts in a Category

```json
{
  "jsonrpc": "2.0",
  "id": 4,
  "method": "tools/call",
  "params": {
    "name": "list_blogs",
    "arguments": {
      "status": "published",
      "category": "Market Insights",
      "limit": 10
    }
  }
}
```

## Example 5: Get a Blog Post by Slug

```json
{
  "jsonrpc": "2.0",
  "id": 5,
  "method": "tools/call",
  "params": {
    "name": "get_blog",
    "arguments": {
      "identifier": "premium-basmati-rice-guide-international-buyers"
    }
  }
}
```

## Example 6: Publish a Draft Post

```json
{
  "jsonrpc": "2.0",
  "id": 6,
  "method": "tools/call",
  "params": {
    "name": "publish_blog",
    "arguments": {
      "blogId": "abc123def456"
    }
  }
}
```

## Example 7: Schedule a Post

```json
{
  "jsonrpc": "2.0",
  "id": 7,
  "method": "tools/call",
  "params": {
    "name": "schedule_blog",
    "arguments": {
      "blogId": "abc123def456",
      "scheduledDate": "2026-07-01T08:00:00Z"
    }
  }
}
```

## Example 8: Upload a Featured Image

```json
{
  "jsonrpc": "2.0",
  "id": 8,
  "method": "tools/call",
  "params": {
    "name": "upload_featured_image",
    "arguments": {
      "imageData": "data:image/jpeg;base64,/9j/4AAQSkZJRg...base64-encoded-image-data...",
      "filename": "basmati-rice-varieties.jpg",
      "alt": "Different varieties of Indian Basmati rice displayed"
    }
  }
}
```

## Example 9: Generate SEO Recommendations

```json
{
  "jsonrpc": "2.0",
  "id": 9,
  "method": "tools/call",
  "params": {
    "name": "generate_seo",
    "arguments": {
      "content": "<h2>Introduction</h2><p>India has been a leading exporter of agricultural products for decades. Among the most sought-after commodities is Basmati rice, known for its distinctive aroma and long grains. Patel Impex has been at the forefront of this trade, delivering premium quality rice to international markets.</p><h2>Quality Assurance</h2><p>Every batch of rice undergoes stringent quality checks. Our state-of-the-art processing facility ensures that each grain meets international standards for length, purity, and taste. We maintain certifications that guarantee consistent quality.</p><h2>Global Reach</h2><p>We export to over 20 countries including USA, UK, Canada, UAE, Saudi Arabia, and Australia. Our logistics network ensures timely delivery and proper storage conditions throughout transit.</p>",
      "title": "Indian Rice Export Quality Standards",
      "targetKeywords": "Indian rice export, rice quality standards, Basmati rice exporter"
    }
  }
}
```

## Example 10: Bulk Create Blog Posts

```json
{
  "jsonrpc": "2.0",
  "id": 10,
  "method": "tools/call",
  "params": {
    "name": "bulk_create_blogs",
    "arguments": {
      "blogs": [
        {
          "title": "Rice Processing Technology: Modern Milling Techniques",
          "content": "<p>Modern rice milling technology has revolutionized the grain processing industry...</p>",
          "status": "draft",
          "category": "Technology",
          "tags": ["rice-milling", "technology", "processing"]
        },
        {
          "title": "Sustainable Agriculture Practices in Rice Farming",
          "content": "<p>Sustainable farming practices are becoming increasingly important in rice cultivation...</p>",
          "status": "draft",
          "category": "Agriculture",
          "tags": ["sustainable", "agriculture", "rice-farming"]
        },
        {
          "title": "Understanding Rice Grade Classifications",
          "content": "<p>Rice grading is essential for international trade. Understanding the classification system helps buyers make informed decisions...</p>",
          "status": "draft",
          "category": "Product Guide",
          "tags": ["rice-grades", "classification", "quality"]
        }
      ]
    }
  }
}
```

## Example 11: Delete a Blog Post

```json
{
  "jsonrpc": "2.0",
  "id": 11,
  "method": "tools/call",
  "params": {
    "name": "delete_blog",
    "arguments": {
      "blogId": "abc123def456"
    }
  }
}
```

## Example 12: Complete Workflow (Create, Publish, Verify)

Step 1 - Create as draft:
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "tools/call",
  "params": {
    "name": "create_blog",
    "arguments": {
      "title": "New Market Analysis: Rice Prices Q3 2026",
      "content": "<p>Market analysis content here...</p>",
      "status": "draft",
      "category": "Market Insights"
    }
  }
}
```

Step 2 - Publish when ready:
```json
{
  "jsonrpc": "2.0",
  "id": 2,
  "method": "tools/call",
  "params": {
    "name": "publish_blog",
    "arguments": {
      "blogId": "ID_FROM_STEP_1"
    }
  }
}
```

Step 3 - Verify it's live:
```json
{
  "jsonrpc": "2.0",
  "id": 3,
  "method": "tools/call",
  "params": {
    "name": "get_blog",
    "arguments": {
      "identifier": "ID_FROM_STEP_1"
    }
  }
}
```
