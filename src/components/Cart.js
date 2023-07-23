import React from "react";
import "./Cart.css";
import { Link, useNavigate } from 'react-router-dom';
import { FiTrash2 } from "react-icons/fi";


const Cart = ({ cartItems, removeFromCart, calculateTotal, clearCart }) => {
    const navigate = useNavigate()  
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/payment')
      };
  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2>Food in your Cart</h2>
        <button className="btn-cl" onClick={clearCart}>
          Clear Cart
        </button>
      </div>
      {cartItems.length > 0 ? (
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div className="cart-item" key={index}>
                <img
                  className="cart-item-img"
                  src={item.image}
                  alt={item.name}
                />
                <p className="cart-item-price" style={{ textAlign: "center" }}>
                  Rs {item.price}
                </p>
              <span className="cart-item-name">{item.name}</span>
              <button
                className="btn-remove"
                onClick={() => removeFromCart(index)}
              >
                <FiTrash2 color="white" fontSize="2em"/>
              </button>
            </div>
          ))}
        </div>
      ) : (
        <h4>Your cart is empty.  <Link to='/' >Click here to add</Link></h4>
      )}
      {cartItems.length > 0 ? (
        <span>
          <div className="cart-total">Total Amount: Rs {calculateTotal()}</div>
          <button onClick={handleSubmit} className="btn-pay">
            Proceed to Pay
          </button>
        </span>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Cart;
