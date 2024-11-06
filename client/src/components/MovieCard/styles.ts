import styled from 'styled-components'
import { Card, Colors, Fonts } from '@/utils/styles/globals'

export const MovieCard = styled(Card)`
  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid ${Colors.movieCardBorder};
  background-image: ${Colors.movieCardBg};

  &:hover {
    h3 {
      color: ${Colors.font};
    }
  }
`

export const MovieCardTitle = styled.h3`
  transition: 0.3s;

  font-size: ${Fonts.xss};
  line-height: ${Fonts.xss};
  font-weight: 400;

  color: ${Colors.fontLegend};
`
