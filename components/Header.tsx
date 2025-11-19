'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-logo-blue -mt-4"
          aria-label="Zur Startseite"
        >
          <Image
            src="/images/logo/logo.png"
            alt="Dietrich Kaffee Logo"
            width={180}
            height={180}
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <a
            href="/kaffeemaschinen"
            className="lato-bold text-logo-brown hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-logo-blue tracking-wide-custom"
          >
            Siebträger
          </a>
          <a
            href="/vollautomaten"
            className="lato-bold text-logo-brown hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-logo-blue tracking-wide-custom"
          >
            Vollautomaten
          </a>
          <a
            href="/blog"
            className="lato-bold text-logo-brown hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-logo-blue tracking-wide-custom"
          >
            Blog
          </a>
          <a
            href="tel:+4915206386702"
            className="lato-bold bg-logo-blue text-white px-4 py-2 rounded-md hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-logo-blue tracking-wide-custom"
          >
            +49 1520 638 67 02
          </a>
        </nav>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 hover:bg-logo-brown/5 transition-colors text-logo-brown focus-visible:outline focus-visible:outline-2 focus-visible:outline-logo-blue"
          aria-label="Menü öffnen"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-40">
          {/* Logo in mobile menu */}
          <div className="absolute top-4 left-6">
            <Link
              href="/"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-logo-blue -mt-4"
              aria-label="Zur Startseite"
            >
              <Image
                src="/images/logo/logo.png"
                alt="Dietrich Kaffee Logo"
                width={180}
                height={180}
                priority
              />
            </Link>
          </div>
          
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-6 right-6 text-logo-brown/50 hover:text-logo-brown text-3xl leading-none focus:outline-none focus:ring-2 focus:ring-logo-blue"
            aria-label="Menü schließen"
          >
            ×
          </button>
          
          <nav className="flex flex-col items-center justify-center space-y-8 text-center h-full">
            <a
              href="/kaffeemaschinen"
              className="lato-bold text-2xl text-logo-brown hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-logo-blue tracking-wide-custom"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Siebträger
            </a>
            <a
              href="/vollautomaten"
              className="lato-bold text-2xl text-logo-brown hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-logo-blue tracking-wide-custom"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Vollautomaten
            </a>
            <a
              href="/blog"
              className="lato-bold text-2xl text-logo-brown hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-logo-blue tracking-wide-custom"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </a>
            <a
              href="tel:+4915206386702"
              className="lato-bold bg-logo-blue text-white px-8 py-4 rounded-md hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-logo-blue tracking-wide-custom text-xl mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              +49 1520 638 67 02
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}