"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

const FilterBar = ({ setCityFilter, setSortBy, setSearchQuery }) => {
  const [isTyping, setIsTyping] = useState(false);

  return (
    <div className="bg-gradient-to-r from-white to-blue-50 p-6 rounded-xl shadow-lg border border-gray-100 my-8">
      <h2 className="text-xl font-bold text-gray-800 mb-4 text-center md:text-left">
        Filter Health Packages
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label
            htmlFor="city"
            className="block text-sm font-semibold text-gray-600 mb-1"
          >
            City
          </label>
          <select
            id="city"
            name="city"
            className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
            onChange={(e) => setCityFilter(e.target.value)}
          >
            <option value="">All Cities</option>
            <option value="Karachi">Karachi</option>
            <option value="Lahore">Lahore</option>
            <option value="Islamabad">Islamabad</option>
            <option value="Rawalpindi">Rawalpindi</option>
            <option value="Faisalabad">Faisalabad</option>
            <option value="Multan">Multan</option>
            <option value="Peshawar">Peshawar</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="sort"
            className="block text-sm font-semibold text-gray-600 mb-1"
          >
            Sort by Price
          </label>
          <select
            id="sort"
            name="sort"
            className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="">Default</option>
            <option value="low-to-high">Low to High</option>
            <option value="high-to-low">High to Low</option>
          </select>
        </div>
        <div className="relative">
          <label
            htmlFor="search"
            className="block text-sm font-semibold text-gray-600 mb-1"
          >
            Search
          </label>
          <div className="relative">
            <motion.div
              animate={{
                scale: isTyping ? [1, 1.2, 1] : 1,
                rotate: isTyping ? [0, 10, -10, 0] : 0,
              }}
              transition={{
                duration: 0.6,
                repeat: isTyping ? Infinity : 0,
                repeatDelay: 1,
              }}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            >
              <Search className="w-5 h-5" />
            </motion.div>
            <input
              type="text"
              name="search"
              id="search"
              className="pl-10 pr-4 py-2 w-full text-gray-700 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none placeholder-gray-400 transition"
              placeholder="Search by test name..."
              onFocus={() => setIsTyping(true)}
              onBlur={() => setIsTyping(false)}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
