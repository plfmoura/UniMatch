import React, { useRef, useState } from 'react'
import AuthenticateSMS from './AuthenticateSMS'
import AppLogo from '../../components/AppLogo'
import './lobby.css'
import Loading from '../../components/Loading'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import AuthenticateEmail from './AuthenticateEmail'

export default function Login() {
    const [initialState, setInitialState] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    const [selectedAuth, setSelectedAuth] = useState(null)
    const emailRef = useRef(null)
    const smsRef = useRef(null)

    const navigate = useNavigate()

    const handleSubmit = () => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
        }, [5000])
    }

    const handleSelected = (e) => {
        e.preventDefault(e)
        console.log(e.target.name)
        if (e.target.name === "sms") {
            setInitialState(false)
            setSelectedAuth(
                <AuthenticateSMS
                    onPress={handleSubmit}
                    onBack={() => setInitialState(true)}
                    onNavigate={() => navigate("/register")}
                />
            )
        } else if (e.target.name === "email") {
            setInitialState(false)
            setSelectedAuth(
                <AuthenticateEmail
                    onPress={handleSubmit}
                    onBack={() => setInitialState(true)}
                    onNavigate={() => navigate("/register")}
                />
            )
        }
    }

    return (
        <>
            {isLoading && <Loading />}
            <div className='Login-container' style={options.container}>
                <div style={options.logo_container}>
                    <AppLogo objectName={true} />
                </div>
                {initialState ?
                    <div className='Lobby-container'>
                        <div className='lobby-title'>
                            <h2>Encontre suas <span className="words-gray">primeiras<br />conexões</span> acadêmicas</h2>
                            <h4>Junte-se a centenas de<br />estudantes e socialize!</h4>
                        </div>
                        <nav className='lobby-btn-navigation'>
                            <Button variant={"primary-btn"} text={"Entrar com Google"} onPress={handleSelected} />
                            <Button
                                reference={emailRef}
                                name={"email"}
                                variant={"primary-btn"}
                                text={"Entrar com Email"}
                                onPress={(e) => handleSelected(e)}
                            />
                            <Button
                                reference={smsRef}
                                name={"sms"}
                                variant={"primary-btn"}
                                text={"Entrar com Celular"}
                                onPress={(e) => handleSelected(e)}
                            />
                            <a>Problemas para iniciar sessão?</a>
                        </nav>
                    </div>
                    : selectedAuth
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
