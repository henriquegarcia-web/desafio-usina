import styled from 'styled-components'
import { Colors, Fonts } from '@/utils/styles/globals'

export const TextArea = styled.textarea`
  resize: none;
  padding: 10px 14px;
  border-radius: 5px;

  font-size: ${Fonts.xss};
  line-height: ${Fonts.xss};
  font-weight: 400;

  color: ${Colors.font};
  background-color: ${Colors.inputBgContrast};
`
