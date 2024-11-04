import { useQuery } from '@tanstack/react-query'
import { fetchTemplate } from '@/services/template'

const useGetSavedMovies = () => {
  return useQuery({
    queryKey: ['template'],
    queryFn: async () => fetchTemplate()
  })
}

const useGetRecommendedMovies = () => {
  return useQuery({
    queryKey: ['template'],
    queryFn: async () => fetchTemplate()
  })
}

export { useGetSavedMovies, useGetRecommendedMovies }
