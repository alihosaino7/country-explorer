
import { useContext } from 'react'
import { DarkModeContext } from '../context/DarkModeContextProvider'
import { IContext } from '../Interfaces'

export function useDarkMode() {
   return useContext(DarkModeContext) as IContext
}