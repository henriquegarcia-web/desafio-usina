import api from '@/lib/fetch'

import { IRatingInput } from '@/@types/globals'

const getMovieRatings = async (movieId: string) => {
  try {
    const response = await api.get(`/ratings/${movieId}`)
    return response.data.ratings
  } catch (error: any) {
    throw error.response?.data || error
  }
}

const addRating = async (ratingData: IRatingInput) => {
  try {
    const response = await api.post('/ratings', ratingData)
    return response.data.response
  } catch (error: any) {
    throw error.response?.data || error
  }
}

export { getMovieRatings, addRating }
