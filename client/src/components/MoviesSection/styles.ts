import styled from 'styled-components'
import { Card, Colors, Fonts } from '@/utils/styles/globals'

export const MoviesSection = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`

export const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 7px;

  h2 {
    font-size: ${Fonts.regular};
    line-height: ${Fonts.regular};
    font-weight: 600;

    color: ${Colors.font};
  }

  p {
    font-size: ${Fonts.xss};
    line-height: ${Fonts.xss};
    font-weight: 300;

    color: ${Colors.fontLegend};
  }
`

export const SectionWrapper = styled.div`
  display: flex;
`

export const MoviesList = styled.div`
  display: flex;
  column-gap: 10px;
`

export const AddMovieCard = styled(Card)`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${Colors.card};

  svg {
    font-size: ${Fonts.h2};

    color: ${Colors.inputColor};
  }

  &:hover {
    background-color: ${Colors.cardHover};
  }
`
