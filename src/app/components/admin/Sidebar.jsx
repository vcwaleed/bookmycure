'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Package, Heart, Bot, PlusSquare, Menu } from 'lucide-react';

const sidebarVariants = {
  open: { width: '250px', transition: { duration: 0.3 } },
  closed: { width: '90px', transition: { duration: 0.3 } },
};

const Sidebar = () => {
  const [isOpen, setIsOpen] = React.useState(true);
  const currentYear = new Date().getFullYear();

  return (
    <motion.div
      animate={isOpen ? 'open' : 'closed'}
      variants={sidebarVariants}
      className="bg-white text-gray-800 h-screen flex flex-col sticky top-0 shadow-lg border-r border-gray-200 transition-all"
    >
      <div className="p-4 flex items-center justify-between border-b border-gray-100">
        <h1
          className={`text-2xl font-extrabold text-blue-600 tracking-wide ${
            !isOpen && 'hidden'
          }`}
        >
          BookMyCure
        </h1>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-lg hover:bg-gray-100 transition"
        >
          <Menu className="text-gray-600" />
        </button>
      </div>

      <nav className="flex-1 px-3 py-6 overflow-y-auto">
        <ul className="space-y-2">
          {[
            { href: '/admin/all-packages', label: 'All Packages', icon: <Package /> },
            { href: '/admin/health-packages', label: 'Health Packages', icon: <Heart /> },
            { href: '/admin/spa-packages', label: 'Spa Packages', icon: <Bot /> },
            { href: '/admin/create-package', label: 'Create New', icon: <PlusSquare /> },
          ].map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className="flex items-center p-3 text-gray-700 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 group"
              >
                <span className="text-blue-500 group-hover:text-blue-600">
                  {React.cloneElement(item.icon, { className: 'w-6 h-6' })}
                </span>
                <span
                  className={`ml-3 font-medium text-sm ${
                    !isOpen && 'hidden'
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-100 text-center text-xs text-gray-400">
        {isOpen ? `© ${currentYear} Admin Panel` : `© ${currentYear}`}
      </div>
    </motion.div>
  );
};

export default Sidebar;
