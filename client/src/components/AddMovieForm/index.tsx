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
import { Controller, useForm, useWatch } from 'react-hook-form'

import { useCreateMovie, useUpdateMovie } from '@/hooks/data/useMovie'
import { useAuth } from '@/contexts/AuthProvider'

import { IMovie, IMovieForm } from '@/@types/globals'

interface IAddMovieForm {
  selectedMovie: IMovie | null
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
  movieTitle: Yup.string()
    .required('Título obrigatório.')
    .max(255, 'Máx. 255 caracteres.'),
  movieDescription: Yup.string()
    .required('Descrição obrigatória.')
    .max(1000, 'Máx. 1000 caracteres.'),
  movieGenre: Yup.string().required('Gênero obrigatório.'),
  movieReleaseYear: Yup.number()
    .required('Ano obrigatório.')
    .min(1888, 'Ano mínimo: 1888.')
    .max(2030, 'Ano máximo: 2030.'),
  movieDuration: Yup.number()
    .required('Duração obrigatória.')
    .min(1, 'Mín. 1 minuto.')
    .max(999, 'Máx. 999 minutos.')
})

const AddMovieForm = ({ selectedMovie, handleCloseModal }: IAddMovieForm) => {
  const { user } = useAuth()
  const { mutate: createMovie } = useCreateMovie()
  const { mutate: updateMovie } = useUpdateMovie()

  const { control, handleSubmit, setValue, formState } =
    useForm<IAddMovieFormData>({
      mode: 'all',
      resolver: yupResolver(addMovieSchema),
      defaultValues: selectedMovie
        ? {
            movieTitle: selectedMovie.title,
            movieDescription: selectedMovie.description,
            movieGenre: selectedMovie.genre,
            movieReleaseYear: selectedMovie.year,
            movieDuration: selectedMovie.duration
          }
        : undefined
    })
  const { isValid } = formState

  const formData = useWatch({ control })
  const isUnchanged = selectedMovie
    ? formData.movieTitle === selectedMovie.title &&
      formData.movieDescription === selectedMovie.description &&
      formData.movieGenre === selectedMovie.genre &&
      formData.movieReleaseYear === selectedMovie.year &&
      formData.movieDuration === selectedMovie.duration
    : false

  const handleSelectGenre = (genre: string) => {
    setValue('movieGenre', genre)
  }

  const onSubmit = (data: IMovieForm) => {
    if (!user) return

    if (!selectedMovie) {
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
    } else {
      updateMovie({
        id: selectedMovie.movie_id,
        userId: selectedMovie.user_id,
        movieData: {
          title: data.movieTitle,
          description: data.movieDescription,
          genre: data.movieGenre,
          year: data.movieReleaseYear,
          duration: data.movieDuration
        }
      })
    }

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
          render={({ field }) => (
            <GenreDropdown
              ref={field.ref}
              onSelectGenre={handleSelectGenre}
              selectedGenre={selectedMovie?.genre}
            />
          )}
        />
      </S.FormInput>

      <S.FormInputsWrapper>
        <S.FormInput>
          <S.FormInputHeader>Lançamento</S.FormInputHeader>
          <Controller
            name="movieReleaseYear"
            control={control}
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
        <Button
          type="submit"
          label={!!selectedMovie ? 'Salvar' : 'Adicionar'}
          disabled={!isValid || isUnchanged}
        />
      </S.FormFooter>
    </S.SaveMovieForm>
  )
}

export default AddMovieForm
