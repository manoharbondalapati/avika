import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loginAdmin = createAsyncThunk(
  "admin/loginAdmin",
  async (adminCredentails) => {
    const request = await axios.post(
      "https://med.test.avika.ai/auth/admin-login",
      adminCredentails
    );
    const response = await request.data.data;
    localStorage.setItem("admin", JSON.stringify(response));
    return response;
  }
);

const AdminSlice = createSlice({
  name: "admin",
  initialState: {
    loading: false,
    admin: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAdmin.pending, (state)=>
      {
        state.loading=true;
        state.admin=null;
        state.error=null;
      })
      .addCase(loginAdmin.fulfilled, (state, action) => {
        state.loading = false;
        state.admin = action.payload;
        state.error = null;
      })
      .addCase(loginAdmin.rejected, (state, action) => {
        state.loading = false;
        state.admin = null;
        state.error = action.error.message;
        console.log(action.error.message);
        if (action.error.message === "Request failed with status code 401") {
          state.error = "Invalid Credentials";
        } else {
          state.error = action.error.message;
        }
      });
  },
});

export default AdminSlice.reducer;
