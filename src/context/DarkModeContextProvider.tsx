import { createContext, useState } from 'react'
import { IContext } from '../Interfaces'

interface DarkModeContextProviderProps {
   children: JSX.Element
}

export const DarkModeContext = createContext<IContext | null>(null)

const DarkModeContextProvider = ({ children }: DarkModeContextProviderProps) => {

  const [dark, setDark] = useState(false)

  return (
    <DarkModeContext.Provider value={{ dark, setDark }}>
      {children}
    </DarkModeContext.Provider>
  )
}

export default DarkModeContextProvider