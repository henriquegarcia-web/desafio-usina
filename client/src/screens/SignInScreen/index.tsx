import { Link, useNavigate } from 'react-router-dom'

import * as S from './styles'

import { Button, Input } from '@/components'

import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, Controller } from 'react-hook-form'

import { useAuth } from '@/contexts/AuthProvider'

interface ISignInFormData {
  email: string
  password: string
}

const signInSchema = Yup.object().shape({
  email: Yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
  password: Yup.string().required('Senha é obrigatória')
})

const SignInScreen = () => {
  const navigate = useNavigate()

  const { login } = useAuth()
  const { control, handleSubmit, formState } = useForm<ISignInFormData>({
    resolver: yupResolver(signInSchema)
  })
  const { errors, isSubmitting } = formState

  const onSubmit = async (data: ISignInFormData) => {
    try {
      await login({ email: data.email, password: data.password })
      navigate('/biblioteca')
    } catch (error) {
      console.error('Erro ao entrar:', error)
    }
  }

  return (
    <S.SignInScreen>
      <S.SignInContainer>
        <S.SignInContainerHeader>Entrar</S.SignInContainerHeader>
        <S.SignInContainerForm onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="email"
                placeholder="Seu e-mail"
                hasError={!!errors.email}
                errorMessage={errors.email?.message}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="password"
                placeholder="Sua senha"
                hasError={!!errors.password}
                errorMessage={errors.password?.message}
              />
            )}
          />
          <Button label="Entrar" type="submit" disabled={isSubmitting} />
        </S.SignInContainerForm>
        <S.SignInContainerSwitch>
          Não possui cadastro? <Link to="/cadastrar">Criar Conta</Link>
        </S.SignInContainerSwitch>
      </S.SignInContainer>
    </S.SignInScreen>
  )
}

export default SignInScreen
