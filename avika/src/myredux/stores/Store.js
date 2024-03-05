// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import AuthReducer from "../reducers/AuthSlice";
// import RecordsSlice from "../reducers/RecordsSlice";


// const rootReducer= combineReducers({
//   reducer: {
//     auth: AuthReducer,
//     records:RecordsSlice,
   
//   },
// });


// const store = configureStore({
//   reducer : rootReducer,
// });

// export default store;




import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "../reducers/AdminSlice";
import recordsReducer from "../reducers/RecordsSlice";

const store = configureStore({
  reducer: {
    admin: adminReducer,
    records: recordsReducer,
  },
});

export default store;
