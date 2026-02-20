// // "use client";

// // import { useState } from "react";
// // import Image from "next/image";

// // const testimonials = [
// //   {
// //     name: "Nayana",
// //     role: "CEO, Forest Corp",
// //     company: "Nayana Info Solutions",
// //     text: "The team at Lawn transformed a backyard into a beautiful oasis! They were professional, knowledgeable, and truly passionate about their work. I could happier with the results.",
// //     image: "/Images/nayana.png",
// //   },
// //   {
// //     name: "Prasad Veera",
// //     role: "Home Owner",
// //     company: "GreenNest",
// //     text: "Their landscape design exceeded all our expectations. The team created harmony between architecture and nature.",
// //     image: "/Images/prasad.png",
// //   },
// //   {
// //     name: "Leela",
// //     role: "Property Developer",
// //     company: "Pionner Info Solutions",
// //     text: "Outstanding craftsmanship and attention to detail. Highly recommend their landscaping services.",
// //     image: "/Images/Leela.png",
// //   },
// //   {
// //     name: "Nayana",
// //     role: "CEO, Forest Corp",
// //     company: "Nayana Info Solutions",
// //     text: "The team at Lawn transformed a backyard into a beautiful oasis! They were professional, knowledgeable, and truly passionate about their work. I could happier with the results.",
// //     image: "/Images/nayana.png",
// //   },
// // ];

// // export default function Testimonials() {
// //   const [active, setActive] = useState(0);

// //   return (
// //     <section className="w-full p-8 sm:p-6 bg-white">
// //         <div className="relative bg-black rounded-3xl overflow-hidden shadow-xl py-14 px-6 md:px-12 lg:px-20">

// //       {/* Background Image Overlay */}
// //       <div className="absolute inset-0 opacity-40">
// //         <Image
// //           src="/Images/test1.jpeg"
// //           alt="Background"
// //           fill
// //           className="object-cover"
// //         />
// //       </div>

// //       <div className="relative max-w-7xl mx-auto">

// //         {/* Section Header */}
// //         <div className="text-center mb-16">
// //           <div className="flex items-center justify-center gap-3 text-green-400 text-sm font-medium mb-2">
// //             <span className="w-8 h-px bg-green-400"></span>
// //             TESTIMONIALS
// //             <span className="w-8 h-px bg-green-400"></span>
// //           </div>

// //           <h2 className="text-white text-4xl md:text-5xl font-bold">
// //             What Our Happy Clients Say
// //           </h2>
// //         </div>

// //         {/* Content */}
// //         <div className="grid lg:grid-cols-2 gap-12 items-center">

// //           {/* LEFT SIDE */}
// //           <div className="text-white">

// //             <h3 className="text-xl font-semibold mb-6">
// //               {testimonials[active].company}
// //             </h3>

// //             <p className="text-lg leading-relaxed text-white/80 mb-6">
// //               “{testimonials[active].text}”
// //             </p>

// //             <div className="mb-8">
// //               <p className="font-semibold">
// //                 {testimonials[active].name}
// //               </p>
// //               <p className="text-sm text-white/60">
// //                 {testimonials[active].role}
// //               </p>
// //             </div>

// //             {/* Avatars */}
// //             <div className="flex gap-4">
// //               {testimonials.map((item, index) => (
// //                 <div
// //                   key={index}
// //                   onClick={() => setActive(index)}
// //                   className={`
// //                     relative w-12 h-12 rounded-full overflow-hidden cursor-pointer
// //                     border-2 transition
// //                     ${
// //                       active === index
// //                         ? "border-green-400 scale-110"
// //                         : "border-transparent opacity-70 hover:opacity-100"
// //                     }
// //                   `}
// //                 >
// //                   <Image
// //                     src={item.image}
// //                     alt={item.name}
// //                     fill
// //                     className="object-cover"
// //                   />
// //                 </div>
// //               ))}
// //             </div>

// //           </div>

