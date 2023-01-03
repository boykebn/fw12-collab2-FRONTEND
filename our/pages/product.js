import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/footer'
import Navbar from '../components/navbar'

const Product = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar/>

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
                    <div className='mt-[30px] font-bold'>Beef Spaghetti</div>
                    <div className='font-bold'>20% OFF</div>
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
          <div className='flex text-sm overflow-x-auto ml-[3%] gap-[35px] md:gap-[68px] md:ml-[10%] md:text-base'>
            <Link href="/" className='hover:border-2 hover:border-b-[#7D6E83]'>Favourite Products</Link>
            <Link href="/" className='hover:border-2 hover:border-b-[#7D6E83]'>Coffee</Link>
            <Link href="/" className='hover:border-2 hover:border-b-[#7D6E83]'>Non Coffee</Link>
            <Link href="/" className='hover:border-2 hover:border-b-[#7D6E83]'>Foods</Link>
            <Link href="/" className='hover:border-2 hover:border-b-[#7D6E83]'>Add-on</Link>
          </div>

          <div className='grid grid-cols-2 ml-[5%] justify-items-center content-center mt-[5%] mb-[10%] gap-[30px] md:grid-cols-4'>
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

      {/* FOOTER */}
      <Footer/>
    </>
  )
}

export default Product