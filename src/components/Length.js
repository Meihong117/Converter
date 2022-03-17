import React from 'react'
import {Data} from './LengthData'
import { useState,useEffect } from 'react'
import './Length.css'
import { FaExchangeAlt } from "react-icons/fa";


const Length = () => {
    const [isFromLength, setIsFromLength]=useState()  // every select value
    const [isToLength, setIsToLength]=useState() //
    // const [input, setInput]=useState() 
    const [output, setOutput]=useState() 

    let name= Object.keys(Data[0]) 

    function convertLength(e){
        let input=Number(e.target.value)
        if(isFromLength=="Meter" && isToLength=="Meter") setOutput(input)
        if(isFromLength=="Meter" && isToLength=="Milimitre") setOutput(input*1000)
        if(isFromLength=="Meter" && isToLength=="Centimetre") setOutput(input*100)
        if(isFromLength=="Meter" && isToLength=="Kilometre") setOutput(input*0.001)
        if(isFromLength=="Meter" && isToLength=="Inche") setOutput(input*39.3701)
        if(isFromLength=="Meter" && isToLength=="Feet") setOutput(input*3.28084)
        if(isFromLength=="Meter" && isToLength=="Yards") setOutput(input*1.09361)
        if(isFromLength=="Meter" && isToLength=="Miles") setOutput(input*0.000621371)

        if(isFromLength=="Milimitre" && isToLength=="Milimitre") setOutput(input)
        if(isFromLength=="Milimitre" && isToLength=="Meter") setOutput(input*0.001)
        if(isFromLength=="Milimitre" && isToLength=="Centimetre") setOutput(input*0.1)
        if(isFromLength=="Milimitre" && isToLength=="Kilometre") setOutput(input*0.0000001)
        if(isFromLength=="Milimitre" && isToLength=="Inche") setOutput(input*0.0393701)
        if(isFromLength=="Milimitre" && isToLength=="Feet") setOutput(input*0.00328084)
        if(isFromLength=="Milimitre" && isToLength=="Yards") setOutput(input*0.00109361)
        if(isFromLength=="Milimitre" && isToLength=="Miles") setOutput(input*6.2137e-7)

        if(isFromLength=="Centimetre" && isToLength=="Centimetre") setOutput(input)
        if(isFromLength=="Centimetre" && isToLength=="Meter") setOutput(input*0.01)
        if(isFromLength=="Centimetre" && isToLength=="Milimitre") setOutput(input*10)
        if(isFromLength=="Centimetre" && isToLength=="Kilometre") setOutput(input*1e-5)
        if(isFromLength=="Centimetre" && isToLength=="Inche") setOutput(input*0.393701)
        if(isFromLength=="Centimetre" && isToLength=="Feet") setOutput(input*0.0328084)
        if(isFromLength=="Centimetre" && isToLength=="Yards") setOutput(input*0.0109361)
        if(isFromLength=="Centimetre" && isToLength=="Miles") setOutput(input*6.2137e-6)

        if(isFromLength=="Kilometre" && isToLength=="Kilometre") setOutput(input)
        if(isFromLength=="Kilometre" && isToLength=="Meter") setOutput(input*1000)
        if(isFromLength=="Kilometre" && isToLength=="Centimetre") setOutput(input*100000)
        if(isFromLength=="Kilometre" && isToLength=="Milimitre") setOutput(input*1000000)
        if(isFromLength=="Kilometre" && isToLength=="Inche") setOutput(input*39370.1)
        if(isFromLength=="Kilometre" && isToLength=="Feet") setOutput(input*3280.84)
        if(isFromLength=="Kilometre" && isToLength=="Yards") setOutput(input*1093.61)
        if(isFromLength=="Kilometre" && isToLength=="Miles") setOutput(input*0.621371)


        if(isFromLength=="Inche" && isToLength=="Kilometre") setOutput(input*2.54e-5)
        if(isFromLength=="Inche" && isToLength=="Meter") setOutput(input*0.0254)
        if(isFromLength=="Inche" && isToLength=="Centimetre") setOutput(input*2.54)
        if(isFromLength=="Inche" && isToLength=="Milimitre") setOutput(input*25.4)
        if(isFromLength=="Inche" && isToLength=="Inche") setOutput(input)
        if(isFromLength=="Inche" && isToLength=="Feet") setOutput(input*0.0833)
        if(isFromLength=="Inche" && isToLength=="Yards") setOutput(input*0.0277)
        if(isFromLength=="Inche" && isToLength=="Miles") setOutput(input*1.5783e-5)
      
        if(isFromLength=="Feet" && isToLength=="Kilometre") setOutput(input*0.0003048)
        if(isFromLength=="Feet" && isToLength=="Meter") setOutput(input*0.3048)
        if(isFromLength=="Feet" && isToLength=="Centimetre") setOutput(input*30.48)
        if(isFromLength=="Feet" && isToLength=="Milimitre") setOutput(input*304.8)
        if(isFromLength=="Feet" && isToLength=="Inche") setOutput(input*12)
        if(isFromLength=="Feet" && isToLength=="Feet") setOutput(input)
        if(isFromLength=="Feet" && isToLength=="Yards") setOutput(input*0.333)
        if(isFromLength=="Feet" && isToLength=="Miles") setOutput(input*0.000189394)
        
        if(isFromLength=="Yards" && isToLength=="Kilometre") setOutput(input*0.0009144)
        if(isFromLength=="Yards" && isToLength=="Meter") setOutput(input*0.9144)
        if(isFromLength=="Yards" && isToLength=="Centimetre") setOutput(input*91.44)
        if(isFromLength=="Yards" && isToLength=="Milimitre") setOutput(input*914.4)
        if(isFromLength=="Yards" && isToLength=="Inche") setOutput(input*36)
        if(isFromLength=="Yards" && isToLength=="Feet") setOutput(input*3)
        if(isFromLength=="Yards" && isToLength=="Yards") setOutput(input)
        if(isFromLength=="Yards" && isToLength=="Miles") setOutput(input*0.000568182)
        
        if(isFromLength=="Miles" && isToLength=="Kilometre") setOutput(input*1.60934)
        if(isFromLength=="Miles" && isToLength=="Meter") setOutput(input*1609.34)
        if(isFromLength=="Miles" && isToLength=="Centimetre") setOutput(input*160934)
        if(isFromLength=="Miles" && isToLength=="Milimitre") setOutput(input*1609340)
        if(isFromLength=="Miles" && isToLength=="Inche") setOutput(input*63360)
        if(isFromLength=="Miles" && isToLength=="Feet") setOutput(input*5280)
        if(isFromLength=="Miles" && isToLength=="Yards") setOutput(input*1760)
        if(isFromLength=="Miles" && isToLength=="Miles") setOutput(input)
    }

    return (
        <div className='container'>
            <div className='length'>
                <div className='length-wrapper'>
                    {/* #1 */}
                    <div className="select-container">
                        <select className='selection'  onChange={e=>setIsFromLength(e.target.value)} >
                            {name.map((option) => (
                            <option value={option}>{option}</option>
                            ))}
                        </select>
                        <input type="number" onChange={convertLength} placeholder='Input'/>
                    </div>

                    <div><FaExchangeAlt /></div>
                    {/* #2 */}
                    <div className="select-container">
                        <select className='selection'  onChange={e=>setIsToLength(e.target.value)} >
                            {name.map((option) => (
                            <option value={option} >{option}</option>
                            ))}
                        </select>
                        <input type="text" value={output}  placeholder='Output' />
                    </div>
                    {/* <button onClick={reset} type="submit">Reset</button> */}
                </div>
            </div>
      </div>
    )
}

export default Length
