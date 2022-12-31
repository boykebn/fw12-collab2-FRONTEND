import Image from 'next/image'
import Link from 'next/link'

const Product = () => {
  return (
    <>
      {/* Navbar */}
      <nav className='flex px-[7%] py-[5%] border-b-2 border-[#F8EDE3]'>
        <div className='flex gap-[15px]'>
          <Image src={require('../images/logoOurCoffee.png')} width="30" height="33" alt="desc" ></Image>
          <div>Our Coffee</div>
        </div>
        <div className='flex flex-1 w-64 items-center justify-center gap-[41px]'>
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
      </nav>

      {/* Konten */}
      <div className='flex'>
        <div className='px-[5%] flex flex-col justify-items items-center gap-[45px] border-r-2 border-[#F8EDE3]'>
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

        <div className='grow pt-[29px]'>
          <div className='flex gap-[68px] ml-[10%]'>
            <Link href="/" className='hover:border-2 hover:border-b-[#7D6E83]'>Favourite Products</Link>
            <Link href="/" className='hover:border-2 hover:border-b-[#7D6E83]'>Coffee</Link>
            <Link href="/" className='hover:border-2 hover:border-b-[#7D6E83]'>Non Coffee</Link>
            <Link href="/" className='hover:border-2 hover:border-b-[#7D6E83]'>Foods</Link>
            <Link href="/" className='hover:border-2 hover:border-b-[#7D6E83]'>Add-on</Link>
          </div>

          <div className='flex flex-col gap-[30px] mt-[65px]'>
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
      <footer className='bg-[#F8EDE3]'>
        <div className='flex py-[5%] px-[10%]'>
          <div className='grow'>
            <div className='flex gap-[15px]'>
              <Image src={require('../images/logoOurCoffee.png')} height="33" width="30" alt="desc" ></Image>
              <div>Our Coffee</div>
            </div>
            <div className='text-base text-[#4F5665] pl-[4px] mt-[26px]'>
              <div>Coffee Shop is a store that sells some good</div>
              <div>meals, and especially coffee. We provide</div>
              <div>high quality beans</div>
            </div>
            <div className='flex gap-5 mt-[45px]'>
              <div className='bg-[#7D6E83] w-[33px] h-[33px] rounded-full flex items-center justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-3 h-3 text-white"><path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" /></svg>
              </div>

              <div className='bg-[#7D6E83] w-[33px] h-[33px] rounded-full flex items-center justify-center'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-3 h-3 text-white"><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>
              </div>

              <div className='bg-[#7D6E83] w-[33px] h-[33px] rounded-full flex items-center justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-3 h-3 text-white"><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
              </div>
            </div>
          </div>

          <div className='px-[10%]'>
            <div className='font-medium text-lg'>Product</div>
            <div>Download </div>
            <div>Product</div>
            <div>Pricing</div>
            <div>Locations</div>
            <div>Countries</div>
          </div>

          <div>
            <div className='font-medium text-lg'>Engage</div>
            <div>Our Coffee </div>
            <div>FAQ</div>
            <div>About Us</div>
            <div>Privacy Policy</div>
            <div>Terms of Service</div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Product