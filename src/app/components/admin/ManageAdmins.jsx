'use client';

import { useState, useEffect } from 'react';
import AdminTable from './AdminTable';
import AdminModal from './AdminModal';
import ConfirmationDialog from './ConfirmationDialog';

const ManageAdmins = () => {
  const [admins, setAdmins] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAdmin, setSelectedAdmin] = useState(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [adminToDelete, setAdminToDelete] = useState(null);

  useEffect(() => {
    fetch('/api/admins')
      .then((res) => res.json())
      .then((data) => setAdmins(data));
  }, []);

  const handleAddAdmin = () => {
    setSelectedAdmin(null);
    setIsModalOpen(true);
  };


  const handleDeleteAdmin = (admin) => {
    setAdminToDelete(admin);
    setIsDeleteDialogOpen(true);
  };

  const confirmDelete = async () => {
    try {
      await fetch(`/api/admins/${adminToDelete._id}`, { method: 'DELETE' });
      setAdmins(admins.filter((admin) => admin._id !== adminToDelete._id));
    } catch (error) {
      console.error("Error deleting admin:", error);
    }

    setIsDeleteDialogOpen(false);
    setAdminToDelete(null);
  };

  const handleSaveAdmin = async (admin) => {
    const isNew = !admin._id;
    const url = isNew ? '/api/admins' : `/api/admins/${admin._id}`;
    const method = isNew ? 'POST' : 'PUT';

    try {
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(admin),
      });
      const savedAdmin = await response.json();

      if (isNew) {
        setAdmins([...admins, savedAdmin]);
      } else {
        setAdmins(
          admins.map((a) => (a._id === savedAdmin._id ? savedAdmin : a))
        );
      }
    } catch (error) {
      console.error("Error saving admin:", error);
    }

    setIsModalOpen(false);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex justify-end mb-4">
        <button
          onClick={handleAddAdmin}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Add Admin
        </button>
      </div>
      <AdminTable
        admins={admins}
        onDelete={handleDeleteAdmin}
      />
      {isModalOpen && (
        <AdminModal
          admin={selectedAdmin}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSaveAdmin}
        />
      )}
      {isDeleteDialogOpen && (
        <ConfirmationDialog
          message={`Are you sure you want to delete ${adminToDelete?.name}?`}
          onConfirm={confirmDelete}
          onCancel={() => setIsDeleteDialogOpen(false)}
        />
      )}
    </div>
  );
};

export default ManageAdmins;
