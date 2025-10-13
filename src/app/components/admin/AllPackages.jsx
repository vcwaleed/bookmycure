'use client';
import { useState, useEffect } from 'react';
import PackageTable from './PackageTable';

const AllPackages = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    fetch('/packages.json')
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);

  const handleDelete = (id) => {
    setPackages(packages.filter((pkg) => pkg.id !== id));
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">All Packages</h1>
      <PackageTable packages={packages} onDelete={handleDelete} />
    </div>
  );
};

export default AllPackages;
