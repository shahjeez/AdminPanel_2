import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./dataTable.scss";
import { columns } from "./datatablesource";
import { useNavigate } from "react-router-dom";

const DataTable = () => {
  const navigate = useNavigate();

  const handleAddProductToggle = () => {
    navigate("/products/new");
  };

  const handleAddCategoryToggle = () => {
    navigate("/categories/new");
  };

  const handleAddSubCategoryToggle = () => {
    navigate("/subcategories/new");
  };

  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch("http://localhost:4001/products")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((e) => console.log(e.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleEditToggle = (params) => {
    console.log("Row data:", params.row);
    navigate(`/products/${params.row.id}`);
  };

  const handleHideToggle = (params) => {
    console.log("Row data:", params.row);
    const updatedData = data.map((product) =>
      product.id === params.row.id ? { ...product, isVisible: false } : product
    );
    setData(updatedData);
    fetch(`http://localhost:4001/products/${params.row.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isVisible: false }),
    }).catch((e) => console.log(e.message));
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
      <div className='buttons'>
        <button className='addProduct' onClick={handleAddProductToggle}>
          Add Product
        </button>
        <button className='addCategory' onClick={handleAddCategoryToggle}>
          Add Category
        </button>
        <button className='addSubCategory' onClick={handleAddSubCategoryToggle}>
          Add SubCategory
        </button>
      </div>
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
