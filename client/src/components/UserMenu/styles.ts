import styled from 'styled-components'
import { Colors, Fonts } from '@/utils/styles/globals'

export const UserMenu = styled.div`
  position: relative;
  display: flex;
`

export const UserMenuContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
  cursor: pointer;
`

export const UserWelcome = styled.span`
  font-size: ${Fonts.xs};
  line-height: ${Fonts.xs};
  font-weight: 300;

  b {
    font-weight: 500;

    color: ${Colors.font};
  }

  color: ${Colors.inputColor};
`

export const UserAvatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 100px;
  padding-top: 2px;

  font-size: ${Fonts.small};
  line-height: ${Fonts.small};
  font-weight: 400;

  color: ${Colors.inputColor};
  background-color: ${Colors.inputBg};
`

export const UserMenuModal = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  top: 100%;
  left: 0;
  width: 100%;
  margin-top: 5px;
  padding: 8px;
  border-radius: 5px;

  background-color: ${Colors.inputBg};
`

export const UserMenuItem = styled.button`
  display: flex;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;

  font-size: ${Fonts.xss};
  line-height: ${Fonts.xss};
  font-weight: 400;

  color: ${Colors.font};
  background-color: ${Colors.inputBg};

  &:hover {
    background-color: ${Colors.inputBgContrast};
  }
`
