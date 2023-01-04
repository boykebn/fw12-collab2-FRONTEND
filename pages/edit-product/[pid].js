import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../../components/footer'
import NavbarAdmin from '../../components/NavbarAdmin'
import { BiTrash } from "react-icons/bi";
import { useSelector } from 'react-redux'
import http from '../../helpers/http'
import { useRouter } from 'next/router'

const EditProduct = () => {
  const token = useSelector((state) => state?.auth?.token)
  const router = useRouter()
  const { pid } = router.query;

  // Get product by id
  const [product, setProduct] = React.useState({})
  const [picture, setPicture] = React.useState(null)
  const [name, setName] = React.useState(null)
  const [price, setPrice] = React.useState(null)
  const [description, setDescription] = React.useState(null)
  const [sizeId, setSizeId] = React.useState(null)
  const [deliveryMethodId, setDeliveryMethodId] = React.useState(null)
  const [stock, setStock] = React.useState(null)
  const [messageSuccess, setMessageSuccess] = React.useState('')
  const [alertSuccess, setAlertSuccess] = React.useState(false)
  const [messageError, setMessageError] = React.useState('')
  const [alertError, setAlertError] = React.useState(false)

  React.useEffect(() => {
    getProduct()
  }, [])
  const getProduct = async () => {
    try {
      const response = await http(token).get(`/product/${pid}`)
      setProduct(response?.data?.results)
      setStock(response?.data?.results?.stock)
      setPrice(response?.data?.results?.price)
    } catch(error) {
      console.log(error)
    }
  }

  // Edit product
  const editProduct = async () => {
    try {
      const response = await http(token).patch(`/product/edit/${pid}`, {name, description, stock})
      await http(token).patch(`/productSize/${pid}`, {sizeId, price})
      setMessageSuccess(response?.data?.message)
      setAlertSuccess(true)
      setTimeout(() => {setAlertSuccess(false)}, 5000)
    } catch(error) {
      console.log(error)
      setMessageError('Product edit failed.')
      setAlertError(true)
    }
  }

  // Show delete option
  const [showDeleteOption, setShowDeleteOption] = React.useState(false)

  // Delete product
  const [messageSuccessDelete, setMessageSuccessDelete] = React.useState('')
  const [showMessageSuccessDelete, setShowMessageSuccessDelete] = React.useState('')

  const deleteProduct = async () => {
    try {
      await http(token).delete(`/productSize/${pid}`)
      await http(token).delete(`/productCategory/${pid}`)
      await http(token).delete(`/deliveryTime/${pid}`)
      const response = await http(token).delete(`/product/${pid}`)
      setMessageSuccessDelete(response?.data?.message)
      setTimeout(()=> {
        router.replace('/dashboard-admin')
      }, 3000)
    } catch(error) {
      console.log(error)
    }
  }

  return (
    <div className='relative'>
      {showDeleteOption ? 
      <>
      <div className='absolute top-0 h-full w-screen bg-[#060606] opacity-80 z-10'>
      </div>
      <div className='sticky w-[500px] top-1/4 left-96 bg-white flex flex-col items-center gap-10 p-10 z-10 rounded-xl shadow-xl'>
        <div>
          <p>Are you sure want to delete this product?</p>
        </div>
        <div className='flex gap-10'>
          <div>
            <button type='button' onClick={() => setShowDeleteOption(false)} className='btn btn-outline border-2-[#7D6E83]'>Cancel</button>
          </div>
          <div>
            <button onClick={deleteProduct} type='button' className='btn bg-[#7D6E83] border-2-[#7D6E83]'>Delete</button>
          </div>
        </div>
      {showMessageSuccessDelete ? 
      <div class="alert alert-success shadow-lg">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <span>{messageSuccessDelete}</span>
        </div>
      </div> : false}
      </div>
      </> : false}
      {/* Navbar */}
      <NavbarAdmin />

      {/* Konten */}
      <main className='relative bg-[#F8EDE3] px-28 py-10'>
        <div className='flex gap-0.5'>
          <div>Favorite & Promo {'>'}</div>
          <div>Cold Brew {'>'}</div>
          <div>Edit Product</div>
        </div>
        <div className='flex gap-16'>
          <div className='flex-[45%]'>
            <div></div>

            <div  className='flex flex-col justify-center items-center mt-[40px]'>
              <div className='relative w-fit'>
                <div onClick={() => setShowDeleteOption(true)} className="absolute top-5 right-5 border-1 w-[50px] h-[50px] rounded-[50%] bg-red-300 flex justify-center items-center cursor-pointer">
                  <div className="border-1 bg-red-200 w-[40px] h-[40px] rounded-[50%] flex items-center justify-center">
                    <BiTrash clasName=" w-[18px] h-[20px]" />
                  </div>
                </div>
                <Image src={product?.picture} className="w-[523px]" width={523} height={790} alt="desc" ></Image>
              </div>
            </div>
            
            <div className='pt-10 text-xl'>
              <div>Delivery only on <span className='font-bold'>Monday to</span> </div>
              <div><span className='font-bold'>friday</span> at <span className='font-bold'>1 - 7 pm</span></div>
            </div>
          </div>


          <div className='flex-[55%] w-2/4'>
            <div className=''>
              <div className='pb-5 border-b-2 border-black'>
                <input onChange={(e) => setName(e.target.value)} type='text' className='text-6xl font-[900] bg-transparent focus:outline-none' defaultValue={product?.name} />
              </div>

              <div className='pt-5 pb-5 border-b-2 border-black'>
                <input onChange={(e) => setPrice(e.target.value)} className='text-4xl bg-transparent focus:outline-none' defaultValue={product?.price}/>
              </div>

              <div className='pt-5 pb-5 border-b-2 border-black'>
                <input onChange={(e) => setDescription(e.target.value)} className='input bg-transparent focus:outline-none font-normal text-2xl' defaultValue={product?.description}/>
              </div>
            </div>

            <div className='pt-10'>
              <select onChange={(e) => setSizeId(e.target.value)} className='input input-lg py-5 px-5 decoration-none rounded-lg focus:outline-none' defaultValue={product?.sizeId}>
                <option value='' disabled selected hidden>Select Size</option>
                <option value='1'>L</option>
                <option value='2'>R</option>
                <option value='3'>XL</option>
                <option value='5'>250 gr</option>
                <option value='6'>300 gr</option>
                <option value='7'>500 gr</option>
              </select>
            </div>

            <div className='pt-5'>
              <select onChange={(e) => setDeliveryMethodId(e.target.value)} className='input input-lg py-5 px-5 decoration-none rounded-lg focus:outline-none' defaultValue={product?.deliveryMethodId}>
                <option value='' disabled selected hidden>Select Delivery Methods</option>
                <option value='1'>Home Delivery</option>
                <option value='2'>Dine In</option>
                <option value='3'>Take Away</option>
              </select>
            </div>

            <div className='pt-5 flex justify-center gap-5'>
              <div className='flex items-center justify-center gap-5 border bg-white rounded-xl text-3xl font-bold px-10 py-3'>
                <div onClick={() => setStock(stock - 1)} className='cursor-pointer'>-</div>
                <div className='w-8 text-center' defaultValue={product?.value}>{stock}</div>
                <div onClick={() => setStock(stock + 1)} className='cursor-pointer'>+</div>
              </div>
              <div className='hidden'>
                <button className="btn btn-lg text-2xl font-bold">Add to Cart</button>
              </div>
            </div>
            {alertSuccess ? 
            <div className="alert alert-success shadow-lg mb-5">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>{messageSuccess}</span>
              </div>
            </div> : false}
            {alertError ? 
            <div className="alert alert-error shadow-lg mb-5">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>{messageError}</span>
              </div>
            </div> : false }
                <button onClick={editProduct} className="btn btn-lg text-2xl font-bold mt-5">Save change</button>
            </div>
        </div>
      </main>
      <div>      
      </div>
      <Footer></Footer>
    </div>
  )
}

export default EditProduct;