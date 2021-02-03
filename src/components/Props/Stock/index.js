// import './stock.css'

// const productos = [
//     { producto: 'Chocolates', cantidad: 34, maximo: 100 },
//     { producto: 'Caramelos', cantidad: 99, maximo: 200 },
//     { producto: 'Turrones', cantidad: 3, maximo: 50 },
//     { producto: 'Alfajores', cantidad: 25, maximo: 130 },
//     { producto: 'Tortas', cantidad: 9, maximo: 10 },
// ]

// const Stock = ({ producto, cantidad, maximo }) => {
//     let colorCSS = "";

//     //es mejor un switch???
//     if (cantidad < (maximo * 10) / 100) {
//         colorCSS = "rojo";
//     } else if (cantidad > ((maximo * 10) / 100) && cantidad < ((maximo * 25) / 100)) {
//         colorCSS = "naranja";
//     } else if (cantidad > ((maximo * 25) / 100) && cantidad < ((maximo * 40) / 100)) {
//         colorCSS = "amarillo"
//     } else if (cantidad > ((maximo * 40) / 100)) {
//         colorCSS = "verde"
//     }

//     return (<li className={colorCSS}>{producto}</li>)
// }

// const ListaStock = () => {
//     const liElements = productos.map(producto => {
//         <Stock {...producto} />
//         return <ul>{liElements}</ul>
//     })
// }

// export { ListaStock }
import React from 'react'

const productos = [
    { producto: 'Chocolates', cantidad: 34, maximo: 100 },
    { producto: 'Caramelos', cantidad: 99, maximo: 200 },
    { producto: 'Turrones', cantidad: 3, maximo: 50 },
    { producto: 'Alfajores', cantidad: 25, maximo: 130 },
    { producto: 'Tortas', cantidad: 9, maximo: 10 },
]

const Stock = ({ producto, cantidad, maximo }) => {
    let colorCSS = "";

    //es mejor un switch???
    if (cantidad < (maximo * 10) / 100) {
        colorCSS = "rojo";
    } else if (cantidad > ((maximo * 10) / 100) && cantidad < ((maximo * 25) / 100)) {
        colorCSS = "naranja";
    } else if (cantidad > ((maximo * 25) / 100) && cantidad < ((maximo * 40) / 100)) {
        colorCSS = "amarillo"
    } else if (cantidad > ((maximo * 40) / 100)) {
        colorCSS = "verde"
    }

    return React.createElement('li', { className: `${colorCSS}` }, producto);
}

const ListaStock = () => {
    const liElements = productos.map(producto => React.createElement(Stock, producto));
    return React.createElement('ul', null, liElements)
}
export { ListaStock };
