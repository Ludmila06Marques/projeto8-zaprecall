//Funcionamento das cartas

import React from "react"

const arr=[]  
export default function Pergunta(props){
    const [flip , setFlip]= React.useState("backface escondido ")
    const[pergunta , setPergunta]=React.useState("frontface")
    const [resposta , setResposta]=React.useState("awnser escondido")
    const [escolherRed , setEscolherRed]=React.useState("opcao red")
    const [escolherOrange , setEscolherOrange]=React.useState("opcao orange")
    const [escolherGreen , setEscolherGreen]=React.useState("opcao green")
    const [iconeType , setIconeType]=React.useState("play-outline")
    const[iconeColor , setIconeColor]=React.useState("icone")
    const[respondida , setRespondida]=React.useState(0)
    let [respondidas , setRespondidas]=React.useState([])

    function Virar(){   
        if(iconeColor=="icone"){
            setFlip("backface")
            setPergunta("frontface escondido")
        } 
       
    }
    function Resposta(){
        setFlip("backface escondido")
        setResposta("awnser")
    }
        function EscolherRed(){
            setResposta("awnser escondido")
            setPergunta("frontface errou")
            setIconeType("close-circle-outline")
            setIconeColor("icone red redondo")
            setRespondida(1) 
           arr.push(respondida)
           setRespondidas([...arr])  
                 
        }      
        function EscolherGreen(){
            setResposta("awnser escondido")
            setPergunta("frontface acertou")
            setIconeType("checkmark-circle-outline")
            setIconeColor("icone green redondo")
            setRespondida(2)  
            arr.push(respondida)  
            setRespondidas([...arr])   
        }
        function EscolherOrange(){
            setResposta("awnser escondido")
            setPergunta("frontface maisoumenos")
            setIconeType("help-circle-outline")
            setIconeColor("icone orange redondo")
            setRespondida(3)
            arr.push(respondida)  
            setRespondidas([...arr])  
        
        }

      
    return(
        <> 
    
        <div  className="pergunta">
    <div onClick={Virar} className={pergunta}>
    <h3>Pergunta {props.index+1}</h3><ion-icon className={iconeColor} name={iconeType}></ion-icon>
    </div>
    <div className={flip}><h3>{props.pergunta}</h3>
    <img onClick={Resposta} src="./img/setinha.png" alt="setinha"/>
    </div>
<div  className={resposta}><h3>{props.resposta}</h3>
    <div className="opcoes">
    <div onClick={()=>EscolherRed()} className={escolherRed}><h1>Não lembrei</h1></div>
    <div onClick={()=>EscolherOrange()} className={escolherOrange}><h1>Quase não lembrei</h1></div>
    <div onClick={()=>EscolherGreen()} className={escolherGreen}><h1>Zap!</h1></div>
    </div>
</div>
        
       </div> 
</>
)
}