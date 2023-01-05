import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import http from "../helpers/http";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ManageOrders = () => {
  const [order, setOrder] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    http(token)
      .get("/transaction/confirm")
      .then((res) => setOrder(res.data.results));
  }, []);

  const confirmTransaction = async () => {
    try {
      await http(token).patch(`/transaction/confirm/${order.id}`);
      setSuccessMessage("Order has been done");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar></Navbar>

      <div className="bg-[url('../assets/bg-1.png')] bg-cover bg-no-repeat font-rubik">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col justify-center items-center ml-[10%] pt-[10%]">
            <div className="font-bold text-white text-[40px] drop-shadow-lg">
              Finish your customer order now.
            </div>
            <div className="relative mt-[15%] bg-white w-[350px] h-[524px] rounded-lg drop-shadow-xl">
              <div className="absolute bg-white mt-[-10%] w-[350px] h-[524px] rounded-lg drop-shadow-xl">
                <div className="absolute bg-white mt-[-10%] w-[350px] h-[524px] rounded-lg drop-shadow-xl flex flex-col">
                  {order ? (
                    <div>
                      <div className="text-center pt-[10%]">
                        <div className="font-bold text-[35px]">
                          Delivery Order
                        </div>
                        <div>For {order?.displayName}</div>
                      </div>

                      <div className="flex gap-[33px] px-[5%] mt-[5%]">
                        <div>
                          <Image
                            src={order?.picture}
                            width="90"
                            height="82"
                            className="rounded-lg bg-cover"
                            alt="desc"
                          ></Image>
                        </div>
                        <div>
                          <div>{order?.name}</div>
                          <div>x{order?.quantity}</div>
                          <div>
                            {order?.size === "L"
                              ? "Large"
                              : order?.size === "R"
                              ? "Regular"
                              : "Extra Large"}
                          </div>
                        </div>
                        <div>
                          <div>{order?.price}</div>
                        </div>
                      </div>

                      <div className="outline outline-1 outline-[#D0B8A8] mt-[5%]"></div>
                      <div className="flex flex-col gap-4 px-[5%]">
                        <div className="flex">
                          <div className="grow">SUBTOTAL</div>
                          <div>IDR {order?.subTotal}</div>
                        </div>
                        <div className="flex">
                          <div className="grow">TAX & FEES</div>
                          <div>IDR {order?.tax}</div>
                        </div>
                        <div className="flex">
                          <div className="grow">SHIPPING</div>
                          <div>IDR {order?.shipping}</div>
                        </div>
                      </div>

                      <div className="mt-[45px] px-[5%]">
                        <div className="flex">
                          <div className="grow">TOTAL</div>
                          <div>IDR {order?.totalPrice}</div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center mt-32">No order yet</div>
                  )}
                </div>
              </div>
            </div>

            <button className="flex bg-[#7D6E83] text-white gap-[38px] px-[5%] py-[22px] rounded-lg mt-[54px] mb-[10%]">
              <div>Swipe up to see upcoming orders</div>
              <div>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                  />
                </svg>
              </div>
            </button>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="flex text-white w-[60%] md:w-[50%] pt-[20%]">
              <div className="grow">Address Details</div>
              <div>edit</div>
            </div>
            <div className="bg-white w-[60%] md:w-[50%] rounded-lg px-[42px] py-[30px]">
              <div>Delivery to {order?.address}</div>

              <div className="outline outline-1 outline-[#DFD3C3]"></div>
              <div>{order?.phoneNumberRecipient}</div>
            </div>

            <div className="flex text-white w-[60%] md:w-[50%] pt-[10%]">
              <div className="grow">Payment Method</div>
            </div>
            <div className="bg-white w-[60%] md:w-[50%] rounded-lg px-[42px] py-[30px]">
              <div>
                <div className="flex items-center gap-[11px]">
                  <input
                    type="radio"
                    name="radio-1"
                    className="radio"
                    checked={order?.paymentMethodId == 2 ? true : false}
                  />
                  <div className="h-10 w-10 bg-[#F47B0A] flex justify-center items-center rounded-lg">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      />
                    </svg>
                  </div>
                  <div>Card</div>
                </div>
                <div className="outline outline-1 outline-black mt-[17px]"></div>

                <div className="flex items-center gap-[11px] pt-[17px]">
                  <input
                    type="radio"
                    name="radio-1"
                    className="radio"
                    checked={order?.paymentMethodId == 3 ? true : false}
                  />
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
                  <input
                    type="radio"
                    name="radio-1"
                    className="radio"
                    checked={order?.paymentMethodId == 4 ? true : false}
                  />
                  <div className="h-10 w-10 bg-[#FFBA33] flex justify-center items-center rounded-lg">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <div>Cash on Delivery</div>
                </div>
              </div>
            </div>
            {successMessage ? (
              <div className="alert alert-success shadow-lg my-3 w-[60%] md:w-[50%] ">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-current flex-shrink-0 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>{successMessage}</span>
                </div>
              </div>
            ) : null}
            <button
              onClick={confirmTransaction}
              className="w-[60%] md:w-[50%] bg-[#DFD3C3] py-[27px] rounded-lg mt-[47px] mb-[5%]"
            >
              {" "}
              Mark as done
            </button>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
};

export default ManageOrders;
