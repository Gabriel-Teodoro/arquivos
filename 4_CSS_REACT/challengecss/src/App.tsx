import { useState } from 'react'
import './App.css'
import CarDetails from './components/CarDetails'

function App() {
  const [count, setCount] = useState(0)
  const cars = [
    { id: 1,brand: "Toyota", km: 0, color: "Preto", newCar: true },
    { id: 2,brand: "Honda", km: 15000, color: "Vermelho", newCar: false },
    { id: 3,brand: "Ford", km: 30000, color: "Azul", newCar: false },
  ];

  return (
    <section>
      <h1>Detalhes dos carros</h1>
        {
          cars.map((car)=>(
            <CarDetails key={car.id} brand={car.brand} 
            km={car.km} 
            color={car.color} 
            newCar= {car.newCar}/>
          ))
        }
    </section>
  )
}

export default App
