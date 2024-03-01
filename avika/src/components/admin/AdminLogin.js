import React, { useState } from 'react';
import './AdminLogin.css';
import { RiAdminLine } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { loginAdmin } from '../../redux/reducers/AdminSlice';
import { useNavigate } from 'react-router-dom';


const AdminLogin = () => {

  const [mobile,setmobile]=useState('');
  const [password,setpassword]=useState('');
  const [showPassword,setShowPassword]=useState(false);

  const loading=useSelector(state=>state.admin.loading);
  const error =useSelector(state=>state.admin.error)


  const dispatch =useDispatch();
  const navigate =useNavigate();

  const  handleLoginform =(event)=>
  {
    event.preventDefault();
    const adminCredientials ={mobile,password}
    dispatch(loginAdmin(adminCredientials)).then((response)=>
    {
      if(response.payload)
      {
        setmobile('');
        setpassword('');
        navigate('/adminpage');
      }
    })
  }

  return (
    <div id='adminlogin'>
      <div id='loginform'>
     <h1>Admin<span id='login'>Login</span> <RiAdminLine id='admin-icon' /></h1><hr></hr>
     <div className="login-form">
     <form onSubmit={handleLoginform}>
      <div className='mobile_no-container'>
      <label htmlFor='mobile'>Mobile<sup className='astrick'>&#42;</sup></label>
        <input type="text" name="mobile" id='mobile'className='form-control' value={mobile} onChange={(event)=>setmobile(event.target.value)} />
      </div>
        <div className="password-container">
          <label htmlFor='password'>password<sup className='astrick'>&#42;</sup></label>
            <input type={showPassword ?"text":"password"} name="password" id="password" className='form-control' value={password} onChange={(event)=>setpassword(event.target.value)}/>
            <span id="showPassword" onClick={()=>setShowPassword(!showPassword)}>Show</span>
        </div>
       <button id='loginbutton' type="submit" >{loading?'Loading...':"Login"}</button>
        {error && !loading &&(<p className='alert alert-danger'>{error}</p>)}
    </form>
   
</div>
</div>
</div>
  )
}



export default AdminLogin;
