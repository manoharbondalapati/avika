// slices/userSlice.js
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
      file_path:'',
    },
    error: null,
  },
  reducers: {
    updateUserData: (state, action) => {
      state.userData = { ...state.userData, ...action.payload }; // Merge updated data into userData
    },
    uploadFileSuccess: (state) => {
      state.userData.file_path = ''; // Reset file_path to an empty string
      state.error = null; // Reset error
    },
    uploadFileFailure: (state, action) => {
      state.error = action.payload; // Set error message
    },
  },
});

export const { updateUserData, uploadFileSuccess, uploadFileFailure } = userSlice.actions;

export default userSlice.reducer;
