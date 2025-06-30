// app/moondrop-cosmo/page.jsx
"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { assets } from "@/assets/assets";


const MoondropCrinaclePage = () => {
  const router = useRouter();

  return (
    <div className="py-6">
      <div className="max-w-7xl flex flex-col md:flex-row items-center bg-white rounded-xl shadow-md overflow-hidden">
        
        {/* Left: Image */}
        <div className="w-full md:w-1/2 h-[300px] md:h-[500px] relative">
          <Image
            src={assets.moondrop_crinacle}
            alt="Moondrop Crinacle"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right: Text */}
        <div className="w-full md:w-1/2 px-6 md:px-12 py-10">
          <h1 className="text-3xl md:text-5xl font-bold text-black mb-4">
            MOONDROP X
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-6">
            CRINACLE DUSK
          </h2>
          <p className="text-gray-700 text-base md:text-lg list-disc list-inside space-y-2 mb-8">
            Crinacle.com is a fast-growing, scientific HiFi review platform that integrates product tests, professional news, and an interactive community, with a focus on providing professional content and a great user experience.
          </p>
          <button
            onClick={() => router.push("/all-products")}
            className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-900 transition"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoondropCrinaclePage;
