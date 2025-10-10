import Image from "next/image"
export default function Footer() {
    return (
        <footer class="bg-white">
            <div class="mx-auto w-full max-w-screen-xl">
                <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
                    <Image
                        src="/BMC_logo.jpeg"
                        alt="BMC Logo"
                        width={48}
                        height={48}
                        unoptimized
                        className="h-12 w-auto"
                    />
                    <div>
                        <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase">Company</h2>
                        <ul class="text-gray-500 font-medium">
                            <li class="mb-4">
                                <a href="#" class=" hover:underline">About</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Careers</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Brand Center</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Blog</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase">Help center</h2>
                        <ul class="text-gray-500 font-medium">
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Discord Server</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Twitter</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Facebook</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercas ">Legal</h2>
                        <ul class="text-gray-500 font-medium">
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Privacy Policy</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Licensing</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                            </li>
                        </ul>
                    </div>

                </div>
                <div class="px-4 py-6 flex justify-center">
                    <span class="text-sm text-gray-500 text-center">© 2025 <a href="https://bookmycure.com/">BookMyCure™</a>. All Rights Reserved.
                    </span>
                </div>
            </div>
        </footer>
    )
}