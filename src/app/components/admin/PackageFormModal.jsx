'use client';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import PackageForm from './PackageForm';

const PackageFormModal = ({ pkg, onClose, onSave }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-6 sm:p-8 overflow-y-auto max-h-[90vh]"
      >
        <div className="flex justify-between items-center border-b border-gray-200 pb-4 mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
            {pkg?.id ? 'Edit Package' : 'Create New Package'}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 transition"
            aria-label="Close Modal"
          >
            <X size={24} />
          </button>
        </div>
        <PackageForm
          initialData={pkg}
          onSubmit={onSave}
          onCancel={onClose}
        />
      </motion.div>
    </motion.div>
  );
};

export default PackageFormModal;
