import { defineTool } from "@lovable.dev/mcp-js";
import { SITE_URL } from "../pages";

const COMPANY = {
  name: "Patel Impex",
  summary:
    "Patel Impex is an India-based agro commodity exporter and end-to-end trade logistics operator, handling sourcing, quality control, packing, documentation and shipping.",
  website: SITE_URL,
  email: "contact@patelimpex.com",
  phone: "+91 79841 33417",
  locations: [
    { label: "Head office", address: "Rajkot, Gujarat, India" },
    { label: "Warehouse & packing unit", address: "Rajkot, Gujarat, India" },
    { label: "Logistics desk", address: "Mundra Port, Gujarat, India" },
    { label: "Shipping desk", address: "Nhava Sheva (JNPT), Mumbai, India" },
  ],
};

export default defineTool({
  name: "get_company_info",
  title: "Get company & contact info",
  description:
    "Get Patel Impex's published company details: business summary, email, phone number and office locations.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(COMPANY, null, 2) }],
    structuredContent: COMPANY,
  }),
});
