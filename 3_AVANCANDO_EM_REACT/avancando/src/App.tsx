import './App.css'

import City from "./assets/city.jpg"
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'
import Fragments from './components/Fragments'
import Container from './components/Container'
import ExecuteFunction from './components/ExecuteFunction'
import Messages from './components/Messages'
import ChangeMessages from './components/ChangeMessages'
import { useState } from 'react'
import UserDetails from './components/UserDetails'

function App() {
  const car1 = { brand: "Honda", km: 15000, color: "Vermelho", newCar: false};
  const cars = [
    { id: 1,brand: "Toyota", km: 0, color: "Preto", newCar: true },
    { id: 2,brand: "Honda", km: 15000, color: "Vermelho", newCar: false },
    { id: 3,brand: "Ford", km: 30000, color: "Azul", newCar: false },
  ];
  const showMessage = (): void =>{
    console.log("Função Executada");
  }

  const [message, setMessage] = useState<string>("");
  const handleMessage = (msg: string) =>{
    setMessage(msg);
  };

  return (
    <section>
      <div>
        <h1>Avancando em React</h1>
        {/* Imagem em puclic */}
        <div>
          <img src='/img1.jpg' alt="paisagem"/>
        </div>
        {/* Imagem em assets */}
        <div>
          <img src={City} alt='Cidade'/>
        </div>
        <ManageData/>
        <ListRender/>
        <ConditionalRender/>
        <ShowUserName name="Gabriel"/>
        <CarDetails brand="Toyota" km={20000} color="Preto" newCar= {true}/>
        <CarDetails {...car1}/>
        <div><h3>Lista CarDetails</h3></div>
        {
          cars.map((car)=>(
            <CarDetails key={car.id} brand={car.brand} 
            km={car.km} 
            color={car.color} 
            newCar= {car.newCar}/>
          ))
        }
        <Fragments/>
        <div><h1>Children</h1></div>
        <Container myValue="Teste">
          <p>Conteúdo de children</p>
        </Container>

        <ExecuteFunction myFunction={showMessage}/>

        <h1>State Lift</h1>
        <Messages msg={message}/>
        <ChangeMessages handleMessage={handleMessage}/>
        <UserDetails/>
      </div>
    </section>
  )
}

export default App
