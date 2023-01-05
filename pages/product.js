import Image from "next/image";
import Link from "next/link";
import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import http from "../helpers/http";
import withAuthUser from '../components/hoc/withAuthUser'

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
  }, [category]);
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Konten */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex px-[5%] flex-col justify-items items-center gap-[45px] border-r-2 border-[#F8EDE3]">
          <div className="pt-[29px] text-[#7D6E83] font-bold text-[25px]">
            Promo for you
          </div>
          <div className="text-center font-sm">
            <div>Coupons will be updated every weeks.</div>
            <div>Check them out! </div>
          </div>
          <div className="pl-[10%]">
            <div className="mt-20">
              <div className="relative bg-[#7D6E83] w-[284px] h-[338px] rounded-lg">
                <div className="absolute bg-[#D0B8A8] w-[284px] h-[400px] rounded-lg right-4 top-[-10%]">
                  <div className="absolute bg-[#DFD3C3] w-[284px] h-[472px] rounded-lg right-4 top-[-10%] flex flex-col items-center">
                    <Image
                      src={require("../images/spaghetti.png")}
                      width={100}
                      height={100}
                      className="rounded-full pt-[15%]"
                      alt="desc"
                    ></Image>
                    <div className="mt-[30px] font-bold">Beef Spaghetti</div>
                    <div className="font-bold">20% OFF</div>
                    <div className="text-center">
                      <div className="mt-5">
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
            </div>
          </div>
          <button className="bg-[#7D6E83] mt-[45px] py-5 w-full mr-[10%] rounded-lg text-white">
            Apply Coupons
          </button>
          
          <div className="text-sm pb-[15%]">
            <div className="font-bold">Terms and Condition </div>
            <div> 1. You can only apply 1 coupon per day</div>
            <div>2. It only for dine in</div>
            <div>3. Buy 1 get 1 only for new user</div>
            <div>4. Should make member card to apply coupon</div>
          </div>
        </div>

        <div className="grow pt-[29px]">
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

          <div className="grid grid-cols-2 ml-[5%] justify-items-center content-center mt-[5%] mb-[10%] gap-[30px] md:grid-cols-4">
            {product?.map((product, i) => (
              <div
                key={i}
                className="bg-[#FFFFFF] rounded-lg drop-shadow-xl w-[156px] h-[212px] flex flex-col justify-center items-center"
              >
                <Link href={"/product-details/" + product.id}>
                  {product?.picture ? 
                  <Image
                  width={100}
                  height={100}
                  src={product?.picture}
                  alt="desc"
                  className="rounded-full"
                ></Image> : 
                <Image
                width={100}
                height={100}
                src={require("../images/food_vegie.png")}
                alt="desc"
                className="rounded-full"
              ></Image>}
                  <div>{product?.name}</div>
                  <div>IDR {Number(product?.price).toLocaleString("id")}</div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default withAuthUser(Product);
