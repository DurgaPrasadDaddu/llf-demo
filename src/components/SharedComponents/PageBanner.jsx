"use client";
import { COMPANY, SOCIAL_LINKS } from "@/lib/constants";
import Image from "next/image";

export default function PageBanner({
  title,
  description,
  imageSrc = "/Images/nature2.jpeg",
}) {
  return (
    <section className="relative w-full flex items-center justify-center p-0 sm:p-2">
      {/* Rounded Banner Container */}
      <div
        className="
        relative w-full 
        h-[50vh] sm:h-[55vh] lg:h-[60vh] 
        rounded-none sm:rounded-3xl 
        overflow-hidden
      "
      >
        {/* Background Image */}
        <Image
          src={imageSrc}
          alt="Page Background"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10 pointer-events-none" />

        {/* Content */}
        <div
          className="
          relative z-10 h-full 
          flex flex-col justify-end 
          px-6 sm:px-8 md:px-14 lg:px-20
          pb-16 sm:pb-20 lg:pb-24
        "
        >
          <h1
            className="
            text-white font-extrabold leading-[0.9] tracking-tight
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl
          "
          >
            {title}
          </h1>

          <p
            className="
            mt-4 sm:mt-5
            max-w-full sm:max-w-xl
            text-white/80
            text-sm sm:text-base lg:text-lg mb-2.5
          "
          >
            {description}
          </p>
        </div>

        {/* Bottom-Left Social Container */}
        <div
          className="
          absolute bottom-0 left-0 
          bg-white 
          px-4 sm:px-6 
          py-3 sm:py-4 
          rounded-tr-3xl
          z-20
        "
        >
          <div className="flex items-center gap-3 sm:gap-4">
            {SOCIAL_LINKS.map(({ Icon, href }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-10 h-10 sm:w-11 sm:h-11
                  flex items-center justify-center
                  rounded-full

                  bg-black/15
                  backdrop-blur-md
                  border border-black/10

                  text-gray-700
                  transition-all duration-500 ease-out

                  hover:bg-green-600/25
                  hover:border-green-500/40
                  hover:text-green-700
                  hover:shadow-[0_10px_30px_rgba(34,197,94,0.05)]
                  hover:scale-110
                "
              >
                <Icon size={14} className="sm:hidden" />
                <Icon size={16} className="hidden sm:block" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
