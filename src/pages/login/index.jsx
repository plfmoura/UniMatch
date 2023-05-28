import React, { useEffect, useRef, useState } from 'react'
import AuthenticateSMS from './AuthenticateSMS'
import AppLogo from '../../components/AppLogo'
import './lobby.css'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import AuthenticateEmail from './AuthenticateEmail'
import { MdOutlineEmail } from "react-icons/md";
import { GoDeviceMobile } from "react-icons/go";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
    const [initialState, setInitialState] = useState(true)
    const [selectedAuth, setSelectedAuth] = useState(null)
    const [logoController, setLogoController] = useState(true)
    const emailRef = useRef(null)
    const smsRef = useRef(null)
    const navigate = useNavigate()

    const handleSelected = (e) => {
        e.preventDefault(e)
        if (e.target.name === "sms") {
            setInitialState(false)
            setSelectedAuth(
                <AuthenticateSMS
                    onBack={() => setInitialState(true)}
                    onNavigate={() => navigate("/register")}
                    onPress={() => setLogoController(false)}
                />
            )
        } else if (e.target.name === "email") {
            setInitialState(false)
            setSelectedAuth(
                <AuthenticateEmail
                    onBack={() => setInitialState(true)}
                    onNavigate={() => navigate("/register")}
                    onPress={() => setLogoController(false)}
                />
            )
        }
    }

    return (
        <>
            <div className='Login-container' style={options.container}>
                <div style={options.logo_container}>
                    {logoController && <AppLogo objectName={true} />}
                </div>
                {initialState ?
                    <div className='Lobby-container'>
                        <div className='lobby-title'>
                            <h2>Encontre suas <span className="ornate-words">primeiras<br />conexões</span> acadêmicas</h2>
                            <h4>Junte-se a centenas de<br />estudantes e socialize!</h4>
                        </div>
                        <nav className='lobby-btn-navigation'>
                            <Button
                                variant={"secondary-btn"}
                                text={"Entrar com Google"}
                                pad={"1.5rem 2.5rem"}
                                onPress={handleSelected}
                                icon={<FcGoogle style={{ fontSize: 24, background: "#fff" }} />}
                            />
                            <Button
                                reference={emailRef}
                                name={"email"}
                                variant={"primary-btn"}
                                text={"Entrar com Email"}
                                pad={"1.5rem 2.5rem"}
                                onPress={(e) => handleSelected(e)}
                                icon={<MdOutlineEmail style={options.iconAlign} />}
                            />
                            <Button
                                reference={smsRef}
                                name={"sms"}
                                variant={"dark-btn"}
                                text={"Entrar com Celular"}
                                pad={"1.5rem 2.5rem"}
                                onPress={(e) => handleSelected(e)}
                                icon={<GoDeviceMobile style={options.iconAlign} />}

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
    },
    iconAlign: {
        fontSize: 24
    }
}
