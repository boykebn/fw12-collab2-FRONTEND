import React from "react";
import Image from "next/image";
import logo from "../assets/logoOurCoffee.png";
export default function Home() {
  return (
    <div className="font-rubik">
      <div className="px-[150px] py-[45px]">
        <div>
          <Image src={logo} alt="logo" className="w-[30px] h-[33px]" />
          <span className="text-[#0B132A] text-[20px] font-bold leading-[23px]">Our Coffee</span>
        </div>
      </div>
    </div>
  );
}
