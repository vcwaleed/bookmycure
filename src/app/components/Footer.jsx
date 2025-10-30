'use client'
import Image from "next/image"

export default function Footer() {
    return (
        <footer className="bg-gradient-to-br from-blue-50 via-white to-blue-100 border-t border-gray-200">
            <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 md:gap-12">
                    <div className="flex flex-col sm:flex-row lg:flex-col items-center sm:items-start text-center sm:text-left lg:max-w-sm">
                        <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6 lg:mr-0 lg:mb-4">
                            <Image
                                src="/BMC_logo.jpeg"
                                alt="BookMyCure Logo"
                                width={160}
                                height={60}
                                unoptimized
                                className="rounded-lg shadow-md w-32 sm:w-40 lg:w-48"
                            />
                        </div>
                        <p className="text-gray-600 text-sm sm:text-base lg:text-sm flex-1">
                            BookMyCure helps you book medical appointments, manage health packages, and access trusted healthcare services easily.
                        </p>
                    </div>
                    <div className="text-center sm:text-left">
                        <h2 className="mb-3 text-base font-semibold text-gray-900 uppercase tracking-wide">
                            Contact
                        </h2>
                        <ul className="space-y-2 text-gray-600 text-sm sm:text-base">
                            <li>
                                Email: <a href="mailto:info@bookmycure.com" className="hover:text-blue-600 transition-colors">info@bookmycure.com</a>
                            </li>
                            <li>Phone: 03164346667</li>
                            <li>Location: Lahore, Pakistan</li>
                        </ul>
                    </div>
                    <div className="hidden lg:block"></div>
                </div>
                <div className="border-t border-gray-200 mt-8 md:mt-12 pt-6 text-center">
                    <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()}{' '}
                        <a href="https://bookmycure.com/" className="font-semibold hover:text-blue-600 transition-colors">
                            BookMyCure™
                        </a>. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
