import { HashRouter, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import Login from './pages/login'
import Register from './pages/Register'
import Home from './pages/Home'
import { useEffect, useState } from 'react'
import BottomNavigation from './components/Navigation/BottomNavigation'
import TopNavigation from './components/Navigation/TopNavigation'

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
        <>
          <TopNavigation />
          <Routes>
            <Route exact path="/home" element={<Home />}></Route>
          </Routes>
          <BottomNavigation />
        </>
      }
    </HashRouter>
  )
}

export default App
