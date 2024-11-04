import styled from 'styled-components'
import { Colors, Fonts } from '@/utils/styles/globals'

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

export const FormInputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 14px;
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

export const FormInputBanner = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  width: fit-content;
`

export const MovieBanner = styled.div`
  display: flex;
  width: 120px;
  height: 156px;
  border-radius: 5px;

  background-color: ${Colors.inputBgContrast};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const FormFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin: 5px 0;
`
