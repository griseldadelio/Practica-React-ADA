import React, { useState } from "react";

export const Contador = () => {
    const [count, setCount] = useState(5);

    const More = () => {
        setCount(count + 1);
    }

    const Less = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    return (
        <div>
            <h1> Count: {count} </h1>
            <button onClick={More}> Agregar </button>
            <button onClick={Less}> Descontar </button>
        </div>
    );
};
