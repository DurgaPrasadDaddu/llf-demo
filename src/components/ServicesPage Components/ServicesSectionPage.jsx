"use client";

import Image from "next/image";



export default function ServicesSectionPage() {
  
const services = [
  {
    id: 1,
    title: "Landscaping",
    description:
      "Custom outdoor space design tailored to your lifestyle and property.",
    points: [
      "Garden Design",
      "Lawn Development",
      "Water Features",
      "Lighting & Pathways",
    ],
    image: "/Images/Landscaping.jpeg",
  },
  {
    id: 2,
    title: "Urban Kitchen Gardening",
    description:
      "Grow fresh vegetables and herbs in compact urban spaces.",
    points: [
      "Balcony Gardens",
      "Terrace Farming",
      "Organic Setup",
      "Seasonal Planning",
    ],
    image: "/Images/UrbonKichen.jpeg",
  },
  {
    id: 3,
    title: "Balcony & Terrace Makeovers",
    description:
      "Transform small outdoor spaces into stylish green retreats.",
    points: [
      "Modern Planters",
      "Vertical Gardens",
      "Seating Design",
      "Decor Elements",
    ],
    image: "/Images/Balcony.png",
  },
  {
    id: 4,
    title: "Corporate Plant Rentals",
    description:
      "Professional indoor and outdoor plants for offices.",
    points: [
      "Indoor Plant Styling",
      "Monthly Maintenance",
      "Corporate Packages",
      "Custom Designs",
    ],
    image: "/Images/Corporate.jpeg",
  },
  {
    id: 5,
    title: "Consultation",
    description:
      "Expert guidance to plan and develop your green spaces effectively.",
    points: [
      "Site Evaluation",
      "Plant Selection Advice",
      "Layout Planning",
      "Budget Guidance",
    ],
    image: "/Images/consultation1.jpg",
  },
  {
    id: 6,
    title: "Maintenance",
    description:
      "Regular care and upkeep to keep gardens healthy and visually appealing.",
    points: [
      "Plant Care",
      "Pruning & Trimming",
      "Lawn Maintenance",
      "Seasonal Support",
    ],
    image: "/Images/Maintenance.jpeg",
  },
];
  return (
    <section className="w-full bg-gray-50 pt-8 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto space-y-24">

        {/* Page Heading */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Our Services
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We create sustainable, beautiful, and meaningful green spaces for homes and businesses.
          </p>
        </div>

        {/* Service Sections */}
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`flex flex-col lg:flex-row items-center gap-12 ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="w-full lg:w-1/2 relative h-[350px] md:h-[450px] rounded-3xl overflow-hidden shadow-lg">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-center"
              />
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold">
                {service.title}
              </h2>

              <p className="mt-4 text-gray-600">
                {service.description}
              </p>

              <ul className="mt-6 space-y-2">
                {service.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
