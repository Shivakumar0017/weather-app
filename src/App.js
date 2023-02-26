import React,{useState} from 'react'
import Inputbox from './components/Input';
import axios from 'axios';
import Result from './components/Result';

const App = () => {
  const [input, setInput] = useState("");
  const [desc, setdesc] = useState("");
  const [temp, settemp] = useState("");
  const [icon, seticon] = useState("");

  const findWeather=async()=>{
    const apiKey="";
    const unit="metric";
    const url="https://api.openweathermap.org/data/2.5/weather?q="+input+"&appid="+apiKey+"&units="+unit;
    const response=await axios.get(url);
    const temp =await response.data.main.temp;
    const desc=await response.data.weather[0].description;
    const icon=await response.data.weather[0].icon;
    const imgURL="https://openweathermap.org/img/wn/"+icon+"@2x.png";
    settemp(temp);
    setdesc(desc);
    seticon(imgURL);
    setInput("");
  }


  return (
    <div>
      {temp===""?(<Inputbox setInput={setInput} input={input} findWeather={findWeather}/>):(<Result temp={temp} desc={desc} image={icon} settemp={settemp}></Result>)}
    </div>
  )
}

export default App
