import { createSlice } from "@reduxjs/toolkit";
import { loginAdmin } from "../actions/AuthActions";

const AdminSlice = createSlice({
  name: "admin",
  initialState: {
    loading: false,
    admin: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAdmin.fulfilled, (state, action) => {
        state.loading = false;
        state.admin = action.payload;
        state.error = null;
      })
      .addCase(loginAdmin.rejected, (state, action) => {
        state.loading = false;
        state.admin = null;
        state.error=action.error.message
        // console.log(action.error.message);
        // if (action.error.message === "Request failed with status code 401") {
        //   state.error = "Invalid Credentials";
        // } else {
        //   state.error = action.error.message;
        // }
      });
  },
});

export default AdminSlice.reducer;