import React, { useState } from "react";
import "./UserPage.css";
import { useDispatch, useSelector } from "react-redux";
import { fileUpload } from "../../myredux/reducers/UserSlice";
import { FaCircleUser } from "react-icons/fa6";

import { useNavigate } from "react-router-dom";

const UserPage = () => {
  const [formData, setFormData] = useState({
    op_number: "",
    ip_number: "",
    patient_name: "",
    age: "",
    gender: "",
    place: "",
    Date_of_registration: "",
    referrence_by: "",
    patient_id: "",
    file_path: null,
  });
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const dispatch = useDispatch();
  const token = localStorage.getItem("user");
  const isLoading = useSelector((state) => state.fileUploading);
  const error = useSelector((state) => state.fileUploading);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFormData({ ...formData, file_path: file });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(fileUpload(formData, token));
    setFormData({
      op_number: "",
      ip_number: "",
      patient_name: "",
      age: "",
      gender: "",
      place: "",
      Date_of_registration: "",
      referrence_by: "",
      patient_id: "",
      file_path: null,
    });
  };

  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  const todayDate = new Date().toISOString().split("T")[0];

  return (
    <div id="containers">
      <div className="container">
        {error && <div>Error: {error}</div>}
        <div id="forlogout">
          <div>
            <p id="para">Find! Treatment</p>
          </div>
          <div className="dropdown">
            <button id="userlogout" type="button" onClick={toggleDropdown}>
              <FaCircleUser size={30} />
            </button>
            {dropdownVisible && (
              <div className="dropdown-contentss">
                <p>Sharath</p>
                <p onClick={handleLogout}>Logout</p>
              </div>
            )}
          </div>
        </div>
        <hr></hr>
        <form onSubmit={handleSubmit} className="userform">
          <div className="form-row">
            <div className="input-data">
              <input
                type="text"
                name="op_number"
                value={formData.op_number}
                onChange={handleChange}
              />
              <div className="underline"></div>
              <label>OP Number:</label>
            </div>
            <div className="input-data">
              <input
                type="text"
                name="ip_number"
                value={formData.ip_number}
                onChange={handleChange}
              />
              <div className="underline"></div>
              <label>IP Number:</label>
            </div>
          </div>
          <div className="form-row">
            <div className="input-data">
              <input
                type="text"
                name="patient_name"
                value={formData.patient_name}
                onChange={handleChange}
              />
              <div className="underline"></div>
              <label>Name:</label>
            </div>
            <div className="input-data">
              <input
                type="text"
                name="age"
                value={formData.age}
                onChange={handleChange}
              />
              <div className="underline"></div>
              <label>Age:</label>
            </div>
          </div>
          <div className="form-row">
            <div className="input-data">
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <div className="underline"></div>
              <label>Gender:</label>
            </div>
            <div className="input-data">
              <input
                type="text"
                name="place"
                value={formData.place}
                onChange={handleChange}
              />
              <div className="underline"></div>
              <label>Place:</label>
            </div>
          </div>
          <div className="form-row">
            <div className="input-data datefunction">
              <input
                type="date"
                name="Date_of_registration"
                value={formData.Date_of_registration}
                onChange={handleChange}
                max={todayDate}
              />
              <div className="underline"></div>
              <label>Date of Registration:</label>
            </div>
            <div className="input-data">
              <input
                type="text"
                name="referrence_by"
                value={formData.referrence_by}
                onChange={handleChange}
              />
              <div className="underline"></div>
              <label>Reference By:</label>
            </div>
          </div>
          <div className="form-row">
            <div className="input-data">
              <input
                type="text"
                name="patient_id"
                value={formData.patient_id}
                onChange={handleChange}
              />
              <div className="underline"></div>
              <label>Patient ID:</label>
            </div>
            <div className="input-data">
              <input type="file" name="file_path" onChange={handleFileChange} />
              <div className="underline"></div>
              <label>File Path:</label>
            </div>
          </div>
          <div className="form-row submit-btn">
            <div className="input-data">
              <div className="inner">
                <button type="submit" disabled={isLoading}>
                  {isLoading ? "Uploading..." : "Submit"}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserPage;
