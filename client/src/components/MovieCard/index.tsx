import * as S from './styles'

import { IMovie } from '@/@types/globals'

interface IMovieCard {
  movie: IMovie
}

const MovieCard = ({ movie }: IMovieCard) => {
  console.log(movie)
  return (
    <S.MovieCard>
      <S.MovieCardTitle>{movie.title}</S.MovieCardTitle>
    </S.MovieCard>
  )
}

export default MovieCard
