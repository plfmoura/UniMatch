import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/login'
import Register from './pages/Register'

function App() {
  const options = {
    container: {
      width: '100vw',
      height: '100vh',
    }
  }

  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route exact path="/register" element={<Register/>}></Route>
      </Routes>
    </HashRouter>
  )
}

export default App
