// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchRecords } from "../../myredux/reducers/RecordsSlice";
// import { Table, Pagination } from "react-bootstrap";
// import { CiUser } from "react-icons/ci";
// import { useNavigate } from "react-router-dom";
// import "./AdminPage.css";


// const AdminPage = () => {
//   const dispatch = useDispatch();
//   const token = localStorage.getItem("token");
//   const { records, loading, error } = useSelector((state) => state.records);
//   const navigate = useNavigate();
//   const [currentPage, setCurrentPage] = useState(1);
//   const [recordsPerPage] = useState(10);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [genderFilter, setGenderFilter] = useState(null);
//   const [dropdownVisible, setDropdownVisible] = useState(false);

//   useEffect(() => {
//     dispatch(fetchRecords());
//   }, [dispatch, token]);

//   const filterRecords = records.filter(
//     (record) =>
//       record?.patient_name.toLowerCase().includes(searchQuery.toLowerCase()) &&
//       (!genderFilter ||
//         record.gender.toLowerCase() === genderFilter.toLowerCase())
//   );

//   const indexOfLastRecord = currentPage * recordsPerPage;
//   const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
//   const currentRecords = filterRecords.slice(
//     indexOfFirstRecord,
//     indexOfLastRecord
//   );

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/");
//   };

//   const toggleDropdown = () => {
//     setDropdownVisible(!dropdownVisible);
//   };

//   if (loading) {
//     return <h1>Loading...</h1>;
//   }

//   if (error) {
//     return <h1>Error: {error}</h1>;
//   }

//   const handlePatienDetails = (recordId) => {
//     console.log(recordId);
//     const token = localStorage.getItem("token");
//     if (token !== null);
//     navigate(`/patientdeatils/${recordId}`);
//   };

//   return (
//     <div id="allrecords">
//       <div id="container" className="table-responsive">
//         <div id="headline">
//           <div>
//             <img
//               src="https://res.cloudinary.com/dpfnyv0ut/image/upload/v1709751594/avika-img_msxfud.png"
//               alt=""
//             ></img>
//           </div>
//           <div id="lengthpart" className="dropdown">
//             <button id="adminlogout" onClick={toggleDropdown}>
//               <CiUser size={30} />
//             </button>
//             {dropdownVisible && (
//               <div className="dropdown-contents">
//                 <p>Harish</p>
//                 <p onClick={handleLogout}>Logout</p>
//               </div>
//             )}
//           </div>
//         </div>
//           <div id="headline">
//           <div>
//             <h3 id="recordsh3">All Documents</h3>
//           </div>
//           <div id="lengthpart">
//             <p className="ml-2 length">All Documents: {filterRecords.length}</p>
//           </div>
//         </div>
//         <div className="headerbar">
//           <input
//             type="search"
//             placeholder="Search Patient name"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//           />
//           <select
//             className="form-select"
//             aria-label="Default select example"
//             onChange={(e) =>
//               setGenderFilter(e.target.value === "all" ? null : e.target.value)
//             }
//           >
//             <option value="all">select Gender</option>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//           </select>
         
//         </div>
//         <div className="table-container">
//           <Table striped bordered id="tabledata">
//             <thead id="heads">
//               <tr>
//                 <th>S_NO</th>
//                 <th>Patient Name</th>
//                 <th>Age</th>
//                 <th>Gender</th>
//                 <th>Date of Registration</th>
//                 <th>Place</th>
//                 <th>Uploaded Date</th>
//                 <th>OP Number</th>
//                 <th>IP Number</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>

//             <tbody>
//               {currentRecords.map((record, index) => (
//                 <tr key={record.id} style={{ backgroundColor: "gray" }}>
//                   <td>{indexOfFirstRecord + index + 1}</td>
//                   <td>{record.patient_name}</td>
//                   <td>{record.age}</td>
//                   <td>{record.gender}</td>
//                   <td>{record.Date_of_registration}</td>
//                   <td>{record.place}</td>
//                   <td>{record.created_at}</td>
//                   <td>{record.op_number}</td>
//                   <td>{record.ip_number}</td>
//                   <td>
//                     <button
//                       className="btn"
//                       id="adminpagebtn"
//                       onClick={() => handlePatienDetails(record.id)}
//                     >
//                       Details
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>
//         </div>
//       </div>
//       <div className="pagination-container">
//         <Pagination className="pagination">
//           <Pagination.First
//             onClick={() => paginate(1)}
//             disabled={currentPage === 1}
//           />
//           <Pagination.Prev
//             onClick={() => paginate(currentPage - 1)}
//             disabled={currentPage === 1}
//           />
//           {Array.from(
//             { length: Math.ceil(filterRecords.length / recordsPerPage) },
//             (_, i) =>
//               i >= currentPage - 3 &&
//               i < currentPage + 3 && (
//                 <Pagination.Item
//                   id="numbers"
//                   key={i}
//                   onClick={() => paginate(i + 1)}
//                   active={i + 1 === currentPage}
//                 >
//                   {i + 1}
//                 </Pagination.Item>
//               )
//           )}
//           <Pagination.Next
//             onClick={() => paginate(currentPage + 1)}
//             disabled={
//               currentPage === Math.ceil(filterRecords.length / recordsPerPage)
//             }
//           />
//           <Pagination.Last
//             onClick={() =>
//               paginate(Math.ceil(filterRecords.length / recordsPerPage))
//             }
//             disabled={
//               currentPage === Math.ceil(filterRecords.length / recordsPerPage)
//             }
//           />
//         </Pagination>
//       </div>
//     </div>
//   );
// };

