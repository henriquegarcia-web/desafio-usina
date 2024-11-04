import { useState } from 'react'
import * as S from './styles'
import { FiEye, FiEyeOff, FiSearch } from 'react-icons/fi'

interface IInput {
  mode?: 'default' | 'password' | 'search'
  type: string
  placeholder: string
}

const Input = ({ mode = 'default', type, placeholder }: IInput) => {
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
        type={
          mode === 'password' ? (isPasswordVisible ? 'text' : 'password') : type
        }
        placeholder={placeholder}
      />

      {mode === 'password' && (
        <S.PasswordToggle onClick={togglePasswordVisibility}>
          {isPasswordVisible ? <FiEye /> : <FiEyeOff />}
        </S.PasswordToggle>
      )}
    </S.InputWrapper>
  )
}

export default Input
