import {
  ChevronLeft,
  Facebook,
  Instagram,
  Search,
  Twitter,
} from "feather-icons-react/build/IconComponents";
import Image from "next/image";
import Link from "next/link";
import ChartDailyAvg from "../images/chartDailyAvg.png";
import withAuth from "../components/hoc/withAuth";
import NavbarAdmin from "../components/NavbarAdmin";
import {useDispatch, useSelector} from "react-redux";
import user from "../assets/user.png";
import React, { useEffect, useState } from "react";
import http from "../helpers/http";


const DashboardAdmin = () => {
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
  const token = useSelector((state) => state?.auth?.token);

  const getBio = async () => {
    const { data } = await http(token).get("/profile");
    return data;
  };
  return (
    <>
      {/* Header */}
      <section>
        <div className="hidden md:flex items-center gap-40 px-28 py-5">
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
              <Link href="">
                <li className="cursor-pointer hover:text-[#7D6E83]">Product</li>
              </Link>
              <Link href="">
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
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="avatar">
                <div className="w-10 rounded-full">
                  {bio?.picture ? (
                    <Image src={bio?.picture} alt="profile" />
                  ) : (
                    <Image src={user} alt="profile" />
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
      {/* Dashboard */}
      <section className="bg-[#F8EDE3] px-5 md:px-28 py-10 border-b-2">
        <div className="md:hidden relative items-center mb-5">
          <ChevronLeft className="absolute top-1" />
          <h1 className="text-center font-bold text-lg">Sales Chart</h1>
        </div>

        <div className="flex flex-col gap-5">
          <div className="hidden md:block text-center">
            <h3 className="font-bold text-2xl text-[#7D6E83]">
              See how your store progress so far
            </h3>
          </div>
          <div className="hidden md:flex justify-center gap-16">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center bg-[#9F9F9F] w-6 h-6 rounded-full mb-1">
                <div className="bg-white w-3 h-3 rounded-full"></div>
              </div>
              <div>
                <p>Daily</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center bg-[#9F9F9F] w-6 h-6 rounded-full mb-1">
                <div className="bg-white w-3 h-3 rounded-full"></div>
              </div>
              <div>
                <p>Weekly</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center bg-[#7D6E83] w-6 h-6 rounded-full mb-1">
                <div className="bg-[#DFD3C3] w-3 h-3 rounded-full"></div>
              </div>
              <div>
                <p>Montly</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 py-8">
          <div className="flex-[70%] bg-white rounded-2xl shadow-xl px-8 py-5">
            <div className="flex items-center mb-5">
              <div className="flex-1">
                <p className="font-bold text-xl">Monthly Report</p>
                <p>Last 6 months</p>
              </div>
              <div className="flex gap-1">
                <div className="w-3 h-3 bg-black rounded-full"></div>
                <div className="w-3 h-3 bg-black rounded-full"></div>
                <div className="w-3 h-3 bg-black rounded-full"></div>
              </div>
            </div>
            <div className="flex flex-col gap-3 items-center">
              <div className="border-b">
                <Image
                  src={require("../images/chart.png")}
                  alt="Chart"
                  className="w-4/4 py-10"
                />
              </div>
              <div className="flex justify-center items-center gap-20">
                <div className="flex items-center gap-5">
                  <div className="w-3 h-3 rounded-full bg-[#DFD3C3]"></div>
                  <p>Income</p>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-3 h-3 rounded-full bg-[#7D6E83]"></div>
                  <p>Outcome</p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:hidden flex-[70%] bg-white rounded-2xl shadow-xl px-8 py-5">
            <div className="flex items-center mb-5">
              <div className="flex-1">
                <p className="font-bold text-xl">IDR 2.5M</p>
                <p>Daily average</p>
              </div>
              <div className="flex gap-1">
                <div className="w-3 h-3 bg-black rounded-full"></div>
                <div className="w-3 h-3 bg-black rounded-full"></div>
                <div className="w-3 h-3 bg-black rounded-full"></div>
              </div>
            </div>
            <div className="flex flex-col gap-3 items-center">
              <div className="border-b">
                <Image
                  src={ChartDailyAvg}
                  alt="Chart"
                  className="w-4/4 py-10"
                />
              </div>
            </div>
          </div>

          <div className="flex-[30%] flex flex-col gap-8">
            <div className="hidden md:block bg-white rounded-xl shadow-lg p-5">
              <div className="flex gap-5 border-b pb-3">
                <div className="w-14 h-14">
                  <Image
                    src={require("../images/profile2.png")}
                    alt="profile"
                    className="rounded-full w-full"
                  />
                </div>
                <div>
                  <p className="font-bold">Cheryn Laurent</p>
                  <p>Keep up the good work and spread love!</p>
                </div>
              </div>
              <div className="pt-3 flex flex-col items-center gap-3">
                <div>
                  <p className="font-bold">Best Staff of the Month</p>
                </div>
                <div className="border-4 w-14 h-14 flex items-center justify-center rounded-full border-r-green-500 border-b-green-500 border-t-green-500">
                  <p className="font-bold">80%</p>
                </div>
                <div className="text-center">
                  <p>Achieved 3.5M of total 5M 478 Customer</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-5">
              <div className="flex flex-col items-center gap-5">
                <div className="text-center">
                  <p className="font-bold">Goals</p>
                  <p>Your goals is still on 76%. Keep up the good work!</p>
                </div>
                <div className="border-8 w-24 h-24 flex items-center justify-center rounded-full border-r-green-500 border-b-green-500 border-t-green-500">
                  <p className="font-bold">80%</p>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-500"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-8">
          <div className="flex-[70%]">
            <button className="btn md:btn-lg rounded-xl bg-[#7D6E83]">
              Download Report
            </button>
          </div>
          <div className="hidden md:block flex-[30%]">
            <button className="btn md:btn-lg rounded-xl bg-[#7D6E83]">
              Share Report
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="hidden md:flex gap-20 relative bg-[#F8EDE3] py-10 pb-20 pl-28 px-52">
        <div className="flex-1 flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <Image
              src={require("../images/logoOurCoffee.png")}
              alt="Logo"
              className="w-8 h-8"
            />
            <p className="font-bold text-lg">Our Coffee</p>
          </div>
          <div>
            <p className="w-72">
              Our coffee is a store that sells some good meals, and especially
              coffee. We provide high quality beans
            </p>
          </div>
          <div className="flex gap-5">
            <div className="bg-[#7D6E83] flex items-center justify-center rounded-full w-10 h-10">
              <Facebook />
            </div>
            <div className="bg-[#7D6E83] flex items-center justify-center rounded-full w-10 h-10">
              <Twitter />
            </div>
            <div className="bg-[#7D6E83] flex items-center justify-center rounded-full w-10 h-10">
              <Instagram />
            </div>
          </div>
          <div>
            <p>©2022OurCoffee</p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <p className="font-bold text-lg">Product</p>
          <ul className="flex flex-col gap-3">
            <li className="cursor-pointer">Download </li>
            <li className="cursor-pointer">Pricing</li>
            <li className="cursor-pointer">Locations</li>
            <li className="cursor-pointer">Countries</li>
            <li className="cursor-pointer">Blog</li>
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <p className="font-bold text-lg">Engage</p>
          <ul className="flex flex-col gap-3">
            <li className="cursor-pointer">Our Coffee ? </li>
            <li className="cursor-pointer">FAQ</li>
            <li className="cursor-pointer">About Us</li>
            <li className="cursor-pointer">Privacy Policy</li>
            <li className="cursor-pointer">Terms of Service</li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default withAuth(DashboardAdmin);
