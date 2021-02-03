import React from 'react';

const Fecha = ({ date }) => {
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    let fechaParceada = new Intl.DateTimeFormat("es-AR", options).format(date);

    return <p>{fechaParceada}</p>;
}

export { Fecha }