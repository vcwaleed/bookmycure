'use client';
import { useState } from 'react';
import PackageForm from './PackageForm';

const CreatePackage = () => {
  const [formKey, setFormKey] = useState(0);

  const handleCreate = async (formData) => {
    try {
      const response = await fetch('/api/packages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormKey((prevKey) => prevKey + 1);
      } else {
        const errorData = await response.json();
      }
    } catch (error) {
      console.error('Error creating package:', error);
    }
  };

  return (
    <div>
   
      <h1 className="text-3xl font-bold mb-6">Create New Package</h1>
      <div className="bg-white p-8 rounded-lg shadow-md">
        <PackageForm key={formKey} onSubmit={handleCreate} />
      </div>
    </div>
  );
};

export default CreatePackage;