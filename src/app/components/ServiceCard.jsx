'use client'
import Image from "next/image"

const data = [
  { label: "🧪 Health Packages", image: "/health.png" },
  { label: "💉 Blood Tests", image: "/blood.png" },
  { label: "💧 Urine Tests", image: "/urine.png" },
  { label: "🧠 MRI Scan", image: "/mri.png" },
  { label: "🩻 Ultrasound", image: "/ultrasound.png" },
]

export default function ServiceCard() {
  return (
    <section className="max-w-screen-xl mx-auto px-4 py-12">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">
        Our Services
      </h3>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 cursor-pointer">
        {data.map((item, i) => (
          <div
            key={i}
            className="flex items-center bg-white rounded-2xl shadow-md hover:shadow-lg transition-all overflow-hidden group"
          >
            <div className="w-1/3 h-24 md:h-28 lg:h-32 flex-shrink-0">
              <Image
                src={item.image}
                alt={item.label}
                width={150}
                height={150}
                className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex-1 pr-3">
              <h5 className="text-gray-900 font-semibold text-base md:text-lg">
                {item.label}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
