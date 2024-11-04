import { useQuery, useMutation } from '@tanstack/react-query'
import { getMovieRatings, addRating } from '@/services/rating'

const useGetMovieRatings = (movieId: string) => {
  return useQuery({
    queryKey: ['ratings', movieId],
    queryFn: async () => getMovieRatings(movieId)
  })
}

const useAddRating = () => {
  return useMutation({
    mutationFn: async (data: { movieId: string; rating: number }) =>
      addRating(data.movieId, data.rating)
  })
}

export { useGetMovieRatings, useAddRating }
