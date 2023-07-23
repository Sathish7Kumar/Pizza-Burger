import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PaymentPage.css';


const PaymentPage = ({calculateTotal}) => {
  const navigate = useNavigate()  
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [cvv, setCvv] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'cardNumber') {
      setCardNumber(value);
    } else if (name === 'cardName') {
      setCardName(value);
    } else if (name === 'expiryMonth') {
      setExpiryMonth(value);
    } else if (name === 'expiryYear') {
      setExpiryYear(value);
    } else if (name === 'cvv') {
      setCvv(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Card Number:', cardNumber);
    console.log('Cardholder Name:', cardName);
    console.log('Expiry Month:', expiryMonth);
    console.log('Expiry Year:', expiryYear);
    console.log('CVV:', cvv);

    setCardNumber('');
    setCardName('');
    setExpiryMonth('');
    setExpiryYear('');
    setCvv('');

    navigate('/otp-page')
  };

  return (
    <div className="payment-container">
      <h2>Credit/Debit Card Payment</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Card Number</label>
          <input
            type="text"
            name="cardNumber"
            value={cardNumber}
            onChange={handleInputChange}
            maxLength="16"
            required
          />
        </div>
        <div className="form-group">
          <label>Cardholder Name</label>
          <input
            type="text"
            name="cardName"
            value={cardName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="expiry-group">
          <div className="form-group">
            <label>Expiry Month</label>
            <input
              type="text"
              name="expiryMonth"
              value={expiryMonth}
              onChange={handleInputChange}
              maxLength="2"
              required
            />
          </div>
          <div className="form-group">
            <label>Expiry Year</label>
            <input
              type="text"
              name="expiryYear"
              value={expiryYear}
              onChange={handleInputChange}
              maxLength="4"
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label>CVV</label>
          <input
            type="text"
            name="cvv"
            value={cvv}
            onChange={handleInputChange}
            maxLength="3"
            required
          />
        </div>
        <button className='btn-payment' type="submit"> Pay : $ {calculateTotal()} </button>
      </form>
    </div>
  );
};

export default PaymentPage;
