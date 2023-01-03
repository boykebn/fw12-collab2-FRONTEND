import React from 'react'
import Image from 'next/image'
import Logo from '../images/logoOurCoffee.png'
import GoogleLogo from '../images/google.png'
import FeatherIcon from 'feather-icons-react'
import Link from 'next/link'
import {Formik, Form, Field} from 'formik'
import * as Yup from 'yup'
import YupPasword from 'yup-password'
YupPasword(Yup)
import http from '../helpers/http'
import {useDispatch} from 'react-redux'
import { useRouter } from "next/router"
import { login as loginAction } from '../redux/reducers/auth'
import withoutAuth from '../components/hoc/withoutAuth'

const phoneRegExpID = /^(^08)(\d{8,10})$/

const SignUpSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .password()
    .min(8, 'Min lenght 8')
    .minLowercase(1, 'Min lowercase 1')
    .minUppercase(1, 'Min uppercase 1')
    .minSymbols(1, 'Min symbol 1')
    .minNumbers(1, 'Min number 1'),
  phoneNumber: Yup.string()
    .matches(phoneRegExpID, 'Invalid phone number')
    .required('Required')
})

const SignUp = () => {
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

  // Sign Up
  const cb = () => {
    router.push('/product')
  }
  const login = async (value) => {
    try{
      const response = await http().post('/auth/register', value)
      const token = response?.data?.results?.token
      dispatch(loginAction({token}))
      cb()
    } catch(error) {
      console.log(error)
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
              <Link href="/login" className='flex w-24 items-center justify-center'>
                <button className='btn btn-sm bg-[#7D6E83] rounded-3xl font-bold text-white'>Login</button>
              </Link>
            </div>
            <div className='flex justify-center'>
            <Formik initialValues={{
              email: '',
              password: '',
              phoneNumber: ''
            }}
            validationSchema={SignUpSchema}
            onSubmit={(value) => login(value)}>
              {({errors, touched}) => (
                <Form className='px-5 flex flex-col items-center gap-8'>
                  <div className='py-5 relative'>
                    <Image src={require('../images/girlChilling.png')} className='md:hidden w-4/4' />
                    <h1 className='md:hidden font-bold text-6xl absolute top-12 right-5'>Sign<br/>Up</h1>
                    <h1 className='hidden md:block font-bold text-3xl text-[#7D6E83]'>Sign Up</h1>
                  </div>
                  <div className='w-[25rem] border-b-2 md:border-b-0'>
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
                  <div className='w-[25rem] border-b-2 md:border-b-0'>
                    <label>Phone Number :</label><br />
                    <Field type='phoneNumber' name='phoneNumber' placeholder='Enter your phone number' className='input md:input-bordered bg-transparent focus:outline-none mt-2 w-full rounded-2xl'/>
                    {errors.phoneNumber && touched.phoneNumber ? <div className='absolute text-red-500 text-sm'>{errors.phoneNumber}</div> : null}
                  </div>
                  <div className='w-[25rem] mt-3'>
                    <button type='submit' className='btn bg-[#7D6E83] text-white font-bold text-lg rounded-2xl'>Sign Up</button>
                  </div>
                </Form>
              )}
            </Formik>
            </div>
            <div className='flex justify-center py-5'>
              <div className='w-[25rem]'>
                <button className='btn bg-white drop-shadow-xl text-[#7D6E83] border-none font-bold text-lg rounded-2xl flex items-center gap-5 hover:text-white'>
                  <Image src={GoogleLogo} alt='Google Logo' />
                  <p>Sign up with Google</p>
                </button>
              </div>
            </div>
          </div>
        </div>

        <footer className='hidden md:flex gap-20 relative bg-[#F8EDE3] pt-36 pb-20 pl-28 px-52'>
          <div className='absolute -top-24 inset-x-28 bg-white shadow-lg rounded-lg hidden items-center p-10 w-3/4'>
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

export default withoutAuth(SignUp)