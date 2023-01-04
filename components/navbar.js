import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import http from "../helpers/http";
import { useSelector } from "react-redux";
import user from "../assets/user.png"

const Navbar = () => {
  const token = useSelector((state) => state?.auth?.token);
  const [picture, setpicture] = useState(false);
  const [bio, setBio] = useState({});
  useEffect(() => {
    getBio().then((data) => {
      setBio(data?.results);
    });
  }, []);

  const getBio = async () => {
    const { data } = await http(token).get("/profile");
    return data;
  };
  return (
    <div className="navbar bg-base-100 pt-[30px] pb-[30px]">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/product">Product</Link>
            </li>
            <li>
              <Link href="/payment-delivery-cust">Your Cart</Link>
            </li>
            <li>
              <Link href="/history-cust">History</Link>
            </li>
          </ul>
        </div>
        {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
        <Link href="/product" className="flex ml-[5%] gap-2 items-center">
          <Image
            src={require("../images/logoOurCoffee.png")}
            width="30"
            height="33"
            alt="desc"
          ></Image>
          <div className="font-bold">Our Coffee</div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/product">Product</Link>
          </li>
          <li>
            <Link href="/payment-delivery-cust">Your Cart</Link>
          </li>
          <li>
            <Link href="/history-cust">History</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end px-8">
        <div className="pr-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <Link href="/profile">
          <div className="w-10 rounded-full">
            {bio?.picture ? (
              <Image
                src={bio?.picture}
                width="82"
                height="90"
                alt="picture"
                className="rounded-full w-[20px] h-[30px]"
              />
            ) : (
              <Image
                src={user}
                width="82"
                height="90"
                alt="picture"
                className="rounded-full w-[20px] h-[30px]"
              />
            )}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
