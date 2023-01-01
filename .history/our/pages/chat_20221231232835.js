import React from "react";
import Image from "next/image";
import search from "../assets/search.png";

const Chat = () => {
  return (
    <div className="pt-[100px]">
      <div className="bg-[url('../assets/background-home.png')]">
        <div className="pt-[84px]">
          <div>
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