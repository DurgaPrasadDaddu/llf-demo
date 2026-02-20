"use client";
import { COMPANY } from "@/lib/constants";
import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";

export default function ContactSection() {
  return (
    <section className="relative bg-white py-10 px-4 sm:px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">

        {/* Heading */}
        <div className="text-center mb-14 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#1F3D2B]">
            Start Your Landscape Journey
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Let’s shape your outdoor space into a timeless green retreat. Share
            your vision and we’ll transform it into a living experience.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">

          {/* LEFT SIDE */}
          <div className="relative group rounded-3xl overflow-hidden ">

            {/* Watermark Logo Background */}
            <div className="absolute inset-0 flex items-center justify-center opacity-15">
              <Image
                src="/Images/logo1.png"
                alt="Leaf & Loam Logo"
                fill
                className="object-contain p-12"
              />
            </div>

            {/* White Overlay */}
            {/* <div className="absolute inset-0 bg-white/90 backdrop-blur-sm"></div> */}


            {/* Content */}
            <div className="relative p-8 md:p-12 space-y-10">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-[#1F3D2B] mb-3">
                  Contact Details
                </h3>
                <div className="w-12 h-1 bg-[#1F3D2B] rounded-full"></div>
              </div>

              <div className="space-y-8 text-gray-700">
                <div className="flex items-start gap-4">
                  <Phone className="text-[#1F3D2B] shrink-0 mt-1" />
                  <div>
                    <p className="text-xs uppercase text-gray-400">Phone</p>
                    <p className="text-base font-medium break-words">
                      {COMPANY.phone}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="text-[#1F3D2B] shrink-0 mt-1" />
                  <div>
                    <p className="text-xs uppercase text-gray-400">Email</p>
                    <p className="text-base font-medium break-words">
                      {COMPANY.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="text-[#1F3D2B] shrink-0 mt-1" />
                  <div>
                    <p className="text-xs uppercase text-gray-400">Address</p>
                    <p className="text-base font-medium break-words">
                      {COMPANY.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative w-full">

            <div className="hidden sm:block absolute inset-0 translate-x-3 translate-y-3 border border-[#1F3D2B]/10 rounded-3xl"></div>

            <div className="relative bg-green-300 rounded-3xl p-6 sm:p-8 md:p-12 shadow-[0_25px_60px_rgba(0,0,0,0.08)] border border-gray-100">
              <h3 className="text-xl sm:text-2xl font-semibold text-[#1F3D2B] mb-6">
                Request a Consultation
              </h3>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="text" placeholder="Full Name"
                    className="w-full bg-[#f8fbf6] border border-gray-200 rounded-2xl px-4 py-3 focus:ring-2 focus:ring-[#1F3D2B]/20 outline-none transition" />
                  <input type="tel" placeholder="Mobile Number"
                    className="w-full bg-[#f8fbf6] border border-gray-200 rounded-2xl px-4 py-3 focus:ring-2 focus:ring-[#1F3D2B]/20 outline-none transition" />
                </div>

                <input type="email" placeholder="Email Address"
                  className="w-full bg-[#f8fbf6] border border-gray-200 rounded-2xl px-4 py-3 focus:ring-2 focus:ring-[#1F3D2B]/20 outline-none transition" />

                <select className="w-full bg-[#f8fbf6] border border-gray-200 rounded-2xl px-4 py-3 focus:ring-2 focus:ring-[#1F3D2B]/20 outline-none transition">
                  <option>Landscaping For</option>
                  <option>Commercial</option>
                  <option>Farm House</option>
                  <option>Industries</option>
                  <option>Public Spaces</option>
                  <option>Resorts</option>
                  <option>Real Estates</option>
                  <option>Residences</option>
                  <option>Roof Garden</option>
                  <option>Indoor Planting</option>
                  <option>Others</option>
                </select>

                <textarea rows={4} placeholder="Tell us about your project..."
                  className="w-full bg-[#f8fbf6] border border-gray-200 rounded-2xl px-4 py-3 focus:ring-2 focus:ring-[#1F3D2B]/20 resize-none transition" />

                <button type="submit"
                  className="w-full bg-[#1F3D2B] text-white font-semibold py-3 rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition duration-300">
                  SEND MESSAGE →
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}