import styled from 'styled-components'
import { Colors, Fonts } from '@/utils/styles/globals'

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  width: 100%;
  padding: 0 14px;
  border-radius: 5px;

  background-color: ${Colors.inputBgContrast};
`

export const Input = styled.input`
  display: flex;
  flex: 1;
  padding: 10px 0;

  font-size: ${Fonts.xss};
  line-height: ${Fonts.xss};
  font-weight: 400;

  color: ${Colors.font};
  background-color: transparent;
`

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
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
