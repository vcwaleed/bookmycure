'use client';
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Plus, Edit, Trash } from "lucide-react";
import PopularHealthPackageModal from "./PopularHealthPackageModal";

const PopularHealthPackages = () => {
  const [packages, setPackages] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPackage, setEditingPackage] = useState(null);

  useEffect(() => {
    fetch('/api/health-packages')
      .then(res => res.json())
      .then(data => setPackages(data));
  }, []);

  const handleAddPackage = async (newPackage) => {
    const response = await fetch('/api/health-packages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newPackage),
    });
    const savedPackage = await response.json();
    setPackages([...packages, savedPackage]);
  };

  const handleUpdatePackage = async (updatedPackage) => {
    const response = await fetch(`/api/health-packages/${editingPackage._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedPackage),
    });
    const savedPackage = await response.json();
    setPackages(packages.map((pkg) =>
      pkg._id === editingPackage._id ? savedPackage : pkg
    ));
  };

  const handleDeletePackage = async (id) => {
    await fetch(`/api/health-packages/${id}`, { method: 'DELETE' });
    setPackages(packages.filter((pkg) => pkg._id !== id));
  };

  const openModal = (pkg = null) => {
    setEditingPackage(pkg);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setEditingPackage(null);
    setIsModalOpen(false);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Popular Health Packages</h2>
        <button
          onClick={() => openModal()}
          className="flex items-center px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          <Plus className="w-5 h-5 mr-2" />
          Add Package
        </button>
      </div>
      <motion.div layout className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tests</th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Old Price</th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Discount</th>
              <th className="py-3 px-6 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {packages.map((pkg) => (
              <motion.tr layout key={pkg._id} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-4 px-6">{pkg.title}</td>
                <td className="py-4 px-6">{pkg.tests}</td>
                <td className="py-4 px-6">{pkg.price}</td>
                <td className="py-4 px-6">{pkg.oldPrice}</td>
                <td className="py-4 px-6">{pkg.discount}</td>
                <td className="py-4 px-6 text-right">
                  <div className="flex justify-end space-x-4">
                    <button onClick={() => openModal(pkg)} className="text-blue-600 hover:text-blue-800">
                      <Edit className="w-5 h-5" />
                    </button>
                    <button onClick={() => handleDeletePackage(pkg._id)} className="text-red-600 hover:text-red-800">
                      <Trash className="w-5 h-5" />
                    </button>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>
      <PopularHealthPackageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSave={editingPackage ? handleUpdatePackage : handleAddPackage}
        editingPackage={editingPackage}
      />
    </div>
  );
};

export default PopularHealthPackages;