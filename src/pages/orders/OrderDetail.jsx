import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./orderDetail.scss";
import Sidebar from "../../components/sidebar/Sidebar";

const OrderDetail = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/orders");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        if (!Array.isArray(data)) {
          throw new Error("Fetched data is not an array");
        }

        const orderDetail = data.find((order) => order.id === id);
        if (!orderDetail) {
          throw new Error("Order not found");
        }

        setOrder(orderDetail);
      } catch (error) {
        console.error("Error fetching order data:", error);
        setError(error.message);
      }
    };

    fetchData();
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!order) {
    return <div>Loading...</div>;
  }

  return (
    <div className='container'>
      <Sidebar className='sidebar' />
      <div className='order-detail'>
        <div className='order-content'>
          <h2>Order Details</h2>
          <p>
            <strong>ID:</strong> {order.id}
          </p>
          <p>
            <strong>Products:</strong> {order.products}
          </p>
          <p>
            <strong>Customer Number:</strong> {order.customer_num}
          </p>
          <p>
            <strong>Date:</strong> {order.date}
          </p>
          <p>
            <strong>Time:</strong> {order.time}
          </p>
          <p>
            <strong>Amount:</strong> {order.amount}
          </p>
          <p>
            <strong>Payment Method:</strong> {order.method}
          </p>
          <p>
            <strong>Status:</strong>{" "}
            <span className={`status ${order.status.toLowerCase()}`}>
              {order.status}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
