import Image from "next/image";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import http from "../helper/http";

const Profile = () => {
  return (
    <div className="max-w-full max-h-full">
      <nav>
        <div className="navbar bg-base-100 py-10">
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
                  <a>Home</a>
                </li>
                <li tabIndex={0}>
                  <a className="justify-between">
                    Product
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                    </svg>
                  </a>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Your Cart</a>
                </li>
                <li>
                  <a>History</a>
                </li>
              </ul>
            </div>
            <div className="pl-32 flex items-center">
              <Image
                src={require("../images/logoOurCoffee.png")}
                width="40"
                height="40"
                alt="hazelnut"
                className="rounded-lg"
              />
              <a className="normal-case text-2xl font-bold">Our Coffe</a>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a>Home</a>
              </li>
              <li tabIndex={0}>
                <a>
                  Product
                  {/* <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg> */}
                </a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Your Cart</a>
              </li>
              <li>
                <a>History</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end gap-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-[30px] h-[30px]"
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
            <Image
              src={require("../images/chat-1.png")}
              width="30"
              height="33"
              alt="chat"
            ></Image>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="avatar pr-32">
                <div className="w-10 rounded-full">
                  <img src="https://placeimg.com/80/80/people" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
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
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <div className="bg-profile_bg bg-no-repeat bg-cover pb-[100px]">
        <div className="pl-32 pt-20 text-white text-2xl font-bold">
          <p>User Profile</p>
        </div>

        <div className="pl-32 pt-20 flex gap-5">
          <div className="w-[310px] h-[358px] rounded-lg bg-white px-5 py-14">
            <div className="flex justify-center items-end">
              <Image
                src={require("../images/user.png")}
                width="82"
                height="90"
                alt="tomato"
                className="rounded-full"
              />
              <Image
                src={require("../images/ellips.png")}
                alt="ellips-edit"
                className="rounded-full w-[30px] h-[30px]"
              />
            </div>

            <div className="flex flex-col justify-center items-center">
              <p className="text-xl font-bold pb-2 pt-4">Zulaikha</p>
              <p>zulaikha17@gmail.com</p>
              <p className="text-[#4F5665] text-lg pt-10">
                Has been ordered 15 products
              </p>
            </div>
            {/* <div className='border w-[310px] h-2 rounded-lg '></div> */}
          </div>

          <div className="w-[802px] h-[358px] rounded-lg bg-white">a</div>
        </div>

        <div className="pl-32 pt-20 flex gap-10">
          <div className="w-[744px] h-[418px] bg-white rounded-lg">b</div>

          <div>
            <div className="w-[330px] text-center">
              <p className="text-white font-semibold text-2xl">
                Do you want to save the change?
              </p>
            </div>
            <div className="pt-5">
              <button className="btn btn-wide">Save Change</button>
            </div>
            <div className="pt-5">
              <button className="btn btn-wide">Cancel</button>
            </div>
            <div className="pt-5">
              <button className="btn btn-wide">Edit Password</button>
            </div>
            <div className="pt-5">
              <button className="btn btn-wide">Log Out</button>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer p-10 bg-base-200 text-base-content">
        <div className="pl-32 pt-[100px]">
          <div className="flex items-center gap-2">
            <Image
              src={require("../images/logoOurCoffee.png")}
              width="40"
              height="40"
              alt="hazelnut"
              className="rounded-lg"
            />
            <p className="text-2xl font-bold">Our Coffe</p>
          </div>
          <div className="w-[360px] text-lg font-semibold pt-5">
            <p>
              Coffee Shop is a store that sells some good meals, and especially
              coffee. We provide{" "}
            </p>
            <p>high quality beans</p>
          </div>
          <div className="flex gap-5 pt-5">
            <Image
              src={require("../images/fb.png")}
              width="40"
              height="40"
              alt="hazelnut"
              className="rounded-lg"
            />
            <Image
              src={require("../images/twt.png")}
              width="40"
              height="40"
              alt="hazelnut"
              className="rounded-lg"
            />
            <Image
              src={require("../images/instagram.png")}
              width="40"
              height="40"
              alt="hazelnut"
              className="rounded-lg"
            />
          </div>
          <div className="text-[#AFB5C0] text-xl pt-5">
            <p>©2022OurCoffe</p>
          </div>
        </div>

        <div className="pt-[100px] pl-32">
          <span className="footer-title">Product</span>
          <a className="link link-hover">Download </a>
          <a className="link link-hover">Pricing</a>
          <a className="link link-hover">Locations</a>
          <a className="link link-hover">Countries</a>
          <a className="link link-hover">Blog</a>
        </div>

        <div className="pt-[100px]">
          <span className="footer-title">Engage</span>
          <a className="link link-hover">Coffe Shop ? </a>
          <a className="link link-hover">FAQ</a>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
};

export default Profile;
