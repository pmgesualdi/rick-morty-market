import { API_URL } from "../constants/providers"
import { getCharacters } from "../queries/getCharacters"

// Source: https://stepzen.com/docs/using-graphql/making-queries-with-fetch

export const fetchCharacters = () => {
  const query = getCharacters()

  return fetch(API_URL, {
    method: 'POST',
  
    headers: {
      "Content-Type": "application/json"
    },
  
    body: JSON.stringify({ query })
  })
}
