import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";

const NewSubCategory = () => {
  const initialDetails = {
    subCategoryName: "",
    subCategoryID: "",
  };

  const [details, setDetails] = useState(initialDetails);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(details);
    setDetails(initialDetails);
  };

  return (
    <div className='new'>
      <Sidebar />
      <div className='addContainer'>
        <h1>Add SubCategory</h1>
        <div className='form'>
          <form onSubmit={handleSubmit}>
            <p>Sub-Category Name</p>
            <input
              type='text'
              placeholder='SubCategory Name'
              name='subCategoryName'
              value={details.subCategoryName}
              onChange={handleChange}
            />
            <p>Sub-Category ID</p>
            <input
              type='text'
              placeholder='SubCategory ID'
              name='subCategoryID'
              value={details.subCategoryID}
              onChange={handleChange}
            />
            <button type='submit'>Add Sub-Category</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewSubCategory;
