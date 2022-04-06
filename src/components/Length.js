import React from 'react'
import {LengthName,Lengths} from './Data'
import { useState } from 'react'
import './Length.css'
import { BiRightArrowAlt } from "react-icons/bi";

const Length = () => {
    const [isFromLength, setIsFromLength]=useState()  // input option
    const [isToLength, setIsToLength]=useState() // output option
    const [output, setOutput]=useState('') 

    // options
    let length_name= Object.keys(LengthName[0]) 
    
    // calculate
    let obj_keys=[] // ['Meter', 'Centimetre',...]
    let obj_keys_keys=[] // ['Meter', 'Centimetre', 'Milimitre', 'Kilometre', 'Inche', 'Feet', 'Yards', 'Miles']
    let values=[]

    for(let i=0; i<Lengths.length;i++){
        obj_keys.push(Object.keys(Lengths[i]).join())
        obj_keys_keys.push(Object.keys(Lengths[i])[0])
        values.push(Object.values(Object.values(Lengths[i])[0]).join().split(','))
    }

    function convertLength(e){
        let input=Number(e.target.value)

        // calculate
        let a;
        let b;
        for(let i=0;i<obj_keys.length;i++){
            if(isFromLength==obj_keys[i]) a=i
        }
        for(let j=0;j<obj_keys.length;j++){
            if(isToLength==obj_keys_keys[j]) b=j
        }
        if(isFromLength==obj_keys[a]){ 
            if(isToLength==obj_keys_keys[b]) setOutput(input*values[a][b])
        }
    }

    return (
        <div className='container'>
            <div className='length'>
               <div style={{textAlign:'center'}}><h3>Length Converter</h3></div> 
                <div className='length-wrapper'>
                    {/* #1 input  */}
                    <div className="select-container">
                        <select className='selection'  onChange={e=>setIsFromLength(e.target.value)} >
                            {length_name.map((option) => (
                            <option value={option}>{option}</option>
                            ))}
                        </select>
                        <input type="number" onChange={convertLength} placeholder='Input'/>
                    </div>

                    <div><BiRightArrowAlt /></div>
                    {/* #2 output  */}
                    <div className="select-container">
                        <select className='selection' onChange={e=>setIsToLength(e.target.value)} >
                            {length_name.map((option) => (
                            <option value={option} key={option}>{option}</option>
                            ))}
                        </select>
                        <input type="text" value={output}  placeholder='Output' readOnly/>
                    </div>
                </div>
            </div>
      </div>
    )
}

export default Length
