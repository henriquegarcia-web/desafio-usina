import { useMutation } from '@tanstack/react-query'
import { register, login } from '@/services/auth'

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
  return useMutation({
    mutationFn: async (credentials: { email: string; password: string }) =>
      login(credentials)
  })
}

export { useRegister, useLogin }
