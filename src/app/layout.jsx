import { Montserrat, Open_Sans } from "next/font/google";
import "../styles/globals.css";
import { defaultSEO } from "@/lib/seo";
// import FloatingWhatsApp from "@/components/SharedComp?onents/BrochureButton";
import FloatingActions from "@/components/SharedComponents/FloatingActions";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-heading",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

export const metadata = defaultSEO;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Leaf-Loam",
              image: "https://leafloam.com/images/nture2.jpeg",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Vishnavi Oasis, Kismatpur Road",
                addressLocality: "Hyderabad",
                addressRegion: "Telangana",
                postalCode: "500086",
                addressCountry: "IN",
              },
              telephone: "+91 9642482728",
              url: "https://leafloam.com",
              areaServed: "India",
              serviceType: "Landscaping Services",
            }),
          }}
        />
      </head>
      <body className={`${openSans.variable} ${montserrat.variable}`}>
        {children}
         {/* <FloatingWhatsApp/> */}
         <FloatingActions/>
      </body>
    </html>
  );
}
