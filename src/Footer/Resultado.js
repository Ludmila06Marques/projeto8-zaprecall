export default function Resultado(props){
   
    return(
        <div className="parabens">
        {props.children}
        </div>
    )
    
}
/*                       props.children ERROU
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
*/ 
/*                        props.children SUCESSO
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

*/

