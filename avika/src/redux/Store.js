import {configureStore}  from '@reduxjs/toolkit';
import AdminReducer from './reducers/AdminSlice';

const store= configureStore({
    reducer:{
        
        admin:AdminReducer
    }

});

export default store;