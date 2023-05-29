import React from 'react'
import './style.css'

export default function Button({ onPress, text, name, icon, type, pad, variant, reference }) {
    const options = {
        style: {
            padding: pad ? pad : "1.5rem",
            userSelect: "none",
        }
    }

    // into styles.css we found the button colors and styles variants 
    // - primary - secondary - default - dark

    return (
        <button 
        ref={reference} 
        name={name} 
        type={type ? type : "btn"} 
        style={options.style} 
        readOnly 
        onClick={onPress && onPress} 
        className={"default-btn " + variant}>
        {icon && icon}
        {text ? text : "Meu botão"} 
        </button>

    )
}
