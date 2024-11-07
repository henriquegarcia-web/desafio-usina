import { forwardRef } from 'react'
import * as S from './styles'

interface ITextArea {
  placeholder: string
  value?: string
}

const TextArea = forwardRef<HTMLTextAreaElement, ITextArea>(
  ({ placeholder, value = '', ...props }, ref) => {
    return (
      <S.TextArea
        ref={ref}
        rows={5}
        placeholder={placeholder}
        value={value}
        {...props}
      />
    )
  }
)

TextArea.displayName = 'TextArea'

export default TextArea
