import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../images/logoOurCoffee.png'
import GoogleLogo from '../images/google.png'
import FeatherIcon from 'feather-icons-react'
import {Formik, Form, Field} from 'formik'
import * as Yup from 'yup'
import YupPasword from 'yup-password'
import http from '../helpers/http'
YupPasword(Yup)
import {useDispatch} from 'react-redux'
import {useRouter} from 'next/router'
import { login as loginAction } from '../redux/reducers/auth'
import jwt_decode from "jwt-decode";
import withoutAuth from "../components/hoc/withoutAuth"

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
  const dispatch = useDispatch()
  const router = useRouter()

  const [eyeClicked, setEyeClicked] = React.useState(false)
  const showPassword = () => {
    if (eyeClicked === false) {
      setEyeClicked(true)
    } else {
      setEyeClicked(false)
    }
  }

  // Login
  const [role, setRole] = React.useState(null)
  const [errorMessage, setErrorMessage] = React.useState('')
  const [alertError, setAlertError] = React.useState(false)
  const [alertSuccess, setAlertSuccess] = React.useState(false)

  const toProduct = () => {
    setTimeout(()=>{
      router.replace('/product')
    }, 3000)
  }
  const toDashboard = () => {
    setTimeout(()=>{
      router.replace('/dashboard-admin')
    }, 3000)
  }

  const login = async (value) => {
    try {
      const response = await http().post('/auth/login', value)
      const token = response?.data?.results?.token
      const decode = jwt_decode(token)
      const role = decode?.role
      dispatch(loginAction({token}))
      setAlertSuccess(true)
      if (role == 1) {
        toProduct()
      } else {
        toDashboard()
      }
    } catch(error) {
      setErrorMessage(error?.response?.data?.message)
      setAlertError(true)
    }
  }

  return(
    <>
      <section>
        <div className='flex'>
          {/* Left */}
          <div className='hidden md:block flex-[45%]'>
            <Image src={require('../images/authBackground.png')} alt='Background' className='5/6'/>
          </div>

          {/* Right */}
          <div className='flex-[55%] py-10 md:py-0 bg-[#F8EDE3] md:bg-white'>
            <div className='hidden md:flex items-center py-14 px-5'>
              <div className='flex-1 flex items-center gap-3'>
                <Image src={Logo} alt='Logo' className='w-10 h-10' />
                <p className='font-bold text-2xl'>Our Coffee</p>
              </div>
              <Link href='/sign-up' className='flex w-24 items-center justify-center'>
                <button className='btn btn-sm bg-[#7D6E83] rounded-3xl font-bold text-white'>Sign Up</button>
              </Link>
            </div>
            <div className='flex justify-center'>
            <Formik initialValues={{
              email: '',
              password: ''
            }}
            validationSchema={LoginSchema}
            onSubmit={(value) => login(value)}>
              {({errors, touched}) => (
                <Form className='px-5 flex flex-col' onChange={() => setAlertError(false)}>
                  <div className='relative py-5 md:my-8'>
                    <Image src={require('../images/ladyCoffee.png')} alt='ladiCoffee' className='md:hidden pl-10 w-3/5' />
                    <h1 className='md:hidden font-bold text-6xl absolute top-32 right-20'>Log<br/>In</h1>
                    <h1 className='hidden md:block font-bold text-3xl text-[#7D6E83] text-center'>Login</h1>
                    {alertError ?
                    <div className="alert alert-error shadow-lg mt-8">
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span>{errorMessage}</span>
                    </div>
                  </div> : false }
                  {alertSuccess ?
                  <div className="alert alert-success shadow-lg mt-8">
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span>Login succesfully</span>
                    </div>
                  </div> : false}
                  </div>
                  <div className='w-[25rem] border-b-2 md:border-b-0 mb-8'>
                    <label>Email Address :</label><br />
                    <Field type='email' name='email' placeholder='Enter your email adress' className='input md:input-bordered bg-transparent focus:outline-none mt-2 w-full rounded-2xl'/>
                    {errors.email && touched.email ? <div className='absolute text-red-500 text-sm'>{errors.email}</div> : null}
                  </div>
                  <div className='w-[25rem] relative border-b-2 md:border-b-0'>
                    <label>Password :</label><br />
                    <FeatherIcon onClick={showPassword} icon={eyeClicked ? 'eye-off' : 'eye'} className='absolute right-5 bottom-3 opacity-20 cursor-pointer'/>
                    <Field type={eyeClicked? 'text' : 'password'} name='password' placeholder='Enter your password' className='input md:input-bordered bg-transparent focus:outline-none mt-2 w-full rounded-2xl'/>
                    {errors.password && touched.password ? <div className='text-red-500 text-sm absolute'>{errors.password}</div> : null}
                  </div>
                  <div className='mb-8 text-end mt-3'>
                    <Link href='/forgot-password' className='font-bold text-[#7D6E83] underline'>Forgot password?</Link>
                  </div>
                  <div className='w-[25rem] mt-3'>
                    <button type='submit' className='btn bg-[#7D6E83] text-white font-bold text-lg rounded-2xl'>Login</button>
                  </div>
                </Form>
              )}
            </Formik>
            </div>
            <div className='flex justify-center py-5'>
              <div className='w-[25rem]'>
                <button className='btn bg-white drop-shadow-xl text-[#7D6E83] border-none font-bold text-lg rounded-2xl flex items-center gap-5 hover:text-white'>
                  <Image src={GoogleLogo} alt='Google Logo' />
                  <p>Login with Google</p>
                </button>
              </div>
            </div>
          </div>
        </div>

        <footer className='hidden md:flex gap-20 relative bg-[#F8EDE3] pt-36 pb-20 pl-28 px-52'>
          <div className='absolute -top-24 inset-x-28 bg-white shadow-lg rounded-lg items-center p-10 w-3/4 hidden'>
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

export default withoutAuth(Login)