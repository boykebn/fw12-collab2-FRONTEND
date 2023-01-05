import React from "react";
import Image from "next/image";
import search from "../assets/search.png";
import man from "../assets/man.png";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import withAuth from '../../components/hoc/withAuth'

const AdminChat = () => {
  return (
    <>
      <Navbar />
      <div className="font-poppins">
        <div className="md:bg-[url('../assets/background-chat.png')] bg-cover bg-no-repeat pb-[89px]">
          <div className="md:pt-[84px] md:px-[200px] md:flex ">
            <div className=" py-[60px] px-3 md:px-[50px]  bg-[#d0b8a8] md:rounded-l-[20px]">
              <div className="border-1 flex items-center bg-white py-[18px] pl-[35px] pr-[40px] rounded-[30px] mb-[43px]">
                <Image src={search} alt="search" className="mr-[14px]" />
                <input
                  placeholder="Search Chat"
                  className="focus:outline-none"
                />
              </div>
              <p className="text-[15px] text-white font-bold mb-[43px] pl-[30px]">
                Choose a staff you want to talk with
              </p>
              <div className="flex mb-[20px] text-white">
                <Image
                  src={man}
                  alt="man"
                  className="w-[80px] h-[81px] mr-[16px] rounded-[50%]"
                />
                <div>
                  <p className="text-[20px] font-bold mb-[10px]">Staff-1</p>
                  <p className="w-[210px]">
                    Hey, I’m Jason, Let’s talk and share what’s on your
                    thoughts!
                  </p>
                </div>
              </div>
              <hr className="mb-[26px]" />
              <div className="flex mb-[20px] text-white">
                <Image
                  src={man}
                  alt="man"
                  className="w-[80px] h-[81px] mr-[16px] rounded-[50%]"
                />
                <div>
                  <p className="text-[20px] font-bold mb-[10px]">Staff-2</p>
                  <p className="w-[210px]">
                    Hey, I’m Jason, Let’s talk and share what’s on your
                    thoughts!
                  </p>
                </div>
              </div>
              <hr />
            </div>
            <div className="bg-white px-[36px] py-[28px] md:w-[1133px] rounded-r-[20px] h-[1100px]">
              <div>
                <p className="text-[#4F5665] text-[30px] font-bold leading-[45px] mb-[70px]">
                  Room Chat
                </p>
                <div className="flex mb-[20px] text-white">
                  <Image
                    src={man}
                    alt="man"
                    className="w-[80px] h-[81px] mr-[16px] rounded-[50%]"
                  />
                  <div className="mr-[5px]">
                    <p className="text-[#4F5665] text-[20px] font-bold mb-[10px]">
                      Cust-1
                    </p>
                    <p className="text-[#4F5665] text-[15px] leading-[22px] font-bold">
                      Hey jason, I can’t find the promo section. Can u tell me
                      where is it?
                    </p>
                  </div>
                  <div className="flex flex-col justify-between">
                    <span className="text-[#9F9F9F] text-[10px] leading-[15px]">
                      02.14 PM
                    </span>
                    <span className=" text-[12px] border-1 bg-[#d0b8a8] rounded-[50%] text-center w-[20px] h-[20px] font-bold">
                      1
                    </span>
                  </div>
                </div>
                <hr className="mb-[27px]" />
                <div className="flex mb-[20px] text-white">
                  <Image
                    src={man}
                    alt="man"
                    className="w-[80px] h-[81px] mr-[16px] rounded-[50%]"
                  />
                  <div className="mr-[5px]">
                    <p className="text-[#4F5665] text-[20px] font-bold mb-[10px]">
                      Cust-2
                    </p>
                    <p className="text-[#4F5665] text-[15px] leading-[22px] ">
                      Hey jason, I can’t find the promo section. Can u tell me
                      where is it?
                    </p>
                  </div>
                  <div className="flex flex-col justify-between">
                    <span className="text-[#9F9F9F] text-[10px] leading-[15px]">
                      02.14 PM
                    </span>
                    {/* <span className=" text-[12px] border-1 bg-[#d0b8a8] rounded-[50%] text-center w-[20px] h-[20px]">
                      1
                    </span> */}
                  </div>
                </div>
                <hr className="mb-[27px]" />
              </div>
              <div className="pt-[196px] text-center">
                <p className="text-[#9F9F9F] text-[15px]">
                  You have no conversation, you’ll receive notification when a
                  customer chat you. Keep up the good work!
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default withAuth(AdminChat);
