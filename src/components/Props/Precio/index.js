import React from 'react';

// Props
// Precio
// Crear un componente Precio que tenga los props:
// valor, que toma un número
// moneda, que tome un string con el tipo de moneda (ARS, USD, EUR, etc.)
// y que renderice el precio formateado con el símbolo de la moneda adelante

// Investigar Intl.NumberFormat

const Precio = ({ val, mon }) => {
    return (
        <div>
            <p>{mon} {val}</p>
        </div>
    );
}

export { Precio }