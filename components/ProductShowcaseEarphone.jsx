"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { assets } from "@/assets/assets";
import { useAppContext } from "@/context/AppContext";
import ProductCard from "@/components/ProductCard";

const productHero = [
  {
    id: 1,
    name: "BLESSING 3",
    image: assets.moondrop_blessing3_showcase,
  },
];

const productSlides = [
  {
    id: 1,
    name: "MOONDROP METEOR 1DD + 2BA + 4Planar In-Ear Monitor",
    price: "$499.99",
    images: [
      assets.moondrop_meteor_showcase1,
      assets.moondrop_meteor_showcase2,
      assets.moondrop_meteor_showcase3,
    ],
  },
  {
    id: 2,
    name: "MOONDROP x CRINACLE DUSK 2DD+2BA+2Planar In-ear Monitor",
    price: "$359.99",
    images: [
      assets.moondrop_dusk_showcase1,
      assets.moondrop_dusk_showcase2,
      assets.moondrop_dusk_showcase3,
    ],
  },
];

const selectedProductIds = [
  "685c31a19d20f7c73c509af6",
  "685c31cd9d20f7c73c509afa",
  "685c31f69d20f7c73c509afc",
  "685c32149d20f7c73c509afe",
  "685d5143da86767afa315d1f",
  "685d5179da86767afa315d21",
  "685d519dda86767afa315d23",
  "685d51c0da86767afa315d25",
];

const ProductShowcaseEarphone = () => {
  const router = useRouter();
  const { products } = useAppContext();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentHero, setCurrentHero] = useState(0);

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

  if (!products || products.length === 0) {
    return (
      <section className="py-20 text-center text-gray-500">
        Loading products...
      </section>
    );
  }

  const selectedProducts = products.filter((product) =>
    selectedProductIds.includes(String(product._id))
  );

  return (
    <section className="bg-white py-10">
      <div className="text-center py-10 bg-[#fafafa]">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
          Accurate Performance, Wireless Experience
        </h2>
        <p className="mt-3 text-gray-600 text-base md:text-lg italic">
          [ Explore the integration of art and reason ]
        </p>
      </div>

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

      <div className="flex flex-col items-center pt-14">
        <h2 className="text-2xl md:text-3xl font-semibold">Latest IEMs</h2>
        {selectedProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 pb-14 w-full">
            {selectedProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No related products found.</p>
        )}
      </div>
  
      <div className="relative w-full h-[90vh] overflow-hidden rounded-xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold">In-Ear monitors</h2>
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

export default ProductShowcaseEarphone;
