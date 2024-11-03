//authcontext.ts
import { createContext, useContext } from 'react'
import { AuthContextValue } from './Login'

export const AuthContext = createContext<AuthContextValue | undefined>(
  undefined
)

export function useAuthContext() {
  const authcontextvalue = useContext(AuthContext)
  if (authcontextvalue === undefined) {
    throw new Error(
      'useAuthContext must be used within an AuthContext Provider'
    )
  }
  return authcontextvalue
}