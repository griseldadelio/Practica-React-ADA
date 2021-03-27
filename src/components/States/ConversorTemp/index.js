import React, { useState } from 'react';

export const ConversorTemp = () => {

    const [celsius, setCelsius] = useState('')
    const [fahrenheit, setFahrenheit] = useState('');

    const handleCelsius = (e) => {
        let celPars = parseInt(e.target.value)
        if (e.target.name === "celsius") {
            setCelsius(e.target.value)
            setFahrenheit((1.8 * celPars) + 32)
        }
    }

    const handleFarenheit = (e) => {
        let farePars = parseInt(e.target.value)
        if (e.target.name === "fahrenheit") {
            setFahrenheit(e.target.value)
            setCelsius((5 / 9) * (farePars - 32))
        }
    }

    return (
        <div>
            <form>
                <div className="form-group">
                    <h4>Conversor</h4>
                    <input type="number" placeholder="Celsius" name="celsius" value={celsius} onChange={handleCelsius} />
                    <span> = </span>
                    <input type="number" placeholder="Fahrenheit " name="fahrenheit" value={fahrenheit} onChange={handleFarenheit} />
                </div>
            </form>
        </div>
    );
}
