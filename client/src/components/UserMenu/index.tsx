import { useRef, useState } from 'react'

import * as S from './styles'

import { useAuth } from '@/contexts/AuthProvider'

import { formatUsername } from '@/utils/functions/formatUsername'
import useClickOutside from '@/hooks/useClickOutside'

interface IUserMenu {}

const UserMenu = ({}: IUserMenu) => {
  const userMenuRef = useRef(null)

  const { user, handleLogout } = useAuth()

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const userName = user ? user.name : 'Carregando...'

  useClickOutside({
    active: isMenuOpen,
    containerRef: userMenuRef,
    onClickOutside: () => setIsMenuOpen(false)
  })

  return (
    <S.UserMenu>
      <S.UserMenuContainer onClick={() => setIsMenuOpen(true)}>
        <S.UserWelcome>
          Olá, <b>{userName}</b>
        </S.UserWelcome>
        <S.UserAvatar>{formatUsername(userName)}</S.UserAvatar>
      </S.UserMenuContainer>
      {isMenuOpen && (
        <S.UserMenuModal ref={userMenuRef}>
          <S.UserMenuItem onClick={handleLogout}>Sair</S.UserMenuItem>
        </S.UserMenuModal>
      )}
    </S.UserMenu>
  )
}

export default UserMenu
