import './App.css'
import MyForm from './components/MyForm'

function App() {

  return (
    <section>
      <h1>Forms</h1>
      <MyForm user={{ name: "usuario", email: "usuario@gmail.com", bio: "Eu sou um programador", role:"admin"}}/>
    </section>
  )
}

export default App
