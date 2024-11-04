import * as S from './styles'

interface IButton {
  mode?: 'default' | 'outlined'
  type: 'button' | 'submit'
  label: string
  loading?: boolean
  disabled?: boolean
  onClick?: () => void
}

const Button = ({
  type,
  mode = 'default',
  label,
  loading = false,
  disabled = false,
  onClick
}: IButton) => {
  return (
    <S.Button
      type={type}
      mode={mode}
      disabled={disabled || loading}
      onClick={onClick && onClick}
    >
      {label}
    </S.Button>
  )
}

export default Button
