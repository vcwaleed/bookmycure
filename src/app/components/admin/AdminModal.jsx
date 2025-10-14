'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Mail, Lock } from 'lucide-react';

const AdminModal = ({ admin, onClose, onSave }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (admin) {
      setName(admin.name);
      setEmail(admin.email);
      setPassword(admin.password || '');
    } else {
      setName('');
      setEmail('');
      setPassword('');
    }
  }, [admin]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ id: admin?.id, name, email, password });
    onClose();
  };

  return (
    <AnimatePresence>
      <motion.div
        key="overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-white/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      >
        <motion.div
          key="modal"
          initial={{ y: 60, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 60, opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.25 }}
          className="bg-white  w-full max-w-md rounded-2xl shadow-2xl p-6 relative"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500"
          >
            <X className="w-5 h-5" />
          </button>
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
            {admin ? 'Edit Admin' : 'Add New Admin'}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700  mb-1">
                Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter full name"
                  className="pl-10 w-full rounded-lg border  bg-white  text-gray-900  py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700  mb-1">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email address"
                  className="pl-10 w-full rounded-lg border border-gray-300  bg-white  text-gray-900  py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700  mb-1">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="pl-10 w-full rounded-lg border  bg-white text-gray-900 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  required
                />
              </div>
            </div>
            <div className="flex justify-end space-x-3 pt-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-lg bg-gray-200  text-gray-800  hover:bg-gray-300  transition-all"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-md"
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

export default AdminModal;
