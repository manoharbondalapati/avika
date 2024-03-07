// import React, { useCallback, useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { loginUser } from "../../myredux/reducers/UserLoginSlice";
// import { useNavigate } from "react-router-dom";
// import { FaUser } from "react-icons/fa";
// import "./UserLogin.css";

// const UserLogin = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [mobile, setmobile] = useState("");
//   const [password, setpassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const loading = useSelector((state) => state.userlogin.loading);
//   const error = useSelector((state) => state.userlogin.error);
//   const response = useSelector((state) => state.userlogin.user);

//   const fetchData = useCallback(() => {
//     if (response && response.status === 200) {
//       const {  token } = response.data;

//       localStorage.setItem("userToken", token);
//       navigate("/userpage");
//     }
//   }, [navigate, response]);

//   useEffect(() => {
//     fetchData();
//     return () => {};
//   }, [fetchData, response]);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     let userCredentials = { mobile, password };
//     dispatch(loginUser(userCredentials));
//   };

//   return (
//     <div id="userlogin">
//       <div id="loginform">
//         <h1>
//           User<span id="login">Login</span><span id="user-icon"><FaUser /></span>
//         </h1>
//         <hr />
//         <div className="login-form">
//           <form onSubmit={handleSubmit}>
//             <div className="mobile_no-container">
//               <label htmlFor="mobile">
//                 Mobile<sup className="astrick">&#42;</sup>
//               </label>
//               <input
//                 type="text"
//                 name="mobile"
//                 id="mobile"
//                 placeholder="7702145910"
//                 className="form-control"
//                 value={mobile}
//                 onChange={(e) => setmobile(e.target.value)}
//               />
//             </div>
//             <div className="password-container">
//               <label htmlFor="password">
//                 Password<sup className="astrick">&#42;</sup>
//               </label>
//               <input
//                 type={showPassword ? "text" : "password"}
//                 name="password"
//                 id="password"
//                 placeholder="sharath_med@123"
//                 className="form-control"
//                 value={password}
//                 onChange={(e) => setpassword(e.target.value)}
//               />
//               <span
//                 id="showPassword"
//                 onClick={() => setShowPassword(!showPassword)}
//               >
//                {showPassword ?"hide":"show"}
//               </span>
//             </div>
//             <button id="loginbutton" type="submit">
//               {loading ? "Logging in..." : "Login"}
//             </button>
//             <p id="credentials">
//               <span id="note">Note:</span>
//               <span>Mobile:</span>7702145910 and <span>Password:</span>
//               sharath_med@123
//             </p>
//             {error && (
//               <div className="alert alert-danger" role="alert">
//                 {error}
//               </div>
//             )}
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserLogin;


import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../myredux/reducers/UserLoginSlice";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import "./UserLogin.css";

const UserLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const loading = useSelector((state) => state.userlogin.loading);
  const error = useSelector((state) => state.userlogin.error);
  //const response = useSelector((state) => state.userlogin.user);

  const handleSubmit = (event) => {
    event.preventDefault();
    let userCredentials = { mobile, password };
    dispatch(loginUser(userCredentials))
    .then(()=>
    {
      const token =localStorage.getItem('user');
      if(token)
      {
        navigate('/userpage');
      }
    })
    .catch(() => {
      console.error("Login failed");
      setMobile('');
      setPassword('');
    });

  };

  return (
    <div id="userlogin">
      <fieldset>
        <legend>
          <h1>
            User<span id="login">Login</span><span id="user-icon"><FaUser /></span>
          </h1>
        </legend>
        <hr />
        <div className="login-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="mobile">Mobile<sup className="astrick">&#42;</sup></label>
              <input
                type="text"
                name="mobile"
                id="mobile"
                placeholder="Enter your mobile number"
                className="form-control"
                value={mobile}
                required
                maxLength={10}
                onChange={(e) => setMobile(e.target.value)}
              />
               {mobile.length < 10 && mobile.length > 0 && (
                <small className="text-danger">Enter valid 10 digit mobile number.</small>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password<sup className="astrick">&#42;</sup></label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Enter your password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span
                className="show-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </span>
            </div>
            <button className="btn btn-primary" type="submit" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>
            <p id="credentials">
              <span id="note">Note:</span> Mobile: 7702145910 and Password: sharath_med@123
            </p>
            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}
          </form>
        </div>
      </fieldset>
    </div>
  );
};

export default UserLogin;
