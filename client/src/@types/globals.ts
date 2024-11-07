import { Dispatch, RefObject, SetStateAction } from 'react'

export type SetStateBooleanType = Dispatch<SetStateAction<boolean>>
export type SetStateStringType = Dispatch<SetStateAction<string>>

export type RefButtonType = RefObject<HTMLButtonElement>
export type RefDivType = RefObject<HTMLDivElement>

// ==================== MOVIES

export interface IMovie {
  movie_id: string
  user_id: string
  title: string
  description: string
  genre: string
  year: number
  duration: number
}

export interface IMovieInput {
  title: string
  description: string
  genre: string
  year: number
  duration: number
}

export interface IMovieForm {
  movieTitle: string
  movieDescription: string
  movieGenre: string
  movieReleaseYear: number
  movieDuration: number
}

export interface IMovieFilter {
  searchTerm?: string
  genre?: string
  year?: number
  duration?: { min: number; max: number }
}

// ==================== RATING

export interface IRatingInput {
  userId: string
  movieId: string
  rating: number
  review?: string
}

export interface IRating {
  userId: string
  movieId: string
  rating: number
  review?: string
  createdAt: string
}
