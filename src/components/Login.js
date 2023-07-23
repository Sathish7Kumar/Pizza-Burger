import React, { useState } from 'react';
import './Login.css';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (email === "admin@gmail.com" && password === "admin") {
              onLogin();
            } else {
              setError("Invalid username or password*");
            }
  };

 
  return (
    <>
    <div className="login-container">
      <div className="login-card">
        {/* <h2 className="login-title">Login</h2> */}
        <div className="form-group">
          <label className='label' htmlFor="email">E-Mail</label>
          <input className='input'
            id="email"
            type="email"
            placeholder="Enter your Email-id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className='label' htmlFor="password">Password</label>
          <input
            className='input'
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="login-btn" onClick={handleLogin}>
          Login
        </button>
        {error && <p className="error-message">{error}</p>}
        <div className='credentials'>
        <p className='credentials-p'>This App is Under Construction</p>
        <p className='credentials-p'>Use This Credentials to Experience this UI</p>
        <p className='credentials-p'>E-Mail ID : admin@gmail.com</p>
        <p className='credentials-p'>Password : admin</p>
      </div>
      </div>
    </div>
    </>
  );
};

export default Login;
