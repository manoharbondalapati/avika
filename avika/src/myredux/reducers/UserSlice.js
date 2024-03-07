
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


export const fileUpload =(formData)=>async(dispatch)=>
  {
    dispatch(uploadFileRequest());
    try {
      const token = localStorage.getItem('user');
     
      const headers = {
        Authorization : `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      };
      const response = await axios.post('https://med.test.avika.ai/api/file_upload',formData,{headers});
      console.log(response);
     
      // if (!response.ok) {
      //   throw new Error('Failed to upload file');
      // }
      dispatch(uploadFileSuccess(response.data.data));
      alert('Document uploaded successfully');
     

    } catch (error) {
      dispatch(uploadFileFailure(error.message));
    }
  };
  
const UserSlice = createSlice({
  name: 'fileUploading',
  initialState : {
    isLoading: false,
    error: null,
  },
  reducers: {
    uploadFileRequest(state) {
      state.isLoading = true;
      state.error = null;
    },
    uploadFileSuccess(state) {
      state.isLoading = false;
    },
    uploadFileFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { uploadFileRequest, uploadFileSuccess, uploadFileFailure } = UserSlice.actions;

export default UserSlice.reducer;
