import styled from 'styled-components'
import { Colors, Fonts } from '@/utils/styles/globals'

export const UserMenu = styled.div`
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
