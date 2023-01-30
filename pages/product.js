import Image from "next/image";
import Link from "next/link";
import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import http from "../helpers/http";
import withAuthUser from '../components/hoc/withAuthUser'

const Product = () => {
  const [product, setProduct] = React.useState([]);
  const [category, setCategory] = React.useState("");
  const [page, setPage] = React.useState(1)
  const [limit, setLimit] = React.useState(null)
  const [search, setSearch] = React.useState('')

  const getProduct = async () => {
    try {
      const { data } = await http().get(`/product?category=${category}&page=${page}&limit=${limit}&search=${search}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setProduct(data.results);
    } catch (error) {
      if (error) throw error;
    }
  };

  React.useEffect(() => {
    getProduct();
  }, [category, page, search]);
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
          <div className="pl-[10%]">
            <div className="mt-20">
              <div className="relative bg-[#7D6E83] w-[284px] h-[338px] rounded-lg">
                <div className="absolute bg-[#D0B8A8] w-[284px] h-[400px] rounded-lg right-4 top-[-10%]">
                  <div className="absolute bg-[#DFD3C3] w-[284px] h-[472px] rounded-lg right-4 top-[-10%] flex flex-col items-center border-[1px] border-black">
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
            </div>
          </div>
          <button className="bg-[#7D6E83] mt-[45px] py-5 w-80 rounded-lg text-white">
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

        <div className="grow pt-[29px] md:w-96 lg:w-full">
          <div className="flex justify-end mr-[3%]">
            <div>
              <input name='category' className="py-3 pl-3 sm:pr-5 text-xs rounded-xl mb-5 bg-[#fcfdfe] focus:outline-none border-2 border-[#DEDEDE] justify-end" placeholder='Search...' onChange={(e) => setSearch(e.target.value)}/>
            </div>
          </div>
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

          <div className="grid grid-cols-2 md:ml-[5%] justify-items-center content-center mt-[5%] mb-[10%] gap-[30px] md:grid-cols-2 lg:grid-cols-4">
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

          <div className='flex justify-center gap-3'>
            <div onClick={() => setPage(prev => prev === 1 ? prev : prev - 1)}>
              <button className='bg-[#7D6E83] px-5 py-3 rounded text-white'>Prev</button>
            </div>
            <div className='bg-[#7D6E83] px-3 py-3 rounded text-white'>{page}</div>
            <div onClick={() => setPage(prev => prev + 1)}>
               <button className='bg-[#7D6E83] px-5 py-3 rounded text-white'>Next</button>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default withAuthUser(Product);
