import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/login'

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
      </Routes>
    </HashRouter>
  )
}

export default App
