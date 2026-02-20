"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Nayana",
    company: "Nayana Info Solutions, Bengaluru",
    text: "A peaceful garden retreat for family and relaxation.",
    image: "/Images/p4.webp",
  },
  {
    name: "Prasad Veera",
    company: "GreenNest, Rajamundry",
    text: "Modern landscaping blended beautifully with natural textures and greenery.",
    image: "/Images/p2.webp",
  },
  {
    name: "Leela",
    company: "Pionner Info Solutions, Hyderabad",
    text: "Elegant outdoor living space designed with harmony and balance.",
    image: "/Images/p3.jpg",
  },
   {
    name: "Chandra Shekar",
    company: "Chakra Trding Impex ",
    text: "Creative execution turned our space into a refined, nature-inspired retreat.",
    image: "/Images/p7.jpeg",
  },
  {
    name: "Surya",
    company: "Surya Technologies Pvt Ltd",
    text: "A refined transformation that elevated both beauty and comfort.",
    image: "/Images/p6.jpeg",
  },
];

export default function ProjectsSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextIndex =
    current === testimonials.length - 1 ? 0 : current + 1;

  return (
    <section className="m-2 bg-white pt-8 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-green-900 tracking-tight">
            GET TO KNOW OUR LATEST <br /> GARDEN WORKS
          </h2>
        </div>

        {/* Card Container */}
        <div className="bg-white rounded-3xl p-6 shadow-lg">

          <div className="flex gap-6">

            {/* Main Image */}
            <div className="relative w-[75%] h-[450px] rounded-2xl overflow-hidden">
              <Image
                src={testimonials[current].image}
                alt={testimonials[current].name}
                fill
                className="object-center"
              />
            </div>

            {/* Preview Card */}
            <div
              onClick={() => setCurrent(nextIndex)}
              className="relative w-[25%] h-[450px] rounded-2xl overflow-hidden cursor-pointer group"
            >
              <Image
                src={testimonials[nextIndex].image}
                alt="Next"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full border border-white flex items-center justify-center text-white text-sm tracking-wider group-hover:bg-white group-hover:text-black transition">
                  NEXT
                </div>
              </div>
            </div>

          </div>

          {/* Info Section */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">

            <div>
              <p className="text-xs text-green-900 tracking-wider">NAME</p>
              <p className="font-semibold text-lg">
                {testimonials[current].name}
              </p>
            </div>

            <div>
              <p className="text-xs text-green-900 tracking-wider">LOCATION</p>
              <p className="font-semibold text-lg">
                {testimonials[current].company}
              </p>
            </div>

            <div>
              <p className="text-gray-600 leading-relaxed">
                {testimonials[current].text}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";

// const testimonials = [
//   {
//     name: "Nayana",
//     company: "Nayana Info Solutions, Bengaluru",
//     text: "A tranquil garden oasis perfect for your relaxation time.",
//     image: "/Images/p4.webp",
//   },
//   {
//     name: "Prasad Veera",
//     company: "GreenNest, Rajamundry",
//     text: "Modern landscaping blended beautifully with natural textures.",
//     image: "/Images/p2.webp",
//   },
//   {
//     name: "Leela",
//     company: "Pionner Info Solutions, Hyderabad",
//     text: "Elegant outdoor living space designed with harmony.",
//     image: "/Images/p3.jpg",
//   },
//   {
//     name: "Chandra Shekar",
//     company: "Chakra Trading Impex",
//     text: "Sophisticated outdoor transformation with natural connection.",
//     image: "/Images/p7.jpeg",
//   },
//   {
//     name: "Surya",
//     company: "Surya Technologies Pvt Ltd",
//     text: "Premium landscaping that enhanced curb appeal.",
//     image: "/Images/p6.jpeg",
//   },
// ];

// export default function ProjectsSection() {
//   const [current, setCurrent] = useState(0);
//   const [fade, setFade] = useState(true);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setFade(false);

//       setTimeout(() => {
//         setCurrent((prev) =>
//           prev === testimonials.length - 1 ? 0 : prev + 1
//         );
//         setFade(true);
//       }, 400); // fade duration

//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   const nextIndex =
//     current === testimonials.length - 1 ? 0 : current + 1;

//   return (
//     <section className="m-2 bg-white pt-8 px-4 sm:px-6 md:px-12 lg:px-20">
//       <div className="max-w-7xl mx-auto">

//         <div className="text-center mb-8">
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-green-900">
//             GET TO KNOW OUR LATEST <br /> GARDEN WORKS
//           </h2>
//         </div>

//         <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-xl">

//           <div className="flex flex-col md:flex-row gap-6">

//             {/* Main Image */}
//             <div className="relative w-full md:w-[75%] h-[280px] sm:h-[350px] md:h-[450px] rounded-2xl overflow-hidden">
//               <Image
//                 src={testimonials[current].image}
//                 alt={testimonials[current].name}
//                 fill
//                 sizes="(max-width:768px) 100vw, 75vw"
//                 quality={70}
//                 priority={current === 0}
//                 className={`object-cover object-center transition-opacity duration-500 ease-in-out ${
//                   fade ? "opacity-100" : "opacity-0"
//                 }`}
//               />
//             </div>

//             {/* Preview (desktop only) */}
//             <div
//               onClick={() => setCurrent(nextIndex)}
//               className="hidden md:block relative md:w-[25%] h-[450px] rounded-2xl overflow-hidden cursor-pointer group"
//             >
//               <Image
//                 src={testimonials[nextIndex].image}
//                 alt="Next"
//                 fill
//                 sizes="25vw"
//                 quality={60}
//                 loading="lazy"
//                 className="object-cover transition-transform duration-700 group-hover:scale-105"
//               />

//               <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
//                 <div className="w-20 h-20 rounded-full border border-white flex items-center justify-center text-white text-sm tracking-wider group-hover:bg-white group-hover:text-black transition">
//                   NEXT
//                 </div>
//               </div>
//             </div>

//           </div>

//           <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
//             <div>
//               <p className="text-xs text-green-900 tracking-wider">NAME</p>
//               <p className="font-semibold text-lg">
//                 {testimonials[current].name}
//               </p>
//             </div>

//             <div>
//               <p className="text-xs text-green-900 tracking-wider">LOCATION</p>
//               <p className="font-semibold text-lg">
//                 {testimonials[current].company}
//               </p>
//             </div>

//             <div>
//               <p className="text-gray-600 leading-relaxed">
//                 {testimonials[current].text}
//               </p>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }