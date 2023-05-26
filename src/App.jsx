import { HashRouter, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import Login from './pages/login'
import Register from './pages/Register'
import Home from './pages/Home'
import { useEffect, useState } from 'react'

function App() {
  const [user, setUser] = useState(false)

  return (
    <HashRouter>
      {!user ?
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
        </Routes>
        :
        <Routes>
          <Route exact path="/home" element={<Home />}></Route>
        </Routes>
      }
    </HashRouter>
  )
}

export default App
