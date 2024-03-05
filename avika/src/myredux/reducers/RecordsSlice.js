// import { createSlice } from "@reduxjs/toolkit";
// import {FetchRecords} from '../actions/FetchRecords';

// const RecordsSlice = createSlice({
//     name:"allrecords",
//     initialState:{
//         records:[],
//         loading:false,
//         error :null,
//     },
//     reducers:{},
//     extraReducers: (builder)=>
//     {
//         builder
//         .addCase(FetchRecords.pending,(state)=>{
//             state.loading=true;
//             state.error=null;
//         })
//         .addCase(FetchRecords.rejected,(state,action)=>{
//             state.loading=false;
//             state.error=action.error.message;
//             state.error=null;
//         })
//         .addCase(FetchRecords.rejected,(state,action)=>{
//             state.loading=false;
//             state.error=action.error.message;
//         });
//     }
// });

// export default RecordsSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRecords = createAsyncThunk("records/fetchRecords", async () => {
  try {
    const token = localStorage.getItem("userToken");
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const response = await axios.get(
      "https://med.test.avika.ai/admin/records",
     {headers}  
    );
     return response.data;
    
  } catch (error) {
    console.error("Error fetching records:", error);
    throw error; 
  }
});

const RecordsSlice = createSlice({
  name: "records",
  initialState: {
    isLoading: false,
    data: [],
    error: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRecords.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchRecords.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.error=null;
    });
    builder.addCase(fetchRecords.rejected, (state, action) => {
      state.isLoading=false;
      state.error=action.error.message;
    });
  },
});

export default RecordsSlice.reducer;
