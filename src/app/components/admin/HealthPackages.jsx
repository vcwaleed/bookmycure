'use client';
import { useState, useEffect } from 'react';
import HealthPackageTable from './HealthPackageTable';

const HealthPackages = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    fetch('/api/health-packages')
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/health-packages/${id}`, { method: 'DELETE' });
      setPackages(packages.filter((pkg) => pkg._id !== id));
    } catch (error) {
      console.error("Error deleting package:", error);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Health Packages</h1>
      <HealthPackageTable packages={packages} onDelete={handleDelete} />
    </div>
  );
};

export default HealthPackages;
