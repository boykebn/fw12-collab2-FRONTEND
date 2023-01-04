import React from 'react'
import Image from 'next/image'
import Logo from '../images/logoOurCoffee.png'
import FeatherIcon from 'feather-icons-react'
import {Formik, Form, Field} from 'formik'
import * as Yup from 'yup'
import YupPasword from 'yup-password'
YupPasword(Yup)
import http from '../helpers/http'
import {useRouter} from 'next/router'

const ResetPasswordSchema = Yup.object().shape({
  newPassword: Yup.string()
    .password()
    .min(8, 'Min lenght 8')
    .minLowercase(1, 'Min lowercase 1')
    .minUppercase(1, 'Min uppercase 1')
    .minSymbols(1, 'Min symbol 1')
    .minNumbers(1, 'Min number 1'),
  confirmNewPassword: Yup.string()
    .password()
    .min(8, 'Min lenght 8')
    .minLowercase(1, 'Min lowercase 1')
    .minUppercase(1, 'Min uppercase 1')
    .minSymbols(1, 'Min symbol 1')
    .minNumbers(1, 'Min number 1')
})

const ResetPassword = () => {
  const router = useRouter()

  const [eyeClicked1, setEyeClicked1] = React.useState(false)
  const [eyeClicked2, setEyeClicked2] = React.useState(false)
  const showNewPassword = () => {
    if (eyeClicked1 === false) {
      setEyeClicked1(true)
    } else {
      setEyeClicked1(false)
    }
  }
  const showConfirmNewPassword = () => {
    if (eyeClicked2 === false) {
      setEyeClicked2(true)
    } else {
      setEyeClicked2(false)
    }
  }

  // Reset password
  const [successMessage, setSuccessMessage] = React.useState('')
  const [ErrorMessage, setErrorMessage] = React.useState('')
  const [alertSuccess, setAlertSuccess] = React.useState(false)
  const [alertError, setAlertError] = React.useState(false)

  const cb = () => {
    setTimeout(() => {
      router.replace('/login')
    }, 5000)
  }

  const resetPassword = async (value) => {
    try {
      if (value.password === value.confirmPassword) {
        const response = await http().post('/auth/resetPassword', value)
        setSuccessMessage(response?.data?.message)
        setAlertSuccess(true)
        cb()
      } else {
        setErrorMessage("Confirm Password doesn't match")
        setAlertError(true)
      }
    } catch(error) {
      console.log(error)
    }
  }

  return(
    <>
      <section>
        <div className="bg-[#F8EDE3] bg-forgot-password md:text-white flex flex-col items-center gap-5 md:gap-20 py-10 md:py-32">
          <div className='text-center font-bold w-3/4 md:w-full'>
            <h1 className='text-5xl mb-3'>Reset your password</h1>
          </div>
          {alertSuccess ? 
          <div class="alert alert-success shadow-lg w-96">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>{successMessage}</span>
            </div>
          </div> : false}
          {alertError ? 
          <div class="alert alert-error shadow-lg w-96">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>{ErrorMessage}</span>
            </div>
          </div> : false}
          <div className='md:hidden'>
            <Image src={require('../images/boyWaiting.png')} alt='forgot password' className='py-5 w-4/4'/>
          </div>
          <div>
            <Formik initialValues={{
              email: '',
              code: '',
              password: '',
              confirmPassword: ''
            }}
            validationSchema={ResetPasswordSchema}
            onSubmit={(value) => resetPassword(value)}>
              {({errors, touched}) => (
                <Form onChange={() => setAlertError(false)} className='flex flex-col items-center gap-10'>
                <div className='w-96 text-black border-b-2 md:border-b-0'>
                  <label className='font-bold md:text-white text-lg'>Email :</label>
                  <Field type='email' name='email' placeholder='Enter your reset password code' className='input md:input-bordered md:input-lg focus:outline-none bg-transparent md:bg-white mt-3'/>
                </div>
                <div className='w-96 text-black border-b-2 md:border-b-0'>
                  <label className='font-bold md:text-white text-lg'>Password Reset Code :</label>
                  <Field type='text' name='code' placeholder='Enter your reset password code' className='input md:input-bordered md:input-lg focus:outline-none bg-transparent md:bg-white mt-3'/>
                </div>
                <div className='w-96 text-black relative border-b-2 md:border-b-0'>
                  <label className='md:text-white font-bold'>New Password :</label><br />
                  <FeatherIcon onClick={showNewPassword} icon={eyeClicked1 ? 'eye-off' : 'eye'} className='absolute right-5 bottom-5 opacity-20 cursor-pointer'/>
                  <Field type={eyeClicked1? 'text' : 'password'} name='password' placeholder='Enter your new password' className='input md:input-bordered md:input-lg focus:outline-none bg-transparent md:bg-white mt-3'/>
                  {errors.password && touched.password ? <div className='text-red-500 text-sm absolute'>{errors.password}</div> : null}
                </div>
                <div className='w-96 text-black relative border-b-2 md:border-b-0'>
                  <label className='md:text-white font-bold'>Confirm New Password :</label><br />
                  <FeatherIcon onClick={showConfirmNewPassword} icon={eyeClicked2 ? 'eye-off' : 'eye'} className='absolute right-5 bottom-5 opacity-20 cursor-pointer'/>
                  <Field type={eyeClicked2? 'text' : 'password'} name='confirmPassword' placeholder='Enter your confirm new password' className='input md:input-bordered md:input-lg focus:outline-none bg-transparent md:bg-white mt-3'/>
                  {errors.confirmPassword && touched.confirmPassword ? <div className='text-red-500 text-sm absolute'>{errors.confirmPassword}</div> : null}
                </div>
                <div className='w-96 mt-3'>
                  <button type='submit' className='btn btn-lg bg-[#7D6E83] text-white font-bold text-lg border-0'>Submit</button>
                </div>
                </Form>
              )}

            </Formik>
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

export default ResetPassword