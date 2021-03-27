import React from 'react';

export const Modal = ({ show, setShow }) => {

    const toggle = () => {
        setShow(!show)
    }

    return (<>
        {show &&
            <div className="container-fluid border border-primary bg-info">
                <div>
                    <p>¡Hola mundo, desde un modal!</p>
                </div>
                <div className='mb-2 text-center'>
                    <button className="btn btn-secondary btn-sm mx-2" onClick={toggle}>Close</button>
                    <button className="btn btn-primary btn-sm" onClick={toggle}>Save changes</button>
                </div>
            </div>
        }
    </>
    );
}