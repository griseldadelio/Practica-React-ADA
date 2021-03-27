import React, { useState } from 'react';
import { SetButton, Modal, Precio, ConversorTemp, Calculator, Background, Contador } from '../../components'
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import './style.css'

export const PageStates = () => {
    const [valor, setValor] = useState(0);
    const [moneda, setMoneda] = useState('$');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [luzPrendida, setluzPrendida] = useState(false);


    const handleClickLuzPrendida = () => {
        setluzPrendida(!luzPrendida)
    }

    return (
        <>
            <Header />
            <div className='container'>
                <h1 className="text-primary my-4">Estos ejercicios son de States</h1>
                <div>
                    <Precio mon={moneda} val={valor} />
                    <form className="input-group">
                        <input className="form-control" onChange={(e) => setMoneda(e.target.value)} name="moneda" value={moneda} type="text" />
                        <input className="form-control " onChange={(e) => setValor(e.target.value)} name="valor" value={valor} type="number" />
                    </form>
                </div>
                <div className="my-4">
                    <button type="button" className="btn btn-primary mb-2" data-bs-toggle="modal" onClick={() => setIsModalOpen(true)}>
                        Soy un modal
                </button>
                    <Modal show={isModalOpen} setShow={setIsModalOpen} />
                </div>
                <br />
                <ConversorTemp />
                <br />
                <Calculator />
                <br />
                <SetButton handleClick={handleClickLuzPrendida} lightOn={luzPrendida} />
                <Background on={luzPrendida} />
                <Contador />
            </div>
            <Footer />
        </>
    )
}
