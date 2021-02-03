import React, { useState } from 'react';

export const PrenderLuz = () => {
    const [luzPrendida, setluzPrendida] = useState(false)

    const handleClick = () => {
        setluzPrendida(!luzPrendida)
    }
    return (
        <div clase={luzPrendida}>
            <button onClick={handleClick}>{!luzPrendida ? "Prender la luz" : "Apagar la luz"}</button>
        </div>
    );
}
