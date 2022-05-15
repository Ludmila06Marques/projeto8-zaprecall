export default function Parabens({respondidas}){
    return(
        <div className="parabens">
         
            <div className="texto">
           
                <h1>😀 Parabéns!
                </h1>
                <h2>Você não esqueceu de <br/> nenhum flashcard!</h2>
                <h3>{respondidas.length}/8</h3>
            </div>          
                <div className="icone">
                </div>
           
        </div>
    )
}