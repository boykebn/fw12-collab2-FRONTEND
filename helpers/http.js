import axios from "axios";

const http = (token) => {
  const headers = {};
  if (token) {
    headers.authorization = "Bearer " + token;
  }
  console.log(process.env.NEXT_PUBLIC_DATA_BACKEND)
  const instance = axios.create({
    // baseURL: 'http://localhost:8888',
    baseURL: process.env.NEXT_PUBLIC_DATA_BACKEND,
    headers,
    keepAlive: true,
  });
  return instance;
};

export default http;
