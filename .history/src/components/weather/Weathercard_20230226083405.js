import React from 'react'

const Weathercard = (tempInfo) => {
  return (
      <>
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

export default Weathercard