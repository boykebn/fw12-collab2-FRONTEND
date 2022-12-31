import Image from 'next/image'
import Link from 'next/link'

const ProductDetails = () => {
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
      <main className='bg-[#F8EDE3]'>
        <div className='flex'>
          <div>
            <div className='flex'>
              <div>Favorite & Promo {'>'} </div>
              <div>Cold Brew</div>
            </div>

            <div className='flex flex-col justify-center items-center'>
              <Image src={require('../images/cold-brew.png')} className="rounded-full h-[300px] w-[300px]" alt="desc" ></Image>
              <div className='text-center'>
                <div className='font-black text-[35px]'>COLD BREW</div>
                <div className='text-[17.5px]'>IDR 30.000</div>
                <div className='flex flex-col gap-[25px]'>
                  <button className='bg-[#DFD3C3] py-5 w-full rounded-lg'>Add to Cart</button>
                  <button className='bg-[#7D6E83] py-5 w-full rounded-lg text-white'>Ask a staff</button>
                </div>
              </div>
            </div>
          </div>
          <div>2</div>
        </div>
      </main>
    </>
  )
}

export default ProductDetails