'use client';
import { useState } from 'react';
import { Trash2, Edit } from 'lucide-react';
import PopularHealthPackageModal from './PopularHealthPackageModal';

const HealthPackageTable = ({ packages, onDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handleDeleteClick = (pkg) => {
    if (window.confirm('Are you sure you want to delete this package?')) {
      onDelete(pkg._id);
    }
  };

  // const handleEditClick = (pkg) => {
  //   setSelectedPackage(pkg);
  //   setIsModalOpen(true);
  // };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedPackage(null);
  };

  const handleModalSave = (updatedPackage) => {
    // Here you would typically update the package in the database
    // and then update the local state.
    console.log("Updated package:", updatedPackage);
    setIsModalOpen(false);
  };

  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-100 mt-8">
      <div className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-blue-500 to-indigo-500">
        <h2 className="text-xl font-semibold text-white">Available Health Packages</h2>
        <p className="text-white text-sm opacity-90">
          Total Packages: {packages?.length || 0}
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50">
            <tr>
              {['Title', 'Tests', 'Price', 'Address', 'Actions'].map((heading) => (
                <th
                  key={heading}
                  scope="col"
                  className="px-6 py-3 text-left font-semibold text-gray-600 uppercase tracking-wider text-xs"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100 bg-white">
            {packages.length > 0 ? (
              packages.map((pkg) => (
                <tr
                  key={pkg._id}
                  className="hover:bg-blue-50 transition duration-150 ease-in-out"
                >
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-800">
                    {pkg.title}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                     {pkg.tests}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                    {pkg.price}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                    {pkg.address}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <div className="flex justify-end gap-3">
                      {/* <button
                        onClick={() => handleEditClick(pkg)}
                        className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition duration-200"
                        title="Edit Package"
                      >
                        <Edit size={18} />
                      </button> */}
                      <button
                        onClick={() => handleDeleteClick(pkg)}
                        className="p-2 rounded-full bg-red-100 text-red-600 hover:bg-red-600 hover:text-white transition duration-200"
                        title="Delete Package"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="px-6 py-8 text-center text-gray-400 text-sm"
                >
                  No health packages found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <PopularHealthPackageModal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          onSave={handleModalSave}
          pkg={selectedPackage}
        />
      )}
    </div>
  );
};

export default HealthPackageTable;
