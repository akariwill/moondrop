"use client"
import React from "react";
import { assets, BagIcon, BoxIcon, CartIcon, HomeIcon} from "@/assets/assets";
import Link from "next/link"
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import { useClerk, UserButton } from "@clerk/nextjs";

const Navbar = () => {

  const { isSeller, router, user } = useAppContext();
  const {openSignIn} = useClerk();

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-32 py-3 border-b border-gray-300 text-gray-700">
      <Image
        className="cursor-pointer w-28 md:w-32"
        onClick={() => router.push('/')}
        src={assets.logo}
        alt="logo"
      />
      <div className="flex items-center gap-4 lg:gap-8 max-md:hidden">
        <div className="relative group">
          <button className="hover:text-gray-900 transition px-2 py-1">Pro Audio</button>

          {/* Dropdown Menu */}
          <div className="absolute top-full left-0 group-hover:flex hidden bg-white shadow-xl rounded-xl py-6 px-8 z-50 w-max flex-col gap-4">
            
            {/* View All */}
            <Link
              href="/all-products"
              className="flex items-center justify-between text-sm text-orange-600 font-semibold hover:underline w-full"
            >
              View All Audio Devices →
            </Link>

            {/* Grid Item List */}
            <div className="grid grid-cols-2 gap-6">
              <Link href="/category/Headphones" className="flex items-start gap-3 hover:bg-gray-100 p-3 rounded-md transition">
                <div>
                  <p className="font-semibold">Headphones</p>
                  <p className="text-sm text-gray-500">Exquisite Timbre, Tremendous Uniqueness</p>
                </div>
              </Link>

              <Link href="/category/Earphone" className="flex items-start gap-3 hover:bg-gray-100 p-3 rounded-md transition">
                <div>
                  <p className="font-semibold">In-ear Monitors</p>
                  <p className="text-sm text-gray-500">Reference Timbre, Benchmark In-ears</p>
                </div>
              </Link>

              <Link href="/category/Tws" className="flex items-start gap-3 hover:bg-gray-100 p-3 rounded-md transition">
                <div>
                  <p className="font-semibold">True Wireless Stereo</p>
                  <p className="text-sm text-gray-500">Accurate Performance, Wireless Experience</p>
                </div>
              </Link>

            </div>
          </div>
        </div>

        {isSeller && <button onClick={() => router.push('/seller')} className="text-xs border px-4 py-1.5 rounded-full">Seller Dashboard</button>}

      </div>

      <ul className="hidden md:flex items-center gap-4 ">
        <Image className="w-4 h-4" src={assets.search_icon} alt="search icon" />
        { user 
        ? <>
        <UserButton>
          <UserButton.MenuItems>
            <UserButton.Action label="Cart" labelIcon={<CartIcon/>} onClick={()=> router.push('/cart')} />
          </UserButton.MenuItems>
          <UserButton.MenuItems>
            <UserButton.Action label="My Orders" labelIcon={<BagIcon/>} onClick={()=> router.push('/my-orders')} />
          </UserButton.MenuItems>
        </UserButton>
        </> 
        : <button onClick={openSignIn} className="flex items-center gap-2 hover:text-gray-900 transition">
          <Image src={assets.user_icon} alt="user icon" />
          Account
        </button>}
      </ul>

      <div className="flex items-center md:hidden gap-3">
        {isSeller && <button onClick={() => router.push('/seller')} className="text-xs border px-4 py-1.5 rounded-full">Seller Dashboard</button>}
        { user 
        ? <>
        <UserButton>
          <UserButton.MenuItems>
            <UserButton.Action label="Home" labelIcon={<HomeIcon/>} onClick={()=> router.push('/')} />
          </UserButton.MenuItems>
          <UserButton.MenuItems>
            <UserButton.Action label="Products" labelIcon={<BoxIcon/>} onClick={()=> router.push('/all-products')} />
          </UserButton.MenuItems>
          <UserButton.MenuItems>
            <UserButton.Action label="Cart" labelIcon={<CartIcon/>} onClick={()=> router.push('/cart')} />
          </UserButton.MenuItems>
          <UserButton.MenuItems>
            <UserButton.Action label="My Orders" labelIcon={<BagIcon/>} onClick={()=> router.push('/my-orders')} />
          </UserButton.MenuItems>
        </UserButton>
        </> 
        : <button onClick={openSignIn} className="flex items-center gap-2 hover:text-gray-900 transition">
          <Image src={assets.user_icon} alt="user icon" />
          Account
        </button>}
      </div>
    </nav>
  );
};

export default Navbar;