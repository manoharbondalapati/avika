import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAdmin } from "../../myredux/actions/AuthActions";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css";

const AdminLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const error = useSelector((state) => console.log(state));

  const handleLoginform = async (event) => {
    event.preventDefault();
    try {
      await dispatch(loginAdmin({ mobile, password }));
      navigate("/adminpage"); // Navigate only after successful login
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div id="adminlogin">
      <div id="loginform">
        <h1>
          Admin<span id="login">Login</span>
        </h1>
        <hr></hr>
        <div className="login-form">
          <form onSubmit={handleLoginform}>
            <div className="mobile_no-container">
              <label htmlFor="mobile">
                Mobile<sup className="astrick">&#42;</sup>
              </label>
              <input
                type="text"
                name="mobile"
                id="mobile"
                className="form-control"
                value={mobile}
                onChange={(event) => setMobile(event.target.value)}
              />
            </div>
            <div className="password-container">
              <label htmlFor="password">
                password<sup className="astrick">&#42;</sup>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                className="form-control"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <span
                id="showPassword"
                onClick={() => setShowPassword(!showPassword)}
              >
                Show
              </span>
            </div>
            <button id="loginbutton" type="submit">
              Login
            </button>
            <p id="credentials">
              <span id="note">Note:</span>
              <span>Mobile:</span>9964517148 and <span>password:</span>
              harish_med@123
            </p>
            {error && <p style={{ color: "red" }}>!Invalid Credentials</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
