import React from 'react';
import { BiLogOutCircle } from "react-icons/bi";

import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = ({ cartItems, clearCart }) => {
  const handleLogout = () => {
    window.location.reload(); 
  };
  return (
    <nav className="navbar">
      <Link to='/'><div className="navbar-brand">Food App</div></Link>
      <div className="navbar-btn">
        <button className='logout-btn' onClick={handleLogout}>
      <BiLogOutCircle color='red' fontSize='2rem' />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

