import { combineReducers, configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../reducers/AuthSlice";
import RecordsSlice from "../reducers/RecordsSlice";


const rootReducer= combineReducers({
  reducer: {
    auth: AuthReducer,
    records:RecordsSlice,
   
  },
});


const store = configureStore({
  reducer : rootReducer,
});

export default store;