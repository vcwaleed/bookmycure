'use client'
import Image from "next/image"

const stats = [
  {
    icon: "/customer.png",
    title: "7,53,723+",
    subtitle: "Happy Customers",
  },
  {
    icon: "/rating.png",
    title: "Rated 4.6/5.0",
    subtitle: "By Users On Google",
  },
  {
    icon: "/testbooked.png",
    title: "28,500+",
    subtitle: "Tests Booked",
  },
  {
    icon: "/city.png",
    title: "Covering 250+",
    subtitle: "Cities",
  },
]

export default function ReasonBanner() {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-screen-xl mx-auto px-4 py-3">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-14 ">
          Why <span className="text-blue-600">BookMyCure?</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
          {stats.map((item, index) => (
            <div key={index} className="relative flex items-center justify-center">
              <div className="absolute -left-9 w-20 h-20 bg-white shadow-md rounded-full flex items-center justify-center">
                <div className="w-24 h-24  rounded-full flex items-center justify-center">
                  <Image
                    src={item.icon}
                    alt={item.subtitle}
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="bg-white w-2xl rounded-2xl shadow-md py-8 pl-14 pr-6 text-left hover:shadow-lg transition-shadow duration-300 min-h-32 flex flex-col justify-center">
                <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                <p className="text-gray-600 mt-1">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
