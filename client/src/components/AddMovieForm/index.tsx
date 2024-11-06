import * as S from './styles'
import {
  Input,
  TextArea,
  Button,
  SearchTmdb,
  GenreDropdown
} from '@/components'

import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, useForm } from 'react-hook-form'

import { useCreateMovie } from '@/hooks/data/useMovie'
import { useAuth } from '@/contexts/AuthProvider'

import { IMovieForm } from '@/@types/globals'

interface IAddMovieForm {
  handleCloseModal: () => void
}

interface IAddMovieFormData {
  movieTitle: string
  movieDescription: string
  movieGenre: string
  movieReleaseYear: number
  movieDuration: number
}

const addMovieSchema = Yup.object().shape({
  movieTitle: Yup.string().required(),
  movieDescription: Yup.string().required(),
  movieGenre: Yup.string().required(),
  movieReleaseYear: Yup.number().required().min(0).max(9999),
  movieDuration: Yup.number().required().min(0).max(999)
})

const AddMovieForm = ({ handleCloseModal }: IAddMovieForm) => {
  const { user } = useAuth()
  const { mutate: createMovie } = useCreateMovie()

  const { control, handleSubmit, setValue, formState } =
    useForm<IAddMovieFormData>({
      mode: 'all',
      resolver: yupResolver(addMovieSchema)
    })
  const { isValid } = formState

  const handleSelectGenre = (genre: string) => {
    setValue('movieGenre', genre)
  }

  const onSubmit = (data: IMovieForm) => {
    if (!user) return

    createMovie({
      userId: user.id.toString(),
      movieData: {
        title: data.movieTitle,
        description: data.movieDescription,
        genre: data.movieGenre,
        year: data.movieReleaseYear,
        duration: data.movieDuration
      }
    })

    handleCloseModal()
  }

  return (
    <S.SaveMovieForm onSubmit={handleSubmit(onSubmit)}>
      <S.FormInputsWrapper>
        <S.FormInputsContainer>
          <S.FormInput>
            <S.FormInputHeader>Título</S.FormInputHeader>
            <Controller
              name="movieTitle"
              control={control}
              rules={{ required: 'Este campo é obrigatório' }}
              render={({ field }) => <SearchTmdb {...field} />}
            />
          </S.FormInput>

          <S.FormInput>
            <S.FormInputHeader>Descrição</S.FormInputHeader>
            <Controller
              name="movieDescription"
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
          name="movieGenre"
          control={control}
          rules={{ required: 'Este campo é obrigatório' }}
          render={({ field }) => (
            <GenreDropdown ref={field.ref} onSelectGenre={handleSelectGenre} />
          )}
        />
      </S.FormInput>

      <S.FormInputsWrapper>
        <S.FormInput>
          <S.FormInputHeader>Lançamento</S.FormInputHeader>
          <Controller
            name="movieReleaseYear"
            control={control}
            rules={{ required: 'Este campo é obrigatório' }}
            render={({ field, fieldState }) => (
              <Input
                {...field}
                type="number"
                placeholder="Ano de lançamento"
                hasError={!!fieldState.error}
                onChange={(e) => {
                  const value = e.target.value
                  if (/^\d{0,4}$/.test(value)) {
                    field.onChange(value)
                  }
                }}
              />
            )}
          />
        </S.FormInput>

        <S.FormInput>
          <S.FormInputHeader>Duração</S.FormInputHeader>
          <Controller
            name="movieDuration"
            control={control}
            rules={{ required: 'Este campo é obrigatório' }}
            render={({ field, fieldState }) => (
              <Input
                {...field}
                type="number"
                placeholder="Duração em minutos"
                hasError={!!fieldState.error}
                onChange={(e) => {
                  const value = e.target.value
                  if (/^\d{0,3}$/.test(value)) {
                    field.onChange(value)
                  }
                }}
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
