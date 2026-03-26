

"use client";

import Link from "next/link";
import { useState } from "react";
import { Download } from "lucide-react";

export default function Header({ activeSection }: { activeSection: string }) {
  const [open, setOpen] = useState(false);

  const navItem = (href: string, label: string) => (
    <a
      href={href}
      onClick={() => setOpen(false)}
      className={`block md:inline relative pb-1 transition ${
        activeSection === href.replace("#", "")
          ? "text-black font-semibold after:scale-x-100"
          : "text-gray-500 after:scale-x-0"
      } hover:text-black after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-blue-600 after:origin-left after:transition-transform after:duration-300`}
    >
      {label}
    </a>
  );

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-5xl mx-auto px-4 md:px-6 py-3 flex justify-between items-center">
        <p className="font-semibold text-blue-600">Dan</p>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navItem("#about", "About")}
          {navItem("#skills", "Skills")}
          {navItem("#career", "Career")}
          {navItem("#projects", "Projects")}
          {navItem("#contact", "Contact")}

          <Link href="/guestbook" className="text-gray-500 hover:text-black">
            Guestbook
          </Link>

          <a
            href="/resume.zip"
            className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition"
            download="Dan_Choi_Resume_Portfolio.zip"
          >
            <span className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              이력서
            </span>
          </a>
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden text-gray-700 text-xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="border-t px-4 py-4 space-y-3 bg-white">
          {navItem("#about", "About")}
          {navItem("#skills", "Skills")}
          {navItem("#career", "Career")}
          {navItem("#projects", "Projects")}
          {navItem("#contact", "Contact")}

          <Link href="/guestbook" className="block text-gray-500 hover:text-black">
            Guestbook
          </Link>

          <a
            href="/resume.zip"
            className="block text-center mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition"
            download="Dan_Choi_Resume_Portfolio.zip"
          >
            <span className="flex items-center justify-center gap-2">
              <Download className="w-4 h-4" />
              이력서
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}