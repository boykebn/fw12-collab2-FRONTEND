import Image from 'next/image'
import Link from 'next/link'
import Footer from '../../components/footer'
import Navbar from '../../components/navbar'
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import http from "../../helpers/http";
import { useSelector } from 'react-redux';

const AdminProductDetails = () => {
  const token = useSelector((state) => state?.auth?.token)
  const router = useRouter();
  const { pid } = router.query;

  //fetching data id product
  const [productId, setProductId] = useState({});
  const fetchProductId = async () => {
    try {
      const { data } = await http().get(`/product/${pid}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setProductId(data.results);
    } catch (error) {
      if (error) throw error;
    }
  };

  React.useEffect(() => {
    if (pid) {
      fetchProductId();
    }
  }, [pid]);
  console.log(productId);

  // Show delete option
  const [showDeleteOption, setShowDeleteOption] = React.useState(false)

  // Delete product
  const [messageSuccessDelete, setMessageSuccessDelete] = React.useState('')
  const [showMessageSuccessDelete, setShowMessageSuccessDelete] = React.useState(false)

  const deleteProduct = async () => {
    try {
      await http(token).delete(`/productSize/${pid}`)
      await http(token).delete(`/productCategory/${pid}`)
      await http(token).delete(`/deliveryTime/${pid}`)
      const response = await http(token).delete(`/product/${pid}`)
      setMessageSuccessDelete(response?.data?.message)
      setShowMessageSuccessDelete(true)
      setTimeout(()=> {
        router.replace('/product-admin')
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
      <Navbar></Navbar>

      {/* Konten */}
      <main className='relative bg-[#F8EDE3] pt-[52px] pb-[10%]'>
        <div className='flex'>
          <div className='ml-[5%]'>
          <div className="flex gap-0.5 pl-[5%]">
              <div>Favourite & Promo {">"}</div>
              <div>
                {productId?.nameCategory} {">"}
              </div>
              <div>{productId?.name}</div>
            </div>

            <div className='flex flex-col justify-center items-center mt-[40px]'>
                  {productId?.picture ?(
                    <Image
                      src={productId?.picture || require("../../images/food_vegie.png")}
                      width={400}
                      height={400}
                      className="rounded-full"
                      alt="desc"
                    ></Image>):(
                    <Image
                      src={require("../../images/food_vegie.png")}
                      width={400}
                      height={400}
                      className="rounded-full"
                      alt="desc"
                    ></Image>
                  )}
              {/* <Image src={require('../../images/cold-brew.png')} className="rounded-full h-[400px] w-[400px]" alt="desc" ></Image> */}
              <div className='text-center'>
                <div className='font-black text-[65px]'>{productId?.name}</div>
                <div className='font-medium text-[35px] mb-[42px]'>IDR {Number(productId?.price).toLocaleString("id")}</div>
                <div className='flex flex-col gap-[25px]'>
                  <button className='bg-[#DFD3C3] py-5 w-full rounded-lg'>Add to Cart</button>
                  <button className='bg-[#7D6E83] py-5 w-full rounded-lg text-white'>Edit Product</button>
                  <button onClick={() => setShowDeleteOption(true)} className='bg-[#7D6E83] py-5 w-full rounded-lg text-white'>Delete Menu</button>
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
                <div className='break-all'>{productId?.description}</div>
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

      <div className='flex bg-[#F8EDE3] justify-center items-center gap-[48px]'>
        <div className='absolute flex bg-[#FFFFFF] justify-center items-center rounded-lg px-[32px] py-[32px] gap-[46px] mr-[500px] shadow-lg shadow-gray-600'>
          <div>
          {productId?.picture ?(
                    <Image
                      src={productId?.picture || require("../../images/food_vegie.png")}
                      width={50}
                      height={50}
                      className="rounded-full"
                      alt="desc"
                    ></Image>):(
                    <Image
                      src={require("../../images/food_vegie.png")}
                      width={50}
                      height={50}
                      className="rounded-full"
                      alt="desc"
                    ></Image>
                  )}
            {/* <Image src={require('../../images/cold-brew.png')} className="rounded-full" width="50" height="50" alt="desc" ></Image> */}
          </div>
          <div className='grow gap-5'>
            <div className='font-bold text-xl'>{productId?.name}</div>
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
        <div className='absolute flex pl-[300px]'>
          <button className=' bg-[#7D6E83] py-[50px] px-[57px] rounded-lg shadow-lg shadow-gray-600 text-white font-bold text-[25px]'>Checkout</button>
        </div>
      </div>

      <Footer></Footer>
    </div>
  )
}

export default AdminProductDetails;