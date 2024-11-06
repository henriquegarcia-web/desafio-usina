import api from '@/lib/fetch'

import { IMovie, IMovieInput, IMovieFilter } from '@/@types/globals'

const getAllMovies = async (
  userId: string,
  filters?: IMovieFilter
): Promise<IMovie[]> => {
  try {
    const response = await api.get(`/movies/user/${userId}`, {
      params: filters
    })
    return response.data
  } catch (error: any) {
    throw error.response?.data || error
  }
}

const getMovieById = async (id: string): Promise<IMovie> => {
  try {
    const response = await api.get(`/movies/${id}`)
    return response.data
  } catch (error: any) {
    throw error.response?.data || error
  }
}

const createMovie = async (
  userId: string,
  movieData: IMovieInput
): Promise<IMovie> => {
  try {
    const response = await api.post(`/movies`, { userId, ...movieData })
    return response.data
  } catch (error: any) {
    throw error.response?.data || error
  }
}

const updateMovie = async (
  id: string,
  userId: string,
  movieData: Partial<IMovieInput>
): Promise<IMovie> => {
  try {
    const response = await api.put(`/movies/${id}`, { userId, ...movieData })
    return response.data
  } catch (error: any) {
    throw error.response?.data || error
  }
}

const deleteMovie = async (id: string, userId: string): Promise<IMovie> => {
  try {
    const response = await api.delete(`/movies/${id}/user/${userId}`)
    return response.data
  } catch (error: any) {
    throw error.response?.data || error
  }
}

const getRecommendedMovies = async (userId: string): Promise<IMovie[]> => {
  try {
    const response = await api.get(`/movies/recommendations/${userId}`)
    return response.data
  } catch (error: any) {
    throw error.response?.data || error
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
