import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, ChevronDown, ChevronUp, MessageSquare, FlaskConical, Tag, BadgeCheck, Globe } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEOHead from "@/components/SEOHead";
import QuoteModal from "@/components/QuoteModal";

interface Specification {
  label: string;
  value: string;
}

interface ExportInfo {
  label: string;
  value: string;
}

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface EnhancedProductDetailTemplateProps {
  category: string;
  name: string;
  description: string;
  images: string[];
  hsCode?: string;
  specifications: Specification[];
  uses: string[];
  exportInfo: ExportInfo[];
  formats?: string[];
  breadcrumbs: BreadcrumbItem[];
  backLink: string;
  backLinkText: string;
  metaTitle?: string;
  metaDescription?: string;
  canonicalUrl: string;
  specSheetUrl?: string;
  imageCredit?: string;
}

const EnhancedProductDetailTemplate = ({
  category,
  name,
  description,
  images,
  hsCode,
  specifications,
  uses,
  exportInfo,
  breadcrumbs,
  backLink,
  backLinkText,
  metaTitle,
  metaDescription,
  canonicalUrl,
}: EnhancedProductDetailTemplateProps) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("description");
  const [shippingOpen, setShippingOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    image: images,
    url: `https://patelimpex.com${canonicalUrl}`,
    brand: { "@type": "Brand", name: "Patel Impex" },
    sku: hsCode,
  };

  const tabs = [
    { id: "description", label: "Description" },
    { id: "specification", label: "Specification" },
    { id: "uses_benefits", label: "Uses Benefits" },
    { id: "export_information", label: "Export Information" },
  ];

  const shippingItems = [
    { bold: "Worldwide Export Services -", text: " We deliver premium products to more than 40+ countries across Asia, Europe, Middle East, Africa & USA." },
    { bold: "Reliable Shipping Partners -", text: " Tie-ups with leading logistics & freight companies to ensure safe and timely delivery." },
    { bold: "Fast & Secure Delivery -", text: " Orders are dispatched via sea, air & land freight with proper tracking support." },
    { bold: "Customs & Documentation -", text: " Complete assistance with export documentation, certifications & compliance for hassle-free trade." },
  ];

  return (
    <div className="min-h-screen single_product_page" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#212529" }}>
      <SEOHead
        title={metaTitle || `${name} Exporter India | Patel Impex`}
        description={metaDescription || description.substring(0, 160)}
        canonicalUrl={canonicalUrl}
        ogImage={images[0]}
        ogType="product"
        jsonLd={jsonLd}
      />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        :root {
          --navy: #124576;
          --orange: #ef7f1a;
          --green: #3ba72f;
          --black: #212529;
          --white: #fff;
        }

        .single_product_page {
          background: #ffffff;
        }

        .pi-sharp {
          border-radius: 0 !important;
        }

        /* ===== SECTION 1: Summary ===== */
        .single_product_sec {
          padding: 60px 0;
        }

        .trigol-container {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 12px;
        }

        /* Image Gallery */
        .single_product_gallery_img {
          padding-right: 30px;
        }

        .single_product_img_slide {
          border: 1px solid #ddd;
          border-radius: 0;
          overflow: hidden;
          margin-bottom: 16px;
          background: #fff;
        }

        .single_product_img_slide img {
          width: 100%;
          aspect-ratio: 3 / 2.5;
          object-fit: cover;
        }

        .thumb-row {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-top: 8px;
        }

        .thumb-btn {
          border: 1px solid #ddd;
          border-radius: 0;
          overflow: hidden;
          width: 72px;
          height: 65px;
          cursor: pointer;
          transition: all 0.3s;
          background: #fff;
          padding: 0;
        }

        .thumb-btn:hover, .thumb-btn.active {
          border-color: #696969;
        }

        .thumb-btn img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Product Info Right Col */
        .shop_page_para {
          padding-left: 10px;
        }

        .sec_sub_title {
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.3em;
          color: var(--orange);
          font-weight: 700;
          margin-bottom: 4px;
        }

        .sec_title {
          font-size: 38px;
          font-weight: 800;
          color: var(--navy);
          margin-bottom: 16px;
          line-height: 1.1;
        }

        .product_short_dec {
          font-size: 17px;
          font-weight: 400;
          margin-bottom: 18px;
          line-height: 1.6;
          color: #212529;
        }

        /* WhatsApp Button */
        .whatsapp_btn a {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background-color: var(--green);
          color: white;
          padding: 8px 18px;
          border-radius: 0;
          font-size: 16px;
          font-weight: 500;
          text-decoration: none;
          transition: transform 0.2s;
          box-shadow: 0 4px 12px rgba(59,167,47,0.35);
          margin-bottom: 18px;
        }
        .whatsapp_btn a:hover {
          transform: translateY(-2px);
          filter: brightness(1.05);
        }

        /* Highlight Boxes */
        .product_icon_highlights {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 15px;
          border-radius: 0;
          background: #fffbf4;
          margin: 25px 0;
          flex-direction: column;
          border: 1px solid rgba(166,138,112,0.46);
        }

        .highlight-box {
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .highlight-box .icon {
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--navy);
          flex-shrink: 0;
        }

        .highlight-text {
          font-size: 16px;
          font-weight: 500;
          color: var(--black);
        }

        /* Accordion */
        .product_custom_info {
          margin-top: 8px;
        }

        .accordion-item-custom {
          background: #fafafa;
          margin: 5px 0;
          border: 1px solid #e5e5e5;
          border-radius: 0;
          overflow: hidden;
        }

        .accordion-btn-custom {
          width: 100%;
          text-align: left;
          padding: 14px 5px;
          font-size: 18px;
          font-weight: 600;
          background: #fff;
          border: none;
          border-bottom: 1px solid #eee;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #000;
          border-radius: 0;
        }

        .accordion-body-custom {
          padding: 15px 10px;
        }

        .accordion-body-custom ul li {
          list-style: circle;
          margin-left: 23px;
          margin-bottom: 11px;
          font-size: 15px;
          line-height: 1.5;
        }

        /* ===== SECTION 2: Tabs ===== */
        .single_product_info {
          background: transparent;
          padding: 0 0 60px;
        }

        .sp_menu_btns {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          justify-content: center;
          margin-bottom: 30px;
          padding: 30px 0 0;
        }

        .sp_menu_btns a {
          text-decoration: none;
          padding: 8px 22px;
          border-radius: 0;
          font-size: 14px;
          font-weight: 600;
          transition: all 0.2s;
          border: 3.2px dashed #3c3c3c;
          background: #fff;
          color: #000;
          cursor: pointer;
          display: inline-block;
        }

        .sp_menu_btns a.active_tab_head {
          background: var(--orange);
          color: #fff;
          border: none;
        }

        /* Tab content block */
        .single_product_para {
          background: #fff;
          border: 1px solid #d4d4d4;
          border-radius: 0;
          margin-bottom: 30px;
          padding: 30px 35px;
          scroll-margin-top: 200px;
        }

        .single_product_para h4 {
          font-size: 24px;
          font-weight: 700;
          color: var(--navy);
          margin-bottom: 20px;
          padding-bottom: 10px;
          border-bottom: 2px solid #f0f0f0;
        }

        .single_product_para p {
          font-size: 16px;
          line-height: 1.8;
          color: #212529;
          margin-bottom: 0;
        }

        /* Spec & Export Table */
        .trigol-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 5px;
        }

        .trigol-table th, .trigol-table td {
          border: 1px solid #dee2e6;
          padding: 8px 12px;
          text-align: left;
          font-size: 15px;
          vertical-align: middle;
        }

        .trigol-table th {
          background: #f8f9fa;
          font-weight: 600;
          color: var(--navy);
          width: 35%;
        }

        .trigol-table tr:hover td {
          background: #f9f9f9;
        }

        /* Uses & Benefits list */
        .single_product_para ul {
          margin: 0;
          padding-left: 0;
          list-style: none;
        }

        .single_product_para ul li {
          display: flex;
          align-items: flex-start;
          font-size: 16px;
          line-height: 28px;
          color: #212529;
          margin-bottom: 8px;
        }

        .orange-bullet {
          width: 10px;
          height: 10px;
          background: var(--orange);
          display: inline-block;
          flex-shrink: 0;
          margin-top: 9px;
          margin-right: 14px;
        }
      `}</style>

      <Navigation />

      <main className="single_product_page" style={{ paddingTop: "100px" }}>

        {/* ===== SECTION 1: Product Summary ===== */}
        <section className="single_product_sec">
          <div className="trigol-container">
            {/* Breadcrumbs */}
            <div className="flex items-center flex-wrap gap-1 text-xs font-semibold mb-8 uppercase tracking-widest text-slate-500">
              {breadcrumbs.map((item, i) => (
                <span key={i} className="flex items-center">
                  {item.href ? (
                    <Link to={item.href} className="hover:text-orange-500 transition-colors">{item.label}</Link>
                  ) : (
                    <span>{item.label}</span>
                  )}
                  {i < breadcrumbs.length - 1 && <ChevronRight className="h-3 w-3 mx-1 opacity-50" />}
                </span>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left: Image Gallery */}
              <div className="single_product_gallery_img">
                <div className="single_product_img_slide">
                  <img src={images[selectedImage]} alt={name} />
                </div>
                {images.length > 1 && (
                  <div className="thumb-row">
                    {images.map((img, i) => (
                      <button
                        key={i}
                        className={`thumb-btn ${selectedImage === i ? "active" : ""}`}
                        onClick={() => setSelectedImage(i)}
                      >
                        <img src={img} alt={`${name} view ${i + 1}`} />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Right: Info */}
              <div className="shop_page_para">
                <h4 className="sec_sub_title">{category}</h4>
                <h2 className="sec_title">{name}</h2>
                <p className="product_short_dec">{description}</p>

                {/* WhatsApp Button */}
                <div className="whatsapp_btn">
                  <button onClick={() => setIsQuoteModalOpen(true)}>
                    <MessageSquare className="h-5 w-5" />
                    <span>Whatsapp Enquiry</span>
                  </button>
                </div>

                {/* Highlight Boxes */}
                <div className="product_icon_highlights">
                  <div className="highlight-box">
                    <div className="icon"><FlaskConical /></div>
                    <div className="highlight-text">Lab Tested All Products</div>
                  </div>
                  <div className="highlight-box">
                    <div className="icon"><Tag /></div>
                    <div className="highlight-text">Custom Packaging Private Label</div>
                  </div>
                  <div className="highlight-box">
                    <div className="icon"><BadgeCheck /></div>
                    <div className="highlight-text">Govt. Certified Products</div>
                  </div>
                </div>

                {/* Accordions */}
                <div className="product_custom_info">
                  {/* Shipping Information */}
                  <div className="accordion-item-custom">
                    <button className="accordion-btn-custom" onClick={() => setShippingOpen(!shippingOpen)}>
                      <span>Shipping Information</span>
                      {shippingOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                    </button>
                    {shippingOpen && (
                      <div className="accordion-body-custom">
                        <ul>
                          {shippingItems.map((item, i) => (
                            <li key={i}><b>{item.bold}</b>{item.text}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Contact Details */}
                  <div className="accordion-item-custom">
                    <button className="accordion-btn-custom" onClick={() => setContactOpen(!contactOpen)}>
                      <span>Contact Details</span>
                      {contactOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                    </button>
                    {contactOpen && (
                      <div className="accordion-body-custom">
                        <ul>
                          <li><b>Company Name:</b> Patel Impex</li>
                          <li><b>Email:</b> <a href="mailto:info@patelimpex.com" style={{ color: "var(--navy)" }}>info@patelimpex.com</a></li>
                          <li><b>WhatsApp:</b> <a href="/contact" style={{ color: "var(--navy)" }}>Click to Contact</a></li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION 2: Tabs + Content ===== */}
        <section className="single_product_info">
          <div className="trigol-container">
            {/* Tab Buttons */}
            <div className="sp_menu_btns">
              {tabs.map((tab) => (
                <a
                  key={tab.id}
                  href={`#${tab.id}`}
                  className={activeTab === tab.id ? "active_tab_head" : ""}
                  onClick={(e) => { e.preventDefault(); setActiveTab(tab.id); }}
                >
                  {tab.label}
                </a>
              ))}
            </div>

            {/* Description */}
            {activeTab === "description" && (
              <div className="single_product_para" id="description">
                <h4>Description</h4>
                <p>{description}</p>
              </div>
            )}

            {/* Specification */}
            {activeTab === "specification" && (
              <div className="single_product_para" id="specification">
                <h4>Specification</h4>
                <table className="trigol-table">
                  <tbody>
                    {specifications.map((spec, i) => (
                      <tr key={i}>
                        <th>{spec.label}</th>
                        <td>{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Uses Benefits */}
            {activeTab === "uses_benefits" && (
              <div className="single_product_para" id="uses_benefits">
                <h4>Uses Benefits</h4>
                <ul>
                  {uses.map((use, i) => (
                    <li key={i}>
                      <span className="orange-bullet" />
                      <span>{use}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Export Information */}
            {activeTab === "export_information" && (
              <div className="single_product_para" id="export_information">
                <h4>Export Information</h4>
                <table className="trigol-table">
                  <tbody>
                    {exportInfo.map((info, i) => (
                      <tr key={i}>
                        <th>{info.label}</th>
                        <td>{info.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />

      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        productName={name}
      />
    </div>
  );
};

export default EnhancedProductDetailTemplate;
