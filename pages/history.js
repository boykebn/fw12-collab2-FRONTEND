import Image from "next/image";
import Link from "next/link";
import {
  Edit2,
  Facebook,
  Instagram,
  Search,
  Twitter,
} from "feather-icons-react/build/IconComponents";
import React, { useState, useEffect } from "react";
import http from "../helpers/http";

const History = () => {
  const [history, setHistory] = useState([]);
  const fetchHistory = async () => {
    try {
      const { data } = await http().get("/history", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(data)
      setHistory(data.results);
    } catch (error) {
      if (error) throw error;
    }
  };
  React.useEffect(() => {
    fetchHistory()
  },[]);
  return (
    <div className="max-w-full max-h-full">
      <section>
        <div className="hidden md:flex items-center gap-40 px-28 py-5 border-b-2">
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
              <Link href="/">
                <li className="cursor-pointer hover:text-[#7D6E83]">Home</li>
              </Link>
              <Link href="/product">
                <li className="cursor-pointer hover:text-[#7D6E83]">Product</li>
              </Link>
              <Link href="manage-orders">
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
            <Image
              src={require("../images/chat.png")}
              alt="chatIcon"
              className="w-4/4 cursor-pointer"
            />
            <div>
              <Image
                src={require("../images/profile.png")}
                alt="profile"
                className="w-4/4 rounded-full cursor-pointer"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="bg-history_bg bg-no-repeat bg-cover pb-[100px]">
        <div className="flex flex-col justify-center items-center leading-10 pt-[100px]">
          <h1 className="text-white text-4xl font-bold">
            Let’s see what you have bought!
          </h1>
          <p className="text-white">Long press to delete item</p>
        </div>

        <div className="flex justify-center items-center pt-20">
          <div className="grid grid-cols-3 gap-5">
            {history?.map((history) => (
              <div key={history.id} className="w-[394px] h-[126px] bg-white rounded-2xl hover:opacity-50">
                <div className="py-5 px-5 flex gap-5">
                  <Image
                    src={require("../images/tomato.png")}
                    width="82"
                    height="90"
                    alt="tomato"
                    className="rounded-full"
                  />
                  <div className="flex-1 text-lg">
                    <p className="font-bold text-2xl">{history?.name}</p>
                    <p>IDR {Number(history?.totalPrice
                      ).toLocaleString('id')}</p>
                    <p>{history?.status}</p>
                  </div>
                </div>
              </div>
            ))}
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

export default History;
