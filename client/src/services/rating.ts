import api from '@/lib/fetch'

const getMovieRatings = async (movieId: string) => {
  const response = await api.get(`/ratings/${movieId}`)
  return response.data
}

const addRating = async (movieId: string, rating: number) => {
  const response = await api.post(`/ratings/${movieId}`, { rating })
  return response.data
}

export { getMovieRatings, addRating }
