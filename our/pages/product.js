import Image from 'next/image'
import Link from 'next/link'

const Product = () => {
  return (
    <>
      {/* Navbar */}
      <nav className='flex px-[7%]'>
        <div className='flex border-2 border-black gap-[15px]'>
          <Image src={require('../images/logoOurCoffee.png')} width="30" height="33" alt="desc" ></Image>
          <div>Our Coffee</div>
        </div>
        <div className='flex flex-1 w-64 items-center justify-center border-2 border-black gap-[41px]'>
          <Link href="/">Home</Link>
          <Link href="/">Product</Link>
          <Link href="">Your Cart</Link>
          <Link href="/">History</Link>
        </div>
        <div className='flex border-2 border-black gap-[30px]'>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          <Image src={require('../images/chat.png')} width="30" height="30" alt="desc" ></Image>
          <Image src={require('../images/profile.png')} className="rounded-full" width="30" height="30" alt="desc" ></Image>
        </div>
      </nav>

      {/* Konten */}
      <div className='flex'>

        <div className='px-[5%] flex flex-col justify-items items-center gap-[45px]'>
          <div className='pt-[29px]'>Promo for you</div>
          <div className='text-center'>
            <div>Coupons will be updated every weeks.</div>
            <div>Check them out! </div>
          </div>
          <div className='mt-20'>
            <div className='relative bg-[#7D6E83] w-[284px] h-[338px] rounded-lg'>
              <div className='absolute bg-[#D0B8A8] w-[284px] h-[400px] rounded-lg right-4 top-[-10%]'>
                <div className='absolute bg-[#DFD3C3] w-[284px] h-[472px] rounded-lg right-4 top-[-10%] flex flex-col justify-center items-center'>
                  <Image src={require('../images/spaghetti.png')} className="rounded-full" alt="desc" ></Image>
                  <div>Beef Spaghetti</div>
                  <div>20% OFF</div>
                  <div>
                    <div>Buy 1 Choco Oreo and get 20% off</div>
                    <div>for Beef Spaghetti</div>
                    <div className='outline outline-1 outline-dashed outline-black'></div>
                    <div>COUPON CODE</div>
                    <div>FNPR15RG</div>
                    <div>Valid untill October 10th 2020</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='border-2 border-red-700 grow pt-[29px]'>
          <div className='flex gap-[68px] ml-[10%]'>
            <div>Favourite Products</div>
            <div>Coffee</div>
            <div>Non Coffee</div>
            <div>Foods</div>
            <div>Add-on</div>
          </div>

          <div className='flex flex-col gap-[30px]'>
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
    </>
  )
}

export default Product