"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { LogIn } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <motion.nav
      ref={navRef}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm"
    >
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
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-600 rounded-lg md:hidden border border-gray-300 hover:border-blue-400 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-100"
          aria-expanded={menuOpen}
        >
          <svg
            className="w-5 h-5 transition-transform duration-300"
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

        {/* Links */}
        <div
          className={`${
            menuOpen
              ? "absolute top-full left-0 w-full bg-white shadow-lg z-50 animate-fadeIn"
              : "hidden"
          } md:static md:block md:w-auto`}
        >
          <ul className="flex flex-col md:flex-row md:items-center md:space-x-8 mt-4 md:mt-0 font-medium">
            <li>
              <Link
                href="/"
                className="block py-2 px-3 md:p-0 text-gray-800 hover:text-blue-700 transition-colors duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/healthpackages"
                className="block py-2 px-3 md:p-0 text-gray-800 hover:text-blue-700 transition-colors duration-200"
              >
                Health Packages
              </Link>
            </li>

            {/* Login Button */}
            <li className="mt-3 md:mt-0">
              <Link
                href="/login"
                className="flex items-center gap-2 px-5 py-2 rounded-lg border  text-green-400 font-semibold  transition-all duration-200"
              >
                <LogIn size={18} />
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
}
