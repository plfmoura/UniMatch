import React from 'react'

export default function Button({ onPress, text, type, pad }) {
    const options = {
        style: {
            padding: pad ? pad : "1.5rem",
            fontSize: "16px",
            textTransform: "uppercase",
            borderRadius: "20px",
            cursor: "pointer",
            textAlign: 'center'
        }
    }

    return (
        <input type={type ? type : "btn"} style={options.style} value={text ? text : "Meu botão"} onClick={onPress} />
    )
}
