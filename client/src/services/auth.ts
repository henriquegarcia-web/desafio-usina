import api from '@/lib/fetch'

const register = async (userData: { username: string; password: string }) => {
  const response = await api.post('/auth/register', userData)
  return response.data
}

const login = async (credentials: { username: string; password: string }) => {
  const response = await api.post('/auth/login', credentials)
  return response.data
}

export { register, login }
