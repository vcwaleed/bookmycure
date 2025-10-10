"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="border-b border-gray-200 bg-white shadow-sm relative">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-3">
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/BMC_logo.jpeg"
            alt="BMC Logo"
            width={48}
            height={48}
            unoptimized
            className="h-12 w-auto"
          />
        </Link>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-600 rounded-lg md:hidden hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-100"
          aria-expanded={menuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                menuOpen
                  ? "M2 2L15 13M2 13L15 2"
                  : "M1 1h15M1 7h15M1 13h15"
              }
            />
          </svg>
        </button>
        <div
          className={`${menuOpen
              ? "absolute top-full left-0 w-full bg-white shadow-md z-50"
              : "hidden"
            } md:static md:block md:w-auto`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 font-medium">
            <li>
              <Link
                href="/"
                className="block py-2 px-3 md:p-0 text-blue-700 font-semibold"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/packages"
                className="block py-2 px-3 md:p-0 text-gray-800 hover:text-blue-700 transition-colors"
              >
                Health Packages
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block py-2 px-3 md:p-0 text-gray-800 hover:text-blue-700 transition-colors"
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
