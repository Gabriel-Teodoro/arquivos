import { useState } from 'react'

//components
import  FirstComponent  from './components/FirstComponent.jsx'
import TemplateExpressions from './components/TemplateExpressions.jsx'

//style
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Fundamentos React</h1>
        <FirstComponent />
        <TemplateExpressions></TemplateExpressions>
      </div>
    </>
  )
}

export default App
