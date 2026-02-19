// // "use client";

// // import { useState } from "react";
// // import Image from "next/image";

// // const services = [
// //   {
// //     title: "Plant Designs",
// //     desc: "Tailored layouts to fit your home's rhythm.",
// //     image: "/Images/nature2.jpeg",
// //   },
// //   {
// //     title: "Plant Care Plans",
// //     desc: "Personalized routines for lasting growth.",
// //     image: "/Images/nature2.jpeg",
// //   },
// //   {
// //     title: "Outdoor Harmony",
// //     desc: "Open spaces into nature-balanced environments.",
// //     image: "/Images/nature2.jpeg",
// //   },
// //   {
// //     title: "Decor & Accessories",
// //     desc: "Aesthetic add-ons to elevate every corner.",
// //     image: "/Images/nature2.jpeg",
// //   },
// //    {
// //     title: "Plant Designs",
// //     desc: "Tailored layouts to fit your home's rhythm.",
// //     image: "/Images/nature2.jpeg",
// //   },
// //   {
// //     title: "Plant Care Plans",
// //     desc: "Personalized routines for lasting growth.",
// //     image: "/Images/nature2.jpeg",
// //   },
// // ];

// // export default function ServicesSection() {
// //   const [active, setActive] = useState(0);

// //   return (
// //     <section className="w-full bg-gray-100 py-24 px-6 md:px-12 lg:px-20">

// //       <div className="max-w-[1400px] mx-auto bg-gray-200 rounded-3xl p-10">

// //         {/* Heading */}
// //         <div className="text-center mb-16">
// //           <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
// //             GET TO KNOW <br />
// //             WHAT WE CULTIVATE <br />
// //             AND MORE
// //           </h2>
// //         </div>

// //         {/* Cards */}
// //         <div className="flex gap-6 overflow-hidden">

// //           {services.map((service, index) => (
// //             <div
// //               key={index}
// //               onMouseEnter={() => setActive(index)}
// //               className={`
// //                 relative h-[500px] rounded-3xl overflow-hidden
// //                 transition-all duration-500 ease-in-out cursor-pointer
// //                 ${active === index ? "flex-[3]" : "flex-[1]"}
// //               `}
// //             >
// //               {/* Background Image */}
// //               <Image
// //                 src={service.image}
// //                 alt={service.title}
// //                 fill
// //                 className="object-cover"
// //               />

// //               {/* Dark Overlay */}
// //               <div className="absolute inset-0 bg-black/50" />

// //               {/* Content */}
// //               <div className="relative z-10 flex flex-col justify-between h-full p-6 text-white">
// //                 <div>
// //                   <h3 className="text-2xl font-semibold">
// //                     {service.title}
// //                   </h3>
// //                   <p
// //                     className={`mt-3 text-sm transition-opacity duration-300 ${
// //                       active === index ? "opacity-100" : "opacity-0"
// //                     }`}
// //                   >
// //                     {service.desc}
// //                   </p>
// //                 </div>

// //                 {/* Explore Button */}
// //                 <div className="flex justify-center">
// //                   <button className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-6 py-2 rounded-full text-sm hover:bg-white/30 transition">
// //                     EXPLORE
// //                   </button>
// //                 </div>
// //               </div>

// //             </div>
// //           ))}

// //         </div>
// //       </div>

// //     </section>
// //   );
// // }

// "use client";

// import { useState, useEffect, useRef } from "react";
// import Image from "next/image";

