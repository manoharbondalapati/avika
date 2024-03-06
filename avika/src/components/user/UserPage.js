// import React, { useState } from 'react';
// import './UserPage.css';
// import axios from 'axios';

// const UserPage = () => {

//   const [userData, setUserData] = useState({
//     op_number: '',
//     ip_number: '',
//     patient_name: '',
//     age: '',
//     gender: '',
//     place: '',
//     Date_of_registration: '',
//     referrence_by: '',
//     patient_id: '',
//     file_path: null
//   });

//   const handleChange = e => {
//     const { name, value } = e.target;
//     setUserData(prevUserData => ({
//       ...prevUserData,
//       [name]: value
//     }));
//   };

//   const handleFileChange = e => {
//     setUserData(prevUserData => ({
//       ...prevUserData,
//       file_path: e.target.files[0]
//     }));
//   };

// const handleSubmit = e => {
//   e.preventDefault();

//   const formData = new FormData();
//   Object.entries(userData).forEach(([key, value]) => {
//     formData.append(key, value);
//   });

//   axios.post('', formData)
//     .then(response => {
//       console.log(response.data);
//       setUserData({
//         op_number: '',
//         ip_number: '',
//         patient_name: '',
//         age: '',
//         gender: '',
//         place: '',
//         Date_of_registration: '',
//         referrence_by: '',
//         patient_id: '',
//         file_path: null,
//         phoneNumber: ''
//       });
//     })
//     .catch(error => {
//       console.error('Error uploading file:', error);
//     });
// };

//   return (
//     <div className='container' >
//       <form onSubmit={handleSubmit} className='userform'>
//         <div>
//           <label>OP Number:</label>
//           <input type="text" name="op_number" value={userData.op_number} onChange={handleChange} />
//         </div>
//         <div>
//           <label>IP Number:</label>
//           <input type="text" name="ip_number" value={userData.ip_number} onChange={handleChange} />
//         </div>
//         <div>
//           <label>Name:</label>
//           <input type="text" name="patient_name" value={userData.patient_name} onChange={handleChange} />
//         </div>
//         <div>
//           <label>Age:</label>
//           <input type="text" name="age" value={userData.age} onChange={handleChange} />
//         </div>
//         <div>
//           <label>Gender:</label>
//           <div>
//             <label>
//               <input type="radio" name="gender" value="Male" checked={userData.gender === 'Male'} onChange={handleChange} />
//               Male
//             </label>
//             <label>
//               <input type="radio" name="gender" value="Female" checked={userData.gender === 'Female'} onChange={handleChange} />
//               Female
//             </label>
//           </div>
//         </div>
//         <div>
//           <label>Place:</label>
//           <input type="text" name="place" value={userData.place} onChange={handleChange} />
//         </div>
//         <div>
//           <label>Date of Registration:</label>
//           <input type="date" name="Date_of_registration" value={userData.Date_of_registration} onChange={handleChange} />
//         </div>
//         <div>
//           <label>Reference By:</label>
//           <input type="text" name="referrence_by" value={userData.referrence_by} onChange={handleChange} />
//         </div>
//         <div>
//           <label>Patient ID:</label>
//           <input type="text" name="patient_id" value={userData.patient_id} onChange={handleChange} />
//         </div>
//         <div>
//           <label>File Path:</label>
//           <input type="file" name="file_path" onChange={handleFileChange} />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default UserPage;

// UserPage.js
import React, { useState } from "react";
import "./UserPage.css";
import { useDispatch, useSelector } from "react-redux";
import {
  updateUserData,
  uploadFileSuccess,
  uploadFileFailure,
} from "../../myredux/reducers/UserSlice"; 
import axios from "axios";

const UserPage = () => {
  const [file_path,setFilePath] = useState(null); 
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.userData);
  const token = localStorage.getItem("userToken");

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateUserData({ ...userData, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      setFilePath(file); 
      dispatch(updateUserData({ ...userData, file_path: file.name }));
    } else {
      console.error("Invalid file format. Please select a PDF file.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(userData).forEach(([key, value]) => {
      formData.append(key, value);
    });
   formData.append('file',file_path);
    axios
      .post("https://med.test.avika.ai/api/file_upload", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type':'multipart/form-data'
        },
      })
      .then((response) => {
        console.log(response.data);

        if ( token && response.status === 200) {
          dispatch(uploadFileSuccess());
        }
      })
      .catch((error) => {
        console.error("Error uploading file:", error);
        dispatch(uploadFileFailure(error.message));
      });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="userform">
        <div>
          <label>OP Number:</label>
          <input
            type="text"
            name="op_number"
            value={userData.op_number}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>IP Number:</label>
          <input
            type="text"
            name="ip_number"
            value={userData.ip_number}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="patient_name"
            value={userData.patient_name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="text"
            name="age"
            value={userData.age}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Gender:</label>
          <div>
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={userData.gender === "Male"}
                onChange={handleChange}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={userData.gender === "Female"}
                onChange={handleChange}
              />
              Female
            </label>
          </div>
        </div>
        <div>
          <label>Place:</label>
          <input
            type="text"
            name="place"
            value={userData.place}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Date of Registration:</label>
          <input
            type="date"
            name="Date_of_registration"
            value={userData.Date_of_registration}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Reference By:</label>
          <input
            type="text"
            name="referrence_by"
            value={userData.referrence_by}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Patient ID:</label>
          <input
            type="text"
            name="patient_id"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>File Path:</label>
          <input
            type="file"
            name="file_path"
           
            onChange={handleFileChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserPage;
