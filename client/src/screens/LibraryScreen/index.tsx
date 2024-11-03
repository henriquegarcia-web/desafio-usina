import * as S from './styles'

import { Header } from '@/components'

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
    </S.LibraryScreen>
  )
}

export default LibraryScreen
