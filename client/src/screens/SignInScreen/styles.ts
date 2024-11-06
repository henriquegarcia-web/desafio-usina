import styled from 'styled-components'
import { Colors, Fonts, Screen, Sizes } from '@/utils/styles/globals'

export const SignInScreen = styled(Screen)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px;

  background-color: ${Colors.background};
`

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  width: 100%;
  max-width: 300px;
  height: fit-content;
  padding: 40px 30px;
  border-radius: 8px;

  background-color: ${Colors.card};
`

export const SignInContainerHeader = styled.div`
  display: flex;

  font-size: ${Fonts.h2};
  line-height: ${Fonts.h2};
  font-weight: 500;

  color: ${Colors.font};
`

export const SignInContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  row-gap: 10px;
`

export const SignInContainerSwitch = styled.span`
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
