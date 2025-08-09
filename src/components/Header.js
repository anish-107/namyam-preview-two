"use client";

import { useState } from "react";
import Link from "next/link";
import BrandLogo from "./BrandLogo";

/**
 * The main header component for the website.
 * Includes the brand logo and navigation links.
 */
export default function Header() {
  // State to manage the visibility of the mobile navigation menu.
  const [menuOpen, setMenuOpen] = useState(false);

  // Closes the mobile menu when a navigation link is clicked.
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="bg-orange-50/80 backdrop-blur-lg shadow-md border-b border-orange-200 sticky top-0 z-50">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4 py-3 gap-3 sm:gap-0">

        {/* Brand Logo */}
        <Link href="/" className="flex items-center space-x-2 group" onClick={handleLinkClick}>
          <div className="w-32 transition-transform duration-300 group-hover:scale-105">
            <BrandLogo />
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

        {/* Navigation Links */}
        <nav
          className={`flex-col sm:flex-row sm:flex items-center gap-4 sm:gap-6 transition-all duration-300 ${
            menuOpen ? "flex" : "hidden sm:flex"
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