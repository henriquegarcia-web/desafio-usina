import { useState } from 'react'

import * as S from './styles'
import { FiPlus } from 'react-icons/fi'

import { Modal, MovieCard, AddMovieForm } from '@/components'

import { getHeaderTexts } from '@/utils/functions/getHeaderTexts'

interface IMoviesSection {
  moviesData: any
  sectionId: 'saved_movies' | 'recommended_movies'
}

const MoviesSection = ({ moviesData, sectionId }: IMoviesSection) => {
  const [isAddMovieModalOpen, setIsAddMovieModalOpen] = useState(false)

  const handleOpenModal = () => setIsAddMovieModalOpen(true)
  const handleCloseModal = () => setIsAddMovieModalOpen(false)

  const handleAddMovieSubmit = (data: any) => {
    console.log('Dados do filme adicionado:', data)
    handleCloseModal()
  }

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
        <AddMovieForm onSubmit={handleAddMovieSubmit} />
      </Modal>
    </>
  )
}

export default MoviesSection
