import React from "react";
import Image from "next/image";
import logo from "../assets/logoOurCoffee.png";
import BiMenu from "react-icons/bi";

const Navbar = () => {
  return (
    <nav className="p-5 shadow md:flex md:items-center md:justify-between">
      <div>
        <a href="#">
          <Image src={logo} alt="logo" className="w-[50px] h-[56px] inline" />{" "}
          Our
        </a>
        <span className="text-3xl cursor-pointer md:hidden mx-2 block">
          <BiMenu name="menu" className />
        </span>
        Coffee
      </div>
      <ul className="md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-0 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
        <li className="mx-4 my-6 md:my-0">
          <a href="#" className="text-xl hover:text-red-500 duration-500">
            Home
          </a>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <a href="#" className="text-xl hover:text-red-500 duration-500">
            About
          </a>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <a href="#" className="text-xl hover:text-red-500 duration-500">
            Service
          </a>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <a href="#" className="text-xl hover:text-red-500 duration-500">
            Blog
          </a>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <a href="#" className="text-xl hover:text-red-500 duration-500">
            Contact
          </a>
        </li>
        <button className="px-6 py-2 mx-4 bg-red-500 text-white rounded hover:bg-red-400">
          Get Started
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
