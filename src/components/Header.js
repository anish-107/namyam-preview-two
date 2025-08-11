// Header.js
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from 'next/image'; // Import Image directly

/**
 * The main header component for the website.
 * Includes the brand logo (favicon + SVG) and navigation links.
 */
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="bg-orange-50/80 backdrop-blur-lg shadow-md border-b border-orange-200 sticky top-0 z-50">
      <div className="container mx-auto flex flex-row flex-wrap justify-between items-center px-4 py-3">
        {/* Brand Logo Link */}
        <Link
          href="/"
          className="flex items-center group"
          onClick={handleLinkClick}
        >
          {/* Key Change: Logo logic is now directly inside the Header */}
          <div className="w-32 transition-transform duration-300 group-hover:scale-105 flex items-center gap-2">
            {/* 1. Favicon Image */}
            <Image
              src="/favicon.png"
              alt="Brand Favicon"
              width={32}
              height={32}
            />
            {/* 2. Main SVG Logo */}
            <Image
              src="/logo.svg"
              alt="Namyam Logo"
              width={160}
              height={160}
              className="w-auto h-full"
              priority
            />
          </div>
        </Link>

        {/* Hamburger Button for Mobile */}
        <button
          className="sm:hidden text-orange-600 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* Navigation */}
        <nav
          className={`w-full flex-col items-center gap-4 sm:w-auto sm:flex-row sm:flex sm:gap-6 sm:mt-0 transition-all duration-300 ${
            menuOpen ? "flex mt-3" : "hidden"
          }`}
        >
          <Link
            href="/terms-and-conditions"
            onClick={handleLinkClick}
            className="text-sm font-medium text-orange-700 hover:text-orange-900 transition-colors"
          >
            Terms & Conditions
          </Link>
          <Link
            href="/privacy-policy"
            onClick={handleLinkClick}
            className="text-sm font-medium text-orange-700 hover:text-orange-900 transition-colors"
          >
            Privacy Policy
          </Link>
        </nav>
      </div>
    </header>
  );
}