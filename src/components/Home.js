import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";

const Home = ({ FoodData, addToCart, cartItems }) => {
  return (
    <>
      <div className="home-navbar">
        <div className="home-navbar-cart">
          <span className="home-cart-count">{cartItems.length}</span>
          <Link className="" to="/cart">
            <BsFillCartFill color="black" fontSize="2em" />
          </Link>
        </div>
      </div>
      <div className="food-app">
        {FoodData.map((item, index) => (
          <div className="food-card" key={index}>
            <h2 className="food-name">{item.name}</h2>
            <img className="food-image" src={item.image} alt={item.name} />
            <h3 className="sub-items-name">{item.subItemsData.name}</h3>
            <div className="sub-items-container">
              {item.subItemsData.subItems.map((subItem, subIndex) => (
                <div className="sub-item-card" key={subIndex}>
                  <img
                    className="sub-item-image"
                    src={subItem.image}
                    alt={subItem.name}
                  />
                  <h4 className="sub-item-name">{subItem.name}</h4>
                  <p className="sub-item-price">Rs {subItem.price}</p>
                  <p className="sub-item-description">{subItem.description}</p>
                  <button
                    className="btn btn-primary"
                    onClick={() => addToCart(subItem)}
                  >
                    Add to Cart
                  </button>
                  <hr />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
