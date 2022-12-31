import React from "react";
import Image from "next/image";
import logo from "../assets/logoOurCoffee.png";

const Navbar = () => {
  return (
    <nav className="p-5 shadow md:flex md:items-center">
      <div>
        <a href="#"></a>
        <Image src={logo} alt="logo" className="w-[50px] h-[56px] inline" /> Our
        Coffee
      </div>
    </nav>
  );
};

export default Navbar;
