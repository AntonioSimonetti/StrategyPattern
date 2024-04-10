import React, { useState } from 'react';
import CardForm from './CardForm.jsx';
import Context from "./Context.jsx"
import PaymentOption from './PaymentOption.jsx';
import PaymentImage from './paymentImage.jsx';
import './PaymentMenu.css';

export default function PaymentMenu ({onStrategyChange}){
  const [value, setValue] = useState("CreditCard");

 const handleChange = (event) => {
   setValue(event.target.value);
 };


  return (
  
<div className="divDropDownMenu"> 
  <PaymentOption handleChange={handleChange} value={value}/>
  <PaymentImage value={value}/>
  <CardForm />
  <Context paymentMethod={value} onStrategyChange={onStrategyChange}/>
</div> 


  );
};

