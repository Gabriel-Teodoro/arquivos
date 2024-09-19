import { useState } from 'react'

//components
import  FirstComponent  from './components/FirstComponent.jsx'
import TemplateExpressions from './components/TemplateExpressions.jsx'
import MyComponent from './components/MyComponent.jsx'
import Events from './components/Events.jsx'
import Challenge from './components/Challenge.jsx'

//style
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Fundamentos React</h1>
        <FirstComponent />
        <TemplateExpressions />
        <MyComponent />
        <Events />
        <Challenge />
      </div>
    </>
  )
}

export default App
