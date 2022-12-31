import React from "react";
import Image from "next/image";
import search from "../assets/search.png";
import man from "../assets/man.png";

const Chat = () => {
  return (
    <div className="pt-[100px] font-poppins">
      <div className="bg-[url('../assets/background-chat.png')] bg-cover bg-no-repeat">
        <div className="pt-[84px] px-[200px] flex">
          <div className="border-1 bg-[#d0b8a8] py-[60px] px-[50px]">
            <div className="border-1 flex items-center bg-white py-[18px] pl-[35px] pr-[40px] rounded-[30px] mb-[43px]">
              <Image src={search} alt="search" className="mr-[14px]" />
              <input placeholder="Search Chat" className="focus:outline-none" />
            </div>
            <p className="text-[15px] font-bold mb-[43px] px-[33px]">
              Choose a staff you want to talk with
            </p>
            <div>
              <Image src={man} alt="man" className="w-[80px] h-[81px]" />
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
