"use client";

import Image from "next/image";
import Link from "next/link";

export default function VillaHero() {
  return (
    <section className="w-full p-2 sm:p-4 bg-white">

      {/* Rounded Container */}
      <div className="relative w-full h-[85vh] sm:h-[90vh] rounded-3xl overflow-hidden">

        {/* Background Image */}
        <Image
          src="/Images/nature1.webp" 
          
          alt="Villa in Nature"
          fill
          priority
          className="object-center"
        />

        {/* Dark Gradient Overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/10" /> */}

        {/* Top Right Button */}
        <div className="absolute bottom-6 right-6 z-20">
          <Link
            href="#"
            className="px-5 py-2 rounded-full bg-black/20 backdrop-blur-md text-white text-sm font-medium hover:bg-white/30 transition"
          >
            VIEW MORE PROJECTS↗
          </Link>
        </div>

        {/* Bottom Left Heading */}
        <div className="absolute top-8 right-6 sm:right-10 md:right-16 z-20 text-right">

          <h1
            className="
              text-white font-extrabold
              leading-[0.85]
              tracking-tight
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[90px]
            "
          >
            LIVE <br />
            NATURALLY
          </h1>

        </div>

      </div>
    </section>
  );
}
