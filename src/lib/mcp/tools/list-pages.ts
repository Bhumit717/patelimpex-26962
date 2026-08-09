import { defineTool } from "@lovable.dev/mcp-js";
import { SITE_PAGES, SITE_URL } from "../pages";

export default defineTool({
  name: "list_pages",
  title: "List website pages",
  description:
    "List every public page on the Patel Impex website with its route and title. Use this to discover what content is available before calling get_page.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const pages = SITE_PAGES.map((page) => ({
      ...page,
      url: `${SITE_URL}${page.route === "/" ? "" : page.route}`,
    }));
    return {
      content: [{ type: "text", text: JSON.stringify(pages, null, 2) }],
      structuredContent: { count: pages.length, pages },
    };
  },
});
