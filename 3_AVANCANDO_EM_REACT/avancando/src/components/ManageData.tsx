import { useState } from "react"

const ManageData = () => {
    const [ number, setNumber ] = useState(10);

    return (
        <div>
            <h1>UseState</h1>
            <p>Valor: {number}</p>
            <button onClick={()=> setNumber(15)}>Muda Valor</button>
        </div>
    )
}

export default ManageData