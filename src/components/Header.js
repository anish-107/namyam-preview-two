"use client";

import { useState } from "react";
import Link from "next/link";
import BrandLogo from "./BrandLogo";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="bg-orange-50/80 dark:bg-orange-900/40 backdrop-blur-lg shadow-md border-b border-orange-200 dark:border-orange-700 sticky top-0 z-50">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4 py-3 gap-3 sm:gap-0">

        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group" onClick={handleLinkClick}>
          <div className="w-32 transition-transform duration-300 group-hover:scale-105">
            <BrandLogo />
          </div>
        </Link>

        {/* Hamburger Button (Mobile) */}
        <button
          className="sm:hidden text-orange-600 dark:text-orange-300 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Navigation */}
        <nav
          className={`flex-col sm:flex-row sm:flex items-center gap-4 sm:gap-6 transition-all duration-300 ${
            menuOpen ? "flex" : "hidden sm:flex"
          }`}
        >
          <Link
            href="/terms-and-conditions"
            onClick={handleLinkClick}
            className="text-sm font-medium text-orange-700 hover:text-orange-900 dark:text-orange-300 dark:hover:text-orange-100 transition-colors"
          >
            Terms & Conditions
          </Link>
          <Link
            href="/privacy-policy"
            onClick={handleLinkClick}
            className="text-sm font-medium text-orange-700 hover:text-orange-900 dark:text-orange-300 dark:hover:text-orange-100 transition-colors"
          >
            Privacy Policy
          </Link>
        </nav>
      </div>
    </header>
  );
}
