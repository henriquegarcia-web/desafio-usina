import * as S from './styles'

interface IMovieCard {
  movie: any
}

const MovieCard = ({ movie }: IMovieCard) => {
  console.log(movie)
  return <S.MovieCard></S.MovieCard>
}

export default MovieCard
