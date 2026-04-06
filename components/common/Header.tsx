"use client";

import Link from "next/link";
import { useState } from "react";
import { Download } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Header({ categories = [] }: { categories?: string[] }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);

  return (
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 md:px-6 py-3 flex justify-between items-center">
          <Link href="/">
            <Image
                src="/img/danistory_new3.png"
                alt="danistory"
                width={140}
                height={50}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition">
              Home
            </Link>

            <Link href="/projects" className="text-gray-700 hover:text-blue-600 transition">
              Projects
            </Link>

            <div
                className="relative"
                onMouseEnter={() => setMenuOpen(true)}
                onMouseLeave={() => setMenuOpen(false)}
            >
              <button
                  type="button"
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="text-gray-700 hover:text-blue-600 transition flex items-center gap-1"
              >
                Blog
              </button>

              <div
                  className={`absolute left-0 mt-2 w-44 bg-white border border-gray-200 rounded-lg shadow-md transition-all duration-200 ${menuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}
              >
                {/* 전체 */}
                <Link
                    href="/blog"
                    onClick={() => setMenuOpen(false)}
                    className={`block px-4 py-2 text-sm ${
                        pathname === "/blog"
                            ? "text-blue-600 font-semibold"
                            : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
                    }`}
                >
                  <b>전체</b>
                </Link>

                {/* dynamic categories */}
                {categories.map((cat) => (
                    <Link
                        key={cat}
                        href={`/blog/${cat}`}
                        onClick={() => setMenuOpen(false)}
                        className={`block px-4 py-2 text-sm ${
                            pathname.startsWith(`/blog/${cat}`)
                                ? "text-blue-600 font-semibold"
                                : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
                        }`}
                    >
                      {cat}
                    </Link>
                ))}
              </div>
            </div>

            <Link href="/guestbook" className="text-gray-700 hover:text-blue-600 transition">
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
            <Link href="/" className="block text-gray-700 hover:text-blue-600">Home</Link>
            <Link href="/projects" className="block text-gray-700 hover:text-blue-600">Projects</Link>
            <Link href="/blog" className="block text-gray-700 hover:text-blue-600">Blog</Link>
            <Link href="/guestbook" className="block text-gray-700 hover:text-blue-600">Guestbook</Link>

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