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

export interface IAuthContextData {
  isUserLogged: boolean
  login: (credentials: { username: string; password: string }) => Promise<void>
  register: (userData: {
    username: string
    email: string
    password: string
  }) => Promise<void>
  logout: () => void
}

export const AuthContext = createContext<IAuthContextData>(
  {} as IAuthContextData
)

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isUserLogged, setIsUserLogged] = useState<boolean>(false)
  const [token, setToken] = useState<string | null>(null)

  const login = async (credentials: { username: string; password: string }) => {
    try {
      const response = await loginService(credentials)
      const { token } = response
      setToken(token)
      localStorage.setItem('token', token)
      setIsUserLogged(true)
    } catch (error) {
      console.error('Login failed', error)
      throw error
    }
  }

  const register = async (userData: {
    username: string
    email: string
    password: string
  }) => {
    try {
      const response = await registerService(userData)
      const { token } = response
      setToken(token)
      localStorage.setItem('token', token)
      setIsUserLogged(true)
    } catch (error) {
      console.error('Registration failed', error)
      throw error
    }
  }

  const logout = () => {
    setToken(null)
    localStorage.removeItem('token')
    setIsUserLogged(false)
  }

  useEffect(() => {
    const storedToken = localStorage.getItem('token')
    if (storedToken) {
      setToken(storedToken)
      setIsUserLogged(true)
    }
  }, [])

  const AuthContextData: IAuthContextData = useMemo(() => {
    return {
      isUserLogged,
      login,
      register,
      logout
    }
  }, [isUserLogged])

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
