import React from 'react'
import { useState } from 'react'

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
        console.log(data)
   
        SetTime(hours)
        SetPrint(false)
      }

    return (
        <div>
            <input type="text"  onChange={ConvertTime}/>
            <button onClick={()=>SetPrint(true)}>click</button>
            {print? <h1>{time}</h1>: null }
        </div>
    )
}

export default Hour
