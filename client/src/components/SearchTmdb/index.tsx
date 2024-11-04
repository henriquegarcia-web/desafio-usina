import * as S from './styles'

import { Input } from '@/components'

interface ISearchTmdb {}

const SearchTmdb = ({}: ISearchTmdb) => {
  return (
    <S.SearchTmdb>
      <Input mode="search" type="text" placeholder="Digite o nome do filme" />
    </S.SearchTmdb>
  )
}

export default SearchTmdb
