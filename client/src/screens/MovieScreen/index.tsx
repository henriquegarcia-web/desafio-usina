import * as S from './styles'

import { Header } from '@/components'

// import { useGetTemplate } from '@/hooks/data/useGetTemplate'

interface IMovieScreen {}

const MovieScreen = ({}: IMovieScreen) => {
  // const {
  //   data: dataTemplate,
  //   error: errorTemplate,
  //   fetchStatus,
  //   isLoading
  // } = useGetTemplate()

  return (
    <S.MovieScreen>
      <Header />
    </S.MovieScreen>
  )
}

export default MovieScreen
