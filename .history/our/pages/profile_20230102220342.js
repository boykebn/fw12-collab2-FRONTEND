import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { MdOutlineModeEdit } from "react-icons/md";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import http from "../helpers/http";
const Profile = () => {
  const token = useSelector((state) => state.auth.token);
  const [bio, setBio] = useState({});
  console.log(bio);
  useEffect(() => {
    getBio().then((data) => {
      setBio(data.results);
    });
  }, []);

  const getBio = async () => {
    const { data } = await http(token).get(
      "https://fw12-collab2-backend.vercel.app/profile"
    );
    return data;
  };
  return (
    <div className="max-w-full max-h-full font-poppins">
      <Navbar />

      <div className="bg-profile_bg bg-no-repeat bg-cover pb-[100px] ">
        <div className="pl-32 pt-20 text-white text-2xl font-bold">
          <p>User Profile</p>
        </div>

        <div className="pl-32 pt-20 flex gap-5 ">
          <div className="w-[310px] h-[358px] rounded-lg bg-white px-5 py-14 border-t border-l border-r border-[12px] border-[#d0b8a8]">
            <div className="flex justify-center items-end">
              <Image
                src={require("../images/user.png")}
                width="82"
                height="90"
                alt="tomato"
                className="rounded-full"
              />
              <Image
                src={require("../images/ellips.png")}
                alt="ellips-edit"
                className="rounded-full w-[30px] h-[30px]"
              />
            </div>

            <div className="flex flex-col justify-center items-center">
              <p className="text-xl font-bold pb-2 pt-4">Zulaikha</p>
              <p>zulaikha17@gmail.com</p>
              <p className="text-[#4F5665] text-lg pt-10">
                Has been ordered 15 products
              </p>
            </div>
            {/* <div className='border w-[310px] h-2 rounded-lg '></div> */}
          </div>

          <div className="w-[802px] h-[358px] rounded-lg bg-white flex py-[17px] px-[30px] border-t border-l border-r border-[12px] border-[#d0b8a8]">
            <div className="w-[340px] mr-[36px]">
              <div className="mb-[21px]">
                <span className="text-[#4F5665] text-[25px] font-bold">
                  Contacts
                </span>
              </div>
              <div className="flex flex-col mb-[47px]">
                <span className="text-[#9F9F9F] text-[20px] font-[500] leading-[30px] ">
                  Email adress :
                </span>
                <span className="text-[20px] font-rubik leading-[50px]">
                  zulaikha17@gmail.com
                </span>
                <div className="border-b border-2 border-[#000000]"></div>
              </div>
              <div className="flex flex-col mb-[47px]">
                <span className="text-[#9F9F9F] text-[20px] font-[500] leading-[30px]">
                  Delivery adress :
                </span>
                <span className="text-[20px] font-rubik mb-[9px]">
                  Iskandar Street no. 67 Block A Near Bus Stop
                </span>
                <div className="border-b border-2 border-[#000000]"></div>
              </div>
            </div>
            <div className="pt-[59px] w-[340px]">
              <div className="flex flex-col mb-[47px]">
                <span className="text-[#9F9F9F] text-[20px] font-[500] leading-[30px]">
                  Mobile number :
                </span>
                <span className="text-[20px] font-rubik leading-[50px]">
                  (+62)813456782
                </span>
                <div className="border-b border-2 border-[#000000]"></div>
              </div>
            </div>
            <div className="">
              <div className="border-1 w-[30px] h-[30px] bg-[#d0b8a8] rounded-[50%] flex items-center justify-center">
                <MdOutlineModeEdit className="w-[18px] h-[20px] " />
              </div>
            </div>
          </div>
        </div>

        <div className="pl-32 pt-20 flex gap-10 ">
          <div className="flex w-[744px] h-[458px] bg-white rounded-lg border-t border-l border-r border-[12px] border-[#d0b8a8] pt-[26px] pl-[31px] pb-[40px] ">
            <div className="w-[396px] mr-[59px]">
              <div className="mb-[29px]">
                <span className="text-[#4F5665] text-[25px] font-bold">
                  Details
                </span>
              </div>
              <div className="flex flex-col mb-[25px]">
                <span className="text-[#9F9F9F] text-[20ppx] font-[500] leading-[30px]">
                  Display name :
                </span>
                <span className="text-[#000000] text-[20px] font-rubik leading-[50px]">
                  Zulaikha
                </span>
                <div className="border-b border-2 border-[#000000]"></div>
              </div>
              <div className="flex flex-col mb-[25px]">
                <span className="text-[#9F9F9F] text-[20ppx] font-[500] leading-[30px]">
                  First name :
                </span>
                <span className="text-[#000000] text-[20px] font-rubik leading-[50px]">
                  Nirmala
                </span>
                <div className="border-b border-2 border-[#000000]"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-[#9F9F9F] text-[20ppx] font-[500] leading-[30px]">
                  Last name :
                </span>
                <span className="text-[#000000] text-[20px] font-rubik leading-[50px]">
                  Nirmala
                </span>
                <div className="border-b border-2 border-[#000000]"></div>
              </div>
            </div>
            <div className="w-[217px] pt-[67px] ">
              <div className="flex flex-col mb-[34px]">
                <span className="text-[#9F9F9F] text-[20ppx] font-[500] leading-[30px]">
                  DD/MM/YY
                </span>
                <span className="text-[#000000] text-[20px] font-rubik leading-[50px]">
                  03/04/90
                </span>
                <div className="border-b border-2 border-[#000000]"></div>
              </div>
              <form>
                <div className="flex items-center mb-7">
                  <label className="text-[#9F9F9F] text-[20px] font-[500] leading-[30px] mr-20">
                    Male
                  </label>
                  <input
                    id="male"
                    type="radio"
                    name="radio-4"
                    className="radio radio-accent"
                    checked
                  />
                </div>
                <div className="flex items-center">
                  <label className="text-[#9F9F9F] text-[20px] font-[500] leading-[30px] mr-14">
                    Female
                  </label>
                  <input
                    id="female"
                    type="radio"
                    name="radio-4"
                    className="radio radio-accent"
                  />
                </div>
              </form>
            </div>
            <div className="">
              <div className="border-1 w-[30px] h-[30px] bg-[#d0b8a8] rounded-[50%] flex items-center justify-center">
                <MdOutlineModeEdit className="w-[18px] h-[20px] " />
              </div>
            </div>
          </div>

          <div>
            <div className="w-[330px] text-center">
              <p className="text-white font-semibold text-2xl">
                Do you want to save the change?
              </p>
            </div>
            <div className="pt-5">
              <button className="py-[17px] w-full rounded-[20px] bg-[#d0b8a8] border-1 font-bold hover:bg-[#7d6e83] hover:text-white duration-300">
                Save Change
              </button>
            </div>
            <div className="pt-5">
              <button className="py-[17px] w-full rounded-[20px] bg-[#d0b8a8] border-1 font-bold hover:bg-[#7d6e83] hover:text-white duration-300">
                Cancel
              </button>
            </div>
            <div className="pt-5">
              <button className="btn btn-wide py-[17px]">Edit Password</button>
            </div>
            <div className="pt-5">
              <button className="btn btn-wide py-[17px]">Log Out</button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Profile;
