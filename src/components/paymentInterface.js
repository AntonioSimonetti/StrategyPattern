class PaymentInterface {
    constructor() {
        this.name = "NoName"
        this.className = 'PaymentInterface'; 
    }

    preProcessPayment() {
      //Mock logica comune a tutti i metodi di pagamento che non sarà sovrascritta
      console.log(`Pagamento da eseguire via ${this.name}, attendere`);
      setTimeout(()=>{
        console.log("....")
      }, 1000)
  

    }
    
    processPayment() {
      console.log("Questo metodo deve essere sovrascritto");
    }
  }
  
export default PaymentInterface;