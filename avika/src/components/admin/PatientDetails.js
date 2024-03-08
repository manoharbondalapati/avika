import React, { useState,useEffect } from 'react';
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecordById } from '../../myredux/reducers/PatientSlice';

const PatientDetails = ({recordId}) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const {details,loading,error}=useSelector((state)=>state.details);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchRecordById(recordId));
  }, [dispatch, recordId]);


  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleLogout = () => {
      
  };
    
  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }



  return (
    <div id='patientDetailsPage'>
      <div id='headerbar'>
        <div>
          <button id='backbutton'><IoChevronBackCircleOutline /></button>
        </div>
        <div>
          <button id='view-file'>View File</button>
          <div className="dropdown">
            <button id='patientlogout' onClick={toggleDropdown}><FaRegUserCircle /></button>
            {dropdownVisible && (
              <div className="dropdown-content">
                <p>Harish</p>
                <p onClick={handleLogout}>Logout</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div id='details'>
      <h2>Patient Details</h2>
      <p>Patient Name: {details.patient_name}</p>
      <p>Patient Age: {details.age}</p>
      <p>Gender: {details.gender}</p>
      <p>Date of Registration: {details.Date_of_registration}</p>
      <p>Place: {details.place}</p>
      <p>OP Number: {details.op_number}</p>
      <p>IP Number: {details.ip_number}</p>
      <p>Referencer by: {details.referencer_by}</p>
    </div>
    </div>
  )
}

export default PatientDetails;
