"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gradient-to-r from-green-500/50 to-green-500/20 backdrop-blur-2xl border border-green-300/30 shadow-[0_8px_32px_0_rgba(0,0,0,0.2)]"
          : "bg-transparent top-3 sm:top-4 md:top-5"
      }`}
    >
      {/* ================= DESKTOP & LAPTOP ================= */}
      <div className="hidden lg:block">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3 md:py-4">
            {/* Logo */}
            {/* <Link href="/" className="flex items-center">
              <Image
                src="/Images/logo.png"
                alt="Leaf-Loam Landscaping Services"
                width={260}
                height={60}
                priority
                className="h-10 sm:h-12 md:h-14 w-auto object-contain"
              />
            </Link> */}
            <Link
              href="/"
              className="text-2xl md:text-3xl font-semibold tracking-wide text-white whitespace-nowrap"
            >
              Leaf-Loam
            </Link>

            {/* Center Navigation */}
            <nav className="flex items-center overflow-x-auto scrollbar-hide">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="
                    relative px-5 xl:px-6 py-1.5 rounded-full
                    text-sm font-medium text-white/90
                    bg-white/10 backdrop-blur-xl
                    hover:bg-white/20
                    transition-all duration-300
                    overflow-hidden
                    border border-white/30
                    whitespace-nowrap
                  "
                >
                  <span
                    className="
                    absolute top-0 left-0
                    w-4 h-4
                    border-t border-l
                    border-white/40
                    rounded-tl-full
                  "
                  />

                  <span
                    className="
                    absolute bottom-0 right-0
                    w-4 h-4
                    border-b border-r
                    border-white/40
                    rounded-br-full
                  "
                  />

                  <span className="relative z-10">{link.name}</span>
                </Link>
              ))}
            </nav>

            {/* Right Button */}
            <div className="flex items-center">
              <Link
                href="/contact"
                className="rounded-full bg-white px-5 xl:px-6 py-2 text-sm font-semibold text-black transition hover:scale-105 whitespace-nowrap"
              >
                START YOUR GARDEN
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MOBILE & TABLET ================= */}
      <div className="lg:hidden px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="backdrop-blur-md bg-white/10 rounded-full px-4 sm:px-6 py-3 border border-white/20 shadow-lg">
            <div className="flex items-center justify-between">
              {/* <Link href="/">
                <Image
                  src="/Images/logo.png"
                  alt="Leaf-Loam"
                  width={140}
                  height={50}
                  className="h-9 sm:h-10 w-auto object-contain"
                />
              </Link> */}
              <div className="text-white text-lg sm:text-xl font-bold">
                Leaf-Loam
              </div>
              <button
                className="text-white"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {mobileOpen && (
            <div className="mt-4 backdrop-blur-md bg-white/10 rounded-3xl border border-white/20 p-5 sm:p-6">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-white hover:text-green-300 transition text-sm sm:text-base"
                  >
                    {link.name}
                  </Link>
                ))}

                <Link
                  href="/contact"
                  className="rounded-full bg-white px-5 xl:px-6 py-2 text-sm font-semibold text-black transition hover:scale-105 whitespace-nowrap"
                >
                  START YOUR GARDEN
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
