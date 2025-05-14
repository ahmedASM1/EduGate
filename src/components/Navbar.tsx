"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const navLinks = [
  { href: "/", label: "الرئيسية" },
  { href: "/universities", label: "الجامعات" },
  { href: "/language-institutes", label: "معاهد اللغة" },
  { href: "/english-courses", label: "دورات اللغة الإنجليزية" },
  { href: "/majors", label: "التخصصات" },
  { href: "/contact", label: "سجل الآن" }
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const isActive = (path: string) => pathname === path;

  if (!mounted) {
    return (
      <nav className="bg-white shadow sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-24 justify-between">
            <div className="flex flex-shrink-0 items-center -ml-4">
              <div className="h-20 w-32 bg-gray-200 animate-pulse rounded"></div>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between h-16 sm:h-24">
        <div className="flex flex-1 items-center">
          <div className="flex flex-shrink-0 items-center -ml-2 sm:-ml-4">
            <Link href="/" className="flex items-center">
              <Logo className="h-12 w-auto sm:h-20" />
            </Link>
          </div>
          <div className="hidden sm:ml-10 sm:flex sm:space-x-8 rtl:space-x-reverse items-center justify-end flex-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`inline-flex items-center px-1 pt-1 text-base font-medium border-b-2 transition-colors duration-200 ${
                  isActive(link.href)
                    ? 'border-teal-500 text-teal-600'
                    : 'border-transparent text-gray-900 hover:text-teal-600 hover:border-teal-300'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        {/* Mobile menu button */}
        <div className="flex items-center sm:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-teal-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="فتح القائمة"
          >
            {!isMenuOpen ? (
              <svg className="block h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            ) : (
              <svg className="block h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white/95 flex flex-col items-center justify-start pt-8 px-4 transition-all duration-300">
          <button
            className="absolute top-4 left-4 text-3xl text-gray-500 hover:text-teal-600 focus:outline-none"
            onClick={() => setIsMenuOpen(false)}
            aria-label="إغلاق القائمة"
          >
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="w-full flex flex-col gap-4 mt-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block w-full text-center py-4 text-lg font-bold rounded-lg transition-colors duration-200 ${
                  isActive(link.href)
                    ? 'bg-teal-50 text-teal-600'
                    : 'text-gray-900 hover:bg-gray-50 hover:text-teal-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
} 