//Funcionamento do contador 
//Nao estou conseguindo :
//- Renderizar o respondidas.length
export default function Contador(){
    return(  
        <div class="contador">
            <div class="icones">
            <ion-icon class={iconeColor} name={iconeType}></ion-icon>          
            </div>
            <h3>{respondidas.length}/8</h3>
            </div>
    )
    }