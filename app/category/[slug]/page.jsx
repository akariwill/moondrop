'use client'
import ProductCard from "@/components/ProductCard";
import { useAppContext } from "@/context/AppContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useParams } from "next/navigation";
import ProductShowcaseEarphone from "@/components/ProductShowcaseEarphone";
import ProductShowcaseHeadphones from "@/components/ProjectShowcaseHeadphones";
import ProductShowcaseTws from "@/components/ProductShowcaseTws";

const CategoryPage = () => {
  const { products } = useAppContext();
  const { slug } = useParams();

  const filtered = products.filter(product =>
    product.category.toLowerCase() === slug.toLowerCase()
  );

  return (
    <>
      <Navbar />
      <div className="flex flex-col px-6 md:px-16 lg:px-32">

      {slug === "Earphone" && <ProductShowcaseEarphone />}
      {slug === "Headphones" && <ProductShowcaseHeadphones />}
      {slug === "Tws" && <ProductShowcaseTws />}
      </div>

        <div className="flex flex-col items-start px-6 md:px-16 lg:px-32">
          <p className="text-2xl font-medium pt-12 capitalize">{slug}</p>
          <div className="w-16 h-0.5 bg-orange-600 rounded-full mb-6" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-14 w-full">
            {filtered.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>

      <Footer />
    </>
  );
};

export default CategoryPage;
