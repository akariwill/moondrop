// app/moondrop-cosmo/page.jsx
"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { assets } from "@/assets/assets";


const MoondropCosmoPage = () => {
  const router = useRouter();

  return (
    <div className="py-6">
      <div className="max-w-7xl flex flex-col md:flex-row items-center bg-white rounded-xl shadow-md overflow-hidden">
        
        {/* Left: Text */}
        <div className="w-full md:w-1/2 px-6 md:px-12 py-10">
          <h1 className="text-3xl md:text-5xl font-bold text-black mb-4">
            MOONDROP COSMO
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-6">
            Flagship Headphone
          </h2>
          <ul className="text-gray-700 text-base md:text-lg list-disc list-inside space-y-2 mb-8">
            <li>High Sensitivity and Low Impedance for Easy Driving</li>
            <li>100mm Oversized FDT Diaphragm</li>
            <li>N52 Magnet Array Optimized by FEA</li>
          </ul>
          <button
            onClick={() => router.push("/all-products")}
            className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-900 transition"
          >
            Learn More
          </button>
        </div>

        {/* Right: Image */}
        <div className="w-full md:w-1/2 h-[300px] md:h-[500px] relative">
          <Image
            src={assets.moondrop_cosmo}
            alt="Moondrop Cosmo"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default MoondropCosmoPage;
