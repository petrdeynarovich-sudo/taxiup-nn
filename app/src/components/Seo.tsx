import { Helmet } from "react-helmet-async";

type SeoProps = {
  title: string;
  description: string;
  path: string; // например "/"
  imagePath?: string; // например "/og.jpg"
};

export function Seo({ title, description, path, imagePath = "/og.jpg" }: SeoProps) {
  const origin =
    typeof window !== "undefined" ? window.location.origin : "https://www.taxiup.online";

  const url = origin + path;
  const imageUrl = imagePath.startsWith("http") ? imagePath : origin + imagePath;

  // JSON-LD (замени телефон/адрес/город на свои)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: "TaxiUp",
    url,
    description,
    areaServed: "Россия",
  };

  return (
    <Helmet>
      <html lang="ru" />
      <title>{title}</title>

      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="TaxiUp" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />

      <meta name="twitter:card" content="summary_large_image" />

      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
}
