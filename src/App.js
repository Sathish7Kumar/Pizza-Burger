import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cart from './components/Cart';
import FoodData from './components/Fooddata';
import './App.css';
import PaymentPage from './components/PaymentPage';
import OtpPage from './components/OtpPage';
import Login from './components/Login';
import TrackingPage from './components/TrackingPage';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (index) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += parseInt(item.price);
    });
    return total;
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <Router>
      {loggedIn ? (
        <>
          <Navbar cartItems={cartItems} clearCart={clearCart} />
          <Routes>
            <Route
              path="/"
              element={<Home FoodData={FoodData} cartItems={cartItems} addToCart={addToCart} />}
            />
            <Route
              path="/cart"
              element={
                <Cart
                  cartItems={cartItems}
                  removeFromCart={removeFromCart}
                  calculateTotal={calculateTotal}
                  clearCart={clearCart}
                />
              }
            />
            {cartItems.length > 0 && (
              <Route
                path="/payment"
                element={<PaymentPage calculateTotal={calculateTotal} />}
              />
            )}
            {cartItems.length > 0 && (
              <Route
                path="/otp-page"
                element={<OtpPage calculateTotal={calculateTotal} />}
              />
            )}
            {cartItems.length > 0 && (
              <Route
                path="/order-tracking"
                element={<TrackingPage clearCart={clearCart} />}
              />
            )}
            <Route path="/payment/*" element={<Navigate to="/" />} />
            <Route path="/otp-page/*" element={<Navigate to="/" />} />
            <Route path="/order-tracking/*" element={<Navigate to="/" />} />
          </Routes>
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </Router>
  );
};

export default App;

