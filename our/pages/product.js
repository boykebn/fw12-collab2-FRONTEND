import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/footer'

const Product = () => {
  return (
    <>
      {/* Navbar */}
      {/* <nav className='flex text-sm py-[5%] md:px-[7%] border-b-2 border-[#F8EDE3]'>
        <div className='flex gap-[15px]'>
          <Image src={require('../images/logoOurCoffee.png')} width="30" height="33" alt="desc" ></Image>
          <div>Our Coffee</div>
        </div>
        <div className='flex flex-1 w-64 md:items-center md:justify-center gap-[41px]'>
          <Link href="/">Home</Link>
          <Link href="/">Product</Link>
          <Link href="">Your Cart</Link>
          <Link href="/">History</Link>
        </div>
        <div className='flex gap-[30px]'>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          <Image src={require('../images/chat.png')} width="30" height="30" alt="desc" ></Image>
          <Image src={require('../images/profile.png')} className="rounded-full" width="30" height="30" alt="desc" ></Image>
        </div>
      </nav> */}

      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/">Product</Link></li>
              <li><Link href="">Your Cart</Link></li>
              <li><Link href="/">History</Link></li>
            </ul>
          </div>
          {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
          <div className='flex ml-[5%] gap-2'>
          <Image src={require('../images/logoOurCoffee.png')} width="30" height="33" alt="desc" ></Image>
          <div>Our Coffee</div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/">Product</Link></li>
            <li><Link href="">Your Cart</Link></li>
            <li><Link href="/">History</Link></li>
          </ul>
        </div>
        <div className="navbar-end px-8">
          <div className='pr-4'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </div>
          <div className="w-10 rounded-full">
            <img src="https://placeimg.com/80/80/people" className='rounded-full' />
          </div>
        </div>
      </div>

      {/* Konten */}
      <div className='flex'>
        <div className='hidden md:flex px-[5%] flex-col justify-items items-center gap-[45px] border-r-2 border-[#F8EDE3]'>
          <div className='pt-[29px] text-[#7D6E83] font-bold text-[25px]'>Promo for you</div>
          <div className='text-center font-sm'>
            <div>Coupons will be updated every weeks.</div>
            <div>Check them out! </div>
          </div>
          <div className='pl-[10%]'>
            <div className='mt-20'>
              <div className='relative bg-[#7D6E83] w-[284px] h-[338px] rounded-lg'>
                <div className='absolute bg-[#D0B8A8] w-[284px] h-[400px] rounded-lg right-4 top-[-10%]'>
                  <div className='absolute bg-[#DFD3C3] w-[284px] h-[472px] rounded-lg right-4 top-[-10%] flex flex-col items-center'>
                    <Image src={require('../images/spaghetti.png')} className="rounded-full pt-[15%]" alt="desc" ></Image>
                    <div className='mt-[30px] font-bold font-[22px]'>Beef Spaghetti</div>
                    <div className='font-bold font-[22px]'>20% OFF</div>
                    <div className='text-center'>
                      <div className='mt-5'>
                        <div>Buy 1 Choco Oreo and get 20% off</div>
                        <div>for Beef Spaghetti</div>
                      </div>
                      <div className='outline outline-1 outline-dashed outline-black mt-[27px]'></div>
                      <div className='font-base pt-[27px]'>COUPON CODE</div>
                      <div className='text-[33px] font-bold'>FNPR15RG</div>
                      <div className='font-sm pb-[5%]'>Valid until October 10th 2020</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className='bg-[#7D6E83] mt-[45px] py-5 w-full mr-[10%] rounded-lg text-white'>Apply Coupons</button>
          <div className='text-sm pb-[15%]'>
            <div className='font-bold'>Terms and Condition </div>
            <div> 1. You can only apply 1 coupon per day</div>
            <div>2. It only for dine in</div>
            <div>3. Buy 1 get 1 only for new user</div>
            <div>4. Should make member card to apply coupon</div>
          </div>
        </div>

        <div className='md:grow pt-[29px]'>
          <div className='flex text-sm overflow-x-auto ml-[5%] gap-[35px] md:gap-[68px] md:ml-[10%] md:text-base'>
            <Link href="/" className='hover:border-2 hover:border-b-[#7D6E83]'>Favourite Products</Link>
            <Link href="/" className='hover:border-2 hover:border-b-[#7D6E83]'>Coffee</Link>
            <Link href="/" className='hover:border-2 hover:border-b-[#7D6E83]'>Non Coffee</Link>
            <Link href="/" className='hover:border-2 hover:border-b-[#7D6E83]'>Foods</Link>
            <Link href="/" className='hover:border-2 hover:border-b-[#7D6E83]'>Add-on</Link>
          </div>

          <div className='flex flex-col gap-[30px] mt-[65px]'>
            <div className='flex md:gap-[35px] md:ml-[10%] md:mr-[10%]'>
              <div className='bg-[#FFFFFF] rounded-lg drop-shadow-xl w-[156px] h-[212px] flex flex-col justify-center items-center'>
                <Image src={require('../images/food_vegie.png')} alt="desc" ></Image>
                <div>Veggie tomato mix</div>
                <div>IDR 34.000</div>
              </div>

              <div className='bg-[#FFFFFF] rounded-lg drop-shadow-xl w-[156px] h-[212px] flex flex-col justify-center items-center'>
                <Image src={require('../images/hazelnut.png')} alt="desc" ></Image>
                <div>Hazelnut Latte</div>
                <div>IDR 25.000</div>
              </div>

              <div className='bg-[#FFFFFF] rounded-lg drop-shadow-xl w-[156px] h-[212px] flex flex-col justify-center items-center'>
                <Image src={require('../images/fried-rice.png')} alt="desc" ></Image>
                <div>Summer fried rice</div>
                <div>IDR 32.000</div>
              </div>

              <div className='bg-[#FFFFFF] rounded-lg drop-shadow-xl w-[156px] h-[212px] flex flex-col justify-center items-center'>
                <Image src={require('../images/ice-latte.png')} alt="desc" ></Image>
                <div>Creamy Ice Latte</div>
                <div>IDR 27.000</div>
              </div>
            </div>

            <div className='flex gap-[35px] ml-[10%] mr-[10%]'>
              <div className='bg-[#FFFFFF] rounded-lg drop-shadow-xl w-[156px] h-[212px] flex flex-col justify-center items-center'>
                <Image src={require('../images/drum-sticks.png')} alt="desc" ></Image>
                <div>Drum Sticks</div>
                <div>IDR 30.000</div>
              </div>

              <div className='bg-[#FFFFFF] rounded-lg drop-shadow-xl w-[156px] h-[212px] flex flex-col justify-center items-center'>
                <Image src={require('../images/salty-rice.png')} alt="desc" ></Image>
                <div>Salty Rice</div>
                <div>IDR 20.000</div>
              </div>

              <div className='bg-[#FFFFFF] rounded-lg drop-shadow-xl w-[156px] h-[212px] flex flex-col justify-center items-center'>
                <Image src={require('../images/fried-rice.png')} alt="desc" ></Image>
                <div>Summer fried rice</div>
                <div>IDR 32.000</div>
              </div>

              <div className='bg-[#FFFFFF] rounded-lg drop-shadow-xl w-[156px] h-[212px] flex flex-col justify-center items-center'>
                <Image src={require('../images/ice-latte.png')} alt="desc" ></Image>
                <div>Creamy Ice Latte</div>
                <div>IDR 27.000</div>
              </div>
            </div>

            <div className='flex gap-[35px] ml-[10%] mr-[10%]'>
              <div className='bg-[#FFFFFF] rounded-lg drop-shadow-xl w-[156px] h-[212px] flex flex-col justify-center items-center'>
                <Image src={require('../images/food_vegie.png')} alt="desc" ></Image>
                <div>Veggie tomato mix</div>
                <div>IDR 34.000</div>
              </div>

              <div className='bg-[#FFFFFF] rounded-lg drop-shadow-xl w-[156px] h-[212px] flex flex-col justify-center items-center'>
                <Image src={require('../images/hazelnut.png')} alt="desc" ></Image>
                <div>Hazelnut Latte</div>
                <div>IDR 25.000</div>
              </div>

              <div className='bg-[#FFFFFF] rounded-lg drop-shadow-xl w-[156px] h-[212px] flex flex-col justify-center items-center'>
                <Image src={require('../images/fried-rice.png')} alt="desc" ></Image>
                <div>Summer fried rice</div>
                <div>IDR 32.000</div>
              </div>

              <div className='bg-[#FFFFFF] rounded-lg drop-shadow-xl w-[156px] h-[212px] flex flex-col justify-center items-center'>
                <Image src={require('../images/ice-latte.png')} alt="desc" ></Image>
                <div>Creamy Ice Latte</div>
                <div>IDR 27.000</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <Footer></Footer>
    </>
  )
}

export default Product