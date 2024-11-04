import * as S from './styles'

import { Header, MoviesSection } from '@/components'

import { useGetAllMovies, useGetRecommendedMovies } from '@/hooks/data/useMovie'

interface ILibraryScreen {}

const LibraryScreen = ({}: ILibraryScreen) => {
  const {
    data: savedMoviesData,
    fetchStatus: savedMoviesStatus,
    error: savedMoviesError,
    isLoading: savedMoviesIsLoading
  } = useGetAllMovies()

  const {
    data: recommendedMoviesData,
    fetchStatus: recommendedMoviesStatus,
    error: recommendedMoviesError,
    isLoading: recommendedMoviesIsLoading
  } = useGetAllMovies()

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
