'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Briefcase, MapPin, Home, Book, Phone } from 'lucide-react';

const ConsultantModal = ({ consultant, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    name: '',
    specialization: '',
    location: '',
    address: '',
    description: '',
    whatsapp: '',
  });

  useEffect(() => {
    if (consultant) {
      setFormData({
        name: consultant.name || '',
        specialization: consultant.specialization || '',
        location: consultant.location || '',
        address: consultant.address || '',
        description: consultant.description || '',
        whatsapp: consultant.whatsapp || '',
      });
    } else {
      setFormData({
        name: '',
        specialization: '',
        location: '',
        address: '',
        description: '',
        whatsapp: '',
      });
    }
  }, [consultant]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...consultant, ...formData });
    onClose();
  };

  return (
    <AnimatePresence>
      <motion.div
        key="overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      >
        <motion.div
          key="modal"
          initial={{ y: 40, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 40, opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden"
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-6 flex justify-between items-center">
            <h2 className="text-lg md:text-xl font-semibold tracking-wide">
              {consultant ? 'Edit Consultant' : 'Add New Consultant'}
            </h2>
            <button
              onClick={onClose}
              className="text-white/80 hover:text-white transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Field
                icon={<User className="w-4 h-4" />}
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter full name"
              />
              <Field
                icon={<Briefcase className="w-4 h-4" />}
                label="Specialization"
                name="specialization"
                value={formData.specialization}
                onChange={handleChange}
                placeholder="Enter specialization"
              />
              <Field
                icon={<MapPin className="w-4 h-4" />}
                label="Location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Enter location"
              />
              <Field
                icon={<Phone className="w-4 h-4" />}
                label="WhatsApp"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                placeholder="Enter WhatsApp number"
              />
            </div>
            <Field
              icon={<Home className="w-4 h-4" />}
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter address"
            />
            <Field
              icon={<Book className="w-4 h-4" />}
              label="Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter consultant details"
              isTextarea
            />
            <div className="flex justify-end gap-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition font-medium"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 transition font-medium shadow-md"
              >
                Save
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const Field = ({ icon, label, name, value, onChange, placeholder, isTextarea = false }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <div className="relative">
      <span className="absolute left-3 top-2.5 text-gray-400">{icon}</span>
      {isTextarea ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows="3"
          className="pl-10 w-full rounded-lg border border-gray-300 bg-gray-50 focus:bg-white text-gray-900 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none"
          required
        />
      ) : (
        <input
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="pl-10 w-full rounded-lg border border-gray-300 bg-gray-50 focus:bg-white text-gray-900 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
          required
        />
      )}
    </div>
  </div>
);

export default ConsultantModal;
