import { forwardRef } from 'react'
import * as S from './styles'
import Dropdown from '@/components/Dropdown'
import { useGetGenres } from '@/hooks/data/useGenre'

interface IGenreDropdown {
  onSelectGenre: (genre: string) => void
}

const GenreDropdown = forwardRef<HTMLInputElement, IGenreDropdown>(
  ({ onSelectGenre }, ref) => {
    const { data: genres, error, isLoading } = useGetGenres()

    if (isLoading) return <p>Carregando gêneros...</p>
    if (error) return <p>Erro ao carregar gêneros.</p>

    // const formattedGenres =
    //   genres?.map((genre) => ({
    //     key: genre.id,
    //     value: genre.name
    //   })) || []

    console.log(genres)

    return (
      <S.GenreDropdown>
        {/* <Dropdown
          ref={ref}
          placeholder="Selecione o gênero"
          data={formattedGenres}
          onSelect={onSelectGenre}
        /> */}
      </S.GenreDropdown>
    )
  }
)

GenreDropdown.displayName = 'GenreDropdown'

export default GenreDropdown
