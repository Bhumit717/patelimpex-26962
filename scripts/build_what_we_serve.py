import re, html as H

PATH = 'public/site/what-we-serve.html'
h = open(PATH).read()

IMG = '/images/products/%s.jpg'

CATS = [
    ("Basmati Rice", "Rice", "basmati-rice", [
        ("Basmati Rice", "Long-grain aromatic Indian basmati rice supplied for importers, distributors, wholesalers and food businesses, packed to buyer requirements.", "basmati-rice"),
        ("1509 Basmati Rice", "A widely traded basmati variety sourced from Indian growing regions and offered for bulk international sourcing programs.", "basmati-rice"),
        ("1401 Basmati Rice", "Indian basmati variety supplied to importers, wholesalers and food businesses for regular and contract-based shipments.", "basmati-rice"),
        ("1121 Basmati Rice", "One of the most requested Indian basmati varieties in international trade, available for export in buyer-specified packing.", "basmati-rice"),
        ("1718 Pusa Basmati Rice", "Pusa basmati variety supplied for international buyers seeking consistent, repeat-volume rice sourcing from India.", "basmati-rice"),
    ]),
    ("Non-Basmati Rice", "Rice", "non-basmati-rice", [
        ("Non-Basmati Rice", "Indian non-basmati rice supplied for importers, distributors and food businesses across international markets.", "non-basmati-rice"),
        ("PR 14 Non-Basmati Rice", "Non-basmati Indian rice variety supplied for bulk sourcing and wholesale distribution programs.", "non-basmati-rice"),
        ("PR 11 Non-Basmati Rice", "Commonly traded Indian non-basmati variety, available for export in packaging agreed with the buyer.", "non-basmati-rice"),
        ("IR 64 Non-Basmati Rice", "Widely traded Indian rice variety supplied to importers, wholesalers and trading companies.", "non-basmati-rice"),
        ("Parmal Non-Basmati Rice", "Indian parmal rice supplied for volume buyers, distributors and food businesses.", "non-basmati-rice"),
    ]),
    ("Variety of Flours", "Flours & Cereals", "whole-wheat-flour", [
        ("Whole Wheat Flour", "Indian whole wheat flour supplied for food businesses, wholesalers and importers, packed to export requirements.", "whole-wheat-flour"),
        ("Tandoori Atta", "Tandoori atta supplied for bakeries, restaurants, food manufacturers and distributors in international markets.", "tandoori-atta"),
        ("Suji", "Semolina (suji) supplied for food manufacturers, wholesalers and importers sourcing from India.", "suji"),
        ("Rawa", "Rawa supplied for international food businesses and distributors, sourced according to buyer requirements.", "rawa"),
        ("Corn Flour", "Corn flour supplied for food manufacturing, wholesale and retail distribution programs.", "corn-flour"),
        ("Besan", "Gram flour (besan) supplied for food businesses, restaurants, distributors and importers.", "besan"),
    ]),
    ("Whole Spices", "Indian Spices", "cumin-seeds", [
        ("Cumin Seeds", "Indian cumin seeds supplied for food manufacturers, wholesalers, distributors and importers.", "cumin-seeds"),
        ("Coriander Seeds", "Indian coriander seeds supplied for bulk international sourcing and spice processing buyers.", "coriander-seeds"),
        ("Fennel Seeds", "Indian fennel seeds supplied for food businesses, spice traders and distributors.", "fennel-seeds"),
        ("Fenugreek Seeds", "Indian fenugreek seeds supplied for importers, food manufacturers and wholesale buyers.", "fenugreek-seeds"),
        ("Mustard Seeds", "Indian mustard seeds supplied for oil processors, food manufacturers and spice distributors.", "mustard-seeds"),
        ("Red Chilli", "Indian dried red chilli supplied whole for spice processors, food businesses and importers.", "red-chilli"),
        ("Psyllium Seed", "Indian psyllium seed supplied for international buyers, processors and distributors.", "psyllium"),
        ("Turmeric", "Indian turmeric supplied whole for spice processors, food manufacturers and wholesale buyers.", "turmeric"),
        ("Black Pepper", "Black pepper supplied whole for food manufacturers, restaurants, wholesalers and importers.", "black-pepper"),
    ]),
    ("Spice Powders", "Indian Spices", "red-chilli-powder", [
        ("Red Chilli Powder", "Ground Indian red chilli supplied for food manufacturers, restaurants, wholesalers and importers.", "red-chilli-powder"),
        ("Turmeric Powder", "Indian turmeric powder supplied for food businesses, distributors and international buyers.", "turmeric-powder"),
        ("Black Pepper Powder", "Ground black pepper supplied for food manufacturing, foodservice and wholesale distribution.", "black-pepper-powder"),
        ("Coriander Seeds Powder", "Ground coriander supplied for food manufacturers, spice packers and distributors.", "coriander-powder"),
        ("Garlic Powder", "Garlic powder supplied for food manufacturers, foodservice buyers and distributors.", "garlic-powder"),
        ("Dry Mango Powder", "Amchur (dry mango powder) supplied for food manufacturers, restaurants and importers.", "dry-mango-powder"),
        ("Garam Masala", "Indian garam masala blend supplied for food businesses, retail packers and distributors.", "garam-masala"),
        ("White Pepper Powder", "White pepper powder supplied for food manufacturers, foodservice and wholesale buyers.", "white-pepper-powder"),
        ("Nutmeg Powder", "Nutmeg powder supplied for food manufacturers, bakeries and spice distributors.", "nutmeg-powder"),
        ("Dry Ginger Powder", "Dry ginger powder supplied for food manufacturers, beverage producers and distributors.", "dry-ginger-powder"),
        ("Clove Powder", "Clove powder supplied for food manufacturers, spice packers and international buyers.", "clove-powder"),
    ]),
    ("Psyllium Products", "Psyllium", "psyllium", [
        ("Psyllium Seed", "Indian psyllium seed supplied for international buyers, processors and distributors sourcing from Gujarat.", "psyllium"),
        ("Psyllium Husk", "Psyllium husk supplied for international buyers, packed and shipped to agreed buyer requirements.", "psyllium"),
    ]),
    ("Packaging Products", "Packaging", "packaging-boxes", [
        ("Corrugated Boxes", "Corrugated shipping and packing boxes supplied in sizes and ply configurations agreed with the buyer.", "packaging-boxes"),
        ("Kraft Paper Bags", "Kraft paper carry bags and grocery bags supplied for retail, food and distribution customers.", "packaging-paper"),
        ("Paper Food Boxes & Cups", "Paper food containers, boxes and cups supplied for foodservice, takeaway and retail buyers.", "packaging-paper"),
        ("Stand-Up Pouches", "Stand-up pouches for dry goods, spices, flours and grains, supplied to buyer-specified sizes.", "packaging-pouches"),
        ("Flexible Packaging Pouches", "Three-side-seal and flat pouches supplied for food packing and retail-ready presentation.", "packaging-pouches"),
    ]),
]

