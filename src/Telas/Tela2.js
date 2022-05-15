
import Pergunta from "./Pergunta"
import Contador from "./Contador"

export default function Tela2({respondidas , iconeColor , iconeType }){
    const question= [
        {  titulo:"Pergunta 1",
        pergunta:"O que é JSX? ",
        resposta:"Uma extensão de linguagem do JavaScript"}
        ,
        {  titulo:"Pergunta 2",
        pergunta:" React é __ ?",
        resposta:"uma biblioteca JavaScript para construção de interfaces"}
        ,
        {  titulo:"Pergunta 3",
        pergunta:"Componentes devem iniciar com __?",
        resposta:"Letra maiúscula"}
        ,
        {  titulo:"Pergunta 4",
        pergunta:"Podemos colocar __ dentro do JSX",
        resposta:"expressões"},
        {  titulo:"Pergunta 5",
        pergunta:"O ReactDOM nos ajuda __ ",
        resposta:"interagindo com a DOM para colocar componentes React na mesma"},
        {  titulo:"Pergunta 6",
        pergunta:"Usamos o npm para __ ",
        resposta:"gerenciar os pacotes necessários e suas dependências"}
        , {  titulo:"Pergunta 7",
        pergunta:"Usamos props para __",
        resposta:"passar diferentes informações para componentes "},
        {  titulo:"Pergunta 8",
        pergunta:"Usamos estado (state) para __ ",
        resposta:"dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"}
      ]
      const perguntas = question.map(item=> <Pergunta titulo={item.titulo} pergunta={item.pergunta} resposta={item.resposta} />)

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

{/*<Contador/> tem que entrar aquiiiiiiiiiiiii*/}

     </div>
    </>
)
}