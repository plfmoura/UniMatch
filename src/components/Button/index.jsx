import React from 'react'
import './style.css'

export default function Button({ onPress, text, type, pad, variant }) {
       const options = {
            style: {
                padding: pad ? pad : "1.5rem",
            }
        }

    return (
        <input type={type ? type : "btn"} style={options.style} value={text ? text : "Meu botão"} onClick={onPress} className={"default-btn " + variant}/>
    )
}
