import React, { useState } from 'react';
import PaymentMenu from "./components/PaymentMenu"
import Farewell from "./components/farewell"
import './App.css'

function App() {
  const [componentToRender, setComponentToRender] = useState(null);

  const handleChangeComponent = (componentName) => {
    setComponentToRender(componentName);
  };


  return (
    <div className='App'>
    {componentToRender !== null ? ( 
      <Farewell onComponent={componentToRender}/>
    ) : (
      <PaymentMenu onStrategyChange={handleChangeComponent}/>
    )}
  </div>
  )
}

export default App
