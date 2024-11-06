import api from '@/lib/fetch'

const fetchMovieSuggestions = async (query: string) => {
  try {
    const response = await api.get(`/tmdb/search?query=${query}`)
    return response.data
  } catch (error: any) {
    throw error.response?.data || error
  }
}

export { fetchMovieSuggestions }
