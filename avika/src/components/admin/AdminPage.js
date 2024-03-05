// import React,{useEffect} from 'react';
// import {useDispatch, useSelector} from 'react-redux';
// import { fetchRecords,setCurrentPage } from '../../redux/reducers/AdminPageSlice';

// const AdminPage = () => {

//   const dispatch = useDispatch();

// const {records ,loading, error,currentPage,recordsPerPage}=useSelector((state)=>{state.adminrecords})

// useEffect(()=>
// {
//     dispatch(fetchRecords());
// },[dispatch]);

//   const indexOfLastRecord = currentPage * recordsPerPage;
//   const indexOfFirstRecord =indexOfLastRecord-recordsPerPage;
//   const currentRecords = records.slice(indexOfFirstRecord,indexOfLastRecord);

//   const totalPages =Math.ceil(records.length/recordsPerPage);

//   const paginate =(pageNumber)=>
//   {
//     if(pageNumber<1 || pageNumber>totalPages)
//     return;
//    dispatch(setCurrentPage(pageNumber));

//   };
//   const renderPageNumbers=()=>
//   {
//     const pageNumbers=[];
//     for(let i=1;i<=totalPages;i++)
//     {
//       pageNumbers.push(
//       <button key={i} onClick={()=>paginate(i)} className={i===currentPage ? 'active':''}>{i}</button>);
//     }
//   return pageNumbers;
//   }

//   return (

//      <div>
//      <h1>All Patient Details</h1>
//      {loading && <p>Loading..</p>}
//      {error && <p>Error:{error}</p>}
//      <table>
//       <thead>
//         <tr>
//           <th>ID</th>
//           <th>Op_number</th>
//           <th>Ip_number</th>
//           <th>Name</th>
//           <th>age</th>
//           <th>gender</th>
//           <th>palce</th>
//           <th>Registration_Date</th>
//           <th>reference_by</th>
//           <th>Details</th>
//         </tr>
//       </thead>
//       <tbody>
//         {currentRecords.map((record)=>
//         (
//           <tr key={record.id}>
//             <td>{record.id}</td>
//             <td>{record.op_number}</td>
//             <td>{record.ip_number}</td>
//             <td>{record.patient_name}</td>
//             <td>{record.age}</td>
//             <td>{record.gender}</td>
//             <td>{record.place}</td>
//             <td>{record.Date_of_registration}</td>
//             <td>{record.reference_by}</td>
//             <td><button className='btn btn-success'>details</button></td>
//           </tr>
//         ))}
//       </tbody>
//      </table>
//      <div className='pagination'>
//       <button onClick={()=>paginate(currentPage-1)} disabled={currentPage===1}>prev</button>
//       {renderPageNumbers()}
//       <button onClick={()=>paginate(currentPage+1)} disabled={currentPage===totalPages}>next</button>
//      </div>
//     </div>
//   )
// }

// export default AdminPage;

// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchRecords, setCurrentPage } from '../../redux/reducers/AdminPageSlice';

// const AdminPage = () => {
//   const dispatch = useDispatch();
//   const { records, loading, error, currentPage, recordsPerPage } = useSelector((state) => state.adminrecords) ||{};

//   useEffect(() => {
//     dispatch(fetchRecords());
//   }, [dispatch]);

//   const currentRecords = records || [];
//   const indexOfLastRecord = currentPage * recordsPerPage;
//   const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
//   //const currentRecords =records? records.slice(indexOfFirstRecord, indexOfLastRecord):[];
//   const totalPages = Math.ceil(records.length / recordsPerPage);

//   const paginate = (pageNumber) => {
//     if (pageNumber < 1 || pageNumber > totalPages) return;
//     dispatch(setCurrentPage(pageNumber));
//   };

//   const renderPageNumbers = () => {
//     const pageNumbers = [];
//     for (let i = 1; i <= totalPages; i++) {
//       pageNumbers.push(
//         <button key={i} onClick={() => paginate(i)} className={i === currentPage ? 'active' : ''}>
//           {i}
//         </button>
//       );
//     }
//     return pageNumbers;
//   };

