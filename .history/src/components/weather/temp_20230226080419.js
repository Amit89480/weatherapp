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
              <div className=''></div>
</article>

    </>
  )
}

export default Temp