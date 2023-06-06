import React, { useContext, useEffect, useRef, useState } from 'react'
import './register.css'
import Button from '../../components/Button'
import AppLogo from '../../components/AppLogo'
import { setWarning } from '../../services/usableFunctions'
import axios from 'axios'
import { setUser } from '../../reducer/userReducer'
import { useDispatch, useSelector } from 'react-redux'
import { RegisterContext } from '../../contexts/RegisterContext'
import { useNavigate } from 'react-router-dom'

export default function Register() {
  const [initialState, setInitialState] = useState(true);
  const [userName, setUserName] = useState();
  const [userImage, setUserImage] = useState("");
  const [userId, setUserId] = useState(null)

  const navigate = useNavigate()

  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { user } = state.user;

  const { alreadyRegistered, setAlreadyRegistered } = useContext(RegisterContext)

  const form_store_name = useRef(null);
  const form_store_last = useRef(null);
  const form_store_date = useRef(null);
  const form_store_gender = useRef(null);

  const form_register = useRef(null);

  useEffect(() => {
    getData()
    // alreadyRegistered ? setInitialState(false) : setInitialState(true)
  }, []);

  const getData = () => {
    let user
    // to get data from 403 response 
    if (JSON.parse(localStorage.getItem('uni-match-user'))) {
      user = JSON.parse(localStorage.getItem('uni-match-user'))
      dispatch(setUser(user))
      // to put user name into second register view 
      setUserName(user.name && user.name)
      setUserId(user._id)
      setAlreadyRegistered(true)
      setInitialState(false)
      console.log(user)
    } else {
      null
    }
  }

  const storeData = (e) => {
    e.preventDefault(e)
    let name = form_store_name.current
    let lastName = form_store_last.current
    let date = form_store_date.current
    let gender = form_store_gender.current
    let formatedBirthDate = new Date(date.value).getTime()

    if (name.value === "") {
      name.focus()
      setWarning(name)
      return
    } else if (lastName.value === "") {
      lastName.focus()
      setWarning(lastName)
      return
    } else if (date.value === "") {
      date.focus()
      setWarning(date)
      return
    } else if (gender.value === "default") {
      gender.focus()
      setWarning(gender)
      return
    } else {
      const options = {
        method: "POST",
        url: `${import.meta.env.VITE_BASE_URL}/register_part1`,
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          email: "plfmoura96@gmail.com",
          phone: "",
          name: `${name.value}`,
          lastName: `${lastName.value}`,
          birth_date: formatedBirthDate,
          gender: `${gender.value}`,
        }
      };
      axios.request(options)
        .then(function (response) {
          setUserId(response.data.id)
          setUserName(name.value)
          setInitialState(false)
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault(e)
    console.log(userId)
    console.log(userImage)
    const options = {
      method: "PATCH",
      url: `${import.meta.env.VITE_BASE_URL}/register_part2/${userId}`,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        id_user: `${userId}`,
        image: userImage
      }
    };
    axios.request(options)
      .then(function (response) {
        console.log(response)
        navigate("/lounge")
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  const checkDefaultValues = (check) => {
    if (check != "default value") {
      return check
    } else {
      return null
    }
  }

  return (
    <div className='Register-container'>
      <AppLogo objectName={true} />
      {initialState ? <form className='formRegister' onSubmit={storeData} >
        <span className="descriptionRegister">
          <p className="description">Certo, vamos prosseguir com seu cadastro. Precisamos de algumas informações...</p>
        </span>
        <div className="input-container">
          <input className='inputTransparent' defaultValue={user && checkDefaultValues(user.name)} ref={form_store_name} type="text" placeholder="Digite seu nome..."></input>
          <input className='inputTransparent' defaultValue={user && checkDefaultValues(user.lastName)} ref={form_store_last} type="text" placeholder="Aqui seu sobrenome..."></input>
          <input className='inputTransparent' ref={form_store_date} type="date" ></input>
          <div>
            <label htmlFor="gender" className='input-gender-title'>Qual sua identidade de gênero?</label>
            <select className='inputTransparent' ref={form_store_gender}>
              <option value="default">Selecione</option>
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
            <img src={userImage ? URL.createObjectURL(userImage) : ""} alt="" className='selected-image' />
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
