import Image from 'next/image'
import Logo from '../images/logoOurCoffee.png'
import GoogleLogo from '../images/google.png'
import FeatherIcon from 'feather-icons-react'

const SignUp = () => {
  return(
    <>
      <section>
        <div className='flex'>
          {/* Left */}
          <div className='flex-[45%]'>
            <Image src={require('../images/authBackground.png')} alt='Background' className='5/6'/>
          </div>

          {/* Right */}
          <div className='flex-[55%]'>
            <div className='flex items-center py-14 pl-12 pr-36'>
              <div className='flex-1 flex items-center gap-3'>
                <Image src={Logo} alt='Logo' className='w-10 h-10' />
                <p className='font-bold text-2xl'>Our Coffee</p>
              </div>
              <div className='flex w-24 items-center justify-center'>
                <button className='btn btn-sm bg-[#7D6E83] rounded-3xl font-bold text-white'>Login</button>
              </div>
            </div>
            <form className='flex flex-col items-center gap-5'>
              <div className='py-5'>
                <h1 className='font-bold text-3xl text-[#7D6E83]'>Sign Up</h1>
              </div>
              <div className='w-[25rem]'>
                <label>Email Adress :</label><br />
                <input type='text' name='email' placeholder='Enter your email adress' className='input input-bordered focus:outline-none mt-2 w-full rounded-2xl'/>
              </div>
              <div className='w-[25rem]'>
                <label>Password :</label><br />
                <input type='password' name='password' placeholder='Enter your password' className='input input-bordered focus:outline-none mt-2 w-full rounded-2xl'/>
              </div>
              <div className='w-[25rem]'>
                <label>Phone Number :</label><br />
                <input type='phoneNumber' name='phoneNumber' placeholder='Enter your phone number' className='input input-bordered focus:outline-none mt-2 w-full rounded-2xl'/>
              </div>
              <div className='w-[25rem] mt-3'>
                <button className='btn bg-[#7D6E83] text-white font-bold text-lg rounded-2xl'>Sign Up</button>
              </div>
              <div className='w-[25rem]'>
                <button className='btn bg-white drop-shadow-xl text-[#7D6E83] border-none font-bold text-lg rounded-2xl flex items-center gap-5 hover:text-white'>
                  <Image src={GoogleLogo} />
                  <p>Sign up with Google</p>
                </button>
              </div>
            </form>
          </div>
        </div>

        <footer className='flex gap-20 relative bg-[#F8EDE3] pt-36 pb-20 pl-28 px-52'>
          <div className='absolute -top-24 inset-x-28 bg-white shadow-lg rounded-lg flex items-center p-10 w-3/4'>
            <div className='flex-1'>
              <p className='font-bold text-3xl w-2/4 mb-5'>Get your member card now!</p>
              <p>Let's join with our member and enjoy the deals.</p>
            </div>
            <div>
              <button className='btn text-xl bg-[#7D6E83]'>Create Now</button>
            </div>
          </div>

          <div className='flex-1 flex flex-col gap-5'>
            <div className='flex items-center gap-3'>
              <Image src={Logo} alt='Logo' className='w-8 h-8'/>
              <p className='font-bold text-lg'>Our Coffee</p>
            </div>
            <div>
              <p className='w-72'>Coffee Shop is a store that sells some good meals, and especially coffee. We provide high quality beans</p>
            </div>
            <div className='flex gap-5'>
              <div className='bg-[#7D6E83] flex items-center justify-center rounded-full w-10 h-10'>
                <FeatherIcon icon="facebook" />
              </div>
              <div className='bg-[#7D6E83] flex items-center justify-center rounded-full w-10 h-10'>
                <FeatherIcon icon="twitter" />
              </div>
              <div className='bg-[#7D6E83] flex items-center justify-center rounded-full w-10 h-10'>
                <FeatherIcon icon="instagram" />
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
              <li className='cursor-pointer'>Coffe Shop ?  </li>
              <li className='cursor-pointer'>FAQ</li>
              <li className='cursor-pointer'>About Us</li>
              <li className='cursor-pointer'>Privacy Policy</li>
              <li className='cursor-pointer'>Terms of Service</li>
            </ul>
          </div>
        </footer>
      </section>
    </>
  )
}

export default SignUp