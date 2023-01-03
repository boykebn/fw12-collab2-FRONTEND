import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/footer'
import Navbar from '../components/navbar'

const ProductDetails = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar></Navbar>

      {/* Konten */}
      <main className='relative bg-[#F8EDE3] pt-[52px] pb-[10%]'>
        <div className='flex'>
          <div className='ml-[5%]'>
            <div className='flex gap-0.5'>
              <div>Favorite & Promo {'>'}</div>
              <div>Cold Brew</div>
            </div>

            <div className='flex flex-col justify-center items-center mt-[40px]'>
              <Image src={require('../images/cold-brew.png')} className="rounded-full h-[400px] w-[400px]" alt="desc" ></Image>
              <div className='text-center'>
                <div className='font-black text-[65px]'>COLD BREW</div>
                <div className='font-medium text-[35px] mb-[42px]'>IDR 30.000</div>
                <div className='flex flex-col gap-[25px]'>
                  <button className='bg-[#DFD3C3] py-5 w-full rounded-lg'>Add to Cart</button>
                  <button className='bg-[#7D6E83] py-5 w-full rounded-lg text-white'>Ask a staff</button>
                </div>
              </div>
            </div>
          </div>


          <div className='ml-[10%]'>
            <div className='bg-[#FFFFFF] px-[84px] py-[10%] w-full rounded-lg'>
              <div>
                <div>Delivery only on Monday to </div>
                <div>friday at 1 - 7 pm</div>
              </div>
              <div className='w-96 mt-[43px]'>
                <div className='break-all'>Cold brewing is a method of brewing that combines ground coffee and cool water and uses time instead of heat to extract the flavor. It is brewed in small batches and steeped for as long as 48 hours.</div>
              </div>

              <div className='flex flex-col justify-center items-center gap-[42px]'>
                <div className='mt-[10%]'>Choose a size</div>
                <div className='flex gap-[57px]'>
                  <div className='bg-[#7D6E83] w-[50px] h-[50px] rounded-full flex justify-center items-center font-bold text-[20px]'>R</div>
                  <div className='bg-[#7D6E83] w-[50px] h-[50px] rounded-full flex justify-center items-center font-bold text-[20px]'>L</div>
                  <div className='bg-[#7D6E83] w-[50px] h-[50px] rounded-full flex justify-center items-center font-bold text-[20px]'>XL</div>
                </div>
              </div>
            </div>

            <div className='flex flex-col justify-center items-center mt-[46px] gap-[27px]'>
              <div>Choose Delivery Method</div>
              <div className='flex gap-5'>
                <button className='bg-[#DFD3C3] py-3 rounded-lg px-[26px] drop-shadow-lg'>Dine In</button>
                <button className='bg-[#F4F4F8] py-3 rounded-lg px-[26px] drop-shadow-lg'>Door Delivery</button>
                <button className='bg-[#F4F4F8] py-3 rounded-lg px-[26px] drop-shadow-lg'>Pick Up</button>
              </div>
            </div>
            <div className='flex justify-center items-center mt-10'>
              <div>Set Time</div>
              <div>
                <input
                  className="h-11 px-5 pl-6 w-full outline-none bg-[#F8EDE3] border-b-2 border-gray-700 focus:border-[#7D6E83] peer"
                  type="text"
                  placeholder="Enter the time you’ll arrived"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className='flex bg-[#F8EDE3] justify-center items-center gap-[48px] mb-[-25px]'>
        <div className='flex bg-[#FFFFFF] justify-center items-center rounded-lg px-[32px] py-[32px] gap-[46px]'>
          <div>
            <Image src={require('../images/cold-brew.png')} className="rounded-full" width="50" height="50" alt="desc" ></Image>
          </div>
          <div className='grow'>
            <div>COLD BREW</div>
            <div>x1 (Large)</div>
            <div>x1 (Regular)</div>
          </div>
          <div className='flex gap-[27px]'>
            <div className='bg-[#7D6E83] h-10 w-10 rounded-full flex justify-center items-center'>
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" /></svg>
            </div>
            <div className='font-black text-[25px]'>2</div>
            <div className='bg-[#7D6E83] h-10 w-10 rounded-full flex justify-center items-center'>
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
            </div>
          </div>
        </div>
        <div>
          <button className='bg-[#7D6E83] py-[50px] px-[57px] rounded-lg text-white font-bold text-[25px]'>Checkout</button>
        </div>
      </div>

      <Footer></Footer>
    </>
  )
}

export default ProductDetails