import React, { useState ,useEffect} from 'react'

const Weathercard = ({ tempInfo }) => {

    const [weather, setweather] = useState("");
    
    const { temp, humidity, pressure, weathermood, name, speed, country, sunset } = tempInfo;
    useEffect(() => {
        if (weathermood) {
            switch (weathermood) {
                case "Clouds":setweather("wi-day-cloudy")
        
                    break;
                case "Haze":setweather("wi-fog")
        
                    break;
                case "Clear":setweather("wi-day-sunny")
        
                    break;
                case "Mist": setweather("wi-day-dust");
        
                    break;
   
                default:
                    setweather("wi-day-sunny");
                    break;
            }
        }
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
                          {weathermood}
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
                          <p><i className={`wi ${weather}`}></i></p>
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