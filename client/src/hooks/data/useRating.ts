import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getMovieRatings, addRating } from '@/services/rating'

import { IRatingInput } from '@/@types/globals'

const useGetMovieRatings = (movieId: string) => {
  return useQuery({
    queryKey: ['ratings', movieId],
    queryFn: () => getMovieRatings(movieId)
  })
}

const useAddRating = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (ratingData: IRatingInput) => addRating(ratingData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['movies'] })
    }
  })
}

export { useGetMovieRatings, useAddRating }
