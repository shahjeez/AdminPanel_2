import React, { useEffect, useState } from "react";
import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const OrderList = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);

  const fetchOrder = () => {
    fetch("http://localhost:4000/orders")
      .then((res) => res.json())
      .then((orders) => setOrders(orders))
      .catch((e) => console.error("Error fetching orders:", e.message));
  };

  const handleStatusChange = (id, status) => {
    const updatedOrders = orders.map((order) =>
      order.id === id ? { ...order, status } : order
    );
    setOrders(updatedOrders);

    // Update on server
    const orderToUpdate = updatedOrders.find((order) => order.id === id);
    fetch(`http://localhost:4000/orders/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: orderToUpdate.status }),
    }).catch((e) => console.error("Error updating order status:", e.message));
  };

  const handleDetailToggle = (id) => {
    navigate(`/orders/details/${id}`);
  };

  useEffect(() => {
    fetchOrder();
  }, []);

  return (
    <div className='orderListContainer'>
      <Sidebar />
      <div className='list'>
        <TableContainer component={Paper} className='table'>
          <Table sx={{ minWidth: 650 }} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell className='tableCell'>Customer Number</TableCell>
                <TableCell className='tableCell'>Date</TableCell>
                <TableCell className='tableCell'>Time</TableCell>
                <TableCell className='tableCell'>Products</TableCell>
                <TableCell className='tableCell'>Amount</TableCell>
                <TableCell className='tableCell'>Status</TableCell>
                <TableCell className='tableCell'>Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell component='th' scope='row'>
                    {order.id}
                  </TableCell>
                  <TableCell className='tableCell'>
                    {order.customer_num}
                  </TableCell>
                  <TableCell className='tableCell'>{order.date}</TableCell>
                  <TableCell className='tableCell'>{order.time}</TableCell>
                  <TableCell className='tableCell' style={{ height: "40px" }}>
                    {order.products}
                  </TableCell>
                  <TableCell className='tableCell'>{order.amount}</TableCell>
                  <TableCell className='tableCell'>
                    <Select
                      value={order.status}
                      onChange={(e) =>
                        handleStatusChange(order.id, e.target.value)
                      }
                    >
                      <MenuItem value='Delivered'>Delivered</MenuItem>
                      <MenuItem value='Pending'>Pending</MenuItem>
                      <MenuItem value='Cancelled'>Cancelled</MenuItem>
                    </Select>
                  </TableCell>
                  <TableCell className='tableCell'>
                    <button
                      className='detailButton'
                      onClick={() => handleDetailToggle(order.id)}
                    >
                      See Details
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default OrderList;
