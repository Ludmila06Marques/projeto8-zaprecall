import React from "react";
import Tela1 from "./Telas/Tela1";
import Tela2 from "./Telas/Tela2";



export default function App(){

   
    const [comeco , setComeco ]= React.useState('init');

    return(
        <>
     { comeco ==='init' ?  <Tela1 /> :
     
          <Tela2/>  }
    
     
        
       
        </>
    );
}