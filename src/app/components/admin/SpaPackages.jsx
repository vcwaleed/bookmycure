'use client';
import { useState, useEffect } from 'react';
import SpaPackageTable from './SpaPackageTable';

const SpaPackages = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    fetch('/api/aesthetic-wellness-clinics')
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/aesthetic-wellness-clinics/${id}`, { method: 'DELETE' });
      setPackages(packages.filter((pkg) => pkg._id !== id));
    } catch (error) {
      console.error("Error deleting package:", error);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Aesthetic & Wellness Clinics Packages</h1>
      <SpaPackageTable packages={packages} onDelete={handleDelete} />
    </div>
  );
};

export default SpaPackages;
