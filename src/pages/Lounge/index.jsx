import React, { useContext } from 'react'
import './lounge.css'
import Loading from '../../components/Loading'
import { RegisterContext } from '../../contexts/RegisterContext'
import TopNavigation from '../../components/Navigation/TopNavigation'
import BottomNavigation from '../../components/Navigation/BottomNavigation'

export default function Lounge() {
  const { showLoading } = useContext(RegisterContext)

  return (
    <>
      {showLoading ? <Loading /> :
        <div className='Lounge-container'>
          <TopNavigation />
          <h1>Estamos no Lounge</h1>
          <BottomNavigation />
        </div>}
    </>
  )
}
