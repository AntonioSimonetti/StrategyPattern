import './paymentImage.css'; 
import imageCreditCard from "../assets/creditCardImg.png"
import imagePayPal from "../assets/payPalImg.png"

export default function PaymentImage({ value }) {
    let imageToShow;
  
    if (value === 'CreditCard') {
      imageToShow = <img  src={imageCreditCard} alt="Payment 1" />;
    }  else {
      imageToShow =  <img  src={imagePayPal} alt="Payment 2" />;
    }
  
    return <div className="image-div">{imageToShow}</div>;
  }