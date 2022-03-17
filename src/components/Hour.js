import React from 'react'
import { useState } from 'react'
import './Hour.css'
import {BiSort} from "react-icons/bi"

const Hour = () => {
    const [time, SetTime]=useState(null)

    function ConvertTime (e) {
        let data=e.target.value
        let suffix = data >= 12 ? "PM":"AM";
        let hours
       
        if(1<=data<=24){
            if(1<=data && data<=12) hours=data + suffix;
            else if(12<data && data<=24) hours=(data-12) + suffix
        }
   
        SetTime(hours)
      }

    return (
        <div className='container'>
            <div className='hour-wrapper'>
                <div className='time-container'>
                    <label htmlFor="">24-Hour</label>
                    <input type="number"  onChange={ConvertTime} placeholder='Enter 24-hour' />
                    <div style={{textAlign:'center'}}><BiSort /></div>  
                    <label htmlFor="">12-Hour</label>
                    <input type="text" placeholder={'12-Hour'} value={time} />
                </div>
            </div>
        </div>
    )
}

export default Hour
