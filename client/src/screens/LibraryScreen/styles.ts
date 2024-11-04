import styled from 'styled-components'
import { Screen, Colors, Sizes } from '@/utils/styles/globals'

export const LibraryScreen = styled(Screen)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: ${Sizes.headerHeight} 20px 0 20px;

  background-color: ${Colors.background};
`

export const LibraryScreenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 35px;
  width: 100%;
  max-width: 1000px;
  height: fit-content;
  padding-top: 40px;
`