INTRO = ("PATEL IMPEX supplies a diverse range of Indian agricultural commodities and food products for "
         "international buyers, importers, distributors, wholesalers, food businesses and trading companies. "
         "Our product portfolio includes rice, flours, spices and psyllium products suitable for bulk "
         "international sourcing.")

CAT_DESC = {
    "Basmati Rice": ("India is one of the world's leading rice-producing regions, and PATEL IMPEX supplies selected Indian rice varieties for international markets. We offer both Basmati and Non-Basmati rice varieties for importers, distributors, wholesalers and food businesses.", "Selected Indian basmati varieties for international importers and distributors"),
    "Non-Basmati Rice": ("PATEL IMPEX supplies Indian non-basmati rice varieties for importers, distributors, wholesalers and food businesses, sourced and packed according to buyer requirements.", "Volume non-basmati rice programs for wholesale and food business buyers"),
    "Variety of Flours": ("PATEL IMPEX supplies a variety of Indian flour and cereal-based products for international food businesses, wholesalers, distributors and importers. Products can be sourced according to buyer requirements and export packaging requirements.", "Indian flours and cereal products sourced to buyer and export packing requirements"),
    "Whole Spices": ("PATEL IMPEX supplies Indian whole spices and spice powders for international buyers. Our range covers commonly traded Indian spices suitable for food manufacturers, wholesalers, distributors, restaurants and importers.", "Commonly traded Indian whole spices for manufacturers, distributors and importers"),
    "Spice Powders": ("PATEL IMPEX supplies Indian spice powders for food manufacturers, wholesalers, distributors, restaurants and importers, packed according to buyer requirements.", "Ground Indian spices and blends for food manufacturing and foodservice buyers"),
    "Psyllium Products": ("Psyllium is one of the key products exported from Gujarat, and PATEL IMPEX supplies psyllium to international buyers, processors and distributors.", "Gujarat-sourced psyllium supplied to international buyers and processors"),
    "Packaging Products": ("PATEL IMPEX supplies packaging products including corrugated boxes, kraft paper bags, paper food packaging and flexible pouches for food, retail and distribution customers, made to buyer-specified sizes and requirements.", "Corrugated, paper and flexible packaging supplied to buyer specifications"),
}


