import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
const NewCategory = () => {
  const initialDetails = {
    categoryName: "",
    categoryID: "",
  };
  const [details, setDetails] = useState(initialDetails);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmit = () => {
    e.preventDefault();
    console.log(details);
    setDetails(initialDetails);
    // API call to add category here.
  };
  return (
    <div className='new'>
      <Sidebar />
      <div className='addContainer'>
        <h1>Add Category</h1>
        <div className='form'>
          <form onSubmit={handleSubmit}>
            <p>Category Name</p>
            <input
              type='text'
              placeholder='Category'
              name='categoryName'
              onChange={handleChange}
              value={details.categoryName}
            />
            <p>Category ID</p>
            <input
              type='text'
              placeholder='Category ID'
              name='categoryID'
              onChange={handleChange}
              value={details.categoryID}
            />
            <button type='submit'>Add Category</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default NewCategory;
