import React from 'react'
import './register.css'
import Button from '../../components/Button'

export default function Register() {
  return (
    <div className='Register-container'>
      <spam className="descriptionRegister">
        <a className="description">Certo, vamos prosseguir com seu cadastro, vou precisar de algumas informações...</a>
      </spam>
      <div className="input-container">
        <input className='inputTransparent' type="email" placeholder="Digite seu nome..."></input>
      </div>
      <div className="input-container"> 
        <input className='inputTransparent' type="email" placeholder="Aqui seu sobrenome..."></input>
      </div>
      <div className="input-container">
        <input className='inputTransparent' type="email" placeholder="Data de nascimento..."></input>
      </div>
      <div className="input-container">
        <input className='inputTransparent' type="email" placeholder="Como você se idêntifica?"></input>
      </div>

    </div>
  )
}
