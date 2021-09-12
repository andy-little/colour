import React, { useState, useEffect } from 'react'
import {rgbToHex} from './utils'

const SingleColor = ({rgb, weight, index, hexColour}) => {
  const tinycolor = require("tinycolor2");
  const [alert, setAlert] = useState(false);
  const [hover, setHover] = useState(false);
  const bgc = rgb.join(',');
  const hex = rgbToHex(...rgb);
  const handleHover = () => {
     
    if (!alert){
    setHover(true);
    }
  }
  const handleMouseOut = () => {
  
    setHover(false);
  }
  useEffect(() => {
    const timeout = setTimeout(()=>{
      setAlert(false);
    },1600);
    return () => {
      clearTimeout(timeout);
    }
  }, [alert])

  const copy = () => {

    //remove alert a new one is clicked if clicked
    const swatches = document.querySelectorAll('.color');
    swatches.forEach((swatch) => {
      const swatchAlert = swatch.querySelector('.alert');
      if (swatchAlert) {
        swatchAlert.innerHTML = '';
      }
    })
    //copy to clipboard
    navigator.clipboard.writeText(hex);
    setAlert(true);
  }

  return <article className={`color single-colour`} style={{backgroundColor: `rgb(${bgc})`}} onClick={copy} onMouseOver={handleHover} onMouseOut={handleMouseOut}>
    <p style={{color : tinycolor.mostReadable(`${hex}`,['#fff', '#000'])}} className="color-value">{hex}</p>
    <p className="alert" style={{color : tinycolor.mostReadable(`${hex}`,['#fff', '#000'])}}>{alert ? 'Copied to clipboard' : hover && 'copy'}</p>
  </article>
}

export default SingleColor
