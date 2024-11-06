import styled from 'styled-components'
import { Screen, Colors, Sizes } from '@/utils/styles/globals'

export const LibraryScreen = styled(Screen)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${Sizes.headerHeight} 0;

  background-color: ${Colors.background};

  &::before {
    z-index: 10;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('/background/bg_base_2.png');
    background-size: cover;
    background-position: center;
    background-blend-mode: multiply;
    opacity: 0.15;
  }
`

export const LibraryScreenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 35px;
  width: 100%;
  max-width: 1000px;
  height: fit-content;
  padding: 40px 20px 0 20px;
`
