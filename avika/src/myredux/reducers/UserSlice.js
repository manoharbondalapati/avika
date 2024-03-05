// slices/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userData: {
      op_number: '',
      ip_number: '',
      patient_name: '',
      age: '',
      gender: '', 
      place: '',
      Date_of_registration: '',
      referrence_by: '',
      patient_id: '',
      file_path: null 
    },
    error: null,
  },
  reducers: {
    updateUserData: (state, action) => {
      state.userData = action.payload;
    },
    uploadFileSuccess: (state) => {
      state.userData = {
        op_number: '',
        ip_number: '',
        patient_name: '',
        age: '',
        gender: '', 
        place: '',
        Date_of_registration: '',
        referrence_by: '',
        patient_id: '',
        file_path: null 
      };
      state.error = null;
    },
    uploadFileFailure: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateUserData, (state, action) => {
        state.userData = action.payload;
      })
      .addCase(uploadFileSuccess, (state) => {
        state.userData.file_path = null; // Reset file path after successful upload
        state.error = null;
      })
      .addCase(uploadFileFailure, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { updateUserData, uploadFileSuccess, uploadFileFailure } = userSlice.actions;

export default userSlice.reducer;
