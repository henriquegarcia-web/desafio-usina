import { useCallback, useState } from 'react'

import * as S from './styles'

import { Header, MovieDatails, MoviesSection } from '@/components'

import {
  useDeleteMovie,
  useGetAllMovies,
  useGetRecommendedMovies
} from '@/hooks/data/useMovie'
import { useAuth } from '@/contexts/AuthProvider'

import { IMovie } from '@/@types/globals'

interface ILibraryScreen {}

const LibraryScreen = ({}: ILibraryScreen) => {
  const { user } = useAuth()
  const { mutate: deleteMovie } = useDeleteMovie()

  const savedMovies = useGetAllMovies(user ? user.id : '')
  const recommendedMovies = useGetRecommendedMovies(user ? user.id : '')

  const [isAddMovieModalOpen, setIsAddMovieModalOpen] = useState(false)
  const [selectedMovie, setSelectedMovie] = useState<IMovie | null>(null)

  const handleOpenModal = () => setIsAddMovieModalOpen(true)
  const handleOpenEditModal = (movie: IMovie) => {
    setSelectedMovie(movie)
    setIsAddMovieModalOpen(true)
  }
  const handleCloseModal = () => setIsAddMovieModalOpen(false)

  const handleSelectMovie = (movie: IMovie | null) => setSelectedMovie(movie)

  const handleDeleteMovie = useCallback(() => {
    if (!selectedMovie) return

    deleteMovie({
      id: selectedMovie.movie_id,
      userId: selectedMovie.user_id
    })

    setSelectedMovie(null)
    handleCloseModal()
  }, [selectedMovie])

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
          handleEditMovie={() => handleOpenEditModal(selectedMovie)}
          handleDeleteMovie={handleDeleteMovie}
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
