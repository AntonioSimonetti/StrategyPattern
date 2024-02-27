import PaymentInterface from "./paymentInterface";

class CreditCardStrategy extends PaymentInterface {
    constructor() {
        super()
        this.name = "CreditCard"
        this.className = 'creditCard'; 
    }

    processPayment() {
      //Mock pagamento async
      this.preProcessPayment()

      setTimeout(()=>{
        console.log("Pagamento elaborato tramite Carta di Credito");
      }, 2000)
    }
  }
  
  export default CreditCardStrategy;