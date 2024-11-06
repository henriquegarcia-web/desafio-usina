import { createContext, useContext, useMemo, useState, useEffect } from 'react'

import {
  login as loginService,
  register as registerService,
  verifyToken
} from '@/services/auth'

import { jwtDecode } from 'jwt-decode'
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
  const [tokenExpiration, setTokenExpiration] = useState<number | null>(null)

  const handleLogin = async (credentials: {
    email: string
    password: string
  }) => {
    try {
      const response = await loginService(credentials)
      const { token } = response

      const decodedToken: any = jwtDecode(token)
      setTokenExpiration(decodedToken.exp * 1000)

      await verifyCurrentUser(token)

      localStorage.setItem('token', token)
      localStorage.setItem(
        'tokenExpiration',
        (decodedToken.exp * 1000).toString()
      )
      setToken(token)
      setIsUserLogged(true)

      toast('Sucesso! Seja bem-vindo')
      return true
    } catch (error: any) {
      console.error('Falha ao realizar login', error)
      toast(error.message)
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

      const decodedToken: any = jwtDecode(token)
      setTokenExpiration(decodedToken.exp * 1000)

      console.log('TOKEN RECEBIDO: ', token)

      await verifyCurrentUser(token)

      localStorage.setItem('token', token)
      localStorage.setItem(
        'tokenExpiration',
        (decodedToken.exp * 1000).toString()
      )
      setToken(token)
      setIsUserLogged(true)

      toast('Sucesso! Seja bem-vindo')
      return true
    } catch (error: any) {
      console.error('Falha ao realizar cadastro', error)
      toast(error)
      return false
    }
  }

  const handleLogout = () => {
    setToken(null)
    setUser(null)
    setTokenExpiration(null)
    localStorage.removeItem('token')
    localStorage.removeItem('tokenExpiration')
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
      console.error('Falha na verificação do Token', error)
      handleLogout()
    }
  }

  const checkTokenValidity = () => {
    const storedToken = localStorage.getItem('token')
    const storedExpiration = localStorage.getItem('tokenExpiration')

    if (storedToken && storedExpiration) {
      const expirationTime = parseInt(storedExpiration)
      const currentTime = Date.now()

      if (currentTime > expirationTime) {
        handleLogout()
      } else {
        setToken(storedToken)
        setTokenExpiration(expirationTime)
        verifyCurrentUser(storedToken)
        setIsUserLogged(true)
      }
    }
  }

  useEffect(() => {
    checkTokenValidity()

    const interval = setInterval(checkTokenValidity, 5 * 60 * 1000)
    return () => clearInterval(interval)
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
  if (!context)
    throw new Error('useAuth precisa estar dentro de um AuthProvider')
  return context
}

export { AuthProvider, useAuth }
