import React from 'react';
import './AdminLogin.css';
import { RiAdminLine } from "react-icons/ri";

const AdminLogin = () => {

  return (
    <div id='adminlogin'>
      <div id='loginform'>
     <h1>Admin<span id='login'>Login</span> <RiAdminLine id='admin-icon' /></h1><hr></hr>
     <div className="login-form">
     <form  method="post">
      <div className='mobile_no-container'>
      <label htmlFor='mobile_no'>Mobile_no<sup className='astrick'>&#42;</sup></label>
        <input type="text" name="mobile_no"  required/>
      </div>
        <div className="password-container">
          <label htmlFor='password'>password<sup className='astrick'>&#42;</sup></label>
            <input type="password" name="password" id="password"  required/>
            <span id="showPassword">Show</span>
        </div>
        <input id='loginbutton' type="submit" value="Login"/>
    </form>
</div>
</div>
</div>
  )
}

export default AdminLogin
