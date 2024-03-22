import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../myredux/reducers/UserLoginSlice";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import "./UserLogin.css";
import { message } from "antd";

const UserLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const loading = useSelector((state) => state.userlogin.loading);
  const error = useSelector((state) => state.userlogin.error);

  const handleSubmit = (event) => {
    event.preventDefault();
    let userCredentials = { mobile, password };
    if (mobile !== "7702145910" || password !== "sharath_med@123") {
      alert("Invalid mobile number or password.");
      return;
    }
    dispatch(loginUser(userCredentials))
      .then(() => {
        const token = localStorage.getItem("user");
        if (token) {
          message.success("Login Success");
          navigate("/userpage");
        }
      })
      .catch(() => {
        console.error("Login failed");
        setMobile("");
        setPassword("");
      });
  };

  return (
    <div id="userlogin">
      <fieldset>
        <legend>
          <h1>
            User<span id="login">Login</span>
            <span id="user-icon">
              <FaUser />
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
                placeholder="Enter your mobile number"
                className="form-control"
                value={mobile}
                required
                maxLength={10}
                onChange={(e) => setMobile(e.target.value)}
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
                placeholder="Enter your password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span
                id="show-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </span>
            </div>
            <button className="btn" id="userloginbtn" type="submit">
              {loading ? "Logging in..." : "Login"}
            </button>
            <p id="credentials">
              <span id="note">Note:</span> Mobile: 7702145910 and Password:
              sharath_med@123
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
