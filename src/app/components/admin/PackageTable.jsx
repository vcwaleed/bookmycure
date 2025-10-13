'use client';
import { useState } from 'react';
import { Pencil, Trash2 } from 'lucide-react';
import PackageFormModal from './PackageFormModal';
import ConfirmationDialog from './ConfirmationDialog';

const PackageTable = ({ packages, onDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handleEdit = (pkg) => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };

  const handleDeleteClick = (pkg) => {
    setSelectedPackage(pkg);
    setIsConfirmOpen(true);
  };

  const handleConfirmDelete = () => {
    onDelete(selectedPackage.id);
    setIsConfirmOpen(false);
    setSelectedPackage(null);
  };

  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-100 mt-8">
      <div className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-blue-500 to-indigo-500">
        <h2 className="text-xl font-semibold text-white">Available Packages</h2>
        <p className="text-white text-sm opacity-90">
          Total Packages: {packages?.length || 0}
        </p>
      </div>

      {/* Table Wrapper for Responsiveness */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50">
            <tr>
              {['Name', 'Price', 'City', 'Category', 'Type', 'Actions'].map((heading) => (
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
              packages.map((pkg, index) => (
                <tr
                  key={pkg.id || index}
                  className="hover:bg-blue-50 transition duration-150 ease-in-out"
                >
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-800">
                    {pkg.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                    Rs {pkg.price}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                    {pkg.city}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                    {pkg.category}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap capitalize text-gray-600">
                    {pkg.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <div className="flex justify-end gap-3">
                      <button
                        onClick={() => handleEdit(pkg)}
                        className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition duration-200"
                        title="Edit Package"
                      >
                        <Pencil size={18} />
                      </button>
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
                  colSpan="6"
                  className="px-6 py-8 text-center text-gray-400 text-sm"
                >
                  No packages found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modals */}
      {isModalOpen && (
        <PackageFormModal
          pkg={selectedPackage}
          onClose={() => setIsModalOpen(false)}
          onSave={(updatedPkg) => {
            console.log('Updated Package:', updatedPkg);
            setIsModalOpen(false);
          }}
        />
      )}

      {isConfirmOpen && (
        <ConfirmationDialog
          message="Are you sure you want to delete this package?"
          onConfirm={handleConfirmDelete}
          onCancel={() => setIsConfirmOpen(false)}
        />
      )}
    </div>
  );
};

export default PackageTable;
