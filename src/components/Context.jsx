import React from 'react';
import PayPalStrategy from './paypalStrategy';
import CreditCardStrategy from './creditCardStrategy';
import './Context.css';

const Context = ({ paymentMethod, onStrategyChange }) => {
  

  const handlePay = () => {

    let selectedStrategy = null;

    if (paymentMethod === 'Paypal') {
      selectedStrategy = new PayPalStrategy();
    } else if (paymentMethod === 'CreditCard') {
      selectedStrategy = new CreditCardStrategy();
    } else {
      console.error('Metodo di pagamento non valido');
    }

    if (selectedStrategy) {
      selectedStrategy.processPayment();
      onStrategyChange(selectedStrategy) 
    }
    
  };

  return (
    <div className='btnDiv'>
      <button className="purchase-btn" onClick={handlePay}>Purchase</button>
    </div>
  );
};

export default Context;