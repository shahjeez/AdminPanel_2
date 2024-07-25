// DataTable.jsx
import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./dataTable.scss";
import { columns } from "./datatablesource"; // Adjust the path as needed
import { useNavigate } from "react-router-dom";
const DataTable = () => {
  const navigate = useNavigate();
  const handleAddToggle = () => {
    navigate("/products/new");
  };
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch("http://localhost:4000/products")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((e) => console.log(e.message));
  };

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array means this effect runs once on mount

  const handleEditToggle = (params) => {
    console.log("Row data:", params.row);
    navigate(`/products/${params.row.id}`);
  };
  const handleHideToggle = (params) => {
    console.log("Row data:", params.row);
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => (
        <div className='cellAction'>
          <button
            className='editButton'
            onClick={() => handleEditToggle(params)}
          >
            View
          </button>
          <button
            className='removeButton'
            onClick={() => handleHideToggle(params)}
          >
            Hide
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className='dataTable'>
      <button className='addProduct' onClick={handleAddToggle}>
        Add
      </button>
      <DataGrid
        rows={data}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
