import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
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
  const queryClient = useQueryClient()

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
    }) => createMovie(data.userId, data.movieData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['movies'] })
    }
  })
}

const useUpdateMovie = () => {
  const queryClient = useQueryClient()

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
    }) => updateMovie(data.id, data.userId, data.movieData),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['movies'] })
      queryClient.invalidateQueries({ queryKey: ['movie', data.movie_id] })
    }
  })
}

const useDeleteMovie = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data: { id: string; userId: string }) =>
      deleteMovie(data.id, data.userId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['movies'] })
    }
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
