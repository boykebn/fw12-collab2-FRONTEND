/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../assets/logoOurCoffee.png";
import { useSelector } from "react-redux";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiTwotoneHeart,
} from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import ceklis from "../assets/ceklis.png";
import ceklis2 from "../assets/ceklis2.png";
import food1 from "../assets/food1.png";
import food2 from "../assets/food2.png";
import food3 from "../assets/food3.png";
import globe from "../assets/Huge Global.png";
import layer2 from "../assets/img-layer2.png";
import person1 from "../assets/person1.png";
import person2 from "../assets/person2.png";
import person3 from "../assets/person3.png";
import sponsored from "../assets/Sponsored.png";
import star from "../assets/star.png";
// import Footer from "../components/footer";

import { BiSearch } from "react-icons/bi";
import NavbarIndex from "../components/NavbarIndex";
import Navbar from "../components/navbar";

export default function Home() {
  const token = useSelector((state) => state.auth.token);
  return (
    <div className="font-rubik">
      {/* Navbar */}
      {token ? <Navbar /> : <NavbarIndex />}

      {/* Konten */}
      <div className="bg-[url('../assets/background-home.png')] bg-no-repeat bg-cover h-[645px]">
        <div className="lg:flex w-full px-3 lg:px-[150px] flex-row">
          <div className="pt-[78px] lg:mr-auto">
            <p className="block text-white text-[50px] font-bold leading-[70px] w-[570px] mb-[20px]">
              Start Your Day with Coffee and Good Meals
            </p>

            <p className=" block text-white text-[20px] font-bold leading-[30px] w-[555px] mb-[32px]">
              We provide high quality beans, good taste, and healthy meals made
              by love just for you. Start your day with us for a bigger smile!
            </p>
            <Link
              href="#"
              className="text-white text-[16px] font-bold py-[10px] bg-[#7d6e83] rounded-[10px] w-[150px] flex justify-center hover:bg-gray-800 duration-500"
            >
              Get Started
            </Link>
          </div>
          <div className="pt-[20px] relative">
            <BiSearch className="absolute top-9 left-5 w-8 h-8" />
            <input
              placeholder="Search"
              className="focus:outline-none bg-[#f8ede3] py-[17px] pl-[75px] lg:pr-10 font-[900] rounded-[30px]"
            />
          </div>
        </div>

        <div className="px-3 lg:px-[150px] pt-[135px] lg:block">
          <div className="pl-3 lg:pl-[90px] pr-3 lg:pr-[59px] py-[53px] border-1 bg-white  rounded-[10px] flex items-center text-center flex-col lg:flex-row shadow-lg mb-[103px]">
            <div className="lg:flex lg:mr-[134px]">
              <div className="lg:mr-[36px]">
                <div className="border-1 bg-[#7d6e83] w-[55px] h-[55px] rounded-[50%] flex items-center justify-center">
                  <FaUser className="w-[16px] h-[18px] text-white" />
                </div>
              </div>
              <div className="">
                <p className="text-[#0B132A] text-[25px] font-bold leading-[30px] mb-[5px]">
                  90+
                </p>
                <p className="text-[#4F5665] text-[20px] leading-[30px]">
                  Staff
                </p>
              </div>
            </div>
            <hr className="bg-[#EEEFF2] w-[2px] h-[125px] lg:mr-[80px] " />
            <div className="lg:flex lg:mr-[134px]">
              <div className="lg:mr-[36px]">
                <div className="border-1 bg-[#7d6e83] w-[55px] h-[55px] rounded-[50%] flex justify-center items-center ">
                  <MdLocationOn className="w-[22px] h-[26px] text-white" />
                </div>
              </div>
              <div className="">
                <p className="text-[#0B132A] text-[25px] font-bold leading-[30px] mb-[5px]">
                  30+
                </p>
                <p className="text-[#4F5665] text-[20px] leading-[30px]">
                  Stores
                </p>
              </div>
            </div>
            <hr className="bg-[#EEEFF2] w-[2px] h-[125px] lg:mr-[80px]" />
            <div className="lg:flex">
              <div className="lg:mr-[36px] flex justify-center items-center">
                <div className="border-1 bg-[#7d6e83] w-[55px] h-[55px] rounded-[50%] flex justify-center items-center ">
                  <AiTwotoneHeart className="w-[24px] h-[28px] text-white" />
                </div>
              </div>
              <div className="">
                <p className="text-[#0B132A] text-[25px] font-bold mb-[5px]">
                  800+
                </p>
                <p className="text-[#4F5665] text-[20px] leading-[30px]">
                  Customers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" pt-[770px] lg:pt-[170px] px-3 lg:px-[150px] lg:flex mb-[82px]">
        <div className="lg:mr-[139px]">
          <Image src={layer2} alt="img-layer-2" />
        </div>
        <div>
          <div className="mb-[20px]">
            <p className="text-[#0B132A] text-[24px] lg:text-[35px] font-bold leading-[50px] w-[432px] mb-[19px]">
              We Provide Good Coffee and Healthy Meals
            </p>
            <p className="text-[#4F5665] text-[16px] leading-[30px] w-[427px]">
              You can explore the menu that we provide with fun and have their
              own taste and make your day better.
            </p>
          </div>
          <div className="flex">
            <div className="mr-[13px]">
              <Image src={ceklis} alt="ceklis" className="mb-[25px]" />
              <Image src={ceklis} alt="ceklis" className="mb-[25px]" />
              <Image src={ceklis} alt="ceklis" className="mb-[25px]" />
              <Image src={ceklis} alt="ceklis" />
            </div>
            <div className="text-[#4F5665] text-[14px]">
              <p className="mb-[25px]">High quality beans</p>
              <p className="mb-[25px]">
                Healthy meals, you can request the ingredients
              </p>
              <p className="mb-[25px]">
                Chat with our staff to get better experience for ordering
              </p>
              <p>Free member card with a minimum purchase of IDR 200.000.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f8ede3] lg:h-[1250px] w-full flex flex-col items-center">
        <div className=" block pt-[80px] text-center mb-[90px]">
          <p className="text-[#0B132A] text-[35px] leading-[50px] font-bold mb-[19px]">
            Here is People???s Favorite
          </p>
          <p className="text-[#4F5665] text-[16px] leading-[30px] ">
            Let???s choose and have a bit taste of poeple???s favorite. It might be
            yours too!
          </p>
        </div>
        <div className="lg:flex justify-center items-center px-3 lg:px-5 lg:w-full">
          <div className="lg:carousel carousel-center lg:flex gap-5 gap-20 w-full lg:px-5 justify-center">
            <div className="carousel-item">
              <div className="w-80 flex flex-col justify-center items-center py-5 border-2 bg-white rounded-[10px] pt-[62px] pb-[50px] mb-[30px]">
                <div className="mb-[30px] leading-[30px]">
                  <Image
                    src={food1}
                    alt="food1"
                    className="rounded-[50%] shadow-xl mb-[53px]"
                  />
                  <p className="text-[18px] leading-[30px] font-bold">
                    Hazelnut Latte
                  </p>
                </div>
                <div className=" flex items-center mb-[100px] leading-[30px]">
                  <div className="">
                    <div className="flex items-center mb-[10px]">
                      <Image
                        src={ceklis2}
                        alt="ceklis2"
                        className="w-[14px] h-[9px]  mr-[25px]"
                      />
                      <p className="">HazelnutSyrup</p>
                    </div>
                    <div className="flex items-center mb-[10px]">
                      <Image
                        src={ceklis2}
                        alt="ceklis2"
                        className="w-[14px] h-[9px]  mr-[25px]"
                      />
                      <p className="">Wanilla Whipped Cream</p>
                    </div>
                    <div className="flex items-center mb-[10px]">
                      <Image
                        src={ceklis2}
                        alt="ceklis2"
                        className="w-[14px] h-[9px]  mr-[25px]"
                      />
                      <p className="">Ice / Hot</p>
                    </div>
                    <div className="flex items-center">
                      <Image
                        src={ceklis2}
                        alt="ceklis2"
                        className="w-[14px] h-[9px]  mr-[25px]"
                      />
                      <p>Sliced Banana on Top</p>
                    </div>
                  </div>
                </div>
                <p className="text-[#0B132A] text-[25px] font-bold leading-[30px] text-center mb-[20px]">
                  IDR 25.000
                </p>
                <div className="flex justify-center">
                  <button className="btn py-[10px] px-[46px] border-2 bg-white rounded-[50px] border-[#7d6e83] text-[#7d6e83]">
                    <Link href="/payment-delivery-cust">Order Now</Link>
                  </button>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="w-80 flex flex-col justify-center items-center py-5 border-2 bg-white rounded-[10px] pt-[62px] pb-[50px] mb-[30px]">
                <div className="mb-[30px]">
                  <Image
                    src={food2}
                    alt="food2"
                    className="rounded-[50%] shadow-xl mb-[53px]"
                  />
                  <p className="text-[18px] leading-[30px] font-bold">
                    Pinky Promisee
                  </p>
                </div>
                <div className=" flex items-center mb-[110px]">
                  <div className="">
                    <div className="flex items-center mb-[10px] leading-[30px]">
                      <Image
                        src={ceklis2}
                        alt="ceklis2"
                        className="w-[14px] h-[9px] mr-[25px]"
                      />
                      <p className="">1 Shot of Coffee</p>
                    </div>
                    <div className="flex items-center mb-[10px]">
                      <Image
                        src={ceklis2}
                        alt="ceklis2"
                        className="w-[14px] h-[9px]  mr-[25px]"
                      />
                      <p className="">Vanilla Whipped Cream</p>
                    </div>
                    <div className="flex items-center mb-[10px]">
                      <Image
                        src={ceklis2}
                        alt="ceklis2"
                        className="w-[14px] h-[9px]  mr-[25px]"
                      />
                      <p className="">Chocolate Biscuits</p>
                    </div>
                    <div className="flex items-center mb-[10px]">
                      <Image
                        src={ceklis2}
                        alt="ceklis2"
                        className="w-[14px] h-[9px]  mr-[25px]"
                      />
                      <p>Strawberry Syrup</p>
                    </div>
                    <div className="flex items-center">
                      <Image
                        src={ceklis2}
                        alt="ceklis2"
                        className="w-[14px] h-[9px]  mr-[25px]"
                      />
                      <p>Sliced strawberry on Top</p>
                    </div>
                  </div>
                </div>
                <p className="text-[#0B132A] text-[25px] font-bold leading-[30px] text-center mb-[20px]">
                  IDR 30.000
                </p>
                <div className="flex justify-center">
                  <div className="flex justify-center">
                    <Link
                      href="/payment-delivery-cust"
                      className="btn py-[10px] px-[46px] border-2 bg-white rounded-[50px] border-[#7d6e83] text-[#7d6e83]"
                    >
                      Order Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="w-80 flex flex-col justify-center items-center py-5 border-2 bg-white rounded-[10px] pt-[62px] pb-[50px] mb-[30px]">
                <div className="mb-[30px]">
                  <Image
                    src={food3}
                    alt="food3"
                    className="rounded-[50%] shadow-xl mb-[53px]"
                  />
                  <p className="text-[18px] leading-[30px] font-bold">
                    Chicken Wings
                  </p>
                </div>
                <div className=" flex items-center mb-[70px]">
                  <div className="ml-5">
                    <div className="flex items-center mb-[10px] leading-[30px]">
                      <Image
                        src={ceklis2}
                        alt="ceklis2"
                        className="w-[14px] h-[9px]  mr-[25px]"
                      />
                      <p className="">Wings</p>
                    </div>
                    <div className="flex items-center mb-[10px]">
                      <Image
                        src={ceklis2}
                        alt="ceklis2"
                        className="w-[14px] h-[9px]  mr-[25px]"
                      />
                      <p className="">Drum Sticks</p>
                    </div>
                    <div className="flex items-center mb-[10px]">
                      <Image
                        src={ceklis2}
                        alt="ceklis2"
                        className="w-[14px] h-[9px]  mr-[25px]"
                      />
                      <p className="">Mayonaise and Lemon</p>
                    </div>
                    <div className="flex items-center mb-[10px]">
                      <Image
                        src={ceklis2}
                        alt="ceklis2"
                        className="w-[14px] h-[9px]  mr-[25px]"
                      />
                      <p>Hot Fried</p>
                    </div>
                    <div className="flex items-center mb-[10px]">
                      <Image
                        src={ceklis2}
                        alt="ceklis2"
                        className="w-[14px] h-[9px]  mr-[25px]"
                      />
                      <p>Secret Recipe</p>
                    </div>
                    <div className="flex items-center">
                      <Image
                        src={ceklis2}
                        alt="ceklis2"
                        className="w-[14px] h-[9px]  mr-[25px]"
                      />
                      <p>Buy 1 Get 1 only for Dine in</p>
                    </div>
                  </div>
                </div>
                <p className="text-[#0B132A] text-[25px] font-bold leading-[30px] text-center mb-[20px]">
                  IDR 25.000
                </p>
                <div className="flex justify-center">
                  <div className="flex justify-center">
                    <Link
                      href="/payment-delivery-cust"
                      className="btn py-[10px] px-[46px] border-2 bg-white rounded-[50px] border-[#7d6e83] text-[#7d6e83]"
                    >
                      Order Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block relative bg-white">
        <div className="lg:mb-[155px] text-center pt-5 lg:pt-[130px]">
          <p className="text-[#0B132A] text-[35px] leading-[50px] font-bold mb-7 lg:mb-[20px] px-3 lg:px-[480px]">
            Visit Our Store in the Spot on the Map Below
          </p>
          <p className="text-[#4F5665] text-[16px] leading-[30px] px-3 lg:px-[442px] mb-7 lg:mb-0">
            See our store in every city on the spot and spen your good day
            there. See you soon!
          </p>
        </div>
        <div className="px-3 lg:px-[190px] lg:mb-[90px]">
          <Image src={globe} alt="globe" />
        </div>
        <div className=" text-center px-3 lg:px-[150px] mb-[50px]">
          <p className="text-[35px] leading-[30px] font-bold mb-[34px]">
            Our Partner
          </p>
          <Image src={sponsored} alt="sponsored" className="" />
        </div>
        <div className="text-center mb-[60px]">
          <p className="text-[#0B132A] text-[35px] leading-[50px] font-bold px-3 lg:px-[470px] mb-[20px]">
            Loved by Thousands of Happy Customer
          </p>
          <p className="text-[#4F5665] text-[16px] leading-[30px] px-3 lg:px-[420px]">
            These are the stories of our customers who have visited us with
            great pleasure.
          </p>
        </div>
        <div className="px-3 lg:px-[40px] lg:flex pb-5 lg:pb-[80px]">
          <div className="border-2 bg-white rounded-[10px] p-3 lg:p-[30px]  items-center lg:mr-[20px] mb-5 lg:mb-0">
            <div className="flex mb-[20px]">
              <Image src={person1} alt="person1" className="mr-[21px]" />
              <div className="lg:mr-[108px] flex-1">
                <p className="text-[#0B132A] text-[18px] font-semibold">
                  Viezh Robert
                </p>
                <p className="text-[14px] text-[#4F5665] ">Warsaw, Poland</p>
              </div>
              <div className="flex items-center ">
                <p className="mr-[11px]">4.5</p>
                <Image src={star} alt="start" />
              </div>
            </div>
            <div>
              <p className="text-[#0B132A] text-[16px] leading-[30px] w-[330px] font-semibold">
                ???Wow... I am very happy to spend my whole day here. the Wi-fi is
                good, and the coffee and meals tho. I like it here!! Very
                recommended!
              </p>
            </div>
          </div>
          <div className="border-2 bg-white rounded-[10px] p-3 lg:p-[30px]  items-center lg:mr-[20px] mb-5 lg:mb-0">
            <div className="flex mb-[20px]">
              <Image src={person2} alt="person2" className="mr-[21px]" />
              <div className="lg:mr-[108px] flex-1">
                <p className="text-[#0B132A] text-[18px] font-semibold">
                  Yessica Christy
                </p>
                <p className="text-[14px] text-[#4F5665] ">Shanxi, China</p>
              </div>
              <div className="flex items-center ">
                <p className="mr-[11px]">4.5</p>
                <Image src={star} alt="start" />
              </div>
            </div>
            <div>
              <p className="text-[#0B132A] text-[16px] leading-[30px] w-[330px] font-semibold">
                ???I like it because I like to travel far and still can make my
                day better just by drinking their Hazelnut Latte
              </p>
            </div>
          </div>
          <div className="border-2 bg-white rounded-[10px] p-3 lg:p-[30px]  items-center">
            <div className="flex mb-[20px]">
              <Image src={person3} alt="person3" className="mr-[21px]" />
              <div className="lg:mr-[108px] flex-1">
                <p className="text-[#0B132A] text-[18px] font-semibold">
                  Kim Young Jou
                </p>
                <p className="text-[14px] text-[#4F5665] ">
                  Seoul, South Korea
                </p>
              </div>
              <div className="flex items-center ">
                <p className="mr-[11px]">4.5</p>
                <Image src={star} alt="start" />
              </div>
            </div>
            <div>
              <p className="text-[#0B132A] text-[16px] leading-[30px] w-[330px] font-semibold">
                ???This is very unusual for my taste, I haven???t liked coffee
                before but their coffee is the best! and yup, you have to order
                the chicken wings, the best in town!
              </p>
            </div>
          </div>
        </div>
        <div className="px-3 lg:px-[150px] flex flex-col lg:flex-row justify-center items-center mb-[150px]">
          <div className="flex-1 mb-5 lg:mb-0">
            <button className="border-1 bg-[#7d6e83] w-[30px] h-[15px] rounded-[10px] mr-[22px]"></button>
            <button
              onClick="#"
              className="border-1 bg-[#D0b8a8] w-[15px] h-[15px] rounded-[50%] mr-[22px]"
            ></button>
            <button
              onClick="#"
              className="border-1 bg-[#D0b8a8] w-[15px] h-[15px] rounded-[50%] mr-[22px]"
            ></button>
            <button
              onClick="#"
              className="border-1 bg-[#D0b8a8] w-[15px] h-[15px] rounded-[50%] "
            ></button>
          </div>
          <div>
            <button className="border-2 border-[#7d6e83] bg-white py-[10px] px-[10px] rounded-[50%] mr-[40px] hover:bg-[#7d6e83] hover:text-white hover:border-[#D0b8a8]">
              <AiOutlineArrowLeft className="w-[20px] h-[17px] " />
            </button>
            <button className="border-2 border-[#7d6e83] bg-white py-[10px] px-[10px] rounded-[50%] hover:bg-[#7d6e83] hover:text-white hover:border-[#D0b8a8]">
              <AiOutlineArrowRight className="w-[20px] h-[17px]" />
            </button>
          </div>
        </div>
      </div>
      <div className=" block right-32 lg:absolute mt-[-100px]">
        <div className="border-1 bg-white px-[70px] py-[58px] lg:flex items-center rounded-[10px] shadow-2xl">
          <div className="lg:mr-[378px] mb-3 lg:mb-0">
            <p className="text-[#0B132A] text-[35px] font-bold leading-[40px] mb-[20px] w-[372px]">
              Check our promo today!
            </p>
            <p className="text-[#4F5665] text-[16px] ">
              Let's see the deals and pick yours!
            </p>
          </div>
          <div>
            <button className="btn border-0 text-white border-1 bg-[#7d6e83] py-[17px] px-[60px] rounded-[10px] text-[16px] font-bold">
              <p>See Promo</p>
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className=" w-full bg-[#dfd3c3] pt-[180px] ">
        <div className="flex py-[5%] px-[10%]">
          <div className="grow">
            <div className="flex gap-[15px]">
              <Image
                src={require("../images/logoOurCoffee.png")}
                height="33"
                width="30"
                alt="desc"
              ></Image>
              <div className="font-bold">Our Coffee</div>
            </div>
            <div className="text-base text-[#4F5665] pl-[4px] mt-[26px]">
              <div>Coffee Shop is a store that sells some good</div>
              <div>meals, and especially coffee. We provide</div>
              <div>high quality beans</div>
            </div>
            <div className="flex gap-5 mt-[45px]">
              <div className="bg-[#7D6E83] w-[33px] h-[33px] rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  className="w-3 h-3 text-white"
                >
                  <path
                    fill="currentColor"
                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                  />
                </svg>
              </div>

              <div className="bg-[#7D6E83] w-[33px] h-[33px] rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-3 h-3 text-white"
                >
                  <path
                    fill="currentColor"
                    d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                  />
                </svg>
              </div>

              <div className="bg-[#7D6E83] w-[33px] h-[33px] rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="w-3 h-3 text-white"
                >
                  <path
                    fill="currentColor"
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="px-[10%]">
            <div className="font-medium text-lg">Product</div>
            <div>Download </div>
            <div>Product</div>
            <div>Pricing</div>
            <div>Locations</div>
            <div>Countries</div>
          </div>

          <div>
            <div className="font-medium text-lg">Engage</div>
            <div>Our Coffee </div>
            <div>FAQ</div>
            <div>About Us</div>
            <div>Privacy Policy</div>
            <div>Terms of Service</div>
          </div>
        </div>
      </footer>
      {/* Footer */}
    </div>
  );
}