def esc(t):
    return H.escape(t, quote=True)


def item(name, sub, paras, bullets, img, cta, label, group_key=''):
    ps = "".join("<p>%s</p>" % esc(p) for p in paras)
    lis = "".join("<li>%s</li>" % esc(b) for b in bullets)
    return (
        '<div data-popup-industry="open" data-pi-member="%(gk)s" role="listitem" class="industry-our-item w-dyn-item">'
        '<div class="industry-our-item-inner">'
        '<div class="industry-our-item-head hidden-mb"><div class="industry-our-item-head-inner">'
        '<div class="industry-our-item-number"><div data-wf--text--text-styles="mono" class="txt w-variant-3648de38-311e-0b18-0c7d-747bd60ae1a8 fs-12"></div></div>'
        '<div data-pop-industry="name" class="industry-our-item-name-wrap"><div class="industry-our-item-name"><h3 class="heading h6">%(name)s</h3></div></div>'
        '</div></div>'
        '<div class="industry-our-item-body"><div class="industry-our-item-main-left"><div class="industry-our-item-main-inner">'
        '<div class="industry-our-item-name-wrap hidden-dsk"><div class="industry-our-item-name"><h3 class="heading h6">%(name)s</h3></div></div>'
        '<div class="industry-our-item-sub"><div data-pop-industry="subcontent" data-wf--text--text-styles="standard" class="txt fs-24 fs-20-tb fs-14-mb fw-med">%(sub)s</div></div>'
        '</div>'
        '<a href="/contact" class="industry-our-item-btn w-inline-block"><div data-cursor="hidden" data-link-random="" data-is-btn="" data-wf--button--variant="outline" class="btn"><div class="btn-txt"><div data-wf--text--text-styles="mono" class="txt w-variant-3648de38-311e-0b18-0c7d-747bd60ae1a8 fs-12 fs-10-mb">%(cta)s</div></div></div></a>'
        '<div class="industry-our-item-main-ic"><img src="https://cdn.prod.website-files.com/6a44eec1ed1af2c4c403df6b/6a44eec1ed1af2c4c403dfe6_link-ic.png" loading="lazy" alt="" class="img-df img-fill"/></div>'
        '</div>'
        '<div class="industry-our-item-main-center"><div class="industry-our-item-desc"><div data-pop-industry="description" class="txt fs-16 w-richtext">%(ps)s</div></div>'
        '<div class="industry-our-item-why"><div class="industry-our-item-why-label"><div data-wf--text--text-styles="mono" class="txt w-variant-3648de38-311e-0b18-0c7d-747bd60ae1a8 fs-10">%(label)s</div></div>'
        '<div class="industry-our-item-why-line"></div>'
        '<div class="industry-our-item-why-content"><div data-pop-industry="why" class="txt fs-16 w-richtext"><ul role="list">%(lis)s</ul></div></div></div></div>'
        '<div class="industry-our-item-main-right"><div class="industry-our-item-main-thumb">'
        '<img src="%(img)s" loading="lazy" data-pop-industry="thumb" alt="%(name)s supplied by Patel Impex" class="img-df img-fill"/>'
        '</div><div class="industry-our-item-number hidden-dsk"><div data-wf--text--text-styles="mono" class="txt w-variant-3648de38-311e-0b18-0c7d-747bd60ae1a8 fs-12"></div></div></div>'
        '</div><div class="industry-our-item-line"></div></div></div>'
    ) % dict(name=esc(name), sub=esc(sub), ps=ps, lis=lis, img=IMG % img, cta=esc(cta), label=esc(label), gk=esc(group_key))


