import { configureStore } from "@reduxjs/toolkit";
import  adminPageReducer from '../reducers/AdminPageSlice'


const  store= configureStore({
    reducer:{
        
        adminrecords:adminPageReducer
    }

});

export default store;