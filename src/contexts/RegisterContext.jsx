import React, { useState } from 'react'
import { createContext } from 'react'

export const RegisterContext = createContext()

export const RegisterProvider = ({ children }) => {
  const [alreadyRegistered, setAlreadyRegistered] = useState(false)

  return (
    <RegisterContext.Provider value={{
      setAlreadyRegistered,
      alreadyRegistered
    }}>
      {children}
    </RegisterContext.Provider>
  )

}
