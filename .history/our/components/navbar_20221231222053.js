import React from "react";
import Image from "next/image";
import logo from "../assets/logoOurCoffee.png";

const Navbar = () => {
  return (
    <nav className="p-5 shadow md:flex md:items-center md:justify-between">
      <div>
        <a href="#"></a>
        <Image src={logo} alt="logo" className="w-[50px] h-[56px] inline" /> Our
        Coffee
      </div>
      <ul>
        <li className="mx-4 my-6 md:my-0">
          <a href="#" className="text-xl hover:text-red-500 duration-500">
            Home
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
