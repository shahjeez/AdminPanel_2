import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import TableD from "../../components/table/Table";
import "./orderList.scss";
const OrderList = () => {
  return (
    <div className='orderList'>
      <Sidebar />
      <div className='newContainer'>
        <TableD />
      </div>
    </div>
  );
};
export default OrderList;
