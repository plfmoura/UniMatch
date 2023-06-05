import React, { useEffect, useRef, useState } from 'react'
import Button from '../../../components/Button'
import BackArrow from '../../../components/BackArrow'
import './styles.css'
import Loading from '../../../components/Loading'
import { setWarning } from '../../../services/usableFunctions'

export default function AuthenticateSMS({ onPress, onBack, onNavigate }) {
    const [awaitResponse, setAwaitResponse] = useState(false)
    const [loading, setLoading] = useState(false)
    const input_celRef = useRef(null)
    const input_smsRef = useRef(null)

    useEffect(() => {
        // to put focus into input when component mount 
        input_celRef.current && input_celRef.current.focus()
        input_smsRef.current && input_smsRef.current.focus()
    }, [awaitResponse])

    const options = {
        input: {
            fontSize: !awaitResponse ? "1.3rem" : "3rem",
        },
    }

    const sendResponse = (e) => {
        e.preventDefault(e)
        let inputCel = input_celRef.current

        if (inputCel.value == "" || inputCel.value.length < 11) {
            inputCel.focus()
            setWarning(inputCel)
            return
        } else {

            // const options = {
            //     method: "POST",
            //     url: `${import.meta.env.VITE_BASE_URL}/`,
            //     headers: {
            //         "Content-Type": "application/json",
            //     },
            //     data: {
            //         tel: inputCel.value,
            //     }
            // };

            console.log(`SMS enviado, para ${inputCel.value}`)
            setAwaitResponse(true)
        }
    }

    const handleCheck = (e) => {
        e.preventDefault(e)
        let inputSms = input_smsRef.current

        if (inputSms.value == "" || inputSms.value.length < 4) {
            inputSms.value = ""
            inputSms.focus()
            setWarning(inputSms)
            return
        } else {
            console.log(`O código ${inputSms.value} é válido!`)
            inputSms.value = ""
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
                <form onSubmit={!awaitResponse ? sendResponse : handleCheck} className='SMS-container'>
                    {!awaitResponse ?
                        <>
                            <div className='sms-content'>
                                <select name="country" id="select-country" style={options.input}>
                                    <option value="default">+55</option>
                                    <option value="1">+300</option>
                                    <option value="2">+201</option>
                                </select>
                                <input
                                    ref={input_celRef}
                                    style={options.input}
                                    type="tel"
                                    id="select-phone-number"
                                    placeholder='21 90000-0000'
                                    maxLength={11}
                                />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
                                <p className='terms-description'>Mensagem informado ao usuário que ele receberá um código via
                                    telefone para efetuar o cadastro. Mensagem informado ao usuário
                                    que ele receberá um código via telefone para efetuar o cadastro.
                                    Mensagem informado ao usuário que ele receberá um código via telefone
                                    para efetuar o cadastro.</p>
                                <Button text={"Enviar SMS"} type={"submit"} pad={"1.5rem 4rem"} variant={"primary-btn"} />
                            </div>
                        </>
                        :
                        <>
                            <div className='sms-content'>
                                <input
                                    ref={input_smsRef}
                                    style={options.input}
                                    type="text"
                                    id="sms-return"
                                    maxLength={4}
                                />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
                                <p className='terms-description'>Mensagem informado ao usuário que ele deve informar o código recebido via SMS.</p>
                                <Button text={"Confirmar Código"} type={"submit"} pad={"1.5rem 4rem"} variant={"primary-btn"} />
                            </div>
                        </>
                    }
                    <a style={{ marginTop: '2rem', position: 'relative', bottom: -50 }} onClick={() => setAwaitResponse(false)}>Não recebeu nosso SMS?</a>
                </form>
            </>
        }</>
    )
}
