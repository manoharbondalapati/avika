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

























import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecords, setCurrentPage } from '../../redux/reducers/AdminPageSlice';

const AdminPage = () => {
  const dispatch = useDispatch();

  // Destructure the state directly in the selector
  const { records, loading, error, currentPage, recordsPerPage } = useSelector((state) => state.adminrecords);

  useEffect(() => {
    dispatch(fetchRecords());
  }, [dispatch]);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = records.slice(indexOfFirstRecord, indexOfLastRecord);

  const totalPages = Math.ceil(records.length / recordsPerPage);

  const paginate = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    dispatch(setCurrentPage(pageNumber));
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button key={i} onClick={() => paginate(i)} className={i === currentPage ? 'active' : ''}>
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div>
      <h1>All Patient Details</h1>
      {loading && <p>Loading..</p>}
      {error && <p>Error: {error}</p>}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Op_number</th>
            <th>Ip_number</th>
            <th>Name</th>
            <th>age</th>
            <th>gender</th>
            <th>place</th>
            <th>Registration_Date</th>
            <th>reference_by</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {currentRecords.map((record) => (
            <tr key={record.id}>
              <td>{record.id}</td>
              <td>{record.op_number}</td>
              <td>{record.ip_number}</td>
              <td>{record.patient_name}</td>
              <td>{record.age}</td>
              <td>{record.gender}</td>
              <td>{record.place}</td>
              <td>{record.Date_of_registration}</td>
              <td>{record.reference_by}</td>
              <td>
                <button className='btn btn-success'>details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='pagination'>
        <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
          prev
        </button>
        {renderPageNumbers()}
        <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages}>
          next
        </button>
      </div>
    </div>
  );
};

export default AdminPage;
