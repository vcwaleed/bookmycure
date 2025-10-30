"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Award, Zap } from "lucide-react";

export default function Banner() {
    return (
        <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-white overflow-hidden">
            <div className="max-w-screen-xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh] py-20 sm:py-28">
                    {/* Left Content */}
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-orange-600 to-indigo-6">
                            Find Top Labs
                            <br /> 
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-indigo-600">
                                Book with Ease
                            </span>
                        </h1>
                        <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0">
                            BookMyCure is Pakistan’s #1 platform for comparing lab test prices and booking appointments at trusted labs and clinics nationwide.
                        </p>
                        
                        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <Link href="/healthpackages"
                                className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-orange-600 text-white font-semibold rounded-full shadow-lg hover:bg-gray-700 transition-transform transform hover:scale-105 duration-300">
                                    Explore Packages <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </div>

                        <div className="mt-12 text-center lg:text-left">
                            <p className="text-sm text-gray-500 font-medium">Trusted by thousands of patients across Pakistan</p>
                            <div className="flex justify-center lg:justify-start items-center gap-6 mt-4">
                                <ShieldCheck className="w-6 h-6 text-gray-400" />
                                <Award className="w-6 h-6 text-gray-400" />
                                <Zap className="w-6 h-6 text-gray-400" />
                            </div>
                        </div>
                    </div>

                    {/* Right Content (Image) */}
                    <div className="relative h-80 lg:h-full">
                        <Image
                            src="/banner2.jpg"
                            alt="Healthcare professional analyzing samples"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-3xl shadow-2xl"
                        />
                        <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-blue-200 rounded-full blur-2xl opacity-50"></div>
                        <div className="absolute -top-8 -left-8 w-40 h-40 bg-indigo-200 rounded-full blur-2xl opacity-50"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
