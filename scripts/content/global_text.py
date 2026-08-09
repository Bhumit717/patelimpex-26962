"""Content-only rewrite: logistics copy -> Patel Impex export copy.

Applies ordered (longest-first) plain-string replacements to every imported
page under public/site. No markup/structure/class changes.
"""
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parents[2]
SITE = ROOT / "public" / "site"

R: list[tuple[str, str]] = [
    # ---------- hero ----------
    ("Every <br/>leg of the journey", "&amp; Food Products<br/>Exported Worldwide"),
    ("One operator.<br/>Every leg of the journey.", "Indian exporter.<br/>Global supplier."),
    ("Freight forwarding, land transport, and customs brokerage, unified across APAC under one accountable team.",
     "PATEL IMPEX supplies quality Indian rice, flours, spices, psyllium and packaging products to international buyers with reliable sourcing and export support."),
    ("Work with us", "Request a Quote"),
    ("work with us", "request a quote"),

    # ---------- anchored homepage fragments ----------
    ("Real-Time <br/>Freight <br/>Tracking", "Quality-Focused <br/>Indian <br/>Sourcing"),
    ("Global <br/>Network <br/>overage", "Export-Ready <br/>Packaging <br/>Options"),
    ("24/7 <br/>Customer <br/>Support", "Buyer <br/>Focused <br/>Communication"),
    ("h3>Air <br/>freight</h3>", "h3>Basmati &amp; <br/>Non-Basmati Rice</h3>"),
    ("h3>Ocean <br/>Freight</h3>", "h3>Variety of <br/>Flours</h3>"),
    ("h3>Customs <br/>Brokerage</h3>", "h3>Indian <br/>Spices</h3>"),
    ("h3>Warehousing <br/>and 3PL</h3>", "h3>Psyllium <br/>Products</h3>"),
    ("h3>Project <br/>Cargo</h3>", "h3>Packaging <br/>Products</h3>"),
    ("h3>Domestic &amp; <br/>Interstate Transport</h3>", "h3>Paper &amp; <br/>Packaging Materials</h3>"),
    ("Trusted <br/>by businesses <span class=\"cl-note\">across APAC</span>",
     "Our export <br/>process, <span class=\"cl-note\">step by step</span>"),
    ("Built for businesses that <span class=\"cl-note\">can&#x27;t afford</span> disruption.",
     "Built for buyers who <span class=\"cl-note\">need dependable</span> sourcing."),
    ("One operator</div>", "Indian Agricultural</div>"),
    ("Talk with us", "Request a Quote"),
    ("Our services", "Explore Products"),
    ("Everything your freight needs.", "Everything you source from India."),
    ("Under one group.", "Under one exporter."),
    ("in your industry", "in Indian exports"),
    (">Retail</div>", ">Retail Chains</div>"),

    # ---------- long prose ----------
    ("With every service under one roof and one accountable team, your supply chain moves the way your business demands: predictably, transparently, and without excuses.",
     "With one sourcing partner in India coordinating products, quality and export documentation, your purchase moves predictably from enquiry to delivery."),
    ("That means no finger-pointing between vendors. No delays lost in handoffs. Just one team, accountable from origin to destination.",
     "That means fewer suppliers to manage, clearer communication and one accountable team from enquiry to shipment."),
    ("Learn more about us", "About Patel Impex"),
    ("From countless journeys, clarity emerges", "A diverse Indian export portfolio, in one place"),
    ("From air to sea, from customs clearance to final delivery, we bring decades of expertise across every freight discipline.",
     "From rice and flours to spices, psyllium and packaging products, our portfolio is built around what international buyers source from India."),
    ("Our integrated service network means one partner, one point of contact, and total visibility from origin to destination.",
     "Working with one export partner means a single point of contact, consistent packaging coordination and clear documentation support."),
    ("Stay ahead of the shifts shaping trade across APAC — from regulatory changes to new shipping routes and supply chain trends.",
     "Notes on Indian agricultural commodities, spices, psyllium and packaging products for international buyers."),
    ("Logistics that works as hard as you do.", "Why choose Patel Impex?"),
    ("From first-time importers to high-volume shippers, our customers keep coming back because we treat their freight like our own.",
     "From first enquiry to delivered shipment, here is how a Patel Impex export order is coordinated."),
    ("Ready to move smarter?", "Your sourcing partner for Indian products"),
    ("We are here to help you grow without hassle. No call centres. No runaround. Just experienced people ready to help.",
     "Looking to source rice, spices, flours, psyllium or packaging products from India? Send your requirement and our export team will respond with a quotation."),
    ("Straightforward answers, so you can move forward with confidence.",
     "Straightforward answers for international buyers sourcing from India."),
    ("Still have questions? Our team is here to help.", "Still have questions? Talk to our export team."),

    # ---------- home service cards ----------
    ("Express, priority, and deferred options across global trade lanes — managed end to end for speed and schedule integrity.",
     "Basmati and Non-Basmati Indian rice varieties supplied for importers, distributors, wholesalers and food businesses."),
    ("FCL, LCL, and specialised cargo movements, with structured carrier selection and routing for cost and reliability.",
     "Whole wheat flour, tandoori atta, suji, rawa, corn flour and besan, sourced to buyer and export packaging requirements."),
    ("In-house licensed brokerage covering classification, compliance, and quarantine — full control, no outsourcing.",
     "Indian whole spices and spice powders for food manufacturers, wholesalers, distributors, restaurants and importers."),
    ("Scalable storage, pick and pack, and distribution — fully integrated with freight and transport operations.",
     "Psyllium seed supplied for international buyers, with packaging discussed according to buyer requirements."),
    ("Specialist handling for oversized and complex shipments — from permits to engineered load configurations.",
     "Paper, corrugated, bags, containers and other packaging products for commercial, food service, retail and industrial use."),
    ("Local, metro, and interstate transport managed for consistent service levels and full delivery visibility.",
     "Kraft paper, coreboard paper, paper tubes, OCC waste and OCC pulp for repulping, supplied for bulk sourcing."),

    # ---------- why-us / feature cards ----------
    ("Real-Time  Freight  Tracking", "Quality-Focused  Indian  Sourcing"),
    ("Know exactly where your cargo is at every milestone. Live visibility means faster decisions and zero guesswork.",
     "Products are sourced and coordinated against the specification, packaging and commercial terms agreed with the buyer."),
    ("Global Network overage", "Export-Ready Packaging"),
    ("From APAC lanes to international corridors, our partner network spans every major trade route your business relies on.",
     "Packaging is discussed according to buyer requirements, including bulk, retail and custom packaging where available."),
    ("Real people, always available. Whether it is a routine update or an urgent issue, we pick up the phone and we own the outcome.",
     "Clear responses to enquiries and consistent updates through quotation, order confirmation, documentation and shipment."),

    ("One Point of Contact", "Indian Product Sourcing"),
    ("No more chasing multiple vendors. One team manages your entire shipment from origin to destination.",
     "A diverse portfolio of Indian agricultural commodities, food products and packaging products sourced from one partner."),
    ("Full Supply Chain Visibility", "Bulk B2B Supply"),
    ("Track your freight in real time and get proactive updates before issues become delays.",
     "Enquiries are handled for bulk international orders, with flexible sourcing based on quantity and destination."),
    ("Compliance You Can Trust", "Documentation Support"),
    ("Our licensed customs brokers keep your shipments moving within every regulatory requirement across APAC.",
     "Required commercial and shipping documents are coordinated for each export order."),
    ("Competitive, Transparent Pricing", "Competitive Sourcing"),
    ("No hidden fees. Clear, competitive pricing backed by responsive sales support throughout the shipment.",
     "Quotations are prepared against product, quantity, destination and agreed trade terms — no hidden charges."),
    ("Fast Issue Resolution", "Long-Term Relationships"),
    ("When something unexpected happens, we do not point fingers — we solve it. Our team acts immediately to protect your timeline.",
     "We work with importers, distributors and food businesses looking for a dependable Indian supplier for repeat orders."),

    # ---------- FAQ ----------
    ("What does Patel Impex do?", "What does Patel Impex do?"),
    ("Patel Impex is a global freight forwarding and logistics provider delivering end-to-end supply chain solutions, including airfreight, seafreight, customs brokerage, warehousing, and domestic transport.",
     "Patel Impex is an India-based export company supplying agricultural commodities, food products, spices, flours, psyllium and packaging products to international buyers."),
    ("What industries do you specialise in?", "Who do you supply?"),
    ("We support a broad range of industries including retail, fashion, food &amp; beverage, industrial, project cargo, and technology.",
     "We supply importers, distributors, wholesalers, retailers, food businesses, packaging buyers and trading companies."),
    ("What shipping methods do you offer?", "Which products do you export?"),
    ("We offer airfreight, seafreight (FCL &amp; LCL), breakbulk, RO/RO, and multimodal transport solutions.",
     "Basmati and Non-Basmati rice, flours, whole spices and spice powders, psyllium seed, packaging products, and paper &amp; packaging raw materials."),
    ("Do you provide customs clearance services?", "Do you support export documentation?"),
    ("Yes, we offer in-house customs brokerage to manage import and export clearances efficiently.",
     "Yes. Required commercial and shipping documents are coordinated for each order."),
    ("How is freight pricing calculated?", "How is pricing quoted?"),
    ("Pricing depends on factors such as shipment size, weight, origin, destination, mode of transport, and current market conditions.",
     "Quotations are prepared based on product, quantity, packaging, destination and the agreed trade terms."),
    ("Do you offer warehousing and 3PL services?", "Can packaging be customised?"),
    ("Yes, we provide storage, pick and pack, inventory management, and distribution solutions.",
     "Packaging can be discussed according to buyer requirements, including custom packaging and printing where available."),
    ("Can you handle oversized or heavy cargo?", "Do you accept bulk orders?"),
    ("Yes, we specialise in project cargo including out-of-gauge (OOG) and heavy lift shipments.",
     "Yes. Our products are available for bulk B2B export enquiries."),
    ("How do I request a quote?", "How do I request a quote?"),
    ("You can contact us via our website, email, or phone with your shipment details.",
     "Share your product, quantity, packaging requirement and destination port by email or through the enquiry form."),

    # ---------- service / product names (nav, footer, cards) ----------
    ("Domestic &amp; Linehaul Transport", "Paper &amp; Packaging Materials"),
    ("Warehousing &amp; 3PL", "Psyllium"),
    ("Customs Brokerage", "Spices"),
    ("Air Freight", "Rice"),
    ("Ocean Freight", "Flours"),
    ("Project Cargo", "Packaging Products"),
    ("Freight Consolidation Programs", "Bulk Order Consolidation"),
    ("Cross-Docking &amp; Bypass", "Custom &amp; Private Label Packaging"),
    ("Trade Compliance Advisory", "Export Documentation Support"),
    ("Supply Chain Optimization", "Sourcing Coordination"),
    ("Quarterly Business Reviews", "Repeat Order Programs"),
    ("Freight &amp; Marine Insurance", "Shipment Coordination"),

    # ---------- industries list -> buyer types ----------
    ("Fashion &amp; Footwear", "Importers &amp; Distributors"),
    ("Medical &amp; Healthcare", "Wholesalers"),
    ("Technology &amp; Electronics", "Food Manufacturers"),
    ("Energy &amp; Renewables", "Food Service &amp; HORECA"),
    ("Automotive &amp; Industrial Equipment", "Trading Companies"),
    ("Mining &amp; Resources", "Packaging Buyers"),
    ("Building &amp; Construction", "FMCG Brands"),
    ("Engineering &amp; Manufacturing", "Private Label Brands"),
    ("Food &amp; Beverage", "Agro Processors"),
    ("Agriculture &amp; Commodities", "Agricultural Commodities"),

    # ---------- nav / commerce wording ----------
    ("Merchandises", "Products"),
    ("Merchandise", "Products"),
    ("merchandise", "products"),
    ("Your Cart", "Your Enquiry List"),
    ("PROCEED TO CHECKOUT", "SUBMIT ENQUIRY"),
    ("Estimated total", "Items selected"),
    ("Taxes and Shipping calculated at checkout.", "Pricing quoted after we review your requirement."),
    ("Buy now", "Request Quote"),
    ("Secure checkout powered by Stripe. Ships to AU &amp; NZ — tracking provided by StarshipIt.",
     "Available for bulk B2B export enquiries. Packaging can be discussed according to buyer requirements."),
    ("Inclusive of GST", "Bulk export enquiry"),
    ("This product is out of stock.", "Please share your required quantity."),
    ("Product is not available in this quantity.", "Please share your required quantity."),
    ("Quantity:", "Quantity required:"),
    ("Secure Payments", "Export Support"),
    ("Payments secured via PCI-DSS compliant gateway.", "Documentation and shipment coordination for every order."),
    ("Card details are not stored.", "Bulk B2B enquiries welcome."),
    ("All prices in AUD, inclusive of GST. Powered by Stripe.",
     "Agricultural Commodities | Rice | Flours | Spices | Psyllium | Packaging Products"),
    ("Crafted by", "Indian Exporter &amp; International Supplier."),
    ("Bearplus", ""),
    ("Email us", "Email our export team"),
    ("Carbon Calculator", "Product Catalogue"),
    ("Live Tracking Portal", "Request a Quote"),
    ("Connect with us:", "Export enquiries:"),

    # ---------- address / geography ----------
    ("Head Offfice", "Head Office"),
    ("2A International Square,", "Rajkot, Gujarat,"),
    ("Tullamarine VIC 3043, Australia.", "India."),
    ("Operating across", "Ports we ship from"),
    ("Monday - Friday / 8:30AM - 5PM", "Monday - Saturday / 10AM - 7PM IST"),
]

# Single words that must only be swapped after the long prose above.
LATE: list[tuple[str, str]] = [
    ("New Zealand", "Nhava Sheva"),
    ("Hong Kong", "Kandla"),
    ("Australia", "Mundra"),
    ("Vietnam", "Pipavav"),
    ("United States", "Hazira"),
    ("THAILAND", "INDIA"),
    ("Germany", "Kandla"),
    ("United Kingdom", "Mundra"),
    ("China", "Rajkot"),
    ("APAC", "international markets"),
]


def main() -> None:
    files = sorted(p for p in SITE.rglob("*.html") if "/app/" not in str(p))
    changed = 0
    for path in files:
        src = path.read_text(encoding="utf-8", errors="ignore")
        out = src
        for old, new in R:
            out = out.replace(old, new)
        for old, new in LATE:
            out = out.replace(old, new)
        if out != src:
            path.write_text(out, encoding="utf-8")
            changed += 1
    print(f"{changed}/{len(files)} pages rewritten")


if __name__ == "__main__":
    sys.exit(main())
