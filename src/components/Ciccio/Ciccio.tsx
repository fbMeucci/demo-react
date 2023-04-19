import './Ciccio.css'
import { useState } from 'react'

interface PropsType {
    valore: number,
    nome : string,
    aggiorna: Function
    contatore: number
}

function Ciccio({valore, nome, aggiorna, contatore}: PropsType){
    
    const cliccato = () =>{
        aggiorna(contatore + 1)
    }
    return(
        <div style={{border: "1px solid red"}}>
            <h1>Hello {nome}</h1>
            <h2>Il bottone del padre vale {valore}</h2>
            <button onClick={() => { cliccato() } }> Bottone Ciccio {contatore} </button>
        </div>
    )
}

export default Ciccio