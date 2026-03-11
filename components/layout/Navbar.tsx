"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      scrolled ? "bg-gray-900/80 backdrop-blur-md border-b border-gray-800" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Code2 className="h-8 w-8 text-indigo-400" />
            <span className="font-bold text-xl text-white">Adrian<span className="text-indigo-400">.dev</span></span>
          </Link>

          {/* Desktop Menu */}
<div className="hidden md:flex items-center space-x-8">
  {navItems.map((item) => (
    <Link
      key={item.name}
      href={item.href}
      className="text-gray-300 hover:text-indigo-400 transition-colors font-medium"
    >
      {item.name}
    </Link>
  ))}
  <a
    href="/AdrianCalicdan.pdf"
    download="AdrianCalicdan.pdf"
    className="bg-gradient-to-r from-indigo-600 to-emerald-600 text-white px-4 py-2 rounded-lg hover:from-indigo-700 hover:to-emerald-700 transition-colors font-medium"
  >
    Download CV
  </a>
</div>

{/* Mobile Menu */}
{isOpen && (
  <div className="md:hidden py-4 border-t border-gray-800">
    {navItems.map((item) => (
      <Link
        key={item.name}
        href={item.href}
        className="block py-2 text-gray-300 hover:text-indigo-400 transition-colors"
        onClick={() => setIsOpen(false)}
      >
        {item.name}
      </Link>
    ))}
    <a
      href="/AdrianCalicdan.pdf"
      download="AdrianCalicdan.pdf"
      className="block mt-4 bg-gradient-to-r from-indigo-600 to-emerald-600 text-white px-4 py-2 rounded-lg text-center hover:from-indigo-700 hover:to-emerald-700 transition-colors"
      onClick={() => setIsOpen(false)}
    >
      Download CV
    </a>
  </div>
)}

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors text-gray-300"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-gray-300 hover:text-indigo-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="/resume.pdf"
              download
              className="block mt-4 bg-gradient-to-r from-indigo-600 to-emerald-600 text-white px-4 py-2 rounded-lg text-center hover:from-indigo-700 hover:to-emerald-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Download CV
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}