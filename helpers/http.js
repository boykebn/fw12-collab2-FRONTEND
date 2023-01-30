import axios from "axios";

const http = (token) => {
  const headers = {};
  if (token) {
    headers.authorization = "Bearer " + token;
  }
  const instance = axios.create({
    baseURL: process.env.DATA_BACKEND || "http://localhost:8888",
    headers,
    keepAlive: true,
  });
  return instance;
};

export default http;
