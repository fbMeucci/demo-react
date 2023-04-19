import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Ciccio from "./components/Ciccio/Ciccio"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [contatoreCiccio, setContatoreCiccio] = useState(0)

  return (
    <div className="App">
      <Ciccio valore={count} nome="Claudio" aggiorna={setContatoreCiccio} contatore={contatoreCiccio}/>
      <br />
      <Ciccio valore={count} nome="Francesco" aggiorna={setContatoreCiccio} contatore={contatoreCiccio}/>


      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Bottone padre {count}
        </button>
      </div>
      <h2>
        il valore del contatore in Ciccio è {contatoreCiccio}
      </h2>



    </div>
  )
}

export default App
