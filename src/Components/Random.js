import React from 'react'

const Random = ({ min, max }) => {
    let RandomNum = Math.floor(Math.random()*(max - min) + min)
    
    
    return (
        <div>
          <p className="it3-container">Random Number between {min} and {max} => {RandomNum}</p>  
        </div>
    )
}

export default Random
