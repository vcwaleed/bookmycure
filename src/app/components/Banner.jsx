"use client";
import Image from "next/image";
import Link from "next/link";

export default function Banner() {
    return (
        <section className="relative h-[400px] md:h-[500px] overflow-hidden">
            <Image
                src="/banner2.jpg"
                alt="Lab testing banner"
                fill
                priority
                className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-800/60 to-transparent backdrop-brightness-75" />
            <div className="absolute inset-0 max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-8">
                <div className="relative z-10 max-w-lg text-center md:text-left mt-10 md:mt-0">
                    <h1 className="font-extrabold leading-tight text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.3)]">
                        <span className="block text-xl whitespace-nowrap md:text-6xl lg:text-6xl">
                            FIND BEST LABS
                        </span>
                        <span className="block text-xl md:text-4xl text-orange-400 font-extrabold mt-2">
                            AT AFFORDABLE PRICES
                        </span>
                    </h1>
                </div>
                <div className="hidden md:block relative mt-8 md:mt-0">
                    <div className="absolute -inset-1 bg-blue-400/30 rounded-2xl blur-2xl"></div>
                    <div className="relative max-w-md mx-auto rounded-2xl border border-white/30 p-8 text-center bg-white/20 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.25)] transition-transform hover:scale-105 hover:shadow-[0_12px_40px_rgba(0,0,0,0.35)] duration-300">
                        <h2 className="text-lg md:text-xl font-bold text-white mb-4 drop-shadow">
                            BookMyCure — Your Health Partner
                        </h2>

                        <p className="text-gray-100 md:text-base leading-relaxed mb-6">
                            BookMyCure helps you compare test prices for over{" "}
                            <span className="font-semibold text-yellow-300">200 tests</span> in{" "}
                            <span className="font-semibold text-green-300">40+ cities</span> — find
                            the best labs at affordable rates.
                        </p>

                        <Link
                            href="/"
                            className="relative inline-block px-8 py-3 font-semibold text-white rounded-md bg-blue-600 shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300"
                        >
                            GET TEST PRICES
                        </Link>
                    </div>
                </div>
                <div className="md:hidden flex flex-col items-center justify-center mt-16 text-center  p-6 rounded-xl backdrop-blur-md shadow-lg">
                    <h2 className="text-lg font-bold text-white mb-4">
                        BookMyCure — Your Health Partner
                    </h2>
                    <Link
                        href="/book"
                        className="relative inline-block px-6 py-2 font-semibold text-white rounded-md bg-blue-600 shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300"
                    >
                        GET TEST PRICES
                    </Link>
                </div>
            </div>
        </section>
    );
}
