import { useQuery } from '@tanstack/react-query'
import { fetchGenres } from '@/services/genre'

const useGetGenres = () => {
  return useQuery({
    queryKey: ['genres'],
    queryFn: async () => fetchGenres()
  })
}

export { useGetGenres }
