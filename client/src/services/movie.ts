import api from '@/lib/fetch'

const getAllMovies = async () => {
  const response = await api.get('/movies')
  return response.data
}

const getMovieById = async (id: string) => {
  const response = await api.get(`/movies/${id}`)
  return response.data
}

const createMovie = async (movieData: { title: string; genre: string }) => {
  const response = await api.post('/movies', movieData)
  return response.data
}

const updateMovie = async (
  id: string,
  movieData: { title?: string; genre?: string }
) => {
  const response = await api.put(`/movies/${id}`, movieData)
  return response.data
}

const deleteMovie = async (id: string) => {
  const response = await api.delete(`/movies/${id}`)
  return response.data
}

export { getAllMovies, getMovieById, createMovie, updateMovie, deleteMovie }
