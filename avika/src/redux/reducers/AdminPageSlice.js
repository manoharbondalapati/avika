import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchRecords = createAsyncThunk(
    'adminrecords/fetchRecords',
    async(_, {getstate})=>
    {
        const token =getstate().auth.token;
        const response =await axios.get('https://med.test.avika.ai/admin/records',{
            headers:
            {
                Authorization:`Bearer ${token}`,
            },
        });
        return response.data;
    }
)



const AdminPageSlice = createSlice({
    name: 'adminrecords',
    initialState :
    {
        loading: false,
        records: [],
        error: null,
        currentPage: 1,
        recordsPerPage: 10,
    },
    reducers:
    {
        setCurrentPage(state,action)
        {
            state.currentPage=action.payload;
        }
    },
    extraReducers : (builder)=>
    {
        builder
        .addCase(fetchRecords.pending,(state)=>
        {
            state.loading=true;
            state.records =[];
            state.error =null;
        })
        .addCase(fetchRecords.fulfilled,(state,action)=>
        {
            state.loading=false;
            state.records =action.payload;
            state.error=null;
        })
        .addCase(fetchRecords.rejected,(state,action)=>
        {
            state.loading=false;
            state.records=[];
            state.error =action.error.message
        });
    },
});

export const {setCurrentPage}=AdminPageSlice.actions;

export default AdminPageSlice.reducer;