import { Search } from "feather-icons-react/build/IconComponents";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BiCreditCardFront } from "react-icons/bi";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { useSelector } from "react-redux";
import http from "../helpers/http";
import { TbTruckDelivery } from "react-icons/tb";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const PaymentAndDeliveryCust = () => {
  const [profile, setProfile] = useState({});
  const [product, setProduct] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [paymentMethodId, setPaymentMethodId] = useState(0);
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    http(token)
      .get("/profile")
      .then((res) => setProfile(res.data.results));

    http(token)
      .get("/transaction/process")
      .then((res) => setProduct(res.data.results));
  }, []);

  const subTotal = product.price * product.quantity;
  const tax = (subTotal * 10) / 100;
  const shipping = 10000;
  const totalPrice = subTotal + tax + shipping;

  const pay = async () => {
    const data = {
      address: profile.address,
      phoneNumberRecipient: profile.phoneNumber,
      paymentMethodId,
      subTotal,
      tax,
      shipping,
      totalPrice,
    };

    try {
      await http(token).patch(`/transaction/pay/${product.id}`, data);
      setSuccessMessage("Order requested, please wait");
      setErrorMessage("");
    } catch (error) {
      setErrorMessage("Please set a payment method");
      setSuccessMessage("");
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-[url('../assets/bg-1.png')] bg-cover bg-no-repeat font-rubik">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="pl-[15%] md:pl-[10%] pt-[5%]">
            <div className="text-white font-bold text-[40px]">
              Checkout Your Item Now
            </div>
            <div className="bg-white w-8/12 md:w-96 ml-[5%] md:ml-[0px] px-[5%] py-[5%] mt-[10%] rounded-lg">
              <div className="text-center font-bold text-[35px] font-poppins">
                Order Summary
              </div>
              <div className="flex flex-col gap-[19px] mt-[10%]">
                <div className="flex gap-[33px]">
                  <div>
                    <Image
                      src={require("../images/hazelnut.png")}
                      width="90"
                      height="82"
                      className="rounded-lg"
                      alt="desc"
                    ></Image>
                  </div>
                  <div className="w-[170px] text-xl">
                    <p className="">{product.name}</p>
                    <p>x{product.quantity}</p>
                    <p>
                      {product.size === "L"
                        ? "Large"
                        : product.size === "R"
                        ? "Regular"
                        : "Extra Large"}
                    </p>
                  </div>
                  <p className="text-xl flex items-center">
                    IDR {product.price}
                  </p>
                </div>
              </div>

              <div className="outline outline-1 outline-[#D0B8A8] mt-[5%]"></div>
              <div className="flex flex-col gap-3 mt-[5%]">
                <div className="flex">
                  <div className="grow">SUB TOTAL</div>
                  <p>IDR {subTotal}</p>
                </div>
                <div className="flex">
                  <div className="grow">TAX & FEES</div>
                  <div>IDR {tax}</div>
                </div>
                <div className="flex">
                  <div className="grow">SHIPPING</div>
                  <div>IDR {shipping}</div>
                </div>
              </div>
              <div className="flex mt-[5%]">
                <div className="grow">TOTAL</div>
                <div>IDR {totalPrice}</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="flex text-white w-[60%] md:w-[50%] pt-[20%]">
              <div className="grow">Address Details</div>
              <div>edit</div>
            </div>
            <div className="bg-white w-[60%] md:w-[50%] rounded-lg px-[42px] py-[30px]">
              <div> {profile.address}</div>

              <div className="outline outline-1 outline-[#DFD3C3]"></div>
              <div>{profile.phoneNumber}</div>
            </div>

            <div className="flex flex-col text-white w-[60%] md:w-[50%] pt-[10%]">
              <div className="grow">Payment Method</div>
              {successMessage ? (
                <div className="alert alert-success shadow-lg my-3">
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

              {errorMessage ? (
                <div className="alert alert-error shadow-lg my-3">
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
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{errorMessage}</span>
                  </div>
                </div>
              ) : null}
            </div>

            <div className="bg-white w-[60%] md:w-[50%] rounded-lg px-[42px] py-[30px]">
              <div>
                <div className="flex items-center gap-[11px]"  onClick={() => setPaymentMethodId(2)}>
                  <input type="radio" name="radio-1" className="radio"  checked={paymentMethodId === 2 ? true : false}/>
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

                <div className="flex items-center gap-[11px] pt-[17px]"  onClick={() => setPaymentMethodId(3)}>
                  <input type="radio" name="radio-1" className="radio"  checked={paymentMethodId === 3 ? true : false}/>
                  <div className="h-10 w-10 bg-[#895537] flex justify-center items-center rounded-lg">
                    <Image
                      src={require("../images/acc.png")}
                      alt="desc"
                    ></Image>
                  </div>
                  <div>Bank Account</div>
                </div>
                <div className="outline outline-1 outline-black mt-[17px]"></div>

                <div className="flex items-center gap-[11px] pt-[17px]"  onClick={() => setPaymentMethodId(4)}>
                  <input type="radio" name="radio-1" className="radio"  checked={paymentMethodId === 4 ? true : false}/>
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
            <button onClick={pay} className="w-[60%] md:w-[50%] bg-[#DFD3C3] py-[27px] rounded-lg mt-[47px] mb-[5%]">
              {" "}
              Confirm and Pay
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PaymentAndDeliveryCust;
