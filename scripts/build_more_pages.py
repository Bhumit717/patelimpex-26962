#!/usr/bin/env python3
"""Generate the /more SEO hub: 1000 product x market export pages.

Output:
  public/site/more/_template.html   -> Webflow shell (nav, CTA, footer, scripts)
  public/site/more/pages/<slug>.json-> {title, description, h1, html}
  public/site/more/index.json       -> [{slug, title, product, country}]
  public/sitemap-more.xml           -> sitemap for the 1000 pages + hub
"""
import json
import os
import re
import html as htmllib

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SITE = os.path.join(ROOT, "public", "site")
OUT = os.path.join(SITE, "more")
PAGES = os.path.join(OUT, "pages")
SITE_URL = "https://patelimpex.com"

# --------------------------------------------------------------------------- data

PRODUCTS = [
    # (name, image slug, category, hs code, spec rows, packing, grades, shelf life)
    ("1121 Basmati Rice", "basmati-rice", "Rice", "1006.30",
     [("Average grain length", "8.30 mm - 8.40 mm (raw)"), ("Moisture", "12% max"),
      ("Broken grains", "1% - 2% max"), ("Damaged / discoloured", "0.5% max"),
      ("Purity", "95% min"), ("Crop", "Current year, aged 12-24 months on request")],
     ["Non-woven / PP bags 5, 10, 20, 25, 50 kg", "Jute bags 25 / 50 kg", "Consumer packs 1-10 kg with buyer artwork"],
     ["Raw", "Steam", "Golden Sella", "White Sella"], "24 months in original sealed packing"),
    ("1509 Basmati Rice", "basmati-rice", "Rice", "1006.30",
     [("Average grain length", "8.20 mm - 8.35 mm (raw)"), ("Moisture", "12% max"),
      ("Broken grains", "2% max"), ("Chalky grains", "2% max"),
      ("Purity", "95% min"), ("Crop", "Current season")],
     ["PP / BOPP bags 25, 50 kg", "Jute bags 25 / 50 kg", "Retail packs 1, 5, 10 kg"],
     ["Raw", "Steam", "Golden Sella", "White Sella"], "24 months"),
    ("Pusa Basmati Rice", "basmati-rice", "Rice", "1006.30",
     [("Average grain length", "7.80 mm - 8.20 mm"), ("Moisture", "12.5% max"),
      ("Broken grains", "2% max"), ("Foreign matter", "0.1% max"),
      ("Purity", "95% min"), ("Crop", "Current season")],
     ["PP bags 25 / 50 kg", "Jute bags 50 kg", "Private-label retail packs"],
     ["Raw", "Steam", "Sella"], "24 months"),
    ("Traditional Basmati Rice", "basmati-rice", "Rice", "1006.30",
     [("Average grain length", "7.20 mm - 7.60 mm"), ("Moisture", "12% max"),
      ("Aroma", "Strong natural pandan aroma"), ("Broken grains", "1% max"),
      ("Ageing", "12 - 24 months"), ("Purity", "95% min")],
     ["Jute bags 25 / 50 kg", "Non-woven bags 5 - 25 kg", "Gift and retail packs"],
     ["Raw", "Steam", "Golden Sella"], "24 months"),
    ("Sona Masoori Rice", "non-basmati-rice", "Rice", "1006.30",
     [("Grain type", "Medium slender, non-basmati"), ("Moisture", "13% max"),
      ("Broken grains", "5% max"), ("Polish", "Single / double polished"),
      ("Foreign matter", "0.5% max"), ("Crop", "Current season")],
     ["PP bags 10, 25, 50 kg", "Jute bags 50 kg", "Retail packs 5 / 10 / 20 lb"],
     ["Raw", "Steam", "Parboiled"], "18 months"),
    ("IR 64 Parboiled Rice", "non-basmati-rice", "Rice", "1006.30",
     [("Broken grains", "5% / 25% / 100% options"), ("Moisture", "14% max"),
      ("Grain length", "6.20 mm - 6.60 mm"), ("Chalky grains", "3% max"),
      ("Damaged grains", "2% max"), ("Crop", "Current season")],
     ["PP bags 25 / 50 kg", "Jumbo bags 1000 kg", "Bulk in liner-fitted containers"],
     ["5% broken", "25% broken", "100% broken"], "18 months"),
    ("Swarna Non-Basmati Rice", "non-basmati-rice", "Rice", "1006.30",
     [("Grain type", "Short-medium bold"), ("Moisture", "14% max"),
      ("Broken grains", "5% max"), ("Foreign matter", "0.5% max"),
      ("Damaged grains", "2% max"), ("Crop", "Current season")],
     ["PP bags 25 / 50 kg", "Jute bags 50 kg", "Jumbo bags on request"],
     ["Raw", "Parboiled"], "18 months"),
    ("Ponni Rice", "non-basmati-rice", "Rice", "1006.30",
     [("Grain type", "Medium slender"), ("Moisture", "13.5% max"),
      ("Broken grains", "5% max"), ("Polish", "Double polished"),
      ("Purity", "95% min"), ("Crop", "Current season")],
     ["PP bags 10 / 25 / 50 kg", "Retail packs 5 - 20 kg"],
     ["Raw", "Boiled", "Steam"], "18 months"),
    ("Broken Rice", "non-basmati-rice", "Rice", "1006.40",
     [("Broken percentage", "100%"), ("Moisture", "14% max"),
      ("Foreign matter", "1% max"), ("Use", "Food, brewing and feed grades"),
      ("Admixture", "As per contract"), ("Crop", "Current season")],
     ["PP bags 50 kg", "Jumbo bags 1000 kg", "Bulk liner bags"],
     ["Food grade", "Brewery grade", "Feed grade"], "12 months"),
    ("Whole Wheat Flour (Chakki Atta)", "whole-wheat-flour", "Flour & Milled", "1101.00",
     [("Moisture", "13% max"), ("Protein", "10% - 12%"), ("Ash content", "1.5% max"),
      ("Gluten", "8% min"), ("Granulation", "Stone-ground chakki"), ("Additives", "None")],
     ["PP / paper bags 5, 10, 25, 50 kg", "Retail packs 1 - 10 kg", "Buyer-branded pouches"],
     ["Chakki atta", "Multigrain atta", "High-protein atta"], "6 months"),
    ("Tandoori Atta", "tandoori-atta", "Flour & Milled", "1101.00",
     [("Moisture", "13% max"), ("Protein", "11% min"), ("Ash content", "1.2% max"),
      ("Texture", "Fine, high water absorption"), ("Gluten", "9% min"), ("Additives", "None")],
     ["PP bags 25 / 50 kg", "Retail packs 1 - 10 kg"],
     ["Standard", "Bakery grade"], "6 months"),
    ("Semolina (Suji)", "suji", "Flour & Milled", "1103.11",
     [("Moisture", "13.5% max"), ("Granulation", "Coarse / medium / fine"),
      ("Ash content", "0.8% max"), ("Protein", "10% min"),
      ("Colour", "Creamy white"), ("Additives", "None")],
     ["PP bags 25 / 50 kg", "Retail packs 500 g - 5 kg"],
     ["Fine suji", "Coarse suji", "Bansi suji"], "9 months"),
    ("Rawa", "rawa", "Flour & Milled", "1103.11",
     [("Moisture", "13.5% max"), ("Granulation", "Medium"), ("Ash content", "0.9% max"),
      ("Protein", "10% min"), ("Colour", "Uniform cream"), ("Additives", "None")],
     ["PP bags 25 / 50 kg", "Retail packs 500 g - 5 kg"],
     ["Idli rawa", "Bombay rawa", "Roasted rawa"], "9 months"),
    ("Gram Flour (Besan)", "besan", "Flour & Milled", "1106.10",
     [("Moisture", "10% max"), ("Protein", "20% min"), ("Ash content", "3% max"),
      ("Mesh", "60 - 100 mesh"), ("Colour", "Natural pale yellow"), ("Additives", "None")],
     ["PP / paper bags 25 / 50 kg", "Retail packs 500 g - 5 kg"],
     ["Chana besan", "Kabuli besan", "Bakery besan"], "6 months"),
    ("Corn Flour", "corn-flour", "Flour & Milled", "1102.20",
     [("Moisture", "12% max"), ("Starch", "85% min"), ("Ash content", "0.5% max"),
      ("Mesh", "100 mesh"), ("Colour", "White / yellow"), ("Additives", "None")],
     ["PP bags 25 / 50 kg", "Retail packs 500 g - 5 kg"],
     ["White", "Yellow", "Food grade starch"], "12 months"),
    ("Maida (Refined Wheat Flour)", "whole-wheat-flour", "Flour & Milled", "1101.00",
     [("Moisture", "13% max"), ("Protein", "9% - 11%"), ("Ash content", "0.55% max"),
      ("Wet gluten", "26% min"), ("Colour", "Bright white"), ("Additives", "None")],
     ["PP / paper bags 25 / 50 kg", "Retail packs 1 - 10 kg"],
     ["Bakery grade", "Confectionery grade"], "6 months"),
    ("Turmeric Powder", "turmeric-powder", "Spices", "0910.30",
     [("Curcumin", "2% - 5%"), ("Moisture", "8% max"), ("Total ash", "7% max"),
      ("Mesh", "60 - 80 mesh"), ("Colour value", "180 - 250 ASTA"), ("Additives", "None")],
     ["Multiwall paper bags 25 kg", "PP / HDPE bags 25 / 50 kg", "Retail packs 100 g - 1 kg"],
     ["Salem", "Erode", "Nizamabad", "Organic"], "24 months"),
    ("Turmeric Fingers", "turmeric", "Spices", "0910.30",
     [("Curcumin", "3% - 5%"), ("Moisture", "9% max"), ("Finger length", "25 - 40 mm"),
      ("Foreign matter", "1% max"), ("Polish", "Single / double polished"), ("Additives", "None")],
     ["Jute / PP bags 25 / 50 kg", "Jumbo bags on request"],
     ["Salem", "Erode", "Alleppey", "Organic"], "24 months"),
    ("Cumin Seeds", "cumin-seeds", "Spices", "0909.31",
     [("Purity", "99% / 99.5%"), ("Moisture", "8% max"), ("Volatile oil", "2.5% min"),
      ("Admixture", "1% max"), ("Origin", "Unjha, Gujarat"), ("Sortex", "Machine cleaned / sortexed")],
     ["PP / jute bags 25 kg", "Vacuum packs on request", "Retail packs 100 g - 1 kg"],
     ["Europe quality 99%", "Singapore quality 99%", "Sortexed 99.5%", "Organic"], "24 months"),
    ("Cumin Powder", "cumin-seeds", "Spices", "0909.32",
     [("Moisture", "9% max"), ("Total ash", "9.5% max"), ("Volatile oil", "1.5% min"),
      ("Mesh", "60 mesh"), ("Colour", "Light brown"), ("Additives", "None")],
     ["Multiwall paper bags 25 kg", "PP bags 25 kg", "Retail packs 100 g - 1 kg"],
     ["Standard", "Steam sterilised", "Organic"], "18 months"),
    ("Fennel Seeds", "fennel-seeds", "Spices", "0909.61",
     [("Purity", "98% - 99%"), ("Moisture", "9% max"), ("Volatile oil", "1.5% min"),
      ("Colour", "Bright green"), ("Origin", "Unjha, Gujarat"), ("Sortex", "Sortexed available")],
     ["PP / jute bags 25 kg", "Retail packs 100 g - 1 kg"],
     ["Singapore quality", "Europe quality", "Sortexed green", "Organic"], "24 months"),
    ("Fenugreek Seeds", "fenugreek-seeds", "Spices", "0910.99",
     [("Purity", "99% min"), ("Moisture", "9% max"), ("Foreign matter", "1% max"),
      ("Colour", "Golden yellow"), ("Sortex", "Sortexed available"), ("Origin", "Rajasthan / Gujarat")],
     ["PP / jute bags 25 / 50 kg", "Retail packs 100 g - 1 kg"],
     ["Machine cleaned", "Sortexed", "Organic"], "24 months"),
    ("Coriander Seeds", "coriander-seeds", "Spices", "0909.21",
     [("Purity", "98% - 99%"), ("Moisture", "9% max"), ("Splits", "2% max"),
      ("Colour", "Green / yellow"), ("Volatile oil", "0.3% min"), ("Origin", "Gujarat / Rajasthan")],
     ["PP / jute bags 25 / 40 kg", "Retail packs 100 g - 1 kg"],
     ["Eagle", "Scooter", "Badami", "Organic"], "24 months"),
    ("Coriander Powder", "coriander-powder", "Spices", "0909.22",
     [("Moisture", "10% max"), ("Total ash", "7% max"), ("Mesh", "60 mesh"),
      ("Colour", "Natural green-brown"), ("Volatile oil", "0.2% min"), ("Additives", "None")],
     ["Multiwall paper bags 25 kg", "PP bags 25 kg", "Retail packs 100 g - 1 kg"],
     ["Standard", "Steam sterilised", "Organic"], "18 months"),
    ("Red Chilli Powder", "red-chilli-powder", "Spices", "0904.22",
     [("Colour value", "60 - 150 ASTA"), ("Pungency", "5,000 - 50,000 SHU"),
      ("Moisture", "10% max"), ("Total ash", "8% max"), ("Mesh", "40 - 60 mesh"), ("Additives", "None")],
     ["Multiwall paper bags 25 kg", "PP bags 25 kg", "Retail packs 100 g - 1 kg"],
     ["Teja", "Sannam S4", "Byadgi", "Kashmiri"], "18 months"),
    ("Dried Red Chilli", "red-chilli", "Spices", "0904.21",
     [("Moisture", "10% max"), ("Pod length", "5 - 12 cm"), ("Broken pods", "3% max"),
      ("Pungency", "8,000 - 90,000 SHU"), ("Stem", "With / without stem"), ("Origin", "Guntur / Byadgi")],
     ["Jute / PP bags 25 / 40 kg", "Compressed cartons 20 kg"],
     ["Teja S17", "Sannam S4", "Byadgi", "Wrinkle 334"], "18 months"),
    ("Black Pepper", "black-pepper", "Spices", "0904.11",
     [("Density", "500 - 550 g/l"), ("Moisture", "12% max"), ("Light berries", "2% max"),
      ("Volatile oil", "2% min"), ("Piperine", "3% min"), ("Origin", "Kerala / Karnataka")],
     ["Jute / PP bags 25 / 50 kg", "Vacuum packs on request"],
     ["MG1", "550 G/L", "Garbled", "Organic"], "24 months"),
    ("Black Pepper Powder", "black-pepper-powder", "Spices", "0904.12",
     [("Moisture", "12% max"), ("Total ash", "6% max"), ("Piperine", "2.5% min"),
      ("Mesh", "40 - 60 mesh"), ("Volatile oil", "1.5% min"), ("Additives", "None")],
     ["Paper bags 20 / 25 kg", "Retail packs 100 g - 1 kg"],
     ["Standard", "Steam sterilised"], "18 months"),
    ("White Pepper Powder", "white-pepper-powder", "Spices", "0904.12",
     [("Moisture", "12% max"), ("Total ash", "3.5% max"), ("Piperine", "2% min"),
      ("Mesh", "60 mesh"), ("Colour", "Creamy white"), ("Additives", "None")],
     ["Paper bags 20 / 25 kg", "Retail packs 100 g - 1 kg"],
     ["Standard", "Steam sterilised"], "18 months"),
    ("Garlic Powder", "garlic-powder", "Spices", "0712.90",
     [("Moisture", "6% max"), ("Total ash", "5% max"), ("Mesh", "80 - 100 mesh"),
      ("Colour", "Off-white"), ("Allicin", "Natural"), ("Additives", "None")],
     ["Paper bags 20 / 25 kg", "Retail packs 100 g - 1 kg"],
     ["Powder", "Granules", "Flakes"], "18 months"),
    ("Dry Ginger Powder", "dry-ginger-powder", "Spices", "0910.12",
     [("Moisture", "10% max"), ("Total ash", "6% max"), ("Volatile oil", "1.5% min"),
      ("Mesh", "60 - 80 mesh"), ("Fibre", "Low fibre"), ("Origin", "Kerala / Karnataka")],
     ["Paper bags 25 kg", "Retail packs 100 g - 1 kg"],
     ["Standard", "Sterilised", "Organic"], "18 months"),
    ("Dry Mango Powder (Amchur)", "dry-mango-powder", "Spices", "0910.99",
     [("Moisture", "8% max"), ("Acidity", "Natural high"), ("Mesh", "60 mesh"),
      ("Colour", "Light beige"), ("Total ash", "3% max"), ("Additives", "None")],
     ["Paper bags 20 / 25 kg", "Retail packs 100 g - 1 kg"],
     ["Standard", "Premium"], "12 months"),
    ("Clove Powder", "clove-powder", "Spices", "0907.20",
     [("Moisture", "10% max"), ("Volatile oil", "12% min"), ("Total ash", "6% max"),
      ("Mesh", "40 - 60 mesh"), ("Colour", "Dark brown"), ("Additives", "None")],
     ["Paper bags 20 kg", "Retail packs 100 g - 1 kg"],
     ["Standard", "Sterilised"], "18 months"),
    ("Nutmeg Powder", "nutmeg-powder", "Spices", "0908.12",
     [("Moisture", "8% max"), ("Volatile oil", "6% min"), ("Total ash", "3% max"),
      ("Mesh", "60 mesh"), ("Colour", "Light brown"), ("Additives", "None")],
     ["Paper bags 20 kg", "Retail packs 100 g - 1 kg"],
     ["Standard", "Sterilised"], "18 months"),
    ("Mustard Seeds", "mustard-seeds", "Spices", "1207.50",
     [("Purity", "99% min"), ("Moisture", "8% max"), ("Oil content", "38% min"),
      ("Admixture", "1% max"), ("Colour", "Black / yellow"), ("Origin", "Rajasthan / Gujarat")],
     ["PP / jute bags 25 / 50 kg", "Retail packs 100 g - 1 kg"],
     ["Black mustard", "Yellow mustard", "Sortexed"], "24 months"),
    ("Garam Masala", "garam-masala", "Spices", "0910.91",
     [("Moisture", "9% max"), ("Total ash", "8% max"), ("Mesh", "60 mesh"),
      ("Blend", "House or buyer recipe"), ("Colour", "Deep brown"), ("Additives", "None")],
     ["Paper bags 20 kg", "Retail packs 50 g - 1 kg", "Private-label pouches"],
     ["Standard blend", "Punjabi blend", "Custom recipe"], "18 months"),
    ("Psyllium Husk", "psyllium", "Psyllium", "1211.90",
     [("Purity", "95% / 98% / 99%"), ("Moisture", "10% max"), ("Swell volume", "40 ml min"),
      ("Mesh", "40 mesh"), ("Colour", "Off-white to light cream"), ("Origin", "Unjha, Gujarat")],
     ["Compressed bales 20 - 25 kg", "PP bags with liner 20 kg", "Cartons for pharma grade"],
     ["95%", "98%", "99%", "Organic"], "24 months"),
    ("Psyllium Husk Powder", "psyllium", "Psyllium", "1211.90",
     [("Mesh", "60 / 80 / 100 mesh"), ("Moisture", "10% max"), ("Purity", "95% min"),
      ("Swell volume", "40 ml min"), ("Colour", "Off-white"), ("Grade", "Food / pharma")],
     ["Fibre drums 20 - 25 kg", "PP bags with liner 25 kg"],
     ["Food grade", "Pharma grade", "Organic"], "24 months"),
    ("Psyllium Seeds", "psyllium", "Psyllium", "1211.90",
     [("Purity", "98% min"), ("Moisture", "10% max"), ("Swell volume", "12 ml min"),
      ("Foreign matter", "1% max"), ("Colour", "Pinkish brown"), ("Origin", "Gujarat / Rajasthan")],
     ["PP bags 25 / 50 kg", "Jumbo bags on request"],
     ["Machine cleaned", "Sortexed", "Organic"], "24 months"),
    ("Psyllium Industrial Husk", "psyllium", "Psyllium", "1211.90",
     [("Purity", "85% - 90%"), ("Moisture", "10% max"), ("Use", "Industrial / technical"),
      ("Mesh", "40 mesh"), ("Colour", "Light brown"), ("Origin", "Unjha, Gujarat")],
     ["Compressed bales 25 kg", "PP bags 20 kg"],
     ["85%", "90%"], "24 months"),
    ("Sesame Seeds", "coriander-seeds", "Oilseeds", "1207.40",
     [("Purity", "99% / 99.95%"), ("Moisture", "6% max"), ("Oil content", "48% min"),
      ("FFA", "2% max"), ("Colour", "Natural white / hulled"), ("Origin", "Gujarat")],
     ["PP bags 25 / 50 kg", "Jumbo bags 1000 kg"],
     ["Natural 99%", "Hulled 99.95%", "Black sesame", "Organic"], "18 months"),
    ("Groundnut Kernels", "coriander-seeds", "Oilseeds", "1202.42",
     [("Counts", "38/42, 50/60, 60/70, 70/80"), ("Moisture", "8% max"),
      ("Admixture", "1% max"), ("Aflatoxin", "As per destination limit"),
      ("Oil content", "48% min"), ("Origin", "Saurashtra, Gujarat")],
     ["Jute / PP bags 25 / 50 kg", "Vacuum packs 25 kg on request"],
     ["Java (Bold)", "Bold 40/50", "TJ counts", "Blanched"], "12 months"),
    ("Flexible Packaging Pouches", "packaging-pouches", "Packaging", "3923.21",
     [("Structure", "PET / MET-PET / PE laminate"), ("Thickness", "60 - 160 micron"),
      ("Formats", "Stand-up, centre-seal, three-side seal"),
      ("Print", "Rotogravure up to 8 colours"), ("Features", "Zipper, spout, valve, tear notch"),
      ("MOQ", "10,000 pouches per SKU")],
     ["Cartons of 1,000 - 5,000 pcs", "Palletised export cartons"],
     ["Food grade", "Retort", "Barrier / high-barrier"], "Not applicable"),
    ("Printed Laminated Rolls", "packaging-pouches", "Packaging", "3920.62",
     [("Web width", "Up to 1,000 mm"), ("Thickness", "50 - 150 micron"),
      ("Print", "Rotogravure, 8 colours"), ("Core", "76 mm"),
      ("Structures", "PET/PE, BOPP/CPP, PET/AL/PE"), ("MOQ", "500 kg per design")],
     ["Shrink-wrapped rolls on pallets", "Export cartons"],
     ["Food grade", "Barrier", "Retort"], "Not applicable"),
    ("Corrugated Export Boxes", "packaging-boxes", "Packaging", "4819.10",
     [("Ply", "3 / 5 / 7 ply"), ("Bursting strength", "8 - 20 kg/cm2"),
      ("Board", "Kraft 120 - 180 GSM"), ("Print", "Flexo / offset laminated"),
      ("Sizes", "Made to buyer drawing"), ("MOQ", "1,000 boxes")],
     ["Flat-packed bundles", "Palletised and strapped"],
     ["Regular slotted", "Die-cut", "Heavy duty"], "Not applicable"),
    ("Kraft Paper Bags", "packaging-paper", "Packaging", "4819.30",
     [("Paper", "70 - 120 GSM virgin kraft"), ("Plies", "2 / 3 / 4 ply"),
      ("Capacity", "1 - 25 kg"), ("Print", "Flexo up to 4 colours"),
      ("Options", "PE liner, valve, gusset"), ("MOQ", "10,000 bags")],
     ["Bundles of 250 / 500 bags", "Export cartons on pallets"],
     ["Open mouth", "Valve", "Block bottom"], "Not applicable"),
    ("Woven PP Bags", "packaging-boxes", "Packaging", "6305.33",
     [("GSM", "60 - 120 GSM"), ("Mesh", "8x8 to 12x12"), ("Capacity", "5 - 50 kg"),
      ("Lamination", "BOPP / PP laminated"), ("Print", "Up to 6 colours"), ("MOQ", "20,000 bags")],
     ["Bales of 500 / 1,000 bags", "Palletised"],
     ["Laminated", "Unlaminated", "BOPP printed"], "Not applicable"),
    ("Food Grade Barrier Films", "packaging-paper", "Packaging", "3920.20",
     [("Type", "BOPP, CPP, MET-BOPP, PET"), ("Thickness", "12 - 80 micron"),
      ("OTR / WVTR", "Low to ultra-low"), ("Width", "Up to 1,250 mm"),
      ("Treatment", "Corona both sides optional"), ("MOQ", "1,000 kg")],
     ["Rolls on pallets", "Shrink wrapped"],
     ["Plain", "Metallised", "High barrier"], "Not applicable"),
    ("Jute Bags", "packaging-boxes", "Packaging", "6305.10",
     [("Fabric", "B-Twill / food grade hessian"), ("Capacity", "25 / 50 kg"),
      ("Weight", "580 - 1,020 g per bag"), ("Treatment", "Batching-oil free (food safe)"),
      ("Print", "Screen printed"), ("MOQ", "5,000 bags")],
     ["Bales of 300 / 500 bags", "Palletised"],
     ["Food grade", "Standard", "Laminated"], "Not applicable"),
    ("Shrink & Stretch Films", "packaging-paper", "Packaging", "3920.10",
     [("Type", "LDPE shrink, LLDPE stretch"), ("Thickness", "15 - 100 micron"),
      ("Width", "100 - 1,500 mm"), ("Stretch", "Up to 300%"),
      ("Colour", "Clear / black / printed"), ("MOQ", "1,000 kg")],
     ["Rolls on pallets", "Export cartons"],
     ["Hand grade", "Machine grade", "Shrink hood"], "Not applicable"),
]