//   return (
//     <div>
//       <h1>All Patient Details</h1>
//       {loading && <p>Loading..</p>}
//       {error && <p>Error: {error}</p>}
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Op_number</th>
//             <th>Ip_number</th>
//             <th>Name</th>
//             <th>age</th>
//             <th>gender</th>
//             <th>place</th>
//             <th>Registration_Date</th>
//             <th>reference_by</th>
//             <th>Details</th>
//           </tr>
//         </thead>
//         <tbody>
//           {currentRecords.map((record) => (
//             <tr key={record.id}>
//               <td>{record.id}</td>
//               <td>{record.op_number}</td>
//               <td>{record.ip_number}</td>
//               <td>{record.patient_name}</td>
//               <td>{record.age}</td>
//               <td>{record.gender}</td>
//               <td>{record.place}</td>
//               <td>{record.Date_of_registration}</td>
//               <td>{record.reference_by}</td>
//               <td>
//                 <button className='btn btn-success'>details</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <div className='pagination'>
//         <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
//           prev
//         </button>
//         {renderPageNumbers()}
//         <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages}>
//           next
//         </button>
//       </div>
//     </div>
//   );
// };
//export default AdminPage;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const AdminPage = () => {
//   const [loading, setLoading] = useState(false);
//   const [records, setRecords] = useState([]);
//   const [error, setError] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [recordsPerPage] = useState(10);

//   useEffect(() => {
//     const fetchRecords = async () => {
//       setLoading(true);
//       try {
//         const token = localStorage.getItem('token');
//         const response = await axios.get('https://med.test.avika.ai/admin/records', {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setRecords(response.data);
//         setError(null);
//       } catch (error) {
//         setError(error.message);
//       }
//       setLoading(false);
//     };

//     fetchRecords();
//   }, []);
//   const indexOfLastRecord = currentPage * recordsPerPage;
//   const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
//   const currentRecords = records.slice(indexOfFirstRecord, indexOfLastRecord);
//   const totalPages = Math.ceil(records.length / recordsPerPage);

//   const paginate = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   const renderPageNumbers = () => {
//     const pageNumbers = [];
//     for (let i = 1; i <= totalPages; i++) {
//       pageNumbers.push(
//         <button key={i} onClick={() => paginate(i)} className={i === currentPage ? 'active' : ''}>
//           {i}
//         </button>
//       );
//     }
//     return pageNumbers;
//   };

//   return (
//     <div>
//       <h1>All Patient Details</h1>
//       {loading && <p>Loading..</p>}
//       {error && <p>Error: {error}</p>}
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Op_number</th>
//             <th>Ip_number</th>
//             <th>Name</th>
//             <th>age</th>
//             <th>gender</th>
//             <th>place</th>
//             <th>Registration_Date</th>
//             <th>reference_by</th>
//             <th>Details</th>
//           </tr>
//         </thead>
//         <tbody>
//           {currentRecords.map((record) => (
//             <tr key={record.id}>
//               <td>{record.id}</td>
//               <td>{record.op_number}</td>
//               <td>{record.ip_number}</td>
//               <td>{record.patient_name}</td>
//               <td>{record.age}</td>
//               <td>{record.gender}</td>
//               <td>{record.place}</td>
//               <td>{record.Date_of_registration}</td>
//               <td>{record.reference_by}</td>
//               <td>
//                 <button className='btn btn-success'>details</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <div className='pagination'>
//         <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
//           prev
//         </button>
//         {renderPageNumbers()}
//         <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages}>
//           next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AdminPage;

// RecordsPage.js
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchrecord } from "../../myredux/reducers/RecordsSlice";
// //import { FetchRecords } from "../../myredux/actions/FetchRecords";

// const RecordsPage = () => {
//   const dispatch = useDispatch();
//   //const { records, loading, error } = useSelector((state) =>state.RecordsSliceReducer.allrecords);
//   //const {records} =useSelector((state)=>state.RecordsSliceReducer.records)
//  // const {loading} =useSelector((state)=>state.RecordsSliceReducer.loading);
//   //const {error} =useSelector((state)=>state.RecordsSliceReducer.error);
//    const data = useSelector(state=>state)

//   const [currentPage, setCurrentPage] = useState(1);
//   const [recordsPerPage] = useState(10);

//   useEffect(() => {
//     dispatch(fetchrecord());
//   }, [dispatch]);

//   const allrecords = data || [];

