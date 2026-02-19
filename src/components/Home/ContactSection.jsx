"use client";
import { COMPANY } from "@/lib/constants";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="bg-white py-14 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-24">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#1F3D2B] tracking-tight">
            Start Your Landscape Journey
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Let’s shape your outdoor space into a timeless green retreat. Share
            your vision and we’ll transform it into a living experience.
          </p>
        </div>

        {/* Layout */}
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* LEFT SIDE */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-semibold text-[#1F3D2B] mb-3">
                Contact Details
              </h3>
              <div className="w-14 h-1 bg-[#1F3D2B] rounded-full"></div>
            </div>

            <div className="space-y-10 text-gray-700">
              <div className="flex items-start gap-5">
                <Phone className="text-[#1F3D2B]" />
                <div>
                  <p className="text-sm uppercase tracking-wider text-gray-400">
                    Phone
                  </p>
                  <p className="text-lg font-medium"> {COMPANY.phone} </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <Mail className="text-[#1F3D2B]" />
                <div>
                  <p className="text-sm uppercase tracking-wider text-gray-400">
                    Email
                  </p>
                  <p className="text-lg font-medium">{COMPANY.email}</p>
                </div>
              </div>

              {/* <div className="flex items-start gap-5">
                <MapPin className="text-[#1F3D2B]" />
                <div>
                  <p className="text-sm uppercase tracking-wider text-gray-400">
                    Address
                  </p>
                  <p className="text-lg font-medium leading-relaxed">
                    Vishnavi Oasis, Flat No: 408, Block C<br />
                    Kismatpur Road, Hyderabad – 500086
                  </p>
                </div>
              </div> */}
              <div className="relative group">
                {/* Location Row */}
                <div className="flex items-start gap-5 cursor-pointer">
                  <MapPin className="text-[#1F3D2B]" />
                  <div>
                    <p className="text-sm uppercase tracking-wider text-gray-400">
                      Address
                    </p>
                    <p className="text-lg font-medium leading-relaxed text-gray-800">
                     {COMPANY.address}
                    </p>
                  </div>
                </div>

                {/* Google Map Popup */}
                <div
                  className="
                    absolute top-full left-0 mt-6
                    w-[450px] h-[220px]
                    rounded-2xl overflow-hidden
                    shadow-2xl border border-gray-100
                    opacity-0 translate-y-4
                    group-hover:opacity-100
                    group-hover:translate-y-0
                    transition-all duration-500
                    bg-white z-50
                "
                >
                  <iframe
                    src="https://www.google.com/maps?q=Kismatpur+Road+Hyderabad&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - PREMIUM FORM CARD */}
          <div className="relative">
            {/* Decorative Accent */}
            <div className="absolute -top-6 -left-6 w-full h-full border border-[#1F3D2B]/10 rounded-3xl"></div>

            <div className="relative bg-[#b1eb77] rounded-3xl p-12 shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
              <h3 className="text-2xl font-semibold text-[#1F3D2B] mb-8">
                Request a Consultation
              </h3>

              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <input
                    type="text"
                    name="fullName"
                    required
                    pattern="^[A-Za-z\s]{2,30}$"
                    title="Only letters allowed (2-30 characters)"
                    placeholder="Full Name"
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-4 focus:outline-none focus:border-[#1F3D2B] focus:ring-1 focus:ring-[#1F3D2B]/30 transition"
                  />

                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Mobile Number"
                    required
                    pattern="^[0-9]{10}$"
                    maxLength={10}
                    inputMode="numeric"
                    title="Enter a valid 10-digit mobile number"
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-4 focus:outline-none focus:border-[#1F3D2B] focus:ring-1 focus:ring-[#1F3D2B]/30 transition"
                  />
                </div>

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-4 focus:outline-none focus:border-[#1F3D2B] focus:ring-1 focus:ring-[#1F3D2B]/30 transition"
                />

                <select
                  defaultValue=""
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-4 focus:outline-none focus:border-[#1F3D2B] focus:ring-1 focus:ring-[#1F3D2B]/30 transition cursor-pointer"
                >
                  <option value="" disabled>
                    Landscaping For
                  </option>
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

                <textarea
                  rows="4"
                  placeholder="Tell us about your project..."
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-4 focus:outline-none focus:border-[#1F3D2B] focus:ring-1 focus:ring-[#1F3D2B]/30 resize-none transition"
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-[#1F3D2B] hover:bg-[#163021] text-white font-semibold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl tracking-wide"
                >
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
