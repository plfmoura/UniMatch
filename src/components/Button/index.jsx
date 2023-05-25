import React from 'react'
import './style.css'

export default function Button({ onPress, text, type, pad, variant }) {
    const options = {
        style: {
            padding: pad ? pad : "1.5rem",
            userSelect: "none",
    }
}

// into styles.css we found the button colors and styles variants 
// - primary - secondary - default

return (
    <input type={type ? type : "btn"} style={options.style} value={text ? text : "Meu botão"} onClick={onPress} className={"default-btn " + variant} />
)
}
