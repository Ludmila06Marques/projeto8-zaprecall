import { BrowserRouter , Routes , Route } from "react-router-dom";
import React from "react";
import Tela1 from "./Telas/Tela1";
import Tela2 from "./Telas/Tela2";



export default function App(){
    return(
        <>
        <BrowserRouter>
    
        <Routes>
       
           <Route path="/" element={  <Tela1 /> }>
           </Route> 
            <Route path="/tela2" element={ <Tela2/> }>
           
            </Route>      
         
        </Routes>
         
          </BrowserRouter> 
        </>
    );
}