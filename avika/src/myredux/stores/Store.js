import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "../reducers/AdminSlice";
import recordsReducer from "../reducers/RecordsSlice";
import userReducer from "../reducers/UserSlice";
import userLoginReducer from "../reducers/UserLoginSlice";
import patientReducer from "../reducers/PatientSlice";

const store = configureStore({
  reducer: {
    admin: adminReducer,
    records: recordsReducer,
    details: patientReducer,
    user: userReducer,
    userlogin: userLoginReducer,
  },
});

export default store;
