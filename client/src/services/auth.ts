import api from '@/lib/fetch'

const register = async (userData: {
  username: string
  email: string
  password: string
}) => {
  const response = await api.post('/auth/register', userData)
  return response.data
}

const login = async (credentials: { username: string; password: string }) => {
  const response = await api.post('/auth/login', credentials)
  return response.data
}

const verifyToken = async (token: string) => {
  const response = await api.get('/auth/verify-token', {
    headers: { Authorization: `Bearer ${token}` }
  })
  return response.data
}

export { register, login, verifyToken }
