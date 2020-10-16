import React, { createContext, useCallback, useState, useContext } from 'react'
import api from '../services/api'

interface Credentials {
  email: string
  password: string
}
interface User {
  id: string
  name: string
  email: string
  avatar_url: string
  password: string
}
interface AuthContextData {
  user: User
  signIn(credentials: Credentials): Promise<void>
  signUp(): void
  updateUser(user: User): void
}
interface AuthUser {
  token: string
  user: User
  expiresIn: string
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext)

  return context
}

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState(() => {
    const token = localStorage.getItem('@TodaysDinner:token')
    const user = localStorage.getItem('@TodaysDinner:user')
    const expiresIn = localStorage.getItem('@TodaysDinner:expiresIn')

    if (!expiresIn) {
      return {} as AuthUser
    }
    const datenow = new Date()
    const time = datenow.getTime() - new Date(expiresIn).getTime()
    const timeInDays = time / (1000 * 3600 * 24)

    if (timeInDays >= 1) {
      localStorage.removeItem('@TodaysDinner:token')
      localStorage.removeItem('@TodaysDinner:user')
      localStorage.removeItem('@TodaysDinner:expiresIn')
    }

    if (token && user && expiresIn) {
      api.defaults.headers.authorization = `Bearer ${token}`
      return { token, user: JSON.parse(user), expiresIn }
    }
    return {} as AuthUser
  })

  const signIn = useCallback(async ({ email, password }: Credentials) => {
    const response = await api.post('/session', {
      email,
      password,
    })

    const expiresIn = new Date().toString()
    const { token, user } = response.data
    localStorage.setItem('@TodaysDinner:token', token)
    localStorage.setItem('@TodaysDinner:user', JSON.stringify(user))
    localStorage.setItem('@TodaysDinner:expiresIn', expiresIn)

    api.defaults.headers.authorization = `Bearer ${token}`

    setData({ token, user, expiresIn })
  }, [])

  const signUp = useCallback(() => {
    localStorage.removeItem('@TodaysDinner:token')
    localStorage.removeItem('@TodaysDinner:user')
    localStorage.removeItem('@TodaysDinner:expiresIn')

    setData({} as AuthUser)
  }, [])

  const updateUser = useCallback(
    (user: User) => {
      setData({ user, token: data.token, expiresIn: data.expiresIn })
      localStorage.setItem('@TodaysDinner:user', JSON.stringify(user))
    },
    [data],
  )

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signUp, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  )
}
