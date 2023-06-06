import React, { useContext, useEffect, useRef, useState } from 'react'
import Button from '../../../components/Button'
import BackArrow from '../../../components/BackArrow'
import './styles.css'
import Loading from '../../../components/Loading'
import { setWarning } from '../../../services/usableFunctions'
import axios from 'axios'
import Spinner from '../../../components/Spinner'
import { useDispatch } from 'react-redux'
import { removeUser } from '../../../reducer/userReducer'
import { RegisterContext } from '../../../contexts/RegisterContext'

export default function AuthenticateEmail({ onPress, onBack, onNavigate }) {
    const [awaitResponse, setAwaitResponse] = useState(false)
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState("")
    const [requestLoading, setRequestLoading] = useState(false)
    const [requestStatus, setRequestStatus] = useState(false)
    const input_email = useRef(null)
    const input_email_response = useRef(null)
    const { setAlreadyRegistered } = useContext(RegisterContext)
    const dispatch = useDispatch();

    useEffect(() => {
        // to put focus into input when component mount 
        input_email.current && input_email.current.focus()
        if (input_email_response.current) {
            input_email_response.current.focus();
            input_email_response.current.value = ""
        }
    }, [awaitResponse])

    const options = {
        input: {
            fontSize: !awaitResponse ? "1.3rem" : "3rem",
        },
    }

    const sendResponse = (e) => {
        e.preventDefault(e)
        let inputEmail = input_email.current

        if (inputEmail.value == "") {
            inputEmail.focus()
            setWarning(inputEmail)
            return
        } else {
            setRequestLoading(true)
            const options = {
                method: "POST",
                url: `${import.meta.env.VITE_BASE_URL}/send_code`,
                headers: {
                    "Content-Type": "application/json",
                },
                data: {
                    email: inputEmail.value,
                }
            };
            axios.request(options)
                .then(function (response) {
                    setEmail(inputEmail.value)
                    setAwaitResponse(true)
                    setRequestLoading(false)
                    dispatch(removeUser())
                })
                .catch(function (error) {
                    setRequestLoading(false)
                });
        }
    }

    const handleCheck = (e) => {
        e.preventDefault(e)
        let inputResponse = input_email_response.current

        if (inputResponse.value == "") {
            inputResponse.focus()
            return
        } else if (inputResponse.value.length < 4) {
            inputResponse.value = ""
            inputResponse.focus()
            return
        } else {
            setRequestLoading(true)
            const options = {
                method: "POST",
                url: `${import.meta.env.VITE_BASE_URL}/check_code`,
                headers: {
                    "Content-Type": "application/json",
                },
                data: {
                    email: email,
                    code: inputResponse.value
                }
            };
            axios.request(options)
                .then(function (response) {
                    let status = response.status
                    inputResponse.value = ""
                    onPress()
                    setLoading(true)
                    setTimeout(() => {
                        setLoading(false)
                        if (status === 202) {
                            onNavigate("register")
                            setAlreadyRegistered(false)
                        } else if (status === 200) {
                            onNavigate("lounge");
                            let user = response.data
                            localStorage.setItem("uni-match-user", JSON.stringify(user));
                        }
                        //tenho que ver qual código está retornando
                        //403 - 202 - 200 
                    }, [5000])
                })
                .catch(function (error) {
                    if (error.response.status === 400) {
                        inputResponse.value = ""
                        setAwaitResponse(false)
                        setRequestStatus(true)
                        setTimeout(() => {
                            setRequestStatus(false)
                        }, [3000])
                    } else if (error.response.status === 403) {
                        let user = error.response.data
                        localStorage.setItem("uni-match-user", JSON.stringify(user))
                        setLoading(true)
                        setTimeout(() => {
                            setLoading(false)
                            onNavigate("register")
                            setAlreadyRegistered(true)
                        }, [5000])
                    }
                    setRequestLoading(false)
                });
        }
    }

    return (
        <>{loading ? <Loading /> :
            <>
                <BackArrow onPress={onBack} />
                <form onSubmit={!awaitResponse ? sendResponse : handleCheck} className='Email-container'>
                    {!awaitResponse ?
                        <>
                            <div className='email-content'>
                                {requestStatus && <span>Código inválido ou expirado!</span>}
                                <input
                                    ref={input_email}
                                    style={options.input}
                                    type="email"
                                    id="select-email"
                                    placeholder='Insira seu email'
                                />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
                                <p className='terms-description'>Mensagem informado ao usuário que ele receberá um código via
                                    telefone para efetuar o cadastro. Mensagem informado ao usuário
                                    que ele receberá um código via telefone para efetuar o cadastro.
                                    Mensagem informado ao usuário que ele receberá um código via telefone
                                    para efetuar o cadastro.</p>
                                {requestLoading ? <Spinner /> : <Button text={"Enviar Email"} type={"submit"} pad={"1.5rem 4rem"} variant={"primary-btn"} />}
                            </div>
                        </>
                        :
                        <>
                            <div className='email-content'>
                                <input
                                    ref={input_email_response}
                                    style={options.input}
                                    type="text"
                                    id="email-return"
                                    maxLength={4}
                                />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
                                <p className='terms-description'>Mensagem informado ao usuário que ele deve informar o código recebido via email.</p>
                                {requestLoading ? <Spinner /> : <Button text={"Confirmar Código"} type={"submit"} pad={"1.5rem 4rem"} variant={"primary-btn"} />}
                            </div>
                        </>
                    }
                    <a style={{ marginTop: '2rem', position: 'relative', bottom: -50 }} onClick={() => setAwaitResponse(false)}>Não recebeu nosso email?</a>
                </form>
            </>
        }</>
    )
}
