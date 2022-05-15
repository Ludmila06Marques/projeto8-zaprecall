//Montar a estrutura da tela 2 ; 
//Nao estou conseguindo :
// -Fazer o indice ficar organizado apos embaralhar
// - Importar os componentes da pasta Footer

import Pergunta from "./Pergunta"
import Contador from "../Footer/Contador"
import Parabens from "../Footer/Parabens"
import Upz from "../Footer/Upz"

export default function Tela2({respondidas , iconeColor , iconeType }){
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


return(
    <>
     <div  class="tela2 ">
            <div class="cima">
            <img src="./img/logo-pequeno.png" alt="logo-pequeno"/>
            <h1>ZapRecall</h1>
            </div>
      <div class="perguntas">
           {perguntas} 
      </div>
    {/*Logica para caso as 8 perguntas tenham sido respondidas aparecer a mensagem de parabens ou de falha*/}
    {/* {respondidas.length !==8 ?  <Contador respondidas={respondidas} iconeColor={iconeColor} iconeType={iconeType} /> : iconeColor="icone red redondo"? <Upz/> : <Parabens/>}*/}

     </div>
    </>
)
}