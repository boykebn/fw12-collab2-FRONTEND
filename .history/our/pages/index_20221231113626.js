import React from "react";
import Image from "next/image";
import logo from "../assets/logoOurCoffee.png";
import Link from "next/link";
import search from "../assets/search.png";
import profileIcon from "../assets/profile-icon.png";
import { FaUser } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import layer2 from "../assets/img-layer2.png";
import ceklis from "../assets/ceklis.png";
import food1 from "../assets/food1.png";
import food2 from "../assets/food2.png";
import food3 from "../assets/food3.png";
import ceklis2 from "../assets/ceklis2.png";
import globe from "../assets/Huge Global.png";
import sponsored from "../assets/Sponsored.png";
import person1 from "../assets/person1.png";
import person2 from "../assets/person2.png";
import person3 from "../assets/person3.png";
import star from "../assets/star.png";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
export default function Home() {
  return (
    <div className="font-rubik">
      <div className="px-[150px] py-[45px] flex items-center">
        <div className="flex flex-1 items-center">
          <Image src={logo} alt="logo" className="w-[30px] h-[33px] mr-[15px]" />
          <span className="text-[#0B132A] text-[20px] font-bold leading-[23px]">Our Coffee</span>
        </div>
        <div className=" text-[#4F5665] text-[16px] mr-[153px]">
          <span className="font-bold text-[#6A4029] mr-[40px]">Home</span>
          <span className="mr-[40px]">Product</span>
          <span className="mr-[40px]">Your Char</span>
          <span>History</span>
        </div>
        <div className="text-[16px] font-[600] leading-[19px]">
          <Link href="#" className="mr-[40px] text-[#0B132A]">
            Login
          </Link>
          <Link href="#" className="text-white border-1 bg-[#7d6e83] py-[13px] px-[45px] rounded-[50px]">
            Sign Up
          </Link>
        </div>
      </div>
      <div className="bg-[url('../assets/background-home.png')] h-[645px] ">
        <div className="px-[150px] flex">
          <div className="pt-[78px] mr-auto">
            <p className="text-white text-[50px] font-bold leading-[70px] w-[570px] mb-[20px]">Start Your Day with Coffee and Good Meals</p>
            <p className="text-white text-[20px] font-bold leading-[30px] w-[555px] mb-[32px]">We provide high quality beans, good taste, and healthy meals made by love just for you. Start your day with us for a bigger smile!</p>
            <Link href="#" className="text-white text-[16px] font-bold border-1 px-[78px] py-[18px] bg-[#7d6e83] rounded-[10px]">
              Get Started
            </Link>
          </div>
          <div className="pt-[20px]">
            <Image src={search} alt="search" className="absolute top-[165px] right-[420px]" />
            <input placeholder="Search" className="focus:outline-none bg-[#f8ede3] py-[17px] pl-[75px] font-[900] rounded-[30px]" />
          </div>
        </div>
      </div>
      <div className="pl-[90px] pr-[59px] py-[53px] border-1 bg-white absolute left-[150px] top-[660px] rounded-[10px] flex items-center shadow-lg mb-[103px]">
        <div className="flex">
          <div className="mr-[36px]">
            <FaUser className="w-[16px] h-[18px] absolute left-[110px] top-[100px]" />
            <div className="border-1 bg-[#7d6e83] w-[55px] h-[55px] rounded-[50%] \"></div>
          </div>
          <div className="mr-[134px]">
            <p className="text-[#0B132A] text-[25px] font-bold leading-[30px] mb-[5px]">90+</p>
            <p className="text-[#4F5665] text-[20px] leading-[30px]">Staff</p>
          </div>
        </div>
        <hr className="bg-[#EEEFF2] w-[2px] h-[125px] mr-[113px]" />
        <div className="flex">
          <div className="mr-[36px]">
            <MdLocationOn className="w-[22px] h-[26px] absolute left-[489px] top-[98px]" />
            <div className="border-1 bg-[#7d6e83] w-[55px] h-[55px] rounded-[50%] \"></div>
          </div>
          <div className="mr-[134px]">
            <p className="text-[#0B132A] text-[25px] font-bold leading-[30px] mb-[5px]">90+</p>
            <p className="text-[#4F5665] text-[20px] leading-[30px]">Staff</p>
          </div>
        </div>
        <hr className="bg-[#EEEFF2] w-[2px] h-[125px] mr-[113px]" />
        <div className="flex">
          <div className="mr-[36px]">
            <AiOutlineHeart className="w-[24px] h-[28px] absolute left-[870px] top-[97px]" />
            <div className="border-1 bg-[#7d6e83] w-[55px] h-[55px] rounded-[50%] \"></div>
          </div>
          <div className="">
            <p className="text-[#0B132A] text-[25px] font-bold leading-[30px] mb-[5px]">90+</p>
            <p className="text-[#4F5665] text-[20px] leading-[30px]">Staff</p>
          </div>
        </div>
      </div>
      <div className="pt-[193px] px-[150px] flex mb-[82px]">
        <div className="mr-[139px]">
          <Image src={layer2} alt="img-layer-2" />
        </div>
        <div>
          <div className="mb-[20px]">
            <p className="text-[#0B132A] text-[35px] font-bold leading-[50px] w-[432px] mb-[19px]">We Provide Good Coffee and Healthy Meals</p>
            <p className="text-[#4F5665] text-[16px] leading-[30px] w-[427px]">You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
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
              <p className="mb-[25px]">Healthy meals, you can request the ingredients</p>
              <p className="mb-[25px]">Chat with our staff to get better experience for ordering</p>
              <p>Free member card with a minimum purchase of IDR 200.000.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f8ede3]">
        <div className="pt-[80px] text-center mb-[90px]">
          <p className="text-[#0B132A] text-[35px] leading-[50px] font-bold mb-[19px]">Here is People’s Favorite</p>
          <p className="text-[#4F5665] text-[16px] leading-[30px] ">Let’s choose and have a bit taste of poeple’s favorite. It might be yours too!</p>
        </div>
        <div className="flex pl-[100px]">
          <div className=" flex mr-[50px] justify-center">
            <div className="border-2 bg-white rounded-[10px] pt-[62px] pl-[68px] pr-[65px] pb-[50px] mb-[30px]">
              <div className="mb-[30px] pl-[40px] leading-[30px]">
                <Image src={food1} alt="food1" className="rounded-[50%] shadow-xl mb-[53px]" />
                <p className="text-[18px] leading-[30px] font-bold">Hazelnut Latte</p>
              </div>
              <div className="flex items-center mb-[130px] leading-[30px]">
                <div className="">
                  <div className="flex items-center mb-[10px]">
                    <Image src={ceklis2} alt="ceklis2" className="w-[14px] h-[9px]  mr-[25px]" />
                    <p className="">HazelnutSyrup</p>
                  </div>
                  <div className="flex items-center mb-[10px]">
                    <Image src={ceklis2} alt="ceklis2" className="w-[14px] h-[9px]  mr-[25px]" />
                    <p className="">Wanilla Whipped Cream</p>
                  </div>
                  <div className="flex items-center mb-[10px]">
                    <Image src={ceklis2} alt="ceklis2" className="w-[14px] h-[9px]  mr-[25px]" />
                    <p className="">Ice / Hot</p>
                  </div>
                  <div className="flex items-center">
                    <Image src={ceklis2} alt="ceklis2" className="w-[14px] h-[9px]  mr-[25px]" />
                    <p>Sliced Banana on Top</p>
                  </div>
                </div>
              </div>
              <p className="text-[#0B132A] text-[25px] font-bold leading-[30px] text-center mb-[20px]">IDR 25.000</p>
              <div className="flex justify-center">
                <button className="py-[13px] px-[46px] border-2 bg-white rounded-[50px] border-[#7d6e83] text-[#7d6e83]">Order Now</button>
              </div>
            </div>
          </div>
          <div className=" flex mr-[50px] justify-center">
            <div className="border-2 bg-white rounded-[10px] pt-[62px] pl-[68px] pr-[65px] pb-[50px] mb-[30px]">
              <div className="mb-[30px] pl-[40px] ">
                <Image src={food2} alt="food2" className="rounded-[50%] shadow-xl mb-[53px]" />
                <p className="text-[18px] leading-[30px] font-bold">Pinky Promisee</p>
              </div>
              <div className="flex items-center mb-[110px]">
                <div className="">
                  <div className="flex items-center mb-[10px] leading-[30px]">
                    <Image src={ceklis2} alt="ceklis2" className="w-[14px] h-[9px]  mr-[25px]" />
                    <p className="">1 Shot of Coffee</p>
                  </div>
                  <div className="flex items-center mb-[10px]">
                    <Image src={ceklis2} alt="ceklis2" className="w-[14px] h-[9px]  mr-[25px]" />
                    <p className="">Vanilla Whipped Cream</p>
                  </div>
                  <div className="flex items-center mb-[10px]">
                    <Image src={ceklis2} alt="ceklis2" className="w-[14px] h-[9px]  mr-[25px]" />
                    <p className="">Chocolate Biscuits</p>
                  </div>
                  <div className="flex items-center mb-[10px]">
                    <Image src={ceklis2} alt="ceklis2" className="w-[14px] h-[9px]  mr-[25px]" />
                    <p>Strawberry Syrup</p>
                  </div>
                  <div className="flex items-center">
                    <Image src={ceklis2} alt="ceklis2" className="w-[14px] h-[9px]  mr-[25px]" />
                    <p>Sliced strawberry on Top</p>
                  </div>
                </div>
              </div>
              <p className="text-[#0B132A] text-[25px] font-bold leading-[30px] text-center mb-[20px]">IDR 30.000</p>
              <div className="flex justify-center">
                <button className="py-[13px] px-[46px] border-2 bg-white rounded-[50px] border-[#7d6e83] text-[#7d6e83]">Order Now</button>
              </div>
            </div>
          </div>
          <div className=" flex mr-[50px] justify-center">
            <div className="border-2 bg-white rounded-[10px] pt-[62px] pl-[68px] pr-[65px] pb-[50px] mb-[30px]">
              <div className="mb-[30px] pl-[40px]">
                <Image src={food3} alt="food3" className="rounded-[50%] shadow-xl mb-[53px]" />
                <p className="text-[18px] leading-[30px] font-bold">Chicken Wings</p>
              </div>
              <div className="flex items-center mb-[70px]">
                <div className="">
                  <div className="flex items-center mb-[10px] leading-[30px]">
                    <Image src={ceklis2} alt="ceklis2" className="w-[14px] h-[9px]  mr-[25px]" />
                    <p className="">Wings</p>
                  </div>
                  <div className="flex items-center mb-[10px]">
                    <Image src={ceklis2} alt="ceklis2" className="w-[14px] h-[9px]  mr-[25px]" />
                    <p className="">Drum Sticks</p>
                  </div>
                  <div className="flex items-center mb-[10px]">
                    <Image src={ceklis2} alt="ceklis2" className="w-[14px] h-[9px]  mr-[25px]" />
                    <p className="">Mayonaise and Lemon</p>
                  </div>
                  <div className="flex items-center mb-[10px]">
                    <Image src={ceklis2} alt="ceklis2" className="w-[14px] h-[9px]  mr-[25px]" />
                    <p>Hot Fried</p>
                  </div>
                  <div className="flex items-center mb-[10px]">
                    <Image src={ceklis2} alt="ceklis2" className="w-[14px] h-[9px]  mr-[25px]" />
                    <p>Secret Recipe</p>
                  </div>
                  <div className="flex items-center">
                    <Image src={ceklis2} alt="ceklis2" className="w-[14px] h-[9px]  mr-[25px]" />
                    <p>Buy 1 Get 1 only for Dine in</p>
                  </div>
                </div>
              </div>
              <p className="text-[#0B132A] text-[25px] font-bold leading-[30px] text-center mb-[20px]">IDR 25.000</p>
              <div className="flex justify-center">
                <button className="py-[13px] px-[46px] border-2 bg-white rounded-[50px] border-[#7d6e83] text-[#7d6e83]">Order Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-[155px] text-center pt-[130px]">
          <p className="text-[#0B132A] text-[35px] leading-[50px] font-bold mb-[20px]  px-[480px]">Visit Our Store in the Spot on the Map Below</p>
          <p className="text-[#4F5665] text-[16px] leading-[30px]  px-[442px]">See our store in every city on the spot and spen your good day there. See you soon!</p>
        </div>
        <div className="px-[190px] mb-[90px]">
          <Image src={globe} alt="globe" />
        </div>
        <div className=" text-center px-[150px] mb-[50px]">
          <p className="text-[35px] leading-[30px] font-bold mb-[34px]">Our Partner</p>
          <Image src={sponsored} alt="sponsored" />
        </div>
        <div className="text-center mb-[60px]">
          <p className="text-[#0B132A] text-[35px] leading-[50px] font-bold px-[470px] mb-[20px]">Loved by Thousands of Happy Customer</p>
          <p className="text-[#4F5665] text-[16px] leading-[30px] px-[420px]">These are the stories of our customers who have visited us with great pleasure.</p>
        </div>
        <div className="pl-[40px] flex mb-[80px]">
          <div className="border-2 bg-white rounded-[10px] p-[30px]  items-center mr-[20px]">
            <div className="flex mb-[20px]">
              <Image src={person1} alt="person1" className="mr-[21px]" />
              <div className="mr-[108px]">
                <p className="text-[#0B132A] text-[18px] font-semibold">Viezh Robert</p>
                <p className="text-[14px] text-[#4F5665] ">Warsaw, Poland</p>
              </div>
              <div className="flex items-center ">
                <p className="mr-[11px]">4.5</p>
                <Image src={star} alt="start" />
              </div>
            </div>
            <div>
              <p className="text-[#0B132A] text-[16px] leading-[30px] w-[330px] font-semibold">“Wow... I am very happy to spend my whole day here. the Wi-fi is good, and the coffee and meals tho. I like it here!! Very recommended!</p>
            </div>
          </div>
          <div className="border-2 bg-white rounded-[10px] p-[30px]  items-center mr-[20px]">
            <div className="flex mb-[20px]">
              <Image src={person2} alt="person2" className="mr-[21px]" />
              <div className="mr-[108px]">
                <p className="text-[#0B132A] text-[18px] font-semibold">Yessica Christy</p>
                <p className="text-[14px] text-[#4F5665] ">Shanxi, China</p>
              </div>
              <div className="flex items-center ">
                <p className="mr-[11px]">4.5</p>
                <Image src={star} alt="start" />
              </div>
            </div>
            <div>
              <p className="text-[#0B132A] text-[16px] leading-[30px] w-[330px] font-semibold">“I like it because I like to travel far and still can make my day better just by drinking their Hazelnut Latte</p>
            </div>
          </div>
          <div className="border-2 bg-white rounded-[10px] p-[30px]  items-center">
            <div className="flex mb-[20px]">
              <Image src={person3} alt="person3" className="mr-[21px]" />
              <div className="mr-[108px]">
                <p className="text-[#0B132A] text-[18px] font-semibold">Kim Young Jou</p>
                <p className="text-[14px] text-[#4F5665] ">Seoul, South Korea</p>
              </div>
              <div className="flex items-center ">
                <p className="mr-[11px]">4.5</p>
                <Image src={star} alt="start" />
              </div>
            </div>
            <div>
              <p className="text-[#0B132A] text-[16px] leading-[30px] w-[330px] font-semibold">
                “This is very unusual for my taste, I haven’t liked coffee before but their coffee is the best! and yup, you have to order the chicken wings, the best in town!
              </p>
            </div>
          </div>
        </div>
        <div className="px-[150px] flex pb-[44px]">
          <div className="flex-1">
            <button className="border-1 bg-[#7d6e83] w-[30px] h-[15px] rounded-[10px] mr-[22px]"></button>
            <button onClick="#" className="border-1 bg-[#D0b8a8] w-[15px] h-[15px] rounded-[50%] mr-[22px]"></button>
            <button onClick="#" className="border-1 bg-[#D0b8a8] w-[15px] h-[15px] rounded-[50%] mr-[22px]"></button>
            <button onClick="#" className="border-1 bg-[#D0b8a8] w-[15px] h-[15px] rounded-[50%] "></button>
          </div>
          <div>
            <button className="border-2 border-[#7d6e83] bg-white py-[10px] px-[10px] rounded-[50%] mr-[40px] hover:bg-[#D0b8a8]">
              <AiOutlineArrowLeft className="w-[20px] h-[17px]" />
            </button>
            <button className="border-2 border-[#7d6e83] bg-white py-[10px] px-[10px] rounded-[50%] hover:bg-[#D0b8a8]">
              <AiOutlineArrowRight className="w-[20px] h-[17px]" />
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#d0b8a8]">
        <div className="px-[150px]">
          <div className="border-1 bg-white px-[70px] py-[58px] flex items-center rounded-[10px]">
            <div className="flex-1">
              <p className="text-[#0B132A] text-[35px] font-bold leading-[40px] mb-[20px] w-[372px]">Check our promo today!</p>
              <p className="text-[#4F5665] text-[16px] ">Let's see the deals and pick yours!</p>
            </div>
            <div>
              <button className="text-[#d0b8a8] border-1 bg-[#7d6e83] py-[17px] px-[82px] rounded-[10px]hover:shadow">See Promo</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
