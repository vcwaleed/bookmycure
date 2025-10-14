'use client';

import { useState } from 'react';
import AdminTable from './AdminTable';
import AdminModal from './AdminModal';
import ConfirmationDialog from './ConfirmationDialog';
import dummyAdmins from './dummy-admins.json';

const ManageAdmins = () => {
  const [admins, setAdmins] = useState(dummyAdmins);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAdmin, setSelectedAdmin] = useState(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [adminToDelete, setAdminToDelete] = useState(null);

  const handleAddAdmin = () => {
    setSelectedAdmin(null);
    setIsModalOpen(true);
  };

  const handleEditAdmin = (admin) => {
    setSelectedAdmin(admin);
    setIsModalOpen(true);
  };

  const handleDeleteAdmin = (admin) => {
    setAdminToDelete(admin);
    setIsDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    setAdmins(admins.filter((admin) => admin.id !== adminToDelete.id));
    setIsDeleteDialogOpen(false);
    setAdminToDelete(null);
  };

  const handleSaveAdmin = (admin) => {
    if (admin.id) {
      setAdmins(admins.map((a) => (a.id === admin.id ? admin : a)));
    } else {
      const newAdmin = { ...admin, id: Date.now() };
      setAdmins([...admins, newAdmin]);
    }
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
        onEdit={handleEditAdmin}
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
