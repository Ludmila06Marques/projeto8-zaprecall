import React from "react"

export default function TelaInicial(){

    const [iniciar , setIniciar]= React.useState("tela1")
    
    function Start(){
        setIniciar("tela1 escondido")

    }

    return(

        <>
         <div class={iniciar}>
        <img src="./img/logo.png" alt="logo"/>
        <h1>ZapRecall</h1>
        <button onClick={Start}>Iniciar Recall!</button>
      </div>
        </>
    )

}