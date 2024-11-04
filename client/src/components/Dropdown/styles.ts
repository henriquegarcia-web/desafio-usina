import styled from 'styled-components'
import { Colors, Fonts } from '@/utils/styles/globals'

export const Dropdown = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 14px;
  border-radius: 5px;

  background-color: ${Colors.inputBgContrast};
`

export const DropdownSelected = styled.div`
  font-size: ${Fonts.xss};
  line-height: ${Fonts.xss};
  font-weight: 400;

  p {
    color: rgba(255, 255, 255, 0.29);
  }

  b {
    color: ${Colors.font};
  }
`

export const DropdownToggle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  cursor: pointer;

  background-color: transparent;

  svg {
    font-size: ${Fonts.xl};

    color: ${Colors.font};
  }
`
