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
                          pune,
                      </div>
                  </div>
              </div>
</article>

    </>
  )
}

export default Temp