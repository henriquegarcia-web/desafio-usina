import * as S from './styles'

import { Header, MoviesSection } from '@/components'

import { useGetAllMovies, useGetRecommendedMovies } from '@/hooks/data/useMovie'

import { useAuth } from '@/contexts/AuthProvider'

interface ILibraryScreen {}

const LibraryScreen = ({}: ILibraryScreen) => {
  const { user } = useAuth()

  const savedMovies = useGetAllMovies(user ? user.id : '')
  const recommendedMovies = useGetAllMovies(user ? user.id : '')

  const isLoading = savedMovies.isLoading || recommendedMovies.isLoading
  const error = savedMovies.error || recommendedMovies.error

  if (isLoading) return <div>Carregando...</div>
  if (error) return <div>Erro ao carregar filmes.</div>

  return (
    <S.LibraryScreen>
      <Header />

      <S.LibraryScreenWrapper>
        <MoviesSection moviesData={savedMovies.data} sectionId="saved_movies" />
        <MoviesSection
          moviesData={recommendedMovies.data}
          sectionId="recommended_movies"
        />
      </S.LibraryScreenWrapper>
    </S.LibraryScreen>
  )
}

export default LibraryScreen
