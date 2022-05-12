
import Pergunta from "./Pergunta"

export default function Tela2(){
    const question= [
        {  titulo:"Pergunta 1",
        pergunta:"Essa é minha pergunta?",
        resposta:"Essa é minha resposta"}
        ,
        {  titulo:"Pergunta 1",
        pergunta:"Essa é minha pergunta?",
        resposta:"Essa é minha resposta"}
        ,
        {  titulo:"Pergunta 1",
        pergunta:"Essa é minha pergunta?",
        resposta:"Essa é minha resposta"}
        ,
        {  titulo:"Pergunta 1",
        pergunta:"Essa é minha pergunta?",
        resposta:"Essa é minha resposta"},
        {  titulo:"Pergunta 1",
        pergunta:"Essa é minha pergunta?",
        resposta:"Essa é minha resposta"},
        {  titulo:"Pergunta 1",
        pergunta:"Essa é minha pergunta?",
        resposta:"Essa é minha resposta"}
        , {  titulo:"Pergunta 1",
        pergunta:"Essa é minha pergunta?",
        resposta:"Essa é minha resposta"},
        {  titulo:"Pergunta 1",
        pergunta:"Essa é minha pergunta?",
        resposta:"Essa é minha resposta"}
      ]
      const perguntas = question.map(item=> <Pergunta titulo={item.titulo} pergunta={item.pergunta} resposta={item.resposta} />)
 
return(
    <>
     <div  class="tela2 escondido">
            <div class="cima">
            <img src="./img/logo-pequeno.png" alt="logo-pequeno"/>
            <h1>ZapRecall</h1>
            </div>
      <div class="perguntas">
           {perguntas} 
      </div>
            <div class="contador">
                <h3>0/4 CONCLUIDOS</h3>         
            </div>
     </div>
    </>
)
}