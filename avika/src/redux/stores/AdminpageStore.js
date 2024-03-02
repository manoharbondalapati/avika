import { configureStore } from "@reduxjs/toolkit";
import  AdminPageReducer from '../reducers/AdminPageSlice'


const  adminPageReducer= configureStore({
    reducer:{
        
        admin:AdminPageReducer
    }

});

export default adminPageReducer;