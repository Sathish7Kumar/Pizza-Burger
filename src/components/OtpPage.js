import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './OtpPage.css';
import banklogo from './BankLogo.png'
import secure from './Secure.png'


const OtpPage = ({ calculateTotal }) => {
  const navigate = useNavigate();
  const [otp, setOTP] = useState('');

  const handleOTPChange = (e) => {
    setOTP(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('OTP:', otp);

    if (otp.trim() !== '') {
      setOTP('');
      navigate('/order-tracking');
    }
  };

  const cancel = () => {
    navigate('/');
  }

  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1; 
  const day = currentDate.getDate();

  const formattedDate = `${day < 10 ? '0' + day : day} / ${month < 10 ? '0' + month : month} / ${year}`;

  // console.log(formattedDate);

  return (
    <div className="otp-container">
      <h3 style={{textAlign:"center"}}>OTP VERIFICATION</h3>
      <div className='icons' >
        <img src={secure} alt='' height="100px" width="150px" />
        <img src={banklogo} alt='' height="100px" width="100px"/>
      </div>
      <div>
        <p style={{textAlign:"center"}}>The One Time Password (OTP) has been sent to your Registered Mobile Number and E-Mail Id. Please use the OTP and authenticate the transaction</p>
        <h4 style={{textAlign:"center"}}>Merchant Name: Food App</h4>
        <h5 style={{textAlign:"center"}}>Date: {formattedDate} </h5>
        <h3 style={{textAlign:"center"}}>Total Amount: Rs {calculateTotal()}</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Enter OTP</label>
          <input
            type="text"
            name="otp"
            value={otp}
            onChange={handleOTPChange}
            maxLength="6"
            required
          />
        </div>
        <p><span style={{color:"red"}}>*</span> Do not share your OTP with anyone, including bank staff, as they will never ask for it. OTPs are for your personal use only</p>
        <p className='warning-msg'>On Submitting Your OTP, an Amount of Rs: {calculateTotal()} will be Debited from your Account.</p>
        <button className="btn-otp-submit" type="submit">
          Submit OTP
        </button>
        <button className="btn-otp-cancel" onClick={cancel}>
          Cancel
        </button>
        <p><span style={{color:"red"}}>*</span> Cancel Button will redirect you to the Home Page</p>
      </form>
    </div>
  );
};

export default OtpPage;
