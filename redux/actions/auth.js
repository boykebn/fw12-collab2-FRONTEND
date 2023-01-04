import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../helper/http";

export const loginAction = createAsyncThunk(
  "auth/loginAction",
  async ({ email, password, cb }) => {
    try {
      const { data } = await http().post("/auth/login", { email, password });
      cb();
      return data.results;
    } catch (error) {
      return error.response.data.message;
    }
  }
);

export const registerAction = createAsyncThunk(
  "auth/registerAction",
  async ({ email, password, phoneNumber, cb }) => {
    try {
      const { data } = await http().post("/auth/register", {
        email,
        password,
        phoneNumber,
      });
      cb();
      return data.results;
    } catch (error) {
      return error.response.data.message;
    }
  }
);
