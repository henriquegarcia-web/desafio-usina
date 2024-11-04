import { forwardRef, useState } from 'react'
import * as S from './styles'
import { FiEye, FiEyeOff, FiSearch } from 'react-icons/fi'

interface IInput {
  mode?: 'default' | 'password' | 'search'
  type: string
  placeholder: string
  value?: string | number
  hasError?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = forwardRef<HTMLInputElement, IInput>(
  (
    {
      mode = 'default',
      type,
      placeholder,
      value = '',
      hasError = false,
      onChange,
      ...props
    },
    ref
  ) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)

    const togglePasswordVisibility = () => {
      setIsPasswordVisible(!isPasswordVisible)
    }

    return (
      <S.InputWrapper>
        {mode === 'search' && (
          <S.Icon>
            <FiSearch />
          </S.Icon>
        )}

        <S.Input
          ref={ref}
          type={
            mode === 'password'
              ? isPasswordVisible
                ? 'text'
                : 'password'
              : type
          }
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={hasError ? 'error' : ''}
          {...props}
        />

        {mode === 'password' && (
          <S.PasswordToggle onClick={togglePasswordVisibility}>
            {isPasswordVisible ? <FiEye /> : <FiEyeOff />}
          </S.PasswordToggle>
        )}
      </S.InputWrapper>
    )
  }
)

Input.displayName = 'Input'

export default Input
