"use client";

import Image from "next/image";

export default function IntroductionPage() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
            Introduction
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            At <span className="font-semibold text-gray-800">Leaf & Loam Landscaping</span>, 
            we craft outdoor environments that blend beauty, sustainability, 
            and functionality. From private gardens and terraces to large 
            commercial landscapes, we design spaces that inspire and thrive.
          </p>

          <p className="text-gray-600 leading-relaxed mb-8">
            Our approach is simple — understand your vision, deliver with 
            precision, and ensure every project reflects both quality and care. 
            With years of expertise, we are proud to be a trusted partner 
            for homeowners, businesses, and developers.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Our Story
          </h3>

          <p className="text-gray-600 leading-relaxed mb-6">
            Founded with a passion for transforming outdoor spaces, 
            Leaf & Loam began as a small team dedicated to thoughtful 
            landscape design. Over time, we expanded our services to include 
            irrigation systems, plant care plans, rooftop gardens, and 
            maintenance solutions.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Today, we proudly serve residential communities, corporate 
            offices, and hospitality projects — delivering green spaces 
            that grow beautifully with time.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-lg">
          <Image
            src="/Images/nature2.jpeg"  // replace with your image
            alt="Landscaping Project"
            fill
            className="object-cover"
          />
        </div>

      </div>
    </section>
  );
}
