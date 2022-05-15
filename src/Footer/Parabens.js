export default function Parabens({respondidas}){
    return(
        <div class="parabens">
         
            <div class="texto">
           
                <h1>😀 Parabéns!
                </h1>
                <h2>Você não esqueceu de <br/> nenhum flashcard!</h2>
                <h3>{respondidas.length}/8</h3>
            </div>          
                <div class="icone">
                </div>
           
        </div>
    )
}