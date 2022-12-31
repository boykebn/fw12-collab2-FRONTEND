import Image from 'next/image'

const PaymentAndDeliveryCust = () => {
    return(
        <div className='max-w-full max-h-full'>
            <nav>
              <div className="navbar bg-base-100 py-10">
                <div className="navbar-start">
                  <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                      <li><a>Home</a></li>
                      <li tabIndex={0}>
                        <a className="justify-between">
                          Product
                          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
                        </a>
                        <ul className="p-2">
                          <li><a>Submenu 1</a></li>
                          <li><a>Submenu 2</a></li>
                        </ul>
                      </li>
                      <li><a>Your Cart</a></li>
                      <li><a>History</a></li>
                    </ul>
                  </div>
                  <div className='pl-32 flex items-center'>
                    <Image src={require('../images/logoOurCoffee.png')} width="40" height="40" alt="hazelnut"  className='rounded-lg'/>
                    <a className="normal-case text-2xl font-bold">Our Coffe</a>
                  </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                  <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                    <li tabIndex={0}>
                      <a>
                        Product
                        {/* <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg> */}
                      </a>
                      <ul className="p-2">
                        <li><a>Submenu 1</a></li>
                        <li><a>Submenu 2</a></li>
                      </ul>
                    </li>
                    <li><a>Your Cart</a></li>
                    <li><a>History</a></li>
                  </ul>
                </div>
                <div className="navbar-end gap-10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-[30px] h-[30px]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                      <Image src={require('../images/chat-1.png')} width="30" height="33" alt="chat" ></Image>
                  <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="avatar pr-32">
                      <div className="w-10 rounded-full">
                        <img src="https://placeimg.com/80/80/people" />
                      </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                      <li>
                        <a className="justify-between">
                          Profile
                          <span className="badge">New</span>
                        </a>
                      </li>
                      <li><a>Settings</a></li>
                      <li><a>Logout</a></li>
                    </ul>
                </div>
                </div>
              </div>
            </nav>

            <div className='bg-order_bg bg-no-repeat bg-cover pb-[300px]'>
              <div className='grid grid-cols-[720px_minmax(720px,_1fr)] max-h-screen pb-32'>
                {/* content-1 */}
                  <div className='pl-32 pt-[95px]'>
                    <div className='w-[316px]'>
                      <p className='text-4xl text-white font-bold drop-shadow-2xl shadow-black-500'>Checkout your item now!</p>
                    </div>
                    <div className='w-[487px] h-[700px] bg-white rounded-xl mt-14'>
                        <div className='flex justify-center py-24'>
                          <p className='text-3xl font-bold'>Order Summary</p>
                        </div>
                        <div className='pl-10 flex gap-7'>
                          <Image src={require('../images/hazelnut.png')} width="82" height="90" alt="hazelnut"  className='rounded-lg'/>
                          <div className='w-[170px] text-xl'>
                            <p className=''>Hazelnut Latte</p>
                            <p>x 1</p>
                            <p>Regular</p>
                          </div>
                          <p className='text-xl flex items-center'>IDR 24.0</p>
                        </div>

                        <div className='pl-10 flex gap-7 pt-5'>
                          <Image src={require('../images/chikenFW.png')} width="82" height="90" alt="hazelnut"  className='rounded-lg'/>
                          <div className='w-[170px] text-xl'>
                            <p className=''>Chicken Fire Wings</p>
                            <p>x 2</p>
                            <p></p>
                          </div>
                          <p className='text-xl flex items-center'>IDR 30.0</p>
                        </div>
                        
                        <hr className='ml-10 mr-14 bg-gray-400 mt-10' />

                        <div className='pl-10 pt-5 text-xl'>
                          <div className='flex justify-between pr-14'>
                            <p>SUBTOTAL</p>
                            <p>IDR 120.000</p>
                          </div>
                          <div className='flex justify-between pr-[66px]'>
                            <p>TAX & FEES</p>
                            <p>IDR 20.000</p>
                          </div>
                          <div className='flex justify-between pr-[66px]'>
                            <p>SHIPPING</p>
                            <p>IDR 10.000</p>
                          </div>
                        </div>
                        <div className='pl-10 pt-10 flex text-3xl font-bold gap-32'>
                          <p>TOTAL</p>
                          <p>IDR 150.000</p>
                        </div>
                    </div>
                  </div>

                  {/* content-2 */}
                  <div className='pl-32 pt-[230px]'>
                    <div className='flex gap-[260px] text-2xl text-white font-bold'>
                      <p>Address details</p>
                      <p>Edit</p>
                    </div>

                    <div className='px-10 py-10 w-[454px] h-[198px] rounded-xl bg-white mt-5 text-xl font-semibold leading-8'>
                      <p> <span className='text-black font-bold'>Delivery</span> to Iskandar Street</p>
                      <hr />
                      <p>Km 5 refinery road oppsite republic road, effurun, Jakarta</p>
                      <hr />
                      <p>+62 81348287878</p>
                    </div>

                    <div className='flex gap-[260px] text-2xl text-white font-bold pt-14'>
                      <p>Payment Method</p>
                    </div>

                    <div className='px-10 py-10 w-[454px] h-[259px] rounded-xl bg-white mt-5 text-xl font-semibold leading-8'>

                      <div className='flex items-center gap-5 pb-5'>
                        <input type="radio" name="radio-1" className="radio" checked />
                        <Image src={require('../images/card.png')} width="40" height="40" alt="hazelnut"  className='rounded-lg'/>
                        <p className='text-xl'>Card</p>
                      </div>
                      <hr />
                      <div className='flex items-center gap-5 pt-5 pb-5'>
                        <input type="radio" name="radio-1" className="radio" checked />
                        <Image src={require('../images/bang.png')} width="40" height="40" alt="hazelnut"  className='rounded-lg'/>
                        <p className='text-xl'>Bank account</p>
                      </div>
                      <hr />
                      <div className='flex items-center gap-5 pt-5 pb-5'>
                        <input type="radio" name="radio-1" className="radio" checked />
                        <Image src={require('../images/delivery.png')} width="40" height="40" alt="hazelnut"  className='rounded-lg'/>
                        <p className='text-xl'>Cash on delivery</p>
                      </div>

                    </div>
                      <div className='w-[454px] mr-10'>
                        <button className="mt-10 btn h-[60px] text-lg font-semibold">Confirm and Pay</button>
                      </div>
                  </div>
              </div>
            </div>

            <footer className="footer p-10 bg-base-200 text-base-content">

              <div className='pl-32 pt-[100px]'>
                <div className='flex items-center gap-2'>
                  <Image src={require('../images/logoOurCoffee.png')} width="40" height="40" alt="hazelnut"  className='rounded-lg'/>
                  <p className='text-2xl font-bold'>Our Coffe</p>
                </div>
                <div className='w-[360px] text-lg font-semibold pt-5'>
                  <p>Coffee Shop is a store that sells some good meals, and especially coffee. We provide </p>
                  <p>high quality beans</p>
                </div>
                <div className='flex gap-5 pt-5'>
                  <Image src={require('../images/fb.png')} width="40" height="40" alt="hazelnut"  className='rounded-lg'/>
                  <Image src={require('../images/twt.png')} width="40" height="40" alt="hazelnut"  className='rounded-lg'/>
                  <Image src={require('../images/instagram.png')} width="40" height="40" alt="hazelnut"  className='rounded-lg'/>
                </div>
                <div className='text-[#AFB5C0] text-xl pt-5'>
                  <p>©2022OurCoffe</p>
                </div>
              </div>
              
              <div className='pt-[100px] pl-32'>
                <span className="footer-title">Product</span> 
                <a className="link link-hover">Download </a> 
                <a className="link link-hover">Pricing</a> 
                <a className="link link-hover">Locations</a> 
                <a className="link link-hover">Countries</a>
                <a className="link link-hover">Blog</a>
              </div>

              <div className='pt-[100px]'>
                <span className="footer-title">Engage</span> 
                <a className="link link-hover">Coffe Shop ? </a> 
                <a className="link link-hover">FAQ</a> 
                <a className="link link-hover">About Us</a> 
                <a className="link link-hover">Privacy Policy</a>
                <a className="link link-hover">Terms of Service</a>
              </div>
            </footer>
        </div>
    )
}

export default PaymentAndDeliveryCust;