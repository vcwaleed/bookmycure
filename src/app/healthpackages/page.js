"use client";
import { useState } from "react";
import PackagesList from "../components/PackagesList";
import FilterBar from "../components/FilterBar";

export default function HealthPackagesPage() {
  const [cityFilter, setCityFilter] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <FilterBar
        setCityFilter={setCityFilter}
        setSortBy={setSortBy}
        setSearchQuery={setSearchQuery}
      />
      <PackagesList
        type="health"
        cityFilter={cityFilter}
        sortBy={sortBy}
        searchQuery={searchQuery}
      />
    </div>
  );
}