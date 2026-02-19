"use client";

import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Nayana",
    role: "CEO, Forest Corp",
    company: "Nayana Info Solutions",
    text: "The team at Lawn transformed a backyard into a beautiful oasis! They were professional, knowledgeable, and truly passionate about their work. I could happier with the results.",
    image: "/Images/nayana.png",
  },
  {
    name: "Prasad Veera",
    role: "Home Owner",
    company: "GreenNest",
    text: "Their landscape design exceeded all our expectations. The team created harmony between architecture and nature.",
    image: "/Images/prasad.png",
  },
  {
    name: "Leela",
    role: "Property Developer",
    company: "Pionner Info Solutions",
    text: "Outstanding craftsmanship and attention to detail. Highly recommend their landscaping services.",
    image: "/Images/Leela.png",
  },
  {
    name: "Nayana",
    role: "CEO, Forest Corp",
    company: "Nayana Info Solutions",
    text: "The team at Lawn transformed a backyard into a beautiful oasis! They were professional, knowledgeable, and truly passionate about their work. I could happier with the results.",
    image: "/Images/nayana.png",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="w-full p-8 sm:p-6 bg-white">
        <div className="relative bg-black rounded-3xl overflow-hidden shadow-xl py-14 px-6 md:px-12 lg:px-20">

      {/* Background Image Overlay */}
      <div className="absolute inset-0 opacity-40">
        <Image
          src="/Images/nature3.jpg"
          alt="Background"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 text-green-400 text-sm font-medium mb-2">
            <span className="w-8 h-px bg-green-400"></span>
            TESTIMONIALS
            <span className="w-8 h-px bg-green-400"></span>
          </div>

          <h2 className="text-white text-4xl md:text-5xl font-bold">
            What Our Happy Clients Say
          </h2>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <div className="text-white">

            <h3 className="text-xl font-semibold mb-6">
              {testimonials[active].company}
            </h3>

            <p className="text-lg leading-relaxed text-white/80 mb-6">
              “{testimonials[active].text}”
            </p>

            <div className="mb-8">
              <p className="font-semibold">
                {testimonials[active].name}
              </p>
              <p className="text-sm text-white/60">
                {testimonials[active].role}
              </p>
            </div>

            {/* Avatars */}
            <div className="flex gap-4">
              {testimonials.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setActive(index)}
                  className={`
                    relative w-12 h-12 rounded-full overflow-hidden cursor-pointer
                    border-2 transition
                    ${
                      active === index
                        ? "border-green-400 scale-110"
                        : "border-transparent opacity-70 hover:opacity-100"
                    }
                  `}
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT SIDE (Stacked Cards) */}
          <div className="relative h-[420px] flex justify-center items-center">

            {/* Back Card 1 */}
            <div className="absolute w-[260px] h-[360px] bg-purple-300 rounded-3xl translate-x-10 translate-y-6 opacity-80"></div>

            {/* Back Card 2 */}
            <div className="absolute w-[260px] h-[360px] bg-gray-300 rounded-3xl translate-x-6 translate-y-3 opacity-90"></div>

            {/* Front Card */}
            <div className="relative w-[260px] h-[360px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={testimonials[active].image}
                alt="Client"
                fill
                className="object-cover"
              />
            </div>

          </div>

        </div>
      </div>
      </div>
    </section>
  );
}
