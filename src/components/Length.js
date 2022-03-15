import React from 'react'
import {Data1, Data2} from './LengthData'
import { useState } from 'react'
import './Length.css'

const Length = () => {
    const [data, SetData]=useState(null)
    const [print, SetPrint]=useState(false)

    return (
        <div className='length-container'>
            <div className='length'>
                <div className='length-wrapper'>
                    <div className="select-container">
                        <select className='selection'>
                            {Data1.map((option) => (
                            <option value={option.value}>{option.label}</option>
                            ))}
                        </select>
                        <input type="number" />
                    </div>
                    
                    <div className="select-container">
                        <select className='selection'>
                            {Data2.map((option) => (
                            <option value={option.value}>{option.label}</option>
                            ))}
                        </select>
                        <input type="number" />
                    </div>
                </div>
                
                {/* button */}
                <div className='select-container'>
                    <button  className='convert-btn'>Convert</button>
                </div>
            </div>
      </div>
    )
}

export default Length
