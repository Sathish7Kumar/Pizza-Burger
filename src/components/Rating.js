import React, { useState } from "react";
import "./Rating.css";

const Rating = () => {
  const [rating, setRating] = useState(0);
  const [deliveryRating, setDeliveryRating] = useState(0);
  const [frated, setFRated] = useState(false);
  const [delrated, setDelRated] = useState(false);


  const handleFoodRatingChange = (event) => {
    if (!frated) {
      setRating(parseInt(event.target.value));
      setFRated(true);
    }
  };

  const handleDeliveryRatingChange = (event) => {
    if (!delrated) {
      setDeliveryRating(parseInt(event.target.value));
      setDelRated(true);
    }
  };

  

  return (
    <div className="rating-container">
      <h2 className="r-head">
        Your Ratings make us improve our food quality and delivery service
      </h2>
      <div className="rating-section">
        <h3>Food Rating</h3>
        <div className="star-rating">
          {[1, 2, 3, 4, 5].map((value) => (
            <label
              key={value}
              className={value <= rating ? "star filled" : "star"}
            >
              <input
                type="radio"
                name="foodRating"
                value={value}
                checked={value === rating}
                onChange={handleFoodRatingChange}
                className="radio"
                disabled={frated}
              />
              <span className="star-icon">&#9733;</span>
            </label>
          ))}
        </div>
        <p className="selected-rating">
          {rating === 0
            ? "Please select a rating"
            : `Your Response has been Recorded: ${rating} Stars for Food`}
        </p>
      </div>
      <div className="rating-section">
        <h3>Delivery Rating</h3>
        <div className="star-rating">
          {[1, 2, 3, 4, 5].map((value) => (
            <label
              key={value}
              className={value <= deliveryRating ? "star filled" : "star"}
            >
              <input
                type="radio"
                name="deliveryRating"
                value={value}
                checked={value === deliveryRating}
                onChange={handleDeliveryRatingChange}
                className="radio"
                disabled={delrated}
              />
              <span className="star-icon">&#9733;</span>
            </label>
          ))}
        </div>
        <p className="selected-rating">
          {deliveryRating === 0
            ? "Please select a rating"
            : `Your Response has been Recorded: ${deliveryRating} Stars for Delivery`}
        </p>
      </div>
    </div>
  );
};

export default Rating;
