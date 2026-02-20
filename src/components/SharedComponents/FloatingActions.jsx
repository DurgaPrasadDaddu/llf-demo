"use client";

import { Download } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingActions() {
  return (
    <div
      className="
        fixed 
        bottom-4 right-4
        sm:bottom-6 sm:right-6
        md:bottom-8 md:right-8
        lg:bottom-10 lg:right-10
        z-[9999]
        flex flex-col gap-3 sm:gap-4
        items-end
      "
    >
      {/* Brochure Button */}
      {/* <a
        href="/brochure/leaf-loam-brochure.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="
          group
          flex items-center justify-center
          w-12 h-12
          sm:w-14 sm:h-14
          md:w-16 md:h-16
          rounded-full
          bg-[#FFCE1B]
          text-[#1B3A2E]
          shadow-xl
          backdrop-blur-md
          transition-all duration-300 ease-out
          hover:scale-110
          hover:shadow-2xl
          active:scale-95
        "
      >
        <Download
          size={20}
          className="sm:w-6 sm:h-6 md:w-7 md:h-7 transition-transform duration-300 group-hover:rotate-6"
        />
      </a> */}

      {/* Brochure launch soon*/}
      <div className="relative group flex items-center">

        {/* Premium Tooltip */}
        <div
          className="
            absolute right-full mr-4
            opacity-0 translate-x-4
            group-hover:opacity-100 group-hover:translate-x-0
            transition-all duration-300 ease-out
            pointer-events-none
          "
        >
          <div
            className="
              px-4 py-2
              rounded-xl
              bg-white/10 backdrop-blur-xl
              border border-white/20
              text-white text-sm
              shadow-[0_8px_30px_rgba(0,0,0,0.35)]
              whitespace-nowrap
            "
          >
            Launching Soon ✨
          </div>
        </div>

        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="
            group
            flex items-center justify-center
            w-12 h-12
            sm:w-14 sm:h-14
            md:w-16 md:h-16
            rounded-full
            bg-[#FFCE1B]
            text-[#1B3A2E]
            shadow-xl
            backdrop-blur-md
            transition-all duration-300 ease-out
            hover:scale-110
            hover:shadow-2xl
            active:scale-95
          "
        >
          <Download
            size={20}
            className="sm:w-6 sm:h-6 md:w-7 md:h-7 transition-transform duration-300 group-hover:rotate-6"
          />
        </a>
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/918247779436?text=Hello%20Leaf-Loam,%20I%20am%20interested%20in%20your%20landscaping%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="
          relative group
          flex items-center justify-center
          w-12 h-12
          sm:w-14 sm:h-14
          md:w-16 md:h-16
          rounded-full
          bg-[#25D366]
          text-white
          shadow-[0_8px_25px_rgba(37,211,102,0.4)]
          transition-all duration-300 ease-out
          hover:scale-110
          hover:shadow-[0_15px_35px_rgba(37,211,102,0.6)]
          active:scale-95
        "
      >
        <FaWhatsapp
          size={18}
          className="sm:w-5 sm:h-5 md:w-6 md:h-6"
        />

        {/* Premium Pulse Effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366]/30 animate-ping pointer-events-none"></span>
      </a>
    </div>
  );
}