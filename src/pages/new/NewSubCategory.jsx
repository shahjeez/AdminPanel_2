import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
const NewSubCategory = () => {
  return (
    <div className='new'>
      <Sidebar />
      <div className='addContainer'>
        <h1>Add SubCategory</h1>
        <div className='form'>
          <form>
            <p>Sub-Category Name</p>
            <input type='text' placeholder='SubCategory' />
            <p>Sub-Category ID</p>
            <input type='text' placeholder='SubCategory ID' />
            <button type='submit' onSubmit={``}>
              Add Sub-Category
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default NewSubCategory;