// const services = [
//      {
//     title: "Landscaping ",
//     desc: "Landscaping is the art and practice of designing and enhancing outdoor spaces to make them more beautiful, functional, and sustainable. It involves planting trees, shrubs, and lawns, creating garden layouts, and adding features like pathways, lighting, and water elements.",
//     image: "/Images/Landscaping.jpeg",
//   },
//   {
//     title: "Urban kitchen and gardening:",
//     desc: "Urban kitchen gardening is the practice of growing fresh vegetables, fruits, herbs, and greens in small spaces like balconies, terraces, backyards, or even indoors within city environments.",
//     image: "/Images/UrbonKichen.jpeg",
//   },
//   {
//     title: "Balcony/ Terrace make overs",
//     desc: "Focus on transforming small outdoor spaces into stylish, functional, and relaxing green retreats.",
//     image: "/Images/Balcony.png",
//   },
//   {
//     title: "Corporate plant rentals",
//     desc: "Provide businesses with professionally selected indoor and outdoor plants on a rental basis to enhance office spaces, reception areas, and commercial environments.",
//     image: "/Images/Corporate.jpeg",
//   },
//   {
//     title: "Consultation",
//     desc: "Consultation in landscaping and gardening involves expert guidance to help clients plan and develop their outdoor or indoor green spaces effectively.",
//     image:"/Images/consultation1.jpg",
//   },

//   {
//     title: "Maintenance",
//     desc: " Maintenance refers to the regular care and upkeep of gardens and green spaces to keep them healthy, clean, and visually appealing.",
//     image: "/Images/Maintenance.jpeg",
//   },
// ];

// export default function ServicesSection() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [hovered, setHovered] = useState(null);
//   const [isPaused, setIsPaused] = useState(false);
//   const intervalRef = useRef(null);

//   // AUTO SLIDE
//   useEffect(() => {
//     if (!isPaused) {
//       intervalRef.current = setInterval(() => {
//         setCurrentIndex((prev) =>
//           prev === services.length - 1 ? 0 : prev + 1
//         );
//       }, 3000);
//     }

//     return () => clearInterval(intervalRef.current);
//   }, [isPaused]);

//   // visible 4 cards
//   const visibleCards = [
//     services[currentIndex],
//     services[(currentIndex + 1) % services.length],
//     services[(currentIndex + 2) % services.length],
//     services[(currentIndex + 3) % services.length],
//   ];

//   return (
//     <section className="w-full bg-white py-10 px-6 md:px-12 lg:px-20">
//       <div className="max-w-[1400px] mx-auto bg-gray-200 rounded-3xl p-5">

//         {/* Heading */}
//         <div className="text-center mb-5">
//           <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
//             GET TO KNOW <br />
//             OUR SERVICES
//           </h2>
//         </div>

//         {/* Cards */}
//         <div
//           className="flex gap-6 transition-all duration-500"
//           onMouseEnter={() => setIsPaused(true)}
//           onMouseLeave={() => {
//             setHovered(null);
//             setIsPaused(false);
//           }}
//         >
//           {visibleCards.map((service, index) => {
//             const isActive = hovered === index;

//             return (
//               <div
//                 key={index}
//                 onMouseEnter={() => setHovered(index)}
//                 className={`
//                   relative h-[500px] rounded-3xl overflow-hidden
//                   transition-all duration-500 ease-in-out
//                   cursor-pointer
//                   ${isActive ? "flex-[2]" : "flex-1"}
//                 `}
//               >
//                 {/* Image */}
//                 <Image
//                   src={service.image}
//                   alt={service.title}
//                   fill
//                   className="object-cover"
//                 />

//                 {/* Overlay */}
//                 <div className="absolute inset-0 bg-black/10" />

//                 {/* Content */}
//                 <div className="relative z-10 flex flex-col justify-between h-full p-6 text-white">
//                   <div>
//                     <h3 className="text-2xl font-semibold">
//                       {service.title}
//                     </h3>
//                     <p
//                       className={`mt-3 text-sm transition-opacity duration-300 ${
//                         isActive ? "opacity-100" : "opacity-0"
//                       }`}
//                     >
//                       {service.desc}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//       </div>
//     </section>
//   );
// }

