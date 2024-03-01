import React, { useState } from 'react';
import './UserPage.css';
import axios from 'axios'; 

const UserPage = () => {
 
  const [userData, setUserData] = useState({
    op_number: '',
    ip_number: '',
    patient_name: '',
    age: '',
    gender: '', 
    place: '',
    Date_of_registration: '',
    referrence_by: '',
    patient_id: '',
    file_path: null 
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setUserData(prevUserData => ({
      ...prevUserData,
      [name]: value
    }));
  };

  const handleFileChange = e => {
    setUserData(prevUserData => ({
      ...prevUserData,
      file_path: e.target.files[0]
    }));
  };

  

const handleSubmit = e => {
  e.preventDefault();
 
  const formData = new FormData();
  Object.entries(userData).forEach(([key, value]) => {
    formData.append(key, value);
  });
  
  axios.post('', formData)
    .then(response => {
      console.log(response.data); 
      setUserData({
        op_number: '',
        ip_number: '',
        patient_name: '',
        age: '',
        gender: '',
        place: '',
        Date_of_registration: '',
        referrence_by: '',
        patient_id: '',
        file_path: null,
        phoneNumber: '' 
      });
    })
    .catch(error => {
      console.error('Error uploading file:', error);
    });
};


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>OP Number:</label>
          <input type="text" name="op_number" value={userData.op_number} onChange={handleChange} />
        </div>
        <div>
          <label>IP Number:</label>
          <input type="text" name="ip_number" value={userData.ip_number} onChange={handleChange} />
        </div>
        <div>
          <label>Name:</label>
          <input type="text" name="patient_name" value={userData.patient_name} onChange={handleChange} />
        </div>
        <div>
          <label>Age:</label>
          <input type="text" name="age" value={userData.age} onChange={handleChange} />
        </div>
        <div>
          <label>Gender:</label>
          <div>
            <label>
              <input type="radio" name="gender" value="Male" checked={userData.gender === 'Male'} onChange={handleChange} />
              Male
            </label>
            <label>
              <input type="radio" name="gender" value="Female" checked={userData.gender === 'Female'} onChange={handleChange} />
              Female
            </label>
          </div>
        </div>
        <div>
          <label>Place:</label>
          <input type="text" name="place" value={userData.place} onChange={handleChange} />
        </div>
        <div>
          <label>Date of Registration:</label>
          <input type="text" name="Date_of_registration" value={userData.Date_of_registration} onChange={handleChange} />
        </div>
        <div>
          <label>Reference By:</label>
          <input type="text" name="referrence_by" value={userData.referrence_by} onChange={handleChange} />
        </div>
        <div>
          <label>Patient ID:</label>
          <input type="text" name="patient_id" value={userData.patient_id} onChange={handleChange} />
        </div>
        <div>
          <label>File Path:</label>
          <input type="file" name="file_path" onChange={handleFileChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserPage;
