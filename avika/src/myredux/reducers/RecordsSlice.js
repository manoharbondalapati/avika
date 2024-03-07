import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const RecordsSlice = createSlice({
  name: 'records',
  initialState: {
    records: [],
    loading: false,
    error: null
  },
  reducers: {
    fetchRecordsSuccess: (state, action) => {
      state.records = action.payload; 
      state.loading = false;
       
    },
    fetchRecordsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    }
  }
});

export const { fetchRecordsSuccess, fetchRecordsFailure } = RecordsSlice.actions;

export const fetchRecords = () => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    const headers = { Authorization: `Bearer ${token}` };
    const response = await axios.get(`https://med.test.avika.ai/admin/records`, { headers });
    dispatch(fetchRecordsSuccess(response.data.data)); 
  } catch (error) {
    dispatch(fetchRecordsFailure(error));
  }
};

export default RecordsSlice.reducer;
