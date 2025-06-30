"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { assets } from "@/assets/assets";

const productSlides = [
  {
    id: 1,
    name: "MOONDROP METEOR 1DD + 2BA + 4Planar In-Ear Monitor",
    price: "$499.99",
    images: [assets.moondrop_meteor_showcase1, assets.moondrop_meteor_showcase2, assets.moondrop_meteor_showcase3],
  },
  {
    id: 2,
    name: "MOONDROP EDGE Portable Wireless ANC Headphone",
    price: "$79.99",
    images: [assets.moondrop_edge_showcase1, assets.moondrop_edge_showcase2, assets.moondrop_edge_showcase3],
  },
  {
    id: 3,
    name: "MOONDROP x CRINACLE DUSK 2DD+2BA+2Planar In-ear Monitor",
    price: "$359.99",
    images: [assets.moondrop_dusk_showcase1, assets.moondrop_dusk_showcase2, assets.moondrop_dusk_showcase3],
  },
];

const ProductShowcaseSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % productSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const slide = productSlides[currentSlide];

  return (
    <section className="bg-white py-10">
      <div className="relative w-full h-[90vh] overflow-hidden rounded-xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold">Products</h2>
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

export default ProductShowcaseSlider;
