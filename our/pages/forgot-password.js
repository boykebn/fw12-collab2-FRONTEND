import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../images/logoOurCoffee.png'
import GoogleLogo from '../images/google.png'
import FeatherIcon from 'feather-icons-react'
import {Formik, Form, Field} from 'formik'
import * as Yup from 'yup'
import YupPasword from 'yup-password'
YupPasword(Yup)

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .password()
    .min(8, 'Min lenght 8')
    .minLowercase(1, 'Min lowercase 1')
    .minUppercase(1, 'Min uppercase 1')
    .minSymbols(1, 'Min symbol 1')
    .minNumbers(1, 'Min number 1')
})

const Login = () => {
  const [eyeClicked, setEyeClicked] = React.useState(false)
  const showPassword = () => {
    if (eyeClicked === false) {
      setEyeClicked(true)
    } else {
      setEyeClicked(false)
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
          <div className='flex items-center gap-5'>
            <div className='w-96 text-black border-b-2 md:border-b-0'>
              <input type='email' name='email' placeholder='Enter your email adress to get link' className='input md:input-bordered md:input-lg focus:outline-none bg-transparent md:bg-white'/>
            </div>
            <div className='hidden md:block'>
              <button className='btn btn-lg bg-[#7D6E83]'>Send</button>
            </div>
          </div>
          <div className='md:hidden'>
            <p className='text-black'>Haven&apos;t received any link?</p>
          </div>
          <div className='text-center text-xl font-bold w-96 flex flex-col gap-5'>
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

export default Login