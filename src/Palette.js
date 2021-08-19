import React from 'react'
import SingleColor from './SingleColor'

const Palette = ({children, list}) => {
    return (
    <article>
      <h3>{children}:</h3>
      <section className="colors">
       {list.map((colour, index) => {
         if(colour.hex !== 'ffffff' && colour.hex !== '000000'){
          return <SingleColor key={index} {...colour} index={index}  hexColour={colour.hex}/>
         }
       })}
      </section>
    </article>
    )
}

export default Palette