// export default AdminPage;


import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRecords } from "../../myredux/reducers/RecordsSlice";
import { Table, Pagination } from "react-bootstrap";
import { CiUser } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker"; // Import the date picker component
import "react-datepicker/dist/react-datepicker.css"; // Import date picker styles
import "./AdminPage.css";

const AdminPage = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const { records, loading, error } = useSelector((state) => state.records);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");
  const [genderFilter, setGenderFilter] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [startDate, setStartDate] = useState(null); // State for start date
  const [endDate, setEndDate] = useState(null); // State for end date

  useEffect(() => {
    dispatch(fetchRecords());
  }, [dispatch, token]);

  const filterRecords = records.filter(
    (record) =>
      record?.patient_name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (!genderFilter ||
        record.gender.toLowerCase() === genderFilter.toLowerCase()) &&
      (!startDate || new Date(record.Date_of_registration) >= startDate) && // Filter start date
      (!endDate || new Date(record.Date_of_registration) <= endDate) // Filter end date
  );

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = filterRecords.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  const handlePatienDetails = (recordId) => {
    console.log(recordId);
    const token = localStorage.getItem("token");
    if (token !== null);
    navigate(`/patientdeatils/${recordId}`);
  };

  return (
    <div id="allrecords">
      <div id="container" className="table-responsive">
        <div id="headline">
          <div>
            <img
              src="https://res.cloudinary.com/dpfnyv0ut/image/upload/v1709751594/avika-img_msxfud.png"
              alt=""
            ></img>
          </div>
          <div id="lengthpart" className="dropdown">
            <button id="adminlogout" onClick={toggleDropdown}>
              <CiUser size={30} />
            </button>
            {dropdownVisible && (
              <div className="dropdown-contents">
                <p>Harish</p>
                <p onClick={handleLogout}>Logout</p>
              </div>
            )}
          </div>
        </div>
        <div id="headline">
          <div>
            <h3 id="recordsh3">All Documents</h3>
          </div>
          <div id="lengthpart">
            <p className="ml-2 length">All Documents: {filterRecords.length}</p>
          </div>
        </div>
        <div className="headerbar">
          <input
            type="search"
            placeholder="Search Patient name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={(e) =>
              setGenderFilter(e.target.value === "all" ? null : e.target.value)
            }
          >
            <option value="all">select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            placeholderText="From Date"
          />
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            placeholderText="To Date"
          />
        </div>
        <div className="table-container">
          <Table striped bordered id="tabledata">
            <thead id="heads">
              <tr>
                <th>S_NO</th>
                <th>Patient Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Date of Registration</th>
                <th>Place</th>
                <th>Uploaded Date</th>
                <th>OP Number</th>
                <th>IP Number</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {currentRecords.map((record, index) => (
                <tr key={record.id} style={{ backgroundColor: "gray" }}>
                  <td>{indexOfFirstRecord + index + 1}</td>
                  <td>{record.patient_name}</td>
                  <td>{record.age}</td>
                  <td>{record.gender}</td>
                  <td>{record.Date_of_registration}</td>
                  <td>{record.place}</td>
                  <td>{record.created_at}</td>
                  <td>{record.op_number}</td>
                  <td>{record.ip_number}</td>
                  <td>
                    <button
                      className="btn"
                      id="adminpagebtn"
                      onClick={() => handlePatienDetails(record.id)}
                    >
                      Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
      <div className="pagination-container">
        <Pagination className="pagination">
          <Pagination.First
            onClick={() => paginate(1)}
            disabled={currentPage === 1}
          />
          <Pagination.Prev
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          />
          {Array.from(
            { length: Math.ceil(filterRecords.length / recordsPerPage) },
            (_, i) =>
              i >= currentPage - 3 &&
              i < currentPage + 3 && (
                <Pagination.Item
                  id="numbers"
                  key={i}
                  onClick={() => paginate(i + 1)}
                  active={i + 1 === currentPage}
                >
                  {i + 1}
                </Pagination.Item>
              )
          )}
          <Pagination.Next
            onClick={() => paginate(currentPage + 1)}
            disabled={
              currentPage === Math.ceil(filterRecords.length / recordsPerPage)
            }
          />
          <Pagination.Last
            onClick={() =>
              paginate(Math.ceil(filterRecords.length / recordsPerPage))
            }
            disabled={
              currentPage === Math.ceil(filterRecords.length / recordsPerPage)
            }
          />
        </Pagination>
      </div>
    </div>
  );
};

export default AdminPage;










