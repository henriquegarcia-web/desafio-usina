import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  useEffect
} from 'react'

import {
  login as loginService,
  register as registerService,
  verifyToken
} from '@/services/auth'

import { toast } from 'react-toastify'

export interface IAuthContextData {
  isUserLogged: boolean
  user: { id: string; email: string; name: string } | null
  handleLogin: (credentials: {
    email: string
    password: string
  }) => Promise<boolean>
  handleRegister: (userData: {
    username: string
    email: string
    password: string
  }) => Promise<boolean>
  handleLogout: () => void
}

export const AuthContext = createContext<IAuthContextData>(
  {} as IAuthContextData
)

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isUserLogged, setIsUserLogged] = useState<boolean>(false)
  const [token, setToken] = useState<string | null>(null)
  const [user, setUser] = useState<{
    id: string
    email: string
    name: string
  } | null>(null)

  const handleLogin = async (credentials: {
    email: string
    password: string
  }) => {
    try {
      const response = await loginService(credentials)
      const { token } = response
      console.log('Received token:', token)
      setToken(token)
      localStorage.setItem('token', token)
      await verifyCurrentUser(token)
      setIsUserLogged(true)

      // alert
      return true
    } catch (error) {
      console.error('Login failed', error)

      // alert
      return false
    }
  }

  const handleRegister = async (userData: {
    username: string
    email: string
    password: string
  }) => {
    try {
      const response = await registerService(userData)
      const { token } = response
      console.log('Received token:', token)
      setToken(token)
      localStorage.setItem('token', token)
      await verifyCurrentUser(token)
      setIsUserLogged(true)

      // alert
      return true
    } catch (error) {
      console.error('Registration failed', error)

      // alert
      return false
    }
  }

  const handleLogout = () => {
    setToken(null)
    setUser(null)
    localStorage.removeItem('token')
    setIsUserLogged(false)
  }

  const verifyCurrentUser = async (token: string) => {
    try {
      const response = await verifyToken(token)
      setUser({
        id: response.userId,
        email: response.email,
        name: response.name
      })
    } catch (error) {
      console.error('Token verification failed', error)
      handleLogout()
    }
  }

  useEffect(() => {
    const storedToken = localStorage.getItem('token')
    if (storedToken) {
      setToken(storedToken)
      verifyCurrentUser(storedToken)
      setIsUserLogged(true)
    }
  }, [])

  const AuthContextData: IAuthContextData = useMemo(() => {
    return {
      isUserLogged,
      user,
      handleLogin,
      handleRegister,
      handleLogout
    }
  }, [isUserLogged, user])

  return (
    <AuthContext.Provider value={AuthContextData}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(): IAuthContextData {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within a AuthProvider')
  return context
}

export { AuthProvider, useAuth }
