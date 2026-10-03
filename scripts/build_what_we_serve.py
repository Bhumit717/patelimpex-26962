#!/usr/bin/env python3
"""Rebuild the verified PATEL IMPEX product catalogue inside the imported Webflow shell.

Products are grouped by category, in catalogue order, straight from
public/site/products/products.json. Cards show image, name, category and short
description only -- the reference website for a product is shown on that
product's own detail page, never on the card.
"""
from pathlib import Path
import html, json, re

ROOT = Path(__file__).resolve().parent.parent
PATH = ROOT / "public/site/what-we-serve.html"
PRODUCTS = json.loads((ROOT / "public/site/products/products.json").read_text(encoding="utf-8"))
SUBTYPES = json.loads((ROOT / "public/site/products/subtypes.json").read_text(encoding="utf-8"))
source = PATH.read_text(encoding="utf-8")

# key, heading, subtitle, product categories shown in this group (in this order)
GROUPS = [
    ("rice", "Rice", "Aromatic and non-aromatic Indian rice, including residue-controlled programs", ["Rice"]),
    ("flours", "Flours & Flour Products", "Milled wheat and corn flours selected to the buyer's application", ["Wheat & Flour", "Corn & Maize"]),
    ("oilseeds", "Oilseeds", "Groundnut kernels for snack, confectionery and oil milling buyers", ["Oilseeds"]),
    ("spices", "Spices", "Whole spice seeds for blending, seasoning and food processing", ["Spices"]),
    ("psyllium", "Psyllium & Natural Products", "Plantago ovata seed, husk and husk powder", ["Natural / Agricultural Product"]),
    ("dehydrated", "Dehydrated Products", "Dried fruit, vegetable, herb and spice ingredients", ["Dehydrated Products"]),
]

INTRO = (
    "PATEL IMPEX supplies a diverse range of Indian agricultural commodities and food "
    "products for international buyers, importers, distributors, wholesalers, food businesses "
    "and trading companies. Our focused portfolio covers aromatic and non-aromatic rice, "
    "wheat and corn flours, peanut kernels, cumin seeds, psyllium seed, husk and husk powder, "
    "and dehydrated products."
)

def esc(value):
    return html.escape(str(value), quote=True)

def group_head(key, title, subtitle, count):
    label = "1 product" if count == 1 else f"{count} products"
    return (
        f'<div data-pi-group="{esc(key)}" role="button" tabindex="0" aria-expanded="true" '
        f'class="industry-our-item w-dyn-item pi-group-head">'
        '<div class="industry-our-item-inner"><div class="pi-group-head-inner">'
        '<div class="pi-group-head-left">'
        f'<div class="pi-group-count">{label}</div>'
        f'<h2 class="pi-group-title">{esc(title)}</h2>'
        f'<div class="pi-group-sub">{esc(subtitle)}</div></div>'
        '<div class="pi-group-head-toggle" aria-hidden="true"><span class="pi-group-plus"></span></div>'
        '</div><div class="industry-our-item-line"></div></div></div>'
    )

