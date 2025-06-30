"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { assets } from "@/assets/assets";

const productSlides = [
  {
    id: 1,
    name: "MOCA",
    subtitle: "A Moondrop TWS Flagship",
    image: assets.moondrop_moca_showcase,
  },
];

const productSections  = [
  {
    id: 1,
    name: "MOONDROP ULTRASONIC True Wireless Stereo",
    description:
      "13mm Sapphire Diaphragm Full-Frequency Dynamic Driver, Equidistant Transmission Two-Way Crossover Acoustic Structure.",
    price: "$89.99",
    image: assets.moondrop_ultrasonic_showcase,
  },
  {
    id: 2,
    name: "MOONDROP BLOCK True Wireless Stereo (Earbuds)",
    description:
      "Adopting the acoustic structure of flathead earbuds, and using a SOC chip for built-in DSP optimization, the Block delivers a more delicate.",
    price: "$24.99",
    image: assets.moondrop_block_showcase,
  },
  {
    id: 3,
    name: "MOONDROP GOLDEN AGES True Wireless Stereo",
    description:
      "13mm Super-Linear Full-Frequency, Planar Magnetic Driver, Multi-Protocol Lossless Transmission, Low Latency, ANC TWS.",
    price: "$79.99",
    image: assets.moondrop_golden_ages_showcase,
  },
];

const ProductShowcaseTws = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % productSlides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const slide = productSlides[currentSlide];

  return (
    <section className="w-full overflow-hidden rounded-xl">
      <div className="text-center py-10 bg-[#fafafa]">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
          Accurate Performance, Wireless Experience
        </h2>
        <p className="mt-3 text-gray-600 text-base md:text-lg italic">
          [ Explore the integration of art and reason ]
        </p>
      </div>

      {/* Hero Section */}
      <div className="relative w-full h-[90vh]">
        <Image
          src={slide.image}
          alt={slide.name}
          fill
          priority
          className="object-cover rounded-xl"
        /> 
        <div className="absolute inset-0 z-10 bg-opacity-30" />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
            {slide.name}
          </h1>
          <button
            onClick={() => router.push("/product/685dcfa1404eeee693a6908a")}
            className="mt-6 px-6 py-2 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition"
          >
            Learn More
          </button>
        </div>
      </div>

      {productSections.map((product, idx) => (
        <div
          key={product.id}
          className={`flex flex-col md:flex-row ${
            idx % 2 === 1 ? "md:flex-row-reverse" : ""
          } items-center justify-center gap-6 py-12 px-6 md:px-20 bg-white`}
        >
          <div className="relative w-full md:w-1/2 h-[300px] md:h-[400px]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain"
            />
          </div>

          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              {product.name}
            </h3>
            <p className="mt-4 text-gray-600">{product.description}</p>
            <p className="mt-4 text-lg font-semibold text-gray-800">
              {product.price}
            </p>
            <button
              onClick={() => router.push("/product/")}
              className="mt-6 px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
            >
              Learn More
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProductShowcaseTws;