MARKETS = [
    ("UAE", "uae", "Jebel Ali", "7 - 10 days", "ESMA registration and Arabic/English bilingual labels; halal declaration where applicable."),
    ("Saudi Arabia", "saudi-arabia", "Jeddah / Dammam", "10 - 14 days", "SABER / SFDA product registration and a Saudi Conformity Certificate before shipment."),
    ("Oman", "oman", "Sohar / Salalah", "6 - 9 days", "GSO conformity marking and Arabic ingredient labelling."),
    ("Qatar", "qatar", "Hamad Port", "8 - 12 days", "Qatar General Organization for Standards approval and legalised invoices."),
    ("Kuwait", "kuwait", "Shuwaikh", "10 - 14 days", "KUCAS technical inspection report issued before shipment."),
    ("United Kingdom", "uk", "Felixstowe / Southampton", "20 - 26 days", "UK food-safety compliance, GB labelling and an FSA-compliant importer address."),
    ("United States", "usa", "New York / Los Angeles", "26 - 35 days", "FDA registration, prior notice filing, FSVP importer and Nutrition Facts labelling."),
    ("Canada", "canada", "Montreal / Vancouver", "28 - 38 days", "CFIA SFCR licence, bilingual English/French labels and a preventive control plan."),
    ("Germany", "germany", "Hamburg", "20 - 27 days", "EU pesticide MRL compliance, EORI number and German-language labelling."),
    ("Netherlands", "netherlands", "Rotterdam", "19 - 25 days", "EU border control post clearance with certificate of analysis at entry."),
    ("France", "france", "Le Havre / Marseille", "18 - 24 days", "EU MRL compliance and French labelling with the importer's contact block."),
    ("Italy", "italy", "Genoa / Gioia Tauro", "16 - 22 days", "EU health documentation and Italian-language commercial labels."),
    ("Spain", "spain", "Valencia / Barcelona", "17 - 23 days", "EU compliance file plus Spanish labelling and lot traceability."),
    ("Australia", "australia", "Melbourne / Sydney", "18 - 24 days", "Biosecurity import permit, fumigation certificate and country-of-origin labelling."),
    ("New Zealand", "new-zealand", "Auckland / Tauranga", "22 - 28 days", "MPI biosecurity clearance and treatment certification for plant products."),
    ("South Africa", "south-africa", "Durban", "14 - 20 days", "NRCS / DAFF import permit and a phytosanitary certificate."),
    ("Kenya", "kenya", "Mombasa", "12 - 16 days", "KEBS PVoC certificate of conformity issued before loading."),
    ("Nigeria", "nigeria", "Lagos (Apapa / Tin Can)", "22 - 30 days", "SONCAP certificate and NAFDAC registration for packaged food."),
    ("Singapore", "singapore", "Singapore", "10 - 14 days", "SFA import licence and per-consignment declaration."),
    ("Malaysia", "malaysia", "Port Klang", "12 - 16 days", "FoSIM declaration, halal certification where required and Bahasa labelling."),
]