// //           {/* RIGHT SIDE (Stacked Cards) */}
// //           {/* <div className="relative h-[420px] flex justify-center items-center">

           
// //             <div className="absolute w-[260px] h-[360px] bg-purple-300 rounded-3xl translate-x-10 translate-y-6 opacity-80"></div>

         
// //             <div className="absolute w-[260px] h-[360px] bg-gray-300 rounded-3xl translate-x-6 translate-y-3 opacity-90"></div>

           
// //             <div className="relative w-[260px] h-[360px] rounded-3xl overflow-hidden shadow-2xl">
// //               <Image
// //                 src={testimonials[active].image}
// //                 alt="Client"
// //                 fill
// //                 className="object-cover"
// //               />
// //             </div>

// //           </div> */}

// //         </div>
// //       </div>
// //       </div>
// //     </section>
// //   );
// // }

// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";

// const testimonials = [
//   {
//     name: "Nayana",
//     role: "CEO, Forest Corp",
//     company: "Nayana Info Solutions",
//     text: "The team transformed our backyard into a breathtaking green sanctuary. Their attention to detail and passion for nature truly exceeded expectations.",
//     image: "/Images/nayana.png",
//   },
//   {
//     name: "Prasad Veera",
//     role: "Home Owner",
//     company: "GreenNest",
//     text: "From concept to completion, the landscaping was handled with absolute professionalism. The blend of greenery, lighting, and stone elements created a peaceful retreat we now enjoy every day.",
//     image: "/Images/prasad.png",
//   },
//   {
//     name: "Leela",
//     role: "Property Developer",
//     company: "Pioneer Info Solutions",
//     text: "Their landscape design elevated the entire aesthetic of our property. The structured lawns, curated plants, and elegant pathways added both beauty and long-term value.",
//     image: "/Images/Leela.png",
//   },
//   {
//     name: "Chandra Shekar",
//     role: "CEO",
//     company: "Chakra Trding Impex ",
//     text: "What impressed us most was their creativity and execution. The outdoor space now reflects sophistication, balance, and a true connection with nature.",
//     image: "/Images/chandu.png",
//   },
//   {
//     name: "Surya",
//     role: "Property Developer",
//     company: "Surya Technologies Pvt Ltd",
//     text: "The transformation was remarkable. Their premium landscaping approach enhanced curb appeal, functionality, and created an inviting environment for both residents and visitors.",
//     image: "/Images/surya.png",
//   },
// ];

// export default function Testimonials() {
//   const [active, setActive] = useState(0);

//   // Auto Slide
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActive((prev) => (prev + 1) % testimonials.length);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="w-full p-8 sm:p-6 bg-white">         
//     <div className="relative bg-black rounded-3xl overflow-hidden shadow-xl py-14 px-6 md:px-12 lg:px-20">

//       {/* Background */}
//       <div className="absolute inset-0">
//         <Image
//           src="/Images/test1.jpeg"
//           alt="Background"
//           fill
//           className="object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black"></div>
//       </div>

//       <div className="relative max-w-4xl mx-auto text-center text-white">

//         {/* Section Title */}
//         <div className="mb-16">
//           <p className="text-green-400 tracking-widest text-sm mb-3">
//             TESTIMONIALS
//           </p>
//           <h2 className="text-4xl md:text-5xl font-bold">
//             What Our Clients Say
//           </h2>
//         </div>

//         {/* Premium Glass Card */}
//         {/* <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 md:p-14 shadow-2xl transition-all duration-700"> */}

//           {/* Slide Content */}
//           <div
//             key={active}
//             className="transition-all duration-700 ease-in-out"
//           >
//             <h3 className="text-xl font-semibold text-green-400 mb-6">
//               {testimonials[active].company}
//             </h3>

//             <p className="text-lg md:text-xl leading-relaxed text-white/80 mb-8">
//               “{testimonials[active].text}”
//             </p>

//             <div>
//               <p className="font-semibold text-lg">
//                 {testimonials[active].name}
//               </p>
//               <p className="text-sm text-white/60">
//                 {testimonials[active].role}
//               </p>
//             </div>
//           </div>

