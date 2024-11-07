import styled from 'styled-components'
import { Colors, Fonts } from '@/utils/styles/globals'

export const SaveRatingForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 14px;
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