//   const indexOfLastRecord = currentPage * recordsPerPage;
//   const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
//   const currentRecords = data.allrecords.slice(indexOfFirstRecord, indexOfLastRecord);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   return (
//     <div>
//      {data.isLoading?<h1>Loading....</h1>:( <div>
//       <table>
//         <thead>
//           <tr>
//           <th>OP Number</th>
//             <th>IP Number</th>
//             <th>Patient Name</th>
//             <th>Age</th>
//             <th>Gender</th>
//             <th>Place</th>
//             <th>Date of Registration</th>
//             <th>Reference By</th>
//             <th>Patient ID</th>
//             <th>Details</th>
//           </tr>
//         </thead>
//         <tbody>
//           {currentRecords.map((record) => (
//             <tr key={record.patient_id}>
//              <td>{record.op_number}</td>
//               <td>{record.ip_number}</td>
//               <td>{record.patient_name}</td>
//               <td>{record.age}</td>
//               <td>{record.gender}</td>
//               <td>{record.place}</td>
//               <td>{record.Date_of_registration}</td>
//               <td>{record.referrence_by}</td>
//               <td>{record.patient_id}</td>
//               <td><button className="btn btn-success">Details</button></td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <Pagination
//         recordsPerPage={recordsPerPage}
//         totalRecords={allrecords.length}
//         paginate={paginate}
//         currentPage={currentPage}
//       />
//       </div>)}
//     </div>
//   );
// };

// const Pagination = ({ recordsPerPage, totalRecords, paginate, currentPage }) => {
//   const pageNumbers = [];

//   for (let i = 1; i <= Math.ceil(totalRecords / recordsPerPage); i++) {
//     pageNumbers.push(i);
//   }

//   return (
//     <ul className="pagination">
//       <li>
//         <button onClick={() => paginate(1)}>&laquo;</button>
//       </li>
//       {pageNumbers.map((number) => (
//         <li key={number} className={number === currentPage ? "active" : null}>
//           <button onClick={() => paginate(number)}>{number}</button>
//         </li>
//       ))}
//       <li>
//         <button onClick={() => paginate(pageNumbers.length)}>&raquo;</button>
//       </li>
//     </ul>
//   );
// };

// export default RecordsPage;

// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchrecords } from "../../myredux/reducers/RecordsSlice";

// const AdminPage = () => {
//   const dispatch = useDispatch();
//   const data= useSelector((state)=>state.fetchrecords);
//   const Loading=useSelector((state)=>state.fetchrecords)

//   useEffect(() => {
//     dispatch(fetchrecords());
//   }, [dispatch]);

//   if (Loading || !data) {
//     return <h1>Loading...</h1>;
//   }

//   return (
//     <div>
//       <table>
//         <thead>
//           <tr>
//             <th>OP Number</th>
//             <th>IP Number</th>
//             <th>Patient Name</th>
//             <th>Age</th>
//             <th>Gender</th>
//             <th>Place</th>
//             <th>Date of Registration</th>
//             <th>Reference By</th>
//             <th>Patient ID</th>
//             <th>Details</th>
//           </tr>
//         </thead>
//         <tbody>
//         {data.map((record) => (
//     <tr key={record.patient_id}>
//     <td>{record.op_number}</td>
//     <td>{record.ip_number}</td>
//     <td>{record.patient_name}</td>
//     <td>{record.age}</td>
//     <td>{record.gender}</td>
//     <td>{record.place}</td>
//     <td>{record.Date_of_registration}</td>
//     <td>{record.referrence_by}</td>
//     <td>{record.patient_id}</td>
//     <td>
//       <button className="btn btn-success">Details</button>
//     </td>
//   </tr>
// ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };
// export default AdminPage;

// AdminPage.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchrecords } from "../../myredux/reducers/RecordsSlice";

const AdminPage = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.records);
  const { loading } = useSelector((state) => state.records);
  const { error } = useSelector((state) => state.records);

  useEffect(() => {
    dispatch(fetchrecords);
  }, [dispatch]);

 
  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>OP_Number</th>
            <th>IP_Number</th>
            <th>Patient_name</th>
            <th>age</th>
            <th>gender</th>
            <th>place</th>
            <th>Date of Registration</th>
            <th>Reference By</th>
            <th>file_path</th>
            <th>created_at</th>
            <th>Patient_id</th>
            <th>verified</th>
            <th>uploaded_by</th>
            <th>uploaded_by_id</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {data.map((record) => (
            <tr key={record.id}>
              <td>{record.op_number}</td>
              <td>{record.ip_number}</td>
              <td>{record.patient_name}</td>
              <td>{record.age}</td>
              <td>{record.gender}</td>
              <td>{record.place}</td>
              <td>{record.Date_of_registration}</td>
              <td>{record.referrence_by}</td>
              <td>{record.file_path}</td>
              <td>{record.created_at}</td>
              <td>{record.patient_id}</td>
              <td>{record.verified}</td>
              <td>{record.uploaded_by}</td>
              <td>{record.uploaded_by_id}</td>
              <td>
                <button className="btn btn-success">Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPage;
