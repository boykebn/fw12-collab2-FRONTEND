import { Search } from 'feather-icons-react/build/IconComponents';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BiCreditCardFront } from "react-icons/bi";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import {TbTruckDelivery} from "react-icons/tb"
import { useSelector } from 'react-redux';
import http from '../helpers/http';

const PaymentAndDeliveryCust = () => {
  const [profile, setProfile] = useState({})
  const [product, setProduct] = useState({})
  const [paymentMethodId, setPaymentMethodId] = useState(0)
  const token = useSelector(state => state.auth.token)

  useEffect(() => {
    http(token).get('/profile')
    .then(res => setProfile(res.data.results))

    http(token).get('/transaction/process')
    .then(res => setProduct(res.data.results))
  }, [])

  const subTotal = product.price * product.quantity
  const tax = subTotal * 10 / 100
  const shipping = 10000
  const totalPrice = subTotal + tax + shipping

  return (
    <div className='max-w-full max-h-full'>
      <section>
        <div className='hidden md:flex items-center gap-40 px-28 py-5 border-b-2'>
          <div className='flex-1'>
            <div className='flex items-center gap-3 w-fit cursor-pointer'>
              <Image src={require('../images/logoOurCoffee.png')} alt='Logo' className='w-8 h-8' />
              <h1 className='font-bold text-xl'>Our Coffee</h1>
            </div>
          </div>
          <div className=''>
            <ul className='flex items-center justify-center gap-10'>
              <Link href="/">
                <li className='cursor-pointer hover:text-[#7D6E83]'>Home</li>
              </Link>
              <Link href="/product">
                <li className='cursor-pointer hover:text-[#7D6E83]'>Product</li>
              </Link>
              <Link href="manage-orders">
                <li className='cursor-pointer hover:text-[#7D6E83]'>Orders</li>
              </Link>
              <Link href="/dashboard-admin">
                <li className='cursor-pointer hover:text-[#7D6E83]'>Dashboard</li>
              </Link>
            </ul>
          </div>
          <div className='flex gap-8 items-center'>
            <Search className='w-4/4 cursor-pointer' />
            <Image src={require('../images/chat.png')} alt='chatIcon' className='w-4/4 cursor-pointer' />
            <div>
              <Image src={require('../images/profile.png')} alt='profile' className='w-4/4 rounded-full cursor-pointer' />
            </div>
          </div>
        </div>
      </section>
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
                <Image src={require('../images/hazelnut.png')} width="82" height="90" alt="hazelnut" className='rounded-lg' />
                <div className='w-[170px] text-xl'>
                  <p className=''>{product.name}</p>
                  <p>x{product.quantity}</p>
                  <p>{product.size === 'L' ? 'Large' : product.size === 'R' ? 'Regular' : 'Extra Large'}</p>
                </div>
                <p className='text-xl flex items-center'>IDR {product.price}</p>
              </div>
                        
              <hr className='ml-10 mr-14 bg-gray-400 mt-10' />

              <div className='pl-10 pt-5 text-xl'>
                <div className='flex justify-between pr-14'>
                  <p>SUBTOTAL</p>
                  <p>IDR {subTotal}</p>
                </div>
                <div className='flex justify-between pr-[66px]'>
                  <p>TAX & FEES</p>
                  <p>IDR {tax}</p>
                </div>
                <div className='flex justify-between pr-14'>
                  <p>SHIPPING</p>
                  <p>IDR {shipping}</p>
                </div>
              </div>
              <div className='pl-10 pt-10 flex text-3xl font-bold gap-32'>
                <p>TOTAL</p>
                <p>IDR {totalPrice}</p>
              </div>
            </div>
          </div>

          {/* content-2 */}
          <div className='pl-32 pt-[230px]'>
            <div className='flex gap-[260px] text-2xl text-white font-bold'>
              <p>Address details</p>
              <p>Edit</p>
            </div>

            <div className='flex flex-col px-10 py-10 w-[454px] h-[198px] rounded-xl bg-white mt-5 text-xl font-semibold leading-8'>
              <p className='flex-1'> <span className='text-black font-bold'>Delivery</span> to {profile.address}</p>
              <hr />
              <p className='flex-1 flex grow items-end'>{profile.phoneNumber}</p>
            </div>

            <div className='flex gap-[260px] text-2xl text-white font-bold pt-14'>
              <p>Payment Method</p>
            </div>

            <div className='px-10 py-10 w-[454px] h-[259px] rounded-xl bg-white mt-5 text-xl font-semibold leading-8'>

              <div className='flex items-center gap-5 pb-5' onClick={() => setPaymentMethodId(2)}>
                <input type="radio" name="radio-1" className="radio" checked={paymentMethodId === 2 ? true : false} />
                <Image src={require('../images/card.png')} width="40" height="40" alt="hazelnut" className='rounded-lg' />
                <div className='absolute pl-[50px]'>
                  <BiCreditCardFront className='w-[30px] h-[30px]' />
                </div>
                <p className='text-xl'>Card</p>
              </div>
              <hr />
              <div className='flex items-center gap-5 pt-5 pb-5' onClick={() => setPaymentMethodId(3)}>
                <input type="radio" name="radio-1" className="radio" checked={paymentMethodId === 3 ? true : false}/>
                <Image src={require('../images/bang.png')} width="40" height="40" alt="hazelnut" className='rounded-lg' />
                <div className='absolute pl-[50px]'>
                  <HiOutlineBuildingLibrary className='w-[30px] h-[30px]' />
                </div>
                <p className='text-xl'>Bank account</p>
              </div>
              <hr />
              <div className='flex items-center gap-5 pt-5 pb-5' onClick={() => setPaymentMethodId(4)}>
                <input type="radio" name="radio-1" className="radio" checked={paymentMethodId === 4 ? true : false}/>
                <Image src={require('../images/delivery.png')} width="40" height="40" alt="hazelnut" className='rounded-lg' />
                <div className='absolute pl-[50px]'>
                  <TbTruckDelivery className='w-[30px] h-[30px]' />
                </div>
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
            <Image src={require('../images/logoOurCoffee.png')} width="40" height="40" alt="hazelnut" className='rounded-lg' />
            <p className='text-2xl font-bold'>Our Coffe</p>
          </div>
          <div className='w-[360px] text-lg font-semibold pt-5'>
            <p>Coffee Shop is a store that sells some good meals, and especially coffee. We provide </p>
            <p>high quality beans</p>
          </div>
          <div className='flex gap-5 pt-5'>
            <Image src={require('../images/fb.png')} width="40" height="40" alt="hazelnut" className='rounded-lg' />
            <Image src={require('../images/twt.png')} width="40" height="40" alt="hazelnut" className='rounded-lg' />
            <Image src={require('../images/instagram.png')} width="40" height="40" alt="hazelnut" className='rounded-lg' />
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