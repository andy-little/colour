import React from 'react'

const Slider = ({children, value, setValue}) => {
    return (<>
        <div className="slider-container">
          <label htmlFor={children}>{children}:</label>
          <input className="slider" type="range" min="0" max="30" value={value} onChange={(e)=> {setValue(parseInt(e.target.value) + 1)}} className="slider" id={children}/>
          <p className="slider-value">{value -1}</p>
        </div>
        </>
    )
}

export default Slider
