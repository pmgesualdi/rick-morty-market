// Source: https://rickandmortyapi.com/documentation

export const getCharacters = (pageNumber: number = 1) => `
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
