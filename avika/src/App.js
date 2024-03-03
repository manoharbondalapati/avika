import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import UserPage from './components/user/UserPage';
import AdminLogin from './components/admin/AdminLogin';
import AdminPage from './components/admin/AdminPage';
import PatientDetails from './components/admin/PatientDetails';
import { Provider } from 'react-redux';
import Store from './redux/stores/Store';
//import AdminPageSlice from './redux/reducers/AdminPageSlice';


const App = () => {
  return (
    
    <Provider store={Store}>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/userpage' element={<UserPage/>}/>
    <Route path='/adminlogin' element={<AdminLogin/>} />
    <Route path='/adminpage' element={<AdminPage/>}/>
    <Route path='/patientDeatils'element={<PatientDetails/>}/>
   </Routes>
   </BrowserRouter>
   </Provider>
 
  )
}

export default App