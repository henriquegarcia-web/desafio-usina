import * as S from './styles'

import { Header, MoviesSection } from '@/components'

// import { useGetTemplate } from '@/hooks/data/useGetTemplate'

interface ILibraryScreen {}

const LibraryScreen = ({}: ILibraryScreen) => {
  // const {
  //   data: dataTemplate,
  //   error: errorTemplate,
  //   fetchStatus,
  //   isLoading
  // } = useGetTemplate()

  return (
    <S.LibraryScreen>
      <Header />

      <S.LibraryScreenWrapper>
        <MoviesSection sectionId="saved_movies" />
        <MoviesSection sectionId="recommended_movies" />
      </S.LibraryScreenWrapper>
    </S.LibraryScreen>
  )
}

export default LibraryScreen
