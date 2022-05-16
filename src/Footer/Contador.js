

export default function Contador({iconeColor , iconeType ,respondidas }){
    return( 
        <div className="contador">
            <div className="icones">
            <ion-icon className={iconeColor} name={iconeType}></ion-icon>          
            </div>
            <h3>{respondidas.length}/8</h3>
            </div>
    )
}
