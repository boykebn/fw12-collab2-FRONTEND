import axios from "axios";

const http = (token) => {
  const headers = {};
  if (token) {
    headers.authorization = "Bearer " + token;
  }
  const instance = axios.create({
<<<<<<< HEAD
    baseURL: process.env.DATA_BACKEND || "http://localhost:8888",
=======
    // baseURL: 'http://localhost:8888',
    baseURL: process.env.DATA_BACKEND || 'https://fw12-collab2-backend.vercel.app',
>>>>>>> 6630fe851b61348ec2f9b3e1c307ec096b19b643
    headers,
    keepAlive: true,
  });
  return instance;
};

export default http;