GROUPS = [
    ("agriculture", "Agriculture", "Rice, flours, spices and psyllium products sourced from Indian growing regions",
     ["Basmati Rice", "Non-Basmati Rice", "Variety of Flours", "Whole Spices", "Spice Powders", "Psyllium Products"]),
    ("packaging", "Packaging", "Corrugated, paper and flexible packaging supplied to buyer specifications",
     ["Packaging Products"]),
]

CATS_BY_NAME = {c[0]: c for c in CATS}


def group_head(key, title, sub, count):
    return (
        '<div data-pi-group="%(key)s" role="listitem" class="industry-our-item w-dyn-item pi-group-head">'
        '<div class="industry-our-item-inner"><div class="pi-group-head-inner">'
        '<div class="pi-group-head-left">'
        '<div data-wf--text--text-styles="mono" class="txt w-variant-3648de38-311e-0b18-0c7d-747bd60ae1a8 fs-10">%(count)s products</div>'
        '<h2 class="heading h5">%(title)s</h2>'
        '<div data-wf--text--text-styles="standard" class="txt fs-16 fs-14-tb">%(sub)s</div>'
        '</div>'
        '<div class="pi-group-head-toggle"><span class="pi-group-plus"></span></div>'
        '</div><div class="industry-our-item-line"></div></div></div>'
    ) % dict(key=esc(key), title=esc(title), sub=esc(sub), count=count)


items = []
for key, gtitle, gsub, cat_names in GROUPS:
    body = []
    for cat_name in cat_names:
        _, group, cat_img, prods = CATS_BY_NAME[cat_name]
        desc, sub = CAT_DESC[cat_name]
        cta = "Request Psyllium Quote" if group == "Psyllium" else "Request Quote"
        body.append(item(cat_name, sub, [desc], [p[0] for p in prods], cat_img, cta,
                         "Products in this range", key))
        for pname, pdesc, pimg in prods:
            body.append(item(pname, "%s / %s" % (group, cat_name), [pdesc],
                             ["Bulk international sourcing",
                              "Export packing to buyer requirements",
                              "Documentation and shipping handled end to end"],
                             pimg, cta, "Available for", key))
    items.append(group_head(key, gtitle, gsub, len(body)))
    items.extend(body)

new_list = "".join(items)

start = h.find('<div role="list" class="industry-our-list w-dyn-items">')
assert start > 0, 'list container not found'
open_end = h.find('>', start) + 1
depth = 1
j = open_end
while depth:
    m = re.compile(r'<(/?)div\b').search(h, j)
    depth += 1 if m.group(1) == '' else -1
    j = m.end()
end_close = h.find('>', j) + 1
inner_end = h.rfind('</div', open_end, end_close)
h = h[:open_end] + new_list + h[inner_end:]

h = h.replace('Every industry moves differently. Our teams are structured to understand the specific compliance requirements, handling standards, and delivery pressures that define your sector \u2014 so you get a freight partner that speaks your language from day one.', INTRO)
h = h.replace('>Our industries<', '>Our products<')
h = h.replace('>We know your industry<', '>Agricultural Commodities &amp; Food Products<')
h = h.replace('Patel Impex operates where freight complexity is highest and reliability is essential',
              'Patel Impex supplies Indian agricultural commodities, food products and packaging to international buyers')
h = h.replace('Complex shipments are handled with precision, even under tight deadlines and strict requirements',
              'Rice, flours, spices and psyllium sourced from Indian growing regions and packed for export')
h = h.replace('Industry expertise helps navigate challenges across a wide range of sectors',
              'Sourcing expertise across rice, flour, spice, psyllium and packaging product ranges')
h = h.replace('From planning to final delivery, seamless support ensures every shipment stays on track.',
              'From sourcing and quality checks to documentation and shipping, every order stays on track.')

open(PATH, 'w').write(h)
print('items', len(items), 'size', len(h))
