import React from "react";

const Challenge = () => {
    const valor1 = 3;
    const valor2 = 5;
    return (
        <div>
            <h2>Os valores para soma são:</h2>
            <h3>{valor1} + {valor2}</h3>
            <button onClick={() => console.log(valor1 + valor2)}>Somar!</button>
        </div>
    );
};

export default Challenge;