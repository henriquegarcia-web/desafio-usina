import * as S from './styles'
import { FiX } from 'react-icons/fi'

interface IModal {
  title: string
  isOpen: boolean
  handleClose: () => void
  children: React.ReactNode
}

const Modal = ({ title, isOpen = false, handleClose, children }: IModal) => {
  if (!isOpen) return null

  return (
    <S.ModalBackdrop>
      <S.Modal>
        <S.ModalHeader>
          <S.ModalHeaderTitle>{title}</S.ModalHeaderTitle>
          <S.ModalClose onClick={handleClose}>
            <FiX />
          </S.ModalClose>
        </S.ModalHeader>
        <S.ModalContent>{children}</S.ModalContent>
      </S.Modal>
    </S.ModalBackdrop>
  )
}

export default Modal
