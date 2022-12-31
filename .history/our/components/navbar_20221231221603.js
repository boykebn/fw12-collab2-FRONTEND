import React from "react";
import Image from "next/image";
import logo from "../assets/logoOurCoffee.png";

const Navbar = () => {
  return (
    <nav>
      <div>
        <a href="#"></a>
        <Image src={logo} alt="logo" />
      </div>
    </nav>
  );
};

export default Navbar;
