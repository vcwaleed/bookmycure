'use client'
import Image from "next/image"
import { useEffect, useState } from "react"

const stats = [
  { icon: "/customer.png", subtitle: "Happy Customers" },
  { icon: "/rating.png", subtitle: "By Users On Google" },
  { icon: "/testbooked.png", subtitle: "Tests Booked" },
  { icon: "/city.png", subtitle: "Cities" },
]

export default function ReasonBanner() {
  const [titles, setTitles] = useState([])

  useEffect(() => {
    const fetchTitles = async () => {
      try {
        const res = await fetch("/api/reason-banner-stats") 
        const data = await res.json()
        const { happyCustomers, googleRating, testsBooked, cities } = data
        const formattedTitles = [
          happyCustomers,
          `${googleRating}/5.0`,
          testsBooked,
          cities
        ]
        setTitles(formattedTitles)
      } catch (error) {
        console.error("Error fetching titles:", error)
      }
    }
    fetchTitles()
  }, [])

  return (
    <section className="bg-gray-50 py-12 md:py-16 px-4">
      <div className="max-w-screen-xl mx-auto px-4 py-3">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 md:mb-14 text-center md:text-left">
          Why <span className="text-blue-600">BookMyCure?</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-16">
          {stats.map((item, index) => (
            <div key={index} className="relative flex items-center justify-center">
              <div className="absolute -left-4 sm:-left-6 lg:-left-9 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-white shadow-md rounded-full flex items-center justify-center z-10">
                <div className="w-14 h-14 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center">
                  <Image
                    src={item.icon}
                    alt={item.subtitle}
                    width={50}
                    height={50}
                    className="object-contain w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
                  />
                </div>
              </div>

              <div className="bg-white w-full rounded-2xl shadow-md py-6 sm:py-8 pl-12 sm:pl-16 lg:pl-14 pr-4 sm:pr-6 text-left hover:shadow-lg transition-shadow duration-300 min-h-28 sm:min-h-32 flex flex-col justify-center">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                  {titles[index] || "Loading..."}
                </h3>
                <p className="text-gray-600 mt-1 text-sm sm:text-base">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
