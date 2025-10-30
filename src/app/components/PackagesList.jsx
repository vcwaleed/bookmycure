"use client";
import { useEffect, useState } from "react";
import PackageCard from "./PackageCard";

const PackagesList = ({ type, cityFilter, sortBy, searchQuery }) => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPackages = async () => {
      setLoading(true);
      try {
        let url = '/api/packages';
        const params = new URLSearchParams();
        if (cityFilter) params.append('city', cityFilter);
        if (sortBy) params.append('sortBy', sortBy);
        if (searchQuery) params.append('search', searchQuery);

        const response = await fetch(`${url}?${params.toString()}`);
        if (!response.ok) {
          throw new Error("Failed to fetch packages");
        }
        const result = await response.json();
        if (result.data) {
          const filteredPackages = result.data.filter((pkg) => pkg.type === type);
          setPackages(filteredPackages);
        } else {
          setPackages(result);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
  }, [type, cityFilter, sortBy, searchQuery]);

  if (loading) {
    return <div className="text-center py-10">Loading packages...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 capitalize">
        {type === 'spa' ? 'Aesthetic & Wellness Clinics package' : `${type} Packages`}
      </h1>
      {packages.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {packages.map((pkg) => (
            <PackageCard key={pkg._id} pkg={pkg} />
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <img src="/no-data.png" alt="No data" className="mx-auto w-48 h-48" />
          <p className="mt-4 text-gray-600">No packages available for this category.</p>
        </div>
      )}
    </div>
  );
};

export default PackagesList;
