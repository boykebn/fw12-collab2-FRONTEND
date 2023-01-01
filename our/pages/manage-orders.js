import Image from "next/image"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
const ManageOrders = () => {
  return (
    <>
      <Navbar></Navbar>

      {/* Konten */}
      <div className="bg-[url('../assets/bg-1.png')] bg-cover bg-no-repeat font-rubik">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="ml-[10%]">
            <div className="font-bold text-white text-[40px] drop-shadow-lg">Finish your customer order now.</div>
            <div className="relative mt-[15%] bg-white w-[350px] h-[524px] rounded-lg drop-shadow-xl">
              <div className="absolute bg-white mt-[-10%] w-[350px] h-[524px] rounded-lg drop-shadow-xl">
                <div className="absolute bg-white mt-[-10%] w-[350px] h-[524px] rounded-lg drop-shadow-xl flex flex-col">
                  <div className="text-center pt-[10%]">
                    <div>Delivery Order</div>
                      <div>For Zulaikha</div>
                  </div>

                  <div className="flex gap-[33px]">
                    <div>
                      <Image src={require("../images/hazelnut.png")} width="90" height="82" className="rounded-lg" alt="desc"></Image>
                    </div>
                    <div>
                      <div>Hazelnut Latte</div>
                      <div>x1</div>
                      <div>Regular</div>
                    </div>
                    <div>
                      <div>24.0</div>
                    </div>
                  </div>

                  <div className="flex gap-[33px]">
                    <div>
                      <Image src={require("../images/chikenFW.png")} width="90" height="82" className="rounded-lg" alt="desc"></Image>
                    </div>
                    <div>
                      <div>Chicken Fire Wings</div>
                      <div>x2</div>
                      <div></div>
                    </div>
                    <div>
                      <div>30.0</div>
                    </div>
                  </div>

                  <div className="outline outline-1 outline-[#D0B8A8]"></div>
                  <div>
                    <div className="flex">
                      <div className="grow">SUBTOTAL</div>
                      <div>IDR 120.000</div>
                    </div>
                    <div className="flex">
                      <div className="grow">TAX & FEES</div>
                      <div>IDR 20.000</div>
                    </div>
                    <div className="flex">
                      <div className="grow">SHIPPING</div>
                      <div>IDR 10.000</div>
                    </div>
                  </div>

                  <div>
                    <div className="flex">
                      <div className="grow">TOTAL</div>
                      <div>IDR 150.000</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div>
            <div className="flex text-white w-[50%] pt-[20%]">
              <div className="grow">Address Details</div>
              <div>edit</div>
            </div>
            <div className="bg-white w-[50%] rounded-lg px-[42px] py-[30px]">
              <div>Delivery to Iskandar Street</div>
              <div className="outline outline-1 outline-[#DFD3C3]"></div>
              <div>Km 5 refinery road oppsite re
                public road, effurun, Jakarta</div>
              <div className="outline outline-1 outline-[#DFD3C3]"></div>
              <div>+62 81348287878</div>
            </div>

            <div className="flex text-white w-[50%] pt-[10%]">
              <div className="grow">Payment Method</div>
            </div>
            <div className="bg-white w-[50%] rounded-lg px-[42px] py-[30px]">
              <div>
                <div className="flex items-center gap-[11px]">
                  <input type="radio" name="radio-1" className="radio" />
                  <div className="h-10 w-10 bg-[#F47B0A] flex justify-center items-center rounded-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                  </div>
                  <div>Card</div>
                </div>
                <div className="outline outline-1 outline-black mt-[17px]"></div>

                <div className="flex items-center gap-[11px] pt-[17px]">
                  <input type="radio" name="radio-1" className="radio" />
                  <div className="h-10 w-10 bg-[#895537] flex justify-center items-center rounded-lg">
                    <Image
                      src={require("../images/acc.png")}
                      alt="desc"
                    ></Image>
                  </div>
                  <div>Bank Account</div>
                </div>
                <div className="outline outline-1 outline-black mt-[17px]"></div>

                <div className="flex items-center gap-[11px] pt-[17px]">
                  <input type="radio" name="radio-1" className="radio" />
                  <div className="h-10 w-10 bg-[#FFBA33] flex justify-center items-center rounded-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                  </div>
                  <div>Cash on Delivery</div>
                </div>
              </div>
            </div>
            <button className="w-[50%] bg-[#DFD3C3] py-[27px] text-white rounded-lg mt-[47px]"> Mark as done</button>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  )
}

export default ManageOrders