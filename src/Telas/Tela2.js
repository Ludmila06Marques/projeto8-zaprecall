import React from "react"

export default function Tela2(props){
const [iniciar , setIniciar]=React.useState("tela2 escondido")
    function Start(){
        setIniciar("tela2")
    }
  
return(
    <>
     <div onLoad={Start} class={iniciar}>
       <div class="cima">
       <img src="./img/logo-pequeno.png" alt="logo-pequeno"/>
       <h1>ZapRecall</h1>
      </div>
      <div class="perguntas">
       <div class="pergunta"><h3>Pergunta 1</h3><ion-icon class="icone" name="play-outline"></ion-icon></div>
       <div class="pergunta"><h3>Pergunta 1</h3><ion-icon class="icone" name="play-outline"></ion-icon></div>
       <div class="pergunta"><h3>Pergunta 1</h3><ion-icon class="icone" name="play-outline"></ion-icon></div>
       <div class="pergunta"><h3>Pergunta 1</h3><ion-icon class="icone" name="play-outline"></ion-icon></div>
       <div class="pergunta"><h3>Pergunta 1</h3><ion-icon class="icone" name="play-outline"></ion-icon></div>
       <div class="pergunta"><h3>Pergunta 1</h3><ion-icon class="icone" name="play-outline"></ion-icon></div>
       <div class="pergunta"><h3>Pergunta 1</h3><ion-icon class="icone" name="play-outline"></ion-icon></div>
       <div class="pergunta"><h3>Pergunta 1</h3><ion-icon class="icone" name="play-outline"></ion-icon></div>
      </div>
     </div>
    </>
)
}