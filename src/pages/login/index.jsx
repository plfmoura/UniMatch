import React, { useState } from 'react'
import AuthenticateSMS from './AuthenticateSMS'
import AppLogo from '../../components/AppLogo'
import Lobby from './Lobby'
import Loading from '../../components/Loading'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const [initialState, setInitialState] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = () => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
        }, [2000])
    }

    return (
        <>
            {isLoading && <Loading />}
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
                        onBack={() => setInitialState(true)}
                        onNavigate={() => navigate("/register")}
                    />
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
