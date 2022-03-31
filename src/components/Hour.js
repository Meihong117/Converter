import React from 'react'
import { useState } from 'react'
import './Hour.css'
import {BiDownvote} from "react-icons/bi"

const Hour = () => {
    const [time, setTime]=useState(null)

    function ConvertTime (e) {
        let data=e.target.value
        let suffix = data >= 12 ? " PM":" AM";
        let hours
       
        if(1<=data && data<=24){
            if(1<=data && data<=12) hours=data + suffix;
            else if(12<data && data<=24) hours=(data-12) + suffix
        }
        else {
            hours="Please enter right hour"
        }
        setTime(hours)
      }

    return (
        <div className='container'>
            <div className='hour-wrapper'>
                <div className='time-container'>
                    <h3 htmlFor="">Hour Converter</h3>
                    <input type="number"  onChange={ConvertTime} placeholder='eg: 13' />
                    <div style={{textAlign:'center'}}><BiDownvote /></div>  
                    <input type="text" placeholder='eg: 1PM' value={time} />
                </div>
            </div>
        </div>
    )
}

export default Hour
