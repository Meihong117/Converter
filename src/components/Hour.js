import React from 'react'
import { useState } from 'react'
import './Hour.css'

const Hour = () => {
    const [time, SetTime]=useState(null)
    const [print, SetPrint]=useState(false)
 

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
        // console.log(data)
   
        SetTime(hours)
        SetPrint(false)
      }

    return (
        <div className='hour-container'>
            <div className='hour-wrapper'>
                <div className='time-container'>
                    <label htmlFor="">Enter time:</label>
                    <input type="number"  onChange={ConvertTime}/>
                    <button onClick={()=>SetPrint(true)}>Check Time</button>
                </div>
                <div className='time-container'>
                    {print? <p>{time}</p>: 'Output Here' } 
                </div>
            </div>
        </div>
    )
}

export default Hour
