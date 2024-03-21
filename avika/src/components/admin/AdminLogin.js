// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { loginAdmin } from "../../myredux/reducers/AdminSlice";
// import { useNavigate } from "react-router-dom";
// import { MdAdminPanelSettings } from "react-icons/md";
// import "./AdminLogin.css";

// const AdminLogin = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [mobile, setMobile] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const loading = useSelector((state) => state.admin.loading);
//   const error = useSelector((state) => state.admin.error);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     let adminCredentials = { mobile, password };
//    if(adminCredentials ===false)
//    {
//         alert('login failed')
//    }
//    else
//    {
//     dispatch(loginAdmin(adminCredentials))
//     .then(() => {
//       const token = localStorage.getItem("token");
//       if (token) {
//         navigate("/adminpage");
//       }
//     })
//     .catch(() => {
//       console.error("Login failed");
//       setMobile("");
//       setPassword("");
//     });
// }
//    };

//   return (
//     <div id="adminlogin">
//       <fieldset>
//         <legend>
//           <h1>
//             Admin<span id="login">Login</span>
//             <span id="admin-icon">
//               <MdAdminPanelSettings />
//             </span>
//           </h1>
//         </legend>
//         <hr />
//         <div className="login-form">
//           <form onSubmit={handleSubmit}>
//             <div className="form-group">
//               <label htmlFor="mobile">
//                 Mobile<sup className="astrick">&#42;</sup>
//               </label>
//               <input
//                 type="text"
//                 name="mobile"
//                 id="mobile"
//                 className="form-control"
//                 value={mobile}
//                 onChange={(e) => setMobile(e.target.value)}
//                 maxLength={10}
//                 placeholder="Enter your mobile number"
//                 required
//               />
//              </div>
//             <div className="form-group">
//               <label htmlFor="password">
//                 Password<sup className="astrick">&#42;</sup>
//               </label>
//               <input
//                 type={showPassword ? "text" : "password"}
//                 name="password"
//                 id="password"
//                 className="form-control"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Enter your password"
//                 required
//               />
//               <span
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="shows-password"
//               >
//                 {showPassword ? "Hide" : "Show"}
//               </span>
//             </div>
//             <button className="btn" id="loginbtn" type="submit">
//               {loading ? "Logging in..." : "Login"}
//             </button>
//             <p id="credentials">
//               <span id="note">Note:</span> Mobile: 9964517148 and Password:
//               harish_med@123
//             </p>
//             {error && (
//               <div className="alert alert-danger" role="alert">
//                 {error}
//               </div>
//             )}
//           </form>
//         </div>
//       </fieldset>
//     </div>
//   );
// };

// export default AdminLogin;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAdmin } from "../../myredux/reducers/AdminSlice";
import { useNavigate } from "react-router-dom";
import { MdAdminPanelSettings } from "react-icons/md";
import "./AdminLogin.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const loading = useSelector((state) => state.admin.loading);
  const error = useSelector((state) => state.admin.error);

  const showToastMessage = (message) => {
    console.log(message);
    toast.success(message, {
      position: "top-center",
    });
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    let adminCredentials = { mobile, password };
    if (mobile !== "9964517148" || password !== "harish_med@123") {
      alert("Invalid mobile number or password.");
      return;
    }
    dispatch(loginAdmin(adminCredentials))
      .then(() => {
        showToastMessage("Login successful!");
        navigate("/adminpage");
      })
      .catch((error) => {
        console.error("Login failed:", error.message);
        showToastMessage("Login failed. Please try again.");
        setMobile("");
        setPassword("");
      });
  };
  
  return (
    <div id="adminlogin">
       <ToastContainer />
      <fieldset>
        <legend>
          <h1>
            Admin<span id="login">Login</span>
            <span id="admin-icon">
              <MdAdminPanelSettings />
            </span>
          </h1>
        </legend>
        <hr />
        <div className="login-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="mobile">
                Mobile<sup className="astrick">&#42;</sup>
              </label>
              <input
                type="text"
                name="mobile"
                id="mobile"
                className="form-control"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                maxLength={10}
                placeholder="Enter your mobile number"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">
                Password<sup className="astrick">&#42;</sup>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="shows-password"
              >
                {showPassword ? "Hide" : "Show"}
              </span>
            </div>
            <button className="btn" id="loginbtn" type="submit">
              {loading ? "Logging in..." : "Login"}
            </button>
            <p id="credentials">
              <span id="note">Note:</span> Mobile: 9964517148 and Password:
              harish_med@123
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

export default AdminLogin;
