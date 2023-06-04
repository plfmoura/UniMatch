import React from 'react'
import logo from '../../assets/images/logo.png'
import './appLogo.css'

export default function AppLogo({ objectScale, objectName, nameScale, animation }) {
  let scale = objectScale ? objectScale : "1"

  const options = {
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      gap: 10,
    },
    logo: {
      transform: `scale(${scale})`,
      height: '50px',
    },
    text: {
      fontSize: nameScale ? nameScale : "22px",
      fontWeight: '600',
      marginLeft: 2
    }
  }

  return (
    <div style={options.container}>
      <img
        src={logo}
        alt="Logo do aplicativo"
        style={options.logo}
        className={animation ? 'logo-animation' : null} />
      {objectName ? <span style={options.text}>UniMatch</span> : null}
    </div>
  )

}
