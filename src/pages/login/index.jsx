import React, { useState } from 'react'
import AppLogo from '../../components/AppLogo'
import AuthenticateSMS from './AuthenticateSMS'
import Register from './register'

export default function Login() {
    const [initialState, setInitialState] = useState(true)

    const handleSubmit = () => {
        alert("SMS enviado!")
    }

    return (
        <div className='Login-container' style={options.container}>
            <div style={options.logo_container}>
                <AppLogo objectScale={"1.2"} objectName={true} />
            </div>
            {initialState ?
                <Register
                    onPress={() => setInitialState(false)} />
                :
                <AuthenticateSMS
                    onPress={handleSubmit}
                    onBack={() => setInitialState(true)} />
            }
        </div>
    )
}

const options = {
    container: {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    logo_container: {
        height: '25%',
    }
}
