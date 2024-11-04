import { useState } from 'react'

import * as S from './styles'
import { FiPlus } from 'react-icons/fi'

import { Modal, MovieCard, SearchTmdb } from '@/components'

import {
  useGetSavedMovies,
  useGetRecommendedMovies
} from '@/hooks/data/useMovie'

interface IMoviesSection {
  sectionId: 'saved_movies' | 'recommended_movies'
}

const MoviesSection = ({ sectionId }: IMoviesSection) => {
  const [isAddMovieModalOpen, setIsAddMovieModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsAddMovieModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsAddMovieModalOpen(false)
  }

  const {
    data: moviesData,
    error,
    isLoading
  } = sectionId === 'saved_movies'
    ? useGetSavedMovies()
    : useGetRecommendedMovies()

  const headerTitle =
    sectionId === 'saved_movies' ? 'Filmes Salvos' : 'Filmes Recomendados'

  const headerSubtitle =
    sectionId === 'saved_movies'
      ? 'Filmes que você salvou'
      : 'Filmes com base nas sua avaliações'

  if (isLoading) return <div>Carregando...</div>
  if (error) return <div>Erro ao carregar filmes.</div>

  return (
    <>
      <S.MoviesSection>
        <S.SectionHeader>
          <h2>{headerTitle}</h2>
          <p>{headerSubtitle}</p>
        </S.SectionHeader>
        <S.SectionWrapper>
          <S.MoviesList>
            {Array.isArray(moviesData) ? (
              moviesData.map((movie: any) => (
                <MovieCard key={movie.id} movie={movie} />
              ))
            ) : (
              // <div>Nenhum filme encontrado.</div>
              <></>
            )}

            {sectionId === 'saved_movies' && (
              <S.AddMovieCard onClick={handleOpenModal}>
                <FiPlus />
              </S.AddMovieCard>
            )}
          </S.MoviesList>
        </S.SectionWrapper>
      </S.MoviesSection>
      <Modal
        title="Adicionar filme"
        isOpen={isAddMovieModalOpen}
        handleClose={handleCloseModal}
      >
        <SearchTmdb />
      </Modal>
    </>
  )
}

export default MoviesSection
