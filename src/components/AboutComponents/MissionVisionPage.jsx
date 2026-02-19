"use client";

import { Target, Eye } from "lucide-react";

export default function MissionVisionPage() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

        {/* MISSION CARD */}
        <div className="relative bg-green-200 rounded-2xl shadow-md p-8 text-center">

          {/* Icon */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-700 text-white shadow-lg">
              <Target size={22} />
            </div>
          </div>

          <h3 className="mt-6 text-xl md:text-2xl font-semibold text-gray-900">
            MISSION
          </h3>

          <p className="mt-4 text-gray-600 leading-relaxed text-sm md:text-base">
            To design and deliver innovative landscaping solutions that 
            transform outdoor spaces into sustainable, functional, and 
            inspiring environments — enhancing natural beauty while ensuring 
            long-term durability and client satisfaction.
          </p>
        </div>

        {/* VISION CARD */}
        <div className="relative bg-green-200 rounded-2xl shadow-md p-8 text-center">

          {/* Icon */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-700 text-white shadow-lg">
              <Eye size={22} />
            </div>
          </div>

          <h3 className="mt-6 text-xl md:text-2xl font-semibold text-gray-900">
            VISION
          </h3>

          <p className="mt-4 text-gray-600 leading-relaxed text-sm md:text-base">
            To become a trusted landscaping partner known for creativity, 
            reliability, and environmental responsibility — building green 
            spaces that grow beautifully and enrich communities for years to come.
          </p>
        </div>

      </div>
    </section>
  );
}
