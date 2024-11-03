import * as S from './styles'

import { FiSearch } from 'react-icons/fi'

interface ISearch {}

const Search = ({}: ISearch) => {
  return (
    <S.Search>
      <FiSearch />
      <S.SearchInput type="text" placeholder="Pesquisar por filme ..." />
    </S.Search>
  )
}

export default Search
