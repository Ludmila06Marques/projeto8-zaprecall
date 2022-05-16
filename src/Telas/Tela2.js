

import {useEffect , useState} from 'react'
import Pergunta from "./Pergunta"
import Contador from "../Footer/Contador"
import Resultado from "../Footer/Resultado"

export default function Tela2({ iconeColor , iconeType  } ){
    const [respondidas , setRespondidas]=useState([])
    const [question , setQuestion]=useState([
        {  
        pergunta:"O que é JSX? ",
        resposta:"Uma extensão de linguagem do JavaScript"}
        ,
        {  
        pergunta:" React é __ ?",
        resposta:"uma biblioteca JavaScript para construção de interfaces"}
        ,
        {  
        pergunta:"Componentes devem iniciar com __?",
        resposta:"Letra maiúscula"}
        ,
        {  
        pergunta:"Podemos colocar __ dentro do JSX",
        resposta:"expressões"},
        {  
        pergunta:"O ReactDOM nos ajuda __ ",
        resposta:"interagindo com a DOM para colocar componentes React na mesma"},
        {  
        pergunta:"Usamos o npm para __ ",
        resposta:"gerenciar os pacotes necessários e suas dependências"}
        , {  
        pergunta:"Usamos props para __",
        resposta:"passar diferentes informações para componentes "},
        {  
        pergunta:"Usamos estado (state) para __ ",
        resposta:"dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"}
      ])
    //Embaralhando
   useEffect(()=>{
question.sort(randomize)
   },[])
      

  //Funcao para embaralhar
      function randomize () {
        return Math.random() - 0.5;
    }
  
   
    //Reiniciar o jogo
    function reiniciar(){
        window.location.reload();
        window.scroll(40, 0)
    }


return(
    <>
     <div  className="tela2 ">
            <div className="cima">
            <img src="./img/logo-pequeno.png" alt="logo-pequeno"/>
            <h1>ZapRecall</h1>
            </div>
      <div className="perguntas">
           {
               question.map((item , index)=> <Pergunta key={index} index={index} pergunta={item.pergunta} resposta={item.resposta} setRespondidas={setRespondidas} respondidas={respondidas} />)
           } 
      </div>
     
    {/*Logica para caso as 8 perguntas tenham sido respondidas aparecer a mensagem de parabens ou de falha*/}
    {respondidas.length !==8
    ?
    <Contador iconeColor={iconeColor} iconeType={iconeType} respondidas={respondidas}/>
    :
    respondidas.includes("red")
    ?
    <Resultado>
              <div class="caixa">
                        <div className="texto">
                                <h1> 😢Putz...</h1>
                                <h2> Ainda faltam alguns...<br/> Mas não desanime!</h2>
                                <h3>{respondidas.length}/8</h3>
                        </div> 

               {/* NAO DEU TEMPO DE FAZER<div className="icone">
                ICONES DAS RESPOSTAS
                  </div>*/} 
                
                <button onClick={()=>reiniciar()} class="reiniciar"> 
                    REINICIAR RECALL
                </button>
              </div>
        </Resultado>
        :
        <Resultado>
        <div class="caixa">
                <div className="texto"> 
                            <h1>😀 Parabéns!</h1>
                            <h2>Você não esqueceu de <br/> nenhum flashcard!</h2>
                            <h3>{respondidas.length}/8</h3>
                 </div>    

          {/* NAO DEU TEMPO DE FAZER<div className="icone">
                ICONES DAS RESPOSTAS
                  </div>*/} 
            
            <button onClick={()=>reiniciar()} class="reiniciar"> 
            REINICIAR RECALL
            </button>
     </div>
</Resultado>

    
    }

     </div>
    </>
)
}