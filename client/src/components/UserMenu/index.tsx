import { useState } from 'react'

import * as S from './styles'

import { formatUsername } from '@/utils/functions/formatUsername'

interface IUserMenu {}

const UserMenu = ({}: IUserMenu) => {
  const userName = 'Henrique Garcia'

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <S.UserMenu>
      <S.UserWelcome>
        Olá, <b>{userName}</b>
      </S.UserWelcome>
      <S.UserAvatar>{formatUsername(userName)}</S.UserAvatar>
    </S.UserMenu>
  )
}

export default UserMenu
