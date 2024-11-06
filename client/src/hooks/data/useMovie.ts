import { useQuery, useMutation } from '@tanstack/react-query'
import {
  getAllMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
  getRecommendedMovies
} from '@/services/movie'

import { IMovie, IMovieFilter } from '@/@types/globals'

const useGetAllMovies = (userId: string, filters?: IMovieFilter) => {
  return useQuery<IMovie[]>({
    queryKey: ['movies', userId, filters],
    queryFn: () => getAllMovies(userId, filters),
    enabled: !!userId
  })
}

const useGetMovieById = (id: string) => {
  return useQuery({
    queryKey: ['movie', id],
    queryFn: async () => getMovieById(id)
  })
}

const useCreateMovie = () => {
  return useMutation({
    mutationFn: async (data: {
      userId: string
      movieData: {
        title: string
        description: string
        genre: string
        year: number
        duration: number
      }
    }) => createMovie(data.userId, data.movieData)
  })
}

const useUpdateMovie = () => {
  return useMutation({
    mutationFn: async (data: {
      id: string
      userId: string
      movieData: {
        title?: string
        description?: string
        genre?: string
        year?: number
        duration?: number
      }
    }) => updateMovie(data.id, data.userId, data.movieData)
  })
}

const useDeleteMovie = () => {
  return useMutation({
    mutationFn: async (data: { id: string; userId: string }) =>
      deleteMovie(data.id, data.userId)
  })
}

const useGetRecommendedMovies = (userId: string) => {
  return useQuery({
    queryKey: ['recommendedMovies', userId],
    queryFn: async () => getRecommendedMovies(userId),
    enabled: !!userId
  })
}

export {
  useGetAllMovies,
  useGetMovieById,
  useCreateMovie,
  useUpdateMovie,
  useDeleteMovie,
  useGetRecommendedMovies
}
