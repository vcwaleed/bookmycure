"use client";
import Link from "next/link";
import Image from "next/image";
import { MapPin} from "lucide-react";

const PackageCard = ({ pkg }) => {
  const whatsappUrl = `https://wa.me/${pkg.phone}?text=Hi, I want to book the ${pkg.name} test.`;

  const healthImages = ["/health1.png", "/health2.png", "/health3.png", "/health3.png", "/health4.png"];
  const spaImages = ["/spa1.png", "/spa2.png", "/spa3.png", "/spa4.png"];

  const getRandomImage = (type) => {
    if (type === 'health') {
      return healthImages[Math.floor(Math.random() * healthImages.length)];
    } else if (type === 'spa') {
      return spaImages[Math.floor(Math.random() * spaImages.length)];
    }
    return "/banner2.jpg";
  };

  const imageSrc = getRandomImage(pkg.type);

  return (
    <div className="bg-white rounded-2xl mb-8 shadow-lg overflow-hidden transform hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
      <div className="relative w-full h-48">
        <Image
          src={imageSrc}
          alt={pkg.name}
          fill
          className="object-cover"
          sizes="100%"
          priority
        />
      </div>

      <div className="p-5 space-y-3">
        <h3 className="text-xl font-bold text-gray-800">{pkg.name}</h3>
        <p className="text-gray-600 text-sm">
          Includes <span className="font-semibold">{pkg.numberOfTests}</span>{" "}
          tests
        </p>
        <div className="text-sm text-gray-500 space-y-1">
          <p className="flex items-center gap-2">
            <MapPin size={16} className="text-blue-500" />
            <span>{pkg.city}</span>
          </p>
          {pkg.address && (
            <p className="flex items-center gap-2 pl-[22px]">{pkg.address}</p>
          )}
        </div>
        <div className="flex items-center mb-2">
          <p className="text-xl font-bold text-green-600 mr-2">Rs {pkg.price}</p>
          <p className="text-gray-400 line-through text-sm">Rs {pkg.oldPrice}</p>
          {pkg.discount && (
            <span className="ml-auto bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
              {pkg.discount}
            </span>
          )}
        </div>
        <div className="flex justify-between mt-3">
          <Link
            href={`/package/${pkg.id}`}
            className="bg-orange-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-orange-600 transition-colors duration-300"
          >
            View Details
          </Link>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-600 transition-colors duration-300"
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
