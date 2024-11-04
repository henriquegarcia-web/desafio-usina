import styled from 'styled-components'
import { Colors, Fonts } from '@/utils/styles/globals'

export const Button = styled.button<{ mode: 'default' | 'outlined' }>`
  display: flex;
  padding: 12px 14px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;

  font-size: ${Fonts.xss};
  line-height: ${Fonts.xss};
  font-weight: 500;

  color: ${Colors.font};
  background-color: ${Colors.button};

  &:hover {
    background-color: ${Colors.buttonHovered};
  }

  &:disabled {
    background-color: ${Colors.buttonDisabled};
  }
`
