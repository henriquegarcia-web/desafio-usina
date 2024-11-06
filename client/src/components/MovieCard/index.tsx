import * as S from './styles'

import { IMovie } from '@/@types/globals'

interface IMovieCard {
  movie: IMovie
  active: boolean
  onClick: () => void
}

const MovieCard = ({ movie, active, onClick }: IMovieCard) => {
  return (
    <S.MovieCard className={active ? 'active' : ''} onClick={onClick}>
      <S.MovieCardTitle>{movie.title}</S.MovieCardTitle>
    </S.MovieCard>
  )
}

export default MovieCard
