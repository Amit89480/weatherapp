import React from 'react'
import "./style.css"

const Temp = () => {
  return (
      <>
          
          <div className='wrap'>
              <div className='search'>
                  <input type="search" placeholder='search....' autoFocus id='search' className='searchTerm' />
                  <button className='searchButton' type='button'>Search</button>
                 
                  
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
                  </div>
              </div>
</article>

    </>
  )
}

export default Temp