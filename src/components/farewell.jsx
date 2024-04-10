import React, { useEffect } from 'react';
import './farewell.css';



export default function Farewell ({onComponent}){

    
  useEffect(() => {
    console.log("strategy:", onComponent);
  }, [onComponent]);


    return(
    <div className='farewell-div'>
        <h5>You paid by {onComponent.name}</h5>
        <h5>Thank you.</h5>
    </div>
    )
}
