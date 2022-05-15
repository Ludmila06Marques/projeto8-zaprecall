

export default function Contador({iconeColor , iconeType ,array }){
    return( 
        <div className="contador">
            <div className="icones">
            <ion-icon className={iconeColor} name={iconeType}></ion-icon>          
            </div>
            <h3>{array.length}/8</h3>
            </div>
    )
}
