import Link from "next/link";

const packages = [
  {
    title: "Vital Screening Package",
    tests: "82 Tests Included",
    price: "Rs 599",
    oldPrice: "Rs2010",
    discount: "70% Discount",
  },
  {
    title: "Fit Pakistan Full Body With Free Vit B12",
    tests: "89 Tests Included",
    price: "Rs 1099",
    oldPrice: "RS 4775",
    discount: "76% Discount",
  },
  {
    title: "Smart Plus Full Body Check-Up With Vitamin With Free HScrp",
    tests: "91 Tests Included",
    price: "Rs 1599",
    oldPrice: "RS 7320",
    discount: "78% Discount",
  },
  {
    title: "Annual Health Checkup- Advance With Free HsCRP",
    tests: "91 Tests Included",
    price: "Rs 1599",
    oldPrice: "Rs 7920",
    discount: "79% Discount",
  },
];

export default function HealthPackages() {
  return (
    <section className="mx-auto px-4 py-8 max-w-screen-xl">
      <h2 className=" text-black text-2xl md:text-3xl font-bold mb-6">
        Popular Health Packages
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="relative bg-white shadow-md rounded-xl p-5 hover:shadow-lg transition-shadow duration-300"
          >
            <span className="absolute top-3 left-3 bg-brand text-white text-xs font-semibold px-3 py-1 rounded">
              {pkg.discount}
            </span>

            <h3 className="mt-10 font-semibold text-lg text-gray-800">
              {pkg.title}
            </h3>
            <p className="text-sm text-gray-500 mt-1">{pkg.tests}</p>

            <div className="mt-4 flex items-center justify-between">
              <div>
                <p className="text-orange-500 font-bold text-xl">{pkg.price}</p>
                <p className="text-gray-400 text-sm line-through">
                  {pkg.oldPrice}
                </p>
              </div>
              <Link  href={'/'} className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-2 rounded-md transition-colors">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
