import { useState } from 'react'

import * as S from './styles'
import { FiPlus } from 'react-icons/fi'

import {
  Dropdown,
  Input,
  TextArea,
  Modal,
  MovieCard,
  SearchTmdb,
  Button
} from '@/components'

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
        <S.SaveMovieForm>
          <S.FormInputsWrapper>
            <S.FormInputsContainer>
              <S.FormInput>
                <S.FormInputHeader>Título</S.FormInputHeader>
                <SearchTmdb />
              </S.FormInput>

              <S.FormInput>
                <S.FormInputHeader>Descrição</S.FormInputHeader>
                <TextArea placeholder="Descriação do filme" />
              </S.FormInput>
            </S.FormInputsContainer>

            <S.FormInputBanner>
              <S.FormInputHeader>Capa</S.FormInputHeader>
              <S.MovieBanner>{/* <img src="" alt="" /> */}</S.MovieBanner>
            </S.FormInputBanner>
          </S.FormInputsWrapper>

          <S.FormInput>
            <S.FormInputHeader>Gênero</S.FormInputHeader>
            <Dropdown placeholder="Selecione o gênero" />
          </S.FormInput>

          <S.FormInputsWrapper>
            <S.FormInput>
              <S.FormInputHeader>Lançamento</S.FormInputHeader>
              <Input type="number" placeholder="Ano de lançamento" />
            </S.FormInput>

            <S.FormInput>
              <S.FormInputHeader>Duração</S.FormInputHeader>
              <Input type="number" placeholder="Duração em minutos" />
            </S.FormInput>
          </S.FormInputsWrapper>

          <S.FormFooter>
            <Button type="submit" label="Adicionar" />
          </S.FormFooter>
        </S.SaveMovieForm>
      </Modal>
    </>
  )
}

export default MoviesSection
