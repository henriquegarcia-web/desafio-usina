import styled from 'styled-components'
import { Colors, Fonts } from '@/utils/styles/globals'

export const InputWrapper = styled.div`
  display: flex;
`

export const Input = styled.input`
  font-size: ${Fonts.large};
  line-height: ${Fonts.large};
  font-weight: 600;

  color: ${Colors.font};
`

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;

  svg {
    font-size: ${Fonts.regular};

    color: ${Colors.font};
  }
`

export const PasswordToggle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;

  svg {
    font-size: ${Fonts.regular};

    color: ${Colors.font};
  }
`
