import styled from 'styled-components'
import { Sizes } from '@/utils/styles/globals'

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${Sizes.headerHeight};
`

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1000px;
  height: 100%;
`
