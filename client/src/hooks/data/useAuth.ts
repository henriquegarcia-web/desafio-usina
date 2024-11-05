import { useMutation } from '@tanstack/react-query'
import { register, login as loginService } from '@/services/auth'
import { useAuth } from '@/contexts/AuthProvider'

const useRegister = () => {
  return useMutation({
    mutationFn: async (userData: {
      username: string
      email: string
      password: string
    }) => register(userData)
  })
}

const useLogin = () => {
  const { login } = useAuth()
  return useMutation({
    mutationFn: async (credentials: { username: string; password: string }) =>
      login(credentials)
  })
}

export { useRegister, useLogin }
