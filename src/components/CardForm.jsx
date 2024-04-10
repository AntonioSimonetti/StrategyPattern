import React, { useState } from "react";
import './CardForm.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCreditCard, faUser, faCalendarAlt, faLock }  from '@fortawesome/free-solid-svg-icons';


export default function CardForm() {
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolderName, setCardHolderName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handleCardNumberChange = (e) => {
    //solo numeri
    const cleanedValue = e.target.value.replace(/\D/g, '');

    //valid, invalid class
    const isValid = /^[0-9]{16}$/.test(cleanedValue);


    //inserisci un trattino ogni 4 cifre
    let formattedValue = '';
    for (let i = 0; i < cleanedValue.length; i++) {
      if (i > 0 && i % 4 === 0) {
        formattedValue += '-';
      }
      formattedValue += cleanedValue[i];
    }

    setCardNumber(formattedValue);

    e.target.classList.toggle('valid', isValid);
    e.target.classList.toggle('invalid', !isValid);
  };

  const handleCardHolderNameChange = (e) => {

    const isValid = e.target.value.trim().split(' ').filter(word => word.length >= 2).length >= 2;

    setCardHolderName(e.target.value);

    e.target.classList.toggle('valid', isValid);
    e.target.classList.toggle('invalid', !isValid);
  };

  const handleExpiryDateChange = (e) => {
    //solo numeri
    const cleanedValue = e.target.value.replace(/\D/g, '');
  
    //limita la lunghezza della stringa a 6 caratteri
    let formattedValue = cleanedValue.slice(0, 6);
  
    //aggiungi uno slash dopo il secondo carattere
    if (formattedValue.length > 2) {
      formattedValue = formattedValue.slice(0, 2) + '/' + formattedValue.slice(2);
    }

    const isValid = formattedValue.length === 7;
  
    setExpiryDate(formattedValue);

    e.target.classList.toggle('valid', isValid);
    e.target.classList.toggle('invalid', !isValid);
  };

  const handleCvvChange = (e) => {
    //solo numeri
    const cleanedValue = e.target.value.replace(/\D/g, '');

    const isValid = cleanedValue.length === 3;

    setCvv(cleanedValue);

    e.target.classList.toggle('valid', isValid);
    e.target.classList.toggle('invalid', !isValid);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };
  

  return (
    <div className="formDiv">
      <form onSubmit={handleSubmit} >
        <div className="inputDiv">
          <label htmlFor="cardNumber">Card Number:</label>
          <div className="inputWithIcon">
          <FontAwesomeIcon icon={faCreditCard} className="icon"/>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={handleCardNumberChange}
            placeholder="xxxx-xxxx-xxxx-xxxx"
            maxLength="19"
            required
          />
          </div>
        </div>
        <div className="inputDiv">
          <label htmlFor="cardHolderName">Card Holder Name:</label>
          <div className="inputWithIcon">
          <FontAwesomeIcon icon={faUser} className="icon"/>
          <input
            type="text"
            id="cardHolderName"
            value={cardHolderName}
            onChange={handleCardHolderNameChange}
            placeholder="Name Surname"
            required
          />
        </div>
        </div>
      <div className="bottom-div">
          <label htmlFor="expiryDate">Expiration Date:</label>
          <div className="inputWithIcon">
           <FontAwesomeIcon icon={faCalendarAlt} className="icon"/>
           <input
            type="text"
            id="expiryDate"
            value={expiryDate}
            onChange={handleExpiryDateChange}
            placeholder="mm/yyyy"
            required
            />  
            
          </div>
          <label htmlFor="cvv">CVV:</label>
          <div className="inputWithIcon">
          <FontAwesomeIcon icon={faLock} className="icon"/>
          <input
            type="text"
            id="cvv"
            value={cvv}
            onChange={handleCvvChange}
            maxLength="3"
            placeholder="xxx"
            required
          />
          </div>
      </div>
      </form>
    </div>
  );
}