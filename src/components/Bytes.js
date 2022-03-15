import React from 'react'
import { useState } from 'react'

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
    return (
        <div id="container">
                <div id="box1">
                    <h1>Bytes</h1>
                    <input
                        type = "number"
                        value = {bytes.b}
                        onChange = {updateB} >
                    </input>
                </div>
                <div id="box2">
                    <h1>Kilobytes</h1>
                    <input
                        type = "number" 
                        value = {bytes.kb} 
                        onChange = {updateKB}>
                    </input>
                </div>
                <div id="box3">
                    <h1>Megabytes</h1>
                    <input
                        type = "number" 
                        value = {bytes.mb} 
                        onChange = {updateMB}>
                    </input>
                </div>
                <div id="box4">
                    <h1>Gigabytes</h1>
                    <input
                        type = "number" 
                        value = {bytes.gb} 
                        onChange = {updateGB}>
                    </input>
                </div>
                <div id="box5">
                    <h1>terabytes</h1>
                    <input
                        type = "number" 
                        value = {bytes.tb} 
                        onChange = {updateTB}>
                    </input>
                </div>
            </div>
    )
}

export default Bytes
