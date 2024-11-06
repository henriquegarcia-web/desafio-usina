import styled from 'styled-components'
import { Colors, Fonts } from '@/utils/styles/globals'

export const MovieDatails = styled.section`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`

export const MovieDatailsWrapper = styled.div`
  z-index: 85;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  width: 100%;
  max-width: 1000px;
  height: fit-content;
  padding: 120px 20px;
`

export const MovieTitle = styled.h2`
  font-size: ${Fonts.h2};
  line-height: ${Fonts.h2};
  font-weight: 600;

  color: ${Colors.font};
`

export const MovieDescription = styled.p`
  font-size: ${Fonts.regular};
  line-height: ${Fonts.regular};
  font-weight: 400;

  color: ${Colors.font};
`

export const MovieIndicators = styled.div`
  display: flex;
  column-gap: 6px;

  p,
  span {
    font-size: ${Fonts.xss};
    line-height: ${Fonts.xss};
    font-weight: 500;

    color: ${Colors.fontLegend};
  }
`

export const MovieCtas = styled.div`
  display: flex;
  column-gap: 10px;
  margin-top: 20px;
`

export const MoviesBackdrop = styled.div`
  z-index: 80;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(0, 0, 0, 0.05) 80%,
      rgba(0, 0, 0, 0) 100%
    );

    opacity: 0.7;
  }
`
