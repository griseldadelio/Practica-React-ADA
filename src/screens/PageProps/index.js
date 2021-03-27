import React from 'react'
import { Fecha, Alert, Paginado, Puntaje } from '../../components'
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export const PageProps = () => {

    return (
        <>
            <Header />
            <div className='container'>
                <h1 className="text-primary mt-4">Estos ejercicios son de Props</h1>
                <div className="mb-5">
                    <Fecha date={Date.now()} />
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
            </div>
            <Footer />
        </>
    )
}



