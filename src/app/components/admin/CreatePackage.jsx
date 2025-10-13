'use client';
import PackageForm from './PackageForm';

const CreatePackage = () => {
  const handleCreate = (formData) => {
    console.log('Creating new package:', formData);
    alert('Package created successfully! (Check console for data)');
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Create New Package</h1>
      <div className="bg-white p-8 rounded-lg shadow-md">
        <PackageForm onSubmit={handleCreate} />
      </div>
    </div>
  );
};

export default CreatePackage;
