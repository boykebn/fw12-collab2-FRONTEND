import React from "react";
import Image from "next/image";
import search from "../assets/search.png";

const Chat = () => {
  return (
    <div className="pt-[100px]">
      <div className="bg-[url('../assets/background-home.png')]">
        <div className="pt-[84px] px-[200px]">
          <div className="border-1 bg-[#d0b8a8] ">
            <div>
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
