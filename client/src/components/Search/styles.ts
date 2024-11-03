import styled from 'styled-components'
import { Colors, Fonts } from '@/utils/styles/globals'

export const Search = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  column-gap: 10px;
  padding: 6px 12px;
  border-radius: 6px;

  background-color: ${Colors.inputBg};

  svg {
    font-size: ${Fonts.xl};

    color: ${Colors.inputColor};
  }
`

export const SearchInput = styled.input`
  display: flex;
  flex: 1;
  padding: 5px 0;

  font-size: ${Fonts.xs};
  line-height: ${Fonts.xs};
  font-weight: 400;

  background-color: transparent;
  color: ${Colors.inputColor};
`
