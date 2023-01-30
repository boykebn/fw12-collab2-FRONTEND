import Image from "next/image";
import { logout as logoutAction } from "../redux/reducers/auth";
import Link from "next/link";
import {useDispatch, useSelector} from "react-redux";
import user from "../assets/user.png";
import React, { useEffect, useState } from "react";
import http from "../helpers/http";
import Search from "feather-icons-react/build/IconComponents/Search";

const NavbarAdmin = () => {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logoutAction());
  };

  const [bio, setBio] = useState({});
  useEffect(() => {
    getBio().then((data) => {
      setBio(data?.results);
    });
  }, []);
  const token = useSelector((state) => state?.auth?.token)

  const getBio = async () => {
    try {
      const { data } = await http(token).get("/profile");
    return data;
    } catch(error) {
      console.log(error)
    }
  };

  return (
    <>
      <section>
        <div className="hidden md:flex items-center gap-3 lg:gap-40 px-3 lg:px-28 py-5">
          <div className="flex-1">
            <div className="flex items-center gap-3 w-fit cursor-pointer">
              <Image
                src={require("../images/logoOurCoffee.png")}
                alt="Logo"
                className="w-8 h-8"
              />
              <h1 className="font-bold text-xl">Our Coffee</h1>
            </div>
          </div>
          <div className="">
            <ul className="flex items-center justify-center gap-10">
              <Link href="/dashboard-admin">
                <li className="cursor-pointer hover:text-[#7D6E83]">Home</li>
              </Link>
              <Link href="/product-admin">
                <li className="cursor-pointer hover:text-[#7D6E83]">Product</li>
              </Link>
              <Link href="/manage-orders">
                <li className="cursor-pointer hover:text-[#7D6E83]">Orders</li>
              </Link>
              <Link href="/dashboard-admin">
                <li className="cursor-pointer hover:text-[#7D6E83]">
                  Dashboard
                </li>
              </Link>
            </ul>
          </div>
          <div className="flex gap-8 items-center">
            <Search className="w-4/4 cursor-pointer" />
            <Link href='/roomchat-admin'>
              <Image src={require("../images/chat.png")}
              alt="chatIcon"
              className="w-4/4 cursor-pointer"/>
            </Link>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="avatar">
                <div className="w-10 rounded-full">
                  {bio?.picture ? (
                    <Image src={bio?.picture} alt="profile"/>
                  ) : (
                    <Image src={user} alt="profile"/>
                  )}
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a onClick={logout}>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NavbarAdmin;
