import React, { useEffect } from 'react';


export default function Farewell ({onComponent}){

    
  useEffect(() => {
    console.log("strategy:", onComponent);
  }, [onComponent]);


    return(
    <div>
        <p>Grazie per aver pagato con {onComponent.name}</p>
    </div>
    )
}
