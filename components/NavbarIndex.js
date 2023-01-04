import Image from "next/image"
import Link from "next/link";
import logo from "../assets/logoOurCoffee.png";

const NavbarIndex = () => {
  return(
    <>
    <div className="px-5 lg:px-12 py-[45px] flex items-center">
        <div className="flex flex-1 items-center">
          <Image
            src={logo}
            alt="logo"
            className="w-[30px] h-[33px] mr-[15px]"
          />
          <span className="text-[#0B132A] lg:text-[20px] font-bold leading-[23px]">
            Our Coffee
          </span>
        </div>
        <div className=" hidden text-[#4F5665] text-[16px] mr-52 lg:flex gap-10">
          <Link href="/" className="font-bold text-[#7d6e83] mr-[40px]">
            Home
          </Link>
          <Link href="/product" className="mr-[40px] hover:text-[#7d6e83]">
            Product
          </Link>
          <Link
            href="/payment-delivery-cust"
            className="mr-[40px] hover:text-[#7d6e83]"
          >
            Your Cart
          </Link>
          <Link href="/history-cust" className="hover:text-[#7d6e83]">
            History
          </Link>
        </div>
        <div className="flex justify-center items-center gap-5 text-xs lg:text-[16px] font-[600] leading-[19px]">
          <Link href="/login" className="lg:mr-[40px] text-[#0B132A]">
            Login
          </Link>
          <Link
            href="/sign-up"
            className="text-white border-1 bg-[#7d6e83] py-[13px] px-5 lg:px-[45px] rounded-[50px] active:bg-[#544e56]"
          >
            Sign Up
          </Link>
        </div>
      </div>
      </>
  )
}

export default NavbarIndex