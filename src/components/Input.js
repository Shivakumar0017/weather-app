import React from 'react';
import Input from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "../App.css";

const Inputbox = ({input,setInput,findWeather}) => {
    const functionCall=(event)=> {
        event.preventDefault();
        findWeather();
    }
  return (
    <div className='inputbox'>
        <div className='inputbox_field'>
            <h1>Google Weather App</h1>
            <p>Powered by</p>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png" alt="logo"></img>
            <form>
            <Input  label="Enter your city name..." variant="standard" onChange={(e)=>setInput(e.target.value)} value={input}/><br/>
            <Button variant="contained" type='submit' color='secondary' onClick={functionCall}>Search</Button>
            </form>
        </div>
    </div>
  )
}

export default Inputbox;