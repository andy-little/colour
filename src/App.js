import React, { useState, useEffect } from 'react'
import { randomColour } from './utils';


import Values from 'values.js'
import Slider from './Slider';
import Palette from './Palette';

function App() {
  const [colour, setColour] = useState(randomColour);
  const [error, setError] = useState(false);
  const [tints, setTints] = useState(11);
  const [shades, setShades] = useState(11);
  const [listTints, setListTints] = useState(new Values('#241ab1').all(100/parseInt(tints)));
  const [listShades, setListShades] = useState(new Values('#241ab1').all(100/parseInt(tints)));
  function setTintsAndShades(){
    try {
      let coloursTints = new Values(colour).tints(100/parseInt(tints));
      let coloursShades = new Values(colour).shades(100/parseInt(shades));
      setError(false);
      setListTints(coloursTints);
      setListShades(coloursShades);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  }
  useEffect(() => {
    
    setTintsAndShades();
    
  }, [shades, tints, colour])

  const handleSubmit = (e) => {
    e.preventDefault();
    setTintsAndShades();
  }

  return <>
    <section className="header">
      <div className="header-container">
        <h1 className="header-title">Colour Generator</h1>
        <div className="header-form-container">
          <form action="" onSubmit={handleSubmit}>
            <div className="colour-container">
              <label htmlFor="colour-input">Colour:</label>
              <div className="input-container">
                <input className={`${error && 'error'} input-colour`} type="text" value={colour} onChange={e => setColour(e.target.value)} id="colour-input"/>
                <button className="header-btn-random" onClick={()=>setColour(randomColour())}>random</button>
              </div>
            </div>
            <Slider value={tints} setValue={setTints}>Tints</Slider>
            <Slider value={shades} setValue={setShades}>Shades</Slider>
            {/* <button className="btn" type="submit" >Submit</button> */}
          </form>
        </div>
      </div>

    </section>
    <section className="palette-container">
      <Palette list={listTints}>Tints</Palette>
      <Palette list={listShades}>Shades</Palette>
    </section>
  </>
}

export default App
