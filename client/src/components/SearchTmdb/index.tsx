import { forwardRef } from 'react'
import * as S from './styles'

import { Input } from '@/components'

interface ISearchTmdb {}

const SearchTmdb = forwardRef<HTMLInputElement, ISearchTmdb>((props, ref) => {
  return (
    <S.SearchTmdb>
      <Input
        ref={ref}
        mode="search"
        type="text"
        placeholder="Digite o nome do filme"
        {...props}
      />
    </S.SearchTmdb>
  )
})

SearchTmdb.displayName = 'SearchTmdb'

export default SearchTmdb
