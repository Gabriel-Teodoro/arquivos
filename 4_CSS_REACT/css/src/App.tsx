import './App.css'
import MyComponent from './components/MyComponent'

import { useState } from 'react'
import Title from './components/Title';

function App() {
  const n = 15;
  const [name] = useState("Gabriel")
  const redTitle = true

  return (
    <section>
      <h1>React com css</h1>
      <MyComponent/>
      <p>Este paragrafo é do APP</p>
      <p style={{ color: "blue", padding: "25px", borderTop: "2px solid red"}}>CSS Inline</p>
      <h2 style={n < 10 ? {color: "darkorange"} : {color: "firebrick"}}>CSS Inline dinâmico</h2>
      <h2 style={n > 10 ? {color: "darkorange"} : {color: "firebrick"}}>CSS Inline dinâmico</h2>
      <h2 style={name === "Gabriel" ? {color: "ghostwhite", backgroundColor: "salmon"} : undefined}>CSS Inline dinâmico</h2>
      <h2 className={redTitle ? "red-title" : "title"}>Classe dinâmica</h2>
      <Title/>
    </section>
  )
}

export default App
