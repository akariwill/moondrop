'use client';
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/context/AppContext";
import ProductCard from "@/components/ProductCard";
import { assets } from "@/assets/assets";

const RobinShowcase = () => {
  const router = useRouter();
  const { products } = useAppContext();

  const selectedProductIds = [
    "685dcf69404eeee693a69088",
    "685dcfa1404eeee693a6908a",
    "685dcfbb404eeee693a6908c",
    "685dcfd7404eeee693a6908e",
  ];

  const selectedProducts = products.filter(product =>
    selectedProductIds.includes(product._id)
  );

  return (
    <div className="py-10">
      <div className="max-w-7xl flex flex-col md:flex-row items-center bg-white rounded-xl shadow-md overflow-hidden">
        <div className="w-full md:w-2/3 h-[300px] md:h-[500px] relative">
          <Image
            src={assets.robin_collabs}
            alt="Moondrop Robin"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="w-full md:w-1/3 px-6 md:px-12 py-10 bg-white text-center md:text-l beft">
          <h1 className="text-4xl font-bold mb-4 tracking-tight">ROBIN</h1>
          <p className="text-gray-700 text-lg mb-6">MOONDROP x {"<Honkai: Star Rail>"}</p>
          <button
            onClick={() => router.push("/product/685c32149d20f7c73c509afe")}
            className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
          >
            Learn More
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center pt-14">
        {/* <h2 className="text-2xl font-semibold mb-4">Related Products</h2> */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 pb-14 w-full">
          {selectedProducts.map((product, idx) => (
            <ProductCard key={idx} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RobinShowcase;
