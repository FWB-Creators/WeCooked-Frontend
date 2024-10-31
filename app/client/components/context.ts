//data context center
'use client'
import { createContext } from 'react'
import { ClientContextValue } from './SignUp'
import { useContext } from 'react'

//need default value by putting undefined
export const ClientContext = createContext<ClientContextValue | undefined>(
  undefined
)

export function useClientContextValue() {
  const clientcontextvalue = useContext(ClientContext)

  if (clientcontextvalue === undefined) {
    throw new Error('useClientContextValue must be used with a signUp context')
  }

  return clientcontextvalue
}
