import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRecords } from "../../myredux/reducers/RecordsSlice";
import { Table, Pagination, Dropdown, DropdownButton } from "react-bootstrap";
import { CiUser } from "react-icons/ci";
import {  useNavigate } from "react-router-dom";
import "./AdminPage.css";

const AdminPage = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const { records, loading, error } = useSelector((state) => state.records);
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);

  useEffect(() => {
    dispatch(fetchRecords());
  }, [dispatch, token]);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = records?.slice(indexOfFirstRecord, indexOfLastRecord);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

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
          <div id="lengthpart">
            <DropdownButton
              id="dropdown-basic-button"
              title={<CiUser id="icon" />}
              variant="light"
            >
              <Dropdown.Item disabled>Harish</Dropdown.Item>
              <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
            </DropdownButton>
          </div>
        </div>
        <div id="headline">
          <div>
            <h3>All Documents</h3>
          </div>
          <div id="lengthpart">
            <p className="ml-2 length">All Documents: {records?.length}</p>
          </div>
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
              {currentRecords?.map((record, index) => (
                <tr key={record.id} style={{backgroundColor:"gray"}}>
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
                    <button className="btn">Details</button>
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
            { length: Math.ceil(records?.length / recordsPerPage) },
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
              currentPage === Math.ceil(records?.length / recordsPerPage)
            }
          />
          <Pagination.Last
            onClick={() => paginate(Math.ceil(records?.length / recordsPerPage))}
            disabled={
              currentPage === Math.ceil(records?.length / recordsPerPage)
            }
          />
        </Pagination>
      </div>
    </div>
  );
};

export default AdminPage;
