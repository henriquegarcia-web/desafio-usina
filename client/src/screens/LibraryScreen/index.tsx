import { useState } from 'react'

import * as S from './styles'

import { Header, MovieDatails, MoviesSection } from '@/components'

import { useGetAllMovies, useGetRecommendedMovies } from '@/hooks/data/useMovie'
import { useAuth } from '@/contexts/AuthProvider'

import { IMovie } from '@/@types/globals'

interface ILibraryScreen {}

const LibraryScreen = ({}: ILibraryScreen) => {
  const { user } = useAuth()

  const savedMovies = useGetAllMovies(user ? user.id : '')
  const recommendedMovies = useGetAllMovies(user ? user.id : '')

  const [isAddMovieModalOpen, setIsAddMovieModalOpen] = useState(false)
  const [selectedMovie, setSelectedMovie] = useState<IMovie | null>(null)

  const handleSelectMovie = (movie: IMovie | null) => setSelectedMovie(movie)

  const handleOpenModal = (movie?: IMovie) => {
    if (!!movie) setSelectedMovie(movie)
    setIsAddMovieModalOpen(true)
  }
  const handleCloseModal = () => setIsAddMovieModalOpen(false)

  const isLoading = savedMovies.isLoading || recommendedMovies.isLoading
  const error = savedMovies.error || recommendedMovies.error

  if (isLoading) return <div>Carregando...</div>
  if (error) return <div>Erro ao carregar filmes.</div>

  return (
    <S.LibraryScreen>
      <Header />

      {!!selectedMovie && (
        <MovieDatails
          selectedMovie={selectedMovie}
          handleEditMovie={() => handleOpenModal(selectedMovie)}
          handleCloseView={() => handleSelectMovie(null)}
        />
      )}

      <S.LibraryScreenWrapper>
        <MoviesSection
          moviesData={savedMovies.data || []}
          sectionId="saved_movies"
          selectedMovie={selectedMovie}
          isAddMovieModalOpen={isAddMovieModalOpen}
          handleOpenModal={handleOpenModal}
          handleCloseModal={handleCloseModal}
          handleSelectMovie={handleSelectMovie}
        />
        <MoviesSection
          moviesData={recommendedMovies.data || []}
          sectionId="recommended_movies"
          selectedMovie={selectedMovie}
          isAddMovieModalOpen={isAddMovieModalOpen}
          handleOpenModal={handleOpenModal}
          handleCloseModal={handleCloseModal}
          handleSelectMovie={handleSelectMovie}
        />
      </S.LibraryScreenWrapper>
    </S.LibraryScreen>
  )
}

export default LibraryScreen
