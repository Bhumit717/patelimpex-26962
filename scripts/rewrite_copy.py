"""Rewrite the imported logistics copy into Patel Impex import/export copy."""
import glob, re

# Ordered: longest / most specific first.
REPLACEMENTS = [
    # Hero + positioning
    ("Freight forwarding, land transport, and customs brokerage, unified across APAC under one accountable team.",
     "Sourcing, quality control, packing, documentation and shipping of Indian agro commodities, unified under one accountable team."),
    ("One operator", "One exporter"),
    ("We move freight. We own the outcome.", "We source, pack and ship. We own the outcome."),
    ("With every service under one roof and one accountable team, your supply chain moves the way your business demands: predictably, transparently, and without excuses.",
     "With sourcing, quality control, packing and shipping under one roof and one accountable team, your supply lines move predictably, transparently, and without excuses."),
    ("Everything your freight needs. Under one group.", "Everything your sourcing needs. Under one house."),
    ("From air to sea, from customs clearance to final delivery, we bring decades of expertise across every freight discipline.",
     "From farm-gate sourcing to customs clearance and final delivery, we bring years of expertise across every stage of agro commodity export."),
    ("Our integrated service network means one partner, one point of contact, and total visibility from origin to destination.",
     "Our integrated sourcing network means one partner, one point of contact, and total visibility from Indian origin to your port."),
    ("Your trusted partner for GLOBAL FREIGHT FORWARDING and LOGISTICS",
     "Your trusted partner for INDIAN AGRO COMMODITY EXPORT and SOURCING"),
    ("Your trusted partner in global freight forwarding and logistics — combining global reach, proven expertise, and the capability to deliver success across complex supply chains.",
     "Your trusted partner in Indian agro commodity export — combining sourcing reach, proven expertise, and the capability to deliver quality across international supply lines."),
    ("Trusted by importers, exporters, and global brands, Patel Impex works alongside clients to create clarity, control, and scalable supply chain solutions.",
     "Trusted by importers, distributors, wholesalers and food businesses, Patel Impex works alongside buyers to create clarity, control and scalable sourcing programs."),
    ("With teams across Australia, New Zealand, China, and Hong Kong, plus a global network spanning 100+ countries, we combine local expertise with international capability to move freight with precision and reliability.",
     "With teams in Rajkot, Mundra Port and Nhava Sheva, plus buyers across Asia, the Middle East, Africa, Europe and the Americas, we combine local sourcing expertise with international shipping capability."),
    ("International freight, customs brokerage, logistics, and domestic transport services",
     "Agro commodity sourcing, quality control, export documentation and shipping services"),
    ("Specialist solutions for project cargo, sensitive, industrial &amp; defence logistics.",
     "Specialist programs for rice, flours, spices, psyllium &amp; packaging sourcing."),
    ("Global Supply Chain Coverage", "Global Sourcing Coverage"),
    ("We deliver scalable freight and logistics solutions tailored to modern business demands — helping companies reduce delays, improve supply chain visibility, and move goods efficiently with confidence across domestic and global markets.",
     "We deliver scalable sourcing and export programs tailored to modern buyer demands — helping importers reduce delays, improve visibility, and secure consistent Indian agro commodities with confidence."),
    ("We enable global trade by delivering reliable logistics solutions and building efficient, robust and resilient supply chains for our clients.",
     "We enable global trade by delivering reliable Indian agro commodity sourcing and building efficient, robust and resilient supply lines for our buyers."),
    ("Complex shipments are handled with precision, even under tight deadlines and strict requirements",
     "Every consignment is handled with precision, even under tight deadlines and strict buyer requirements"),

    # Service names (nav, tickers, sections)
    ("Domestic &amp; Interstate Transport", "Inland Transport &amp; Port Handling"),
    ("Domestic &amp; Linehaul Transport", "Inland Transport &amp; Port Handling"),
    ("Warehousing and 3PL", "Packing &amp; Warehousing"),
    ("Warehousing &amp; 3PL", "Packing &amp; Warehousing"),
    ("Customs Brokerage", "Export Documentation"),
    ("Customs brokerage", "Export documentation"),
    ("Project Cargo", "Private Label &amp; Packaging"),
    ("Project cargo", "Private label &amp; packaging"),
    ("Air Freight", "Sourcing &amp; Procurement"),
    ("Air freight", "Sourcing &amp; procurement"),
    ("Ocean Freight", "Export Shipping"),
    ("Ocean freight", "Export shipping"),
    ("Freight Consolidation Programs", "Consolidated Container Programs"),
    ("Cross-Docking &amp; Bypass", "Packing &amp; Labelling Programs"),
    ("Freight &amp; Marine Insurance", "Cargo &amp; Marine Insurance"),
    ("Fast freight. No delays at altitude", "Reliable sourcing. No surprises at origin."),

    # Generic leftovers
    ("freight forwarding", "commodity export"),
    ("Freight forwarding", "Commodity export"),
    ("freight and logistics", "sourcing and export"),
    ("logistics solutions", "export solutions"),
    ("logistics services", "export services"),
    ("your freight", "your cargo"),
    ("Your freight", "Your cargo"),
    ("freight partner", "sourcing partner"),
    ("freight discipline", "export discipline"),
    ("Freight", "Export"),
    ("freight", "export"),
]

files = sorted(glob.glob('public/site/**/*.html', recursive=True))
changed = 0
for f in files:
    h = open(f).read()
    o = h
    for a, b in REPLACEMENTS:
        h = h.replace(a, b)
    if h != o:
        open(f, 'w').write(h)
        changed += 1
print('files changed:', changed, 'of', len(files))
leftover = 0
for f in files:
    leftover += len(re.findall(r'freight', open(f).read(), re.I))
print('remaining freight mentions:', leftover)
