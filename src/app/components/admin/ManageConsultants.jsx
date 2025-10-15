'use client';
import { useState, useEffect } from 'react';
import ConsultantModal from './ConsultantModal';
import ConfirmationDialog from './ConfirmationDialog';
import { Plus, Edit3, Trash2, UserCircle2 } from 'lucide-react';

const ManageConsultants = () => {
  const [consultants, setConsultants] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedConsultant, setSelectedConsultant] = useState(null);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [consultantToDelete, setConsultantToDelete] = useState(null);

  useEffect(() => {
    fetch('/consultants.json')
      .then((res) => res.json())
      .then((data) => setConsultants(data));
  }, []);

  const handleAdd = () => {
    setSelectedConsultant(null);
    setIsModalOpen(true);
  };

  const handleEdit = (consultant) => {
    setSelectedConsultant(consultant);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    setConsultantToDelete(id);
    setIsConfirmOpen(true);
  };

  const handleSave = async (consultantData) => {
    const isNew = !consultantData.id;
    const url = isNew ? '/api/consultants' : `/api/consultants/${consultantData.id}`;
    const method = isNew ? 'POST' : 'PATCH';

    console.log(`Calling ${method} ${url} with data:`, consultantData);

    if (isNew) {
      const newConsultant = { ...consultantData, id: Date.now() };
      setConsultants([...consultants, newConsultant]);
    } else {
      setConsultants(
        consultants.map((c) => (c.id === consultantData.id ? consultantData : c))
      );
    }
    setIsModalOpen(false);
  };

  const handleConfirmDelete = async () => {
    const url = `/api/consultants/${consultantToDelete}`;
    const method = 'DELETE';
    console.log(`Calling ${method} ${url}`);

    setConsultants(consultants.filter((c) => c.id !== consultantToDelete));
    setIsConfirmOpen(false);
    setConsultantToDelete(null);
  };

  return (
    <div className="container mx-auto p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Manage Consultants
        </h1>
        <button
          onClick={handleAdd}
          className="mt-4 sm:mt-0 flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium shadow-md hover:from-blue-700 hover:to-indigo-700 transition-all"
        >
          <Plus className="w-4 h-4" /> Add Consultant
        </button>
      </div>

      {/* Table Container */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
        {consultants.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-gray-700">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="py-3 px-4 text-left font-semibold">Name</th>
                  <th className="py-3 px-4 text-left font-semibold">Specialization</th>
                  <th className="py-3 px-4 text-left font-semibold">Location</th>
                  <th className="py-3 px-4 text-center font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {consultants.map((consultant) => (
                  <tr
                    key={consultant.id}
                    className="hover:bg-gray-50 transition-all border-b last:border-none"
                  >
                    <td className="py-3 px-4 flex items-center gap-2">
                      <UserCircle2 className="w-5 h-5 text-blue-500" />
                      <span>{consultant.name}</span>
                    </td>
                    <td className="py-3 px-4">{consultant.specialization}</td>
                    <td className="py-3 px-4">{consultant.location}</td>
                    <td className="py-3 px-4 text-center">
                      <button
                        onClick={() => handleEdit(consultant)}
                        className="inline-flex items-center justify-center bg-yellow-400 hover:bg-yellow-500 text-white px-2.5 py-1.5 rounded-md mr-2 transition"
                      >
                        <Edit3 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(consultant.id)}
                        className="inline-flex items-center justify-center bg-red-500 hover:bg-red-600 text-white px-2.5 py-1.5 rounded-md transition"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          // Empty State
          <div className="text-center py-12 text-gray-500">
            <UserCircle2 className="w-12 h-12 mx-auto mb-3 text-gray-400" />
            <p className="text-lg font-medium">No consultants found</p>
            <p className="text-sm">Click “Add Consultant” to create your first entry.</p>
          </div>
        )}
      </div>

      {/* Modals */}
      {isModalOpen && (
        <ConsultantModal
          consultant={selectedConsultant}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSave}
        />
      )}
      {isConfirmOpen && (
        <ConfirmationDialog
          message="Are you sure you want to delete this consultant?"
          onConfirm={handleConfirmDelete}
          onCancel={() => setIsConfirmOpen(false)}
        />
      )}
    </div>
  );
};

export default ManageConsultants;
