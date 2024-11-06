import { useState } from 'react'

import * as S from './styles'
import { FiPlus } from 'react-icons/fi'

import { Modal, MovieCard, AddMovieForm } from '@/components'

import { getHeaderTexts } from '@/utils/functions/getHeaderTexts'

import { IMovie } from '@/@types/globals'

interface IMoviesSection {
  moviesData: IMovie[]
  sectionId: 'saved_movies' | 'recommended_movies'
  selectedMovie: IMovie | null
  isAddMovieModalOpen: boolean
  handleOpenModal: () => void
  handleCloseModal: () => void
  handleSelectMovie: (movie: IMovie) => void
}

const MoviesSection = ({
  moviesData,
  sectionId,
  selectedMovie,
  isAddMovieModalOpen,
  handleOpenModal,
  handleCloseModal,
  handleSelectMovie
}: IMoviesSection) => {
  const headerTexts = getHeaderTexts(sectionId)

  return (
    <>
      <S.MoviesSection>
        <S.SectionHeader>
          <h2>{headerTexts.title}</h2>
          <p>{headerTexts.subtitle}</p>
        </S.SectionHeader>
        <S.SectionWrapper>
          <S.MoviesList>
            {moviesData?.map((movie: IMovie) => {
              const isSelected = movie.movie_id === selectedMovie?.movie_id

              return (
                <MovieCard
                  key={movie.movie_id}
                  movie={movie}
                  active={isSelected}
                  onClick={() => handleSelectMovie(movie)}
                />
              )
            })}

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
        <AddMovieForm handleCloseModal={handleCloseModal} />
      </Modal>
    </>
  )
}

export default MoviesSection
