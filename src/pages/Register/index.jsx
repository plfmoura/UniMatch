import React from 'react'
import './register.css'
import Button from '../../components/Button'
import AppLogo from '../../components/AppLogo'

export default function Register() {
  return (
    <div className='Register-container'>
      <AppLogo objectName={true} />
      {/* <form className='formRegister' action="">
        <span className="descriptionRegister">
          <a className="description">Certo, vamos prosseguir com seu cadastro, vou precisar de algumas informações...</a>
        </span>
        <div className="input-container">
          <input className='inputTransparent' type="email" placeholder="Digite seu nome..."></input>
          <input className='inputTransparent' type="email" placeholder="Aqui seu sobrenome..."></input>
          <input className='inputTransparent' type="email" placeholder="Data de nascimento..."></input>
          <input className='inputTransparent' type="email" placeholder="Como você se idêntifica?"></input>
        </div>
        <Button
          text={"CONTINUAR"}
          pad={"1.3rem 0.9rem"}
        />
      </form> */}

<form className='formRegister' action="">
        <span className="descriptionRegister">
          <p className="description">Já estamos quase lá, só mais esse detalhe aqui, USERNAME</p>
          <p className="description">vamos precisar de uma foto bem legal sua, capricha hein, ela será seu cartão de visitas...</p>
        </span>
        <div className="input-container">
          <input className='inputFile' type="file"></input>
        </div>
        <Button
          text={"CONTINUAR"}
          pad={"1.3rem 0.9rem"}
        />
      </form>


    </div>
  )
}
