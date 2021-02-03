import React, { useState } from 'react';
import { Precio, Fecha, Paginado, Puntaje, Alert, ListaStock, PrenderLuz } from './components';

const App = () => {
  const [valor, setValor] = useState(0);
  const [moneda, setMoneda] = useState('$');

  return (
    <>
      <div className="mb-5">
        <Fecha date={Date.now()} />
        <Precio mon={moneda} val={valor} />
        <form className="input-group">
          <input className="form-control" onChange={(e) => setMoneda(e.target.value)} name="moneda" value={moneda} type="text" />
          <input className="form-control" onChange={(e) => setValor(e.target.value)} name="valor" value={valor} type="number" />
        </form>
        <Paginado actual={1} max={10} />
      </div>
      <div>
        <Puntaje puntaje={5} icono="corazon" color="rojo" />
        <Puntaje puntaje={3} icono="estrella" color="amarillo" />
        <Puntaje puntaje={0} icono="corazon" color="verde" />
        <Puntaje puntaje={1} icono="estrella" />
        <Puntaje puntaje={2} icono="estrella" />
      </div>
      <div className='mt-4'>
        <Alert status="danger" mensaje="Peligro!!!" />
        <Alert status="success" mensaje="Éxito absoluto" />
        <Alert status="warning" mensaje="Precaución!!" />
        <Alert status="info" mensaje="Esto es un mensaje informativo" />
      </div>
      <ListaStock />
      <PrenderLuz />
    </>
  );
}

export default App;

