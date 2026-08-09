import { defineTool, ToolError } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { SITE_PAGES, SITE_URL } from "../pages";

function htmlToText(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<svg[\s\S]*?<\/svg>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/[ \t]+/g, " ")
    .replace(/\s*\n\s*/g, "\n")
    .trim();
}

export default defineTool({
  name: "get_page",
  title: "Read a website page",
  description:
    "Fetch the readable text content of one public Patel Impex website page. Pass a route from list_pages, for example '/services' or '/'.",
  inputSchema: {
    route: z
      .string()
      .trim()
      .min(1)
      .describe("Page route from list_pages, e.g. '/about'. Use '/' for the home page."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: true },
  handler: async ({ route }) => {
    const normalized = route.startsWith("/") ? route : `/${route}`;
    const page = SITE_PAGES.find((p) => p.route === normalized);
    if (!page) {
      throw new ToolError(
        `Unknown route "${normalized}". Call list_pages to see the available routes.`,
      );
    }

    const url = `${SITE_URL}${normalized === "/" ? "" : normalized}`;
    const response = await fetch(url, { headers: { Accept: "text/html" } });
    if (!response.ok) {
      throw new ToolError(`Could not load ${url} (HTTP ${response.status}).`);
    }

    const text = htmlToText(await response.text()).slice(0, 20000);
    return {
      content: [{ type: "text", text: `# ${page.title}\n${url}\n\n${text}` }],
      structuredContent: { route: normalized, title: page.title, url, text },
    };
  },
});
