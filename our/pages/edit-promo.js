import React from 'react'
import { Edit2, Facebook, Instagram, Search, Twitter } from 'feather-icons-react/build/IconComponents';
import Image from 'next/image';
import ImageUploading from 'react-images-uploading';
import Link from 'next/link';


const EditPromo = () => {
  const [image, setImage] = React.useState(null);

  return(
    <>
    {/* Header */}
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

    {/* Edit promo */}
    <section className='bg-white px-28 py-8'>
      <div className='flex items-center'>
        <p className='flex-1'>Favorite & Promo <span className='font-bold text-[#7D6E83]'>&gt; Edit promo</span></p>
        <p className='font-bold text-[#7D6E83] underline cursor-pointer'>Cancel</p>
      </div>
      <div className='flex gap-28 py-16'>
        {/* Left */}
        <div className='flex-[35%]'>
          <div className='bg-[#FFCB65] rounded-xl flex flex-col items-center py-8'>
            <div className='relative w-fit mb-5'>
              <ImageUploading 
              value={image}
              onChange={(value) => setImage(value)}
              dataURLKey="data_url"
              acceptType={["jpg", "png"]}
              >
                {({
                onImageUpload
                })=> (
                <>
                  <div>
                    <Image src={require('../images/spaghetti.png')} className='rounded-full w-4/4' />
                  </div>
                  <div onClick={onImageUpload} className='absolute right-0 bottom-0 w-8 h-8'>
                    <button className='btn btn-circle btn-sm bg-[#7D6E83] border-none'><Edit2 className='p-1' /></button>
                  </div>
                </>
              )}
              </ImageUploading>
            </div>
            <div className='text-center font-bold text-3xl mb-5'>
              <p>Beef Spaghetti</p>
              <p>20% OFF</p>
            </div>
            <div className='flex justify-center text-center mb-5'>
              <p className='w-3/5'>Buy 1 Choco Oreo and get 20% off for Beef Spaghetti</p>
            </div>
            <div className='text-center border-t border-dashed border-black w-full py-5'>
              <p>COUPON CODE</p>
              <p className='text-3xl font-bold my-3'>FNPR15RG</p>
              <p>Valid untill October 10th 2020</p>
            </div>
          </div>
          <div className='mt-8'>
            <label className='font-bold text-[#7D6E83]'>Expire date :</label>
            <input type='text' onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => (e.target.type = "text")} name='promoStartDate' placeholder='Select start date' className='input input-bordered focus:outline-none mt-3 '/>
            <input type='text' onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => (e.target.type = "text")} name='promoEndDate' placeholder='Select end date' className='input input-bordered focus:outline-none mt-3 '/>
          </div>
          <div className='mt-8'>
            <label className='font-bold text-[#7D6E83]'>Input coupon code :</label>
            <input type='number' name='discount' placeholder='Input stock' className='input input-bordered focus:outline-none mt-3 '/>
          </div>
        </div>

        {/* Right */}
        <div className='flex-[65%]'>
          <div className='mb-5'>
            <label className='font-bold text-[#7D6E83]'>Name:</label>
            <input type='text' defaultValue='Beef Spaghetti' name='name' placeholder='Type promo name min. 50 characters' className='input input-bordered rounded-xl mt-2 focus:outline-none' />
          </div>
          <div className='mb-5'>
            <label className='font-bold text-[#7D6E83]'>Normal Price :</label>
            <input type='text' defaultValue='70.000' name='normalPrice' placeholder='Type the normal price' className='input input-bordered rounded-xl mt-2 focus:outline-none' />
          </div>
          <div className='mb-5'>
            <label className='font-bold text-[#7D6E83]'>Description :</label>
            <input type='text' defaultValue='Buy 1 Choco Oreo and get 20% off for Beef Spaghetti' name='description' placeholder='Describe your promo min. 150 characters' className='input input-bordered rounded-xl mt-2 focus:outline-none' />
          </div>
          <div className='mb-5'>
            <label className='font-bold text-[#7D6E83]'>Input product size :</label>
            <p className='mt-2 mb-5'>Click product size you want to use for this promo</p>
            <div className='flex gap-3'>
              <div className='flex items-center justify-center w-12 h-12 bg-gray-400 rounded-full'>
                <p className='font-bold'>R</p>
              </div>
              <div className='flex items-center justify-center w-12 h-12 bg-gray-400 rounded-full'>
                <p className='font-bold'>L</p>
              </div>
              <div className='flex items-center justify-center w-12 h-12 bg-gray-400 rounded-full'>
                <p className='font-bold'>XL</p>
              </div>
              <div className='flex items-center justify-center w-12 h-12 bg-[#FFBA33] rounded-full'>
                <p className='font-bold text-xs text-center'>250<br/>gr</p>
              </div>
              <div className='flex items-center justify-center w-12 h-12 bg-[#FFBA33] rounded-full'>
                <p className='font-bold text-xs text-center'>300<br/>gr</p>
              </div>
              <div className='flex items-center justify-center w-12 h-12 bg-[#FFBA33] rounded-full'>
                <p className='font-bold text-xs text-center'>500<br/>gr</p>
              </div>
            </div>
          </div>
          <div className='mb-5'>
            <label className='font-bold text-[#7D6E83]'>Input delivery methods :</label>
            <p className='mt-2 mb-5'>Click methods you want to use for this promo</p>
            <div className='grid grid-cols-3 gap-3'>
              <div>
                <button className='btn bg-[#FFBA33] font-bold border-0 font-bold text-[#7D6E83]'>Home Delivery</button>
              </div>
              <div>
                <button className='btn bg-[#FFBA33] font-bold border-0 font-bold text-[#7D6E83]'>Dine in</button>
              </div>
              <div>
                <button className='btn bg-gray-400 font-bold border-0 font-bold text-gray-700'>Take away</button>
              </div>
            </div>
          </div>
          <div className='mb-3 mt-10 w-1/4'>
            <label className='font-bold text-[#7D6E83]'>Enter the discount :</label>
            <input type='text' defaultValue='20%' name='name' placeholder='Type promo name min. 50 characters' className='input input-bordered rounded-xl mt-2 focus:outline-none' />
          </div>
          <div className='mt-16'>
            <div className='mb-5'>
              <button className='btn btn-lg bg-[#7D6E83] border-0 font-bold'>Save Change</button>
            </div>
          </div>
        </div>
      </div>

      
    </section>

    {/* Footer */}
    <footer className='hidden md:flex gap-20 relative bg-[#F8EDE3] py-10 pb-20 pl-28 px-52'>
      <div className='flex-1 flex flex-col gap-5'>
        <div className='flex items-center gap-3'>
          <Image src={require('../images/logoOurCoffee.png')} alt='Logo' className='w-8 h-8'/>
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

export default EditPromo