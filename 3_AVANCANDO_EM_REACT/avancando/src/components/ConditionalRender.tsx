import { useState } from "react"

const ConditionalRender = () => {

    const [x] = useState(false);
    const [name] = useState("Gabriel");
    return (
        <div>
            <h1>ConditionalRender</h1>
            <h2>O que será exibido?</h2>
            {x && <p>X é verdadeiro</p>}
            {!x && <p>X é false</p>}
            <h2>If Ternario</h2>
            {name === "Gabriel" ?(
                <p>O nome é Gabriel</p>
            ):(
                <p>O nome não é Gabriel</p>
            )}
        </div>
    )
}

export default ConditionalRender