def card(name, category, description, image, alt, group, slug=None):
    if slug:
        view = f'/products/{esc(slug)}'
        quote = f'/contact?product={esc(slug)}'
    else:
        view = '/contact?product=' + esc(name.lower().replace(' ', '-').replace('&', 'and'))
        quote = view
    card_link = f' data-pi-product-link="{view}" tabindex="0" aria-label="View {esc(name)}"' if slug else ''
    return (
        f'<article data-pi-member="{esc(group)}" role="listitem" class="industry-our-item w-dyn-item pi-product-card"{card_link}>'
        '<div class="industry-our-item-inner">'
        '<div class="industry-our-item-head hidden-mb"><div class="industry-our-item-head-inner">'
        '<div class="industry-our-item-number"><div class="txt fs-12"></div></div>'
        f'<div class="industry-our-item-name-wrap"><div class="industry-our-item-name"><h3 class="heading h6">{esc(name)}</h3></div></div>'
        '</div></div><div class="industry-our-item-body"><div class="industry-our-item-main-left">'
        '<div class="industry-our-item-main-inner"><div class="industry-our-item-name-wrap hidden-dsk">'
        f'<div class="industry-our-item-name"><h3 class="heading h6">{esc(name)}</h3></div></div>'
        f'<div class="industry-our-item-sub"><div class="txt fs-24 fs-20-tb fs-14-mb fw-med">{esc(category)}</div></div></div>'
        '<div class="pi-card-actions">'
        f'<a href="{view}" class="industry-our-item-btn w-inline-block"><div class="btn" data-is-btn="" data-wf--button--variant="outline"><div class="btn-txt"><div class="txt fs-12 fs-10-mb">View Product</div></div></div></a>'
        f'<a href="{quote}" class="industry-our-item-btn w-inline-block"><div class="btn" data-is-btn="" data-wf--button--variant="outline"><div class="btn-txt"><div class="txt fs-12 fs-10-mb">Request Quote</div></div></div></a>'
        '</div></div><div class="industry-our-item-main-center"><div class="industry-our-item-desc">'
        f'<div class="txt fs-16 w-richtext"><p>{esc(description)}</p></div></div>'
        '<div class="industry-our-item-why"><div class="industry-our-item-why-label"><div class="txt fs-10">Export enquiry</div></div>'
        '<div class="industry-our-item-why-line"></div><div class="industry-our-item-why-content"><div class="txt fs-16 w-richtext">'
        '<ul role="list"><li>Buyer-defined specifications</li><li>Export packaging options</li><li>Pre-shipment documentation support</li></ul>'
        '</div></div></div></div><div class="industry-our-item-main-right"><div class="industry-our-item-main-thumb">'
        f'<img src="{esc(image)}" loading="lazy" width="560" height="560" alt="{esc(alt)}" class="img-df img-fill"/>'
        '</div><div class="industry-our-item-number hidden-dsk"><div class="txt fs-12"></div></div></div>'
        '</div><div class="industry-our-item-line"></div></div></article>'
    )

def card_image(product):
    """Thumbnail for the catalogue card.

    Prefers the lightweight card rendition so the list does not pull the
    full-size hero. A product that has no card or hero photograph of its own
    falls back to the first subtype that does, so a card is never rendered
    without a picture.
    """
    candidates = [product.get("cardImage"), product.get("heroImage"), product["image"]]
    candidates += [subtype.get("image") for subtype in SUBTYPES.get(product["slug"], [])]
    for candidate in candidates:
        if candidate:
            return candidate
    raise RuntimeError(f"No image available for product {product['slug']}")


by_category = {}
for product in PRODUCTS:
    by_category.setdefault(product["category"], []).append(product)

items = []
placed = set()
groups_emitted = 0
for key, title, subtitle, categories in GROUPS:
    members = [p for c in categories for p in by_category.get(c, [])]
    if not members:
        continue
    items.append(group_head(key, title, subtitle, len(members)))
    groups_emitted += 1
    for product in members:
        placed.add(product["slug"])
        items.append(
            card(product["name"], product["category"], product["intro"],
                 card_image(product), product["alt"], key, product["slug"])
        )

# Any product whose category is not listed above still gets published.
ungrouped = [p for p in PRODUCTS if p["slug"] not in placed]
if ungrouped:
    items.append(group_head("other", "Other Products", "Additional products available on request", len(ungrouped)))
    groups_emitted += 1
    for product in ungrouped:
        items.append(
            card(product["name"], product["category"], product["intro"],
                 card_image(product), product["alt"], "other", product["slug"])
        )

new_list = "".join(items)

marker = '<div class="industry-our-list w-dyn-items" role="list">'
start = source.find(marker)
if start < 0:
    marker = '<div role="list" class="industry-our-list w-dyn-items">'
    start = source.find(marker)
if start < 0:
    raise RuntimeError("Product list container not found")
open_end = source.find('>', start) + 1
depth, cursor = 1, open_end
pattern = re.compile(r'<(/?)div\b')
while depth:
    match = pattern.search(source, cursor)
    if not match:
        raise RuntimeError("Unbalanced product list markup")
    depth += 1 if match.group(1) == '' else -1
    cursor = match.end()
close_end = source.find('>', cursor) + 1
inner_end = source.rfind('</div', open_end, close_end)
source = source[:open_end] + new_list + source[inner_end:]

# Refresh the section intro copy (idempotent: matches whatever is there today).
source = re.sub(
    r'(PATEL IMPEX supplies a diverse range of Indian agricultural commodities[^<]*)',
    lambda _m: INTRO,
    source,
    count=1,
)
PATH.write_text(source, encoding="utf-8")
print(f"what-we-serve: {len(PRODUCTS)} products in {groups_emitted} groups")
