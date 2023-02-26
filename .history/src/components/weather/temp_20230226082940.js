import React,{useState,useEffect} from 'react'
import "./style.css"

const Temp = () => {

    const [searchValue, setsearchValue] = useState("West Bengal");

const [tempInfo,set]
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

          
        {/* our temp card */}
          <article className='widget'>
              <div className='weatherIcon'>
                  <i className={"wi-day-sunny"}></i>
              </div>
              <div className='weatherInfo'>
                  <div className='temperature'>
                      <span>25.5&deg</span>
                  </div>
                  <div className='description'>
                      <div className='weatherCondition'>
                          sunny
                      </div>
                      <div className='place'>
                          pune,india
                      </div>
                  </div>
              </div>
              <div className='date'>
                  {new Date().toLocaleString()}
              </div>

              {/* our 4 divide section */}

              <div className='extra-temp'>
                  <div className='temp-info-minmax'>
                      <div className='two-sided-section'>
                          <p><i className={"wi-day-sunny"}></i></p>
                          <p className='extra-info-leftside'>
                              19:00 PM
                              <br />
                              sunset
                          </p>
                      </div>
                      <div className='two-sided-section'>
                          <p><i className={"wi-day-rainy"}></i></p>
                          <p className='extra-info-leftside'>
                              19:00 PM
                              <br />
                              humidity
                          </p>
                      </div>
                  </div>
                  <div className='weather-extra-info'>
                  <div className='two-sided-section'>
                          <p><i className={"wi-day-humidity"}></i></p>
                          <p className='extra-info-leftside'>
                              19:00 PM
                              <br />
                              humidity
                          </p>
                      </div>
                      <div className='two-sided-section'>
                          <p><i className={"wi-day-cloudy"}></i></p>
                          <p className='extra-info-leftside'>
                              19:00 PM
                              <br />
                              humidity
                          </p>
                      </div>
                  </div>

              </div>
</article>

    </>
  )
}

export default Temp