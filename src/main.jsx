import { StrictMode ,useState ,useEffect} from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import locationImg from '../image/location.png'


function Wather(){
let[city,setCity]=useState();
let[w,setw]=useState();
let[c,setc]=useState();
let[search,setSearch]=useState("Bhilai");

useEffect(()=>{


async function fetchapi() {
  
  let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=54f783bd1a3418ca2c78076d2da37f19&units=metric`);
  
    let data = await result.json();
    
    setCity(data.main);
    setw(data.weather[0]);
    setc(data.sys);

  
}
fetchapi();
} ,[search])

  return<>
  <div className="body">
  <div class="outer">
    <input type="search" placeholder={search} onChange={(e)=>{setSearch(e.target.value)}
    } />

    {!city ? (
      <p>invalid city</p>
    ) : (
      <div>
      <h1>{search}</h1>
      <p>Country:{c.country}</p>
    <img src={locationImg} alt="hi" />
    <p>{w.main}</p>
    <h2>{city.temp}°C</h2>
    <p><span>{city.temp_min}°C </span>|<span>{city.temp_max}°C </span></p>
    </div>
  ) }
  </div>
  </div>
  </>
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Wather/>
  </StrictMode>,
)
