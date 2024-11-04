import styled from 'styled-components'
import { Colors, Fonts } from '@/utils/styles/globals'

export const ModalBackdrop = styled.div`
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 20px;

  background-color: ${Colors.backdrop};
`

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  width: 100%;
  max-width: 600px;
  padding: 20px;
  border-radius: 8px;

  background-color: ${Colors.modal};
`

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  h2 {
  }
`

export const ModalHeaderTitle = styled.h2`
  font-size: ${Fonts.large};
  line-height: ${Fonts.large};
  font-weight: 600;

  color: ${Colors.font};
`

export const ModalClose = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  cursor: pointer;

  background-color: transparent;

  svg {
    transition: 0.3s;
    opacity: 0.85;

    font-size: ${Fonts.xxl};

    color: ${Colors.font};
  }

  &:hover {
    svg {
      opacity: 1;
    }
  }
`

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
