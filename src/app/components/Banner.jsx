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
            <div className="absolute max-w-screen-xl items-center justify-between px-4 mx-auto  inset-0 flex flex-col md:flex-row md:px-4">
                <div class="relative z-10 max-w-lg text-center md:text-left">
                    <h1
                        class="text-3xl md:text-5xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-100 via-blue-500 to-blue-700 drop-shadow-lg"
                    >
                        FIND BEST LABS <br />
                        <span class="text-white">AT AFFORDABLE PRICES</span>
                    </h1>
                </div>
                <div className="mt-6 md:mt-0">
                    <div className="max-w-sm mx-auto bg-gradient-to-br from-blue-50 via-white/50 to-blue-100 rounded-3xl shadow-lg p-8 md:p-4 text-center md:text-left overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl -z-10" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-200/30 rounded-full blur-3xl -z-10" />
                        <h2 className="text-sm md:text-xl font-extrabold text-blue-900">
                            BookMyCure — Your Health Partner
                        </h2>

                        <p className="text-gray-700 text-base md:text-sm leading-relaxed mb-2">
                            BookMyCure is an aggregator of medical diagnostic services. You can
                            check medical diagnostic test prices for more than{" "}
                            <span className="font-semibold text-blue-700">200 tests</span> in{" "}
                            <span className="font-semibold text-green-700">40+ cities</span> of
                            Pakistan — helping you find the best labs at the most affordable rates.
                        </p>

                        <div className="flex justify-center">
                            <Link
                                href="/"
                                className="bg-blue-500 text-white font-semibold px-4 py-1 rounded-sm text-base shadow-md hover:shadow-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300"
                            >
                                GET TEST PRICES
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
