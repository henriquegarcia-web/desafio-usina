import { Dispatch, RefObject, SetStateAction } from 'react'

export type SetStateBooleanType = Dispatch<SetStateAction<boolean>>
export type SetStateStringType = Dispatch<SetStateAction<string>>

export type RefButtonType = RefObject<HTMLButtonElement>
export type RefDivType = RefObject<HTMLDivElement>

// ==================== MOVIES

export interface IMovie {
  title: string
  description: string
  genre: string
  releaseYear: number
  duration: number
}

export interface IMovieForm {
  movieTitle: string
  movieDescription: string
  movieGenre: string
  movieReleaseYear: number
  movieDuration: number
}
