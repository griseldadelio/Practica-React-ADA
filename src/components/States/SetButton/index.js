import React from 'react';

export const SetButton = ({ handleClick, lightOn }) => {

    return (
        <div>
            <button onClick={handleClick}>{lightOn ? "Apagar la luz" : "Prender la luz"}</button>
        </div>
    );

}
