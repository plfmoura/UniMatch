import React, { useEffect, useRef, useState } from 'react'
import Button from '../../../components/Button'
import BackArrow from '../../../components/BackArrow'
import './styles.css'
import Loading from '../../../components/Loading'
import { setWarning } from '../../../services/usableFunctions'

export default function AuthenticateEmail({ onPress, onBack, onNavigate }) {
    const [awaitResponse, setAwaitResponse] = useState(false)
    const [loading, setLoading] = useState(false)
    const input_email = useRef(null)
    const input_email_response = useRef(null)

    useEffect(() => {
        // to put focus into input when component mount 
            input_email.current && input_email.current.focus()
            if(input_email_response.current){
                input_email_response.current.focus();
                input_email_response.current.value = ""
            }
    }, [awaitResponse])

    const options = {
        input: {
            fontSize: !awaitResponse ? "1.3rem" : "3rem",
        },
    }

    const onSubmit = (e) => {
        e.preventDefault(e)
        let inputEmail = input_email.current

        if (inputEmail.value == "") {
            inputEmail.focus()
            setWarning(inputEmail)
            return
        } else {
            console.log(`email enviado, para ${inputEmail.value}`)
            setAwaitResponse(true)
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
            console.log(`O código ${inputResponse.value} é válido!`)
            inputResponse.value = ""
            onPress()
            setLoading(true)
            setTimeout(() => {
                setLoading(false)
                onNavigate()
            }, [5000])
        }
    }

    return (
        <>{loading ? <Loading /> :
            <>
                <BackArrow onPress={onBack} />
                <form onSubmit={!awaitResponse ? onSubmit : handleCheck} className='Email-container'>
                    {!awaitResponse ?
                        <>
                            <div className='email-content'>
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
                                <Button text={"Enviar Email"} type={"submit"} pad={"1.5rem 4rem"} variant={"primary-btn"} />
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
                                <Button text={"Confirmar Código"} type={"submit"} pad={"1.5rem 4rem"} variant={"primary-btn"} />
                            </div>
                        </>
                    }
                    <a style={{ marginTop: '2rem', position: 'relative', bottom: -50 }} onClick={() => setAwaitResponse(false)}>Não recebeu nosso email?</a>
                </form>
            </>
        }</>
    )
}
