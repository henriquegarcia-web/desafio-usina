import * as S from './styles'

import { Button } from '@/components'

import { formatMinutesToHours } from '@/utils/functions/formatTime'

import { IMovie } from '@/@types/globals'

interface IMovieDatails {
  selectedMovie: IMovie
  handleEditMovie: () => void
  handleDeleteMovie: () => void
}

const MovieDatails = ({
  selectedMovie,
  handleEditMovie,
  handleDeleteMovie
}: IMovieDatails) => {
  return (
    <S.MovieDatails>
      <S.MovieDatailsWrapper>
        <S.MovieIndicators>
          <p>{selectedMovie.genre}</p>
          <span>|</span>
          <p>{selectedMovie.year}</p>
          <span>|</span>
          <p>{formatMinutesToHours(selectedMovie.duration)}</p>
        </S.MovieIndicators>
        <S.MovieTitle>{selectedMovie.title}</S.MovieTitle>
        <S.MovieDescription>{selectedMovie.description}</S.MovieDescription>
        <S.MovieCtas>
          <Button
            type="button"
            mode="default"
            label="Editar"
            onClick={handleEditMovie}
          />
          <Button
            type="button"
            mode="outlined"
            label="Deletar"
            onClick={handleDeleteMovie}
          />
        </S.MovieCtas>
      </S.MovieDatailsWrapper>

      <S.MoviesBackdrop>
        <img src="/background/bg_movies.png" alt="" />
      </S.MoviesBackdrop>
    </S.MovieDatails>
  )
}

export default MovieDatails
