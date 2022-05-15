import { Link } from 'react-router-dom'
import React from 'react'

export default function Tela1({setClick}){
  
    return(

        <>
         <div class="tela1" >
            <img src="./img/logo.png" alt="logo"/>
            <h1>ZapRecall</h1>
            <Link to="/tela2">
            <button  class="botao-iniciar">Iniciar Recall!</button>
            </Link>  
         </div>
        </>
    )

}