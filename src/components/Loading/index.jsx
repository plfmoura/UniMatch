import React, { useEffect, useState } from 'react'
import AppLogo from '../AppLogo'
import './loading.css'
import { LoadingInfo } from './loadingText'

export default function Loading() {
  const [message, setMessage] = useState(null)

  useEffect(() => {
    let index = Math.floor(Math.random() * LoadingInfo.length)
    setMessage(LoadingInfo[index])
    console.log(index)
  },[])
  
  return (
    <div className="loading-container">
        <AppLogo animation={true}/>
        <p>{message}</p>
    </div>
  )
}
