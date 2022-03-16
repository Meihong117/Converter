import React from 'react'
import {Data1} from './LengthData'
import { useState,useEffect } from 'react'
import './Length.css'
import { FaExchangeAlt } from "react-icons/fa";


const Length = () => {
    const [lengthOptions, setLengthOptions]=useState([]) 
    const [isFromLength, setIsFromLength]=useState() 
    const [isToLength, setIsToLength]=useState() 
    const [length, SetLength]=useState(1) 
    const [fromLength, setFromLength]=useState(true) 
    const [rate,setRate]=useState() 

    let toLengths, fromLengths 
    if(fromLength){
        fromLengths=length
        toLengths=length*rate
        
    }else{
        toLengths=length
        fromLengths=length/rate
    }

    let rates= Object.values(Data1.rates)// 1000, 100, 1, 0.001, 39.37, 3.28, 1.09, 0.0006214
    let name= Object.keys(Data1.rates) //'Milimitre', 'Centimetre', 'Metre', 'Kilometre', 'Inche', 'Feet', 'Yards', 'Miles'

    useEffect(() => {
        const first=Object.keys(Data1.rates)[0]
        setLengthOptions([Data1.base, ...name])
        setIsFromLength(Data1.base)
        setIsToLength(first)
        setRate(Data1.rates[first])
    }, [])
    

    useEffect(() => {
        if(isFromLength !=null && isToLength!=null){
            setRate(Data1.rates[isToLength])
        }
          
    }, [isFromLength, isToLength])

    function ConvertFromLength(e){
        SetLength(e.target.value) // value in the input
        setFromLength(true)
    }
    function ConvertToLength(e){
        SetLength(e.target.value) // value in the input
        setFromLength(false)
    }

    return (
        <div className='length-container'>
            <div className='length'>
                <div className='length-wrapper'>
                    <div className="select-container">
                        <select className='selection' value={isFromLength} onChange={e=>setIsFromLength(e.target.value)} >
                            {lengthOptions.map((option) => (
                            <option value={option} >{option}</option>
                            ))}
                        </select>
                        <input type="number" value={fromLengths}  onChange={ConvertFromLength}/>
                    </div>

                    <div><FaExchangeAlt /></div>

                    <div className="select-container">
                        <select className='selection' value={isToLength} onChange={e=>setIsToLength(e.target.value)} >
                            {lengthOptions.map((option) => (
                            <option value={option} >{option}</option>
                            ))}
                        </select>
                        <input type="number" value={toLengths}  onChange={ConvertToLength}/>
                    </div>
                </div>
             
            </div>
      </div>
    )
}

export default Length
