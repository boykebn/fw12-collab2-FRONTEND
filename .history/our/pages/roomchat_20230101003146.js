import React from "react";
import Image from "next/image";
import search from "../assets/search.png";
import man from "../assets/man.png";
import Footer from "../components/footer";
import { RiCheckDoubleFill } from "react-icons/ri";

const RoomChat = () => {
  return (
    <div className="pt-[100px] font-poppins">
      <div className="bg-[url('../assets/background-chat.png')] bg-cover bg-no-repeat pb-[89px]">
        <div className="pt-[84px] px-[200px] flex ">
          <div className=" py-[60px] px-[50px]  bg-[#d0b8a8] rounded-l-[20px]">
            <div className="border-1 flex items-center bg-white py-[18px] pl-[35px] pr-[40px] rounded-[30px] mb-[43px]">
              <Image src={search} alt="search" className="mr-[14px]" />
              <input placeholder="Search Chat" className="focus:outline-none" />
            </div>
            <p className="text-[15px] font-bold mb-[43px] px-[33px]">
              Choose a staff you want to talk with
            </p>
            <div className="flex mb-[20px] text-white">
              <Image
                src={man}
                alt="man"
                className="w-[80px] h-[81px] mr-[16px] rounded-[50%]"
              />
              <div>
                <p className="text-[20px] font-bold mb-[10px]">Man</p>
                <p className="w-[210px]">
                  Hey, I’m Jason, Let’s talk and share what’s on your thoughts!
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
                <p className="text-[20px] font-bold mb-[10px]">Man</p>
                <p className="w-[210px]">
                  Hey, I’m Jason, Let’s talk and share what’s on your thoughts!
                </p>
              </div>
            </div>
            <hr />
          </div>
          <div className="bg-white px-[36px] py-[28px] w-[1133px] rounded-r-[20px]">
            <div>
              <p className="text-[#4F5665] text-[30px] font-bold leading-[45px] mb-[70px]">
                Man
              </p>
              <div className="flex mb-[20px] text-white">
                <Image
                  src={man}
                  alt="man"
                  className="w-[80px] h-[81px] mr-[16px] rounded-[50%]"
                />
              </div>
              <hr />
            </div>
            <div className="pt-[196px] text-center">
              <p className="text-[#9F9F9F] text-[15px]">
                You have no conversation, start chat other staff! Have a good
                day!
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RoomChat;
