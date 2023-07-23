import React, { useState, useEffect } from "react";
import "./TrackingPage.css";
import { useNavigate } from "react-router-dom";
import Rating from "./Rating";

const TrackingPage = ({clearCart}) => {
    const navigate = useNavigate();
  const [orderStatus, setOrderStatus] = useState([
    { step: "Order Placed", completed: true },
    { step: "Preparing", completed: false },
    { step: "Out for Delivery", completed: false },
    { step: "Delivered", completed: false }
  ]);
  const [animationPaused, setAnimationPaused] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [message, SetMessage] = useState(false);
  const [rating, SetRating] = useState(false);


  useEffect(() => {
    const preparingTimeout = setTimeout(() => {
      setOrderStatus((prevStatus) => {
        const updatedStatus = [...prevStatus];
        updatedStatus[1].completed = true;
        return updatedStatus;
      });
    }, 5000);

    const outForDeliveryTimeout = setTimeout(() => {
      setOrderStatus((prevStatus) => {
        const updatedStatus = [...prevStatus];
        updatedStatus[2].completed = true;
        return updatedStatus;
      });
    }, 15000);

    const deliveredTimeout = setTimeout(() => {
      setOrderStatus((prevStatus) => {
        const updatedStatus = [...prevStatus];
        updatedStatus[3].completed = true;
        return updatedStatus;
      });

      setTimeout(() => {
        SetMessage(true);
        setAnimationPaused(true);
        setShowButton(true);
        SetRating(true)
      });
    }, 25000);

    return () => {
      clearTimeout(preparingTimeout);
      clearTimeout(outForDeliveryTimeout);
      clearTimeout(deliveredTimeout);
    };
  }, []);

  const handleButtonClicked = () => {
    // e.preventDefault();
    clearCart();
    navigate("/");
  };

  return (
    <div className="order-tracking-page">
      <h1>Order Status</h1>
      <div className="progress-bar">
        {orderStatus.map((status, index) => (
          <div
            key={index}
            className={`step ${status.completed ? "completed" : ""}`}
          >
            <div className="step-number">{index + 1}</div>
            <div className="step-text">{status.step}</div>
          </div>
        ))}
      </div>
      <div className="delivery-map">
        <div className={`bike-animation ${animationPaused ? "paused" : ""}`} />
      </div>
      {message && <h2>Food Delivered Successfully</h2>}
      {rating && <Rating/>}
      {showButton && (
        <button className="success-button" onClick={handleButtonClicked}>
          Back to HomePage
        </button>
      )}
    </div>
  );
};

export default TrackingPage;
