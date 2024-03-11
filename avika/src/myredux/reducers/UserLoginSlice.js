import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
  "userlogin/loginUser",
  async (userCredentails, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://med.test.avika.ai/auth/login",
        userCredentails
      );
      // const response = await request.data.data.token;
      localStorage.setItem("user", response.data.data.token);
      console.log(response.data.data.token);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const UserLoginSlice = createSlice({
  name: "userlogin",
  initialState: {
    loading: false,
    user: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.error = action.error.message;
        if (action.payload) {
          state.error = action.payload.message;
        } else {
          state.error = "Invalid Credentails";
        }
      });
  },
});
export const setToken = createAction("userlogin/setToken");
export const { clearError } = UserLoginSlice.actions;
export default UserLoginSlice.reducer;
