import Image from "next/image";

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

          <div className="w-[802px] h-[358px] rounded-lg bg-white"></div>
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

      <footer className="footer p-10 bg-base-200 text-base-content">
        <div className="pl-32 pt-[100px]">
          <div className="flex items-center gap-2">
            <Image
              src={require("../images/logoOurCoffee.png")}
              width="40"
              height="40"
              alt="hazelnut"
              className="rounded-lg"
            />
            <p className="text-2xl font-bold">Our Coffe</p>
          </div>
          <div className="w-[360px] text-lg font-semibold pt-5">
            <p>
              Coffee Shop is a store that sells some good meals, and especially
              coffee. We provide{" "}
            </p>
            <p>high quality beans</p>
          </div>
          <div className="flex gap-5 pt-5">
            <Image
              src={require("../images/fb.png")}
              width="40"
              height="40"
              alt="hazelnut"
              className="rounded-lg"
            />
            <Image
              src={require("../images/twt.png")}
              width="40"
              height="40"
              alt="hazelnut"
              className="rounded-lg"
            />
            <Image
              src={require("../images/instagram.png")}
              width="40"
              height="40"
              alt="hazelnut"
              className="rounded-lg"
            />
          </div>
          <div className="text-[#AFB5C0] text-xl pt-5">
            <p>©2022OurCoffe</p>
          </div>
        </div>

        <div className="pt-[100px] pl-32">
          <span className="footer-title">Product</span>
          <a className="link link-hover">Download </a>
          <a className="link link-hover">Pricing</a>
          <a className="link link-hover">Locations</a>
          <a className="link link-hover">Countries</a>
          <a className="link link-hover">Blog</a>
        </div>

        <div className="pt-[100px]">
          <span className="footer-title">Engage</span>
          <a className="link link-hover">Coffe Shop ? </a>
          <a className="link link-hover">FAQ</a>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
};

export default Profile;
