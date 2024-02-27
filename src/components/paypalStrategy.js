import PaymentInterface from "./paymentInterface";

class PayPalStrategy extends PaymentInterface {
    constructor() {
        super();
        this.name = "PayPal"
        this.className = 'payPal'; 
    }

    processPayment() {
      //Mock pagamento async
      this.preProcessPayment()
      setTimeout(()=>{
        console.log("Pagamento elaborato tramite PayPal");
    }, 2000)
      
    }
}

export default PayPalStrategy;