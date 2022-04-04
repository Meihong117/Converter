import React from 'react'
import { useState } from 'react'
import './Bytes.css'
import {BiSort, BiDownvote} from "react-icons/bi"
import '../App.css'
import {Byte} from './Data'


const Bytes = () => {
     //== convert to right byte-type
     const [terabyte,setTerabyte]=useState("")

     function convert(e){
         let output= e.target.value
         let result
 
         if(0<=output && output<byte_value[0]) result=output+" Bytes";
         if(byte_value[0]<=output && output<byte_value[1]) result=(output/byte_value[0])+" Kilobytes";
         if(byte_value[1]<=output && output<byte_value[2]) result=(output/byte_value[1])+" Megabytes";
         if(byte_value[2]<=output && output<byte_value[3]) result=(output/byte_value[2])+" Gigabytes";
         if(byte_value[3]<=output) result=(output/byte_value[3])+" Terabytes";
 
         // if(0<=output && output<1000) result=output+" Byte";
         // if(1000<=output && output<1000000) result=(output/1000)+" Kilobyte";
         // if(1000000<=output && output<1000000000) result=(output/1000000)+" Megabyte";
         // if(1000000000<=output && output<1000000000000) result=(output/1000000000)+" Gigabyte";
         // if(1000000000000<=output && output<1000000000000000) result=(output/1000000000000)+" Terabyte";
         // if( output>=1000000000000000) result=(output/1000000000000)+" Terabyte";
 
         setTerabyte(result)
     }

    //== convert to all types of byte
    const [bytes, updateBytes] = useState({ b:0,kb: 0, mb: 0,gb:0,tb:0 })
    let byte_value= Object.values(Byte[0]) 

    const updateB = ev => updateBytes({
        b: ev.target.value,
        kb: ev.target.value/byte_value[0],
        mb: ev.target.value/byte_value[1],
        gb: ev.target.value/byte_value[2],
        tb: ev.target.value/byte_value[3]
    })
    
    const updateKB = ev => updateBytes({
        b: ev.target.value*byte_value[0],
        kb: ev.target.value,
        mb: ev.target.value/byte_value[0],
        gb: ev.target.value/byte_value[1],
        tb: ev.target.value/byte_value[2]
        
    })
    const updateMB = ev => updateBytes({
        b: ev.target.value*byte_value[1],
        kb: ev.target.value*byte_value[0],
        mb: ev.target.value,
        gb: ev.target.value/byte_value[0],
        tb: ev.target.value/byte_value[1]
    })
    
    const updateGB = ev => updateBytes({
        b: ev.target.value*byte_value[2],
        kb: ev.target.value*byte_value[1],
        mb: ev.target.value*byte_value[0],
        gb: ev.target.value,
        tb: ev.target.value/byte_value[0]
    })

    const updateTB = ev => updateBytes({
        b: ev.target.value*byte_value[3],
        kb: ev.target.value*byte_value[2],
        mb: ev.target.value*byte_value[1],
        gb: ev.target.value*byte_value[0],
        tb: ev.target.value
    })

    return (
        <>
            <div style={{textAlign:'center'}}><h2>Bytes Converter</h2></div>
            {/* convert to right byte-type */}
            <div className='byte-container'>
                <div className='bytes-wrapper'>
                    <div className='box'>
                        <input type="number" onChange={convert} placeholder='Bytes'/>
                        <div style={{textAlign:'center'}}><BiDownvote /></div>  
                        <input type="text" value={terabyte} readOnly placeholder='KB/MB/GB/TB'/>
                    </div>
                </div>
            </div>

            {/* convert to all types of byte */}
            <div className='bytes-container'>
                <div className='bytes-wrapper'>
                    <div  className='box1'>
                        <div className='box'>
                            <h1>Bytes</h1>
                            <input type = "number" value = {bytes.b} onChange = {updateB} />
                        </div>
                    </div>
                    <div style={{textAlign:'center'}}><BiSort /></div>  

                    <div className='box2'>
                        <div className='box'>
                            <h3>Kilobytes</h3>
                            <input type = "number" value = {bytes.kb} onChange = {updateKB} />
                        </div>
                        <div className='box'>
                            <h3>Megabytes</h3>
                            <input type = "number" value = {bytes.mb} onChange = {updateMB} />
                        </div>
                        <div className='box'>
                            <h3>Gigabytes</h3>
                            <input type = "number" value = {bytes.gb} onChange = {updateGB} />
                        </div>
                        <div className='box'>
                            <h3>Terabytes</h3>
                            <input type = "number" value = {bytes.tb} onChange = {updateTB} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Bytes
