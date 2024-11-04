import * as S from './styles'

interface ITextArea {
  placeholder: string
}

const TextArea = ({ placeholder }: ITextArea) => {
  return <S.TextArea rows={5} placeholder={placeholder} />
}

export default TextArea
