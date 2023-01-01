import React from "react";
import Image from "next/image";
import search from "../assets/search.png";
import man from "../assets/man.png";

const Chat = () => {
  return (
    <div className="pt-[100px] font-poppins">
      <div className="bg-[url('../assets/background-chat.png')] bg-cover bg-no-repeat">
        <div className="pt-[84px] px-[200px] flex">
          <div className=" py-[60px] px-[50px] rounded-[20px] bg-[#d0b8a8]">
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
                className="w-[80px] h-[81px] mr-[16px]"
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
          <div className="bg-white">
            <div>
              <p className="text-[#4F5665] text-[30px]">Room Chat</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;