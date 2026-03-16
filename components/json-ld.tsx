export function JsonLd() {
  const businessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Hecho Arte",
    "image": "https://hechoarte.studio/og-image.jpg",
    "@id": "https://hechoarte.studio",
    "url": "https://hechoarte.studio",
    "telephone": "+541100000000", // Reemplazar con el real si existe
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Buenos Aires",
      "addressRegion": "CABA",
      "postalCode": "1000",
      "addressCountry": "AR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -34.6037,
      "longitude": -58.3816
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://instagram.com/hechoarte.studio",
      "https://twitter.com/hechoarte"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(businessData) }}
    />
  );
}
