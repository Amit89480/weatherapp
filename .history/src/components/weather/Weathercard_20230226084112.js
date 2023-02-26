import React, { useState } from 'react'

const Weathercard = ({ tempInfo }) => {

    const [weather, setweather] = useState("");
    
    const { temp, humidity, pressure, weathermood, name, speed, country, sunset } = tempInfo;
    useEffect(() => {
   s
    }, [])
    
    let sec = sunset;
    let date = new Date(sec * 1000);
    let time=`${date.getHours()}:${date.getMinutes()}`
  return (
      <>
          <article className='widget'>
              <div className='weatherIcon'>
                  <i className={"wi-day-sunny"}></i>
              </div>
              <div className='weatherInfo'>
                  <div className='temperature'>
                      <span>{temp}</span>
                  </div>
                  <div className='description'>
                      <div className='weatherCondition'>
                          sunny
                      </div>
                      <div className='place'>
                         {name},{country}
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
                              {time}
                          </p>
                      </div>
                      <div className='two-sided-section'>
                          <p><i className={"wi-day-rainy"}></i></p>
                          <p className='extra-info-leftside'>
                              19:00 PM
                              <br />
                              {humidity}
                          </p>
                      </div>
                  </div>
                  <div className='weather-extra-info'>
                  <div className='two-sided-section'>
                          <p><i className={"wi-day-humidity"}></i></p>
                          <p className='extra-info-leftside'>
                              {speed} 
                              <br />
                              humidity
                          </p>
                      </div>
                      <div className='two-sided-section'>
                          <p><i className={"wi-day-cloudy"}></i></p>
                          <p className='extra-info-leftside'>
                              19:00 PM
                              <br />
                              {humidity}
                          </p>
                      </div>
                  </div>

              </div>
</article>






    </>
  )
}

export default Weathercard