import React from "react";
import Image from "next/image";
import logo from "../assets/logoOurCoffee.png";
import Link from "next/link";
import search from "../assets/search.png";
import profileIcon from "../assets/profile-icon.png";
import { FaUser } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import layer2 from "../assets/img-layer2.png";
import ceklis from "../assets/ceklis.png";
import food1 from "../assets/food1.png";
import food2 from "../assets/food2.png";
import food3 from "../assets/food3.png";
import ceklis2 from "../assets/ceklis2.png";

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
          <div className="pt-[78px] mr-auto">
            <p className="text-white text-[50px] font-bold leading-[70px] w-[570px] mb-[20px]">Start Your Day with Coffee and Good Meals</p>
            <p className="text-white text-[20px] font-bold leading-[30px] w-[555px] mb-[32px]">We provide high quality beans, good taste, and healthy meals made by love just for you. Start your day with us for a bigger smile!</p>
            <Link href="#" className="text-white text-[16px] font-bold border-1 px-[78px] py-[18px] bg-[#7d6e83] rounded-[10px]">
              Get Started
            </Link>
          </div>
          <div className="pt-[20px]">
            <Image src={search} alt="search" className="absolute top-[165px] right-[420px]" />
            <input placeholder="Search" className="focus:outline-none bg-[#f8ede3] py-[17px] pl-[75px] font-[900] rounded-[30px]" />
          </div>
        </div>
      </div>
      <div className="pl-[90px] pr-[59px] py-[53px] border-1 bg-white absolute left-[150px] top-[660px] rounded-[10px] flex items-center shadow-lg mb-[103px]">
        <div className="flex">
          <div className="mr-[36px]">
            <FaUser className="w-[16px] h-[18px] absolute left-[110px] top-[100px]" />
            <div className="border-1 bg-[#7d6e83] w-[55px] h-[55px] rounded-[50%] \"></div>
          </div>
          <div className="mr-[134px]">
            <p className="text-[#0B132A] text-[25px] font-bold leading-[30px] mb-[5px]">90+</p>
            <p className="text-[#4F5665] text-[20px] leading-[30px]">Staff</p>
          </div>
        </div>
        <hr className="bg-[#EEEFF2] w-[2px] h-[125px] mr-[113px]" />
        <div className="flex">
          <div className="mr-[36px]">
            <MdLocationOn className="w-[22px] h-[26px] absolute left-[489px] top-[98px]" />
            <div className="border-1 bg-[#7d6e83] w-[55px] h-[55px] rounded-[50%] \"></div>
          </div>
          <div className="mr-[134px]">
            <p className="text-[#0B132A] text-[25px] font-bold leading-[30px] mb-[5px]">90+</p>
            <p className="text-[#4F5665] text-[20px] leading-[30px]">Staff</p>
          </div>
        </div>
        <hr className="bg-[#EEEFF2] w-[2px] h-[125px] mr-[113px]" />
        <div className="flex">
          <div className="mr-[36px]">
            <AiOutlineHeart className="w-[24px] h-[28px] absolute left-[870px] top-[97px]" />
            <div className="border-1 bg-[#7d6e83] w-[55px] h-[55px] rounded-[50%] \"></div>
          </div>
          <div className="">
            <p className="text-[#0B132A] text-[25px] font-bold leading-[30px] mb-[5px]">90+</p>
            <p className="text-[#4F5665] text-[20px] leading-[30px]">Staff</p>
          </div>
        </div>
      </div>
      <div className="pt-[193px] px-[150px] flex mb-[82px]">
        <div className="mr-[139px]">
          <Image src={layer2} alt="img-layer-2" />
        </div>
        <div>
          <div className="mb-[20px]">
            <p className="text-[#0B132A] text-[35px] font-bold leading-[50px] w-[432px] mb-[19px]">We Provide Good Coffee and Healthy Meals</p>
            <p className="text-[#4F5665] text-[16px] leading-[30px] w-[427px]">You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
          </div>
          <div className="flex">
            <div className="mr-[13px]">
              <Image src={ceklis} alt="ceklis" className="mb-[25px]" />
              <Image src={ceklis} alt="ceklis" className="mb-[25px]" />
              <Image src={ceklis} alt="ceklis" className="mb-[25px]" />
              <Image src={ceklis} alt="ceklis" />
            </div>
            <div className="text-[#4F5665] text-[14px]">
              <p className="mb-[25px]">High quality beans</p>
              <p className="mb-[25px]">Healthy meals, you can request the ingredients</p>
              <p className="mb-[25px]">Chat with our staff to get better experience for ordering</p>
              <p>Free member card with a minimum purchase of IDR 200.000.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f8ede3]">
        <div className="pt-[80px] text-center mb-[90px]">
          <p className="text-[#0B132A] text-[35px] leading-[50px] font-bold mb-[19px]">Here is People’s Favorite</p>
          <p className="text-[#4F5665] text-[16px] leading-[30px] ">Let’s choose and have a bit taste of poeple’s favorite. It might be yours too!</p>
        </div>
        <div className="px-[175px] flex">
          <div className="border-2 bg-white rounded-[10px] pt-[62px] pl-[82px] pr-[79px] pb-[50px] mb-[30px]">
            <div className="mb-[30px]">
              <Image src={food1} alt="food1" className="rounded-[50%] shadow-xl mb-[53px]" />
              <p className="text-[18px] leading-[30px] font-bold">Hazelnut Latte</p>
            </div>
            <div className="flex items-center">
              <div className="">
                <div className="flex items-center">
                  <Image src={ceklis2} alt="ceklis2" className="w-[14px] h-[9px] mb-[30px] mr-[25px]" />
                  <p className="mb-[25px]">HazelnutSyrup</p>
                </div>
                <div className="flex items-center">
                  <Image src={ceklis2} alt="ceklis2" className="w-[14px] h-[9px] mb-[30px] mr-[25px]" />
                  <p className="pb-[17px]">Wanilla Whipped Cream</p>
                </div>
                <div className="flex items-center">
                  <Image src={ceklis2} alt="ceklis2" className="w-[14px] h-[9px] mb-[30px] mr-[25px]" />
                  <p className="mb-[1px]">Ice / Hot</p>
                </div>
                <div className="flex items-center">
                  <Image src={ceklis2} alt="ceklis2" className="w-[14px] h-[9px] mb-[30px] mr-[25px]" />
                  <p>Sliced Banana on Top</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
