"use client";
import { COMPANY, SOCIAL_LINKS } from "@/lib/constants";
import Link from "next/link";
import { Linkedin, Facebook, Instagram, Twitter } from "lucide-react";

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
            <div>
              <h2 className="text-xl sm:text-3xl font-bold mb-4 leading-snug">
                Leaf-Loam
              </h2>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 leading-snug">
                Safe, Fast & Reliable
                <br />
                Landscape Services
              </h3>

              <p className="text-[#FFCE1B] italic leading-relaxed text-sm sm:text-base">
                “Rooted in Nature. Built with Care.
                Designing landscapes that grow with time.”
              </p>
            </div>

            {/* QUICK LINKS */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3 text-white/80 text-sm">
                <li><Link className="hover:text-[#FFCE1B] transition" href="/">Home</Link></li>
                <li><Link className="hover:text-[#FFCE1B] transition" href="/about">About Us</Link></li>
                <li><Link className="hover:text-[#FFCE1B] transition" href="/services">Services</Link></li>
                <li><Link className="hover:text-[#FFCE1B] transition" href="/projects">Projects</Link></li>
                <li><Link className="hover:text-[#FFCE1B] transition" href="/contact">Contact</Link></li>
              </ul>
            </div>

            {/* SERVICES */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Services</h4>
              <ul className="space-y-3 text-white/80 text-sm">
                {[
                  { name: "LandScaping", slug: "landscaping" },
                  { name: "Urban Kitchen Gardening", slug: "urban-gardening" },
                  { name: "Balcony / Terrace Makeovers", slug: "balcony-makeover" },
                  { name: "Corporate Plant Rentals", slug: "corporate-rentals" },
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

              <div className="flex gap-4 mt-6">
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
              </div>
            </div>

          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/20 py-6 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm text-white/60 text-center md:text-left">
            <p>
              © {new Date().getFullYear()} Leaf & Loam Landscape Services.
              All Rights Reserved.
            </p>
            <a href="https://www.ssdtechinfrasolutions.in/"  target="_blank" className="mt-3 md:mt-0">
              Design & Developed by SSD Techinfra solutions
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
