'use client';
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Plus, Edit, Trash } from "lucide-react";
import AestheticWellnessClinicModal from "./AestheticWellnessClinicModal";

const AestheticWellnessClinics = () => {
  const [clinics, setClinics] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingClinic, setEditingClinic] = useState(null);

  useEffect(() => {
    fetch('/api/aesthetic-wellness-clinics')
      .then(res => res.json())
      .then(data => setClinics(data));
  }, []);

  const handleAddClinic = async (newClinic) => {
    const response = await fetch('/api/aesthetic-wellness-clinics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newClinic),
    });
    const savedClinic = await response.json();
    setClinics([...clinics, savedClinic]);
  };

  const handleUpdateClinic = async (updatedClinic) => {
    const response = await fetch(`/api/aesthetic-wellness-clinics/${editingClinic._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedClinic),
    });
    const savedClinic = await response.json();
    setClinics(clinics.map((clinic) =>
      clinic._id === editingClinic._id ? savedClinic : clinic
    ));
  };

  const handleDeleteClinic = async (id) => {
    await fetch(`/api/aesthetic-wellness-clinics/${id}`, { method: 'DELETE' });
    setClinics(clinics.filter((clinic) => clinic._id !== id));
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
              <motion.tr layout key={clinic._id} className="border-b border-gray-200 hover:bg-gray-50">
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
                    <button onClick={() => handleDeleteClinic(clinic._id)} className="text-red-600 hover:text-red-800">
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
