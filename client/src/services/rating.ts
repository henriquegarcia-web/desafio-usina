import api from '@/lib/fetch'

const getMovieRatings = async (movieId: string) => {
  try {
    const response = await api.get(`/ratings/${movieId}`)
    return response.data
  } catch (error: any) {
    throw error.response?.data || error
  }
}

const addRating = async (movieId: string, rating: number) => {
  try {
    const response = await api.post(`/ratings/${movieId}`, { rating })
    return response.data
  } catch (error: any) {
    throw error.response?.data || error
  }
}

export { getMovieRatings, addRating }
