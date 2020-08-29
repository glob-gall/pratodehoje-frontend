import React, { createContext, useCallback } from 'react'
import api from '../services/api'

interface Credentials {
  email: string
  password: string
}
interface User {
  id: string
  name: string
  email: string
  password: string
}
interface AuthContextData {
  name: string
  signIn(credentials: Credentials): Promise<void>
}
interface AuthUser {
  token: string
  user: User
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({ children }) => {
  const signIn = useCallback(async ({ email, password }: Credentials) => {
    const response = await api.post('/session', {
      email,
      password,
    })
    const { token, user } = response.data
    localStorage.setItem('@TodaysDinner:token', token)
    localStorage.setItem('@TodaysDinner:user', JSON.stringify(user))
  }, [])

  return (
    <AuthContext.Provider value={{ name: 'eu', signIn }}>
      {children}
    </AuthContext.Provider>
  )
}
