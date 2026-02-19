// lib/seo.js

import { COMPANY } from "./constants";

const baseUrl = "https://leafloam.com"; // change when domain is live

export const defaultSEO = {
  metadataBase: new URL(baseUrl),

  title: {
    default: `${COMPANY.name} | Premium Landscaping Solutions in Hyderabad`,
    template: `%s | ${COMPANY.name}`,
  },

  description:
    "Leaf-Loam offers premium commercial, residential, rooftop and indoor landscaping solutions across Hyderabad and India. Transform your spaces with sustainable, elegant landscape design.",

  keywords: [
    "Landscaping in Hyderabad",
    "Commercial Landscaping",
    "Residential Landscaping",
    "Farmhouse Landscaping",
    "Rooftop Garden Design",
    "Indoor Planting Solutions",
    "Landscape Maintenance",
    "Landscape Architecture India",
    "Garden Design Hyderabad",
  ],

  authors: [{ name: COMPANY.name }],
  creator: COMPANY.name,
  publisher: COMPANY.name,

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: baseUrl,
    siteName: COMPANY.name,
    title: `${COMPANY.name} | Premium Landscaping Solutions`,
    description:
      "Transform outdoor and indoor spaces with sustainable landscape design. Serving commercial, residential, rooftop & indoor projects across India.",
    images: [
      {
        url: `${baseUrl}/images/nature2.jpeg`, // create this image
        width: 1200,
        height: 630,
        alt: "Leaf-Loam Landscaping Projects",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${COMPANY.name} | Premium Landscaping`,
    description:
      "Professional landscaping solutions for commercial, residential, and rooftop spaces.",
    images: [`${baseUrl}/images/nature2.jpeg`],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "Landscaping Services",
};

export function generateSEO({ title, description, path = "" }) {
  const url = `https://leafloam.com${path}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
    },
    twitter: {
      title,
      description,
    },
  };
}
