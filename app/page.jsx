'use client'
import React from "react";
import HeaderSlider from "@/components/HeaderSlider";
import HomeProducts from "@/components/HomeProducts";
import Banner from "@/components/Banner";
import NewsLetter from "@/components/NewsLetter";
import FeaturedProduct from "@/components/FeaturedProduct";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MoondropCosmoPage from "@/components/moodropCosmo";
import MoondropCrinaclePage from "@/components/moondropCrinacle";
import ProductShowcaseSlider from "@/components/ProductShowcase";
import RobinShowcase from "@/components/RobinShowcase";

const Home = () => {
  return (
    <>
      <Navbar/>
      <div className="px-6 md:px-16 lg:px-32">
        <HeaderSlider />
        <MoondropCosmoPage />
        <MoondropCrinaclePage />
        <ProductShowcaseSlider />
        <HomeProducts />
        <RobinShowcase />
        {/* <FeaturedProduct /> */}
        {/* <Banner /> */}
        {/* <NewsLetter /> */}
      </div>
      <Footer />
    </>
  );
};

export default Home;
