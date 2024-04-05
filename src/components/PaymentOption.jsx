import './PaymentOption.css'; // Stile per il componente
import { FaPaypal, FaCreditCard } from 'react-icons/fa'; // Importa le icone di Paypal e CreditCard

export default function PaymentOptions({ handleChange, value }) {

  return (
    <>
    <div className='main-div'>
    <div className='text-div'>
    <h3>Payment Details</h3>
    <h5>Method</h5>
    </div>
    <div className="payment-options">
       <div className={`payment-option ${value === 'CreditCard' ? 'selected' : 'creditcardDiv'}`} onClick={() => handleChange({ target: { value: 'CreditCard' } })}>
         <div className="icon">
           <FaCreditCard className={`icon-option ${value === 'CreditCard' ? 'creditcardIconSelected' : 'creditcardIcon'}`} /> 
         </div>
     </div>
      <div className={`payment-option ${value === 'Paypal' ? 'selected' : 'paypalDiv'}`} onClick={() => handleChange({ target: { value: 'Paypal' } })}>
         <div className="icon">
           <FaPaypal className={`icon-option ${value === 'Paypal' ? 'paypalIconSelected' : 'paypalIcon'}`} />
         </div>
      </div> 
    </div>
    </div>
    </>
  );
}


