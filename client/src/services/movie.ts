import api from '@/lib/fetch'

const getAllMovies = async (userId: string) => {
  try {
    const response = await api.get(`/movies/user/${userId}`)
    return response.data
  } catch (error: any) {
    throw error.response?.data.error || error
  }
}

const getMovieById = async (id: string) => {
  try {
    const response = await api.get(`/movies/${id}`)
    return response.data
  } catch (error: any) {
    throw error.response?.data.error || error
  }
}

const createMovie = async (
  userId: string,
  movieData: { title: string; genre: string; year: number; duration: number }
) => {
  try {
    const response = await api.post(`/movies`, { userId, ...movieData })
    return response.data
  } catch (error: any) {
    throw error.response?.data.error || error
  }
}

const updateMovie = async (
  id: string,
  movieData: {
    title?: string
    genre?: string
    year?: number
    duration?: number
  }
) => {
  try {
    const response = await api.put(`/movies/${id}`, movieData)
    return response.data
  } catch (error: any) {
    throw error.response?.data.error || error
  }
}

const deleteMovie = async (id: string) => {
  try {
    const response = await api.delete(`/movies/${id}`)
    return response.data
  } catch (error: any) {
    throw error.response?.data.error || error
  }
}

const getRecommendedMovies = async (userId: string) => {
  try {
    const response = await api.get(`/movies/recommendations/${userId}`)
    return response.data
  } catch (error: any) {
    throw error.response?.data.error || error
  }
}

export {
  getAllMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
  getRecommendedMovies
}
