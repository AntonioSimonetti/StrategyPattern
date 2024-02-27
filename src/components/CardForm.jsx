import React, { useState } from "react";
import './CardForm.css';


export default function CardForm() {
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolderName, setCardHolderName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleCardHolderNameChange = (e) => {
    setCardHolderName(e.target.value);
  };

  const handleExpiryDateChange = (e) => {
    setExpiryDate(e.target.value);
  };

  const handleCvvChange = (e) => {
    setCvv(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="formDiv">
      <form onSubmit={handleSubmit}>
        <div className="inputDiv">
          <label htmlFor="cardNumber">Card Number:</label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={handleCardNumberChange}
            required
          />
        </div>
        <div className="inputDiv">
          <label htmlFor="cardHolderName">Card Holder Name:</label>
          <input
            type="text"
            id="cardHolderName"
            value={cardHolderName}
            onChange={handleCardHolderNameChange}
            required
          />
        </div>
        <div className="inputDiv">
          <label htmlFor="expiryDate">Expiration Date:</label>
          <input
            type="text"
            id="expiryDate"
            value={expiryDate}
            onChange={handleExpiryDateChange}
            placeholder="MM/YYYY"
            required
          />
        </div>
        <div className="inputDiv">
          <label htmlFor="cvv">CVV:</label>
          <input
            type="text"
            id="cvv"
            value={cvv}
            onChange={handleCvvChange}
            maxLength="3"
            required
          />
        </div>
      </form>
    </div>
  );
}