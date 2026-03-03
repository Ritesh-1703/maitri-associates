// components/Navbar.tsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Always use solid background with slight transparency for better visibility
  const navbarClass = scrolled
    ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
    : "bg-white/90 backdrop-blur-sm shadow-md py-3";

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${navbarClass}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-14 w-14 overflow-hidden rounded-lg border-2 border-primary/20 group-hover:border-accent transition-all duration-300">
              <Image
                src="/logo.png"
                alt="Maitri Associates Logo"
                height={50}
                width={50}
                className="object-contain p-2"
                priority
              />
            </div>
            <div>
              <span className="text-xl font-bold font-playfair text-primary block leading-tight">
                Maitri Associates
              </span>
              <span className="text-xs tracking-wider text-secondary">
                ENGINEERING SERVICES
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {["Home", "About", "Services", "Projects", "Contact"].map(
              (item) => (
                <Link
                  key={item}
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className={`relative text-sm font-medium transition-colors ${
                    pathname ===
                    (item === "Home" ? "/" : `/${item.toLowerCase()}`)
                      ? "text-accent"
                      : "text-primary hover:text-accent"
                  }`}
                >
                  {item}
                  {pathname ===
                    (item === "Home" ? "/" : `/${item.toLowerCase()}`) && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent"></span>
                  )}
                </Link>
              ),
            )}
            <Link
              href="/contact"
              className="bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary-light transition shadow-md hover:shadow-lg"
            >
              Get Quote
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary hover:text-accent transition p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full bg-white shadow-xl transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-4"
        }`}
      >
        <div className="px-6 py-4 space-y-3">
          {["Home", "About", "Services", "Projects", "Contact"].map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="block text-primary hover:text-accent font-medium transition py-2"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}
          <Link
            href="/contact"
            className="block bg-primary text-white px-4 py-2.5 rounded-lg text-center font-semibold hover:bg-primary-light transition"
            onClick={() => setIsOpen(false)}
          >
            Get Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
