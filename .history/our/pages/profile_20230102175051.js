import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { MdOutlineModeEdit } from "react-icons/md";
const Profile = () => {
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
                <span className="text-[#9F9F9F] text-[20px] font-[500]">
                  Email adress :
                </span>
                <span className="text-[20px] font-rubik">
                  zulaikha17@gmail.com
                </span>
                <div className="border-b border-2 border-[#000000]"></div>
              </div>
              <div className="flex flex-col mb-[47px]">
                <span className="text-[#9F9F9F] text-[20px] font-[500]">
                  Delivery adress :
                </span>
                <span className="text-[20px] font-rubik">
                  Iskandar Street no. 67 Block A Near Bus Stop
                </span>
                <div className="border-b border-2 border-[#000000]"></div>
              </div>
            </div>
            <div className="pt-[59px] w-[340px]">
              <div className="flex flex-col mb-[47px]">
                <span className="text-[#9F9F9F] text-[20px] font-[500]">
                  Mobile number :
                </span>
                <span className="text-[20px] font-rubik">(+62)813456782</span>
                <div className="border-b border-2 border-[#000000]"></div>
              </div>
            </div>
            <div>
              <Image src={MdOutlineModeEdit} alt="edit" />
            </div>
          </div>
        </div>

        <div className="pl-32 pt-20 flex gap-10">
          <div className="w-[744px] h-[418px] bg-white rounded-lg">b</div>

          <div>
            <div className="w-[330px] text-center">
              <p className="text-white font-semibold text-2xl">
                Do you want to save the change?
              </p>
            </div>
            <div className="pt-5">
              <button className="btn btn-wide">Save Change</button>
            </div>
            <div className="pt-5">
              <button className="btn btn-wide">Cancel</button>
            </div>
            <div className="pt-5">
              <button className="btn btn-wide">Edit Password</button>
            </div>
            <div className="pt-5">
              <button className="btn btn-wide">Log Out</button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Profile;
