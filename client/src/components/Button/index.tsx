import * as S from './styles'

interface IButton {
  mode?: 'default' | 'outlined'
  type: 'button' | 'submit'
  label: string
  onClick?: () => void
}

const Button = ({ type, mode = 'default', label, onClick }: IButton) => {
  return (
    <S.Button type={type} mode={mode} onClick={onClick && onClick}>
      {label}
    </S.Button>
  )
}

export default Button
