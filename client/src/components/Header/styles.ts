import styled from 'styled-components'
import { Colors, Sizes } from '@/utils/styles/globals'

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${Sizes.headerHeight};

  background-color: ${Colors.header};
`

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 60px;
  width: 100%;
  max-width: 1000px;
  height: 100%;
`
