import React from 'react'
import { Edit2, Facebook, Instagram, Search, Twitter } from 'feather-icons-react/build/IconComponents';
import Image from 'next/image';
import ImageUploading from 'react-images-uploading';
import Link from 'next/link';
import http from '../../helpers/http';
import { useSelector } from 'react-redux';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import withAuth from '../../components/hoc/withAuth'
import { useRouter } from 'next/router';
import NavbarAdmin from '../../components/NavbarAdmin';


const EditPromo = () => {
  const token = useSelector((state) => state?.auth?.token)
  const router = useRouter()
  const { pid } = router.query;
  const [promo, setPromo] = React.useState({})
  const [picture, setPicture] = React.useState(null)
  const [name, setName] = React.useState(null)
  const [discount, setDiscount] = React.useState(null)
  const [price, setPrice] = React.useState(null)
  const [description, setDescription] = React.useState(null)
  const [startDate, setStartDate] = React.useState(null)
  const [endDate, setEndDate] = React.useState(null)
  const [code, setCode] = React.useState(null)
  const [sizeId, setSizeId] = React.useState(null)
  const [deliveryMethodId, setDeliveryMethodId] = React.useState(null)
  const [messageSuccess, setMessageSuccess] = React.useState('')
  const [alertSuccess, setAlertSuccess] = React.useState(false)
  const [messageError, setMessageError] = React.useState('')
  const [alertError, setAlertError] = React.useState(false)

  // const dataNewPromo = {
  //   picture, name, discount, price, description, startDate, endDate, code, sizeId, deliveryMethodId
  // }

  // Get promo by id
  React.useEffect(() => {
    if (pid) {
      getPromo()
    }
  }, [pid])
  const getPromo = async () => {
    try {
      const response = await http(token).get('/promo/'+pid)
      const promo = response?.data?.results
      setPromo(response?.data?.results)
      setPicture(promo?.picture)
      setName(promo?.name)
      setDiscount(promo?.discount)
      setPrice(promo?.price)
      setDescription(promo?.description)
      setStartDate(promo?.startDate)
      setEndDate(promo?.endDate)
      setCode(promo?.code)
      setSizeId(promo?.sizeId)
      setDeliveryMethodId(promo?.deliveryMethodId)
    }
    catch(error) {
      console.log(error)
    }
  }

  // Format date
  const currentMonth = new Date(promo?.endDate);
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const month = (months[currentMonth.getMonth()]);
  const date = new Date(endDate).getDate()
  const year = new Date(endDate).getFullYear()
  const expiredDate = `${month} ${date}th ${year}`

  // Edit promo
  const editPromo = async (e) => {
    e.preventDefault()
    try {
      const form = new FormData()
      form.append('picture', picture)
      form.append('name', name)
      form.append('discount', discount)
      form.append('price', price)
      form.append('description', description)
      form.append('startDate', startDate)
      form.append('endDate', endDate)
      form.append('code', code)
      form.append('sizeId', sizeId)
      form.append('deliveryMethodId', deliveryMethodId)
      const response = await http(token).patch(`/promo/edit/${pid}`, form)
      setMessageSuccess(response?.data?.message)
      setAlertSuccess(true)
      setTimeout(() => {
        setAlertSuccess(false)
        router.replace('/product-admin')
      }, 3000)
      setPromo(response?.data?.results)
    } catch (error) {
      console.log(error)
      setMessageError('Promo edit failed.')
      setAlertError(true)
    }
  }

  return(
    <>
    {/* Header */}
    <NavbarAdmin />

    {/* Edit promo */}
    <section className='bg-white px-28 py-8'>
      <div className='flex items-center'>
        <p className='flex-1'>Favorite & Promo <span className='font-bold text-[#7D6E83]'>&gt; Edit promo</span></p>
        <p className='font-bold text-[#7D6E83] underline cursor-pointer'>Cancel</p>
      </div>
      <form onSubmit={editPromo} className='flex gap-28 py-16'>
        {/* Left */}
        <div className='flex-[35%]'>
          { promo?.picture ?
          <div className='bg-[#FFCB65] rounded-xl flex flex-col items-center py-8'>
            <div className='relative w-fit mb-5'>
              <ImageUploading 
              value={picture}
              onChange={(value) => setPicture(value[0].file)}
              dataURLKey="data_url"
              acceptType={["jpg", "png"]}
              >
                {({
                onImageUpload
                })=> (
                <>
                  <div>
                    <Image src={promo?.picture} alt='promoPicture' className='rounded-full w-full h-[130px] w-[130px]' width={100} height={100}/>
                  </div>                  
                  <div onClick={onImageUpload} className='absolute right-0 bottom-0 w-8 h-8'>
                    <button type='button' className='btn btn-circle btn-sm bg-[#7D6E83] border-none'><Edit2 className='p-1' /></button>
                  </div>
                </>
              )}
              </ImageUploading>
            </div>
            <div className='text-center font-bold text-3xl mb-5'>
              <p>{promo?.name}</p>
              <p>{promo?.discount} OFF</p>
            </div>
            <div className='flex justify-center text-center mb-5'>
              <p className='px-10'>{promo?.description}</p>
            </div>
            <div className='text-center border-t border-dashed border-black w-full py-5'>
              <p>COUPON CODE</p>
              <p className='text-3xl font-bold my-3'>{promo?.code}</p>
              <p>Valid untill {expiredDate}</p>
            </div>
          </div> : <Skeleton className='h-[480px]'/>}
          <div className='mt-8'>
            <label className='font-bold text-[#7D6E83]'>Expire date :</label>
            <input onChange={(e) => setStartDate(e.target.value) & setAlertError(false)} defaultValue={promo?.startDate} type='text' onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => (e.target.type = "text")} name='promoStartDate' placeholder='Select start date' className='input input-bordered focus:outline-none mt-3 '/>
            <input onChange={(e) => setEndDate(e.target.value) & setAlertError(false)} defaultValue={promo?.endDate} type='text' onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => (e.target.type = "text")} name='promoEndDate' placeholder='Select end date' className='input input-bordered focus:outline-none mt-3 '/>
          </div>
          <div className='mt-8'>
            <label className='font-bold text-[#7D6E83]'>Input coupon code :</label>
            <input onChange={(e) => setCode(e.target.value) & setAlertError(false)} defaultValue={promo?.code} type='text' name='discount' placeholder='Input stock' className='input input-bordered focus:outline-none mt-3 '/>
          </div>
        </div>

        {/* Right */}
        <div className='flex-[65%]'>
          <div className='mb-5'>
            <label className='font-bold text-[#7D6E83]'>Name:</label>
            <input onChange={(e) => setName(e.target.value) & setAlertError(false)} type='text' defaultValue={promo?.name} name='name' placeholder='Type promo name min. 50 characters' className='input input-bordered rounded-xl mt-2 focus:outline-none' />
          </div>
          <div className='mb-5'>
            <label className='font-bold text-[#7D6E83]'>Normal Price :</label>
            <input onChange={(e) => setPrice(e.target.value) & setAlertError(false)} type='text' defaultValue={(promo?.price) ? new Intl.NumberFormat('en-DE').format(Number(promo?.price)) : ''} name='normalPrice' placeholder='Type the normal price' className='input input-bordered rounded-xl mt-2 focus:outline-none' />
          </div>
          <div className='mb-5'>
            <label className='font-bold text-[#7D6E83]'>Description :</label>
            <input onChange={(e) => setDescription(e.target.value) & setAlertError(false)} type='text' defaultValue={promo?.description} name='description' placeholder='Describe your promo min. 150 characters' className='input input-bordered rounded-xl mt-2 focus:outline-none' />
          </div>
          <div className='mb-5'>
            <label className='font-bold text-[#7D6E83]'>Input product size :</label>
            <p className='mt-2 mb-5'>Click product size you want to use for this promo</p>
            <div className='flex gap-3'>
              <div onClick={() => setSizeId(2) & setAlertError(false)} className={`flex items-center justify-center w-12 h-12 ${sizeId == 2 ? 'bg-[#FFBA33]' : 'bg-gray-400'}  rounded-full`}>
                <p className='font-bold'>R</p>
              </div>
              <div onClick={() => setSizeId(1) & setAlertError(false)} className={`flex items-center justify-center w-12 h-12 ${sizeId == 1 ? 'bg-[#FFBA33]' : 'bg-gray-400'} rounded-full`}>
                <p className='font-bold'>L</p>
              </div>
              <div onClick={() => setSizeId(3) & setAlertError(false)} className={`flex items-center justify-center w-12 h-12 ${sizeId == 3 ? 'bg-[#FFBA33]' : 'bg-gray-400'} rounded-full`}>
                <p className='font-bold'>XL</p>
              </div>
              <div onClick={() => setSizeId(5) & setAlertError(false)} className={`flex items-center justify-center w-12 h-12 ${sizeId == 5 ? 'bg-[#FFBA33]' : 'bg-gray-400'} rounded-full`}>
                <p className='font-bold text-xs text-center'>250<br/>gr</p>
              </div>
              <div onClick={() => setSizeId(6) & setAlertError(false)} className={`flex items-center justify-center w-12 h-12 ${sizeId == 6 ? 'bg-[#FFBA33]' : 'bg-gray-400'} rounded-full`}>
                <p className='font-bold text-xs text-center'>300<br/>gr</p>
              </div>
              <div onClick={() => setSizeId(7) & setAlertError(false)} className={`flex items-center justify-center w-12 h-12 ${sizeId == 7 ? 'bg-[#FFBA33]' : 'bg-gray-400'} rounded-full`}>
                <p className='font-bold text-xs text-center'>500<br/>gr</p>
              </div>
            </div>
          </div>
          <div className='mb-5'>
            <label className='font-bold text-[#7D6E83]'>Input delivery methods :</label>
            <p className='mt-2 mb-5'>Click methods you want to use for this promo</p>
            <div className='grid grid-cols-3 gap-3'>
              <div>
                <button onClick={() => setDeliveryMethodId(1) & setAlertError(false)} type='button' className={`btn ${deliveryMethodId == 1 ? 'bg-[#FFBA33]' : 'bg-gray-400'}  font-bold border-0 font-bold text-gray-700`}>Home Delivery</button>
              </div>
              <div>
                <button onClick={() => setDeliveryMethodId(2) & setAlertError(false)} type='button' className={`btn ${deliveryMethodId == 2 ? 'bg-[#FFBA33]' : 'bg-gray-400'} font-bold border-0 font-bold text-gray-700`}>Dine in</button>
              </div>
              <div>
                <button onClick={() => setDeliveryMethodId(3) & setAlertError(false)} type='button' className={`btn ${deliveryMethodId == 3 ? 'bg-[#FFBA33]' : 'bg-gray-400'} font-bold border-0 font-bold text-gray-700`}>Take away</button>
              </div>
            </div>
          </div>
          <div className='mb-14'>
            <label className='font-bold text-[#7D6E83]'>Enter the discount :</label>
            <div className='w-1/4'>
              <input onChange={(e) => setDiscount(e.target.value) & setAlertError(false)} type='text' defaultValue={promo?.discount} name='discount' className=' input input-bordered rounded-xl mt-2 focus:outline-none' />
            </div>
          </div>
          <div>
            {alertSuccess ? 
            <div className="alert alert-success shadow-lg">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>{messageSuccess}</span>
              </div>
            </div> : false}
            {alertError ? 
            <div className="alert alert-error shadow-lg">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>{messageError}</span>
              </div>
            </div> : false }
            <div className='mt-14'>
              <button type='submit' className='btn btn-lg bg-[#7D6E83] border-0 font-bold'>Save Change</button>
            </div>
          </div>
        </div>
      </form>

      
    </section>

    {/* Footer */}
    <footer className='hidden md:flex gap-20 relative bg-[#F8EDE3] py-10 pb-20 pl-28 px-52'>
      <div className='flex-1 flex flex-col gap-5'>
        <div className='flex items-center gap-3'>
          <Image src={require('../../images/logoOurCoffee.png')} alt='Logo' className='w-8 h-8'/>
          <p className='font-bold text-lg'>Our Coffee</p>
        </div>
        <div>
          <p className='w-72'>Our coffee is a store that sells some good meals, and especially coffee. We provide high quality beans</p>
        </div>
        <div className='flex gap-5'>
          <div className='bg-[#7D6E83] flex items-center justify-center rounded-full w-10 h-10'>
            <Facebook/>
          </div>
          <div className='bg-[#7D6E83] flex items-center justify-center rounded-full w-10 h-10'>
            <Twitter/>
          </div>
          <div className='bg-[#7D6E83] flex items-center justify-center rounded-full w-10 h-10'>
            <Instagram/>
          </div>
        </div>
        <div>
          <p>©2022OurCoffee</p>
        </div>
      </div>
      <div className='flex flex-col gap-5'>
        <p className='font-bold text-lg'>Product</p>
        <ul className='flex flex-col gap-3'>
          <li className='cursor-pointer'>Download </li>
          <li className='cursor-pointer'>Pricing</li>
          <li className='cursor-pointer'>Locations</li>
          <li className='cursor-pointer'>Countries</li>
          <li className='cursor-pointer'>Blog</li>
        </ul>
      </div>
      <div className='flex flex-col gap-5'>
        <p className='font-bold text-lg'>Engage</p>
        <ul className='flex flex-col gap-3'>
          <li className='cursor-pointer'>Our Coffee ?  </li>
          <li className='cursor-pointer'>FAQ</li>
          <li className='cursor-pointer'>About Us</li>
          <li className='cursor-pointer'>Privacy Policy</li>
          <li className='cursor-pointer'>Terms of Service</li>
        </ul>
      </div>
    </footer>
    </>
  )
}

export default withAuth(EditPromo)