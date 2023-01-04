import React from 'react'
import Image from 'next/image'
import Logo from '../images/logoOurCoffee.png'
import FeatherIcon from 'feather-icons-react'
import http from '../helpers/http'
import {useRouter} from 'next/router'

const ForgotPassword = () => {
  const router = useRouter()
  const [email, setEmail] = React.useState('')
  const [successMessage, setSuccessMessage] = React.useState('')
  const [alertSuccessMessage, setAlertSucceessMessage] = React.useState(false)

  const cb = () => {
    setTimeout(() => {
      router.replace('/reset-password')
    }, 3000)
  }
  const requestForgotPassword = async (e) => {
    e.preventDefault()
    try {
      const response = await http().post('/auth/forgotPassword', {email})
      setSuccessMessage(response?.data?.message)
      setAlertSucceessMessage(true)
      cb()
    } catch(error) {
      console.log(error)
    }
  }

  return(
    <>
      <section>
        <div className="bg-[#F8EDE3] bg-forgot-password text-white flex flex-col items-center gap-5 md:gap-20 py-10 md:py-32">
          <div className='text-center font-bold w-3/4 md:w-full'>
            <h1 className='md:hidden text-black text-6xl mb-3'>Don&apos;t<br/>Worry!</h1>
            <p className='md:hidden text-black font-normal'>We&apos;ve just sent a link to your email to request a new password</p>
            <h1 className='hidden md:block text-5xl mb-3'>Forgot your password?</h1>
            <p className='hidden md:block text-xl'>Don&apos;t worry, we got your back!</p>
          </div>
          <div className='md:hidden'>
            <Image src={require('../images/boyWaiting.png')} alt='forgot password' className='py-5 w-4/4'/>
          </div>
          <form onSubmit={requestForgotPassword}>
            <div className='flex items-center gap-5'>
              <div className='w-96 text-black border-b-2 md:border-b-0'>
                <input onChange={(e) => setEmail(e.target.value)} type='email' name='email' placeholder='Enter your email adress to get link' className='input md:input-bordered md:input-lg focus:outline-none bg-transparent md:bg-white'/>
              </div>
              <div className='hidden md:block'>
                <button type='submit' className='btn btn-lg bg-[#7D6E83]'>Send</button>
              </div>
            </div>
            {alertSuccessMessage ?
            <div className="alert alert-success shadow-lg my-10">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>{successMessage}</span>
              </div>
            </div> : false}
          </form>
          <div className='md:hidden'>
            <p className='text-black'>Haven&apos;t received any link?</p>
          </div>
          <div className='hidden text-center text-xl font-bold w-96 flex flex-col gap-5'>
            <p className='hidden md:block'>Click here if you didn&apos;t receive any link in 2 minutes</p>
            <div>
              <button className='btn md:btn-lg rounded-2xl'>Resend Link</button>
            </div>
            <p className='hidden md:block'>01:54</p>
          </div>
        </div>

        <footer className='hidden md:flex gap-20 relative bg-[#F8EDE3] pt-36 pb-20 pl-28 px-52'>
          <div className='flex-1 flex flex-col gap-5'>
            <div className='flex items-center gap-3'>
              <Image src={Logo} alt='Logo' className='w-8 h-8'/>
              <p className='font-bold text-lg'>Our Coffee</p>
            </div>
            <div>
              <p className='w-72'>Our coffee is a store that sells some good meals, and especially coffee. We provide high quality beans</p>
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
              <li className='cursor-pointer'>Our Coffee ?  </li>
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

export default ForgotPassword