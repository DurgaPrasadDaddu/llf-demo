"use client";

import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="w-full bg-white py-10 md:py-18 px-6 md:px-12 lg:px-20">

      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-16 lg:gap-24">

        {/* ================= LEFT SIDE ================= */}
        
        <div className="lg:w-[35%] space-y-5">

          <div>

            <div className="flex items-start gap-3 mb-2">
              <span className="text-3xl font-semibold tracking-wide uppercase text-green-900 relative">
                About Us
                <span className="absolute -bottom-2 left-0 w-12 h-[2px] bg-green-900"></span>
              </span>
            </div>

            <div>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                At Leaf & Loam, we believe landscapes are more than decorative surroundings. <br />
                They are living ecosystems — extensions of architecture, emotion, and human experience. <br />
                Headquartered in Hyderabad and executing projects across India, we specialize in full-scale landscape design, planning, and development for residential, commercial, industrial, and institutional spaces.
              </p>

              <Link
                href="/about"
                className="
                  inline-flex w-fit 
                  bg-green-900 text-white 
                  px-7 py-3 rounded-full 
                  font-medium items-center gap-2
                  transition-all duration-300
                  hover:bg-green-800
                  hover:shadow-lg
                  hover:shadow-green-900/20
                  hover:scale-[1.03]
                "
              >
                More about us <span className="text-lg">↗</span>
              </Link>
            </div>

          </div>

        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="lg:w-[60%] text-left">

          <h1
            className="
              font-black
              leading-[0.85]
              tracking-[-0.03em]
              text-4xl sm:text-5xl md:text-6xl lg:text-[70px] xl:text-[90px]
            "
          >

            <span className="block text-black drop-shadow-sm">
              DESIGNING
            </span>

            {/* IMAGE TEXT */}
            <span className="
              block
              bg-[url('/Images/nature2.jpeg')]
              bg-cover
              bg-center
              bg-clip-text
              text-transparent
            ">
              LANDSCAPES
            </span>

            <span className="block text-black drop-shadow-sm">
              THAT LIVE
            </span>

            {/* IMAGE TEXT */}
            <span className="
              block
              bg-[url('/Images/nature2.jpeg')]
              bg-cover
              bg-center
              bg-clip-text
              text-transparent
            ">
              AND GROW
            </span>

          </h1>

        </div>

      </div>

    </section>
  );
}
