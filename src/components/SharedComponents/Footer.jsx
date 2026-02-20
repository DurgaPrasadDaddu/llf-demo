"use client";
import { COMPANY, SOCIAL_LINKS } from "@/lib/constants";
import Link from "next/link";
import { Linkedin, Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full p-2 sm:p-2 bg-transparent">
      {/* CARD CONTAINER */}
      <div className="bg-[#1B3A2E] text-white rounded-3xl overflow-hidden shadow-lg">
        {/* MAIN GRID */}
        <div className="relative">
          <div className="absolute inset-0 bg-[#1B3A2E]/95"></div>

          <div className="relative max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* LEFT SIDE */}
            <div className="flex flex-col items-center">
              <Link href="/" className="flex flex-col items-center">
              <Image
                src="/Images/logo1.png"
                alt="Leaf-Loam Landscaping Services"
                width={300}
                height={100}
                priority
                className="
                  h-20 sm:h-20 md:h-22 lg:h-24 xl:h-26
                  w-auto
                  object-contain mb-2
                  transition-all duration-300
                "
              />
            </Link>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 leading-snug">
                Safe, Fast & Reliable
                <br />
                Landscape Services
              </h3>

              <p className="text-[#FFCE1B] italic leading-relaxed text-sm sm:text-base">
                “Rooted in Nature. Built with Care. Designing landscapes that
                grow with time.”
              </p>
            </div>

            {/* QUICK LINKS */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3 text-white/80 text-sm">
                <li>
                  <Link className="hover:text-[#FFCE1B] transition" href="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-[#FFCE1B] transition"
                    href="/about"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-[#FFCE1B] transition"
                    href="/services"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-[#FFCE1B] transition"
                    href="/projects"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-[#FFCE1B] transition"
                    href="/contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* SERVICES */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Services</h4>
              <ul className="space-y-3 text-white/80 text-sm">
                {[
                  { name: "LandScaping", slug: "landscaping" },
                  { name: "Urban Kitchen Gardening", slug: "urban-gardening" },
                  {
                    name: "Balcony / Terrace Makeovers",
                    slug: "balcony-makeover",
                  },
                  {
                    name: "Corporate Plant Rentals",
                    slug: "corporate-rentals",
                  },
                  { name: "Consultation", slug: "consultation" },
                  { name: "Maintenance", slug: "maintenance" },
                ].map((service, index) => (
                  <li key={index}>
                    <Link
                      href={`/services?type=${service.slug}`}
                      className="hover:text-[#FFCE1B] transition"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CONTACT */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
              <ul className="space-y-3 text-white/80 text-sm">
                <li>{COMPANY.phone}</li>
                <li>{COMPANY.email}</li>
                <li>{COMPANY.address}</li>
              </ul>

              {/* <div className="flex gap-4 mt-6">
                {SOCIAL_LINKS.map(({ Icon, href }, index) => (
                  <a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full  hover:text-black    bg-white/10 backdrop-blur-xl
                    hover:bg-white/20
                    transition-all duration-300
                    overflow-hidden
                    border border-white/30
                    whitespace-nowrapduration-300 cursor-pointer"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div> */}
              <div className="flex  gap-4 mt-6">
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
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/20 py-6 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm text-white/60 text-center md:text-left">
            <p>
              © {new Date().getFullYear()} Leaf & Loam Landscape Services. All
              Rights Reserved.
            </p>
            <a
              href="https://www.ssdtechinfrasolutions.in/"
              target="_blank"
              className="mt-3 md:mt-0"
            >
              Design & Developed by SSD Techinfra solutions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
