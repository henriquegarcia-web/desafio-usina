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

// ================================================ SAVE MOVIE FORM

export const SaveMovieForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 14px;
`

export const FormInputsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 14px;
  width: 100%;
`

export const FormInput = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  width: 100%;
`

export const FormInputHeader = styled.h3`
  font-size: ${Fonts.xsss};
  line-height: ${Fonts.xsss};
  font-weight: 500;

  color: ${Colors.fontLegend};
`

export const FormFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin: 5px 0;
`
