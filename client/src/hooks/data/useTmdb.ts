import { useQuery } from '@tanstack/react-query'
import { fetchMovieSuggestions } from '@/services/tmdb'

const useFetchMovieSuggestions = (query: string) => {
  return useQuery({
    queryKey: ['tmdb', query],
    queryFn: async () => fetchMovieSuggestions(query),
    enabled: !!query
  })
}

export { useFetchMovieSuggestions }
