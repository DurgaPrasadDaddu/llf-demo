"use client";
import { COMPANY, SOCIAL_LINKS } from "@/lib/constants";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full flex items-center justify-center p-0 sm:p-2">
      {/* Rounded Hero Container */}
      <div
        className="
        relative w-full 
        h-[100vh] sm:h-[95vh] lg:h-[95vh]
        rounded-none sm:rounded-3xl 
        overflow-hidden
      "
      >
        {/* Background Image */}
        <Image
          src="/Images/nature2.jpeg"
          alt="Garden Background"
          fill
          priority
          className="object-center object-fill"
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10 pointer-events-none" />

        {/* Content */}
        <div
          className="
          relative z-10 h-full 
          flex flex-col justify-end 
          px-6 sm:px-8 md:px-14 lg:px-20
          pb-28 sm:pb-32 lg:pb-36
        "
        >
          <h1
            className="
            text-white font-extrabold leading-[0.9] tracking-tight
            text-2xl sm:text-2xl md:text-3xl lg:text-6xl xl:text-[90px]
          "
          >
            {COMPANY.heroTitle.split(" ").slice(0, 2).join(" ")} <br />
            {COMPANY.heroTitle.split(" ").slice(2).join(" ")}
          </h1>

          <p
            className="
            mt-5 sm:mt-6
            max-w-full sm:max-w-xl
            text-white/80
            text-sm sm:text-base lg:text-lg
          "
          >
            {COMPANY.heroDescription}
          </p>
        </div>

        {/* Attached Bottom-Left Social Container */}
        {/* <div
          className="
          absolute bottom-0 left-0 
          bg-white 
          px-4 sm:px-6 
          py-3 sm:py-4 
          rounded-tr-3xl
        "
        >
          <div
            className="
              flex items-center gap-3 sm:gap-4
              absolute bottom-0 left-0 
              bg-white 
              px-4 sm:px-6 
              py-3 sm:py-4 
              rounded-tr-3xl
              z-20
            "
          >
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
        </div> */}
        {/* <div
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
          {SOCIAL_LINKS.map(({ Icon, href, type }, index) => {
            
            let brandHover = "";

            if (type === "linkedin") {
              brandHover =
                "hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2]";
            }

            if (type === "facebook") {
              brandHover =
                "hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2]";
            }

            if (type === "website") {
              brandHover =
                "hover:bg-black hover:text-white hover:border-black";
            }

            if (type === "instagram") {
              brandHover =
                "hover:bg-gradient-to-r hover:from-[#405DE6] hover:via-[#E1306C] hover:to-[#FCAF45] hover:text-white hover:border-transparent";
            }

            return (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  w-10 h-10 sm:w-11 sm:h-11
                  flex items-center justify-center
                  rounded-full

                  bg-black/15
                  backdrop-blur-md
                  border border-black/10

                  text-gray-700
                  transition-all duration-500 ease-out

                  hover:scale-110
                  hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)]
                  ${brandHover}
                `}
              >
                <Icon size={16} />
              </a>
            );
          })}
        </div>
        </div> */}
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
            {SOCIAL_LINKS.map(({ Icon, href, type }, index) => {
              let brandStyle = "";

              if (type === "linkedin") {
                brandStyle = "bg-[#0A66C2] text-white border-[#0A66C2]";
              }

              if (type === "facebook") {
                brandStyle = "bg-[#1877F2] text-white border-[#1877F2]";
              }

              if (type === "website") {
                brandStyle = "bg-black text-white border-black";
              }

              if (type === "instagram") {
                brandStyle =
                  "bg-gradient-to-b from-[#405DE6] via-[#E1306C] to-[#FCAF45] text-white border-transparent";
              }

              return (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    w-10 h-10 sm:w-11 sm:h-11
                    flex items-center justify-center
                    rounded-full
                    border
                    ${brandStyle}

                    transition-all duration-500 ease-out
                    hover:scale-110
                    hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)]
                  `}
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
