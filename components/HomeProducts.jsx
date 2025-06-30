import React from "react";
import ProductCard from "./ProductCard";
import { useAppContext } from "@/context/AppContext";

const HomeProducts = () => {
  const { products, router } = useAppContext();

  const selectedProductIds = [
    "685c31a19d20f7c73c509af6",
    "685c31cd9d20f7c73c509afa",
    "685c31f69d20f7c73c509afc",
    "685c32149d20f7c73c509afe",
  ];

  const latestProducts = products.filter(product =>
    selectedProductIds.includes(product._id)
  );

  return (
    <div className="flex flex-col items-center pt-14">
      {/* <p className="text-2xl font-medium text-left w-full">Latest products</p> */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 pb-14 w-full">
        {latestProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>

      <button
        onClick={() => router.push('/all-products')}
        className="px-12 py-2.5 border rounded text-gray-500/70 hover:bg-slate-50/90 transition"
      >
        See more
      </button>
    </div>
  );
};

export default HomeProducts;
