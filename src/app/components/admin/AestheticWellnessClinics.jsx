"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Edit, Trash } from "lucide-react";
import AestheticWellnessClinicModal from "./AestheticWellnessClinicModal";
import dummyClinics from "./AestheticWellnessClinics.json";

const AestheticWellnessClinics = () => {
  const [clinics, setClinics] = useState(dummyClinics);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingClinic, setEditingClinic] = useState(null);

  const handleAddClinic = (newClinic) => {
    const newClinics = [...clinics, { ...newClinic, id: Date.now() }];
    setClinics(newClinics);
    // Here you would ideally write back to the JSON file
  };

  const handleUpdateClinic = (updatedClinic) => {
    const newClinics = clinics.map((clinic) =>
      clinic.id === editingClinic.id ? { ...clinic, ...updatedClinic } : clinic
    );
    setClinics(newClinics);
    // Here you would ideally write back to the JSON file
  };

  const handleDeleteClinic = (id) => {
    const newClinics = clinics.filter((clinic) => clinic.id !== id);
    setClinics(newClinics);
    // Here you would ideally write back to the JSON file
  };

  const openModal = (clinic = null) => {
    setEditingClinic(clinic);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setEditingClinic(null);
    setIsModalOpen(false);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Aesthetic & Wellness Clinics</h2>
        <button
          onClick={() => openModal()}
          className="flex items-center px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          <Plus className="w-5 h-5 mr-2" />
          Add Clinic
        </button>
      </div>
      <motion.div layout className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Services</th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Old Price</th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Discount</th>
              <th className="py-3 px-6 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {clinics.map((clinic) => (
              <motion.tr layout key={clinic.id} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-4 px-6">{clinic.title}</td>
                <td className="py-4 px-6">{clinic.services}</td>
                <td className="py-4 px-6">{clinic.price}</td>
                <td className="py-4 px-6">{clinic.oldPrice}</td>
                <td className="py-4 px-6">{clinic.discount}</td>
                <td className="py-4 px-6 text-right">
                  <div className="flex justify-end space-x-4">
                    <button onClick={() => openModal(clinic)} className="text-blue-600 hover:text-blue-800">
                      <Edit className="w-5 h-5" />
                    </button>
                    <button onClick={() => handleDeleteClinic(clinic.id)} className="text-red-600 hover:text-red-800">
                      <Trash className="w-5 h-5" />
                    </button>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>
      <AestheticWellnessClinicModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSave={editingClinic ? handleUpdateClinic : handleAddClinic}
        editingClinic={editingClinic}
      />
    </div>
  );
};

export default AestheticWellnessClinics;
