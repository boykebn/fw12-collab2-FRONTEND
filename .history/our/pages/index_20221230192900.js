import React from "react";
import Image from "next/image";
import logo from "../assets/logoOurCoffee.png";
export default function Home() {
  return (
    <div className="font-rubik">
      <div>
        <div>
          <Image src={logo} alt="logo" className="w-[30px] h-[33px]" />
        </div>
      </div>
    </div>
  );
}
