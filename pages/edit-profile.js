import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { MdOutlineModeEdit } from "react-icons/md";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import http from "../helpers/http";
import { logout as logoutAction } from "../redux/reducers/auth";
import Router, { useRouter } from "next/router";
import Link from "next/link";
import user from "../assets/user.png";
const EditProfile = () => {
  const token = useSelector((state) => state.auth.token);
  const router = useRouter;
  const [picture, setpicture] = useState(false);
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

  // Upload Picture
  const upload = async (e) => {
    e.preventDefault();
    const file = e.target.picture.files[0];
    if (file?.size > 1024 * 1024 * 2) {
      window.alert("File too large");
    } else {
      try {
        const form = new FormData();
        form.append("picture, file");
        const { data } = await axios.patch(
          "https://fw12-collab2-backend.vercel.app/profile",
          form,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        window.alert(data.message);
      } catch (err) {
        window.alert(err.response.data.message);
      }
    }
  };

  // Edit Profile
  const [alertSuccess, setAlertSuccess] = useState(false);
  const UpdateProfile = async (e) => {
    e.preventDefault();
    const values = {
      email: e.target.email.value,
      phoneNumber: e.target.phoneNumber.value,
      address: e.target.address.value,
      displayName: e.target.displayName.value,
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      birthDate: e.target.birthDate.value,
      gender: e.target.gender.value,
    };
    console.log(values.phoneNumber);
    console.log(e.target.gender.value);
    await http(token).patch("/profile/", values);
    setAlertSuccess(true);
  };

  // Back
  const back = () => {
    router.push("/profile");
  };
  return (
    <div className="max-w-full max-h-full font-poppins">
      <Navbar />

      <div className="bg-profile_bg bg-no-repeat bg-cover pb-[100px] ">
        <div className="pl-3 md:pl-32 pt-20 text-white text-2xl font-bold">
          <p>Edit Profile</p>
        </div>

        <div className="pl-3 pr-3 md:pr-0 md:pl-32 pt-20 md:flex gap-5 ">
          <div className="mb-3 md:mb-0 md:w-[310px] md:h-[358px] rounded-lg bg-white px-5 py-14 border-t border-l border-r border-[12px] border-[#d0b8a8]">
            <div className="flex justify-center items-end">
              {bio?.picture ? (
                <Image
                  src={bio?.picture}
                  width="82"
                  height="90"
                  alt="picture"
                  className="rounded-full w-[80px] h-[120px]"
                />
              ) : (
                <Image
                  src={user}
                  width="82"
                  height="90"
                  alt="picture"
                  className="rounded-full w-[80px] h-[120px]"
                />
              )}
            </div>

            <div className="flex flex-col justify-center items-center">
              <p className="text-xl font-bold pb-2 pt-4">{bio.displayName}</p>
              <p>{bio.email}</p>
              <p className="text-[#4F5665] text-lg pt-10">
                Has been ordered {bio.totalOrder} products
              </p>
            </div>
            {/* <div className='border w-[310px] h-2 rounded-lg '></div> */}
          </div>

          <form
            onSubmit={UpdateProfile}
            className=" rounded-lg bg-white md:flex py-[17px] px-[30px] border-t border-l border-r border-[12px] border-[#d0b8a8]"
          >
            <div className="w-[340px] mr-[36px]">
              <div className="mb-[21px]">
                <span className="text-[#4F5665] text-[25px] font-bold">
                  Edit Profile
                </span>
              </div>

              <div className="flex flex-col mb-[47px]">
                <span className="text-[#9F9F9F] text-[20px] font-[500] leading-[30px] ">
                  Email address :
                </span>
                <input
                  name="email"
                  defaultValue={bio.email}
                  className="text-[20px] font-rubik leading-[50px] focus:outline-none"
                />
                <div className="border-b border-2 border-[#000000]"></div>
              </div>
              <div className="flex flex-col mb-[47px]">
                <span className="text-[#9F9F9F] text-[20px] font-[500] leading-[30px]">
                  Delivery adress :
                </span>
                <input
                  name="address"
                  defaultValue={bio.address}
                  className="text-[20px] font-rubik leading-[50px] focus:outline-none"
                />

                <div className="border-b border-2 border-[#000000]"></div>
              </div>
              <div className="mb-[29px]">
                <span className="text-[#4F5665] text-[25px] font-bold">
                  Details
                </span>
              </div>
              <div className="flex flex-col mb-[25px]">
                <span className="text-[#9F9F9F] text-[20ppx] font-[500] leading-[30px]">
                  Display name :
                </span>
                <input
                  name="displayName"
                  defaultValue={bio.displayName}
                  className="text-[#000000] text-[20px] font-rubik leading-[50px] focus:outline-none"
                />

                <div className="border-b border-2 border-[#000000]"></div>
              </div>
              <div className="flex flex-col mb-[25px]">
                <span className="text-[#9F9F9F] text-[20ppx] font-[500] leading-[30px]">
                  First name :
                </span>
                <input
                  name="firstName"
                  defaultValue={bio.firstName}
                  className="text-[#000000] text-[20px] font-rubik leading-[50px] focus:outline-none"
                />

                <div className="border-b border-2 border-[#000000]"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-[#9F9F9F] text-[20ppx] font-[500] leading-[30px]">
                  Last name :
                </span>
                <input
                  name="lastName"
                  defaultValue={bio.lastName}
                  className="text-[#000000] text-[20px] font-rubik leading-[50px] focus:outline-none"
                />

                <div className="border-b border-2 border-[#000000]"></div>
              </div>
              <div className="hidden md:block pt-5">
                <button
                  type="submit"
                  className="py-[17px] w-full rounded-[20px] bg-[#d0b8a8] border-1 font-bold hover:bg-[#7d6e83] hover:text-white duration-300"
                >
                  Save Change
                </button>
              </div>
              <div className="hidden md:block pt-5">
                <button className="py-[17px] w-full rounded-[20px] bg-[#7d6e83] border-1 font-bold  text-white duration-300">
                  <Link href="/profile">Back</Link>
                </button>
              </div>
              {alertSuccess ? (
                <div className="hidden md:block alert alert-success shadow-lg mt-8">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="stroke-current flex-shrink-0 h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Profile Updated</span>
                  </div>
                </div>
              ) : (
                false
              )}
            </div>

            <div className="pt-[59px] w-[340px]">
              <div className="flex flex-col mb-[47px]">
                <span className="text-[#9F9F9F] text-[20px] font-[500] leading-[30px]">
                  Mobile number :
                </span>
                <input
                  name="phoneNumber"
                  defaultValue={bio.phoneNumber}
                  type="number"
                  className="text-[20px] font-rubik leading-[50px] focus:outline-none"
                />

                <div className="border-b border-2 border-[#000000]"></div>
              </div>
              <div className="flex flex-col mb-[40px]">
                <span className="text-[#9F9F9F] text-[20ppx] font-[500] leading-[30px]">
                  DD/MM/YY
                </span>
                <input
                  name="birthDate"
                  type="date"
                  defaultValue={bio.birthDate}
                  className="text-[#000000] text-[20px] font-rubik leading-[50px] focus:outline-none"
                />

                <div className="border-b border-2 border-[#000000]"></div>
              </div>
              <div className="flex flex-col ">
                <span className="text-[#9F9F9F] text-[20px] font-[500] leading-[30px]">
                  Gender :
                </span>
                <select
                  name="gender"
                  defaultValue={bio.gender}
                  className="text-[20px] font-rubik leading-[50px] focus:outline-none"
                >
                  <option value="Male" className="">
                    Male
                  </option>
                  <option value="Female">Female</option>
                </select>
                <div className="border-b border-2 border-[#000000]"></div>
              </div>
            </div>
            <div className="md:hidden pt-5">
              <button
                type="submit"
                className="py-[17px] w-full rounded-[20px] bg-[#d0b8a8] border-1 font-bold hover:bg-[#7d6e83] hover:text-white duration-300"
              >
                Save Change
              </button>
            </div>
            <div className="md:hidden pt-5">
              <button className="py-[17px] w-full rounded-[20px] bg-[#7d6e83] border-1 font-bold  text-white duration-300">
                <Link href="/profile">Back</Link>
              </button>
            </div>
            {alertSuccess ? (
              <div className="md:hidden alert alert-success shadow-lg mt-8">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-current flex-shrink-0 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Profile Updated</span>
                </div>
              </div>
            ) : (
              false
            )}
          </form>
        </div>
        {/* 
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
            {/* <div className="">
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
              <button
                onClick={handlerLogout}
                className="btn btn-wide py-[17px]"
              >
                Log Out
              </button>
            </div>
          </div>
        </div> */}
      </div>

      <Footer />
    </div>
  );
};

export default EditProfile;
