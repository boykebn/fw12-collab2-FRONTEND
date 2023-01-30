import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import { BiTrash } from "react-icons/bi";
import ModalDelete from '../components/modal-delete';

const EditProduct = () => {
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
              <div>Cold Brew {'>'}</div>
              <div>Edit Product</div>
            </div>

            <div className='relatif flex flex-col justify-center items-center mt-[40px]'>
              <div className='absolute pb-[700px] pl-[430px]'>
                <div className="border-1 w-[50px] h-[50px] rounded-[50%] bg-red-300 flex justify-center items-center ">
                  <div className="border-1 bg-red-200 w-[40px] h-[40px]  rounded-[50%] flex items-center justify-center">
                    <BiTrash clasName=" w-[18px] h-[20px]" />
                  </div>
                </div>
              </div>
              <Image src={require('../images/for-edit.png')} className="w-[523px] h-[790px]" alt="desc" ></Image>
            </div>
            
              <div className='pt-10 text-xl'>
                <div>Delivery only on <span className='font-bold'>Monday to</span> </div>
                <div><span className='font-bold'>friday</span> at <span className='font-bold'>1 - 7 pm</span></div>
              </div>
          </div>


          <div className='ml-[10%] pt-[80px]'>
            <div className=''>
              <div className='pb-5'>
                <h1 className='text-6xl font-[900]'>COLD BREW</h1>
              </div>

              <hr className='w-[549px] bg-black h-0.5' />

              <div className='pt-5 pb-5'>
                <h1 className='text-4xl'>IDR 30.00</h1>
              </div>

              <hr className='w-[549px] bg-black ' />

              <div className='w-[500px] pt-5 pb-5'>
                <div className='font-normal text-2xl'>Cold brewing is a method of brewing that combines ground coffee and cool water and uses time instead of heat to extract the flavor. It is brewed in small batches and steeped for as long as 48 hours.</div>
              </div>

              <hr className='w-[549px] bg-black h-0.5' />
            </div>

            <div className=' pt-10'>
              <select className='w-[549px] h-[83px] py-5 px-5 decoration-none rounded-lg' placeholder='Select Size'>
                <option></option>
                <option></option>
                <option></option>
              </select>
            </div>

            <div className=' pt-10'>
              <select className='w-[549px] h-[83px] py-5 px-5 decoration-none rounded-lg' placeholder='Select Delivery Methods'>
                <option></option>
                <option></option>
                <option></option>
              </select>
            </div>

            <div className='pt-10 flex gap-5'>
              <div className='flex gap-5 border w-[167px] h-[83px] bg-white rounded-xl text-4xl font-bold px-10 py-5'>
                <div>+</div>
                <div>1</div>
                <div>-</div>
              </div>
              <div className='w-[358px]'>
                <button className="btn h-[83px] text-2xl font-bold">Add to Cart</button>
              </div>
            </div>
                <button className="btn h-[83px] text-2xl font-bold mt-5">Save change</button>
          </div>
        </div>
      </main>
      <div>
      <a href="#my-modal-2" className="btn">open modal</a>
      <ModalDelete />
      </div>
      <Footer></Footer>
    </>
  )
}

export default EditProduct;