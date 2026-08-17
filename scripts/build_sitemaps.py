#!/usr/bin/env python3
"""Rebuild sitemap.xml from the real routes in public/site/manifest.json and
write a sitemap index that also covers the 1000 /more export guides."""
import json, os
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BASE = "https://patelimpex.com"
manifest = json.load(open(os.path.join(ROOT, "public/site/manifest.json"), encoding="utf-8"))
routes = sorted({e["route"] for e in manifest})
routes = [r for r in routes if r not in ("/checkout",)]

def prio(r):
    if r == "/": return "1.0"
    if r.count("/") == 1: return "0.8"
    return "0.6"

urls = [("/", "1.0"), ("/more", "0.8")]
urls += [(r, prio(r)) for r in routes if r not in ("/", "/more")]
seen, out = set(), []
for r, p in urls:
    if r in seen: continue
    seen.add(r)
    out.append(f"  <url><loc>{BASE}{r}</loc><changefreq>weekly</changefreq><priority>{p}</priority></url>")

sitemap = "\n".join([
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    *out,
    "</urlset>",
])
open(os.path.join(ROOT, "public/sitemap.xml"), "w", encoding="utf-8").write(sitemap)

index = "\n".join([
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    f'  <sitemap><loc>{BASE}/sitemap.xml</loc></sitemap>',
    f'  <sitemap><loc>{BASE}/sitemap-more.xml</loc></sitemap>',
    "</sitemapindex>",
])
open(os.path.join(ROOT, "public/sitemap_index.xml"), "w", encoding="utf-8").write(index)
print(f"sitemap.xml: {len(out)} urls; sitemap_index.xml written")
