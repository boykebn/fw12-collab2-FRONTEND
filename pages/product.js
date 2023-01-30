import Image from "next/image";
import Link from "next/link";
import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import http from "../helpers/http";
import withAuthUser from '../components/hoc/withAuthUser'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Product = () => {
  const [product, setProduct] = React.useState([]);
  const [category, setCategory] = React.useState("Favourite Products");

  const url =
    category === "Favourite Products"
      ? "/product"
      : `/product/category/${category}`;

  const getProduct = async () => {
    try {
      const { data } = await http().get(url, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setProduct(data.results);
      // console.log(data.results.price)
    } catch (error) {
      if (error) throw error;
    }
  };

  React.useEffect(() => {
    getProduct();
  }, [category, getProduct]);
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Konten */}
      <div className="grid grid-cols-1 md:grid-cols-[400px_minmax(500px,_1fr)_1px] lg:grid-cols-[500px_minmax(500px,_1fr)_1px]">
        <div className="flex px-[5%] flex-col justify-items items-center gap-[45px] border-r-2 border-[#F8EDE3]">
          <div className="pt-[29px] text-[#7D6E83] font-bold text-[25px]">
            Promo for you
          </div>
          <div className="text-center font-sm">
            <div>Coupons will be updated every weeks.</div>
            <div>Check them out! </div>
          </div>
          <div className="pl-[10%] flex">
            <div className="mt-20">
              {/* Konten Promo */}
              <div className="relative bg-[#7D6E83] w-[284px] h-[338px] rounded-lg">
                <div className="absolute bg-[#D0B8A8] w-[284px] h-[400px] rounded-lg right-4 top-[-10%]">
                  <div className="absolute bg-[#DFD3C3] w-[284px] h-[472px] rounded-lg right-4 top-[-10%] flex flex-col items-center">
                    <Image
                      src={require("../images/spaghetti.png")}
                      width={100}
                      height={100}
                      className="rounded-full pt-[5%]"
                      alt="desc"
                    ></Image>
                    <div className="mt-[30px] font-bold">Beef Spaghetti</div>
                    <div className="font-bold">20% OFF</div>
                    <div className="text-center">
                      <div className="mt-5 px-5">
                        <div>Buy 1 Choco Oreo and get 20% off</div>
                        <div>for Beef Spaghetti</div>
                      </div>
                      <div className="outline outline-1 outline-dashed outline-black mt-[27px]"></div>
                      <div className="font-base pt-[27px]">COUPON CODE</div>
                      <div className="text-[33px] font-bold">FNPR15RG</div>
                      <div className="font-sm pb-[5%]">
                        Valid until October 10th 2020
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Konten Promo end */}
            </div>
          </div>
          <div className="mt-[45px] flex flex-col gap-4">
            <div className="flex gap-4">
              <div className="grow">
                <button className="border-2 border-current hover:bg-black rounded-full w-9 h-9 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 hover:text-white">
                    <path fill-rule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clip-rule="evenodd" />
                  </svg>

                </button>
              </div>
              <div>
                <button className="border-2 border-current hover:bg-black rounded-full w-9 h-9 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 hover:text-white">
                    <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clip-rule="evenodd" />
                  </svg>

                </button>
              </div>
            </div>
            <button className="bg-[#7D6E83] py-5 w-80 rounded-lg text-white">
              Apply Coupons
            </button>
          </div>

          <div className="text-sm pb-[15%]">
            <div className="font-bold">Terms and Condition </div>
            <div> 1. You can only apply 1 coupon per day</div>
            <div>2. It only for dine in</div>
            <div>3. Buy 1 get 1 only for new user</div>
            <div>4. Should make member card to apply coupon</div>
          </div>
        </div>

        <div className="grow pt-[29px] md:w-96 lg:w-full">
          <div className="flex text-sm overflow-x-auto ml-[3%] gap-[35px] md:gap-[68px] md:ml-[10%] md:text-base">
            <button
              onClick={(e) => setCategory(e.target.innerText)}
              className="hover:border-2 hover:border-b-[#7D6E83]"
            >
              Favourite Products
            </button>
            <button
              onClick={(e) => setCategory(e.target.innerText)}
              className="hover:border-2 hover:border-b-[#7D6E83]"
            >
              Coffee
            </button>
            <button
              onClick={(e) => setCategory(e.target.innerText)}
              className="hover:border-2 hover:border-b-[#7D6E83]"
            >
              Non Coffee
            </button>
            <button
              onClick={(e) => setCategory(e.target.innerText)}
              className="hover:border-2 hover:border-b-[#7D6E83]"
            >
              Food
            </button>
            <button
              onClick={(e) => setCategory(e.target.innerText)}
              className="hover:border-2 hover:border-b-[#7D6E83]"
            >
              Add-on
            </button>
          </div>
          {/* Select Option */}
          <div className="flex ml-[3%] mt-5 md:ml-[10%] md:mt-4">
            <div className="grow">
              <select className="select select-bordered w-48 max-w-xs">
                <option disabled selected>Sort</option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
            </div>

            <input type="text" placeholder="Search" className="input input-bordered w-24 max-w-xs pr-3" />
          </div>

          <div className="grid grid-cols-2 md:ml-[3%] justify-center items-center content-center mt-[5%] mb-[10%] gap-[30px] md:grid-cols-2 lg:grid-cols-4">
            {product?.map((product, i) => (
              <div
                key={i}
                className="bg-[#FFFFFF] rounded-lg drop-shadow-xl w-[156px] h-[212px] flex flex-col justify-center items-center"
              >
                <div>
                  <Link href={"/product-details/" + product.id}>
                    {product?.picture ?
                      <Image
                        width={100}
                        height={175}
                        src={product?.picture}
                        alt="desc"
                        className="rounded-full mt-[-15%] w-[100px] h-[100px]"
                      ></Image> :
                      <Image
                        width={100}
                        height={175}
                        src={require("../images/food_vegie.png")}
                        alt="desc"
                        className="rounded-full mt-[-15%]"
                      ></Image>}
                    <div>{product?.name}</div>
                    <div>IDR {Number(product?.price).toLocaleString("id")}</div>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mb-6">
            <div className="flex justify-center">
            <div className="btn-group grid grid-cols-2 gap-3">
              <button className="btn btn-outline">Previous page</button>
              <button className="btn btn-outline">Next</button>
            </div>
            </div>
          </div>

        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </>
  );
};

// export default withAuthUser(Product);
export default Product;
