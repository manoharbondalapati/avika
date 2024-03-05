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



import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchrecord = createAsyncThunk("fetchrecord",async()=>{

    const data = await axios.get('https://med.test.avika.ai/admin/records')
    return data.json()

})


const RecordsSlice = createSlice({

    name : 'fetchrecords',
    initialState :
    {
        isLoading:false,
        data:[],
        error:false
    },
    extraReducers : (builder)=>
    {
        builder.addCase(fetchrecord.pending,(state,action)=>
        {
            state.isLoading=true
        });
        builder.addCase(fetchrecord.fulfilled,(state,action)=>
        {
            state.isLoading=false;
            state.data=action.payload
        });
        builder.addCase(fetchrecord.rejected,(state,action)=>
        {
               state.error=true;
        })
    }

})

export default RecordsSlice.reducer;
// jgkj