import * as S from './styles'

import { Button, TextArea, Rating } from '@/components'

import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, useForm } from 'react-hook-form'
import * as Yup from 'yup'

import { useAddRating } from '@/hooks/data/useRating'
import { useAuth } from '@/contexts/AuthProvider'

interface IAddRatingForm {
  movieId: string
  handleCloseModal: () => void
}

interface IAddRatingFormData {
  rating: number
  review?: string
}

const addRatingSchema = Yup.object().shape({
  rating: Yup.number()
    .required('Avaliação obrigatória.')
    .min(1, 'Avaliação mínima é 1 estrela.')
    .max(5, 'Avaliação máxima é 5 estrelas.'),
  review: Yup.string().max(1000, 'Máximo de 1000 caracteres.')
})

const AddRatingForm = ({ movieId, handleCloseModal }: IAddRatingForm) => {
  const { user } = useAuth()
  const { mutate: addRating } = useAddRating()

  const { control, handleSubmit, formState } = useForm<IAddRatingFormData>({
    mode: 'all',
    resolver: yupResolver(addRatingSchema)
  })
  const { isValid } = formState

  const onSubmit = (data: IAddRatingFormData) => {
    if (!user) return

    addRating({
      userId: user?.id,
      movieId,
      rating: data.rating,
      review: data.review
    })

    handleCloseModal()
  }

  return (
    <S.SaveRatingForm onSubmit={handleSubmit(onSubmit)}>
      <S.FormInput>
        <S.FormInputHeader>Avaliação</S.FormInputHeader>
        <Controller
          name="rating"
          control={control}
          render={({ field }) => (
            <Rating
              type="input"
              ratingValue={field.value}
              onChange={(value) => field.onChange(value)}
            />
          )}
        />
      </S.FormInput>

      <S.FormInput>
        <S.FormInputHeader>Comentário</S.FormInputHeader>
        <Controller
          name="review"
          control={control}
          render={({ field }) => (
            <TextArea {...field} placeholder="Escreva seu comentário" />
          )}
        />
      </S.FormInput>

      <S.FormFooter>
        <Button type="submit" label="Enviar Avaliação" disabled={!isValid} />
      </S.FormFooter>
    </S.SaveRatingForm>
  )
}

export default AddRatingForm
