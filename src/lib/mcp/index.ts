import { defineMcp } from "@lovable.dev/mcp-js";
import getCompanyInfoTool from "./tools/get-company-info";
import getPageTool from "./tools/get-page";
import listPagesTool from "./tools/list-pages";
import searchPagesTool from "./tools/search-site";

export default defineMcp({
  name: "patelimpex",
  title: "patelimpex",
  version: "0.1.0",
  instructions:
    "Read-only tools for the Patel Impex website (agro commodity export and trade logistics, India). Use `list_pages` or `search_pages` to find a page route, `get_page` to read that page's text, and `get_company_info` for published contact details. All data is public website content.",
  tools: [listPagesTool, searchPagesTool, getPageTool, getCompanyInfoTool],
});
