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
      fetch('/packages.json')
        .then((res) => res.json())
        .then((data) => {
          const selectedPackage = data.find((p) => p.id === parseInt(id));
          setPkg(selectedPackage);
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

  const whatsappUrl = `https://wa.me/${pkg.phone}?text=Hi, I want to book the ${pkg.name} test.`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <Image
            src={pkg.image}
            alt={pkg.name}
            width={500}
            height={300}
            className="w-full h-auto rounded-lg shadow-lg"
          />

            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-3xl font-bold text-gray-800">{pkg.name}</h1>
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                  Popular
                </div>
              </div>

              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {pkg.description}
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
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
                    <span className="text-3xl font-bold text-green-600">
                      Rs. {pkg.price.toLocaleString()}
                    </span>
                    {pkg.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">
                        Rs. {pkg.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                  {pkg.originalPrice && (
                    <div className="text-green-600 font-semibold mt-1">
                      Save Rs. {(pkg.originalPrice - pkg.price).toLocaleString()}!
                    </div>
                  )}
                </div>
              )}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green-500 text-white text-center py-4 px-6 rounded-xl hover:bg-green-600 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl block"
              >
                Book Now via WhatsApp
              </a>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 border border-gray-100">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-3 mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-full md:flex items-center justify-center flex-shrink-0 hidden ">
                  <Shield className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                 <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 leading-tight">
                  BookMyCure — Pakistan&apos;s Trusted Healthcare Booking Platform
                </h2>
              </div>
              <div className="space-y-4 sm:space-y-6 text-gray-600">
                <p className="text-base sm:text-lg lg:text-xl leading-relaxed sm:leading-loose">
                   <strong className="text-green-600">Pakistan&apos;s first platform</strong> to compare prices of lab tests and aesthetic treatments.
                  Find trusted labs and clinics, explore discounts, and book instantly via WhatsApp.
                </p>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start gap-3">
                    <Star className="text-yellow-400 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-0.5" fill="currentColor" />
                    <span className="text-sm sm:text-base lg:text-lg leading-relaxed">
                      Free doctor consultations before and after your appointment
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="text-red-500 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base lg:text-lg leading-relaxed">
                      Verified labs and clinics across Pakistan
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="text-blue-500 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base lg:text-lg leading-relaxed">
                      100% secure and confidential
                    </span>
                  </div>
                </div>
                <div className="sm:hidden grid grid-cols-2 gap-3 pt-4 border-t border-gray-200">
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <Calendar className="w-6 h-6 text-green-600 mx-auto mb-1" />
                    <span className="text-xs font-medium text-gray-700">Easy Booking</span>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <Phone className="w-6 h-6 text-blue-600 mx-auto mb-1" />
                    <span className="text-xs font-medium text-gray-700">24/7 Support</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Need Help?</h3>
              <div className="space-y-3 text-gray-600">
                <p>Our healthcare specialists are here to help you choose the right package and answer all your questions.</p>
                <div className="flex items-center gap-2">
                  <Phone size={18} className="text-green-500" />
                  <span>Available 24/7 for consultations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WhatsAppIcon
        number={pkg.phone}
        message={`Hello! I want to know more about the "${pkg.name}" package at ${pkg.address}.`}
      />
    </div>
  );
};

export default PackageDetailsPage;