def slugify(text):
    return re.sub(r"(^-|-$)", "", re.sub(r"[^a-z0-9]+", "-", text.lower()))


def esc(text):
    return htmllib.escape(text, quote=False)


# --------------------------------------------------------------------------- content

def build_body(product, market, related_same_product, related_same_market):
    name, img, category, hs, specs, packs, grades, shelf = product
    country, cslug, port, transit, compliance = market
    p = esc(name)
    c = esc(country)

    spec_rows = "".join(
        f"<tr><td style=\"padding:0.8rem 1.2rem;border-bottom:1px solid rgba(0,0,0,0.08);width:42%;\"><strong>{esc(k)}</strong></td>"
        f"<td style=\"padding:0.8rem 1.2rem;border-bottom:1px solid rgba(0,0,0,0.08);\">{esc(v)}</td></tr>"
        for k, v in specs
    )
    pack_items = "".join(f"<li>{esc(x)}</li>" for x in packs)
    grade_items = "".join(f"<li>{esc(x)}</li>" for x in grades)

    faqs = [
        (f"What is the minimum order quantity for {name} to {country}?",
         f"For bagged consignments we start at one 20 ft container, which typically holds 18 - 20 MT of {name.lower()} depending on the packing you choose. "
         f"Buyers in {country} testing a new label often begin with a mixed container combining {name.lower()} with another Patel Impex line to keep freight cost per kilo low."),
        (f"Which documents travel with a {name} shipment to {country}?",
         f"Every consignment leaves Gujarat with a commercial invoice, packing list, bill of lading, certificate of origin, phytosanitary certificate where the commodity requires one, "
         f"a third-party certificate of analysis and any {country}-specific paperwork. {compliance}"),
        (f"How long does shipping take from India to {country}?",
         f"Transit from Mundra or Kandla to {port} runs about {transit} on direct services, plus roughly 5 - 7 working days for production, quality clearance, stuffing and documentation before the vessel sails."),
        ("Can we buy under our own brand?",
         f"Yes. We handle private-label {name.lower()} with buyer artwork, destination-compliant declarations, barcodes and batch coding. Artwork is proofed and approved digitally before any print run starts."),
        ("What payment terms do you offer?",
         "We work on advance TT, irrevocable letter of credit at sight and, for repeat buyers with an established track record, documents against payment. Terms are quoted per contract along with FOB, CFR or CIF pricing."),
        ("How is quality verified before shipment?",
         f"Each lot is sampled at intake and again after packing. We test moisture, foreign matter, microbiology and pesticide residues against the limits that apply in {country}, "
         "and we are happy to appoint SGS, Bureau Veritas or Intertek for pre-shipment inspection at the buyer's request."),
    ]
    faq_html = "".join(f"<h3 style=\"margin:2rem 0 0.6rem;font-weight:600;\">{esc(q)}</h3><p>{esc(a)}</p>" for q, a in faqs)

    rel_prod = "".join(
        f'<li><a href="/more/{s}">{esc(t)}</a></li>' for s, t in related_same_product)
    rel_mkt = "".join(
        f'<li><a href="/more/{s}">{esc(t)}</a></li>' for s, t in related_same_market)

    return f"""
<p>Patel Impex supplies <strong>{p}</strong> from Veraval (Shapar), Rajkot, Gujarat to importers, distributors, repackers and food manufacturers across {c}.
We buy at the source in India's producing belts, process and pack to the specification the buyer signs off, and ship through Mundra and Kandla so every container leaves with the same documentation set and the same quality file.</p>
<p>This page covers everything a buyer in {c} needs before placing an order: technical specification, available grades, packing formats, quality controls, the paperwork customs will ask for, realistic transit times and the factors that move the price. If your requirement sits outside what is listed, send us the specification and we will quote against it.</p>

<p><img src="/images/products/{img}.jpg" alt="{p} for export from India to {c}" loading="lazy" style="width:100%;max-height:38rem;object-fit:cover;border-radius:0.8rem;margin:1.6rem 0;" /></p>

<h2 class="heading h4" style="margin:3.2rem 0 1.2rem;">Why buyers in {c} source {p} from India</h2>
<p>India is the volume origin for {category.lower()} of this type, and that scale is what keeps pricing workable for a {c} importer buying container loads rather than pallets. Three things matter in practice:</p>
<ul role="list">
<li><strong>Consistent origin.</strong> We work with the same growing regions and processing partners season after season, so the lot you approve in March behaves like the lot you receive in September.</li>
<li><strong>Specification control.</strong> Cleaning, grading, sortex, sieving and (where relevant) steam sterilisation are set to the destination's limits before packing, not corrected afterwards.</li>
<li><strong>Documented traceability.</strong> Every bag carries a lot code that ties back to intake, processing date, test results and the container it shipped in - what a {c} audit or recall drill will ask for.</li>
<li><strong>One counterpart.</strong> Sourcing, processing, packing, inspection, freight booking and documentation sit with one team, so there is no gap between the supplier and the forwarder.</li>
</ul>

<h2 class="heading h4" style="margin:3.2rem 0 1.2rem;">{p} technical specification</h2>
<div style="overflow-x:auto;margin:1.2rem 0 2rem;"><table style="width:100%;border-collapse:collapse;font-size:1.4rem;">
<tbody>{spec_rows}
<tr><td style="padding:0.8rem 1.2rem;border-bottom:1px solid rgba(0,0,0,0.08);"><strong>HS code</strong></td><td style="padding:0.8rem 1.2rem;border-bottom:1px solid rgba(0,0,0,0.08);">{esc(hs)}</td></tr>
<tr><td style="padding:0.8rem 1.2rem;border-bottom:1px solid rgba(0,0,0,0.08);"><strong>Shelf life</strong></td><td style="padding:0.8rem 1.2rem;border-bottom:1px solid rgba(0,0,0,0.08);">{esc(shelf)}</td></tr>
<tr><td style="padding:0.8rem 1.2rem;"><strong>Loading port</strong></td><td style="padding:0.8rem 1.2rem;">Mundra / Kandla, Gujarat, India</td></tr>
</tbody></table></div>
<p>Values above are the standard export specification. Tighter tolerances are available on contract - buyers supplying industrial bakeries, spice blenders and pharmaceutical customers in {c} routinely ask us to hold a narrower moisture or mesh band, and we quote that as a distinct grade rather than shipping against a general specification.</p>

<h2 class="heading h4" style="margin:3.2rem 0 1.2rem;">Grades we ship to {c}</h2>
<ul role="list">{grade_items}</ul>
<p>If your {c} customers sit across more than one price point, we can run two or three grades in the same container with separate lot codes and separate certificates of analysis, so retail and food-service volumes move on one bill of lading.</p>

<h2 class="heading h4" style="margin:3.2rem 0 1.2rem;">Packing and container loading</h2>
<ul role="list">{pack_items}</ul>
<p>Standard export packing is palletised and stretch-wrapped, with desiccant and container liners on request for the humidity a {port} discharge can involve. A 20 ft container carries roughly 18 - 20 MT in bags; a 40 ft high cube is used where volume rather than weight is the constraint, which is common for bulky or light-density lines. Palletised loading is available where your {c} warehouse handles forklifts only.</p>

<h2 class="heading h4" style="margin:3.2rem 0 1.2rem;">Quality control and certification</h2>
<p>Quality is checked three times: at intake, in process and after packing. Raw material is rejected at intake if moisture or foreign matter is out of band - it is far cheaper than reworking a finished lot.
Finished goods are tested for the parameters listed above plus microbiology and pesticide residues where the commodity and destination require it, and a certificate of analysis travels with every shipment.</p>
<p>We operate to FSSAI registration in India and support APEDA and Spices Board documentation, ISO 22000 and HACCP-aligned processing partners, halal and kosher certification on request, and organic certification for the lines where it is offered. Third-party pre-shipment inspection by SGS, Bureau Veritas or Intertek can be arranged and is billed at cost.</p>

<h2 class="heading h4" style="margin:3.2rem 0 1.2rem;">Export documentation for {c}</h2>
<p>{esc(compliance)} Alongside destination paperwork, each shipment carries the commercial invoice, packing list with lot-level detail, bill of lading or airway bill, certificate of origin, phytosanitary certificate where applicable, fumigation certificate where the packing requires it, insurance certificate on CIF terms and the certificate of analysis.
We send the full draft set for your approval before the originals are couriered, which is the simplest way to avoid a demurrage bill at {port}.</p>

<h2 class="heading h4" style="margin:3.2rem 0 1.2rem;">Shipping and lead time</h2>
<p>Production and quality clearance take about 5 - 7 working days for stock grades and 10 - 15 days where a custom specification or printed private-label packing is involved.
Sea transit from Mundra or Kandla to {port} is typically {transit} on direct services, longer where the routing transships. Air freight is practical for samples and for pharma-grade or high-value spice lots.
We quote FOB, CFR and CIF, and can work with your nominated forwarder in {c} if you prefer to control the freight leg yourself.</p>

<h2 class="heading h4" style="margin:3.2rem 0 1.2rem;">What moves the price</h2>
<p>Four things: the crop position in the producing belt, the grade and tolerance you specify, the packing format, and the freight rate on the India - {c} lane at the time of booking.
Because these move independently, our quotes are valid for a defined window and state the grade, packing, Incoterm and payment terms explicitly. For programme buyers we hold seasonal contracts that fix the specification and the price band for an agreed volume, which removes most of the volatility from your landed cost.</p>

<h2 class="heading h4" style="margin:3.2rem 0 1.2rem;">How to order</h2>
<p>Send us the product, grade, quantity, packing and delivery port. We reply with a written quotation, a specification sheet and a sample dispatch where you need one. Once the specification is approved we confirm the contract, produce, inspect, stuff and ship - with progress updates at each stage and full document scans before the vessel sails. <a href="/contact">Contact Patel Impex</a> or call +91 99748 73171 to start.</p>

<h2 class="heading h4" style="margin:3.2rem 0 1.2rem;">Frequently asked questions</h2>
{faq_html}

<h2 class="heading h4" style="margin:3.2rem 0 1.2rem;">Related {p} export destinations</h2>
<ul role="list">{rel_prod}</ul>

<h2 class="heading h4" style="margin:3.2rem 0 1.2rem;">Other products we export to {c}</h2>
<ul role="list">{rel_mkt}</ul>
<p>See the full catalogue on <a href="/what-we-serve">what we serve</a> or read more about <a href="/about">Patel Impex</a>.</p>
"""