"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const services = [
  {
    title: "Landscaping",
    desc: "Landscaping is the art and practice of designing and enhancing outdoor spaces to make them more beautiful, functional, and sustainable.",
    image: "/Images/Landscaping.jpeg",
  },
  {
    title: "Urban Kitchen Gardening",
    desc: "Urban kitchen gardening is the practice of growing fresh vegetables, fruits, herbs, and greens in small spaces like balconies and terraces.",
    image: "/Images/UrbonKichen.jpeg",
  },
  {
    title: "Balcony / Terrace Makeovers",
    desc: "Transforming small outdoor spaces into stylish, functional, and relaxing green retreats.",
    image: "/Images/Balcony.png",
  },
  {
    title: "Corporate Plant Rentals",
    desc: "Provide businesses with professionally selected indoor and outdoor plants on a rental basis.",
    image: "/Images/Corporate.jpeg",
  },
  {
    title: "Consultation",
    desc: "Expert guidance to help clients plan and develop their outdoor or indoor green spaces effectively.",
    image: "/Images/consultation1.jpg",
  },
  {
    title: "Maintenance",
    desc: "Regular care and upkeep of gardens and green spaces to keep them healthy and visually appealing.",
    image: "/Images/Maintenance.jpeg",
  },
];

export default function ServicesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hovered, setHovered] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const [activeMobile, setActiveMobile] = useState(null);
  const intervalRef = useRef(null);

  // AUTO SLIDE (Desktop only)
  useEffect(() => {
    if (!isPaused && window.innerWidth >= 768) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) =>
          prev === services.length - 1 ? 0 : prev + 1,
        );
      }, 3000);
    }

    return () => clearInterval(intervalRef.current);
  }, [isPaused]);

  const visibleCards = [
    services[currentIndex],
    services[(currentIndex + 1) % services.length],
    services[(currentIndex + 2) % services.length],
    services[(currentIndex + 3) % services.length],
  ];

  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1400px] mx-auto rounded-3xl p-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-green-900 tracking-tight">
            GET TO KNOW <br /> OUR SERVICES
          </h2>
        </div>
        {/* Tablet + Desktop Layout */}
        <div
          className="hidden md:flex gap-6 transition-all duration-500"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            setHovered(null);
            setIsPaused(false);
          }}
        >
          {visibleCards.map((service, index) => {
            const isActive = hovered === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setHovered(index)}
                className={`
                  group relative h-[500px] rounded-3xl overflow-hidden
                  transition-all duration-500 ease-in-out
                  cursor-pointer shadow-xl
                  ${isActive ? "flex-[2]" : "flex-1"}
                `}
              >
                {/* Image */}
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* TOP GLASS HEADING (Visible Initially) */}
                <div
                  className="
                    absolute top-6 left-6 right-6
                    z-20
                    transition-all duration-500
                    group-hover:opacity-0
                    group-hover:-translate-y-6
                  "
                >
                  <div
                    className="
                    bg-black/10 backdrop-blur-sm
                    rounded-2xl px-5 py-3
                    border border-white/20
                    shadow-lg
                  "
                  >
                    <h3 className="text-xl font-semibold text-white">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* BOTTOM GLASS CONTENT (On Hover) */}
                <div
                  className="
                  absolute bottom-6 left-6 right-6
                  opacity-0 translate-y-6
                  group-hover:opacity-100 group-hover:translate-y-0
                  transition-all duration-500 z-20
                "
                >
                  <div
                    className="
                    bg-black/10 backdrop-blur-sm
                    rounded-2xl p-5
                    border border-white/20
                    shadow-xl
                  "
                  >
                    <h3 className="text-lg font-semibold text-white">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm text-white/90 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4">
          {services.map((service, index) => {
            const isActive = activeMobile === index;

            return (
              <div
                key={index}
                onClick={() => setActiveMobile(isActive ? null : index)}
                className="min-w-full h-[450px] snap-center relative rounded-3xl overflow-hidden shadow-xl"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                <div className="absolute bottom-0 left-0 w-full p-6 text-white">
                  <h3 className="text-xl font-semibold">{service.title}</h3>

                  <p
                    className={`mt-3 text-sm transition-all duration-300 ${
                      isActive
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-3"
                    }`}
                  >
                    {service.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
