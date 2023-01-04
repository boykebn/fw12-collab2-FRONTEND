import React from 'react'
import Image from 'next/image'
import { Search, Camera as Photo, Facebook, Twitter, Instagram, X, ChevronLeft, Trash2 } from 'feather-icons-react/build/IconComponents'
import ImageUploading from 'react-images-uploading';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

const NewProduct = () => {
  const [image, setImage] = React.useState(null);
  const [camera, setCamera] = React.useState(false)
  const [alertTakePicture, setAlertTakePicture] = React.useState(false)
  console.log(image)

  function handleTakePhoto (value) {
    // Do stuff with the photo...
    setImage(value);
    setAlertTakePicture(true)
    setTimeout(()=>{setCamera(false)}, 3000)
  }

  return(
    <div>
    {camera ?
    <>
    {/* Take a picture  */}
    <div>
       <Camera
        onTakePhoto = { (value) => { handleTakePhoto(value); } }/>
        <div onClick={() => setCamera(false)} className='absolute top-5 right-20 cursor-pointer'>
          <X className='btn btn-square w-2/4'/>
        </div>
        {alertTakePicture ? 
        <div className="absolute flex flex-col items-center top-5 left-[38%] alert alert-success shadow-lg w-1/4">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>Picture taken successfully</span>
          </div>
          <progress className="progress w-56"></progress>
        </div>
        : false}
    </div>
    </> 
    :
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
            <li className='cursor-pointer hover:text-[#7D6E83]'>Home</li>
            <li className='cursor-pointer hover:text-[#7D6E83]'>Product</li>
            <li className='cursor-pointer hover:text-[#7D6E83]'>Orders</li>
            <li className='cursor-pointer hover:text-[#7D6E83]'>Dashboard</li>
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

    {/* Add new promo */}
    <section className='bg-white px-5 md:px-28 py-8'>
      <div className='hidden md:flex items-center gap-2'>
        <p>Favorite & Promo </p>
        <p className='text-[#7D6E83] font-bold'>&gt; Add new product</p>
      </div>
      <div className='flex md:hidden items-center'>
        <div className='flex-[25%]'>
          <ChevronLeft />
        </div>
        <div className='flex-[50%] text-center'>
          <p className='font-bold text-lg'>New Product</p>
        </div>
        <div className='flex-[25%] flex justify-end'>
          <div className='bg-[#7D6E83] w-10 h-10 flex items-center justify-center rounded-full'>
            <Trash2 className='text-white'/>
          </div>
          </div>
      </div>

      <div className='flex flex-col md:flex-row gap-10 md:gap-28 py-16'>
        {/* Left */}
        <div className='flex-[35%] flex flex-col items-center'>
          <div className='flex justify-center items-center w-52 h-52 rounded-full bg-gray-400 mb-5'>
            <Photo className='feather-50'/>
          </div>
          <div className='hidden md:block w-full mb-5'>
            <button onClick={() => setCamera(true) & setAlertTakePicture(false)} className='btn bg-[#7D6E83] border-0 w-full font-bold'>Take a picture</button>
          </div>
          <ImageUploading 
            value={image}
            onChange={(value) => setImage(value)}
            dataURLKey="data_url"
            acceptType={["jpg", "png"]}
            >
              {({
                onImageUpload
              })=> (
                <div className='md:w-full mb-5'>
                  <button onClick={onImageUpload} className='btn bg-[#FFBA33] text-[#7D6E83] border-0 w-full font-bold'>Choose from gallery</button>
                </div>
              )}
          </ImageUploading>
          <div className='hidden md:block mt-8'>
            <label className='font-bold text-[#7D6E83]'>Delivery Hour :</label>
            <input type='text' onFocus={(e) => (e.target.type = "time")}
            onBlur={(e) => (e.target.type = "text")} name='productStartHour' placeholder='Select start hour' className='input input-bordered focus:outline-none mt-3 '/>
            <input type='text' onFocus={(e) => (e.target.type = "time")}
            onBlur={(e) => (e.target.type = "text")} name='productEndHour' placeholder='Select end hour' className='input input-bordered focus:outline-none mt-3 '/>
          </div>
          <div className='hidden md:block mt-8'>
            <label className='font-bold text-[#7D6E83]'>Input stock :</label>
            <input type='number' name='stock' placeholder='Input stock' className='input input-bordered focus:outline-none mt-3 '/>
          </div>
        </div>

        {/* Right */}
        <div className='flex-[65%]'>
          <div className='border-b-2 mb-5'>
            <label className='font-bold text-[#7D6E83]'>Name:</label>
            <input type='text' name='nameProduct' placeholder='Type product name min. 50 characters' className='input mt-2 focus:outline-none' />
          </div>
          <div className='border-b-2 mb-5'>
            <label className='font-bold text-[#7D6E83]'>Price :</label>
            <input type='text' name='price' placeholder='Type the price' className='input mt-2 focus:outline-none' />
          </div>
          <div className='md:hidden border-b-2 mb-5'>
            <label className='font-bold text-[#7D6E83]'>Delivery Info :</label>
            <input type='text' name='deliveryInfoProduct' placeholder="Type delivery information for this product" className='input mt-2 focus:outline-none' />
          </div>
          <div className='border-b-2 mb-5'>
            <label className='font-bold text-[#7D6E83]'>Description :</label>
            <input type='text' name='descriptionProduct' placeholder='Describe your product min. 150 characters' className='input mt-2 focus:outline-none' />
          </div>
          <div className='hidden md:block mb-5'>
            <label className='font-bold text-[#7D6E83]'>Input product size :</label>
            <p className='mt-2 mb-5'>Click product size you want to use for this product</p>
            <div className='flex gap-3'>
              <div className='flex items-center justify-center w-12 h-12 bg-[#FFBA33] rounded-full'>
                <p className='font-bold'>R</p>
              </div>
              <div className='flex items-center justify-center w-12 h-12 bg-[#FFBA33] rounded-full'>
                <p className='font-bold'>L</p>
              </div>
              <div className='flex items-center justify-center w-12 h-12 bg-[#FFBA33] rounded-full'>
                <p className='font-bold'>XL</p>
              </div>
              <div className='flex items-center justify-center w-12 h-12 bg-gray-400 rounded-full'>
                <p className='font-bold text-xs text-center'>250<br/>gr</p>
              </div>
              <div className='flex items-center justify-center w-12 h-12 bg-gray-400 rounded-full'>
                <p className='font-bold text-xs text-center'>300<br/>gr</p>
              </div>
              <div className='flex items-center justify-center w-12 h-12 bg-gray-400 rounded-full'>
                <p className='font-bold text-xs text-center'>500<br/>gr</p>
              </div>
            </div>
          </div>
          <div className='hidden md:block mb-5'>
            <label className='font-bold text-[#7D6E83]'>Input delivery methods :</label>
            <p className='mt-2 mb-5'>Click methods you want to use for this product</p>
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
          <div className='mt-16'>
            <div className='mb-5'>
              <button className='btn btn-lg bg-[#7D6E83] border-0'>Save Product</button>
            </div>
            <div className='hidden md:block'>
              <button className='btn btn-lg bg-gray-400 font-bold border-0 font-bold text-gray-700'>Cancel</button>
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
    }
    </div>
  )
}

export default NewProduct;