"use client";

import { MessageCircle, Download } from "lucide-react";

export default function FloatingActions() {
  return (
    <div
      className="
        fixed bottom-10 right-6
        sm:bottom-15 sm:right-8
        z-[9999]
        flex flex-col gap-4
        items-end
      "
    >
      {/* Brochure Button */}
      <a
        href="/brochure/leaf-loam-brochure.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="
          flex items-center justify-center
          w-14 h-14 sm:w-16 sm:h-16
          rounded-full
          bg-[#FFCE1B]
          text-[#1B3A2E]
          shadow-lg
          hover:bg-[#fdc90e]
          transition-all duration-300
          hover:scale-110
        "
      >
        <Download size={22} />
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919642482728?text=Hello%20Leaf-Loam,%20I%20am%20interested%20in%20your%20landscaping%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="
          relative
          flex items-center justify-center
          w-14 h-14 sm:w-16 sm:h-16
          rounded-full
          bg-green-500
          text-white
          shadow-[0_10px_30px_rgba(34,197,94,0.4)]
          transition-all duration-300
          hover:scale-110
        "
      >
        <MessageCircle size={26} />

        {/* Pulse Effect */}
        <span className="absolute inset-0 rounded-full bg-green-500/40 animate-ping -z-10"></span>
      </a>
    </div>
  );
}
