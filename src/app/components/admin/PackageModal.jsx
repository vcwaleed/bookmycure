"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const PackageModal = ({ isOpen, onClose, onSave, editingPackage }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [details, setDetails] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (editingPackage) {
      setName(editingPackage.name || "");
      setPrice(editingPackage.price || "");
      setDetails(editingPackage.details || "");
    } else {
      setName("");
      setPrice("");
      setDetails("");
    }
    setError("");
  }, [editingPackage, isOpen]);

  const handleSave = () => {
    if (!name.trim() || !price.trim()) {
      setError("Package name and price are required!");
      return;
    }

    onSave({ name, price, details });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: -30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: -30 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="relative bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md border border-gray-200"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition"
            >
              <X size={22} />
            </button>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              {editingPackage ? "Edit Package" : "Add Package"}
            </h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Package Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition"
              />
              <input
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition"
              />
              <textarea
                placeholder="Details (optional)"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition resize-none"
                rows="3"
              />
            </div>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            <div className="flex justify-end space-x-4 mt-6">
              <button
                onClick={onClose}
                className="px-6 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                Save
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PackageModal;
