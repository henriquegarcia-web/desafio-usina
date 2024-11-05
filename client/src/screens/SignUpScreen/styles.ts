import styled from 'styled-components'
import { Colors, Fonts, Screen, Sizes } from '@/utils/styles/globals'

export const SignUpScreen = styled(Screen)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: ${Sizes.headerHeight} 20px 0 20px;

  background-color: ${Colors.background};
`

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  width: 100%;
  max-width: 320px;
  height: fit-content;
  padding: 35px 25px;
  border-radius: 8px;

  background-color: ${Colors.card};
`

export const SignUpContainerHeader = styled.div`
  display: flex;

  font-size: ${Fonts.h3};
  line-height: ${Fonts.h3};
  font-weight: 500;

  color: ${Colors.font};
`

export const SignUpContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  row-gap: 10px;
`

export const SignUpContainerSwitch = styled.span`
  text-align: center;
  width: 100%;

  font-size: ${Fonts.xss};
  line-height: ${Fonts.xss};
  font-weight: 400;

  color: ${Colors.fontLegend};

  a {
    font-weight: 600;

    color: ${Colors.font};
  }
`
