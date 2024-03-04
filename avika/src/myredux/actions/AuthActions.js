import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginAdmin = createAsyncThunk(
  "admin/loginAdmin",
  async (loginCredientials) => {
    try {
      const request = await axios.post(
        "https://med.test.avika.ai/auth/admin-login",
        loginCredientials
      );
      const response = await request.data.data;
      localStorage.setItem("admin", JSON.stringify(response));
      return response;
    } catch (error) {
      throw error;
    }
  }
);
