import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Dr. Willmer Obregón - Médico Internista en Medellín | Holter 24h",
  description: "Médico Internista especializado en estudios cardiovasculares en Medellín. Holter 24 horas, electrocardiograma, MAPA. Citas disponibles en 1-2 días. Atención personalizada y profesional.",
  keywords: "médico internista Medellín, holter 24 horas Medellín, estudios cardiovasculares Medellín, cardiólogo Medellín, electrocardiograma Medellín, MAPA presión arterial, Dr Willmer Obregón",
  robots: "index, follow",
  authors: [{ name: "Dr. Willmer Obregón" }],
  openGraph: {
    title: "Dr. Willmer Obregón - Médico Internista en Medellín",
    description: "Especialista en Medicina Interna y estudios cardiovasculares. Holter 24 horas, electrocardiograma y MAPA en Medellín.",
    url: "https://internistamedellin.com",
    siteName: "Dr. Willmer Obregón - Médico Internista",
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Willmer Obregón - Médico Internista Medellín",
    description: "Especialista en estudios cardiovasculares. Holter 24h, electrocardiograma y MAPA.",
  },
  icons: {
    icon: "/Favicon_willmer_obregon.png",
    shortcut: "/Favicon_willmer_obregon.png",
    apple: "/Favicon_willmer_obregon.png",
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MTRKGD87');`
        }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Physician",
            "@id": "https://internistamedellin.com/#physician",
            "name": "Dr. Willmer Obregón",
            "image": "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/97a64b44-91da-4112-9daf-4ae102c188a2-holter-24-vercel-app/assets/images/images_2.png",
            "url": "https://internistamedellin.com",
            "telephone": ["+573011505174", "+573009895852", "+573053979628"],
            "email": "consulta@internistamedellin.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Biencrecer, Cra 81 #27-17 Consultorio 1",
              "addressLocality": "Medellín",
              "addressRegion": "Antioquia",
              "postalCode": "050030",
              "addressCountry": "CO"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "6.2442",
              "longitude": "-75.5812"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "08:00",
              "closes": "17:00"
            },
            "medicalSpecialty": "Medicina Interna",
            "areaServed": {
              "@type": "City",
              "name": "Medellín",
              "containedInPlace": {
                "@type": "Country",
                "name": "Colombia"
              }
            },
            "sameAs": [
              "https://www.facebook.com/tu.internista.favorito/",
              "https://www.instagram.com/tu_internista_favorito/",
              "https://www.tiktok.com/@tuinternistafavorito",
              "https://www.youtube.com/@tuinternistafavorito"
            ],
            "knowsAbout": [
              "Medicina Interna",
              "Holter 24 horas",
              "Estudios Cardiovasculares",
              "Electrocardiograma",
              "MAPA 24 horas",
              "Hipertensión",
              "Diabetes",
              "Obesidad",
              "Enfermedades Cardiovasculares"
            ]
          })
        }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Dr. Willmer Obregón - Médico Internista",
            "description": "Consultorio de Medicina Interna especializado en estudios cardiovasculares en Medellín",
            "url": "https://internistamedellin.com",
            "logo": "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/97a64b44-91da-4112-9daf-4ae102c188a2/Wilmer-Obregon-Logo-1769391260059.png",
            "image": "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/97a64b44-91da-4112-9daf-4ae102c188a2-holter-24-vercel-app/assets/images/images_2.png",
            "telephone": "+573011505174",
            "email": "consulta@internistamedellin.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Biencrecer, Cra 81 #27-17 Consultorio 1",
              "addressLocality": "Medellín",
              "addressRegion": "Antioquia",
              "postalCode": "050030",
              "addressCountry": "CO"
            },
            "priceRange": "$$",
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "08:00",
              "closes": "17:00"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Servicios Médicos",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "MedicalProcedure",
                    "name": "Monitoreo Holter 24 horas",
                    "description": "Monitoreo continuo de la actividad cardíaca durante 24 horas para detectar arritmias"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "MedicalProcedure",
                    "name": "Electrocardiograma",
                    "description": "Estudio de la actividad eléctrica del corazón"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "MedicalProcedure",
                    "name": "MAPA 24 horas",
                    "description": "Monitoreo ambulatorio de presión arterial durante 24 horas"
                  }
                }
              ]
            }
          })
        }} />
      </head>
      <body className="antialiased">
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MTRKGD87"
            height="0" width="0" style={{display: 'none', visibility: 'hidden'}}></iframe>
        </noscript>
        <Script
          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="afterInteractive"
          data-orchids-project-id="97a64b44-91da-4112-9daf-4ae102c188a2"
        />
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
