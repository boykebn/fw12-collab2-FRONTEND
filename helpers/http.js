import axios from "axios";

const http = (token) => {
    const headers = {}
    if(token){
        headers.authorization = 'Bearer '+ token
    }
    const instance = axios.create({
    
        baseURL: 'https://fw12-collab2-backend.vercel.app',
        headers,
    })
    return instance
}

export default http;