import * as S from './styles'

import { Logo, Search, UserMenu } from '@/components'

interface IHeader {}

const Header = ({}: IHeader) => {
  return (
    <S.Header>
      <S.HeaderWrapper>
        <Logo />
        <Search />
        <UserMenu />
      </S.HeaderWrapper>
    </S.Header>
  )
}

export default Header
