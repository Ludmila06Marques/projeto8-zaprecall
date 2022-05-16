//Montar a estrutura da tela 2 ; 
//Nao estou conseguindo :
// -Fazer o indice ficar organizado apos embaralhar
// - Importar os componentes da pasta Footer

import Pergunta from "./Pergunta"
import Contador from "../Footer/Contador"
import Resultado from "../Footer/Resultado"

export default function Tela2({array , iconeColor , iconeType }){
   //array das perguntas
    const question= [
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
      ]
      const perguntas = question.map((item , index)=> <Pergunta key={index} index={index} pergunta={item.pergunta} resposta={item.resposta} />)

  //Funcao para embaralhar
      function randomize () {
        return Math.random() - 0.5;
    }
    //Embaralhando
    perguntas.sort(randomize)
    //Reiniciar o jogo
    function reiniciar(){
        window.location.reload();
    }


return(
    <>
     <div  className="tela2 ">
            <div className="cima">
            <img src="./img/logo-pequeno.png" alt="logo-pequeno"/>
            <h1>ZapRecall</h1>
            </div>
      <div className="perguntas">
           {perguntas} 
      </div>
   <Contador iconeType={iconeType} iconeColor={iconeColor}/>
    {/*Logica para caso as 8 perguntas tenham sido respondidas aparecer a mensagem de parabens ou de falha*/}
     {/* {array.length !==8 
     ? 
      <Contador/>
    : 
        {array.includes("red"== true)
        ? 
        <Resultado>
              <div class="caixa">
                        <div className="texto">
                                <h1> 😢Putz...</h1>
                                <h2> Ainda faltam alguns...<br/> Mas não desanime!</h2>
                                <h3>{respondidas.length}/8</h3>
                        </div> 

                <div className="icone">
                ICONES DAS RESPOSTAS
                </div>
                
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

                    <div className="icone">
                    ICONES DAS RESPOSTAS
                    </div>
                    
                    <button onClick={()=>reiniciar()} class="reiniciar"> 
                    REINICIAR RECALL
                    </button>
             </div>
        </Resultado>
        }*/}
  

     </div>
    </>
)
}
