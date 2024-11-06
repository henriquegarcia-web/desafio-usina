import * as S from './styles'

import { Header, MoviesSection } from '@/components'

import { useGetAllMovies, useGetRecommendedMovies } from '@/hooks/data/useMovie'

import { useAuth } from '@/contexts/AuthProvider'

interface ILibraryScreen {}

const LibraryScreen = ({}: ILibraryScreen) => {
  const { user } = useAuth()

  if (!user) return <div>Carregando...</div>

  const {
    data: savedMoviesData,
    fetchStatus: savedMoviesStatus,
    error: savedMoviesError,
    isLoading: savedMoviesIsLoading
  } = useGetAllMovies(user.id)

  const {
    data: recommendedMoviesData,
    fetchStatus: recommendedMoviesStatus,
    error: recommendedMoviesError,
    isLoading: recommendedMoviesIsLoading
  } = useGetAllMovies(user.id)

  if (savedMoviesIsLoading || recommendedMoviesIsLoading)
    return <div>Carregando...</div>
  if (savedMoviesError || recommendedMoviesError)
    return <div>Erro ao carregar filmes.</div>

  return (
    <S.LibraryScreen>
      <Header />

      <S.LibraryScreenWrapper>
        <MoviesSection moviesData={savedMoviesData} sectionId="saved_movies" />
        <MoviesSection
          moviesData={recommendedMoviesData}
          sectionId="recommended_movies"
        />
      </S.LibraryScreenWrapper>
    </S.LibraryScreen>
  )
}

export default LibraryScreen
