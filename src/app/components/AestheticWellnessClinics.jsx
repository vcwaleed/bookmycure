'use client';
import { useState, useEffect } from "react";
import Link from "next/link";

export default function AestheticWellnessClinics() {
    const [clinics, setClinics] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchClinics = async () => {
            try {
                const res = await fetch("/api/aesthetic-wellness-clinics");
                const data = await res.json();
                setClinics(data);
            } catch (error) {
                console.error("Error fetching clinics:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchClinics();
    }, []);

    return (
        <section className="mx-auto px-4 py-10 max-w-screen-xl">
            <h2 className="text-black text-2xl md:text-3xl font-bold mb-6">
                Aesthetic & Wellness Clinics
            </h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {clinics.map((clinic, index) => (
                        <div
                            key={index}
                            className="relative bg-white shadow-md rounded-xl p-5 hover:shadow-lg transition-shadow duration-300"
                        >
                            <span className="absolute top-3 left-3 bg-brand text-white text-xs font-semibold px-3 py-1 rounded">
                                {clinic.discount}% Discount
                            </span>
                            <h3 className="mt-10 font-semibold text-lg text-gray-800">
                                {clinic.title}
                            </h3>
                            <p className="text-sm text-gray-500 mt-1">{clinic.services}</p>
                            <div className="mt-4 flex items-center justify-between">
                                <div>
                                    <p className="text-orange-500 font-bold text-xl">{clinic.price}</p>
                                    <p className="text-gray-400 text-sm line-through">
                                        {clinic.oldPrice}
                                    </p>
                                </div>

                                <Link
                                    href="/aestheticclinics"
                                    className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-2 rounded-md transition-colors"
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}
