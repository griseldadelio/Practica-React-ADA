import React, { useState } from "react";

export const Calculator = () => {

    const [suma, setSuma] = useState(0);
    const [gastos, setGastos] = useState([]);
    const [lista, setLista] = useState([]);

    const updateGastos = (producto, cantidad) => {
        setSuma(suma + cantidad)
        setGastos([(cantidad), ...gastos])
        setLista([`${producto} $${cantidad}`, ...lista])
    }

    return (
        <div>

            <div style={{ display: "flex" }}>
                <button className='btn btn-warning me-2' onClick={() => updateGastos("caramelos", 10)}>Caramelos= $10</button>
                <button className='btn btn-success me-2' onClick={() => updateGastos("chocolates", 50)}>Chocolates= $50</button>
                <button className='btn btn-primary' onClick={() => updateGastos("alfajores", 20)}>Alfajores= $20</button>
            </div >
            <ul className='mt-2'>
                {lista.map((item, index) => (<li key={index}>{item}</li>))}
                <li>
                    Total = ${suma}
                </li>
            </ul>
        </div>
    );
};