//           {/* Avatar Navigation */}
//           <div className="flex justify-center gap-5 mt-10">
//             {testimonials.map((item, index) => (
//               <div
//                 key={index}
//                 onClick={() => setActive(index)}
//                 className={`relative w-14 h-14 rounded-full overflow-hidden cursor-pointer transition-all duration-500
//                   ${
//                     active === index
//                       ? "ring-4 ring-green-400 scale-110"
//                       : "opacity-60 hover:opacity-100"
//                   }
//                 `}
//               >
//                 <Image
//                   src={item.image}
//                   alt={item.name}
//                   fill
//                   className="object-center"
//                 />
//               </div>
//             ))}
//           </div>

//         {/* </div> */}
//       </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaLeaf } from "react-icons/fa";

const testimonials = [
  {
    name: "Nayana",
    role: "CEO, Forest Corp",
    company: "Nayana Info Solutions",
    text: "The team transformed our backyard into a breathtaking green sanctuary. Their attention to detail and passion for nature truly exceeded expectations.",
    image: "/Images/nayana.png",
    satisfaction: 95,
  },
  {
    name: "Prasad Veera",
    role: "Home Owner",
    company: "GreenNest",
    text: "From concept to completion, the landscaping was handled with absolute professionalism. The blend of greenery, lighting, and stone elements created a peaceful retreat we now enjoy every day.",
    image: "/Images/prasad.png",
    satisfaction: 90,
  },
  {
    name: "Leela",
    role: "Property Developer",
    company: "Pioneer Info Solutions",
    text: "Their landscape design elevated the entire aesthetic of our property. The structured lawns, curated plants, and elegant pathways added both beauty and long-term value.",
    image: "/Images/Leela.png",
    satisfaction: 95,
  },
  {
    name: "Chandra Shekar",
    role: "CEO",
    company: "Chakra Trding Impex ",
    text: "What impressed us most was their creativity and execution. The outdoor space now reflects sophistication, balance, and a true connection with nature.",
    image: "/Images/chandu.png",
    satisfaction: 90,
  },
  {
    name: "Surya",
    role: "Property Developer",
    company: "Surya Technologies Pvt Ltd",
    text: "The transformation was remarkable. Their premium landscaping approach enhanced curb appeal, functionality, and created an inviting environment for both residents and visitors.",
    image: "/Images/surya.png",
    satisfaction: 92,
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const leafCount = Math.ceil(testimonials[active].satisfaction / 10);

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-12 bg-white">
      <div className="relative bg-black rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.25)] py-16 px-6 sm:px-10 md:px-14 lg:px-20">

        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/Images/test1.jpeg"
            alt="Background"
            fill
            className="object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center text-white">

          {/* Section Title */}
          <div className="mb-14 md:mb-16">
            <p className="text-green-400 tracking-[0.3em] text-xs sm:text-sm mb-3">
              TESTIMONIALS
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              What Our Clients Say
            </h2>
          </div>

          {/* Slide Content */}
          <div
            key={active}
            className="transition-all duration-700 ease-in-out"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-green-400 mb-6">
              {testimonials[active].company}
            </h3>

            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-white/80 mb-8 px-2 sm:px-6">
              “{testimonials[active].text}”
            </p>

            <div className="space-y-2">
              <p className="font-semibold text-lg">
                {testimonials[active].name}
              </p>

              <p className="text-sm text-white/60">
                {testimonials[active].role}
              </p>

              {/* Client Satisfaction */}
              <div className="flex flex-wrap items-center justify-center gap-3 mt-3">
                <p className="text-xs sm:text-sm text-white/80">
                  Client Satisfaction
                </p>

                <div className="flex items-center gap-1">
                  {Array.from({ length: leafCount }).map((_, i) => (
                    <FaLeaf
                      key={i}
                      className="text-green-400 text-xs sm:text-sm drop-shadow-[0_0_6px_rgba(34,197,94,0.6)]"
                    />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-white/90 font-medium">
                  {testimonials[active].satisfaction}%
                </p>
              </div>
            </div>
          </div>

          {/* Avatar Navigation */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-5 mt-10">
            {testimonials.map((item, index) => (
              <div
                key={index}
                onClick={() => setActive(index)}
                className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden cursor-pointer transition-all duration-500
                  ${
                    active === index
                      ? "ring-4 ring-green-400 scale-110 shadow-lg"
                      : "opacity-60 hover:opacity-100"
                  }
                `}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}