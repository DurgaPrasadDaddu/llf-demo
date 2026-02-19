// "use client";

// export default function ProcessSection() {
//   const steps = [
//     {
//       number: "01",
//       title: "Design Consultation",
//       desc: "We begin by understanding your landscaping vision, space requirements, and lifestyle preferences through a detailed consultation session.",
//     },
//     {
//       number: "02",
//       title: "Design & Planning",
//       desc: "Our expert team crafts a custom landscape plan tailored to your property, blending creativity, sustainability, and functionality.",
//     },
//     {
//       number: "03",
//       title: "Implementation & Construction",
//       desc: "Once approved, we bring the design to life with precision execution, quality materials, and professional project management.",
//     },
//   ];

//   return (
//     <section className="w-full bg-white py-15 px-6 md:px-12 lg:px-20">
//       <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 text-center md:text-left">

//         {steps.map((step, index) => (
//           <div key={index} className="relative">

//             {/* Large Background Number */}
//             <span className="absolute -top-27 left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 text-[120px] md:text-[150px] font-extrabold text-gray-500 opacity-20 select-none">
//               {step.number}
//             </span>

//             {/* Content */}
//             <div className="relative z-10 pt-16">
//               <h3 className="text-xl md:text-2xl font-semibold text-green-900 mb-4">
//                 {step.title}
//               </h3>

//               <p className="text-gray-600 leading-relaxed text-sm md:text-base">
//                 {step.desc}
//               </p>
//             </div>

//           </div>
//         ))}

//       </div>
//     </section>
//   );
// }

"use client";

export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Design Consultation",
      desc: "We begin by understanding your landscaping vision, space requirements, and lifestyle preferences through a detailed consultation session.",
    },
    {
      number: "02",
      title: "Design & Planning",
      desc: "Our expert team crafts a custom landscape plan tailored to your property, blending creativity, sustainability, and functionality.",
    },
    {
      number: "03",
      title: "Implementation & Construction",
      desc: "Once approved, we bring the design to life with precision execution, quality materials, and professional project management.",
    },
  ];

  return (
    <section className="w-full bg-white py-10 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-10">
          <p className="text-sm tracking-[0.2em] text-green-900 uppercase mb-3">
            Our Process
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#1B3A2E]">
            From Vision to Living Landscape
          </h2>
        </div>

        {/* Process Grid */}
        <div className="grid md:grid-cols-3 gap-16 relative">

          {steps.map((step, index) => (
            <div
              key={index}
              className="relative text-center md:text-left group"
            >

              {/* Decorative Vertical Line (Desktop) */}
              {index !== steps.length - 1 && (
                <div className="hidden md:block absolute top-0 right-0 h-full w-px bg-green-900/10"></div>
              )}

              {/* Large Background Number */}
              <span
                className="
                  absolute
                  -top-10 md:-top-16
                  left-1/2 md:left-0
                  -translate-x-1/2 md:translate-x-0
                  text-[90px] md:text-[130px] lg:text-[150px]
                  font-bold
                  text-green-900/5
                  select-none
                  transition duration-500
                  group-hover:text-green-900/10
                "
              >
                {step.number}
              </span>

              {/* Content */}
              <div className="relative z-10 pt-16">

                {/* Step Badge */}
                {/* <div className="inline-block mb-6 px-4 py-1 text-xs tracking-widest uppercase rounded-full bg-[#1B3A2E] text-white">
                  Step {step.number}
                </div> */}

                <h3 className="text-xl md:text-2xl font-semibold text-[#1B3A2E] mb-4">
                  {step.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-sm md:text-base max-w-md mx-auto md:mx-0">
                  {step.desc}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
