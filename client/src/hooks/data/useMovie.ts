import { useQuery, useMutation } from '@tanstack/react-query'
import {
  getAllMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
  getRecommendedMovies
} from '@/services/movie'

const useGetAllMovies = (userId: string) => {
  return useQuery({
    queryKey: ['movies', userId],
    queryFn: async () => getAllMovies(userId),
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
      movieData: {
        title?: string
        genre?: string
        year?: number
        duration?: number
      }
    }) => updateMovie(data.id, data.movieData)
  })
}

const useDeleteMovie = () => {
  return useMutation({
    mutationFn: async (id: string) => deleteMovie(id)
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
