import styled from 'styled-components'
import { Colors, Fonts } from '@/utils/styles/globals'

export const Dropdown = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 14px;
  border-radius: 5px;

  background-color: ${Colors.inputBgContrast};
`

export const DropdownSelected = styled.div`
  font-size: ${Fonts.xss};
  line-height: ${Fonts.xss};
  font-weight: 400;
  cursor: pointer;

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

export const DropdownList = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  top: 100%;
  left: 0;
  width: 100%;
  margin-top: 5px;
  padding: 8px;
  border-radius: 5px;

  background-color: ${Colors.inputBg};
`

export const DropdownItem = styled.li<{ active: number }>`
  display: flex;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;

  font-size: ${Fonts.xss};
  line-height: ${Fonts.xss};
  font-weight: 400;

  color: ${Colors.font};
  background-color: ${({ active }) =>
    active ? Colors.inputBgContrast : Colors.inputBg};

  &:hover {
    background-color: ${Colors.inputBgContrast};
  }
`
