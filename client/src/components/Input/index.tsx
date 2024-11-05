import { forwardRef, useState } from 'react'
import * as S from './styles'
import { FiEye, FiEyeOff, FiSearch } from 'react-icons/fi'

interface IInput {
  mode?: 'default' | 'password' | 'search'
  type: string
  placeholder: string
  value?: string | number
  hasError?: boolean
  errorMessage?: string
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
      errorMessage,
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
      <S.InputContainer>
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
            autoComplete="off"
            {...props}
          />

          {mode === 'password' && (
            <S.PasswordToggle onClick={togglePasswordVisibility}>
              {isPasswordVisible ? <FiEye /> : <FiEyeOff />}
            </S.PasswordToggle>
          )}
        </S.InputWrapper>
        {hasError && errorMessage && (
          <S.InputWarning>{errorMessage}</S.InputWarning>
        )}
      </S.InputContainer>
    )
  }
)

Input.displayName = 'Input'

export default Input
