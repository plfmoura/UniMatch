import React, { useRef, useState } from 'react'
import './register.css'
import Button from '../../components/Button'
import AppLogo from '../../components/AppLogo'

export default function Register() {
  const [initialState, setInitialState] = useState(true)
  const [userName, setUserName] = useState()
  const [userImage, setUserImage] = useState("")

  const form_store_name = useRef(null)
  const form_store_last = useRef(null)
  const form_store_date = useRef(null)
  const form_store_gender = useRef(null)

  const form_register = useRef(null)

  const storeData = (e) => {
    setUserName(form_store_name.current.value)
    setInitialState(false)
    e.preventDefault(e)
  }

  const handleSubmit = (e) => {
    setInitialState(true)
    e.preventDefault(e)
  }

  return (
    <div className='Register-container'>
      <AppLogo objectName={true} />
      {initialState ? <form className='formRegister' onSubmit={storeData} >
        <span className="descriptionRegister">
          <a className="description">Certo, vamos prosseguir com seu cadastro, vou precisar de algumas informações...</a>
        </span>
        <div className="input-container">
          <input className='inputTransparent' ref={form_store_name} type="text" placeholder="Digite seu nome..."></input>
          <input className='inputTransparent' ref={form_store_last} type="text" placeholder="Aqui seu sobrenome..."></input>
          <input className='inputTransparent' ref={form_store_date} type="date" placeholder="Data de nascimento..."></input>
          <div>
            <label htmlFor="gender" className='input-gender-title'>Qual sua identidade de gênero?</label>
            <select className='inputTransparent' ref={form_store_gender}>
              <option value="Default">Selecione</option>
              <option value="male">Masculino</option>
              <option value="female">Feminino</option>
              <option value="nonbinary">Não-binário</option>
              <option value="agender">Agênero</option>
              <option value="genderqueer">Gênero Queer </option>
              <option value="demigender">Demigênero </option>
              <option value="genderfluid">Gênero fluido</option>
              <option value="transgender">Transgênero s</option>
              <option value="two-spirit">Dois Espíritos</option>
              <option value="pangender">Pan-gênero</option>
              <option value="neutrois">Neutrois</option>
              <option value="intersex">Intersexual</option>
              <option value="questioning">Explorando / Questionando </option>
              <option value="other">Outro</option>
              <option value="prefer not to say">Prefiro não dizer </option>
            </select>
          </div>
        </div>
        <Button
          text={"CONTINUAR"}
          type={"submit"}
          variant={"primary-btn"}
          pad={"1.5rem 4rem"}
        />
      </form>
        :
        <form className='formRegister' onSubmit={handleSubmit} ref={form_register}>
          <span className="descriptionRegister">
            <p className="description">{userName}, já estamos quase lá, só mais esse detalhe aqui </p>
            <p className="description">vamos precisar de uma foto bem legal sua, capricha hein, ela será seu cartão de visitas!</p>
          </span>
          <div className="input-image-container">
            <label
              htmlFor="file"
              className='label-input-file'
              style={{ backgroundColor: userImage ? "#45454580" : "#454545" }}
            >
              {userImage ? "Alterar arquivo" : "Selecione arquivo"}
            </label>
            <img src={userImage ? URL.createObjectURL(userImage) : ""} alt="selected image" className='selected-image' />
            <input className='inputFile' id='file' type="file" onChange={(e) => setUserImage(e.target.files[0])}></input>
          </div>
          <Button
            text={"CONTINUAR"}
            type={"submit"}
            pad={"1.5rem 4rem"}
            variant={"primary-btn"}
          />
        </form>}


    </div>
  )
}
