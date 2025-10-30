'use client';
import { useState, useEffect } from 'react';
import PackageTable from './PackageTable';

const AllPackages = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    fetch('/api/packages')
      .then((res) => res.json())
      .then((data) => setPackages(data.data));
  }, []);

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/packages/${id}`, { method: 'DELETE' });
      setPackages(packages.filter((pkg) => pkg._id !== id));
    } catch (error) {
      console.error("Error deleting package:", error);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">All Packages</h1>
      <PackageTable packages={packages} onDelete={handleDelete} />
    </div>
  );
};

export default AllPackages;
