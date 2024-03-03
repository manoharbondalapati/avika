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
  const {loading,error}=useSelector((state)=>state.admin);


  const dispatch =useDispatch();
  const navigate =useNavigate();


  // const predefinedCredentails={mobile:'9964517148',password:'harish_med@123'};

  const  handleLoginform =(event)=>
  {
    event.preventDefault();
    
    let adminCredentials ={mobile,password}
    dispatch(loginAdmin(adminCredentials))
    .then((response)=>
    {
      if(response.payload)
      {
        setmobile('');
        setpassword('');
        navigate('/adminpage');
      }
    })
    .catch((error)=>{
      console.log(error);
      
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
       {error &&(<div className='alert alert-danger' role='alert'>{error}</div>)}
       {/* <p id='credentials'><span id='note'>Note:</span><span>Mobile:</span>9964517148 and <span>password:</span>harish_med@123</p> */}
       
    </form>
   
</div>
</div>
</div>
  )
}



export default AdminLogin;
