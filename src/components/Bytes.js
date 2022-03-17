import React from 'react'
import { useState } from 'react'
import './Bytes.css'
import {BiSort} from "react-icons/bi"
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

    const [terabyte,setTerabyte]=useState()
    function convert(e){
       let output= e.target.value
        let result

        if(0<=output<1000) result=output+"terabyte";
        if(1000<=output<=1000000) result=(output/1000)+"gigabyte";
        if(1000000<output<=1000000000) result=(output/1000000)+"megabyte";
        if(1000000000<output<=1000000000000) result=(output/1000000000)+"kilobyte";
        if(1000000000000<output<=1000000000000000) result=(output/1000000000000)+"byte";

        setTerabyte(result)
    }
   console.log(terabyte)
    return (
        <>
            {/* converter */}
            <div className='container'>
                <div className='bytes-wrapper'>
                    <div  className='box1'>
                        <div className='box'>
                            <h1>Bytes</h1>
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
                            <h3>Kilobytes</h3>
                            <input
                                type = "number" 
                                value = {bytes.kb} 
                                onChange = {updateKB}>
                            </input>
                        </div>
                        <div className='box'>
                            <h3>Megabytes</h3>
                            <input
                                type = "number" 
                                value = {bytes.mb} 
                                onChange = {updateMB}>
                            </input>
                        </div>
                        <div className='box'>
                            <h3>Gigabytes</h3>
                            <input
                                type = "number" 
                                value = {bytes.gb} 
                                onChange = {updateGB}>
                            </input>
                        </div>
                        <div className='box'>
                            <h3>terabytes</h3>
                            <input
                                type = "number" 
                                value = {bytes.tb} 
                                onChange = {updateTB}>
                            </input>
                        </div>
                    </div>
                </div>
            </div>
            {/*  */}
            <div>
                <div>
                    <label htmlFor="">Terabyte</label>
                    <input type="number" onChange={convert} placeholder='Input'/>
                    <label htmlFor="">Convert to:</label>
                    <input type="text" value={terabyte} placeholder='output'/>
                    
                </div>
            </div>

        </>
    )
}

export default Bytes
