import React, { useState, useEffect } from 'react'
import Weathercard from './Weathercard';
import "./style.css"

const Temp = () => {

    const [searchValue, setsearchValue] = useState("West Bengal");

    const [tempInfo, settempInfo] = useState("");
    const getWeatherInfo = async() => {
        
        try {

            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=3025f694e6add499deb78bc2445c1ac9`;


            const res = await fetch(url);
            const data = await res.json();


            const { temp, humidity, pressure } = data.main;
            const {main:weathermood } = data.weather[0];

            const { name } = data;
            const { speed } = data.wind;
            const { country,sunset}=data.sys;
            


            const myNewWeatherInfo = { temp, humidity, pressure, weathermood, name, speed, country, sunset };

            settempInfo(myNewWeatherInfo);
        } catch(error) {
            console.log(error)
      }
        
    };


    useEffect(() => {
         
        getWeatherInfo();


    },[])

  return (
      <>
          
          <div className='wrap'>
              <div className='search'>
                  <input type="search" placeholder='search....' autoFocus id='search' className='searchTerm' value={searchValue} onChange={(e)=>setsearchValue(e.target.value)} />
                  <button className='searchButton' type='button' onClick={getWeatherInfo}>Search</button>
                 
                  
              </div>
    </div>

          

          <Weathercard tempInfo={ ...tempInfo}   />
     
          

    </>
  )
}

export default Temp