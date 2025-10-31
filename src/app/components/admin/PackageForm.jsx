'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

const PackageForm = ({ initialData = {}, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    name: initialData.name || '',
    numberOfTests: initialData.numberOfTests || '',
    price: initialData.price || '',
    oldPrice: initialData.oldPrice || '',
    discount: initialData.discount || '',
    description: initialData.description || '',
    city: initialData.city || '',
    address: initialData.address || '',
    phone: initialData.phone || '',
    category: initialData.category || '',
    type: initialData.type || 'health',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 mt-8 border border-gray-100"
    >
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        {initialData.id ? 'Edit Package' : 'Create New Package'}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {[
            { name: 'name', placeholder: 'Package Name', type: 'text' },
            { name: 'numberOfTests', placeholder: 'Number of Tests', type: 'number' },
            { name: 'price', placeholder: 'Price', type: 'number' },
            { name: 'oldPrice', placeholder: 'Old Price', type: 'number' },
            { name: 'discount', placeholder: 'Discount', type: 'text' },
            { name: 'city', placeholder: 'City', type: 'text' },
            { name: 'address', placeholder: 'Address', type: 'text' },
            { name: 'phone', placeholder: 'Phone', type: 'text' },
            { name: 'category', placeholder: 'Category', type: 'text' },
          ].map((field) => (
            <input
              key={field.name}
              type={field.type}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              placeholder={field.placeholder}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition duration-200"
            />
          ))}

          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition duration-200"
          >
            <option value="health">Health</option>
            <option value="spa">Spa</option>
          </select>
        </div>

        <div>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            rows="4"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition duration-200 resize-none"
          ></textarea>
        </div>

        <div className="flex justify-end gap-3 pt-4">
          {onCancel && (
            <button
              type="button"
              onClick={onCancel}
              className="px-5 py-2.5 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition duration-200"
            >
              Cancel
            </button>
          )}
          <button
            type="submit"
            className="px-6 py-2.5 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition duration-200"
          >
            {initialData.id ? 'Save Changes' : 'Create Package'}
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default PackageForm;
