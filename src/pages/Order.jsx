// pages/Order.jsx
import React from "react";
import { useLocation } from "react-router-dom";

function Order() {
  const location = useLocation();
  const order = location.state?.order; // Gunakan optional chaining untuk menghindari error jika state tidak ada

  const renderOrderItems = () => {
    const items = [];
    if (order?.pizza > 0) {
      items.push(<li key="pizza">Pizza: {order.pizza}</li>);
    }
    if (order?.burger > 0) {
      items.push(<li key="burger">Burger: {order.burger}</li>);
    }
    if (order?.sushi > 0) {
      items.push(<li key="sushi">Sushi: {order.sushi}</li>);
    }
    return items.length > 0 ? items : <li>No items ordered</li>;
  };

  const handlePayment = () => {
    // Logika untuk pembayaran dapat ditambahkan di sini
    alert("Proceeding to payment...");
  };

  return (
    <div className="wrapper">
      <h1>Your Order</h1>
      <p>Thank you for your order! Here are the details:</p>
      <ul>
        {renderOrderItems()}
      </ul>
      <button onClick={handlePayment} className="payment-button">Proceed to Payment</button>
    </div>
  );
}

export default Order;
