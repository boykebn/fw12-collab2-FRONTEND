import React from "react";
import Image from "next/image";
import logo from "../assets/logoOurCoffee.png";
import Link from "next/link";
import search from "../assets/search.png";
export default function Home() {
  return (
    <div className="font-rubik">
      <div className="px-[150px] py-[45px] flex items-center">
        <div className="flex flex-1 items-center">
          <Image src={logo} alt="logo" className="w-[30px] h-[33px] mr-[15px]" />
          <span className="text-[#0B132A] text-[20px] font-bold leading-[23px]">Our Coffee</span>
        </div>
        <div className=" text-[#4F5665] text-[16px] mr-[153px]">
          <span className="font-bold text-[#6A4029] mr-[40px]">Home</span>
          <span className="mr-[40px]">Product</span>
          <span className="mr-[40px]">Your Char</span>
          <span>History</span>
        </div>
        <div className="text-[16px] font-[600] leading-[19px]">
          <Link href="#" className="mr-[40px] text-[#0B132A]">
            Login
          </Link>
          <Link href="#" className="text-white border-1 bg-[#7d6e83] py-[13px] px-[45px] rounded-[50px]">
            Sign Up
          </Link>
        </div>
      </div>
      <div className="bg-[url('../assets/background-home.png')] h-[645px] ">
        <div className="px-[150px] flex">
          <div className="pt-[78px]">
            <p className="text-white text-[50px] font-bold leading-[70px] w-[570px] mb-[20px]">Start Your Day with Coffee and Good Meals</p>
            <p className="text-white text-[20px] font-bold leading-[30px] w-[555px] mb-[32px]">We provide high quality beans, good taste, and healthy meals made by love just for you. Start your day with us for a bigger smile!</p>
            <Link href="#" className="text-white text-[16px] font-bold border-1 px-[78px] py-[18px] bg-[#7d6e83] rounded-[10px]">
              Get Started
            </Link>
          </div>
          <div className="pt-[20px]">
            <Image src={search} alt="search" className="absolute top-[165px] right-[600px]" />
            <input placeholder="Search" className="focus:outline-none bg-[#f8ede3] py-[21px] pl-[35px] font-[900]" />
          </div>
        </div>
      </div>
    </div>
  );
}
