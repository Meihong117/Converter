import React from 'react'
import {Data1, Data2} from './LengthData'
import { useState } from 'react'

const Length = () => {
    const [data, SetData]=useState(null)
    const [print, SetPrint]=useState(false)

    return (
        <div id="App">
            <div className="select-container">
                <select>
                    {Data1.map((option) => (
                    <option value={option.value}>{option.label}</option>
                    ))}
                </select>
                <input type="number" />
            </div>
            
            <div className="select-container">
                <select>
                    {Data2.map((option) => (
                    <option value={option.value}>{option.label}</option>
                    ))}
                </select>
                <input type="number" />
            </div>
            {/* button */}
            <button  >Convert</button>
      </div>
    )
}

export default Length
