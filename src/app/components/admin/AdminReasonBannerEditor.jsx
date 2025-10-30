'use client';
import { useState, useEffect } from "react";

const AdminReasonBannerEditor = () => {
  const [formData, setFormData] = useState({
    happyCustomers: "",
    googleRating: "",
    testsBooked: "",
    cities: "",
  });
  const [loading, setLoading] = useState(true);
  const [statId, setStatId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/reason-banner-stats");
        const data = await response.json();
        if (data) {
          setFormData(data);
          setStatId(data._id);
        }
      } catch (error) {
        console.error("Error fetching reason banner data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = statId ? `/api/reason-banner-stats/${statId}` : '/api/reason-banner-stats';
    const method = statId ? 'PUT' : 'POST';

    try {
      await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      // Optionally show a success message
    } catch (error) {
      console.error("Error updating reason banner data:", error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Edit Reason Banner Stats
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="happyCustomers"
            className="block text-sm font-medium text-gray-700"
          >
            Happy Customers
          </label>
          <input
            type="text"
            id="happyCustomers"
            name="happyCustomers"
            value={formData.happyCustomers}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <div>
          <label
            htmlFor="googleRating"
            className="block text-sm font-medium text-gray-700"
          >
            By Users On Google
          </label>
          <input
            type="text"
            id="googleRating"
            name="googleRating"
            value={formData.googleRating}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <div>
          <label
            htmlFor="testsBooked"
            className="block text-sm font-medium text-gray-700"
          >
            Tests Booked
          </label>
          <input
            type="text"
            id="testsBooked"
            name="testsBooked"
            value={formData.testsBooked}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <div>
          <label
            htmlFor="cities"
            className="block text-sm font-medium text-gray-700"
          >
            Cities
          </label>
          <input
            type="text"
            id="cities"
            name="cities"
            value={formData.cities}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default AdminReasonBannerEditor;
