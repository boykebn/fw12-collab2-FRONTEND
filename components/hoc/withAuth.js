import React from 'react'
import { useSelector } from "react-redux"
import { useRouter } from 'next/router'
import jwt_decode from 'jwt-decode'

const withAuth = (Components) => {
  return (props) => {
    const router = useRouter()
    const token = useSelector((state) => state?.auth?.token)
    let role
    token ? {role} = jwt_decode(token) : false
    React.useEffect(()=>{
      if(!token) {
        router.replace('/login')
      } else if (role === '1') {
        router.replace('/product')
      }
    }, [token])
    return <Components {...props} />
  }
}

export default withAuth