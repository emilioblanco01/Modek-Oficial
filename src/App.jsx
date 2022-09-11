import { useState } from 'react'
import Modek from './assets/LogoModek.jpeg';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <img src={Modek} style={{width: "50%", height: "50%"}}/>
      Nueva Pagina Modek ProximamenteXXXXXXXXXXXXXXXX
    </div>
  )
}

export default App
