import axios from "axios";

const http = (token) => {
  const headers = {};
  if (token) {
    headers.authorization = "Bearer " + token;
  }
  const instance = axios.create({
    // baseURL: "http://localhost:8888",
    baseURL: process.env.DATA_BACKEND || 'https://fw12-collab2-backend.vercel.app',
    headers,
  });
  return instance;
};

export default http;

