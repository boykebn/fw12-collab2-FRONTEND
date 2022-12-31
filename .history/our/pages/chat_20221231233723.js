import React from "react";
import Image from "next/image";
import search from "../assets/search.png";

const Chat = () => {
  return (
    <div className="pt-[100px]">
      <div className="bg-[url('../assets/background-chat.png')] bg-cover bg-no-repeat">
        <div className="pt-[84px] px-[200px] flex">
          <div className="border-1 bg-[#d0b8a8] py-[60px] px-[50px]">
            <div className="border-1 flex items-center">
              <Image src={search} alt="search" />
              <input placeholder="Search Chat" className="" />
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
