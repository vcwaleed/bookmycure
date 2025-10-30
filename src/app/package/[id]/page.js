"use client";

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import WhatsAppIcon from '@/app/components/WhatsAppIcon';
import Image from "next/image";
import { ArrowLeft, Star, Clock, MapPin, Shield, Calendar, Phone } from 'lucide-react';

const PackageDetailsPage = () => {
  const [pkg, setPkg] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const router = useRouter();

  useEffect(() => {
    if (id) {
      fetch(`/api/packages/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setPkg(data.data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-500"></div>
      </div>
    );
  }

  if (!pkg) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Package Not Found</h2>
          <button
            onClick={() => router.back()}
            className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors duration-300 flex items-center gap-2 mx-auto"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const whatsappUrl = `https://wa.me/${pkg.phone}?text=Hi, I want to book the ${pkg.name || pkg.title} test.`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F0F9FF] via-[#E0F2FE] to-[#ECFDF5] relative overflow-hidden">
  {/* Decorative Background Blur Elements */}
  <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2" />
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-200 rounded-full blur-3xl opacity-30 translate-x-1/3 translate-y-1/3" />

  <div className="container mx-auto px-4 py-12 relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      {/* Product Card */}
      <div className="backdrop-blur-xl bg-white/80 rounded-3xl shadow-2xl border border-white/40 overflow-hidden hover:shadow-3xl transition-all duration-300">
        <Image
          src={pkg.image || "/banner2.jpg"}
          alt={pkg.name || pkg.title}
          width={500}
          height={300}
          className="w-full h-auto object-cover rounded-t-3xl"
        />
        <div className="p-8 lg:p-10">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-extrabold text-gray-800 tracking-tight">
              {pkg.name || pkg.title}
            </h1>
            <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
              Popular
            </div>
          </div>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            {pkg.description}
          </p>

          <div className="grid grid-cols-2 gap-5 mb-6">
            <div className="flex items-center gap-3 text-gray-700">
              <Clock size={20} className="text-green-500" />
              <span>Fast Results</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <Shield size={20} className="text-green-500" />
              <span>Certified Labs</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <Calendar size={20} className="text-green-500" />
              <span>Easy Booking</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <Phone size={20} className="text-green-500" />
              <span>24/7 Support</span>
            </div>
          </div>

          {pkg.price && (
            <div className="mb-6">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-green-600">
                   {pkg.price.toLocaleString()}
                </span>
                {pkg.originalPrice && (
                  <span className="text-lg text-gray-500 line-through">
                    {pkg.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>
              {pkg.originalPrice && (
                <div className="text-green-600 font-semibold mt-1 text-sm">
                  Save {(pkg.originalPrice - pkg.price).toLocaleString()}!
                </div>
              )}
            </div>
          )}

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-green-500 text-white text-center py-4 px-6 rounded-xl hover:bg-green-600 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-2xl block transform hover:-translate-y-1"
          >
            📲 Book Now via WhatsApp
          </a>
        </div>
      </div>

      {/* Info / Selling Points */}
      <div className="space-y-8">
        <div className="backdrop-blur-xl bg-white/80 rounded-3xl shadow-2xl p-8 border border-white/40 hover:shadow-3xl transition-all duration-300">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
            <div className="hidden md:flex w-14 h-14 bg-green-500 rounded-full items-center justify-center flex-shrink-0 shadow-md">
              <Shield className="text-white w-6 h-6" />
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 leading-snug">
              BookMyCure — Pakistan&apos;s Trusted Healthcare Booking Platform
            </h2>
          </div>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            <strong className="text-green-600">
              Pakistan&apos;s first platform
            </strong>{" "}
            to compare prices of lab tests and aesthetic treatments. Find trusted labs and clinics, explore discounts, and book instantly via WhatsApp.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Star className="text-yellow-400 w-6 h-6 flex-shrink-0 mt-0.5" />
              <span className="text-base text-gray-700">
                Free doctor consultations before and after your appointment
              </span>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="text-red-500 w-6 h-6 flex-shrink-0 mt-0.5" />
              <span className="text-base text-gray-700">
                Verified labs and clinics across Pakistan
              </span>
            </div>
            <div className="flex items-start gap-3">
              <Shield className="text-blue-500 w-6 h-6 flex-shrink-0 mt-0.5" />
              <span className="text-base text-gray-700">
                100% secure and confidential
              </span>
            </div>
          </div>
        </div>

        {/* Help Card */}
        <div className="backdrop-blur-xl bg-white/80 rounded-3xl shadow-2xl p-8 border border-white/40 hover:shadow-3xl transition-all duration-300">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Need Help?
          </h3>
          <p className="text-gray-600 mb-4">
            Our healthcare specialists are here to help you choose the right package and answer all your questions.
          </p>
          <div className="flex items-center gap-2 text-gray-700">
            <Phone size={18} className="text-green-500" />
            <span>Available 24/7 for consultations</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Floating WhatsApp */}
  <WhatsAppIcon
    number={pkg.phone}
    message={`Hello! I want to know more about the "${pkg.name}" package at ${pkg.address}.`}
  />
</div>

  );
};

export default PackageDetailsPage;