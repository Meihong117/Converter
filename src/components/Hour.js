import React from 'react'
import { useState } from 'react'
import './Hour.css'
import {BiDownvote} from "react-icons/bi"

const Hour = () => {
    const [time, setTime]=useState('')

    function ConvertTime (e) {
        let data=e.target.value
       
        let input_length=data.length
        let last_two_elem_3=data.slice(1,3) // input length=3
        let first_two_elem=data.slice(0,2) // input length=4
        let last_two_elem_4=data.slice(2,4) // input length=4
        let hours

        // Enter time type: 1-24 
        if(input_length ===1 || input_length===2){
            if(data>=1 && data <=12) hours=data + "AM";
            else if(data>=13 && data <=24) hours=(data-12) + "PM";
            else hours="Please enter right hour"

        }

        // Enter time type: 100-900 
        else if(input_length===3 && last_two_elem_3>=0 && last_two_elem_3<=59 && data[0]>=1 && data[0]<=9)
           hours=data[0]+':'+last_two_elem_3+"AM" 
        
        
        //Time: 1000-2400
        else if(input_length===4 && last_two_elem_4>=0 && last_two_elem_4<=59){
            if(first_two_elem==='10' || first_two_elem==='11') hours=first_two_elem+':'+last_two_elem_4+ "AM"
            else if(first_two_elem==='12') hours= "12PM"
            else if(first_two_elem>=13 && first_two_elem<=24) hours=(first_two_elem-12) + ':'+last_two_elem_4+"PM" 
            else hours="Please enter right hour"
        }
        else hours="Please enter right hour"

        setTime(hours)
      }


    return (
        <div className='container'>
            <div className='hour-wrapper'>
                <div className='time-container'>
                    <h3 htmlFor="">Hour Converter</h3>
                    <input type="text"  onChange={ConvertTime} placeholder='eg: 13/1300' />
                    <div style={{textAlign:'center'}}><BiDownvote /></div>  
                    <input type="text" placeholder='eg: 1PM' value={time} readOnly/>
                    
                </div>
            </div>
        </div>
    )
}

export default Hour
