import api from '@/lib/fetch'

const fetchGenres = async (): Promise<any[]> => {
  try {
    const response = await api.get('/genres')
    return response.data
  } catch (error) {
    console.error('Erro ao buscar gêneros:', error)
    return []
  }
}

export { fetchGenres }
