const getHeaderTexts = (sectionId: string) => {
  switch (sectionId) {
    case 'saved_movies':
      return {
        title: 'Filmes Salvos',
        subtitle: 'Filmes que você salvou'
      }

    case 'recommended_movies':
      return {
        title: 'Filmes Recomendados',
        subtitle: 'Filmes com base nas sua avaliações'
      }

    default:
      return {
        title: 'Carregando...',
        subtitle: 'Carregando...'
      }
  }
}

export { getHeaderTexts }
