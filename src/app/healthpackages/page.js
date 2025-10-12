"use client";

import { useState, useEffect } from "react";
import FilterBar from "../components/FilterBar";
import PackageCard from "../components/PackageCard";

const HealthPackagesPage = () => {
  const [packages, setPackages] = useState([]);
  const [visiblePackages, setVisiblePackages] = useState([]);
  const [cityFilter, setCityFilter] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("/packages.json")
      .then((res) => res.json())
      .then((data) => {
        setPackages(data);
        setVisiblePackages(data);
      });
  }, []);

  useEffect(() => {
    let filteredList = [...packages];

    if (cityFilter) {
      filteredList = filteredList.filter((pkg) => pkg.city === cityFilter);
    }

    if (searchQuery) {
      filteredList = filteredList.filter((pkg) =>
        pkg.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (sortBy === "low-to-high") {
      filteredList.sort((a, b) => a.price - b.price);
    } else if (sortBy === "high-to-low") {
      filteredList.sort((a, b) => b.price - a.price);
    }

    setVisiblePackages(filteredList);
  }, [cityFilter, sortBy, searchQuery, packages]);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center my-10 text-gray-800">
        Explore Our Health Packages
      </h1>

      <FilterBar
        setCityFilter={setCityFilter}
        setSortBy={setSortBy}
        setSearchQuery={setSearchQuery}
      />

      {visiblePackages.length > 0 ? (
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 
          transition-all duration-500 ease-in-out"
        >
          {visiblePackages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      ) : (
        <div className="text-center mt-20 mb-5">
          <img
            src="/no-data.png"
            alt="No Packages Found"
            className="w-52 mx-auto mb-6 opacity-80"
          />
          <h2 className="text-2xl font-semibold text-gray-700">
            No Packages Found
          </h2>
          <p className="text-gray-500 mt-2">
            Try adjusting your filters or search to find the perfect package for you 💫
          </p>
        </div>
      )}
    </div>
  );
};

export default HealthPackagesPage;
