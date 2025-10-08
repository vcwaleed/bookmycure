'use client'
import Image from "next/image"
const data = [1, 2, 3, 4]

export default function ServiceCard() {
  return (
    <>
    <h3 className="text-black">our Services</h3>
    <div className="flex flex-row flex-wrap gap-4 pl-4"> {/* ✅ single parent flex container */}
    
      {data.map((item) => (
        <a
          key={item}
          href="#"
          className="flex items-center bg-white border border-gray-200 rounded-sm shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100  dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src="/docs/images/blog/image-4.jpg"
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy
            </h5>
          </div>
        </a>
      ))}
    </div>
    </>
  )
}
