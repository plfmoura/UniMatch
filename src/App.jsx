import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/login'
import Register from './pages/Register'
import Lounge from './pages/Lounge'

function App() {

  return (
    <HashRouter>
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
          <Route exact path="/lounge" element={<Lounge />}></Route>
        </Routes>
    </HashRouter>
  )
}

export default App
