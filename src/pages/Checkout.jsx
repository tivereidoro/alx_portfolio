import React from "react";
import "../css/SingleFood.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop.jsx";

const Checkout = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Payment Made Successufully");
    navigate("/orders");
  };

  return (
    <div className="singlefood-container">
      <ScrollToTop />
      <div className="bg-color"></div>
      <div className="singlefood">
        <Link to="/dashboard">
          <AiOutlineArrowLeft className="go-back" />
        </Link>
        <form onSubmit={handleSubmit}>
          <h3>Checkout</h3>
          <input type="number" placeholder="Card Number" />
          <input type="text" placeholder="Exp Date" />
          <input type="text" placeholder="CVV/CVV2" />
          <input type="number" placeholder="Card Pin" />
          <button>MAKE PAYMENT</button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
