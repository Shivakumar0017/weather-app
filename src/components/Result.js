import React from 'react'
import Button from '@mui/material/Button';
import "./Result.css";
const Result = ({temp,desc,image,settemp}) => {
  return (
    <div className='result'>
        <div className='result_box'>
            <h1>Temp:  {temp} °C</h1>
             <p>{desc}</p>
            <img src={image} alt="icon"></img>
            <br></br> 
            <Button variant='outlined'  onClick={()=>settemp("")}>Back</Button> 
        </div>

    </div>
  )
}

export default Result