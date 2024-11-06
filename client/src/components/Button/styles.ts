import styled, { css } from 'styled-components'
import { Colors, Fonts } from '@/utils/styles/globals'

export const Button = styled.button<{ mode: 'default' | 'outlined' }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: 40px;
  padding: 0 18px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;

  font-size: ${Fonts.xss};
  line-height: ${Fonts.xss};

  ${({ mode }) =>
    mode === 'default'
      ? css`
          font-weight: 500;

          color: ${Colors.font};
          background-color: ${Colors.button};
          border: none;

          &:hover {
            background-color: ${Colors.buttonHovered};
          }

          &:disabled {
            background-color: ${Colors.buttonDisabled};
          }
        `
      : css`
          font-weight: 600;

          color: ${Colors.button};
          background-color: transparent;
          border: 2px solid ${Colors.button};

          &:hover {
            color: ${Colors.buttonHovered};
            border-color: ${Colors.buttonHovered};
          }

          &:disabled {
            color: ${Colors.buttonDisabled};
            border-color: ${Colors.buttonDisabled};
          }
        `}
`
