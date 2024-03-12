// import React, { useState, useEffect } from "react";
// import { IoChevronBackCircleOutline } from "react-icons/io5";
// import { FaRegUserCircle } from "react-icons/fa";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchRecordById } from "../../myredux/reducers/PatientSlice";
// import { useParams } from "react-router-dom";
// import './PatientDetails.css';

// const PatientDetails = () => {
//   const [dropdownVisible, setDropdownVisible] = useState(false);
//   const { details, loading, error } = useSelector((state) => state.details);
//   const dispatch = useDispatch();

//   const {recordId}= useParams();
//   console.log(recordId);

//   useEffect(() => {
//     dispatch(fetchRecordById(recordId));
//   }, [dispatch, recordId]);

//   const toggleDropdown = () => {
//     setDropdownVisible(!dropdownVisible);
//   };

//   const handleLogout = () => {};

//   if (loading) {
//     return <h1>Loading...</h1>;
//   }

//   if (error) {
//     return <h1>Error: {error}</h1>;
//   }

//   return (
//     <div className="container" id="patientDetailsPage">
//       <div id="headerbar">
//         <div>
//           <img src="https://res.cloudinary.com/dpfnyv0ut/image/upload/v1709751594/avika-img_msxfud.png" alt=""></img>
//           </div>
//           <div className="dropdown" ><button id="patientlogout" onClick={toggleDropdown}>
//               <FaRegUserCircle size={40} />
//             </button>
//             {dropdownVisible && (
//               <div className="dropdown-content">
//                 <p>Harish</p>
//                 <p onClick={handleLogout}>Logout</p>
//               </div>
//             )}
//             </div>
//           </div>
//           <div className="headerbar2">
//             <div> <button id="backbutton">
//             <IoChevronBackCircleOutline size={40} />
//           </button></div>
         
      
//         <div className="logoutdiv">
//           <button id="view-file">View File</button>
//         </div>
//         </div>
      
//       <div id="details">
//         <h3>Patient Details</h3>
//         <p><span>Patient Name:</span> {details.patient_name}</p>
//         <p><span>Patient Age: </span>{details.age}</p>
//         <p><span>Gender:</span> {details.gender}</p>
//         <p><span>Date of Registration:</span> {details.Date_of_registration}</p>
//         <p><span>Place:</span> {details.place}</p>
//         <p><span>OP Number: </span>{details.op_number}</p>
//         <p><span>IP Number:</span> {details.ip_number}</p>
//         <p><span>Referencer by:</span> {details.referencer_by}</p>
//       </div>
//     </div>
//   );
// };

// export default PatientDetails;








// PatientDetails.jsx

import React, { useState, useEffect } from "react";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecordById } from "../../myredux/reducers/PatientSlice";
import { useNavigate, useParams } from "react-router-dom";
import './PatientDetails.css';

const PatientDetails = () => {
  const navigate = useNavigate();
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const { details, loading, error } = useSelector((state) => state.details);
  const dispatch = useDispatch();

  const { recordId } = useParams();

  useEffect(() => {
    dispatch(fetchRecordById(recordId));
  }, [dispatch, recordId]);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };


 
  const handleLogout = () => 
  {
       localStorage.removeItem('token');
       navigate('/')
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <div className="container" id="patientDetailsPage">
      <div id="headerbar">
        <div>
          <img src="https://res.cloudinary.com/dpfnyv0ut/image/upload/v1709751594/avika-img_msxfud.png" alt=""></img>
        </div>
        <div className="dropdown">
          <button id="patientlogout" onClick={toggleDropdown}>
            <FaRegUserCircle size={40} />
          </button>
          {dropdownVisible && (
  <div className="dropdown-content" visible={dropdownVisible}>
    <p>Harish</p>
    <p onClick={handleLogout}>Logout</p>
  </div>
)}

        </div>
      </div>
      <div className="headerbar2">
        <div>
          <button id="backbutton">
            <IoChevronBackCircleOutline size={40} />
          </button>
        </div>
        <div className="logoutdiv">
          <button id="view-file">View File</button>
        </div>
      </div>
      <div id="details">
        <h3>Patient Details</h3><hr></hr>
        <div className="detail-item">
          <p><span>Patient Name:</span> {details.patient_name}</p>
        </div>
        <div className="detail-item">
          <p><span>Patient Age:</span> {details.age}</p>
        </div>
        <div className="detail-item">
          <p><span>Gender:</span> {details.gender}</p>
        </div>
        <div className="detail-item">
          <p><span>Date of Registration:</span> {details.Date_of_registration}</p>
        </div>
        <div className="detail-item">
          <p><span>Place:</span> {details.place}</p>
        </div>
        <div className="detail-item">
          <p><span>OP Number:</span> {details.op_number}</p>
        </div>
        <div className="detail-item">
          <p><span>IP Number:</span> {details.ip_number}</p>
        </div>
        <div className="detail-item">
          <p><span>Referencer by:</span> {details.referencer_by}</p>
        </div>
      </div>
    </div>
  );
};

export default PatientDetails;
