import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DataTable from "../../components/datatable/DataTable";
import { useNavigate } from "react-router-dom";
const Single = () => {
  const navigate = useNavigate();
  const handleAddToggle = () => {
    navigate("/products/new");
  };
  return (
    <div className='single'>
      <Sidebar />
      <div className='singleContainer'>
        <Navbar />
        <button className='addProduct' onClick={handleAddToggle}>
          Add
        </button>
        <div className='top'>
          <div className='left'>
            <div className='btnContainer'>
              <div>
                <button className='editProductButton'>Edit</button>
              </div>
              <div>
                <button className='hideProductButton'>Hide</button>
              </div>
            </div>
            <h1 className='title'>Information</h1>
            <div className='item'>
              <div className='details'>
                <h1 className='itemTitle'>Bread</h1>
                <img src={"/"} alt='productImg' className='itemImg' />

                <div className='detailItem'>
                  <span className='itemKey'>Cost Price:</span>
                  <span className='itemValue'>Rs 100</span>
                </div>
                <div className='detailItem'>
                  <span className='itemKey'>Retail Price:</span>
                  <span className='itemValue'>Rs 130</span>
                </div>
                <div className='detailItem'>
                  <span className='itemKey'>Discount:</span>
                  <span className='itemValue'>%</span>
                </div>
                <div className='detailItem'>
                  <span className='itemKey'>Discounted Price:</span>
                  <span className='itemValue'>Rs 130</span>
                </div>
                <div className='detailItem'>
                  <span className='itemKey'>Product ID:</span>
                  <span className='itemValue'>#1313</span>
                </div>
                <div className='detailItem'>
                  <span className='itemKey'>Category ID:</span>
                  <span className='itemValue'>#1313</span>
                </div>
                <div className='detailItem'>
                  <span className='itemKey'>Sub-Category ID:</span>
                  <span className='itemValue'>#1313</span>
                </div>
                <div className='detailItem'>
                  <span className='itemKey'>Stock:</span>
                  <span className='itemValue'>10</span>
                </div>
                <div className='detailItem'>
                  <span className='itemKey'>Description:</span>
                  <span className='itemValue'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officiis ab porro, eum recusandae neque fugit aperiam
                    tenetur illum ea nostrum modi alias, odio laudantium, nobis
                    necessitatibus officia libero ex quisquam!
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* <div className='right'>
            <ProductDetail />
          </div> */}
        </div>

        <div className='bottom'>
          <DataTable />
        </div>
      </div>
    </div>
  );
};
export default Single;
