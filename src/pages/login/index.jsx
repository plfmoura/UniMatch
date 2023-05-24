import React, { useState } from 'react'
import AuthenticateSMS from './AuthenticateSMS'
import AppLogo from '../../components/AppLogo'
import Lobby from './Lobby'

export default function Login() {
    const [initialState, setInitialState] = useState(true)

    const handleSubmit = () => {
        alert("SMS enviado!")
    }

    return (
        <>
            <div className='Login-container' style={options.container}>
                <div style={options.logo_container}>
                    <AppLogo objectName={true} />
                </div>
                {initialState ?
                    <Lobby
                        onPress={() => setInitialState(false)} />
                    :
                    <AuthenticateSMS
                        onPress={handleSubmit}
                        onBack={() => setInitialState(true)} />
                }
            </div>
        </>
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
