import React from "react";
import Image from "next/image";
import search from "../assets/search.png";
import man from "../assets/man.png";
import Footer from "../components/footer";
import { RiCheckDoubleFill } from "react-icons/ri";
import camera from "../assets/camera.png";
import Navbar from "../components/navbar";

const RoomChatAdmin = () => {
  return (
    <>
      <Navbar />
      <div className=" font-poppins">
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
              <p className="text-[15px] font-bold mb-[43px] pl-[30px] text-white">
                Click a conversation to start a chat
              </p>
              <div className="flex mb-[20px] text-white">
                <Image
                  src={man}
                  alt="man"
                  className="w-[80px] h-[81px] mr-[14px] rounded-[50%]"
                />
                <div>
                  <p className="text-[20px] font-bold mb-[10px]">Cust-1</p>
                  <p className="w-[210px] text-[15px]">
                    Hey jason, I can’t find the promo section. Can u tell me
                    where is it?
                  </p>
                </div>
              </div>
              <hr className="mb-[78px]" />
              <div>
                <p className="text-[15px] text-center text-white">
                  You have no conversation, start chat other staff! Have a good
                  day!
                </p>
              </div>
            </div>
            <div className="bg-white px-[36px] py-[28px] md:w-[1133px] rounded-r-[20px] h-[1100px]">
              <div className="mb-[100px]">
                <p className="text-[#4F5665] text-[30px] font-bold leading-[45px] mb-[70px]">
                  Cust-1
                </p>
                <div className="flex mb-[20px] text-white">
                  <Image
                    src={man}
                    alt="man"
                    className="w-[55px] h-[67px] mr-[29px] rounded-[50%]"
                  />
                  <div>
                    <p className="text-[#4F5665] text-[20px] font-bold">
                      Staff-1
                    </p>
                    <p className="text-[#4F5665] text-[15px] leading-[22px]">
                      Hey jason, I can’t find the promo section. Can u tell me
                      where is it?
                    </p>
                  </div>
                  <span className="text-[#9F9F9F] text-[10px] leading-[15px]">
                    02.14 PM
                  </span>
                </div>
                <hr className="mb-[34px]" />
                <div className="flex">
                  <span className="text-[#9F9F9F] text-[10px] leading-[15px] mr-[12px] flex-1">
                    02.14 PM
                  </span>
                  <div className="text-end mr-[29px] flex-1">
                    <p className="text-[#4F5665] text-[20px] font-bold">
                      Staff-1
                    </p>
                    <p className="text-[#4F5665] text-[15px] leading-[22px]">
                      it’s on the left corner on the product menu
                    </p>
                  </div>
                  <Image
                    src={man}
                    alt="man"
                    className="w-[55px] h-[67px] mr-[29px] rounded-[50%]"
                  />
                </div>
              </div>
              <div className="pb-[-56px]">
                <div className="border-1 bg-[#dfd3c3] py-[23px] px-[48px] flex rounded-[20px]">
                  <input
                    placeholder="Type a message..."
                    className="focus:outline-none bg-[#dfd3c3] flex-1"
                  />
                  <Image src={camera} alt="camera" className="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default RoomChatAdmin;
