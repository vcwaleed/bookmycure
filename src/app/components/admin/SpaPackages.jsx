'use client';
import { useState, useEffect } from 'react';
import PackageTable from './PackageTable';

const SpaPackages = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    fetch('/packages.json')
      .then((res) => res.json())
      .then((data) => {
        const spaPackages = data.filter(pkg => pkg.type === 'spa');
        setPackages(spaPackages);
      });
  }, []);

  const handleDelete = (id) => {
    setPackages(packages.filter((pkg) => pkg.id !== id));
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Aesthetic & Wellness Clinics Packages</h1>
      <PackageTable packages={packages} onDelete={handleDelete} />
    </div>
  );
};

export default SpaPackages;
