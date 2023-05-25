import React, { useState } from 'react'
import Button from '../../../components/Button'
import BackArrow from '../../../components/BackArrow'

export default function AuthenticateSMS({ onPress, onBack, onNavigate }) {
    const [awaitResponse, setAwaitResponse] = useState(false)

    const options = {
        container: {
            height: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
            justifyContent: 'space-between'
        },
        content: {
            display: 'flex',
            gap: 10,
        },
        input: {
            background: 'transparent',
            fontSize: !awaitResponse ? "1.13rem" : "2.5rem",
            width: !awaitResponse ? null : "10rem",
            outline: 'none',
            border: 'none',
            color: '#333',
            borderBottom: '1px solid #333',
            textAlign: !awaitResponse ? null : "center"
        },
        text: {
            fontSize: '14px',
            width: '80%',
            textAlign: 'justify'
        },
    }

    const onSubmit = (e) => {
        e.preventDefault(e)
        console.log('SMS enviado, verifique seu dispositivo')
        setAwaitResponse(true)

        // get onPress function 
        onPress()
    }

    const handleCheck = (e) => {
        e.preventDefault(e)
        console.log('O SMS é inválido!')
        onNavigate()
    }

    return (
        <>
            <BackArrow onPress={onBack} />
            <form onSubmit={!awaitResponse ? onSubmit : handleCheck} className='SMS-container' style={options.container}>
                {!awaitResponse ?
                    <>
                        <div className='sms-content' style={options.content}>
                            <select name="country" id="select-country" style={options.input}>
                                <option value="default">BR +55</option>
                                <option value="1">PT +300</option>
                                <option value="2">USA +201</option>
                            </select>
                            <input style={options.input} type="text" id="select-phone-number" placeholder='Número de Telefone' />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
                            <p style={options.text}>Mensagem informado ao usuário que ele receberá um código via
                                telefone para efetuar o cadastro. Mensagem informado ao usuário
                                que ele receberá um código via telefone para efetuar o cadastro.
                                Mensagem informado ao usuário que ele receberá um código via telefone
                                para efetuar o cadastro.</p>
                            <Button text={"Enviar Código"} type={"submit"} pad={"1.5rem 4rem"} />
                        </div>
                    </>
                    :
                    <>
                        <div className='sms-content' style={options.content}>
                            <input style={options.input} type="text" id="sms-return" maxLength={3} placeholder='* * *'/>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
                            <p style={options.text}>Mensagem informado ao usuário que ele deve informar o código recebido via SMS.</p>
                            <Button text={"Confirmar Código"} type={"submit"} pad={"1.5rem 4rem"} />
                        </div>
                    </>
                }
                <a style={{ marginTop: '2rem', position: 'relative', bottom: -50 }} onClick={() => setAwaitResponse(false)}>Não recebeu nosso SMS?</a>
            </form>
        </>
    )
}
