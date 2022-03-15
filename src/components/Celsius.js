import React from 'react'
import { useState } from 'react'
import './Celsius.css';
import { FaExchangeAlt } from "react-icons/fa";

const Home = () => {
    const [temp, updateTemp] = useState({ f: 0, c: 0 })

    const updateC = ev => updateTemp({
        c: ev.target.value,
        f: (+ev.target.value * 9 / 5 + 32).toFixed(2)
    })
    
    const updateF = ev => updateTemp({
        c: ((+ev.target.value - 32) * 5 / 9).toFixed(2),
        f: ev.target.value
    })

    return (
        < >
            <div className="cel-container">
                <div className='cel-wrapper'>
                    <div className="card">
                        <p>Celsius</p>
                        <input
                            className='input-number'
                            type = "number"
                            value = {temp.c}
                            onChange = {updateC} >
                        </input>
                    </div>
                    <FaExchangeAlt />
                    <div className="card">
                        <p>Fahrenheit</p>
                        <input
                            className='input-number'
                            type = "number" 
                            value = {temp.f} 
                            onChange = {updateF}>
                        </input>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
