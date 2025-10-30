'use client';
import PackageForm from './PackageForm';

const CreatePackage = () => {
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
      toast.success('Package created successfully!');
    } else {
      const errorData = await response.json();
      toast.error(`Error creating package: ${errorData.message || response.statusText}`);
    }
  } catch (error) {
    console.error('Error creating package:', error);
    toast.error('Error creating package');
  }
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