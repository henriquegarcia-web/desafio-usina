import { useQuery, useMutation } from '@tanstack/react-query'
import {
  getAllMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
  getRecommendedMovies
} from '@/services/movie'

const useGetAllMovies = () => {
  return useQuery({
    queryKey: ['movies'],
    queryFn: async () => getAllMovies()
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
    mutationFn: async (movieData: { title: string; genre: string }) =>
      createMovie(movieData)
  })
}

const useUpdateMovie = () => {
  return useMutation({
    mutationFn: async (data: { id: string; movieData: any }) =>
      updateMovie(data.id, data.movieData)
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
