import React from 'react'
import { useState } from 'react'
import './Bytes.css'
import {BiSort, BiDownvote} from "react-icons/bi"
import '../App.css'

const Bytes = () => {
    const [bytes, updateBytes] = useState({ b:0,kb: 0, mb: 0,gb:0,tb:0 })

    const updateB = ev => updateBytes({
        b: ev.target.value,
        kb: ev.target.value/1000,
        mb: ev.target.value/1000000,
        gb: ev.target.value/1000000000,
        tb: ev.target.value/1000000000000
    })
    
    const updateKB = ev => updateBytes({
        b: 1000*ev.target.value,
        kb: ev.target.value,
        mb: ev.target.value/1000,
        gb: ev.target.value/1000000,
        tb: ev.target.value/1000000000
        
    })
    const updateMB = ev => updateBytes({
        b: ev.target.value*1000000,
        kb: ev.target.value*1000,
        mb: ev.target.value,
        gb: ev.target.value/1000,
        tb: ev.target.value/1000000
    })
    
    const updateGB = ev => updateBytes({
        b: ev.target.value*1000000000,
        kb: ev.target.value*1000000,
        mb: ev.target.value*1000,
        gb: ev.target.value,
        tb: ev.target.value/1000
    })

    const updateTB = ev => updateBytes({
        b: ev.target.value*1000000000000,
        kb: ev.target.value*1000000000,
        mb: ev.target.value*1000000,
        gb: ev.target.value*1000,
        tb: ev.target.value
    })

    // convert to right byte-type
    const [terabyte,setTerabyte]=useState()

    function convert(e){
        let output= e.target.value
        let result

        if(0<=output && output<1000) result=output+" Byte";
        if(1000<=output && output<1000000) result=(output/1000)+" Kilobyte";
        if(1000000<=output && output<1000000000) result=(output/1000000)+" Megabyte";
        if(1000000000<=output && output<1000000000000) result=(output/1000000000)+" Gigabyte";
        if(1000000000000<=output && output<1000000000000000) result=(output/1000000000000)+" Terabyte";
        if( output>=1000000000000000) result=(output/1000000000000)+" Terabyte";

        setTerabyte(result)
    }
    
    return (
        <>
            <div style={{textAlign:'center'}}><h2>Bytes Converter</h2></div>
            {/* convert to right byte-type */}
            <div className='byte-container'>
                <div className='bytes-wrapper'>
                    <div className='box'>
                        <input type="number" onChange={convert} placeholder='Byte'/>
                        <div style={{textAlign:'center'}}><BiDownvote /></div>  
                        <input type="text" value={terabyte} placeholder='KB/MB/GB/TB'/>
                    </div>
                </div>
            </div>

            {/* convert to all types of byte */}
            <div className='bytes-container'>
                <div className='bytes-wrapper'>
                    <div  className='box1'>
                        <div className='box'>
                            <h1>Byte</h1>
                            <input
                                type = "number"
                                value = {bytes.b}
                                onChange = {updateB} >
                            </input>
                        </div>
                    </div>
                    <div style={{textAlign:'center'}}><BiSort /></div>  

                    <div className='box2'>
                        <div className='box'>
                            <h3>Kilobyte</h3>
                            <input
                                type = "number" 
                                value = {bytes.kb} 
                                onChange = {updateKB}>
                            </input>
                        </div>
                        <div className='box'>
                            <h3>Megabyte</h3>
                            <input
                                type = "number" 
                                value = {bytes.mb} 
                                onChange = {updateMB}>
                            </input>
                        </div>
                        <div className='box'>
                            <h3>Gigabyte</h3>
                            <input
                                type = "number" 
                                value = {bytes.gb} 
                                onChange = {updateGB}>
                            </input>
                        </div>
                        <div className='box'>
                            <h3>Terabyte</h3>
                            <input
                                type = "number" 
                                value = {bytes.tb} 
                                onChange = {updateTB}>
                            </input>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Bytes
