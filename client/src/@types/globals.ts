import { Dispatch, RefObject, SetStateAction } from 'react'

export type SetStateBooleanType = Dispatch<SetStateAction<boolean>>
export type SetStateStringType = Dispatch<SetStateAction<string>>

export type RefButtonType = RefObject<HTMLButtonElement>
export type RefDivType = RefObject<HTMLDivElement>

// ==================== MOVIES

// export interface IMovie {
//   movieTitle: string
//   movieDescription: string
//   movieGenre: string
//   movieReleaseYear: number
//   movieDuration: number
// }

export interface IMovie {
  movieTitle: string
  movieDescription: string
  movieGenre: string
  movieReleaseYear: number
  movieDuration: number
}
