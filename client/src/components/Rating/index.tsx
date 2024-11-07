import { forwardRef, useState, useEffect } from 'react'
import * as S from './styles'
import { FiStar } from 'react-icons/fi'
import { useGetMovieRatings } from '@/hooks/data/useRating'

interface IRating {
  type: 'view' | 'input'
  movieId?: string
  ratingValue?: number
  onChange?: (value: number) => void
}

const Rating = forwardRef<HTMLInputElement, IRating>(
  ({ type, movieId, ratingValue = 0, onChange }, ref) => {
    const [hoverValue, setHoverValue] = useState(0)
    const [averageRating, setAverageRating] = useState(0)

    const { data, isLoading } = useGetMovieRatings(movieId as string)

    useEffect(() => {
      if (!data) return

      if (type === 'view' && data && data.length > 0) {
        const avgRating =
          data.reduce((total: any, rating: any) => total + rating.rating, 0) /
            data.length || 0
        setAverageRating(avgRating)
      }
    }, [data, type])

    const handleClick = (value: number) => {
      if (type === 'input' && onChange) onChange(value)
    }

    const handleMouseEnter = (value: number) => {
      if (type === 'input') setHoverValue(value)
    }

    const handleMouseLeave = () => {
      if (type === 'input') setHoverValue(0)
    }

    const displayRating = type === 'view' ? averageRating : ratingValue

    return (
      <S.Rating>
        {isLoading ? (
          <p>Carregando...</p>
        ) : (
          [1, 2, 3, 4, 5].map((value) => (
            <FiStar
              key={value}
              size={24}
              color={
                (hoverValue || displayRating) >= value ? '#ffc107' : '#e4e5e9'
              }
              onClick={() => handleClick(value)}
              onMouseEnter={() => handleMouseEnter(value)}
              onMouseLeave={handleMouseLeave}
              style={{ cursor: type === 'input' ? 'pointer' : 'default' }}
            />
          ))
        )}
      </S.Rating>
    )
  }
)

Rating.displayName = 'Rating'

export default Rating
