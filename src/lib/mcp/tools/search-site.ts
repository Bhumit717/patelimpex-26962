import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { SITE_PAGES, SITE_URL } from "../pages";

export default defineTool({
  name: "search_pages",
  title: "Search website pages",
  description:
    "Find Patel Impex website pages whose route or title matches a keyword. Returns matching routes to read with get_page.",
  inputSchema: {
    query: z.string().trim().min(1).describe("Keyword to match, e.g. 'services' or 'policy'."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ query }) => {
    const needle = query.toLowerCase();
    const matches = SITE_PAGES.filter(
      (page) =>
        page.route.toLowerCase().includes(needle) || page.title.toLowerCase().includes(needle),
    ).map((page) => ({
      ...page,
      url: `${SITE_URL}${page.route === "/" ? "" : page.route}`,
    }));

    return {
      content: [
        {
          type: "text",
          text: matches.length
            ? JSON.stringify(matches, null, 2)
            : `No pages matched "${query}". Call list_pages to see every route.`,
        },
      ],
      structuredContent: { count: matches.length, matches },
    };
  },
});
