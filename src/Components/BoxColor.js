import React from 'react'

const BoxColor = ({ r, g, b }) => {
    const divStyle = {
        backgroundColor: `rgb(${r},${g},${b})`,
    }

    const rgbToHex = (r, g, b) => '#' + [r, g, b]
    .map(x => {
        const hex = x.toString(16)
        return hex.length === 1 ? '0' + hex : hex
      }).join('')

    const newHex = rgbToHex(r, g, b)
    
    
    
    return (
        <div className="it4-container" style={divStyle}>
            <p>rgb(`{r},{g},{b}`)</p>
            <p>{newHex}</p>
        </div>
    )
}

export default BoxColor
    