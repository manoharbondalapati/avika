import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loginAdmin = createAsyncThunk(
  "admin/loginAdmin",
  async (adminCredentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://med.test.avika.ai/auth/admin-login",
        adminCredentials
      );

      localStorage.setItem("token", response.data.data.token);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
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
      .addCase(loginAdmin.pending, (state) => {
        state.loading = true;
        state.admin = null;
        state.error = null;
      })
      .addCase(loginAdmin.fulfilled, (state, action) => {
        state.loading = false;
        state.admin = action.payload;
        state.error = null;
      })
      .addCase(loginAdmin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        if (action.payload) {
          state.error = action.payload.message;
        } else {
          state.error = "Invalid Credentials";
        }
      });
  },
});

export const setToken = createAction("admin/setToken");
export const { clearError } = AdminSlice.actions;
export default AdminSlice.reducer;
