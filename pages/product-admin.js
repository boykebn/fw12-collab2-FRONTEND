import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineModeEdit } from "react-icons/md";
import Footer from "../components/footer";
import NavbarAdmin from "../components/NavbarAdmin";
import http from "../helpers/http";
import { useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import withAuth from "../components/hoc/withAuth";

const Product = () => {
  const token = useSelector((state) => state?.auth?.token);
  const [product, setProduct] = React.useState([]);
  const [category, setCategory] = React.useState("");
  const [page, setPage] = React.useState(1);
  const [limit, setLimit] = React.useState(null);
  const [search, setSearch] = React.useState("");

  const getProduct = async () => {
    try {
      const { data } = await http().get(
        `/product?category=${category}&page=${page}&limit=${limit}&search=${search}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setProduct(data.results);
    } catch (error) {
      if (error) throw error;
    }
  };

  React.useEffect(() => {
    getProduct();
  }, [category, page, search, getProduct]);

  // Get promo
  const promoId = 53
  const [promo, setPromo] = React.useState({})
  React.useEffect(()=>{
    getPromo().then((response)=>{
      setPromo(response?.data?.results)
    })
  }, [getPromo])

  const getPromo = async () => {
    const response = await http(token).get("promo/" + promoId);
    return response;
  };
  console.log(promo);
  // Format date
  const currentMonth = new Date(promo?.endDate);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = months[currentMonth.getMonth()];
  const date = new Date(promo?.endDate).getDate();
  const year = new Date(promo?.endDate).getFullYear();
  const expiredDate = `${month} ${date}th ${year}`;

  return (
    <>
      {/* Navbar */}
      <NavbarAdmin />

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
              <div className="relative bg-[#7D6E83] w-[284px] h-[338px] rounded-lg">
                <div className="relative border-1 w-[30px] h-[30px] rounded-full bg-[#DFD3C3] flex justify-center items-center ml-[250px]">
                  <div className=" w-[20px] h-[20px] rounded-full flex items-center justify-center">
                    <MdOutlineModeEdit clasName=" w-[20px] h-[20px]" />
                  </div>
                </div>
                <div className="absolute bg-[#D0B8A8] w-[284px] h-[400px] rounded-lg right-4 top-[-10%]">
                  <div className="absolute border-1 w-[30px] h-[30px] rounded-full bg-[#DFD3C3] flex justify-center items-center ml-[250px] mt-[10px]">
                    <div className=" w-[20px] h-[20px] rounded-full flex items-center justify-center">
                      <MdOutlineModeEdit clasName=" w-[20px] h-[20px]" />
                    </div>
                  </div>
                  <div className="absolute bg-[#DFD3C3] w-[284px] h-[472px] rounded-lg right-4 top-[-10%] flex flex-col items-center">
                    <Link href={"/edit-promo/" + promoId}>
                      <div className="absolute border-1 w-[30px] h-[30px] rounded-full bg-[#7D6E83] flex justify-center items-center ml-[100px] mt-[10px]">
                        <div className=" w-[20px] h-[20px] rounded-full flex items-center justify-center">
                          <MdOutlineModeEdit clasName=" w-[20px] h-[20px]" />
                        </div>
                      </div>
                    </Link>
                    <Image
                      src={promo?.picture}
                      width={100}
                      height={100}
                      className="rounded-full pt-[15%]"
                      alt="desc"
                    ></Image>
                    <div className="mt-[30px] font-bold">{promo?.name}</div>
                    <div className="font-bold">{promo?.discount} OFF</div>
                    <div className="text-center">
                      <div className="mt-5 px-5">
                        <div>{promo?.description}</div>
                      </div>
                      <div className="outline outline-1 outline-dashed outline-black mt-[27px]"></div>
                      <div className="font-base pt-[27px]">COUPON CODE</div>
                      <div className="text-[33px] font-bold">{promo?.code}</div>
                      <div className="font-sm pb-[5%]">
                        Valid until {expiredDate}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
            <div>1. You can only apply 1 coupon per day</div>
            <div>2. It only for dine in</div>
            <div>3. Buy 1 get 1 only for new user</div>
            <div>4. Should make member card to apply coupon</div>
          </div>

          <Link href="/new-promo" className="w-full">
            <button className="bg-[#7D6E83] mb-[115px] py-5 w-full mr-[10%] rounded-lg text-white font-bold">
              Add new promo
            </button>
          </Link>
        </div>


        <div className="grow pt-[29px] md:w-96 lg:w-full">
          <div className="flex justify-end mr-[3%]">
            <div>
              <input
                name="category"
                className="py-3 pl-3 sm:pr-5 text-xs rounded-xl mb-5 bg-[#fcfdfe] focus:outline-none border-2 border-[#DEDEDE] justify-end"
                placeholder="Search..."
                onChange={(e) => setSearch(e.target.value)}
              />
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

          <div className="grid grid-cols-2 ml-[5%] justify-items-center content-center mt-[5%] mb-[10%] gap-[30px] md:grid-cols-4">
            {product?.map((product, i) =>
              product ? (
                <div
                  key={i}
                  className="bg-[#FFFFFF] rounded-lg drop-shadow-xl w-[156px] h-[212px] flex flex-col justify-center items-center"
                >
                  <Link href={"/admin-product-details/" + product?.id}>
                    {product?.picture ? (
                      <Image
                        src={product?.picture}
                        width={100}
                        height={100}
                        className="rounded-full"
                        alt="desc"
                      ></Image>
                    ) : (
                      <Image
                        src={require("../images/food_vegie.png")}
                        width={100}
                        height={100}
                        className="rounded-full"
                        alt="desc"
                      ></Image>
                    )}
                    <div className="w-[117px] flex justify-center items-center">
                      <div className="text-center font-bold text-xl">
                        {product?.name}
                      </div>
                    </div>
                    <div className="flex justify-center items-center font-semibold">
                      IDR {Number(product?.price).toLocaleString("id")}
                    </div>
                  </Link>
                  <Link href={"edit-product/" + product?.id}>
                    <div className="absolute border-1 w-[30px] h-[30px] rounded-full bg-[#DFD3C3] flex justify-center items-center ml-[50px]">
                      <div className=" w-[20px] h-[20px] rounded-full flex items-center justify-center">
                        <MdOutlineModeEdit clasName=" w-[20px] h-[20px]" />
                      </div>
                    </div>
                  </Link>
                </div>
              ) : (
                // eslint-disable-next-line react/jsx-key
                <Skeleton className="h-[500px]" />
              )
            )}
          </div>

          <div className='flex justify-center gap-3 mb-5'>
            <div onClick={() => setPage(prev => prev === 1 ? prev : prev - 1)}>
              <button className='bg-[#7D6E83] px-5 py-3 rounded text-white'>Prev</button>
            </div>
            <div className='bg-[#7D6E83] px-3 py-3 rounded text-white'>{page}</div>
            <div onClick={() => setPage(prev => prev + 1)}>
               <button className='bg-[#7D6E83] px-5 py-3 rounded text-white'>Next</button>
            </div>
          </div>

          <Link href="/new-product">
            <div className="flex justify-center items-center">
              <button className="bg-[#7D6E83] mt-[45px] py-5 w-[729px] mr-[10%] rounded-lg text-white font-bold">
                Add new product
              </button>
            </div>
          </Link>

        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </>
  );
};

// export default withAuth(Product);
export default Product;
