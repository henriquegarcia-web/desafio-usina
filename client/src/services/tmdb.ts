import api from '@/lib/fetch'

const fetchMovieSuggestions = async (query: string) => {
  const response = await api.get(`/tmdb/search?query=${query}`)
  return response.data
}

export { fetchMovieSuggestions }
