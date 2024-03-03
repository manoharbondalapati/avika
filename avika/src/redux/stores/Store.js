import { configureStore } from "@reduxjs/toolkit";
import AdminReducer from "../reducers/AdminSlice";
import adminPageReducer from "./AdminpageStore";

const store = configureStore({
  reducer: {
    admin: AdminReducer,
    adminrecords: adminPageReducer,
  },
});

export default store;
