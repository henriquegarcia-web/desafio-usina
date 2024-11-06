import api from '@/lib/fetch'

const register = async (userData: {
  username: string
  email: string
  password: string
}) => {
  try {
    const response = await api.post('/auth/register', userData)
    return response.data
  } catch (error: any) {
    throw error.response?.data || error
  }
}

const login = async (credentials: { email: string; password: string }) => {
  try {
    const response = await api.post('/auth/login', credentials)
    return response.data
  } catch (error: any) {
    throw error.response?.data || error
  }
}

const verifyToken = async (token: string) => {
  try {
    const response = await api.get('/auth/verify-token', {
      headers: { Authorization: `Bearer ${token}` }
    })
    return response.data
  } catch (error: any) {
    throw error.response?.data || error
  }
}

export { register, login, verifyToken }
