"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { assets } from "@/assets/assets";

const productHero = [
  {
    id: 1,
    name: "COSMO",
    subtitle: "A Moondrop TWS Flagship",
    image: assets.moondrop_cosmo,
  },
];

const productSlides = [
  {
    id: 1,
    name: "MOONDROP COSMO Nanoscale Ultra-thin Planar Flagship Headphone",
    price: "$999.99",
    images: [assets.moondrop_cosmo, assets.moondrop_cosmo_showcase2, assets.moondrop_cosmo_showcase3],
  },
];

const ProductShowcaseHeadphones = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentHero, setCurrentHero] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % productSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentHero((prev) => (prev + 1) % productHero.length);
      }, 5000);
      return () => clearInterval(interval);
    }, []);

  const slide = productSlides[currentSlide];
  const hero = productHero[currentHero];

  return (
    <section className="bg-white py-10">
      <div className="text-center py-10 bg-[#fafafa]">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
          Exquisite Timbre, Tremendous Uniqueness
        </h2>
        <p className="mt-3 text-gray-600 text-base md:text-lg italic">
          [ Explore the integration of art and reason ]
        </p>
      </div>

      {/* Hero Section */}
      <div className="relative w-full h-[90vh]">
        <Image
          src={hero.image}
          alt={hero.name}
          fill
          priority
          className="object-cover rounded-xl"
        /> 
        <div className="absolute inset-0 z-10 bg-opacity-30" />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
            {hero.name}
          </h1>
          <button
            onClick={() => router.push("/product/685dcfa1404eeee693a6908a")}
            className="mt-6 px-6 py-2 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition"
          >
            Learn More
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 py-12">
          <div className="relative w-full md:w-1/2 h-[300px] md:h-[400px]">
            <Image
              src={assets.moondrop_para}
              alt="MOONDROP PARA Planar Headphone"
              fill
              className="object-contain"
            />
          </div>

          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              MOONDROP PARA Planar Headphone
            </h3>
            <p className="mt-4 text-gray-600">
              100mm Planar, High-resolution, large Soundstage, Easy to Drive, Good extension, Smooth timbres
            </p>
            <p className="mt-4 text-lg font-semibold text-gray-800">
              $349.99
            </p>
            <button
              onClick={() => router.push("/product/685dcfa1404eeee693a6908a")}
              className="mt-6 px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="relative w-full h-[90vh] overflow-hidden rounded-xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold">Headphones</h2>
          <button
            onClick={() => router.push("/all-products")}
            className="text-gray-700 hover:underline text-sm"
          >
            View More &gt;
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-md overflow-hidden relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:h-[400px]">
            <div className="relative col-span-2 h-[300px] md:h-full">
              <Image
                src={slide.images[0]}
                alt="Main Product"
                fill
                className="object-cover rounded-l-2xl"
              />
            </div>

            <div className="flex flex-col gap-2 h-full">
              {slide.images.slice(1).map((img, i) => (
                <div key={i} className="relative h-1/2 w-full">
                  <Image
                    src={img}
                    alt={`Preview ${i}`}
                    fill
                    className="object-cover rounded-r-2xl"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="px-6 py-4">
            <h3 className="text-lg font-semibold text-black">{slide.name}</h3>
            <p className="text-sm text-gray-700 mt-1">{slide.price}</p>
          </div>

          <div className="flex justify-center gap-2 pb-4">
            {productSlides.map((_, i) => (
              <div
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-3 h-3 rounded-full cursor-pointer transition ${
                  currentSlide === i ? "bg-black" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcaseHeadphones;
