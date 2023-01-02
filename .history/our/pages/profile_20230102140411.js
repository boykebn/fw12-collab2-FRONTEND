import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Profile = () => {
  return (
    <div className="max-w-full max-h-full">
      <Navbar />

      <div className="bg-profile_bg bg-no-repeat bg-cover pb-[100px]">
        <div className="pl-32 pt-20 text-white text-2xl font-bold">
          <p>User Profile</p>
        </div>

        <div className="pl-32 pt-20 flex gap-5">
          <div className="w-[310px] h-[358px] rounded-lg bg-white px-5 py-14">
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

          <div className="w-[802px] h-[358px] rounded-lg bg-white">a</div>
        </div>

        <div className="pl-32 pt-20 flex gap-10">
          <div className="w-[744px] h-[418px] bg-white rounded-lg"></div>

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