# --------------------------------------------------------------------------- template

def build_template():
    src = open(os.path.join(SITE, "qhse.html"), encoding="utf-8").read()
    start = src.index('<section data-init-hidden="" class="terms-main">')
    end_marker = '</section></div><div data-cursor="link" data-section="dark"'
    end = src.index(end_marker, start)
    shell = """<section data-init-hidden="" class="terms-main"><div class="terms-main-head"><div class="w-layout-blockcontainer container grid w-container"><div class="qhse-main-title"><h1 class="heading h3 h2-mb">__PAGE_TITLE__</h1></div></div></div><div class="terms-main-divider"></div><div class="terms-main-body"><div class="w-layout-blockcontainer container grid w-container"><div class="qhse-main-content"><div class="policy-main-content-text w-richtext">__PAGE_BODY__</div></div></div></div>"""
    return src[:start] + shell + src[end:]


# --------------------------------------------------------------------------- build

def main():
    os.makedirs(PAGES, exist_ok=True)
    for f in os.listdir(PAGES):
        os.remove(os.path.join(PAGES, f))

    combos = []
    for prod in PRODUCTS:
        for mkt in MARKETS:
            title = f"{prod[0]} Export to {mkt[0]}"
            slug = slugify(f"{prod[0]}-export-to-{mkt[0]}")
            combos.append((slug, title, prod, mkt))

    by_product = {}
    by_market = {}
    for slug, title, prod, mkt in combos:
        by_product.setdefault(prod[0], []).append((slug, title, mkt[0]))
        by_market.setdefault(mkt[0], []).append((slug, title, prod[0]))

    index = []
    for i, (slug, title, prod, mkt) in enumerate(combos):
        same_prod = [(s, t) for s, t, m in by_product[prod[0]] if s != slug]
        same_prod = (same_prod * 2)[i % max(1, len(same_prod)):][:6]
        same_mkt = [(s, f"{p} export to {mkt[0]}") for s, t, p in by_market[mkt[0]] if s != slug]
        same_mkt = (same_mkt * 2)[i % max(1, len(same_mkt)):][:6]

        desc = (f"{prod[0]} export from India to {mkt[0]} by Patel Impex - specification, grades, packing, "
                f"certification, documentation and {mkt[3]} transit to {mkt[2]}.")[:158]
        body = build_body(prod, mkt, same_prod, same_mkt)
        json.dump(
            {"title": f"{title} | Patel Impex", "h1": title, "description": desc,
             "product": prod[0], "country": mkt[0], "category": prod[2],
             "image": f"/images/products/{prod[1]}.jpg", "html": body},
            open(os.path.join(PAGES, f"{slug}.json"), "w", encoding="utf-8"), ensure_ascii=False)
        index.append({"slug": slug, "title": title, "product": prod[0],
                      "country": mkt[0], "category": prod[2]})

    json.dump(index, open(os.path.join(OUT, "index.json"), "w", encoding="utf-8"), ensure_ascii=False)

    # hub page
    cats = {}
    for it in index:
        cats.setdefault(it["category"], []).append(it)
    hub = ["<p>Patel Impex exports Indian rice, flours, spices, psyllium, oilseeds and packaging materials to buyers in twenty markets. "
           "Each guide below sets out the specification, grades, packing, certification, documentation and shipping detail for one product into one destination.</p>"]
    for cat, items in cats.items():
        hub.append(f"<h2 class=\"heading h4\" style=\"margin:3.2rem 0 1.2rem;\">{esc(cat)} ({len(items)} guides)</h2><ul role=\"list\">")
        hub.append("".join(f'<li><a href="/more/{it["slug"]}">{esc(it["title"])}</a></li>' for it in items))
        hub.append("</ul>")
    hub.append('<p>Cannot see your market? <a href="/contact">Talk to our export desk</a> - we ship worldwide from Mundra and Kandla.</p>')
    json.dump({"title": "Export guides by product and destination | Patel Impex",
               "h1": "Export guides by product and destination",
               "description": f"{len(index)} country-by-country export guides from Patel Impex covering Indian rice, flour, spices, psyllium, oilseeds and packaging materials.",
               "html": "".join(hub)},
              open(os.path.join(PAGES, "index.json"), "w", encoding="utf-8"), ensure_ascii=False)

    open(os.path.join(OUT, "_template.html"), "w", encoding="utf-8").write(build_template())

    # sitemap
    from datetime import date
    today = date.today().isoformat()
    urls = [f"{SITE_URL}/more"] + [f"{SITE_URL}/more/{it['slug']}" for it in index]
    xml = ['<?xml version="1.0" encoding="UTF-8"?>',
           '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
    for u in urls:
        xml.append(f"  <url><loc>{u}</loc><lastmod>{today}</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>")
    xml.append("</urlset>")
    open(os.path.join(ROOT, "public", "sitemap-more.xml"), "w", encoding="utf-8").write("\n".join(xml))

    print(f"generated {len(index)} pages + hub")


if __name__ == "__main__":
    main()
