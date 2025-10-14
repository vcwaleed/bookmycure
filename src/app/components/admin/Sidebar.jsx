"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Package, Heart, Bot, PlusSquare, Menu, Users } from "lucide-react";

const sidebarVariants = {
  open: { width: "250px", transition: { duration: 0.3 } },
  closed: { width: "80px", transition: { duration: 0.3 } },
};

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  const menuItems = [
    { href: "/admin/all-packages", label: "All Packages", icon: <Package /> },
    { href: "/admin/health-packages", label: "Health Packages", icon: <Heart /> },
    { href: "/admin/spa-packages", label: "Aesthetic Clinics Packages", icon: <Bot /> },
    { href: "/admin/create-package", label: "Create New", icon: <PlusSquare /> },
    { href: "/admin/manage-admins", label: "Manage Admin", icon: <Users /> },
  ];

  return (
    <motion.aside
      animate={isOpen ? "open" : "closed"}
      variants={sidebarVariants}
      className="bg-white text-gray-800 h-screen flex flex-col sticky top-0 shadow-lg border-r border-gray-200 transition-all z-50"
    >
      <div className="p-4 flex items-center justify-between border-b border-gray-100">
        {isOpen && (
          <motion.h1
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-extrabold text-blue-600 tracking-wide"
          >
            BookMyCure
          </motion.h1>
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-lg hover:bg-gray-100 transition"
        >
          <Menu className="text-gray-600 w-5 h-5" />
        </button>
      </div>
      <nav className="flex-1 px-3 py-6 overflow-y-auto">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center p-3 rounded-xl transition-all duration-200 group
                    ${
                      isActive
                        ? "bg-blue-100 text-blue-600 font-semibold"
                        : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    }`}
                >
                  <span
                    className={`${
                      isActive ? "text-blue-600" : "text-blue-500 group-hover:text-blue-600"
                    }`}
                  >
                    {item.icon}
                  </span>
                  {isOpen && (
                    <span className="ml-3 text-sm font-medium whitespace-nowrap">
                      {item.label}
                    </span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="p-4 border-t border-gray-100 text-center text-xs text-gray-400">
        {isOpen ? `© ${currentYear} Admin Panel` : `© ${currentYear}`}
      </div>
    </motion.aside>
  );
};

export default Sidebar;
