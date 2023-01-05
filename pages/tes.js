// KODE PRODUCT SIAPA TAU CONFLICT YAALLAH JANGAN SAMPE TAPI
<>
<div className="bg-profile_bg bg-no-repeat bg-cover pb-[100px] ">
        <div className="pl-32 pt-20 text-white text-2xl font-bold">
          <p>User Profile</p>
        </div>

        <div className="pl-32 pt-20 flex flex-col md:flex-row gap-5 ">
          <div className="rounded-lg bg-white px-5 py-14 border-t border-l border-r border-[12px] border-[#d0b8a8]">
            <div className="flex flex-col md:flex-row justify-center items-end">
              {bio.picture && (
                <Image
                  src={bio?.picture}
                  width="82"
                  height="90"
                  alt="picture"
                  className="rounded-full w-[80px] h-[120px]"
                />
              )}
              <button
                onClick={() => setpicture(true)}
                className=" absolute border-1 w-[30px] h-[30px] bg-[#d0b8a8] rounded-[50%] flex items-center justify-center mr-[-50px]"
              >
                <MdOutlineModeEdit className="w-[18px] h-[20px] " />
              </button>
              <div>
                <ReactModal isOpen={picture} classNamew="w-auto">
                  <div className="flex">
                    <p className="flex-1">Upload Picture</p>
                    <button
                      onClick={() => setpicture(false)}
                      className="text-[20px] text-[#3A3D42]"
                    >
                      X
                    </button>
                  </div>
                  <form onSubmit={upload}>
                    <input type="file" name="picture" />
                    <button
                      type="submit"
                      className="py-[17px] w-full rounded-[20px] bg-[#7d6e83] border-1 font-bold  text-white duration-300"
                    >
                      Save
                    </button>
                  </form>
                </ReactModal>
              </div>
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

          <div className="rounded-lg bg-white flex flex-col md:flex-row py-[17px] px-[30px] border-t border-l border-r border-[12px] border-[#d0b8a8]">
            <div className="w-[340px]">
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
                  {bio.email}
                </span>
                <div className="border-2 border-[#000000]"></div>
              </div>
              <div className="flex flex-col mb-[47px]">
                <span className="text-[#9F9F9F] text-[20px] font-[500] leading-[30px]">
                  Delivery adress :
                </span>
                <span className="text-[20px] font-rubik mb-[9px]">
                  {bio.address}
                </span>
                <div className="border-2 border-[#000000]"></div>
              </div>
            </div>
            <div className="pt-[59px] w-[340px]">
              <div className="flex flex-col mb-[47px]">
                <span className="text-[#9F9F9F] text-[20px] font-[500] leading-[30px]">
                  Mobile number :
                </span>
                <span className="text-[20px] font-rubik leading-[50px]">
                  {bio.phoneNumber}
                </span>
                <div className="border-b border-2 border-[#000000]"></div>
              </div>
            </div>
            {/* <div className="">
              <div className="border-1 w-[30px] h-[30px] bg-[#d0b8a8] rounded-[50%] flex items-center justify-center">
                <MdOutlineModeEdit className="w-[18px] h-[20px] " />
              </div>
            </div> */}
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
                  {bio.displayName}
                </span>
                <div className="border-b border-2 border-[#000000]"></div>
              </div>
              <div className="flex flex-col mb-[25px]">
                <span className="text-[#9F9F9F] text-[20ppx] font-[500] leading-[30px]">
                  First name :
                </span>
                <span className="text-[#000000] text-[20px] font-rubik leading-[50px]">
                  {bio.firstName}
                </span>
                <div className="border-b border-2 border-[#000000]"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-[#9F9F9F] text-[20ppx] font-[500] leading-[30px]">
                  Last name :
                </span>
                <span className="text-[#000000] text-[20px] font-rubik leading-[50px]">
                  {bio.lastName}
                </span>
                <div className="border-b border-2 border-[#000000]"></div>
              </div>
            </div>
            <div className="w-[217px] pt-[67px] ">
              <div className="flex flex-col mb-[34px]">
                <span className="text-[#9F9F9F] text-[20ppx] font-[500] leading-[30px]">
                  YYYY/MM/DD
                </span>
                <span className="text-[#000000] text-[20px] font-rubik leading-[50px]">
                  {bio.birthDate}
                </span>
                <div className="border-b border-2 border-[#000000]"></div>
              </div>
              <div className="flex flex-col mb-[34px]">
                <span className="text-[#9F9F9F] text-[20ppx] font-[500] leading-[30px]">
                  Gender
                </span>
                <span className="text-[#000000] text-[20px] font-rubik leading-[50px]">
                  {bio.gender}
                </span>
                <div className="border-b border-2 border-[#000000]"></div>
              </div>
            </div>
            {/* <div className="">
              <div className="border-1 w-[30px] h-[30px] bg-[#d0b8a8] rounded-[50%] flex items-center justify-center">
                <MdOutlineModeEdit className="w-[18px] h-[20px] " />
              </div>
            </div> */}
          </div>

          <div>
            <div className="w-[330px] text-center">
              <p className="text-white font-semibold text-2xl">
                Do you want to edit profile?
              </p>
            </div>
            <div className="pt-5">
              <button
                href="/edit-profile"
                className="py-[17px] w-full rounded-[20px] bg-[#7d6e83] border-1 font-bold hover:bg-[#d0b8a8] text-white duration-300"
              >
                <Link href="/edit-profile">Edit Profile</Link>
              </button>
            </div>
            {/* <div className="pt-5">
              <button className="py-[17px] w-full rounded-[20px] bg-[#d0b8a8] border-1 font-bold hover:bg-[#7d6e83] hover:text-white duration-300">
                Cancel
              </button>
            </div> */}
            <div className="pt-5">
              <button
                href=""
                className="py-[17px] w-full rounded-[20px] bg-[#7d6e83] border-1 font-bold hover:bg-[#d0b8a8] text-white duration-300"
              >
                <Link href="reset-password">Edit Password</Link>
              </button>
            </div>

            <div className="pt-5">
              <button onClick={handlerLogout} className="btn btn-wide ">
                Log Out
              </button>
            </div>
          </div>
        </div>

      </div>
    </>
    

