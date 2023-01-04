import Image from "next/image";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import cold_brew from "../../images/cold-brew.png";
import http from "../../helpers/http";
import jwtDecode from "jwt-decode";
import { useSelector } from "react-redux";

const ProductDetails = () => {
  const router = useRouter();
  const { pid } = router.query;
  const [productId, setProductId] = useState({});
  const [sizeId, setSizeId] = useState(2)
  const [deliveryMethodId, setDeliveryMethodId] = useState(null) 
  const [time, setTime] = useState(null) 
  const [quantity, setQuantity] = useState(0) 
  const token = useSelector(state => state.auth.token)

  const fetchProductId = async () => {
    try {
      const { data } = await http().get(`/product/details/${pid}?sizeId=${sizeId}`);
      setProductId(data.results);
    } catch (error) {
      if (error) throw error;
    }
  };

  React.useEffect(() => {
    if (pid) {
      fetchProductId();
    }
  }, [pid, sizeId]);

  const checkout = async () => {
    const data = {
      deliveryMethodId,
      time,
      productId: pid,
      sizeId,
      price: productId.price,
      quantity
    }

    try {
      const result = await http(token).post('/transaction', data)

      router.push('/payment-delivery-cust')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      {/* Navbar */}
      <Navbar></Navbar>

      <main className="bg-[#F8EDE3] pt-[52px] pb-[10%]">
        <div className="flex flex-col md:flex-row">
          <div className="ml-[5%]">
            <div className="flex gap-0.5 pl-[5%]">
              <div>Favourite & Promo {">"}</div>
              <div>
                {productId?.nameCategory} {">"}
              </div>
              <div>{productId?.name}</div>
            </div>

            <div className="flex flex-col justify-center items-center mt-[40px]">
              <Image
                src={cold_brew}
                className="rounded-full h-[300px] w-[300px] md:h-[400px] md:w-[400px]"
                alt="desc"
              ></Image>
              <div className="text-center">
                <div className="font-black text-[65px]">{productId?.name}</div>
                <div className="font-medium text-[35px] mb-[42px]">
                  IDR {Number(productId?.price).toLocaleString("id")}
                </div>
                <div className="flex flex-col justify-center items-center mb-[5%] gap-[25px]">
                  <button className="bg-[#DFD3C3] py-5 w-64 md:w-full rounded-lg">
                    Add to Cart
                  </button>
                  <button className="bg-[#7D6E83] py-5 w-64 md:w-full rounded-lg text-white">
                    Ask a staff
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="ml-[20%] md:ml-[10%]">
            <div className="bg-[#FFFFFF] px-[84px] py-[10%] w-80 mr-[5%] md:w-96 rounded-lg">
              <div>
                <div>Delivery only on Monday to </div>
                <div>friday at 1 - 7 pm</div>
              </div>
              <div className="mt-[43px]">
                <div className="break-all">{productId?.description}</div>
              </div>

              <div className="flex flex-col justify-center items-center gap-[42px]">
                <div className="mt-[10%]">Choose a size</div>
                <div className="flex gap-[57px]">
                  <button onClick={() => setSizeId(2)} className="bg-[#7D6E83] hover:bg-[#DFD3C3] focus:bg-[#DFD3C3] w-[50px] h-[50px] rounded-full flex justify-center items-center font-bold text-[20px]">
                    R
                  </button>
                  <button onClick={() => setSizeId(1)} className="bg-[#7D6E83] hover:bg-[#DFD3C3] focus:bg-[#DFD3C3] w-[50px] h-[50px] rounded-full flex justify-center items-center font-bold text-[20px]">
                    L
                  </button>
                  <button onClick={() => setSizeId(3)} className="bg-[#7D6E83] hover:bg-[#DFD3C3] focus:bg-[#DFD3C3] w-[50px] h-[50px] rounded-full flex justify-center items-center font-bold text-[20px]">
                    XL
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center mt-[46px] gap-[10px] mr-[15%] md:mr-[0px] md:gap-[27px]">
              <div>Choose Delivery Method</div>
              <div className="flex gap-5">
                <button onClick={() => setDeliveryMethodId(2)}  className="bg-[#F4F4F8] hover:bg-[#DFD3C3] focus:bg-[#DFD3C3] py-3 rounded-lg px-[26px] drop-shadow-lg">
                  Dine In
                </button>
                <button onClick={() => setDeliveryMethodId(1)} className="bg-[#F4F4F8] hover:bg-[#DFD3C3] focus:bg-[#DFD3C3] py-3 rounded-lg px-[26px] drop-shadow-lg">
                  Home Delivery
                </button>
                <button onClick={() => setDeliveryMethodId(3)} className="bg-[#F4F4F8] hover:bg-[#DFD3C3] focus:bg-[#DFD3C3] py-3 rounded-lg px-[26px] drop-shadow-lg">
                  Pick Up
                </button>
              </div>
            </div>
            <div className="flex justify-center items-center mt-10 mr-[15%] md:mr-[0px]">
              <div>Set Time</div>
              <div>
                <input
                  className="h-11 px-5 pl-6 w-full outline-none bg-[#F8EDE3] border-b-2 border-gray-700 focus:border-[#7D6E83] peer"
                  type="text"
                  placeholder="Enter the time you’ll arrived"
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </main>


      <div className="bg-[#F8EDE3] flex flex-col justify-center items-center md:flex-row gap-5 mb-[-30px] md:mb-[-50px]">
        {/* Button 1 */}
        <div className="w-80 md:w-96 rounded-lg bg-white drop-shadow-xl px-[5%] py-[30px]">
          <div>
            <div className="flex gap-[15px] md:gap-[10px]">
              <div className="grow">
                <div>{productId.name}</div>
                <div>x{quantity} {sizeId === 2 ? 'Reguler' : sizeId === 1 ? 'Large' : 'Extra Large' }</div>
               
              </div>
              <div className="flex justify-center items-center gap-[10px]">
                <button onClick={() => setQuantity(prev => prev + 1)} className="bg-[#7D6E83] flex justify-center items-center rounded-full">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                </button>
                <div>{quantity}</div>
                <button onClick={() => setQuantity(prev => prev === 0 ? prev : prev -1)} className="bg-[#7D6E83] flex justify-center items-center rounded-full">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" /></svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Button 2 */}
        <div>
          <button onClick={checkout} className="w-80 md:w-96 bg-[#7D6E83] py-[5%] px-[5%] rounded-lg">Checkout</button>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default ProductDetails;
