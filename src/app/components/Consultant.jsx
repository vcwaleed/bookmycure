"use client";
import { useEffect, useState } from "react";
import { Briefcase, MapPin, Clock, Star, DollarSign, CheckCircle } from "lucide-react";

const Consultant = () => {
  const [consultants, setConsultants] = useState([]);

  useEffect(() => {
    fetch("/api/consultants")
      .then((res) => res.json())
      .then((data) => setConsultants(data))
      .catch((err) => console.error("Error loading consultants:", err));
  }, []);

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Our Expert Consultants
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
            Get professional advice from our team of experienced and certified consultants.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {consultants.map((consultant) => (
            <div
              key={consultant.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 border-t-4 border-blue-500"
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{consultant.name}</h3>
                <p className="text-blue-600 font-semibold mb-4 flex items-center gap-2">
                  <Briefcase size={18} /> {consultant.specialization}
                </p>

                <p className="text-gray-700 mb-4 flex items-center gap-2">
                  <MapPin size={18} /> {consultant.location}
                </p>

                <div className="text-gray-600 space-y-3 mb-6">
                  {/* <p className="flex items-center gap-2"><Star size={18} /> {consultant.years_of_experience} years of experience</p>
                  <p className="flex items-center gap-2"><DollarSign size={18} /> Rs. {consultant.hourly_rate}/hour</p>
                  <p className="flex items-center gap-2"><CheckCircle size={18} /> {consultant.is_available ? 'Available now' : 'Not available'}</p> */}
                </div>

                <p className="text-gray-500 text-sm mb-6 italic">{consultant.description}</p>
                <a
                  href={`https://wa.me/${consultant.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center w-full px-6 py-3 bg-orange-500 text-white font-semibold rounded-full shadow-md hover:bg-green-600 transition-colors duration-300"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Consultant;
