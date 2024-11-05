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
  user: { id: string; email: string; name: string } | null
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
  const [user, setUser] = useState<{
    id: string
    email: string
    name: string
  } | null>(null)

  const login = async (credentials: { username: string; password: string }) => {
    try {
      const response = await loginService(credentials)
      const { token } = response
      console.log('Received token:', token)
      setToken(token)
      localStorage.setItem('token', token)
      await verifyCurrentUser(token)
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
      console.log('Received token:', token)
      setToken(token)
      localStorage.setItem('token', token)
      await verifyCurrentUser(token)
      setIsUserLogged(true)
    } catch (error) {
      console.error('Registration failed', error)
      throw error
    }
  }

  const logout = () => {
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
      logout()
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
      login,
      register,
      logout
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
