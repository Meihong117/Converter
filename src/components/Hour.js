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
        }else{
            alert('please input valid time')
        }
   
        SetTime(hours)
      }

    return (
        <div className='hour-container'>
            <div className='hour-wrapper'>
                <div className='time-container'>
                    <label htmlFor="">Convert 24-Time to 12-Time</label>
                    <input type="number"  onChange={ConvertTime} placeholder='Enter time' />
                    <div style={{textAlign:'center'}}><BiSort /></div>  
                    <input type="text" placeholder={'Output here'} value={time} />
                </div>
            </div>
        </div>
    )
}

export default Hour
