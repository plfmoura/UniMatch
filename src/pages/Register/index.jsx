<<<<<<< HEAD
import React, { useContext, useEffect, useRef, useState } from 'react'
=======
import React, { useEffect, useRef, useState } from 'react'
>>>>>>> 46ae7041ad74d2a8b5736868cf9cd247f23465e1
import './register.css'
import Button from '../../components/Button'
import AppLogo from '../../components/AppLogo'
import { setWarning } from '../../services/usableFunctions'
import axios from 'axios'
import { setUser } from '../../reducer/userReducer'
import { useDispatch, useSelector } from 'react-redux'
<<<<<<< HEAD
import { RegisterContext } from '../../contexts/RegisterContext'
import { useNavigate } from 'react-router-dom'
import Spinner from '../../components/Spinner'
=======
>>>>>>> 46ae7041ad74d2a8b5736868cf9cd247f23465e1

export default function Register() {
  const [initialState, setInitialState] = useState(true);
  const [userName, setUserName] = useState();
  const [userImage, setUserImage] = useState("");
<<<<<<< HEAD
  const [userId, setUserId] = useState(null)
  const [requestLoading, setRequestLoading] = useState(false)

  const navigate = useNavigate()

  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { user } = state.user;

  const { setAlreadyRegistered, setShowLoading } = useContext(RegisterContext)

  const form_store_name = useRef(null);
  const form_store_last = useRef(null);
  const form_store_date = useRef(null);
  const form_store_gender = useRef(null);

  const form_register = useRef(null);

  useEffect(() => {
    getData()
    // alreadyRegistered ? setInitialState(false) : setInitialState(true)
    setRequestLoading(false)
  }, []);

  useEffect(() => {
    if (user) {
      console.log(user)
      setUserName(user.name)
      setUserId(user._id)
    }
  }, [user]);

  const getData = () => {
    let storageUser
    // to get data from 403 response 
    if (JSON.parse(localStorage.getItem('uni-match-user'))) {
      storageUser = JSON.parse(localStorage.getItem('uni-match-user'))
      dispatch(setUser(storageUser))
      // to put user name into second register view 
      setAlreadyRegistered(true)
      setInitialState(false)
    }
=======
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { user } = state.user;

  const form_store_name = useRef(null);
  const form_store_last = useRef(null);
  const form_store_date = useRef(null);
  const form_store_gender = useRef(null);

  const form_register = useRef(null);


  useEffect(() => {
    getData()
  }, []);

  const getData = () => {
    let user = JSON.parse(localStorage.getItem('uni-match-user'))
    dispatch(setUser(user))
>>>>>>> 46ae7041ad74d2a8b5736868cf9cd247f23465e1
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
<<<<<<< HEAD
      setRequestLoading(true)
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
          setTimeout(() => {
            setRequestLoading(false)
            setInitialState(false)
          }, [2000])
        })
        .catch(function (error) {
          setRequestLoading(false)
        });
=======
      // const options = {
      //   method: "PATCH ",
      //   url: `${import.meta.env.VITE_BASE_URL}/register_part1`,
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   data: {
      //     email: "plfmoura96@gmail.com",
      //     phone: "21983652965",
      //     name: `${name.value}`,
      //     lastName: `${lastName.value}`,
      //     birth_date: 0,
      //     gender: `${gender.value}`,
      //   }
      // };
      // axios.request(options)
      //   .then(function (response) {
      //     console.log(response)
      //     setUserName(name.value)
      //     setInitialState(false)
      //   })
      //   .catch(function (error) {
      //     console.error(error);
      //   });
>>>>>>> 46ae7041ad74d2a8b5736868cf9cd247f23465e1
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault(e)
<<<<<<< HEAD
    let imageFormated = new FormData();
    imageFormated.append("image", userImage);
    setRequestLoading(true)

    const options = {
      method: "PATCH",
      url: `${import.meta.env.VITE_BASE_URL}/register_part2/${userId}`,
      headers: {
        'Content-Type': 'multipart/form-data; boundary=---011000010111000001101001',
      },
      data: imageFormated
    };
    axios.request(options)
      .then(function (response) {
        setRequestLoading(true)
        navigate("/lounge")
        // to show loading screen after enter into lounge page 
        setShowLoading(true)
        setTimeout(() => {
          setShowLoading(false)
        }, [4000])
      })
      .catch(function (error) {
        setRequestLoading(false)
      });
=======
    setInitialState(true)
>>>>>>> 46ae7041ad74d2a8b5736868cf9cd247f23465e1
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
<<<<<<< HEAD
          <input className='inputTransparent' defaultValue={user && checkDefaultValues(user.name)} ref={form_store_name} type="text" placeholder="Digite seu nome..."></input>
          <input className='inputTransparent' defaultValue={user && checkDefaultValues(user.lastName)} ref={form_store_last} type="text" placeholder="Aqui seu sobrenome..."></input>
=======
          <input className='inputTransparent' defaultValue={checkDefaultValues(user.name)} ref={form_store_name} type="text" placeholder="Digite seu nome..."></input>
          <input className='inputTransparent' defaultValue={checkDefaultValues(user.lastName)} ref={form_store_last} type="text" placeholder="Aqui seu sobrenome..."></input>
>>>>>>> 46ae7041ad74d2a8b5736868cf9cd247f23465e1
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
        {requestLoading ?
          <Spinner /> : <Button
            text={"CONTINUAR"}
            type={"submit"}
            variant={"primary-btn"}
            pad={"1.5rem 4rem"}
          />}
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
          {requestLoading ?
            <Spinner /> : <Button
              text={"CONTINUAR"}
              type={"submit"}
              pad={"1.5rem 4rem"}
              variant={"primary-btn"}
            />}
        </form>}
    </div>
  )
}
