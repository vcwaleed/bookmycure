"use client";
import { useEffect, useState } from "react";

const Consultant = () => {
  const [consultants, setConsultants] = useState([]);

  useEffect(() => {
    fetch("/consultants.json")
      .then((res) => res.json())
      .then((data) => setConsultants(data))
      .catch((err) => console.error("Error loading consultants:", err));
  }, []);

  return (
    <section className="py-10 px-4 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-4 py-3">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Our Consultants
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {consultants.map((consultant) => (
            <div
              key={consultant.id}
              className="bg-white shadow-md rounded-2xl p-5 border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-1">
                {consultant.name}
              </h3>
              <p className="text-sm text-blue-600 font-medium mb-3">
                {consultant.specialization}
              </p>

              <p className="text-sm text-gray-700 mb-1">
                <span className="font-semibold">Location:</span> {consultant.location}
              </p>
              <p className="text-sm text-gray-700 mb-2">
                <span className="font-semibold">Address:</span> {consultant.address}
              </p>

              <p className="text-gray-600 text-sm mb-4">{consultant.description}</p>

              <a
                href={`https://wa.me/${consultant.whatsapp.replace("+", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center bg-orange-500 text-white py-2 rounded-lg font-medium hover:bg-green-600 transition"
              >
                Chat on WhatsApp
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Consultant;
