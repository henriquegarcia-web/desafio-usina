import { Controller, useForm } from 'react-hook-form'
import { Dropdown, Input, TextArea, Button, SearchTmdb } from '@/components'
import * as S from './styles'

interface IAddMovieForm {
  onSubmit: (data: IAddMovieFormData) => void
}

interface IAddMovieFormData {
  title: string
  description: string
  genre: string
  releaseYear: number
  duration: number
}

const AddMovieForm = ({ onSubmit }: IAddMovieForm) => {
  const { control, handleSubmit, formState } = useForm<IAddMovieFormData>()
  const { isValid } = formState

  return (
    <S.SaveMovieForm onSubmit={handleSubmit(onSubmit)}>
      <S.FormInputsWrapper>
        <S.FormInputsContainer>
          <S.FormInput>
            <S.FormInputHeader>Título</S.FormInputHeader>
            <Controller
              name="title"
              control={control}
              rules={{ required: 'Este campo é obrigatório' }}
              render={({ field }) => <SearchTmdb {...field} />}
            />
          </S.FormInput>

          <S.FormInput>
            <S.FormInputHeader>Descrição</S.FormInputHeader>
            <Controller
              name="description"
              control={control}
              render={({ field }) => (
                <TextArea {...field} placeholder="Descrição do filme" />
              )}
            />
          </S.FormInput>
        </S.FormInputsContainer>

        <S.FormInputBanner>
          <S.FormInputHeader>Capa</S.FormInputHeader>
          <S.MovieBanner>{/* <img src="" alt="" /> */}</S.MovieBanner>
        </S.FormInputBanner>
      </S.FormInputsWrapper>

      <S.FormInput>
        <S.FormInputHeader>Gênero</S.FormInputHeader>
        <Controller
          name="genre"
          control={control}
          // rules={{ required: 'Este campo é obrigatório' }}
          render={({ field }) => (
            <Dropdown {...field} placeholder="Selecione o gênero" />
          )}
        />
      </S.FormInput>

      <S.FormInputsWrapper>
        <S.FormInput>
          <S.FormInputHeader>Lançamento</S.FormInputHeader>
          <Controller
            name="releaseYear"
            control={control}
            rules={{ required: 'Este campo é obrigatório' }}
            render={({ field }) => (
              <Input {...field} type="number" placeholder="Ano de lançamento" />
            )}
          />
        </S.FormInput>

        <S.FormInput>
          <S.FormInputHeader>Duração</S.FormInputHeader>
          <Controller
            name="duration"
            control={control}
            rules={{ required: 'Este campo é obrigatório' }}
            render={({ field }) => (
              <Input
                {...field}
                type="number"
                placeholder="Duração em minutos"
              />
            )}
          />
        </S.FormInput>
      </S.FormInputsWrapper>

      <S.FormFooter>
        <Button type="submit" label="Adicionar" disabled={!isValid} />
      </S.FormFooter>
    </S.SaveMovieForm>
  )
}

export default AddMovieForm
