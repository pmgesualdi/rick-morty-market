// Source: https://rickandmortyapi.com/documentation

export const getCharacters = (pageNumber: number = Math.floor(Math.random() * 11)) => `
  {
    characters(page: ${pageNumber}) {
      info {
        count
        pages
      }
      results {
        name
        image
      }
    }
  }
`
