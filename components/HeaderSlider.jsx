import React, { useState, useEffect } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets"; // pastikan file asset tersedia

const HeaderSlider = () => {
  const sliderData = [
    {
      id: 1,
      title: "Built-in NPU Hardware-level AI Noise Canceling High-quality Ear-clip Earbuds",
      offer: "Moondrop PILL",
      buttonText2: "Learn more",
      imgSrc: assets.moondrop_pill,
    },
    {
      id: 2,
      title: "Dear Trailblazers, get ready to immerse yourself in dynamic melodies with Robin!",
      offer: "Moondrop ROBIN",
      buttonText2: "Learn More",
      imgSrc: assets.moondrop_robin,
    },
    {
      id: 3,
      title: "MTM Acoustic Structure, Double 4-inch Kevlar braided basin mid bass, Al-Mg alloy dome tweeter",
      offer: "Moondrop M4P-MTM",
      buttonText2: "Learn More",
      imgSrc: assets.moondrop_m4p,
    },
    {
      id: 4,
      title: "All-aluminum Alloy CNC Finishing, Hi- End Technology and Texture, Classic Portable Clamshell Design",
      offer: "Moondrop DISCDREAM2",
      buttonText2: "Learn More",
      imgSrc: assets.moondrop_discdream2,
    },
    {
      id: 5,
      title: "Fully Balanced Hi-fi Audio Player, 5G Smartphone for Daily Use, “Take beautiful sounds with you.”",
      offer: "Moondrop MIAD01",
      buttonText2: "Learn More",
      imgSrc: assets.moondrop_miad01,
    },
    {
      id: 6,
      title: "925 silver cavity equipped with 24K gold hand-soldered to panel.",
      offer: "Moondrop SOLISII",
      buttonText2: "Learn More",
      imgSrc: assets.moondrop_solis2,
    },
    {
      id: 7,
      title: "100mm Nanoscale Ultra-thin Planar Flagship Headphone",
      offer: "Moondrop COSMO",
      buttonText2: "Learn More",
      imgSrc: assets.moondrop_cosmo,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [sliderData.length]);

  return (
    <div className="relative w-full h-[90vh] overflow-hidden rounded-xl py-6">
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {sliderData.map((slide, index) => (
          <div
            key={slide.id}
            className="flex flex-col md:flex-row w-full h-full min-w-full"
          >
            {/* Left: Gambar */}
            <div className="relative w-full h-[90vh] overflow-hidden">
              <Image
                src={slide.imgSrc}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>

            {/* Right: Konten */}
            <div className="flex flex-col justify-center md:w-1/2 px-6 md:px-16 py-10 bg-white">
              <h2 className="text-3xl md:text-5xl font-bold text-black max-w-xl">{slide.offer}</h2>
              <h1 className="text-lg text-gray-600 mb-2">
                {slide.title}
              </h1>
              <div className="flex gap-4 mt-6">
                <button className="border border-gray-400 px-6 py-2 rounded-full hover:bg-gray-100 transition">
                  {slide.buttonText2}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dot Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {sliderData.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 w-3 rounded-full cursor-pointer ${
              currentSlide === index ? "bg-orange-600" : "bg-gray-400/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeaderSlider;
