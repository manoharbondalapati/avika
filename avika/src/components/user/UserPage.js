// import React, { useState } from "react";
// import "./UserPage.css";
// import { useDispatch, useSelector } from "react-redux";
// import { fileUpload } from "../../myredux/reducers/UserSlice";

// const UserPage = () => {
//   const [formData, setFormData] = useState({
//     op_number: '',
//     ip_number: '',
//     patient_name: '',
//     age: '',
//     gender: '',
//     place: '',
//     Date_of_registration: '',
//     referrence_by: '',
//     patient_id: '',
//     file_path: null,
//   });
   
//   const dispatch = useDispatch();
//   const token =localStorage.getItem("user");
//   console.log(token)
//   const isLoading = useSelector((state) => state.fileUploading);
//   const error = useSelector((state) => state.fileUploading);

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     setFormData({ ...formData, file_path: file });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     dispatch(fileUpload(formData ,token));
//     setFormData({
//       op_number: '',
//       ip_number: '',
//       patient_name: '',
//       age: '',
//       gender: '',
//       place: '',
//       Date_of_registration: '',
//       referrence_by: '',
//       patient_id: '',
//       file_path: '',
//     });
//   };

//   return (
//     <div id="container">
//       {error && <div>Error: {error}</div>}
//       <form onSubmit={handleSubmit} className="userform">
//         <div>
//           <label>OP Number:</label>
//           <input
//             type="text"
//             name="op_number"
//             value={formData.op_number}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label>IP Number:</label>
//           <input
//             type="text"
//             name="ip_number"
//             value={formData.ip_number}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label>Name:</label>
//           <input
//             type="text"
//             name="patient_name"
//             value={formData.patient_name}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label>Age:</label>
//           <input
//             type="text"
//             name="age"
//             value={formData.age}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label>Gender:</label>
//           <div>
//             <label>
//               <input
//                 type="radio"
//                 name="gender"
//                 value="Male"
//                 checked={formData.gender === "Male"}
//                 onChange={handleChange}
//               />
//               Male
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 name="gender"
//                 value="Female"
//                 checked={formData.gender === "Female"}
//                 onChange={handleChange}
//               />
//               Female
//             </label>
//           </div>
//         </div>
//         <div>
//           <label>Place:</label>
//           <input
//             type="text"
//             name="place"
//             value={formData.place}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label>Date of Registration:</label>
//           <input
//             type="date"
//             name="Date_of_registration"
//             value={formData.Date_of_registration}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label>Reference By:</label>
//           <input
//             type="text"
//             name="referrence_by"
//             value={formData.referrence_by}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label>Patient ID:</label>
//           <input
//             type="text"
//             name="patient_id"
//             value={formData.patient_id}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label>File Path:</label>
//           <input
//             type="file"
//             name="file_path"
//             onChange={handleFileChange}
//           />
//         </div>
//         <button type="submit" disabled={isLoading}>
//           {isLoading ? 'Uploading...' : 'Submit'}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default UserPage;





import React, { useState } from "react";
import "./UserPage.css";
import { useDispatch, useSelector } from "react-redux";
import { fileUpload } from "../../myredux/reducers/UserSlice";
import { FaCircleUser } from "react-icons/fa6";
import { NavLink } from "react-bootstrap";
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
      file_path: "",
    });
  };

  const [showDropdown, setShowDropdown] = useState(false);
  
 const navigate = useNavigate();
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
   
   localStorage.removeItem('user');
    navigate('/homepage')
  };

  const todayDate = new Date().toISOString().split("T")[0];

  return (
    <div id="container">
     
      {error && <div>Error: {error}</div>}
      <form onSubmit={handleSubmit} className="userform">
      <div id="forlogout">
          <div>
            <p id="para">Find! Treatment</p>
          </div>
          <div>
            {/* Correct the button tag here */}
            <button onClick={toggleDropdown}>
              <FaCircleUser />
            </button>
            {showDropdown && (
              <div className="dropdown-menu">
                <NavLink to="#">Hi Saharth</NavLink>
                <NavLink to="#" onClick={handleLogout}>Logout</NavLink>
              </div>
            )}
          </div>
        </div>
        <div className="userpagegroup">
        <div>
          <label>OP Number:</label>
          <input
            type="text"
            name="op_number"
            value={formData.op_number}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>IP Number:</label>
          <input
            type="text"
            name="ip_number"
            value={formData.ip_number}
            onChange={handleChange}
          />
        </div>
        </div>
        <div className="userpagegroup">
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="patient_name"
            value={formData.patient_name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="text"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </div>
        </div>
       <div className="userpagegroup">
       <div>
          <label>Gender:</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div>
          <label>Place:</label>
          <input
            type="text"
            name="place"
            value={formData.place}
            onChange={handleChange}
          />
        </div>
       </div>
        <div className="userpagegroup">
        <div>
          <label>Date of Registration:</label>
          <input
            type="date"
            name="Date_of_registration"
            value={formData.Date_of_registration}
            onChange={handleChange}
            max={todayDate}
          />
        </div>
        <div>
          <label>Reference By:</label>
          <input
            type="text"
            name="referrence_by"
            value={formData.referrence_by}
            onChange={handleChange}
          />
        </div>
        </div>
        <div className="userpagegroup">
        <div>
          <label>Patient ID:</label>
          <input
            type="text"
            name="patient_id"
            value={formData.patient_id}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>File Path:</label>
          <input type="file" name="file_path" onChange={handleFileChange} />
        </div>
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Uploading..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default UserPage;
