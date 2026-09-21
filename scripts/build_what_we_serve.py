#!/usr/bin/env python3
"""Rebuild the verified PATEL IMPEX product catalogue inside the imported Webflow shell."""
from pathlib import Path
import html, json, re

ROOT = Path(__file__).resolve().parent.parent
PATH = ROOT / "public/site/what-we-serve.html"
PRODUCTS = json.loads((ROOT / "public/site/products/products.json").read_text(encoding="utf-8"))
source = PATH.read_text(encoding="utf-8")

PACKAGING = [
    ("Corrugated Boxes", "Corrugated shipping boxes in buyer-agreed sizes and ply configurations.", "/images/products/packaging-boxes.jpg"),
    ("Kraft Paper Bags", "Paper carry and grocery bags for retail, food and distribution requirements.", "/images/products/packaging-paper.jpg"),
    ("Paper Food Boxes & Cups", "Paper food-service containers, boxes and cups in buyer-agreed formats.", "/images/products/packaging-paper.jpg"),
    ("Stand-Up Pouches", "Flexible stand-up pouches for grains, flours, spices and dry products.", "/images/products/packaging-pouches.jpg"),
    ("Flexible Packaging Pouches", "Flat and three-side-seal pouch formats for food and retail packing.", "/images/products/packaging-pouches.jpg"),
]

def esc(value):
    return html.escape(str(value), quote=True)

def group_head(key, title, subtitle, count):
    return (
        f'<div data-pi-group="{esc(key)}" role="button" tabindex="0" aria-expanded="false" '
        f'class="industry-our-item w-dyn-item pi-group-head">'
        '<div class="industry-our-item-inner"><div class="pi-group-head-inner">'
        '<div class="pi-group-head-left">'
        f'<div class="pi-group-count">{count} products</div>'
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
    return (
        f'<article data-pi-member="{esc(group)}" role="listitem" class="industry-our-item w-dyn-item pi-product-card">'
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
        f'<img src="{esc(image)}" loading="lazy" width="1200" height="900" alt="{esc(alt)}" class="img-df img-fill"/>'
        '</div><div class="industry-our-item-number hidden-dsk"><div class="txt fs-12"></div></div></div>'
        '</div><div class="industry-our-item-line"></div></div></article>'
    )

items = [group_head("agriculture", "Agriculture", "Rice, wheat flour, cumin, peanuts and psyllium for international sourcing", len(PRODUCTS))]
for product in PRODUCTS:
    items.append(card(product["name"], product["category"], product["intro"], product["image"], product["alt"], "agriculture", product["slug"]))
items.append(group_head("packaging", "Packaging", "Corrugated, paper and flexible packaging supplied to buyer requirements", len(PACKAGING)))
for name, description, image in PACKAGING:
    items.append(card(name, "Packaging", description, image, f"{name} supplied by Patel Impex", "packaging"))
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
source = source.replace('Our product portfolio includes rice, flours, spices and psyllium products suitable for bulk international sourcing.', 'Our focused portfolio covers Basmati rice, Non-Basmati rice, wheat flour, whole wheat flour, cumin, peanuts and three distinct psyllium products, alongside buyer-specified packaging.')
PATH.write_text(source, encoding="utf-8")
print(f"what-we-serve: {len(PRODUCTS)} agriculture products, {len(PACKAGING)} packaging products")
