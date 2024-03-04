import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import UserPage from "./components/user/UserPage";
import AdminLogin from "./components/admin/AdminLogin";
import AdminPage from "./components/admin/AdminPage";
import PatientDetails from "./components/admin/PatientDetails";
import { Provider} from "react-redux";
//import { Provider as ALLRecordsProvider } from "react-redux";
import Store from '../src/myredux/stores/Store';
//import RecordStore from "../src/myredux/stores/RecordStore";

const App = () => {
  return (
    // <AuthProvider store={Store}>
    //  <ALLRecordsProvider recordstore={RecordStore}>
    <Provider store={Store}>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/userpage" element={<UserPage />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/adminpage" element={<AdminPage />} />
          <Route path="/patientDeatils" element={<PatientDetails />} />
        </Routes>
      </BrowserRouter>
      </Provider>
    //  </ALLRecordsProvider>
    // </AuthProvider>
  );
};

export default App;
