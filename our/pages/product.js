import Image from 'next/image'
import Link from 'next/link'

const Product = () => {
    return (
        <>
            {/* Navbar */}
            <nav className='flex'>
                <div className='flex'>
                    <Image src={require('../assets/logo.png')} width="30" height="33" alt="desc" ></Image>
                    <div>Our Coffee</div>
                </div>
                <div className='flex'>
                    <Link href="/">Home</Link>
                    <Link href="/">Product</Link>
                    <Link href="">Your Cart</Link>
                    <Link href="/">History</Link>
                </div>
                <div className='flex'>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </div>
            </nav>

            {/* Konten */}
            <div className='flex'>
                <div>
                    <div>Promo for you</div>
                    <div>Coupons will be updated every weeks. Check them out! </div>
                    <div className='relative bg-[#F8EDE3] w-[284px] h-[338px] ml-[132px] rounded-lg mt-[115px]'>
                        <div className='absolute bg-[#DFD3C3] w-[284px] h-[400px] right-14 rounded-lg top-[-30px]'>
                            <div className='absolute bg-[#D0B8A8] w-[284px] h-[472px] right-[76px] rounded-lg top-[-50px]'></div>
                        </div>
                    </div>
                </div>

                <div className='border-2 border-red-700 grow'>
                    <div className='flex gap-[68px] ml-[10%]'>
                        <div>Favourite Products</div>
                        <div>Coffee</div>
                        <div>Non Coffee</div>
                        <div>Foods</div>
                        <div>Add-on</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product