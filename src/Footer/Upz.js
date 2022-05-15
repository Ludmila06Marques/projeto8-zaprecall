export default function Parabens({respondidas}){
    return(
        <div class="parabens">
         
            <div class="texto">
           
                <h1> 😢Putz...

                </h1>
                <h2>
                Ainda faltam alguns...<br/>
                Mas não desanime!
                </h2>
                <h3>{respondidas.length}/8</h3>
            </div>          
                <div class="icone">
                </div>
           
        </div>
    )
}