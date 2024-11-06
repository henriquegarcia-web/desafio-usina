import api from '@/lib/fetch'

const fetchGenres = async (): Promise<any[]> => {
  try {
    const response = await api.get('/genres')
    return response.data
  } catch (error: any) {
    throw error.response?.data || error
  }
}

export { fetchGenres }
