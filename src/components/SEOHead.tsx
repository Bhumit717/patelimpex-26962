import { Helmet } from "react-helmet";

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  jsonLd?: object;
}

const SEOHead = ({
  title,
  description,
  canonicalUrl,
  ogImage = "/logo.png",
  ogType = "website",
  jsonLd,
}: SEOHeadProps) => {
  const siteUrl = "https://patelimpex.com";
  const fullCanonicalUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : undefined;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Canonical URL */}
      {fullCanonicalUrl && <link rel="canonical" href={fullCanonicalUrl} />}

      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      {fullCanonicalUrl && <meta property="og:url" content={fullCanonicalUrl} />}
      <meta property="og:image" content={ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`} />
      <meta property="og:site_name" content="Patel Impex" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`} />

      {/* JSON-LD Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;

