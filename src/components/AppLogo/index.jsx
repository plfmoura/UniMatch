import React from 'react'
import logo from '../../../public/vite.svg'

export default function AppLogo({ objectScale, objectName }) {
  let scale = objectScale ? objectScale : "1"
  
  const options = {
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    logo: {
      transform: `scale(${scale})`,
      width: '50px',
      height: '50px'
    },
    text: {
      fontSize: "28px",
      fontWeight: '600',
      marginLeft: 2
    }
  }

  return (
    <div style={options.container}>
      <img src={logo} alt="Logo do aplicativo" style={options.logo} />
      {objectName ? <span style={options.text}>Match App</span> : null}
    </div>
  )

}