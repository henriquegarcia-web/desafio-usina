import { Link, useNavigate } from 'react-router-dom'

import * as S from './styles'

import { Button, Input } from '@/components'

import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, Controller } from 'react-hook-form'

import { useAuth } from '@/contexts/AuthProvider'

interface ISignUpFormData {
  username: string
  email: string
  password: string
  confirmPassword: string
}

const signUpSchema = Yup.object().shape({
  username: Yup.string().required('Nome de usuário é obrigatório'),
  email: Yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
  password: Yup.string().required('Senha é obrigatória'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'As senhas precisam coincidir')
    .required('Confirmação de senha é obrigatória')
})

const SignUpScreen = () => {
  const navigate = useNavigate()

  const { handleRegister } = useAuth()
  const { control, handleSubmit, formState } = useForm<ISignUpFormData>({
    resolver: yupResolver(signUpSchema)
  })
  const { errors, isSubmitting, isValid } = formState

  const onSubmit = async (data: ISignUpFormData) => {
    const responseRegister = await handleRegister({
      username: data.username,
      email: data.email,
      password: data.password
    })

    if (responseRegister) {
      navigate('/biblioteca')
    }
  }

  return (
    <S.SignUpScreen>
      <S.SignUpContainer>
        <S.SignUpContainerHeader>Cadastrar</S.SignUpContainerHeader>
        <S.SignUpContainerForm onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="username"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                placeholder="Nome de usuário"
                hasError={!!errors.username}
                errorMessage={errors.username?.message}
              />
            )}
          />
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
          <Controller
            name="confirmPassword"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="password"
                placeholder="Repita a senha"
                hasError={!!errors.confirmPassword}
                errorMessage={errors.confirmPassword?.message}
              />
            )}
          />
          <Button
            label="Criar Conta"
            type="submit"
            disabled={!isValid}
            loading={isSubmitting}
          />
        </S.SignUpContainerForm>
        <S.SignUpContainerSwitch>
          Já possui cadastro? <Link to="/entrar">Entrar</Link>
        </S.SignUpContainerSwitch>
      </S.SignUpContainer>
    </S.SignUpScreen>
  )
}

export default SignUpScreen
